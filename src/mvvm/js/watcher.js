function Watcher(vm, expOrFn, cb) {
    this.cb = cb;
    this.vm = vm;
    this.expOrFn = expOrFn;
    this.depIds = {};

    if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
    } else {
        this.getter = this.parseGetter(expOrFn.trim());
    }

    this.value = this.get();
}

Watcher.prototype = {
    constructor: Watcher,
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.get();
        var oldValue = this.value;
        if (value !== oldValue) {
            this.value = value;
            this.cb.call(this.vm, value, oldValue);
        }
    },
    addDep: function(dep) {
        /**
         * 1. 每次调用 run() 的时候会触发相应属性的 getter
         * getter 里面会触发 dep.depend(), 继而触发这里的 addDep
         * 2. 假如相应属性的 dep.id 已经在当前 watcher 的 depIds里，说明不是一个新属性，仅仅是改变了其值而已
         * 则不需要将当前 watcher 添加到该属性的 dep 里
         * 3. 假如相应属性是新的属性，则将当前 watcher 添加到新属性的 dep 里
         * 如通过 vm.child = {name: 'a'} 改变了 child.name 的值，child.name 就是个新属性
         * 则需要将当前 wathcer(child.name) 加入到新的 child.name 的dep里
         * 因为此时 child.name 是个新值，之前的 setter、dep 都已经失效，如果不把 watcher 加入到 新的 child.name 的dep中
         * 通过 child.name = xxx 赋值的时候，对应的 watcher 就收不到通知，等于失效了
         * 4. 每个子属性的 watcher 在添加到子属性的 dep 的同时，也会添加到父属性的 dep
         * 监听子属性的同时监听父属性的变更，这样，父属性改变时，子属性的watcher也能收到通知进行 update
         * 这一步实在 this.get() --> this.getVMVal() 里面完成， forEach 时会从父级开始取值，间接调用了它的getter
         * 触发了 addDep(), 在整个 forEach 过程，当前 watcher 都会加入到每个父级过程属性的 dep
         * 例如：当前 watcher 的是 'child.child.name'，那么child, child.child, child.child.name 这三个属性的 dep 都会加入当前 watcher
         */

         if (!this.depIds.hasOwnProperty(dep.id)) {
             dep.addSub(this);
             thid.depIds[dep.id] = dep;
         }
    },
    get: function() {
        Dep.target = this;
        var value = this.getter.call(this.vm, this.vm);
        Dep.target = null;
        return value;
    },
    parseGetter: function(exp) {
        if (/[^\w.$]/.test(exp)) {
            return
        }

        var exps = exp.split('.');

        return function(obj) {
            for(var i = 0, len = exps.length; i < len; i++) {
                if (!obj) {
                    return
                }
                obj = obj[exps[i]];
            }
            return obj;
        }
    }
}
