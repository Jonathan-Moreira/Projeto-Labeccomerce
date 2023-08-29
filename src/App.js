import { useEffect, useState } from "react";
import Carrinho from "./components/Carrinho/Carrinho";
import Filtro from "./components/Filtro/Filtro";
import Home from "./components/Home/Home";
import { EmbalosContainer } from "./style";


export default function App() {
const [carrinho, setCarrinho] = useState([])
const [ordenar, setOrdenar] = useState ("subir") 
const [valorMaximo, setValorMaximo] = useState (0)
const [valorMinino, setValorMinino] = useState (0)
const [BuscaNome, setBuscaNome] = useState ("")


useEffect (() => {
  if(carrinho.length > 0) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
  }
}, [carrinho])

useEffect (() => {
  const carroLocalStorage = localStorage.getItem("carrinho")
  if(carroLocalStorage) {
    setCarrinho(JSON.parse(carroLocalStorage))
  }
}, [])

  return(
    <EmbalosContainer>
      <Filtro 
      ordenar={ordenar} setOrdenar={setOrdenar} 
      setValorMaximo={setValorMaximo}
      setValorMinino={setValorMinino} 
      setBuscaNome={setBuscaNome}/>

      <Home carrinho={carrinho} setCarrinho={setCarrinho} 
      ordenar ={ordenar} 
      valorMaximo ={valorMaximo} 
      valorMinino ={valorMinino}
      BuscaNome ={BuscaNome}/>
      

      <Carrinho carrinho = {carrinho} setCarrinho = {setCarrinho}/>
    </EmbalosContainer>


  );
}
















// import Card from './components/Card/Card';
// import { Header } from './components/Header/Header';
// import { GlobalStyle } from './GlobalStyle';
// import { DetailsPage } from './pages/DetailsPage';
// import { Homepage } from './pages/Homepage';
// import { HomePageContainer } from './pages/Homepage/style';

// function App() {
//   return (
//     <div className="App">
//       {/* <GlobalStyle/>
//       <Homepage/> */}
//       {/* <DetailsPage/> */}
//     </div>
//   );
// }

// export default App;
