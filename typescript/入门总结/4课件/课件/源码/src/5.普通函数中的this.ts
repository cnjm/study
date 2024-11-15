interface T {
    a: number;
    fn: (x: number) => void;
}

let obj: T = {
    a: 1,
    fn(this: T, x: number) {
        // this
        // (<T>this).b;
        // this
    }
}

// obj.fn(1);