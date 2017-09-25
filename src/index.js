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
              res = (l === 1) ? factorialSimple(x) : factorialminTwo(x);
            } //1
            else if (10 <= x < 100) {
              res = (l === 2) ? factorialSimple(x) : factorialminTwo(x);
            } //2
            else if(x = 100) {
                res= (l === 3) ? factorialSimple(x) : factorialminTwo(x);
            } //3
            //console.log(mult);
            mult*=res;//myltiply all items
           // console.log(mult);
        } //for
        //console.log(mult);
   var str = mult+""; //to string   
   //console.log(str);
   //console.log(typeof(str));
    
    //zeros count
    var zeroscount = 0;
    var zero;    
    var matches_array = str.split('');
     //console.log(matches_array);
      for (var k = matches_array.length; k--;){          
         zero = matches_array[k];
          console.log(zero);
          if(zero === '0'){
              zeroscount++;
          }else{
              break;
          }             
      }//for     
    return zeroscount;
    } //zeros