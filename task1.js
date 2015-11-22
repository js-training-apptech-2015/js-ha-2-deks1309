//Function work as the native Function.prototype.bind permanently assigning context ctx and arguments to a function fn.
function bind(fn, ctx) {

    var args = Array.prototype.slice.call(arguments);
    args.shift();
    args.shift();
   
    return function () {
        return fn.apply(ctx, args.concat(Array.prototype.slice.call(arguments)));
        };

}