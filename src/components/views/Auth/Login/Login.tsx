import { Button, Card, CardBody, Input, Spinner } from "@heroui/react"
import Image from "next/image"
import Link from "next/link"
import useLogin from "./useLogin"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { Controller } from "react-hook-form"
import { cn } from "@/utils/cn"

const Login = () => {
    const { isVisible, toggleVisibility, control, handleSubmit, handleLogin, errors, isPendingLogin } = useLogin()
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
                    <h2 className="text-2xl font-bold text-danger-500">Login</h2>
                    <p className="text-small mb-4 mt-2">
                        Don{"'"}t have an account?&nbsp;
                        <Link href="/auth/register" className="font-semibold text-danger-400">Register Here</Link>
                    </p>
                    {errors.root && (
                        <div className="mt-3">
                            <p className="text-danger-500 text-sm">{errors?.root?.message}</p>
                        </div>
                    )}
                    <form className={cn("flex w-80 flex-col mt-3", Object.keys(errors).length > 0 ? "gap-2" : "gap-3")} onSubmit={handleSubmit(handleLogin)}>
                        <Controller name="identifier" control={control} render={({ field }) => (
                            <Input {...field} type="text" label="Email/Username" variant="bordered" autoComplete="off" isInvalid={errors.identifier !== undefined} errorMessage={errors.identifier?.message}></Input>
                        )} />
                        <Controller name="password" control={control} render={({ field }) => (
                            <Input {...field} type={isVisible ? 'text' : 'password'} label="Password" variant="bordered" autoComplete="off"
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                        {isVisible ? <FaEye className="text-xl text-default-400 pointer-events-none" /> : <FaEyeSlash className="text-xl text-default-400 pointer-events-none" />}
                                    </button>
                                } 
                                isInvalid={errors.password !== undefined} errorMessage={errors.password?.message}></Input>
                        )} />

                        <Button color="danger" size="lg" type="submit">
                            {isPendingLogin ? <Spinner color="white" size="sm" /> : "Login"}
                        </Button>
                    </form>
                </CardBody>
            </Card>


        </div>
    )
}
export default Login