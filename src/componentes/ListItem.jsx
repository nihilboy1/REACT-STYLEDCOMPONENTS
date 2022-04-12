import React from 'react'
import {ListComentContainer, ComentContainer, ListComentUl } from './styles/Styles'


const ListItem = (props) => {
  return (
    <ComentContainer>
      <ListComentUl>
        {props.text.map((item, index) => {
          return <ListComentContainer key={index}>{item}</ListComentContainer>
        })}
      </ListComentUl>
    </ComentContainer>
  )
}

export default ListItem
