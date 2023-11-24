import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"


export default function StHeader2() {
    return (
<div  className="font-system-font flex flex-row justify-between items-center px-6 py-3 bg-neutral-0 text-black">        
    <div className="flex flex-col w-auto">
        <div className="flex flex-row items-center ">
            <div className="p-2 flex flex-row items-center">
            <FontAwesomeIcon className="w-6 h-6 mr-6 text-blue-600" icon={faArrowLeft}/>
                <div className="flex flex-row space-x-2">
                
                    <div className="flex flex-col">
                        <h1 className="w-max text-2xl font-bold text-neutral-800">Create an entry</h1>
                        <h3 className="text-sm text-neutral-600">Content-Type to define invoices data structure</h3>
                    </div>
                </div>
                
            </div>  
        </div>
    </div>
    <div className=" flex flex-row items-center">
        <button className=" bg-white px-3 py-1.5 rounded border font-bold mr-3">Cancel</button>
        <button className="bg-blue-600 text-white px-3 py-1.5 rounded font-bold flex flex-row items-center"><FontAwesomeIcon className="w-4 h-4 mr-3" icon={faCheck} /> Save</button>
    </div>
</div>
    )
}