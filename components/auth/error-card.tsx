import { AlertTriangle } from "lucide-react"

import { CardWrapper } from "@/components/auth/card-wrapper"

export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Oops! Something went wrong!"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login"
        >
            <div className="w-full flex justify-center items-center">
                <AlertTriangle className="h-4 w-4 text-destructive" />
            </div>
        </CardWrapper>
    )
}