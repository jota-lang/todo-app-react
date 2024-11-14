export const Button = ({nameButton, valueButton}) =>{
    return(
        <>
        <button 
        className="text-2xl mt-4 bg-purple-600 text-white p-3 rounded-md"
        onClick={valueButton}
        >{nameButton}
        </button>
        </>
        
    )
}
