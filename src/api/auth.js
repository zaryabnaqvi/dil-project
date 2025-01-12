import { BASE_URL } from "../Enviroment/env"

export const signUp =  async(body)=>{
    const response = await fetch(`${BASE_URL}/auth/signup`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    if(response.ok){
        const data = await response.json();
        // localStorage.setItem('token', data.data.token);
        localStorage.setItem('user',JSON.stringify(data.data));
        return data;
    }else{
        throw new Error('Invalid credentials');
    
    }
}

// export const signIn = async(body)=>{
//     const response = await fetch(`${BASE_URL}/auth/login`,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     });
//     if(response.ok){
//         const data = await response.json();
//         // localStorage.setItem('token', data.data.token);
//         localStorage.setItem('user',JSON.stringify(data.data));
//         return data;
//     }else{
//         throw new Error('Invalid credentials');
    
//     }
// }
export const signIn = async (body) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Invalid credentials');
        }

        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data.data));
        return data;
    } catch (error) {
        throw new Error(error.message || 'Network error occurred');
    }
};
