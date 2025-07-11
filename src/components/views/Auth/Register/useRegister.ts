import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegister } from "@/types/Auth";
import authService from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const registerSchema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required()
    .min(6, 'Password must be at least 6 characters long')
    .test
    ('at-least-one-uppercae-letter',
        'Password must contain at least one uppercase letter',
        (value) => {
            if (!value) return false;
            return /[A-Z]/.test(value);
        })
    .test
    ('at-least-one-number',
        'Password must contain at least one mumber',
        (value) => {
            if (!value) return false;
            return /[0-9]/.test(value);
    }),
    confirmPassword: yup.string().oneOf([yup.ref('password'), ""], 'Passwords must match').required("Password confirmation is required"),
    
})

const useRegister = () => {
    const router = useRouter();
    const [visiblePassword, setVisiblePassword] = useState({
        password: false,
        confirmPassword: false,
    });
    const handleVisiblePassword = (key: "password" | "confirmPassword") => {
        setVisiblePassword({
            ...visiblePassword,
            [key]: !visiblePassword[key], // Toggle visibility
        })
    }

    const { control, handleSubmit, formState: {errors} , reset, setError} = useForm({
        resolver : yupResolver(registerSchema),
    })

    const registerService = async (payload: IRegister) =>{
        const result = await authService.register(payload);
        return result;
    }

    const {mutate: mutateRegister, isPending: isPendingRegister} = useMutation({
        mutationFn: registerService,
        onError(error){
            setError("root",{
                message: error.message
            })
        },
        onSuccess: () => {
            router.push("/auth/register/success");
            reset();
        }
    })

    const handleRegister = (data: IRegister) => mutateRegister(data)

    return {
        visiblePassword,
        handleVisiblePassword,
        control,
        handleSubmit,
        handleRegister,
        isPendingRegister,
        errors
    }
}

export default useRegister;