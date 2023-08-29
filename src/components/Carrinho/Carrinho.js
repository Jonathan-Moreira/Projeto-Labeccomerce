const Carrinho = ({carrinho, setCarrinho}) => {

const removerEmbalosDoCarrinho = (embalo) => {
    const novoCarrinho = carrinho.map((card) => 
      card.name === embalo.name ? {...card, quantidade: card.quantidade - 1}
      :
      card
    ).filter ((card) => card.quantidade > 0)
    setCarrinho(novoCarrinho)
}


const totalValor = carrinho.reduce ((acumulador, embalo) => {
    return acumulador + embalo.valor * embalo.quantidade
}, 0)


    return(
        <div>
            <p>Preparando</p>
            {carrinho.map((card) => {
                    return(
                        <di>
                            <p>Nome: {card.name}</p>
                            <p>Quantidade: {card.quantidade}</p>
                            <button onClick ={() => removerEmbalosDoCarrinho (card)}>Remover</button>
                        </di>
                    )
                })
            }
            <p>Total: {totalValor}</p>
        </div>
    )
}
 


export default Carrinho;