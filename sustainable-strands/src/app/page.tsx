"use client"
import axios from 'axios';


const MyComponent: React.FC = () => {

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/Transactions', {
                params: { 'Hemp product type': 'Hemp Seed'}
            });
            console.log( "Data: ", response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    const postData = async () => {
        const data = {
            "Type of Hemp Business": "Weed",
            "Name of Primary Contact": "Henry"
        };
        try {
            const response = await axios.post('http://localhost:3000/api/Profiles', data,{});

            console.log( "Profile created: ", response.data);
        } catch (error) {
            console.error('Error Posting data:', error);
        }
    };

    const updateData = async () => {
        const data = await fetchData();
        console.log("id: ", data[0]["_id"]);
        const updateData = {
            id: data[0]["_id"],
            "Name of Primary Contact": "Henry Roberts"
        }
        try{
            const response = await axios.put('http://localhost:3000/api/Profiles', updateData, {})

            console.log("Response: ", response);
        }catch(error){
            clearInterval
        }
    }
    const deleteData = async () => {
        const id = "6693041ecdfe1b77e04076fd";
        try{
            const response = await axios.delete('http://localhost:3000/api/Profiles', {
                data : { id }
            })

            console.log("Response: ", response);            

        }catch(error){
            console.error('Error Deleting data:', error);
        }
    }

    
    
    return (
        <div>
            <input className='text-black'/>
            <button onClick={fetchData}>Fetch Filtered Data</button>
            <button onClick={postData}>Post Data</button>
            <button onClick={updateData}>Update Data</button>
            <button onClick={deleteData}>Delete Data</button>
        </div>
    );
};

export default MyComponent;
