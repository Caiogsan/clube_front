import { useState, useEffect } from "react";
import { nameitens } from "../data/ItemName";
import { itemsData } from "../data/itemsData";


interface Idata {
    date: string,
    item: string,
    responsible: string,
    type: string,
    value: string
    __v: string
    _id : string
}


const Form = () => {
  const [bancoDeDados, setBancoDeDados] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [receitaDespesa, setReceitaDespesa] = useState<string>("")
  const [month, setMonth] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [data, setData] = useState([])
  const [dataName, setDataName] = useState<string[]>([])
  const handleChangeDatabase = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBancoDeDados(e.target.value);
    setCategoria('')
    setMonth('')
    setReceitaDespesa('')
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
   console.log(dataName)
   // setIsSubmitted(true)
  }

  const handleChangeReceitaDespesa = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReceitaDespesa(e.target.value)
    setCategoria('')
    setMonth('')
  }
    
  const handleChangeCategoria = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoria(e.target.value);
    setMonth('')
  }
    
  const handleChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setMonth(e.target.value);

  const decideCategoria = () => {
    switch (categoria) {
      case "mes":
        return (
          <div className="flex mt-8 items-center flex-col">
            <label className="pb-2 text-gray-300" htmlFor="second_choice">
              Pesquisar por qual mês?
            </label>
            <select
              onChange={(e) => handleChangeMonth(e)}
              id="third_choice"
              defaultValue="categoria"
              className="p-1 w-48 bg-gray-100  rounded"
              name="third_choice"
            >
              <option disabled value="categoria">
                Mês
              </option>
              <option value="janeiro">Janeiro</option>
              <option value="fevereiro">Fevereiro</option>
              <option value="março">Março</option>
              <option value="abril">Abril</option>
              <option value="junho">Junho</option>
              <option value="julho">Julho</option>
              <option value="agosto">Agosto</option>
              <option value="outubro">Outubro</option>
              <option value="novembro">Novembro</option>
              <option value="dezembro">Dezembro</option>
            </select>
          </div>
        );
      case "item":
        return (
          <div className="flex mt-8 items-center flex-col">
            <label className="pb-2 text-gray-300" htmlFor="second_choice">
              Pesquisar por qual item?
            </label>
            <select
              onChange={(e) => handleChangeMonth(e)}
              id="third_choice"
              defaultValue="categoria"
              className="p-1 w-48 bg-gray-100  rounded"
              name="third_choice"
            >
              <option disabled value="categoria">
                Opções
              </option>
              {nameitens.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        );
      case "valor":
        return <div></div>;
    }
  };

  useEffect(() => {
    
    const fetchData = async () => {
        const allData = await itemsData()
        for(let i of allData){
            setDataName(oldArray => [...oldArray, i.item])
        }
        
    }

    fetchData()
  }, [])

  return (
    <div>
        {isSubmitted ? <div>
            {data.length > 1 ? <table>
                <thead>
                    
                </thead>
                <tbody>
                    {}
                </tbody>
            </table> : null}
            
        </div> : <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center"
    >
      <label htmlFor="first_choice" className="pb-2 text-gray-300">
        Escolha abaixo o banco de dados
      </label>
      <select
        onChange={(e) => handleChangeDatabase(e)}
        id="first_choice"
        defaultValue="banco_de_dados"
        className="p-1 w-48 bg-gray-100 rounded"
        name="first_choice"
      >
        <option disabled value="banco_de_dados">
          Banco de dados
        </option>
        <option value="clube_itajubense">Clube Itajubense</option>
      </select>
      {bancoDeDados === "clube_itajubense" ? <div className="flex mt-8 items-center flex-col">
      <label htmlFor="first_choice" className="pb-2 text-gray-300">
        Escolha abaixo a opção desejada
      </label>
      <select
        onChange={(e) => handleChangeReceitaDespesa(e)}
        id="first_choice"
        defaultValue="banco_de_dados"
        className="p-1 w-48 bg-gray-100 rounded"
        name="first_choice"
      >
        <option disabled value="banco_de_dados">
          Opções
        </option>
        <option value="receita">Receitas</option>
        <option value="despesas">Despesas</option>
      </select>
        {receitaDespesa ? (
        <div className="flex mt-8 items-center flex-col">
          <label className="pb-2 text-gray-300" htmlFor="second_choice">
            Pesquisar por qual categoria?
          </label>
          <select
            onChange={(e) => handleChangeCategoria(e)}
            id="second_choice"
            defaultValue="categoria"
            className="p-1 w-48 bg-gray-100  rounded"
            name="second_choice"
          >
            <option disabled value="categoria">
              Categoria
            </option>
            <option disabled>Dia</option>
            <option value="mes">Mês</option>
            <option value="item">Item</option>
            <option value="valor">Valor</option>
            <option value="geral">Geral</option>
          </select>
          {categoria ? decideCategoria() : null}
        </div>
      ) : null}
      </div> : null}
      {bancoDeDados ? (
        categoria ? (
          month ? (
            <button
              type="submit"
              className="mt-10 hover:scale-105 duration-300 bg-gradient-to-br from-neutral-400 h-8 to-neutral-800 rounded-full w-48"
            >
              Pesquisar
            </button>
          ) : null
        ) : null
      ) : null}
    </form>}
    </div>
  );
};

export default Form;
