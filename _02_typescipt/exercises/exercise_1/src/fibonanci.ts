let sumFibo: number = 0;

for (let i: number = 0; i <= 19; i++) {
    let temp: number = fibonanci(i)
    console.log(temp);
    sumFibo += temp
}

console.log('Tổng 20 số đầu tiên của dãy fibonanci là: ' + sumFibo);

function fibonanci(num: number): number {
    if (num = 0) {
        return 0;
    }
    if (num = 1) {
        return 1;
    }
    return fibonanci(num - 1) + fibonanci(num - 2);
}
