//Task 1: Function Declaration

function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log (total);
};

calculateInvoice(100, 0.08, 5);


//Task 2: Function Expression

const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52)
    console.log("Hourly Wage:$" , {hourlyWage});
};

calculateHourlyWage(52000, 40);


//Task 3: 
const calculateLoyaltyDiscount= (amount,years) => { //arrow function named calculateLoyaltyDiscount
    let discountRate = years >= 5 ? amount * 0.15: years >= 3 ? amount * 0.10 : 0.05;// ternary operator creates a shorter way to decide how much discount to give
    let discountedPrice = amount * (1- discountRate);// formula for discount
    return `Discounted Price: $${discounteddPrice.tofixed(2)}`;// return the string using a template literal to get the results like the test data

};

console.log(calculateLoyaltyDiscount(100, 6));
console.log(calculateLoyaltyDiscount(200, 2));// log it to the console

//Task 4: Parameters and Arguments
let calculateShippingCost= (weight, location, expedited = false) =>{
    let Cost = location === "USA" ? 5 + (0.5 * pounds) : 10 + (0.7 * pounds);// if the location is USA then its $5 + $0.5 or else its just cananda and its $10 + $0.7
    let total = expedited ? Cost + 10 : Cost; // we take the total and if expedited shipping is true then its the cost + 10 or else its just the original cost
    return `Shipping Cost: $${totalCost.toFixed(2)}`;// then we use template literal to inside to get it to look like the test data output
};

console.log(calculateShippingCost(10,"USA", true));
console.log(calculateShippingCost(5, "Canada", false));// log it to the console

//Task 5
