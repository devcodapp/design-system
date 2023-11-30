import { ModalBody as ModalBodyNextUI, ModalBodyProps } from "@nextui-org/react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ModalContentProps extends ModalBodyProps {
    children: ReactNode
}

export function ModalContent({ children , className , ...props }: ModalContentProps) { 
    return (
        <ModalBodyNextUI className={twMerge("py-0 px-0 flex flex-1 flex-col gap-3", className)} {...props}>
            {children}
        </ModalBodyNextUI>
    )
}