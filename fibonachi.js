function fibo(n, lastlast, last) {
    if (n === 0)
        return lastlast;

    if (n === 1)
        return last;

    return fibo(n - 1, last, lastlast + last);
}


console.log(
    fibo(200, 0, 1)
);
