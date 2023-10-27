import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
import { createClient } from 'pexels'
export default class App extends React.Component {
  pexelsClient = null

  state = {
    pics: []
  }
  
  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo
    })
    .then(pics => this.setState({pics: pics.photos}))
  }

  componentDidMount(){
    this.pexelsClient = createClient(env.PEXELS_KEY)
  }
  render(){
    return (
      <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
        <div className='col-12'>
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-8">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col-8">
          {
            this.state.pics.map((pic, key) => (
              <div key={key}>
                <img src={pic.src.small} alt={pic.alt} />
              </div>
            ))
          }
        </div>
      </div>
  
    )
  }
}
