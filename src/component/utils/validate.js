export const validateEmailPassword = (email, password) =>{

    const isValidEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

    // const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if(!isValidEmail) return 'Invalid Email'
    //if(!isValidPassword) return 'Invalid password'

    return null
}