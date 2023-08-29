import { InputContainer } from "./style";

const Filtro = ({ordenar, setOrdenar, setValorMinino, setValorMaximo, setBuscaNome}) => {
   
    
    
    return (
    <div>
        <p>Filtrar</p>
        <select value ={ordenar} onChange={(e) => setOrdenar(e.target.value)}>

            <option value="subir">Subir</option>

            <option value="descer">Descer</option>

        </select>

        <InputContainer>
        <input placeholder ="Valor Mínimo:"type = "number"onChange={(e)  => setValorMinino(e.target.value)}/>
        <input placeholder ="Valor Maximo:" type = "number"onChange={(e) => setValorMaximo(e.target.value)}/>
        <input placeholder ="Buscar Card por nome:" type = "text"onChange={(e) => setBuscaNome(e.target.value)}/>
        </InputContainer>
    </div>)
}


export default Filtro;