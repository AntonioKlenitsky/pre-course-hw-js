let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};


let copyNewAdress = {...passportWithAddress.address};
copyNewAdress.city = 'Bobryisk';


console.log(passportWithAddress.address.city);
console.log(copyNewAdress.city);