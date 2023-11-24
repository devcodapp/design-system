import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen"
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"


export default function Header3() {
    return (
<div  className="font-system-font flex flex-row justify-between p-6 bg-neutral-100 text-black">        
    <div className="flex flex-col w-auto">
        <div className="flex flex-row items-center ">
            <div className="p-2">
                <h2 className="flex flex-row items-center text-blue-600 font-bold text-sm" ><FontAwesomeIcon className="w-4 h-4 mr-3 mb-0.5" icon={faArrowLeft}/> BACK</h2>
                <div className="flex flex-row space-x-2">
                    <h1 className="w-max text-2xl font-bold text-neutral-800">Create an entry</h1>
                    <button className="bg-white text-black font-semibold px-3 py-1.5 rounded h-min border flex flex-row items-center"><FontAwesomeIcon className="w-3 h-3 mr-3 " icon={faPen} />Edit</button>
                </div>
                <h3 className="text-sm text-neutral-600">36 entries found</h3>
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