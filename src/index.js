module.exports = function zeros(expression) {
    // your solution
    function factorialSimple(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorialSimple(n - 1);
    }

    function factorialminTwo(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorialminTwo(n - 2);
    }
    var arr = expression.split("*");
    //console.log(arr);
    for (i = 0; i < arr.length; i++) {
        var fitem = arr[i];
        //console.log(fitem);
        var fitem_p = parseInt(fitem);
        //console.log(fitem_p);
        if (fitem_p) {
            var Clo = fitem.lastindexOf('!',2);
            //console.log(Clo);
            if (Clo !== -1) {
                //factorialSimple(fitem_p);
            } else {
                //factorialminTwo(fitem_p);
            }

        }

    }
}


