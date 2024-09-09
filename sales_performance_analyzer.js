// Task 1 Implement calculateAverageSales function
function calculateAverageSales(sales) 
{ let total = sales.reduce((sum , sale) => sum + sale, 0); // This totals the array buy adding them
    let average = total / sales.length; // This is dividing the total by the amount of entries in the array
    return average }

// Task 2 Create determinePerformanceRating function
function determinePerformanceRating(averagesales) 
{if (averagesales > 10000)  {return("Excellent")} // For anything greater than 10000
else if (averagesales >= 7000)  {return("Good")} // For 7000-9999
else if (averagesales >= 4000)  {return("Satisfactory")} // For 4000-6999
else if (averagesales >= 0)  {return("Needs Improvement")} // For 0-3999
else {return("Insert sales average.")}} // To stop infinite loop

// Task 3 Develop findTopAndBottomPerformers function
function findTopAndBottomPerformers(salespersons) 
{salespersons.reduce((accumulator, salesperson))} 

//Beyond this I could not figure out the functions after hours of trying.