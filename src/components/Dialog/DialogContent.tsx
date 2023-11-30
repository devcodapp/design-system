import { ModalBody as DialogBodyNextUI, ModalBodyProps } from "@nextui-org/react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface DialogContentProps extends ModalBodyProps{
    children: ReactNode
}

export function DialogContent({children, className, ...props}: DialogContentProps) { 
    return (
        <DialogBodyNextUI className={twMerge("py-0 px-0 flex flex-1 flex-col gap-3 ", className)} {...props}>
            {children}
        </DialogBodyNextUI>
    )
}