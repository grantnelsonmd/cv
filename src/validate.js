export default function validate(values){
    let errors = {};

    if (!values.name.trim()){
        errors.name = "*Please enter name.";
    }

    if (!values.email){
        errors.email = "*Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "*Invalid email address";
    }

    if (!values.message){
        errors.message = "*Please type a message.";
    }

    return errors;
}