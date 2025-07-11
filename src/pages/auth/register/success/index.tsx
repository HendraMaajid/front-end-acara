import AuthLayout from "@/components/layouts/AuthLayout";
import Register from "@/components/views/Auth/Register";
import RegisterSuccess from "@/components/views/Auth/RegisterSuccess";

const RegisterSuccessPage = () => {
    return (
        <AuthLayout titleAuth="Register Success">
            <RegisterSuccess />
        </AuthLayout>
    )
}

export default RegisterSuccessPage