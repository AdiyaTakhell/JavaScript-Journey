// Minimum requirements for different loan types
const minIncomeForDuplex = 60000;      // Annual income needed for duplex loan
const minCreditScoreForDuplex = 700;   // Credit score needed for duplex loan

const minIncomeForCondo = 45000;       // Annual income needed for condo loan
const minCreditScoreForCondo = 680;    // Credit score needed for condo loan

const minIncomeForCar = 30000;         // Annual income needed for car loan
const minCreditScoreForCar = 650;      // Credit score needed for car loan

// Determines loan eligibility based on income and credit score
function getLoanMessage(annualIncome, creditScore) {
    // Highest tier: Qualifies for all loans (duplex requires highest thresholds)
    if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
        return "You qualify for a duplex, condo, and car loan."
    } 
    // Mid tier: Qualifies for condo and car (but not duplex)
    else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
        return "You qualify for a condo and car loan."
    } 
    // Lowest tier: Qualifies only for car loan
    else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
        return "You qualify for a car loan."
    } 
    // Doesn't meet any loan requirements
    else {
        return "You don't qualify for any loans."
    }
}

// Example usage:
// console.log(getLoanMessage(65000, 720));  // "You qualify for a duplex, condo, and car loan."
// console.log(getLoanMessage(50000, 690));  // "You qualify for a condo and car loan."
