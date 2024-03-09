

const ERROR_MESSAGES = {
    REQUIRED: "*Campo obligatorio",
    EMAIL_INVALID: "*Por favor, ingrese un Email válido",
    EMAIL_LENGTH: "*El Email no puede superar 35 caracteres",
    PASSWORD_REQUIRED: "*Debe ingresar una contraseña",
    PASSWORD_LENGTH: "*La contraseña debe tener entre 6 y 10 caracteres",
    PASSWORD_DIGIT: "*La contraseña debe tener al menos un número"
};

// regex email javascript
function isEmailValid(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(email);
}

// regex email javascript
function has_a_number(text) {
    return /\d/.test(text);
}

export function validate(userData, errors, setErrors) {
    const errors_aux = { ...errors };

    // Email
    if (!userData.email) {
        errors_aux.email = ERROR_MESSAGES.REQUIRED;
    } else if (userData.email.length > 35) {
        errors_aux.email = ERROR_MESSAGES.EMAIL_LENGTH;
    } else if (!isEmailValid(userData.email)) {
        errors_aux.email = ERROR_MESSAGES.EMAIL_INVALID;
    } else {
        errors_aux.email = "";
    }

    // Password
    if (!userData.password) {
      errors_aux.password = ERROR_MESSAGES.PASSWORD_REQUIRED;
    } else if (userData.password.length < 6 || userData.password.length > 10) {
        errors_aux.password = ERROR_MESSAGES.PASSWORD_LENGTH;
    } else if (!/\d/.test(userData.password)) {
        errors_aux.password = ERROR_MESSAGES.PASSWORD_DIGIT;
    } else {
        errors_aux.password = "";
    }

    setErrors(errors_aux);
}
