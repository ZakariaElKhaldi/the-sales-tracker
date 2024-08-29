
const theform = document.getElementById('loginform'); // Corrected capitalization

function navigate_to(page){
    window.location.href = page;
}

async function loginUser(email, password) {
    try {
        const response = await axios.post('http://localhost:8090/api/collections/users/auth-with-password', {
            identity: email,
            password: password,
        });

        const userData = response.data;
        localStorage.setItem('pb_token', userData.token);
        return userData;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
}

theform.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const userData = await loginUser(email, password);
        console.log('User logged in successfully:', userData);
        if(userData.record.field = 'admin'){
            navigate_to('boss.html');
        }
        else{
            navigate_to('staff.html');
        }

    } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
    }
});
