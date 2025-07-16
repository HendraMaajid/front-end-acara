import AuthLayout from "@/components/layouts/AuthLayout";
import Login from "@/components/views/Auth/Login";

const LoginPage = () => {
    return (
        <AuthLayout titleAuth="Login">
            <Login />
        </AuthLayout>
    )
}

export default LoginPage