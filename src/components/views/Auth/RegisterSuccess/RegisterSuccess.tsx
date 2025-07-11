import { Button } from "@heroui/react";
import Image from "next/image"
import { useRouter } from "next/router";

const RegisterSuccess = () => {
    const router = useRouter();
    return(
        <div className="flex w-screen flex-col items-center justify-center gap-10 p-4">
            <div className="flex flex-col items-center justify-center gap-10">
                <Image
                    src="/images/generals/logo.svg"
                    alt="Logo"
                    width={180}
                    height={180}
                />
                <Image
                    src="/images/ilustrations/email-send.svg"
                    alt="succes-register"
                    width={300}
                    height={300}
                />
            </div>
            <div className="flex flex-col items-center text-center justify-center gap-2">
                <h1 className="text-3xl font-bold text-danger-500">
                    Registration Successful!
                </h1>
                <p className="text-xl font-bold text-default-500">
                    Check your email to activate your account.
                </p>
                <Button className="mt-4" variant="bordered" color="danger" onClick={() => router.push('/')}>Back to Home</Button>
            </div>
        </div>
    )
}

export default RegisterSuccess;
