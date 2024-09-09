// Task 1 Implement calculateAverageSales function
function calculateAverageSales(sales) 
{ let total = sales.reduce((sum , sale) => sum + sale, 0); // This totals the array buy adding them
    let average = total / sales.length; // This is dividing the total by the amount of entries in the array
    return average }

// Task 2 Create determinePerformanceRating function
function determinePerformanceRating(averagesales) 
{if (averagesales > 10000)  {return("Excellent")} 
else if (averagesales >= 7000)  {return("Good")}
else if (averagesales >= 4000)  {return("Satisfactory")}
else if (averagesales >= 0)  {return("Needs Improvement")}
else {return("Insert sales average.")}}
    

    