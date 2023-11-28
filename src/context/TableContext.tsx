import { createContext } from "react";

interface Idata {
  item: string;
  date: string;
  value: string;
  type: string;
}

interface TableContextProps {
  dataNameReceita: Idata[];
  setCategoria: React.Dispatch<React.SetStateAction<string>>
  setBancoDeDados: React.Dispatch<React.SetStateAction<string>>
  categoria: string
  bancoDeDados: string
  setReceitaDespesa: React.Dispatch<React.SetStateAction<string>>
  receitaDespesa: string
  setMonth: React.Dispatch<React.SetStateAction<string>>
  month : string
  whichItem : string
  setWhichItem: React.Dispatch<React.SetStateAction<string>>
}

export const TableContext = createContext<TableContextProps>({
  dataNameReceita: [],
  setCategoria: () => {},
  setBancoDeDados: () => {},
  categoria: '',
  bancoDeDados: '',
  setReceitaDespesa: () => {},
  receitaDespesa: '',
  setMonth: () => {},
  month: '',
  whichItem: '',
  setWhichItem: () => {} 
});
