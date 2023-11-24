import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StHeader1 () {
    return (
        <div  className="font-system-font flex flex-row justify-between items-center px-6 py-3 bg-neutral-0 text-black">
    <div className="flex flex-col w-auto">
        <div className="flex flex-row">
            <div className="p-3 pt-0">
                <h1 className="w-min text-2xl font-bold text-neutral-800">Restaurants</h1>
                <h3 className="text-sm text-neutral-600">36 entries found</h3>
            </div>
        </div>
    </div>
    <div className=" flex flex-row h-min">
        <button className=" bg-white px-3 py-1.5 rounded border font-bold mr-3">Cancel</button>
        <button className="bg-blue-600 text-white px-3 py-1.5 rounded font-bold flex flex-row items-center"><FontAwesomeIcon className="w-4 h-4 mr-3" icon={faCheck} /> Save</button>
    </div>
</div>
    )
}