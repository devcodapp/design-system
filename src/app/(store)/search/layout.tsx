import Header1 from "@/app/components/header1";
import Header2 from "@/app/components/header2";
import Header3 from "@/app/components/header3";
import Header4 from "@/app/components/header4";
import { ReactNode } from "react";

export default function StoreLayout({children}:{children: ReactNode}){
    return <div>
        <Header1/>
        <Header2/>
        <Header3/>
        <Header4/>
        
        {children}
    </div>
}