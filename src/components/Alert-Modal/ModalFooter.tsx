import { ModalFooter as ModalFooterNextUI, ModalFooterProps as ModalFooterPropsNextUI} from "@nextui-org/react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ModalFooterProps extends ModalFooterPropsNextUI {
    children: ReactNode;
}

export default function ModalFooter({className , children , ...props}: ModalFooterProps) {
    return(
        <ModalFooterNextUI className={twMerge("justify-between border-solid border-t border-gray-200", className)} {...props}>
            {children}
        </ModalFooterNextUI>
    )
}