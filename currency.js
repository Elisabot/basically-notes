// working with money in javascript

let myBucks = 10.00;

const toCents = dollars => {
    // convert input to number
    // multiply by 100 to add decimal places
    // store as string
 return (parseFloat(dollars) * 100).toString();
};

const toDollars = cents => {
    // convert back to number
    // divide by 100 to remove decimal places
    // execute toLocaleString() for local formatting
    return (Number.parseFloat(cents)/100).toFixed(2).toLocaleString();
};

console.log('expect toCents to return 1000: ', toCents(myBucks));
console.log('expect toDollars to return 1000', toDollars(1000));

// what does /\d\.\d\d/
// I think it's equivalent to /\./g
// we don't have to use the d's
