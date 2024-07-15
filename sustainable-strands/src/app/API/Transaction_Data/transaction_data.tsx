import axios from "axios"






export default async function Transaction_Data(company_name){

    const date = new Date();

    // Get current month (0-11, so add 1)
    const cur_month = date.getMonth() + 1;

    // Get current year
    const cur_year = date.getFullYear();
    const transaction_data = {
        prev_month_income: 0,
        cur_month_income: 0,
        percent_increase: 0,
        lifetime_income: 0,
        annual_income: 0,
        cur_month_transactions: 0,
        prev_month_transaction:0,
        annual_transactions:0,
        lifetime_transactions: 0
    }



    

    const response = await axios.get('http://localhost:3000/API/Transactions', {
        params: {'Name of Hemp Company' : company_name}
    });
    
    const transactions = response.data;
    transaction_data.lifetime_transactions = transactions.length;
    for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i];
        const numberValue = parseFloat(transaction["Total Sale (US)"].replace(/[$,]/g, ''));
        const date = transaction["Date of Transaction"]
        const parts = date.split('/');
        const month = parts[0]; // First part is the month
        const year = parts[2]; 

        if(cur_month == month && year == cur_year){
            transaction_data.cur_month_income += numberValue;
            transaction_data.cur_month_income += 1;
        }
        if(month == (cur_month - 1) && year == cur_year){
            transaction_data.prev_month_income += numberValue;
        }
        
        
        if(year == cur_year){
            transaction_data.annual_income += numberValue;
            transaction_data.annual_transactions += 1;
        }
        transaction_data.lifetime_income += numberValue;
        
        
       
    }
    if(!(transaction_data.cur_month_income == 0) || !(transaction_data.prev_month_income == 0)){
        transaction_data.percent_increase = ((transaction_data.cur_month_income - transaction_data.prev_month_income)/ transaction_data.prev_month_income) * 100;
    }
    
    return transaction_data;
    
    

    


}
