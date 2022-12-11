function addUpToN(n) {
    return n * (n+1) / 2;
}

let nineZero = 1000000000;

let t0 = performance.now();
addUpToN(nineZero);
let t1 = performance.now();

console.log(`Time elapsed: ${(t1 - t0) / 1000} seconds.`);