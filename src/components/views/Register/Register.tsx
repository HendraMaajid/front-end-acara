import { Button, Card, CardBody, Input } from "@heroui/react"
import Image from "next/image"
import Link from "next/link"
import useRegister from "./useRegister"
import { FaEye, FaEyeSlash } from "react-icons/fa6"

const Register = () => {
    const {visiblePassword, handleVisiblePassword} = useRegister()
    return (
        <div className="flex flex-col w-full items-center justify-center gap-10 lg:gap-20 lg:flex-row ">
            <div className="flex w-full lg:w-1/3 flex-col items-center justify-center gap-10">
                <Image
                    src="/images/generals/logo.svg"
                    alt="Logo"
                    width={180}
                    height={180}
                />
                <Image
                    src="/images/ilustrations/login.svg"
                    alt="Login"
                    className="w-2/3 lg:w-full"
                    width={1024}
                    height={1024}
                />
            </div>
            <Card>
                <CardBody className="p-8">
                    <h2 className="text-xl font-bold text-danger-500">Create Account</h2>
                    <p className="text-small">
                        Have an account?&nbsp;
                        <Link href="/login" className="font-semibold text-danger-400">Login Here</Link>
                    </p>
                    <form className="flex w-80 flex-col mt-3 gap-3">
                        <Input type="text" label="Fullname" variant="bordered" autoComplete="off"></Input>
                        <Input type="text" label="Username" variant="bordered" autoComplete="off"></Input>
                        <Input type="email" label="Email" variant="bordered" autoComplete="off"></Input>
                        <Input type={visiblePassword.password ? 'text' : 'password'} label="Password" variant="bordered" autoComplete="off" 
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={() => handleVisiblePassword("password")}>
                                {visiblePassword.password ? <FaEye className="text-xl text-default-400 pointer-events-none" /> : <FaEyeSlash className="text-xl text-default-400 pointer-events-none" />}
                            </button>
                        }></Input>
                        <Input type={visiblePassword.confirmPassword ? 'text' : 'password'} label="Password Confirmation" variant="bordered" autoComplete="off"
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={() => handleVisiblePassword("confirmPassword")}>
                                    {visiblePassword.confirmPassword ? <FaEye className="text-xl text-default-400 pointer-events-none" /> : <FaEyeSlash className="text-xl text-default-400 pointer-events-none" />}
                                </button>
                            }></Input>
                        <Button color="danger" size="lg" type="submit">Register</Button>
                    </form>
                </CardBody>
            </Card>
            

        </div>
    )
}
export default Register