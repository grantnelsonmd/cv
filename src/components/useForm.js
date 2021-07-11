import { useState, useEffect } from "react";

let submitEventInfo;

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        submitEventInfo = e;
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(()=>{
        if (Object.keys(errors).length === 0 && isSubmitting){
            callback(submitEventInfo);
        }
    }, [errors]);

    return{handleChange, handleSubmit, values, errors};
}

export default useForm;