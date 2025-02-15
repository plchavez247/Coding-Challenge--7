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
const calculateLoyaltyDiscount= (amount,years) => {
    let discountRate = years >= 5 ? amount * 0.15: years >= 3 ? amount * 0.10: 0.05;
    let discountedPrice = amount * (1- discountRate);
    console.log(discountedPrice);

};

calculateLoyaltyDiscount(100, 6);

//Task 4: Parameters and Arguments
function caluculateShippingCost(weight,location, expedited = false) {
    
};

