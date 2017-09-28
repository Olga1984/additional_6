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
                for (var k = 0; second[k] >= 0; k++) {
                    if (!result[i + k]) {
                        result[i + k] = 0;
                    }
                    result[i + k] += first[i] * second[k];
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
        } //multiply

        //функция для факториала с одним шагом
        function factorialSimple(n) {
            if (n < 0 && n != -1) {
                return;
            } else {
                var factorial;

                factorial = (function () {
                    var process_carries;
                    process_carries = function (big, size) {
                        var carry, i, value;
                        for (i = size - 1; i >= 0; i--) {
                            if (big[i] > 9) {
                                value = big[i];
                                //console.log(big[i]);
                                carry = (value - (value % 10)) / 10;
                                //console.log(carry);
                                big[i] = value % 10;
                                //console.log(big[i]);
                                if (i === 0) {
                                    big.unshift(carry);
                                    //console.log(big);
                                    big = process_carries(big, 1);
                                    //console.log(big);
                                } else {
                                    big[i - 1] += carry;
                                }
                            }
                        }
                        // console.log(big);
                        return big;
                    };
                    factorial = function (x) {
                        var big, carry, j, value, y;
                        big = [1];
                        for (j = 1; 1 <= x && j <= x; j++) {
                            carry = 0;
                            for (y = big.length - 1; y >= 0; y--) {
                                value = big[y] * j;
                                big[y] = value;
                                carry = (value - (value % 10)) / 10;
                            }
                            big = process_carries(big, big.length);
                            //console.log(big);
                        }
                        return big.join('');
                    };
                    return factorial;
                })();
                return factorial(n);
            }
            /* return n ? n * factorialSimple(n - 1) : 1;*/
        }
        //вызывается для четных и нечетных двойных факториалов
        function doubleFactorial_forOddAndEven(n, j) {
            var factorial;
            factorial = (function () {
                var process_carries;
                process_carries = function (big, size) {
                    //console.log(big);
                    //console.log(size);
                    var carry, i, value;
                    for (i = size - 1; i >= 0; i--) {
                        // console.log(size);
                        if (big[i] > 9) {
                            value = big[i];
                            //console.log(big[i]);
                            carry = (value - (value % 10)) / 10;
                            //console.log(carry);
                            big[i] = value % 10;
                            //console.log(big[i]);
                            if (i === 0) {
                                big.unshift(carry);
                                //console.log(big);
                                big = process_carries(big, 1);
                                //console.log(big);
                            } else {
                                big[i - 1] += carry;
                            }
                        }
                    }
                    // console.log(big);
                    return big;
                };
                factorial = function (x) {
                    //console.log(x);
                    var big, carry, value, y;
                    big = [1];
                    for (j; j <= x;) {
                        //console.log(j);
                        carry = 0;
                        for (y = big.length - 1; y >= 0; y--) {
                            value = big[y] * j;
                            big[y] = value;
                            // console.log(big[y]);
                            //console.log(j);
                            //console.log(value);
                            carry = (value - (value % 10)) / 10;
                        }

                        big = process_carries(big, big.length);
                        //console.log(big);
                        j = j + 2;
                    }
                    return big.join('');
                };
                return factorial;
            })();
            return factorial(n);
        } //factorialminTwo_forOddAndEven

        function factorialminTwo(n) {

            if (n < 0 && n != -1) {
                return;
            }
            //разделение на четные и нечетные
            if (n % 2 == 1) {
                var j = 1;
                return doubleFactorial_forOddAndEven(n, j);
            } //if(n % 2 == 1) 
            else if (n % 2 == 0) {
                var j = 2;
                return doubleFactorial_forOddAndEven(n, j);
            } //if(n % 2 == 0)             
        } //factorialminTwo(n)



        //стартовый код zeros
        var arr = expression.split("*");
        //console.log(arr);
        var mult = '1';
        var res;
        for (i = 0; i < arr.length; i++) {
            var fitem = arr[i];
            //console.log(fitem);
            var x = parseInt(fitem); //number
            //console.log(x);
            var l = fitem.lastIndexOf('!'); //номер индекса
            //console.log(l);
            if (x < 10) {
                res = (l === 1) ? factorialSimple(x) : factorialminTwo(x);
            } //1
            else if (10 <= x < 100) {
                res = (l === 2) ? factorialSimple(x) : factorialminTwo(x);
            } //2
            else if (x = 100) {
                res = (l === 3) ? factorialSimple(x) : factorialminTwo(x);
            } //3                     
            //console.log(res);
            mult = multiply(mult, res); //перемножаем-принимает строки
            //console.log(mult);
        } //for(i = 0; i < arr.length; i++)

        //zeros подсчет
        var zeroscount = 0; //инициализация счетчика
        var zero;
        var matches_array = mult.split('');
        //console.log(matches_array);
        //считаем с последнего
        for (var k = matches_array.length; k--;) {
            zero = matches_array[k];
            //console.log(zero);
            if (zero === '0') {
                zeroscount++;
                // console.log(zeroscount);
            } else {
                break;
            }
        } //for     
        return zeroscount;
    } //zeros