let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};


let copyMarried = {...passportMarried};
copyMarried.married = true ;


console.log(passportMarried);
console.log(copyMarried);