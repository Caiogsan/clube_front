

interface Idata {
  item: string;
  date: string;
  value: string;
  type: string;
}

interface displayProps {
  dataName: Idata[];
  categoria: string
  mes: string
  media: string
  total: number
}

const TableDisplayClubeItens: React.FC<displayProps> = ({ dataName, categoria, mes, media, total }) => {
  let priceInBrl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="flex py-20 flex flex-col justify-center items-center">
      <div className=" w-[55rem] bg-white">
        <div className="border-b-2 flex h-8 border-black">
          <div className="w-[60%] border-r-2 border-black flex items-center justify-center font-bold">
            Nome do item
          </div>
          <div className="w-[20%] border-r-2 border-black flex items-center justify-center font-bold">
            Data
          </div>
          <div className="w-[20%] flex items-center justify-center font-bold">
            Receitas
          </div>
        </div>
        {dataName.map((item: Idata, index) => (
          <div key={index} className="border-b-2 flex h-8 border-black">
            <div className="w-[60%] border-r-2 border-black flex items-center justify-center">
              {item.item}
            </div>
            <div className="w-[20%] border-r-2 border-black flex items-center justify-center">
              {item.date}
            </div>
            <div className="w-[20%] flex items-center justify-center">
              {priceInBrl.format(Number(item.value))}
            </div>
          </div>
        ))}
      </div>
      <div className=" w-[55rem] mt-20 bg-white">
        <div className="border-b-2 flex h-8 border-black">
          <div className="w-[60%] border-r-2 border-black flex items-center justify-center">
            Média por {categoria}
          </div>
          <div className="w-[20%] border-r-2 border-black flex items-center justify-center">
            {mes}
          </div>
          <div className="w-[20%] flex items-center justify-center">
            {priceInBrl.format(Number(media))}
          </div>
        </div>
      </div>
      <div className=" w-[55rem] bg-white">
        <div className="border-b-2 flex h-8 border-black">
          <div className="w-[60%] border-r-2 border-black flex items-center justify-center">
            Valor total
          </div>
          <div className="w-[20%] border-r-2 border-black flex items-center justify-center">
            {mes}
          </div>
          <div className="w-[20%] flex items-center justify-center">
            {priceInBrl.format(total)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableDisplayClubeItens;
