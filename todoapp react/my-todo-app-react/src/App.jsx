import { useState } from 'react'
import { Card } from './components/card'
import { ModalTask } from './components/modalTask'
import { Button } from './components/button'

function App() {

  const [ModalIsOpen, setIsOpen] = useState(false)

  function openModalTask(){
    setIsOpen(true)
  }

  function closeModalTask(){
    setIsOpen(false)
  }
  
  return (
    <>
    <div className='flex h-lvh flex-col justify-center items-center space-y-2'>
      <h1 className='text-5xl'>Todo App</h1>
      <div className='flex justify-start w-1/2'>
        <Button
        nameButton={'+ Add Task'}
        valueButton={openModalTask}
        />
       
      </div>
      <div className='flex gap-y-4 flex-col justify-center items-center p-6 w-1/2 h-min  bg-gray-300 rounded-md text-white'>
      <Card taskName= 'ttttttttt' dateTime='12/01/2023'/>
      </div>

    </div>
      <ModalTask
      isOpen={ModalIsOpen}
      isClose={closeModalTask}
      />

    </>
  )
}

export default App
