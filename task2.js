//Function acts the same way as the native Function.prototype.bind, but allows context changing.
function rebind(fn, ctx) {

    fn = fn.original || fn;

    var newFunc = function () {
        return fn.apply(ctx, Array.prototype.slice.call(arguments));
    };
    newFunc.original = fn;

    return newFunc;

}