// Task 1 Implement calculateAverageSales function
function calculateAverageSales(sales) 
{ let total = sales.reduce((sum , sale) => sum + sale, 0); // This totals the array buy adding them
    let average = total / sales.length; // This is dividing the total by the amount of entries in the array
    return average }
    sales = [100, 200, 300, 400]

    