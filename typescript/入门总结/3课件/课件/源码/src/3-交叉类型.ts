interface o1 {x: number; y: string}
interface o2 {z: number}

let o: o1 & o2 = Object.assign({}, {x: 1, y: 'zmouse'}, {z: 2});

// o.u


// let arr = [1,2,3];

// let arr2 = [...arr, 10, 20];

// Promise.resolve();