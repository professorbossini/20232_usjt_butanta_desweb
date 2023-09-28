import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
  return <div className="container border rounded mt-2">
      {/*linha para o título da página  */}
      <div className="row border-bottom m-2">
        <h1 className="display-5 text-center">Seus pedidos</h1>
      </div>

      {/* linha para o primeiro pedido */}
      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
          <div className="card">
            {/* cabeçalho do cartão */}
            <div className="card-header text-muted">22/04/2023</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-hdd fa-2x"></i>
              </div>
              <div className="flex-grow-1 ms-2 border">
                <h4 className="text-center mt-1">SSD</h4>
                <p className="text-center">SSD Kingston A400</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
          <div className="card">
            {/* cabeçalho do cartão */}
            <div className="card-header text-muted">20/05/2023</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-book fa-2x"></i>
              </div>
              <div className="flex-grow-1 ms-2 border">
                <h4 className="text-center mt-1">Livro</h4>
                <p className="text-center">Concrete Mathematics - Donald Knuth</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
          <div className="card">
            {/* cabeçalho do cartão */}
            <div className="card-header text-muted">20/05/2023</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-laptop fa-2x"></i>
              </div>
              <div className="flex-grow-1 ms-2 border">
                <h4 className="text-center mt-1">Notebook</h4>
                <p className="text-center">Notebok Dell i5 8Gb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)