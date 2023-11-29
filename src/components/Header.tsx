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
<div  className="font-system-font flex flex-row justify-between p-6 bg-neutral-100 text-black">
    <div className="flex flex-col w-auto">
        <div className="flex flex-row items-center">
            <div className="p-3 pt-0">
            {back? back: null}
                <h1 className="w-min text-2xl font-bold text-neutral-800">{title}</h1>
                <h3 className="text-sm text-neutral-600">{subtitle}</h3>
            </div>
            {secondaryActionBtn? secondaryActionBtn: null}
        </div>
    </div>
    <div className="flex flex-row items-center">
        {terciaryActionBtn? terciaryActionBtn: null}
        {primaryActionBtn? primaryActionBtn: null}
    </div>
</div>
    )
}