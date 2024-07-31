import axios from "axios"






export async function BarGraphData(comp_name){

    type HempCount = {
        [key: string]: number;
    };

    const hemp_count: HempCount = {
        "Hemp Seed":0,
        "Hemp Protein":0,
        "Hemp Plastics":0,
        "Hemp Fiber":0,
        "Hemp Oil":0,
        "Hemp Textiles":0,
        "Hemp Paper":0,
        "Hemp Concrete":0
    }



    for (let key in hemp_count) {
       if (hemp_count.hasOwnProperty(key)) {
            console.log(comp_name);
            const response = await axios.get('http://localhost:3000/api/Transactions', {
                params: {'Hemp product type' : key, 'Name of Hemp Company' : comp_name}
            });
            hemp_count[key] = response.data.length; // Convert the string input to a number
        }
    }

    const sortedArray = Object.entries(hemp_count)
    .sort(([, valueA], [, valueB]) => valueB - valueA); // Sort in descending order

    const sortedHempCount = Object.fromEntries(sortedArray);
    console.log(sortedHempCount);
    return sortedHempCount;
    
    

    


}


export async function PieGraphData(product_type: string){

    type Transactions = {
        [key: string]: number;
    };
    
    const transaction_per_state: Transactions = {
        "AL": 0,
        "AK": 0,
        "AZ": 0,
        "AR": 0,
        "CA": 0,
        "CO": 0,
        "CT": 0,
        "DE": 0,
        "FL": 0,
        "GA": 0,
        "HI": 0,
        "ID": 0,
        "IL": 0,
        "IN": 0,
        "IA": 0,
        "KS": 0,
        "KY": 0,
        "LA": 0,
        "ME": 0,
        "MD": 0,
        "MA": 0,
        "MI": 0,
        "MN": 0,
        "MS": 0,
        "MO": 0,
        "MT": 0,
        "NE": 0,
        "NV": 0,
        "NH": 0,
        "NJ": 0,
        "NM": 0,
        "NY": 0,
        "NC": 0,
        "ND": 0,
        "OH": 0,
        "OK": 0,
        "OR": 0,
        "PA": 0,
        "RI": 0,
        "SC": 0,
        "SD": 0,
        "TN": 0,
        "TX": 0,
        "UT": 0,
        "VT": 0,
        "VA": 0,
        "WA": 0,
        "WV": 0,
        "WI": 0,
        "WY": 0,

    }
    

    const response = await axios.get('http://localhost:3000/api/Transactions', {
        params: {'Hemp product type' : product_type}
    });

    for(let i = 0; i < response.data.length; i++){
        const state = response.data[i]['Buyer state'];
        transaction_per_state[state] += 1;

    }


    



// Convert the sorted array back to an object
    
    return transaction_per_state;
    
    

    


}


export async function LineGraphData(comp_name) {
    const transactionsByMonth = {};
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
  
    // Initialize transactionsByMonth object with all months in the past year, starting from a year ago
    for (let monthOffset = 12; monthOffset >= 0; monthOffset--) {
      const date = new Date(currentYear, currentMonth - monthOffset - 1, 1);
      const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      transactionsByMonth[yearMonth] = 0;
    }
    console.log(comp_name);
    const response = await axios.get('http://localhost:3000/api/Transactions', {
      params: { 'Name of Hemp Company': comp_name }
    });
  
    for (let i = 0; i < response.data.length; i++) {
      const transactionDate = new Date(response.data[i]['Date of Transaction']);
      const yearMonth = `${transactionDate.getFullYear()}-${String(transactionDate.getMonth() + 1).padStart(2, '0')}`;
  
      // Check if the transaction date is within the past year
      const oneYearAgo = new Date(currentYear - 1, currentMonth - 1, 1);
      if (transactionDate >= oneYearAgo) {
        // Extract income from the Total Sale field
        const totalSaleString = response.data[i]['Total Sale (US)'].replace(/[^0-9.-]+/g, '');
        const income = parseFloat(totalSaleString);
  
        // Update income for existing month-year
        if (transactionsByMonth[yearMonth] !== undefined) {
          transactionsByMonth[yearMonth] += income;
        }
      }
    }
  
    // Convert transactionsByMonth to an array and sort it by date
    const sortedTransactions = Object.entries(transactionsByMonth).sort(([a], [b]) => new Date(a) - new Date(b));
  
    // Convert back to an object (if needed) or return the sorted array
    const sortedTransactionsByMonth = sortedTransactions.reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  
    return sortedTransactionsByMonth;
  }
