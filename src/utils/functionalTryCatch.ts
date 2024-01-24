async function tryCatch(fn: Function, ...args: any) {
    try {
        return [null, fn(...args)];
    } catch (error) {
        return [error];
    }
}

export default tryCatch;
