import './style.css';
import tryCatch from './utils/functionalTryCatch';

async function name(params: string) {
    const result = params;
    return result;
}

async function main() {
    const [error, result] = await tryCatch(name, 'Hello World');

    if (error) {
        console.error(error);
        return error;
    }

    console.log(result);
    return result;
}

main();
