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

export const ShowDepartments =  async()=>{
    const response = await fetch(`${BASE_URL}/departments/get-all`,{
        method: 'GET',   
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

export const updateDepartment = async(id,data) => {
    const response = await fetch(`${BASE_URL}/departments/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if(response.ok){
        const data = await response.json();
        return data;
    } else{
        throw new Error('Invalid credentials');
    }
}

export const deleteDepartment = async (id)=>{
    const response = await fetch(`${BASE_URL}/departments/delete/${id}`, {
        method: 'DELETE',
    });
    if(response.ok){
        const data = await response.json();
        return data;
    } else{
        throw new Error('Invalid credentials');
    }
}




export const AddService =  async(body)=>{
    const response = await fetch(`${BASE_URL}/departments/services/new`,{
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
        throw new Error('Invalid credentials');
    
    }
}


export const ShowServices =  async()=>{
    const response = await fetch(`${BASE_URL}/departments/services/get-all`,{
        method: 'GET',   
    });
    if(response.ok){
        const data = await response.json();
        return data;
    }else{
        throw new Error('Invalid credentials');
    
    }
}

export const UpdateService = async(id,data) => {
    const response = await fetch(`${BASE_URL}/departments/services/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if(response.ok){
        const data = await response.json();
        return data;
    } else{
        throw new Error('Invalid credentials');
    }
}

export const DeleteService = async (id)=>{
    const response = await fetch(`${BASE_URL}/departments/services/delete/${id}`, {
        method: 'DELETE',
    });
    if(response.ok){
        const data = await response.json();
        return data;
    } else{
        throw new Error('Invalid credentials');
    }
}


// /api/departments/get-by-id/67222e6f670487648a43aca4

export const getDepartmentById = async(id )=>{
    const response = await fetch(`${BASE_URL}/departments/get-by-id/${id}`)
    const data = await response.json()
    return data
}