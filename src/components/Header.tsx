import { ReactNode } from "react";

interface HeaderProps {
    title: string;
    subtitle: string;
    back?: ReactNode;
    primaryActionBtn?: ReactNode;
    secondaryActionBtn?: ReactNode;
    tertiaryActionBtn?: ReactNode;  
}

export default function Header ({title,subtitle,back,primaryActionBtn,secondaryActionBtn, tertiaryActionBtn}:HeaderProps) {
    return (
<div  className="p-4 sm:px-9 sm:py-8 font-system-font gap-2 flex flex-wrap justify-between bg-neutral-100 text-black">
    <div className="flex gap-3 gap-x-4 flex-wrap">
        <div className="flex flex-col justify-center">
            <div className="text-sm mb-1">
            {back? back: null}
            </div>
            <h1 className="text-lg sm:text-2xl font-bold text-neutral-800">{title}</h1>
            <h3 className="text-sm text-neutral-600">{subtitle}</h3>
        </div>
        <div className="flex mb-2 items-center hidden sm:flex">
            {secondaryActionBtn? secondaryActionBtn: null}
        </div>
    </div>
    <div className="flex flex-wrap gap-2 items-center justify-normal">
        <div className="flex items-center sm:hidden">
            {secondaryActionBtn ? secondaryActionBtn : null}
        </div>
        <div>
        {tertiaryActionBtn ? tertiaryActionBtn : null}
        </div>
        <div>
        {primaryActionBtn ? primaryActionBtn : null}
        </div>
    </div>
</div>
    )
}