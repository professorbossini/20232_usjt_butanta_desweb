import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react"; //imr
import ReactDOM from "react-dom"; //imrd
import { EstacaoClimatica } from "./EstacaoClimatica";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null,
    };
    console.log("construtor");
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear();
    //new Date(ano, mes(0, 11), dia(1, 31))
    //21/06
    const d1 = new Date(anoAtual, 5, 21);
    //24/09
    const d2 = new Date(anoAtual, 8, 24);
    //22/12
    const d3 = new Date(anoAtual, 11, 22);
    //21/03
    const d4 = new Date(anoAtual, 2, 21);
    const sul = latitude < 0;
    if (data >= d1 && data < d2) return sul ? "Inverno" : "Verão";
    if (data >= d2 && data < d3) return sul ? "Primavera" : "Outono";
    if (data >= d3 || data < d4) return sul ? "Verão" : "Inverno";
    return sul ? "Outono" : "Primavera";
  };

  icones = {
    Primavera: "fa-seedling",
    Verão: "fa-umbrella-beach",
    Outono: "fa-tree",
    Inverno: "fa-snowman",
  };

  obterLocalizacao = () => {
    //1. Obter a localização com a API de geolocalização
    window.navigator.geolocation.getCurrentPosition(
      (posicao) => {
        //2. Extrair a data atual do sistema
        let data = new Date();
        //3. Obter o nome da estação usando a latitude e a data atual
        let estacao = this.obterEstacao(data, posicao.coords.latitude);
        //4. Obter o nome do icone usando o nome da estação para indexar o mapa de icones
        let icone = this.icones[estacao];
        //5. Atualizar o estado da aplicação, o que faz com que a tela seja atualizada
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: data.toLocaleTimeString(),
          icone: icone,
        });
      },
      (erro) => {
        console.log(erro);
        this.setState({ mensagemDeErro: `Tente novamente mais tarde` });
      }
    );
  };

  componentDidMount() {
    this.obterLocalizacao();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      // responsividade, margem acima
      <div className="container mt-2">
        {/* uma linha, conteúdo centralizado, display é flex */}
        <div className="row justify-content-center">
          {/* oito colunas das doze disponíveis serão usadas para telas médias em diante */}
          <div className="col-md-8">
            {/* um cartão Bootstrap */}
            <EstacaoClimatica
              icone={this.state.icone}
              estacao={this.state.estacao}
              latitude={this.state.latitude}
              longitude={this.state.longitude}
              data={this.state.data}
              mensagemDeErro={this.state.mensagemDeErro}
              obterLocalizacao={this.obterLocalizacao}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
