import AuthLayout from "@/components/layouts/AuthLayout"
import Activation from "@/components/views/Auth/Activation";
import authService from "@/services/auth.service"

interface PropTypes {
    status: "success" | "failed",
}

const ActivationPage = (props: PropTypes) => {
    return (
        <AuthLayout titleAuth="Account Activation">
            <Activation {...props} />
        </AuthLayout>
    )
}

export async function getServerSideProps(context: { query: { code: string } }) {
    try {
        const result = await authService.activate({ code: context.query.code });
        if (result.data.data) {
            return {
                props: {
                    status: "success",
                }
            }
        } else {
            return {
                props: {
                    status: "failed",
                }
            }
        }
    } catch (error) {
        return {
            props: {
                status: "failed",
                message: error instanceof Error ? error.message : "Unknown error occurred"
            }
        }
    }
}

export default ActivationPage