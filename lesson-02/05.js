let passport = {
    name: "Petr",
    surname: "Petrov",
};

let copy = {...passport = {
    name: "Ivan",
    surname: "Petrov",
}};
 
console.log(passport);
console.log(copy);