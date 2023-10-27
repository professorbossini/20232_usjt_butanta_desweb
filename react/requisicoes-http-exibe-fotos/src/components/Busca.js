import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class Busca extends Component {
  state = {
    termoDeBusca: ''
  }
  onTermoAlterado = (event) => {
    console.log(event.target.value)
    this.setState({termoDeBusca: event.target.value})
  }
  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)  
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex flex-column'>
          <span className="p-input-icon-left w-full">
            <i className="pi pi-search"/>
            <InputText 
              className='w-full'
              onChange={this.onTermoAlterado}
              placeholder={this.props.dica}
              value={this.state.termoDeBusca}
            />
          </span>
          <Button 
            label='OK'
            className='mt-2 p-button-outlined'
          />
        </div>
      </form>
    )
  }
}

Busca.defaultProps = {
  dica: 'Digite algo que deseja ver...'
}
