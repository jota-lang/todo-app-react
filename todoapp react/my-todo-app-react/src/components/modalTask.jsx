import Modal from 'react-modal'
import CloseIcon from '@mui/icons-material/Close';
import { Input } from './input';
import { Button } from './button';



Modal.setAppElement('#root');


export const ModalTask = ({isOpen, isClose}) =>{

    return(
        <>
            <Modal
            isOpen={isOpen}
            onRequestClose={isClose}
            className={'mx-auto my-80 w-[400px] h-min bg-gray-300 rounded-md'}
            >
            <div className='flex justify-center flex-col p-6'>
                <span className='flex justify-end'>
                <button 
                onClick={isClose}
                ><CloseIcon/></button>
                </span>
            <Input
            name={'Nome Tarefa:'}
            placeholder={'comprar comida'}
            />
            <Input
            name={'Data e hora:'}
            placeholder={'14/11/2024'}
            />
            <Button
            nameButton={'Adicionar'}
            valueButton={null}
            />
            </div>
            </Modal>
        </>
    )
}
