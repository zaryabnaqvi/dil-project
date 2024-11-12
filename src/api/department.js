import { BASE_URL } from "../Enviroment/env"

export const CreateDepartment =  async(body)=>{
    const response = await fetch(`${BASE_URL}/departments/new`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    if(response.ok){
        const data = await response.json();
        // localStorage.setItem('token', data.data.token);
        // localStorage.setItem('user',JSON.stringify(data.data));
        return data;
    }else{
        throw new Error('Invalid credentials');
    
    }
}

