// filepath: /js-learning-project/js-learning-project/src/basics/dataTypes.js
const dataTypes = () => {
    // String
    const str = "Hello, World!";
    console.log("String:", str);
    console.log("Type:", typeof str);

    // Number
    const num = 42;
    console.log("Number:", num);
    console.log("Type:", typeof num);

    // Boolean
    const bool = true;
    console.log("Boolean:", bool);
    console.log("Type:", typeof bool);

    // Undefined
    let undef;
    console.log("Undefined:", undef);
    console.log("Type:", typeof undef);

    // Null
    const n = null;
    console.log("Null:", n);
    console.log("Type:", typeof n);

    // Symbol
    const sym = Symbol('unique');
    console.log("Symbol:", sym);
    console.log("Type:", typeof sym);
};

dataTypes();