import { BASE_URL } from "../Enviroment/env";

export const RequestService =  async(body)=>{
    const response = await fetch(`${BASE_URL}/service-requests/new-request`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    if(response.ok){
        const data = await response.json();
        return data;
    }else{
        throw new Error('Error');
    
    }
}

    export const fetchAllRequests =  async()=>{
        const response = await fetch(`${BASE_URL}/service-requests/get-all`,{
            method: 'GET',   
        });
        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            const errorData = await response.json();
            console.error("API Error:", errorData); // Log detailed error response
            throw new Error(errorData.message || "Error");
            // throw new Error('Error');
        
        }
    }

    // export const updateServiceStatus = async(id,data) => {
    //     const response = await fetch(`${BASE_URL}/service-requests/status/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     });
    //     if(response.ok){
    //         const data = await response.json();
    //         return data;
    //     } else{
    //         throw new Error('Error');
    //     }
    // }

    export const updateServiceStatus = async (id, data) => {
        const response = await fetch(`${BASE_URL}/service-requests/status/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            return await response.json();
        } else {
            const errorData = await response.json();
            console.error("API Error:", errorData); // Log detailed error response
            throw new Error(errorData.message || "Error");
        }
    };
    
