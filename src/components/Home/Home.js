import embalos from "../../embalos.json"
import { Imagem } from "../../style";
import { HomeContainer } from "./style";


const Home = ({ carrinho, setCarrinho, valorMaximo, valorMinimo, BuscaNome, ordenar, }) => {

    const addEmbalosNoCarrinho = (embalo) => {
        const embaloTemNoCarrinho = carrinho.find((card) => card.name === embalo.name)

        if(embaloTemNoCarrinho) {  
            const outroCarrinho = carrinho.map((card) => 
                embaloTemNoCarrinho.name === card.name ?
                {...card, quantidade: card.quantidade + 1}
                :
                card
                )
                setCarrinho(outroCarrinho)

        }else {
            setCarrinho([...carrinho, {...embalo, quantidade: 1 }])
        }
        
    }

    return (

        
        <HomeContainer >
            {embalos
            .sort((embalo1, embalo2) => {
                return ordenar === "subir" ? embalo1.name.localeCompare(embalo2.name)
                :
                embalo2.name.localeCompare(embalo1.name)
            })
            .filter((embalo) => {
                return valorMinimo ? embalo.valor >= valorMinimo : embalo 
            })
            .filter ((embalo) => {
                return valorMaximo ? embalo.valor <= valorMaximo : embalo
            })
            .filter ((embalo) => {
                return embalo.name.toLowerCase().includes(BuscaNome.toLowerCase())

            })
        
            .map((embalo) => {
                return (
                    <div  key={embalo.id}> 
                        <Imagem src={embalo.imagem} alt={embalo.name}/>
                        <p> {embalo.name}</p>
                        <p>Card: {embalo.card}</p>
                        <p>Preço: {embalo.valor}</p>
                        <button onClick={() => addEmbalosNoCarrinho(embalo)}>Comprar</button>
                    </div>
                )
            })}

        </HomeContainer>
    )
};


export default Home;