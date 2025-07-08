import PageHead from "@/components/commons/PageHead"
import { ReactNode } from "react"

interface PropTypes {
    titleAuth?: string,
    children?: ReactNode
}

const AuthLayout = (props : PropTypes) => {
    const { titleAuth, children } = props
    return (
        <>
            <PageHead title={titleAuth} />
            <section className="max-w-screen-3xl 3xl:container p-6">
                { children }
            </section>
        </>
    )
}
export default AuthLayout