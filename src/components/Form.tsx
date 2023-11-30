import { useState } from "react";
import { nameitens, nameItensDespesas, responsaveis,  } from "../data/ItemName";
import {
  handleChangeCategoria,
  handleChangeDatabase,
  handleChangeReceitaDespesa,
  handleChangeMonth,
  handleSubmit,
  handleWhichItem,
  handleValueSearch,
  handleChangeResponsible
} from "../helpers/formFunc";
import TableDisplayClube from "./TableDisplayClube";
import { useContext } from "react";
import { TableContext } from "../context/TableContext";

const Form = () => {
  const {
    categoria,
    setCategoria,
    bancoDeDados,
    setSearchValue,
    setBancoDeDados,
    setDiretoria,
    setMonth,
    receitaDespesa,
    setReceitaDespesa,
    setWhichItem,
  } = useContext(TableContext);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  

  const decideCategoriaDespesas = () => {
    switch (categoria) {
      case "mês":
        return (
          <div className="flex mt-8 items-center flex-col">
            <label className="pb-2 text-gray-300" htmlFor="second_choice">
              Pesquisar por qual mês?
            </label>
            <select
              onChange={(e) => handleChangeMonth(e, setMonth)}
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
              onChange={(e) => handleWhichItem(e, setWhichItem)}
              id="third_choice"
              defaultValue="categoria"
              className="p-1 w-48 bg-gray-100  rounded"
              name="third_choice"
            >
              <option disabled value="categoria">
                Selecionar
              </option>
              {nameItensDespesas.map((item, index) => (
                <option key={index} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        );
      case "valor":
        return (
          <div className="flex mt-8 items-center flex-col">
            <label className="pb-2 text-gray-300" htmlFor="value_choice">
              Pesquisar por um valor
            </label>
            <input
              type="text"
              id="value_choice"
              onChange={(e) => handleValueSearch(e, setSearchValue)}
              className="p-1 w-48 bg-gray-100  rounded"
              name="value_choice"
            ></input>
          </div>
        );
      case "diretoria": return (
        <div className="flex mt-8 items-center flex-col">
            <label className="pb-2 text-gray-300" htmlFor="diretoria">
              Pesquisar por qual Diretoria?
            </label>
            <select
              onChange={(e) => {
                handleChangeResponsible(e, setDiretoria)
              }}
              id="diretoria"
              defaultValue="categoria"
              className="p-1 w-48 bg-gray-100  rounded"
              name="diretoria"
            >
              <option disabled value="categoria">
                Selecionar
              </option>
              {responsaveis.map((item, index) => (
                <option key={index} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </select>
          </div>
      )
    }
  };

  const decideCategoria = () => {
    switch (categoria) {
      case "mês":
        return (
          <div className="flex mt-8 items-center flex-col">
            <label className="pb-2 text-gray-300" htmlFor="second_choice">
              Pesquisar por qual mês?
            </label>
            <select
              onChange={(e) => handleChangeMonth(e, setMonth)}
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
              onChange={(e) => handleWhichItem(e, setWhichItem)}
              id="third_choice"
              defaultValue="categoria"
              className="p-1 w-48 bg-gray-100  rounded"
              name="third_choice"
            >
              <option disabled value="categoria">
                Selecionar
              </option>
              {nameitens.map((item, index) => (
                <option key={index} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        );
      case "valor":
        return (
          <div className="flex mt-8 items-center flex-col">
            <label className="pb-2 text-gray-300" htmlFor="value_choice">
              Pesquisar por um valor
            </label>
            <input
              type="text"
              id="value_choice"
              onChange={(e) => handleValueSearch(e, setSearchValue)}
              className="p-1 w-48 bg-gray-100  rounded"
              name="value_choice"
            ></input>
          </div>
        );
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="bg-transparent h-full">
          <TableDisplayClube></TableDisplayClube>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            handleSubmit(e, setIsSubmitted);
          }}
          className="flex py-20 flex-col items-center"
        >
          <label htmlFor="first_choice" className="pb-2 text-gray-300">
            Escolha abaixo o banco de dados
          </label>
          <select
            onChange={(e) =>
              handleChangeDatabase(
                e,
                setBancoDeDados,
                setCategoria,
                setMonth,
                setReceitaDespesa
              )
            }
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
          {bancoDeDados === "clube_itajubense" ? (
            <div className="flex mt-8 items-center flex-col">
              <label htmlFor="despesa_receita" className="pb-2 text-gray-300">
                Escolha abaixo a opção desejada
              </label>
              <select
                onChange={(e) =>
                  handleChangeReceitaDespesa(
                    e,
                    setReceitaDespesa,
                    setCategoria,
                    setMonth
                  )
                }
                id="despesa_receita"
                defaultValue="opcoes"
                className="p-1 w-48 bg-gray-100 rounded"
                name="despesa_receita"
              >
                <option disabled value="opcoes">
                  Opções
                </option>
                <option value="receita">Receitas</option>
                <option value="despesas">Despesas</option>
              </select>
              {receitaDespesa === "receita" ? (
                <div className="flex mt-8 items-center flex-col">
                  <label className="pb-2 text-gray-300" htmlFor="second_choice">
                    Pesquisar por qual categoria?
                  </label>
                  <select
                    onChange={(e) =>
                      handleChangeCategoria(e, setCategoria, setMonth)
                    }
                    id="second_choice"
                    defaultValue="categoria"
                    className="p-1 w-48 bg-gray-100  rounded"
                    name="second_choice"
                  >
                    <option disabled value="categoria">
                      Categoria
                    </option>
                    <option disabled>Dia</option>
                    <option value="mês">Mês</option>
                    <option value="item">Item</option>
                    <option value="valor">Valor</option>
                    <option value="geral">Geral</option>
                  </select>
                  {categoria ? decideCategoria() : null}
                </div>
              ) : receitaDespesa === 'despesas' ? (
                <div className="flex mt-8 items-center flex-col">
                  <label className="pb-2 text-gray-300" htmlFor="second_choice">
                    Pesquisar por qual categoria?
                  </label>
                  <select
                    onChange={(e) =>
                      handleChangeCategoria(e, setCategoria, setMonth)
                    }
                    id="second_choice"
                    defaultValue="categoria"
                    className="p-1 w-48 bg-gray-100  rounded"
                    name="second_choice"
                  >
                    <option disabled value="categoria">
                      Categoria
                    </option>
                    <option disabled>Dia</option>
                    <option value="mês">Mês</option>
                    <option value="item">Item</option>
                    <option value="diretoria">Diretoria</option>
                    <option value="valor">Valor</option>
                    <option value="geral">Geral</option>
                  </select>
                  {categoria ? decideCategoriaDespesas() : null}
                </div>
              ) : null}
            </div>
          ) : null}
          {bancoDeDados ? (
            categoria ? (
              <button
                type="submit"
                className="mt-10 hover:scale-105 duration-300 bg-gradient-to-br from-neutral-400 h-8 to-neutral-800 rounded-full w-48"
              >
                Pesquisar
              </button>
            ) : null
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;
