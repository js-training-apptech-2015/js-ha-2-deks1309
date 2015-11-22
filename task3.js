//Function accumulates Number values in the following manner: var acc = add(1).add(2).add(3).add(4);
function add(n) {

    var numb = (this instanceof Number) ? this : 0;
    return numb + n;

}
Number.prototype.add = add;