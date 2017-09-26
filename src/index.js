module.exports = function zeros(expression) {
        // your solution
//функция для умножения
        function multiply(first, second) {
        // your solution
        if (parseInt(first) == 0 || parseInt(second) == 0) {
            return '0';
        }
        first = first.split('').reverse();
        second = second.split('').reverse();
        var result = [];

        for (var i = 0; first[i] >= 0; i++) {
            for (var j = 0; second[j] >= 0; j++) {
                if (!result[i + j]) {
                    result[i + j] = 0;
                }
                result[i + j] += first[i] * second[j];
                //console.log(result);
            }
        }
        //console.log(result);
        for (var i = 0; result[i] >= 0; i++) {
            if (result[i] >= 10) {
                if (!result[i + 1]) {
                    result[i + 1] = 0;
                }
                result[i + 1] += parseInt(result[i] / 10);
                result[i] %= 10;
            }
        } //for
        //console.log(result);
        return result.reverse().join('');
    }//multiply
    
//функции для подсчета факториалов с разными шагами
        function factorialSimple(n) {
            return n ? n * factorialSimple(n - 1) : 1;
        }

        function factorialminTwo(n) {            
              return n ? n * factorialSimple(n - 1)/(n - 2) : 1;
       }
    //стартовый код zeros
        var arr = expression.split("*");
        //console.log(arr);
        var mult='1';
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
            res = res+"";            
        //console.log(res);
           mult = multiply(mult, res);//перемножаем
           //console.log(mult);
        } //for
        
    //zeros count
    var zeroscount = 0;//инициализация счетчика
    var zero;    
    var matches_array = mult.split('');
     console.log(matches_array);
    //считаем с последнего
      for (var k = matches_array.length; k--;){          
         zero = matches_array[k];
          //console.log(zero);
          if(zero === '0'){
              zeroscount++;
              console.log(zeroscount);
          }else{
              break;
          }             
      }//for     
    return zeroscount;
    } //zeros