import React, { useEffect, useState } from 'react'
import ListItem from './componentes/ListItem'
import headerimg from './img/headerimg.svg'
import { Button,CenterContainer, Image, ImageContainer, InputButtonContainer, TextContainer } from './componentes/styles/Styles'

const App = () => {
  const [text, setText] = useState([])
  const [input, setInput] = useState()



  function getInput(e){
   setInput(e.target.value)
  }


  function HandleClick() {
    let ElementInput = document.getElementById('input')
    if (ElementInput.value) {
      setText([...text, ElementInput.value])
      ElementInput.value = ''
    }
  }
  return (
    <CenterContainer>
      <ImageContainer>
        <Image src={headerimg} alt="imagem de pessoas conversando" />
      </ImageContainer>
      <InputButtonContainer>
        <TextContainer onChange={getInput} placeholder="Escreva aqui o seu comentário" id="input" cols="30" rows="4"/>
        <Button isOn={input} onClick={HandleClick}>Comentar</Button>
      </InputButtonContainer>
      <ListItem text={text} />
    </CenterContainer>
  )
}

export default App
