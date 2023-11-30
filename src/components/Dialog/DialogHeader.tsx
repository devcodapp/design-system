import { ModalHeader as DialogHeaderNextUI, ModalHeaderProps} from "@nextui-org/react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface DialogHeaderProps extends ModalHeaderProps{
    children: ReactNode;
}

export default function ModalHeader ({className , children , ...props}: DialogHeaderProps) {
    return (
        <DialogHeaderNextUI className={twMerge("pt-6 w-full border-solid flex justify-between border-b border-gray-200 flex-col pb-6", className)} {...props}>
            {children}
        </DialogHeaderNextUI>
    );

}