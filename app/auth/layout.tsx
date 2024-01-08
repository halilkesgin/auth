import { ReactNode } from "react"

const AuthLayout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <div>
            <nav className="bg-red-500 text-white">
                
            </nav>
            {children}
        </div>
    )
}

export default AuthLayout