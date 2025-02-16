//Task 1: Function Declaration

function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;// using formula to calculate final invoice amount
    console.log (`Total Invoice: $${total.toFixed(2)}`);//using to fixed to round total
};

calculateInvoice(100, 0.08, 5);
calculateInvoice(500, 0.1, 20);


//Task 2: Function Expression

const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52)// using formula to calculate hourly wage
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);//using to fixed to round hourlywage
};

calculateHourlyWage(52000, 40);
calculateHourlyWage(75000, 35);


//Task 3: Arrow function
const calculateLoyaltyDiscount= (amount,years) => { //arrow function named calculateLoyaltyDiscount
    let discountRate = years >= 5 ? 0.15: years >= 3 ? 0.10 : 0.05;// ternary operator creates a shorter way to decide how much discount to give
    let discountedPrice = amount * (1- discountRate);// formula for discount
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;// return the string using a template literal to get the results like the test data

};

console.log(calculateLoyaltyDiscount(100, 6));
console.log(calculateLoyaltyDiscount(200, 2));// log it to the console

//Task 4: Parameters and Arguments
let calculateShippingCost= (weight, location, expedited = false) =>{
    let Cost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight);// if the location is USA then its $5 + $0.5 or else its just cananda and its $10 + $0.7
    let total = expedited ? Cost + 10 : cost; // we take the total and if expedited shipping is true then its the cost + 10 or else its just the original cost
    return `Shipping Cost: $${total.toFixed(2)}`;// then we use template literal to inside to get it to look like the test data output
};

console.log(calculateShippingCost(10,"USA", true));
console.log(calculateShippingCost(5, "Canada", false));// log it to the console

//Task 5: Returning Values
 function calculateLoanInterest(principal, rate, years) {// writing the function
    let interest = principal * rate * years  // using the given forumla for interest 
    return `Total Interest: $${interest.toFixed(2)}`;//return the total interest rounded to decimal places
    
 };

 console.log(calculateLoanInterest(1000, 0.05, 3));
 console.log(calculateLoanInterest(5000, 0.07, 5)); //log it to the console

 //Task 6: Higher-Order Functions

 let transactions = [500, 1200, 3000, 800, 2200];
 function filterHighValueTransactions(transactions, filterFunction){ //creating the function
    return transactions.filter(filterFunction);//filtering through the array and return the amounts greater than $1000 
 };

 console.log(filterHighValueTransactions(transactions, amount => amount > 1000));// log it to the conols

 //Task 7: Closures
 function createBudgetTracker(){
    let balance = 0; // this will store the total amount of money spent
    return function(expense){
        balance -= expense; //subtracting the expense from the balance
        console.log(`Current Balance: -$${balance}`); // since we're tracking expenses it is going to be a - in the template literal

    };
 };

 let budget = createBudgetTracker();
 budget(300);
 budget(200); //using test data to get expected output

 //Task 8:Recursion in JavaScript

 function calculateGrowth(years, revenue) {
    if (years >= 10) { //when years are 10 or greater we return revenue because it will go until we reach 10 or greater
        return revenue.toFixed(2); //this returns the revenue rounded to decimal places
    }
    return calculateGrowth(years + 1, revenue * 1.05);//using recursion to calculate revenue growth
    };

    console.log(`Projected Revenue: $${calculateGrowth(8, 1000)}`);
    console.log(`Projected Revenue: $${calculateGrowth(5, 5000)}`); //using template literal to get "Projected Revenue:"


 