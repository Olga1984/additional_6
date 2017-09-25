module.exports = function zeros(expression) {
        // your solution
        function factorialSimple(n) {
            return n ? n * factorialSimple(n - 1) : 1;
        }

        //function factorialminTwo(n) {            
        //       return n ? n * factorialSimple(n - 2) : 1;
       // }
        var arr = expression.split("*");
        //console.log(arr);
        var mult=1;
        var res;
        for (i = 0; i < arr.length; i++) {
            var fitem = arr[i];
            //console.log(fitem);
            var x = parseInt(fitem); //number
            //console.log(x);
            var l = fitem.lastIndexOf('!'); //count for !
            //console.log(l);
            if (x < 10) {
                if (l === 1) {
                    res = factorialSimple(x);
                } else {
                    res = factorialminTwo(x);
                }
            } //1
            else if (10 <= x < 100) {
                if (l === 2) {
                    res = factorialSimple(x);
                } else {
                    res = factorialminTwo(x);
                }
            } //2
            else if (x = 100) {
                if (l === 3) {
                    res = factorialSimple(x);
                } else {
                    res = factorialminTwo(x);
                }
            } //3
            mult*=res;
        } //for
        console.log(mult);
   var str = mult+"";    
   //console.log(str);
   //console.log(typeof(str));
    
    //zeros count
    var zeroscount = 0;
    var zero;
    var regexp = /0/g;
    var matches_array = str.match(regexp);
      for (k = 0; k < matches_array.length; k++){
         zero = matches_array[k];
          //console.log(zero);          
        zeroscount++;         
      }//for     
    return zeroscount;
    } //zeros