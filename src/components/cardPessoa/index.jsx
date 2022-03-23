import './style.css'

const CardPessoa = ({array}) => {
    return array.map((pessoa, index) => <div key={index} className="cardPessoa">
            <h1>Dev: {pessoa.nome}</h1>
            <h3>Idade: {pessoa.idade}</h3>
            <h3>Origem: {pessoa.origem}</h3>
        </div>)
}
export default CardPessoa