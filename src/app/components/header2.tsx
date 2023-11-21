export default function Header2 () {
    return ( 
<div  className="flex flex-row justify-between p-8 bg-neutral-100 text-black">
    <div className="flex flex-col w-auto">
        <div className="flex flex-row">
            <div className="p-2">
                <h1 className="w-min text-2xl font-bold">Restaurants</h1>
                <h3 className="text-sm font-light">36 entries found</h3>
            </div>
            <button className="bg-white text-black font-bold p-2 rounded h-min border">Edit</button>
        </div>
    </div>
    <div className="space-x-2 ">
        <button className=" bg-white p-2 rounded font-bold">Cancel</button>
        <button className="bg-blue-600 text-white p-2 rounded font-bold">Save</button>
    </div>
</div>
    )
}