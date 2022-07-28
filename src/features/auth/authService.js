import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const login = async (userData) => {
    const response = await axios.post(API_URL, userData);
    console.log(response);  
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

const logout = () => {
    localStorage.removeItem('user');
}

const authService = {
    login, 
    logout,
}

export default authService;