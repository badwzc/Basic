Function.prototype._bind = function(context, ...args) {
    if(!context ||  context === null) {
        context = window
    };

    let fn = new Symbol();
    context[fn] = this;
    const _this = this;

    let result = function(...innerArgs) {

        if(this instanceof _this) {
            this[fn] = _this
            this[fn](...args, ...innerArgs);
            delete this[fn];
        } else {
            context[fn].call(context, ...args);
            delete context[sym];
        }
    }

    result.prototype = Object.create(this.prototype);
    return result;
}