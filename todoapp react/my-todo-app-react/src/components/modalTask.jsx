import Modal from 'react-modal'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from './button';

Modal.setAppElement('#root');


export const ModalTask = ({isOpen, isClose,handleInputName,handleInputDate,vlBtn}) =>{
    return(
        <>
            <Modal
            isOpen={isOpen}
            onRequestClose={isClose}
            className='mx-auto my-80 w-[400px] h-min bg-gray-300 rounded-md font-mono'
            >
            <div className='flex justify-center flex-col p-6'>
                <span className='flex justify-end'>
                <button 
                onClick={isClose}
                ><CloseIcon
                className='text-red-600'
                /></button>
                </span>
                <label className='text-2xl mt-2'>Nome da Tarefa:</label>
                <input  
                className='h-12 p-4 mt-2 text-2xl rounded-lg' 
                placeholder='escreva sua tarefa'
                onChange={handleInputName}
                required
                >
                </input>

                <label className='text-2xl mt-2'>Data da Tarefa:</label>
                <input  
                className='h-12 p-4 mt-2 text-2xl rounded-lg' 
                placeholder='18/11/2024'
                onChange={handleInputDate}
                required
                >
                </input>

                <Button
                nameButton={'Adicionar'}
                valueButton={vlBtn}
                />
            </div>
            </Modal>
        </>
    )
}
