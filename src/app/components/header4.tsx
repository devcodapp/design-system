import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"

export default function Header4() {
    return (
        <div  className="flex flex-row justify-between p-8 bg-neutral-100 text-black">
            <div className="flex flex-col w-auto">
                <div className="flex flex-row">
                    <div className="p-2">
                        <h1 className="w-min text-2xl font-bold">Restaurants</h1>
                        <h3 className="text-sm font-light flex flex-row items-center justify-between">Category <FontAwesomeIcon className="w-3 h-3" icon={faArrowRight} /> <strong>Name</strong></h3>
                    </div>
                    <button className="bg-white text-black font-bold p-2 rounded h-min border">Edit</button>
                </div>
            </div>
            <div>
                <button className="bg-blue-600 text-white p-2 rounded font-bold">+ Add Entry</button>
            </div>
        </div>
            )
}