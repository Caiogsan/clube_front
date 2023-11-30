export const handleChangeCategoria = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setCategoria: React.SetStateAction<any>,
  setMonth: React.SetStateAction<any>
) => {
  setCategoria(e.target.value);
  setMonth("");
};

export const handleValueSearch = (
  e: React.ChangeEvent<HTMLInputElement>,
  setSearchValue: React.SetStateAction<any>
) => {
  setSearchValue(e.target.value);
};

export const handleChangeResponsible = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setDiretoria: React.SetStateAction<any>
) => {
  setDiretoria(e.target.value);
};

export const handleWhichItem = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setWhichItem: React.SetStateAction<any>
) => {
  setWhichItem(e.target.value);
};

export const handleSubmit = (
  e: any,
  setIsSubmitted: React.SetStateAction<any>
) => {
  e.preventDefault();
  setIsSubmitted(true);
};

export const handleChangeMonth = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setMonth: React.SetStateAction<any>
) => setMonth(e.target.value);

export const handleChangeReceitaDespesa = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setReceitaDespesa: React.SetStateAction<any>,
  setCategoria: React.SetStateAction<any>,
  setMonth: React.SetStateAction<any>
) => {
  setReceitaDespesa(e.target.value);
  setCategoria("");
  setMonth("");
};

export const handleChangeDatabase = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setBancoDeDados: React.SetStateAction<any>,
  setCategoria: React.SetStateAction<any>,
  setMonth: React.SetStateAction<any>,
  setReceitaDespesa: React.SetStateAction<any>
) => {
  setBancoDeDados(e.target.value);
  setCategoria("");
  setMonth("");
  setReceitaDespesa("");
};
