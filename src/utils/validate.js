

export const checkValidData = (email,password)=>{
    const isEmailValid = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if(!isEmailValid) return "Invalid E-mail";

    if(!isPasswordValid) return "Invalid Password";

    return null;
}