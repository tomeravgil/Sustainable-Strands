import axios from "axios"

export async function get_web_data(company_name: string, product_name: string, time_frame: number){
    // returns json of format: {
    // date: '2024-02-03',
    // views: 1 
    // }

    const date = new Date();

    interface DateValueObject {
        [key: string]: number;
    }
    let searchesByDate: DateValueObject = {};

    const parameters = {"company viewed": company_name, 
        "name of hemp product viewed": product_name
    };
    const response = await axios.get('http://localhost:3000/api/Web_activity_data',{
        params: parameters});
    const visits = response.data;
    for (let i = 0; i < visits.length; i++){
        const date = visits[i]["date of visit"];
        const parts = date.split('/');
        const month = parts[0]; 
        const day = parts[1];
        const year = parts[2]; 
        
       
       
        let keyToCheck = new Date(year + "-" + month + "-" + day).toDateString();

        if (searchesByDate.hasOwnProperty(keyToCheck)) {
            searchesByDate[keyToCheck] += 1;
        } else {
            searchesByDate[keyToCheck] = 1;
        }
    }
    
    let fullSearchesByDate: DateValueObject = {};

    const endDate = new Date();

    let startDate = new Date();
    startDate.setDate(endDate.getDate() - time_frame);

    for( let i = 0; i <= time_frame; i++){

        if (searchesByDate.hasOwnProperty(startDate.toDateString())) {
            fullSearchesByDate[startDate.toDateString()] = searchesByDate[startDate.toDateString()];
        } else {
            fullSearchesByDate[startDate.toDateString()] = 0;
        }
        startDate.setDate(startDate.getDate() + 1);
    }


    const formattedData = Object.entries(fullSearchesByDate).map(([key, value]) => {
        const date = new Date(key);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        return {
          date: formattedDate,
          views: value
        };
      });


    console.log("Data:", formattedData);

    return formattedData;


}