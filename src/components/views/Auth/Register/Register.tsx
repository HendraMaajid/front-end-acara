import { Button, Card, CardBody, Input, Spinner } from "@heroui/react"
import Image from "next/image"
import Link from "next/link"
import useRegister from "./useRegister"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { Controller } from "react-hook-form"
import { cn } from "@/utils/cn"

const Register = () => {
    const { visiblePassword, handleVisiblePassword, control, handleSubmit, handleRegister, errors, isPendingRegister } = useRegister()
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
                    <h2 className="text-2xl font-bold text-danger-500">Create Account</h2>
                    <p className="text-small mb-4 mt-2">
                        Have an account?&nbsp;
                        <Link href="/auth/login" className="font-semibold text-danger-400">Login Here</Link>
                    </p>
                    {errors.root && (
                        <div className="mt-3">
                            <p className="text-danger-500 text-sm">{errors?.root?.message}</p>
                        </div>
                    )}
                    <form className={cn("flex w-80 flex-col mt-3", Object.keys(errors).length > 0 ? "gap-2" : "gap-3")} onSubmit={handleSubmit(handleRegister)}>
                        <Controller name="fullName" control={control} render={({ field }) => (
                            <Input {...field} type="text" label="Fullname" variant="bordered" autoComplete="off" isInvalid={errors.fullName !== undefined} errorMessage={errors.fullName?.message}></Input>
                        )} />
                        <Controller name="username" control={control} render={({ field }) => (
                            <Input {...field} type="text" label="Username" variant="bordered" autoComplete="off" isInvalid={errors.username !== undefined} errorMessage={errors.username?.message}></Input>
                        )} />
                        <Controller name="email" control={control} render={({ field }) => (
                            <Input {...field} type="email" label="Email" variant="bordered" autoComplete="off" isInvalid={errors.email !== undefined} errorMessage={errors.email?.message}></Input>
                        )} />
                        <Controller name="password" control={control} render={({ field }) => (
                            <Input {...field} type={visiblePassword.password ? 'text' : 'password'} label="Password" variant="bordered" autoComplete="off"
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={() => handleVisiblePassword("password")}>
                                        {visiblePassword.password ? <FaEye className="text-xl text-default-400 pointer-events-none" /> : <FaEyeSlash className="text-xl text-default-400 pointer-events-none" />}
                                    </button>
                                } isInvalid={errors.password !== undefined} errorMessage={errors.password?.message}></Input>
                        )} />
                        <Controller name="confirmPassword" control={control} render={({ field }) => (
                            <Input {...field} type={visiblePassword.confirmPassword ? 'text' : 'password'} label="Password Confirmation" variant="bordered" autoComplete="off"
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={() => handleVisiblePassword("confirmPassword")}>
                                        {visiblePassword.confirmPassword ? <FaEye className="text-xl text-default-400 pointer-events-none" /> : <FaEyeSlash className="text-xl text-default-400 pointer-events-none" />}
                                    </button>
                                } isInvalid={errors.confirmPassword !== undefined} errorMessage={errors.confirmPassword?.message}></Input>
                        )} />

                        <Button color="danger" size="lg" type="submit">
                            {isPendingRegister ? <Spinner color="white" size="sm" /> : "Register"}
                        </Button>
                    </form>
                </CardBody>
            </Card>


        </div>
    )
}
export default Register