var sumFibo = 0;
for (var i = 0; i <= 19; i++) {
    var temp = fibonanci(i);
    console.log(temp);
    sumFibo += temp;
}
console.log('Tổng 20 số đầu tiên của dãy fibonanci là: ' + sumFibo);
function fibonanci(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonanci(num - 1) + fibonanci(num - 2);
}
