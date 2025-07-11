import { Button } from "@heroui/react";
import Image from "next/image"
import { useRouter } from "next/router";

interface PropTypes {
    status: "success" | "failed";
}

const Activation = (props: PropTypes) => {
    const router = useRouter();
    const { status } = props;
    return (
        <div className="flex w-screen flex-col items-center justify-center gap-10 p-4">
            <div className="flex flex-col items-center justify-center gap-10">
                <Image
                    src="/images/generals/logo.svg"
                    alt="Logo"
                    width={180}
                    height={180}
                />
                <Image
                    src={status === "success" ? "/images/ilustrations/success.svg" : "/images/ilustrations/pending.svg"}
                    alt="succes-register"
                    width={300}
                    height={300}
                />
            </div>
            <div className="flex flex-col items-center text-center justify-center gap-2">
                <h1 className="text-3xl font-bold text-danger-500">
                    {status === "success" ? "Activation Successful!" : "Activation Failed!"}
                </h1>
                <p className="text-xl font-bold text-default-500">
                    {status === "success" ? "Your account has been activated successfully." : "Confirmation code is invalid"}
                </p>
                <Button className="mt-4" variant="bordered" color="danger" onClick={() => router.push('/')}>Back to Home</Button>
            </div>
        </div>
    )
}

export default Activation;
