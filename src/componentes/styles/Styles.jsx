import styled from 'styled-components'

export const CenterContainer = styled.div`
  position: absolute;
  top: 15px;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: #3936c0;
  transition: width 500ms;

  @media screen and (max-width: 420px){
    width: 250px;
  }
  @media screen and (max-width: 350px){
    width: 190px;
  }
`

export const Image = styled.img`
  width: 95%;
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const InputButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const TextContainer = styled.textarea`
  border-radius: 10px;
  padding: 10px;
`
export const ComentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`

export const ListComentUl = styled.ul`
  width: 100%;
`

export const ListComentContainer = styled.li`
  word-break: keep-all;
  width: 100%;
  height: max-content;
  font-size: 14px;
  color: white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  list-style: none;
  background-color: rgba(225, 225, 225, 0.14);
`

export const Button = styled.button`
  background-color: ${props => {
    return props.isOn ? 'black' : 'gray'
  }};
  border-radius: 10px;
  width: 100%;
  height: 32%;
  color: white;
  pointer-events: ${props => {
    return props.isOn ? 'auto' : 'none'
  }};
  font-size: 17px;
  cursor: pointer;
`
