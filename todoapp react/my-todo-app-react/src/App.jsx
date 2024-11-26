import { useState } from 'react'
import { Card } from './components/card'
import { ModalTask } from './components/modalTask'
import { Button } from './components/button'

function App() {

  const [ModalIsOpen, setIsOpen] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [card, setCard] = useState([]) //criando um array vazio que será preenchido com cada objeto
  const [index, setIndex] = useState(null)

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
    //se os inputs não estiverem vazios deve-se setar a variavel de card com o nome e a data; impede que seja criado um objeto com campo vazios
    if(inputDate != '' || inputName != ''){
      setCard([...card,{nome:inputName, data:inputDate}])
      //resetando o nome e data da tarefa para que não seja criado uma tarefa com as informações gravadas nas variaveis toda vez que clicar no botão
      setInputName('') 
      setInputDate('') 
    }else{
      alert('preencha os campos!')
    }
  }
  
  function deleteTask(index){
    //cria uma nova lista que pega a lista preenchida de tarefas
    let newList = card
    //utiliza o metodo splice para remover o indice passado como parametro e segundo parametro serve pra definir quantos elementos devem ser removidos no caso 1
    newList.splice(index,1)
    //atualiza o estado de card com a nova lista que esta sem o objeto que foi removido
    setCard([...newList])
  }

  function editTask(index){
    setInputName(card[index].nome)
    setInputDate(card[index].data)
    setIndex(index)
    openModalTask()
    
  }
  
  function editingTaks() {
    const updateCard = [...card]
    updateCard[index] = {nome:inputName, data:inputDate}
    setCard(updateCard)
    setIndex(null)
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
          return <Card taskName={valores.nome} dateTime={valores.data} deleteBtn={()=>deleteTask(index)} editBtn={()=>editTask(index)} key={index}/>
        })}
      </div>
      </div>
      <ModalTask
      isOpen={ModalIsOpen}
      isClose={closeModalTask}
      handleInputName={handleInputName}
      vlInputName={inputName}
      vlInputDate={inputDate}
      handleInputDate={handleInputDate}
      vlBtn={index !== null?editingTaks:captureValue}
      />
      

    </>
  )
}

export default App
