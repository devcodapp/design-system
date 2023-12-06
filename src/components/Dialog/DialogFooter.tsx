import { ModalFooter as DialogFooterNextUI, ModalFooterProps } from "@nextui-org/react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface DialogFooterProps extends ModalFooterProps {
  children: ReactNode;
}

export default function ModalFooter({className, children , ...props}: DialogFooterProps) {
  return (
    <DialogFooterNextUI {...props} className={twMerge("justify-between w-full border-solid items-center flex border-t h-[4.25rem] bg-neutral-100 border-neutral-200", className)}>
        {children}
    </DialogFooterNextUI>
  );
}