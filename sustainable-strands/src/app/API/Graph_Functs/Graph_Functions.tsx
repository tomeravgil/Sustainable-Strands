import axios from "axios"






export async function BarGraph(){

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

            const response = await axios.get('http://localhost::3000/api/Transaxtions', {
                params: {'Hemp product type' : key}
            });
        
            let value = prompt(`Enter the count for ${key}:`);
            hemp_count[key] = response.data.length as any; // Convert the string input to a number
        }
    }

    return hemp_count;
    
    

    


}
