import React from 'react'
import Imagem from './Imagem'
const ListaImagens = ({pics}) => {
  return (
    pics.map((pic, index) => {
      return(
        <Imagem 
          pic={pic.src.small}
          key={index}
        />
      )    
    })
  )
  
}

export default ListaImagens
