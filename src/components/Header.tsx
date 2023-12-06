import { ReactNode } from "react";

interface HeaderProps {
    title: string;
    subtitle: string;
    back?: ReactNode;
    primaryActionBtn?: ReactNode;
    secondaryActionBtn?: ReactNode;
    terciaryActionBtn?: ReactNode;  
}

export default function Header ({title,subtitle,back,primaryActionBtn,secondaryActionBtn,terciaryActionBtn}:HeaderProps) {
    return (
<div  className="px-9 py-8 font-system-font flex flex-col sm:flex-row justify-between bg-neutral-100 text-black">
    <div className="flex gap-4 flex-wrap">
        <div className="flex flex-col justify-center mb-2">
            {back? back: null}
            <h1 className=" text-2xl font-bold text-neutral-800">{title}</h1>
            <h3 className="text-sm text-neutral-600">{subtitle}</h3>
        </div>
        <div className="flex mb-2 items-center">
            {secondaryActionBtn? secondaryActionBtn: null}
        </div>
    </div>
    <div className="flex gap-2 mb-2 items-center">
        {terciaryActionBtn? terciaryActionBtn: null}
        {primaryActionBtn? primaryActionBtn: null}
    </div>
</div>
    )
}