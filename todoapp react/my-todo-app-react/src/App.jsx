import { useState } from 'react'
import { Card } from './components/card'
import { ModalTask } from './components/modalTask'
import { Button } from './components/button'

function App() {

  const [ModalIsOpen, setIsOpen] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [card, setCard] = useState([{nome:'',data:''}])

  function openModalTask(){
    setIsOpen(true)
  }

  function closeModalTask(){
    setIsOpen(false)
  }
  function handleInputName(e){
    setInputName(e.target.value)
  }
  function handleInputDate(e){
    setInputDate(e.target.value)
  }
  function captureValue(){
    if(inputDate != '' || inputName != ''){
      setCard([...card,{nome:inputName, data:inputDate}])
    }else{
      console.log('preencha os botões')
    }
  }
  
  return (
    <>
      <div className='flex h-lvh flex-col justify-center items-center space-y-2 font-mono'>
      <h1 className='text-5xl'>Todo App</h1>
      <div className='flex justify-start w-1/2'>
        <Button
        nameButton={'+ Add Task'}
        valueButton={openModalTask}
        />
      </div>
      <div className='flex gap-y-4 flex-col justify-center items-center p-6 w-1/2 h-min  bg-gray-300 rounded-md text-white'>
        {card.map((valores,index)=>{
          return <Card taskName={valores.nome} dateTime={valores.data} key={index}/>
        })}
      </div>
      </div>

      <ModalTask
      isOpen={ModalIsOpen}
      isClose={closeModalTask}
      handleInputName={handleInputName}
      handleInputDate={handleInputDate}
      vlBtn={captureValue}
      />
    </>
  )
}

export default App
