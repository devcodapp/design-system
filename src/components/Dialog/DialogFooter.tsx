import { ModalFooter as DialogFooterNextUI, ModalFooterProps } from "@nextui-org/react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface DialogFooterProps extends ModalFooterProps {
  children: ReactNode;
}

export default function ModalFooter({className, children , ...props}: DialogFooterProps) {
  return (
    <DialogFooterNextUI {...props} className={twMerge("justify-between w-full border-solid border-t border-gray-200", className)}>
        {children}
    </DialogFooterNextUI>
  );
}