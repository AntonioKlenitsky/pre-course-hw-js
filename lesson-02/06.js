let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};


let copyPassport = {...passportWithAddress};
copyPassport.address[1] = 'Bobruisk';


console.log(passportWithAddress.address.city);
console.log(copyPassport.address[1]);