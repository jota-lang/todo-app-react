import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const Card  = ({taskName, dateTime, deleteBtn, editBtn}) =>{

   

    return(

        <div className="flex gap-2 bg-white text-black w-11/12 p-4 
        rounded-md text-2xl">
            <input type="checkbox" className="appearance-none w-10 h-10 m-4 bg-gray-300 rounded-full checked:bg-blue-500"></input>
            <div>
                <p className="font-medium">{taskName}</p>
                <p className="text-xl text-gray-500">{dateTime}</p>
            </div>
            <div className='mt-4 fixed ml-[750px] text-gray-500'>
                <button
                 onClick={deleteBtn}
                >
                <DeleteOutlineOutlinedIcon fontSize='large'/>
                </button>
                <button
                onClick={editBtn}
                >
                <EditOutlinedIcon fontSize='large'/>
                </button>
            </div>   
        </div>
    )
}