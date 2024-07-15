import axios from "axios"






export async function BarGraphData(){

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

            const response = await axios.get('http://localhost:3000/API/Transactions', {
                params: {'Hemp product type' : key}
            });
            hemp_count[key] = response.data.length; // Convert the string input to a number
        }
    }

    const sortedArray = Object.entries(hemp_count)
    .sort(([, valueA], [, valueB]) => valueB - valueA); // Sort in descending order

// Convert the sorted array back to an object
    const sortedHempCount = Object.fromEntries(sortedArray);
    return sortedHempCount;
    
    

    


}
