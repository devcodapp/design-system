import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"


export default function Header3() {
    return (
    <div  className="flex flex-row justify-between p-8 bg-neutral-100 text-black">
        
        <div className="flex flex-col w-auto">
        
            <div className="flex flex-row items-center ">
                
                <div className="p-2">
                    <h2 className="flex flex-row items-center text-blue-500"><FontAwesomeIcon className="w-3 h-3" icon={faArrowLeft}/> BACK</h2>
                    <h1 className="w-max text-2xl font-bold">Create an entry</h1>
                    <h3 className="text-sm font-light">36 entries found</h3>
                </div>
                <button className="bg-white text-black font-bold p-2 rounded h-min border">Edit</button>
            </div>
        </div>
        <div className="space-x-2 flex items-center ">
            <button className=" bg-white p-2 rounded font-bold">Cancel</button>
            <button className="bg-blue-600 text-white p-2 rounded font-bold">Save</button>
        </div>
    </div>
    )
}