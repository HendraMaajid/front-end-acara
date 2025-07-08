import AuthLayout from "@/components/layouts/AuthLayout";
import Register from "@/components/views/Register";

const RegisterPage = () => {
    return (
        <AuthLayout titleAuth="Register">
            <Register />
        </AuthLayout>
    )
}

export default RegisterPage