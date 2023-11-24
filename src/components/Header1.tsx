import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"


export default function Header1 () {
    return (
<div  className="font-system-font flex flex-row justify-between p-6 bg-neutral-100 text-black">
    <div className="flex flex-col w-auto">
        <div className="flex flex-row">
            <div className="p-3 pt-0">
                <h1 className="w-min text-2xl font-bold text-neutral-800">Restaurants</h1>
                <h3 className="text-sm text-neutral-600">36 entries found</h3>
            </div>
            <button className="bg-white text-black font-semibold px-3 py-1.5 rounded h-min border flex flex-row items-center"><FontAwesomeIcon className="w-3 h-3 mr-3" icon={faPen} />Edit</button>
        </div>
    </div>
    <div>
        <button className="bg-blue-600 text-white px-3 py-1.5 rounded font-bold flex flex-row items-center"><FontAwesomeIcon className="w-4 h-4 mr-3" icon={faPlus} /> Add Entry</button>
    </div>
</div>
    )
}