import { ModalHeader as DialogHeaderNextUI, ModalHeaderProps} from "@nextui-org/react";
import { X } from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface DialogHeaderProps extends ModalHeaderProps{
    children: ReactNode;
    onClose: () => void;
}

export default function ModalHeader({onClose, className, children, ...props }: DialogHeaderProps) {
    return (
      <DialogHeaderNextUI className={twMerge("overflow-visible w-full border-solid flex justify-between h-16 items-center text-center border-b bg-neutral-100 border-gray-200 flex-col", className)} {...props}>
        <div className="flex items-center justify-between w-full">
          {children}
          <button onClick={onClose} className="h-8 w-8 bg-white items-center text-center justify-center flex border border-neutral-200 border-solid rounded ">
          <X size={12} className="text-neutral-600 " />
          </button>
        </div>
      </DialogHeaderNextUI>
    );
}