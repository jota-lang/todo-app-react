export const Input = ({name, placeholder}) =>{
    return (
        <>
            <label 
                className='text-2xl mt-2'>
                {name}
            </label>
            <input 
                type='text'
                placeholder={placeholder}
                className='h-12 p-4 mt-2 text-2xl rounded-lg'
                >
            </input>
        </>
    )
}