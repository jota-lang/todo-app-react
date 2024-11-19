export const Card  = ({taskName, dateTime}) =>{
    return(
        <div className="flex gap-2 bg-white text-black w-11/12 p-4 
        rounded-md text-2xl">
            <input type="checkbox" className="appearance-none w-10 h-10 m-4 bg-gray-300 rounded-md checked:bg-blue-500"></input>
            <div>
                <p className="font-medium">{taskName}</p>
                <p className="text-xl text-gray-500">{dateTime}</p>
            </div>
        </div>
    )
}