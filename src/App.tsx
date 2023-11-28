import React, { useState, useEffect, useContext } from "react";
import Form from "./components/Form";
import { itemsData } from "./data/itemsData";
import { TableContext } from "./context/TableContext";

interface Idata {
  item: string;
  date: string;
  value: string;
  type: string;
}

function App() {
  const [bancoDeDados, setBancoDeDados] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [dataNameReceita, setDataNameReceita] = useState<Idata[]>([]);
  const [receitaDespesa, setReceitaDespesa] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [whichItem, setWhichItem] = useState<string>("")

  useEffect(() => {
    const fetchData = async () => {
      const allData = await itemsData();

      setDataNameReceita(
        allData.filter((objeto: Idata) => objeto.type === "Receita")
      );
    };

    fetchData();
  }, []);

  return (
    <TableContext.Provider value={{ dataNameReceita, setCategoria, categoria, bancoDeDados, setBancoDeDados, receitaDespesa, setReceitaDespesa, month, setMonth, whichItem, setWhichItem }}>
      <div className="bg-gradient-to-br  flex justify-center from-neutral-800 to-neutral-900 min-h-screen">
        <Form></Form>
      </div>
    </TableContext.Provider>
  );
}

export default App;
