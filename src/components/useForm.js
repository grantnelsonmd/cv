import { useState, useEffect, useCallback } from "react";
import validate from "../validate";

const useForm = (callback,validate) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setSubmit(true);
    };

    useEffect(
        ()=>{
            if (Object.keys(errors).length === 0 && submit) {
                callback();
            }
        }
    );

    return{handleChange, values, handleSubmit, errors};
}

export default useForm;