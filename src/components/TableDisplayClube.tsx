import TableDisplayClubeItens from "./TableDisplayClubeItens";
import { TableContext } from "../context/TableContext";
import { useContext } from "react";

const TableDisplayClube = () => {
  const {
    month,
    categoria,
    bancoDeDados,
    receitaDespesa,
    diretoria,
    whichItem,
    searchValue,
    dataNameReceita,
    dataNameDespesa,
  } = useContext(TableContext);
  const itajubense_receita_valor =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "valor";

    const itajubense_despesas_valor =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "valor";
  // itajubense - receita - itens
  const itajubense_receita_item_todos =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "item" &&
    whichItem === "todos";
  const itajubense_receita_item_aluguel_antena =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "item" &&
    whichItem === "aluguel antena celular";
  const itajubense_receita_item_aluguel_salao =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "item" &&
    whichItem === "aluguel salão social";
  const itajubense_receita_item_convite =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "item" &&
    whichItem === "convites";
  const itajubense_receita_item_devoluc_fornecedor =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "item" &&
    whichItem === "devolução de fornecedor";
  const itajubense_receita_item_eventos_taxas_etc =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "item" &&
    whichItem === "eventos, taxas e outros";
  const itajubense_receita_item_indenizacoes =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "item" &&
    whichItem === "indenizações";
  const itajubense_receita_item_aplicacoes_financ =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "item" &&
    whichItem === "aplicações financeiras e créditos dist sicoob";
  const itajubense_receita_item_mensalidades =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "item" &&
    whichItem === "mensalidades, parcelamentos e juros";
  const itajubense_receita_item_semestralidade =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "item" &&
    whichItem === "semestralidade";
  const itajubense_receita_item_venda_bens =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "item" &&
    whichItem === "venda de bens";
  const itajubense_receita_item_aplicacoes_venda_joias =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "item" &&
    whichItem === "venda de jóias";
  const itajubense_receita_geral =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "geral";
  const itajubense_despesas_geral =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "geral";

  // itajubense - receita - meses
  const itajubense_receita_mes_janeiro =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "mês" &&
    month === "janeiro";
  const itajubense_receita_mes_fevereiro =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "mês" &&
    month === "fevereiro";
  const itajubense_receita_mes_março =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "mês" &&
    month === "março";
  const itajubense_receita_mes_abril =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "mês" &&
    month === "abril";
  const itajubense_receita_mes_maio =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "mês" &&
    month === "maio";
  const itajubense_receita_mes_junho =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "mês" &&
    month === "junho";
  const itajubense_receita_mes_julho =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "mês" &&
    month === "julho";
  const itajubense_receita_mes_agosto =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "mês" &&
    month === "agosto";
  const itajubense_receita_mes_setembro =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "mês" &&
    month === "setembro";
  const itajubense_receita_mes_outubro =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "receita" &&
    categoria === "mês" &&
    month === "outubro";

  // itajubense - despesas - items

  const itajubense_despesas_categoria_item_agua =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "água e esgoto";

  const itajubense_despesas_categoria_item_beneficios =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "benefícios (vale compras/transporte)";

  const itajubense_despesas_categoria_item_carne =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "carnê/boleto";

  const itajubense_despesas_categoria_item_confra =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "confraternização funcionários";

  const itajubense_despesas_categoria_item_terceirizado =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "contratos terceirizados";

  const itajubense_despesas_categoria_item_convenio =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "convênios(médico/odonto/farmacia)";

  const itajubense_despesas_categoria_item_ecad =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "ecad(direitos musicais)";

  const itajubense_despesas_categoria_item_encargos =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "encargos";

  const itajubense_despesas_categoria_item_eletricidade =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "energia elétrica";

  const itajubense_despesas_categoria_item_epi =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "epi's/uniformes/cursos";

  const itajubense_despesas_categoria_item_ipva =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "ipva";

  const itajubense_despesas_categoria_item_lanches =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "lanches e refeições";

  const itajubense_despesas_categoria_item_escritorio =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "material de escritório";

  const itajubense_despesas_categoria_item_limpeza =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "item" &&
    whichItem === "material de limpeza";

  // itajubense - despesas - meses

  const itajubense_despesas_mes_janeiro =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "mês" &&
    month === "janeiro";

  const itajubense_despesas_mes_fevereiro =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "mês" &&
    month === "fevereiro";

  const itajubense_despesas_mes_marco =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "mês" &&
    month === "março";

  const itajubense_despesas_mes_abril =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "mês" &&
    month === "abril";

  const itajubense_despesas_mes_maio =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "mês" &&
    month === "maio";

  const itajubense_despesas_mes_junho =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "mês" &&
    month === "junho";

  const itajubense_despesas_mes_julho =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "mês" &&
    month === "julho";

  const itajubense_despesas_mes_agosto =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "mês" &&
    month === "agosto";

  const itajubense_despesas_mes_setembro =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "mês" &&
    month === "setembro";

  const itajubense_despesas_mes_outubro =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "mês" &&
    month === "outubro";

  // itajubense - despesas - diretoria

  const itajubense_despesas_diretoria_adm =
    bancoDeDados === "clube_itajubense" &&
    receitaDespesa === "despesas" &&
    categoria === "diretoria" &&
    diretoria === "diretoria administrativa";

  const decide = () => {
    if (itajubense_receita_valor) {
      const filtering = dataNameReceita.filter(
        (object) => object.value === searchValue
      );
      if (filtering.length >= 1) {
        const valores: number[] = filtering.map((element) =>
          Number(element.value)
        );
        const total = valores.reduce((a, b) => a + b);
        const med = (total / valores.length).toFixed(2);
        return (
          <TableDisplayClubeItens
            total={total}
            media={med}
            mes={month}
            categoria={categoria}
            dataName={filtering}
          ></TableDisplayClubeItens>
        );
      }
    }

    if (itajubense_despesas_valor) {
        const filtering = dataNameDespesa.filter(
          (object) => object.value === searchValue
        );
        if (filtering.length >= 1) {
          const valores: number[] = filtering.map((element) =>
            Number(element.value)
          );
          const total = valores.reduce((a, b) => a + b);
          const med = (total / valores.length).toFixed(2);
          return (
            <TableDisplayClubeItens
              total={total}
              media={med}
              mes={month}
              categoria={categoria}
              dataName={filtering}
            ></TableDisplayClubeItens>
          );
        }
      }

    if (itajubense_despesas_geral) {
      const valores: number[] = dataNameDespesa.map((object) =>
        Number(object.value)
      );
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={dataNameDespesa}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_receita_geral) {
      const valores: number[] = dataNameReceita.map((object) =>
        Number(object.value)
      );
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={dataNameReceita}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_receita_mes_janeiro) {
      const mes = dataNameReceita.filter((object) =>
        object.date.startsWith("01")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_mes_janeiro) {
      const mes = dataNameDespesa.filter((object) =>
        object.date.startsWith("01")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_mes_fevereiro) {
      const mes = dataNameDespesa.filter((object) =>
        object.date.startsWith("02")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_mes_marco) {
      const mes = dataNameDespesa.filter((object) =>
        object.date.startsWith("03")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_mes_abril) {
      const mes = dataNameDespesa.filter((object) =>
        object.date.startsWith("04")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_mes_maio) {
      const mes = dataNameDespesa.filter((object) =>
        object.date.startsWith("05")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_mes_junho) {
      const mes = dataNameDespesa.filter((object) =>
        object.date.startsWith("06")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_mes_julho) {
      const mes = dataNameDespesa.filter((object) =>
        object.date.startsWith("07")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_mes_agosto) {
      const mes = dataNameDespesa.filter((object) =>
        object.date.startsWith("08")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_mes_setembro) {
      const mes = dataNameDespesa.filter((object) =>
        object.date.startsWith("09")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_mes_outubro) {
      const mes = dataNameDespesa.filter((object) =>
        object.date.startsWith("10")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_diretoria_adm) {
      const data = dataNameDespesa.filter(
        (object) => object.responsible === "Diretoria Administrativa"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_limpeza) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "Material de Limpeza"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_escritorio) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "Material de Escritório"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_lanches) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "Lanches e Refeições"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_epi) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "EPI's/Uniformes/Cursos"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_eletricidade) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "Energia Elétrica"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_encargos) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "Encargos"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_ecad) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "ECAD(Direitos Musicais)"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_agua) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "Água e Esgoto"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_beneficios) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "Benefícios (vale compras/transporte)"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_carne) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "Carnê/Boleto"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_confra) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "Confraternização Funcionários"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_terceirizado) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "Contratos Terceirizados"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_convenio) {
      const data = dataNameDespesa.filter(
        (object) => object.item === "Convênios(Médico/Odonto/Farmacia)"
      );
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_despesas_categoria_item_ipva) {
      const data = dataNameDespesa.filter((object) => object.item === "IPVA");
      const valores: number[] = data.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={data}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_receita_mes_fevereiro) {
      const mes = dataNameReceita.filter((object) =>
        object.date.startsWith("02")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }

    if (itajubense_receita_mes_março) {
      const mes = dataNameReceita.filter((object) =>
        object.date.startsWith("03")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_mes_abril) {
      const mes = dataNameReceita.filter((object) =>
        object.date.startsWith("04")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_mes_maio) {
      const mes = dataNameReceita.filter((object) =>
        object.date.startsWith("05")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_mes_junho) {
      const mes = dataNameReceita.filter((object) =>
        object.date.startsWith("06")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_mes_julho) {
      const mes = dataNameReceita.filter((object) =>
        object.date.startsWith("07")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_mes_agosto) {
      const mes = dataNameReceita.filter((object) =>
        object.date.startsWith("08")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_mes_setembro) {
      const mes = dataNameReceita.filter((object) =>
        object.date.startsWith("09")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_mes_outubro) {
      const mes = dataNameReceita.filter((object) =>
        object.date.startsWith("10")
      );
      const valores: number[] = mes.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mes}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_item_todos) {
      const valores: number[] = dataNameReceita.map((object) =>
        Number(object.value)
      );
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={dataNameReceita}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_item_aluguel_antena) {
      const aluguelAntenaCelular = dataNameReceita.filter(
        (object) => object.item === "Aluguel Antena Celular"
      );
      const valores: number[] = aluguelAntenaCelular.map((object) =>
        Number(object.value)
      );
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={aluguelAntenaCelular}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_item_aluguel_salao) {
      const aluguelAntenaSalao = dataNameReceita.filter(
        (object) => object.item === "Aluguel Salão Social"
      );
      const valores: number[] = aluguelAntenaSalao.map((object) =>
        Number(object.value)
      );
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={aluguelAntenaSalao}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_item_aplicacoes_financ) {
      const appFinanc = dataNameReceita.filter(
        (object) =>
          object.item === "Aplicações Financeiras e Crédito Dist Sicoob"
      );
      const valores: number[] = appFinanc.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={appFinanc}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_item_convite) {
      const convite = dataNameReceita.filter(
        (object) => object.item === "Convites"
      );
      const valores: number[] = convite.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={convite}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_item_devoluc_fornecedor) {
      const fornecedor = dataNameReceita.filter(
        (object) => object.item === "Devolução de Fornecedor"
      );
      const valores: number[] = fornecedor.map((object) =>
        Number(object.value)
      );
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={fornecedor}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_item_eventos_taxas_etc) {
      const evtTx = dataNameReceita.filter(
        (object) => object.item === "Eventos, Taxas e Outros"
      );
      const valores: number[] = evtTx.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);

      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={evtTx}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_item_indenizacoes) {
      const indenizações = dataNameReceita.filter(
        (object) => object.item === "Indenizações"
      );
      const valores: number[] = indenizações.map((object) =>
        Number(object.value)
      );
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);

      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={indenizações}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_item_mensalidades) {
      const mensalidade = dataNameReceita.filter(
        (object) => object.item === "Mensalidades, Parcelamentos e Juros"
      );
      const valores: number[] = mensalidade.map((object) =>
        Number(object.value)
      );
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);

      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={mensalidade}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_item_semestralidade) {
      const semestralidade = dataNameReceita.filter(
        (object) => object.item === "Semestralidade"
      );
      const valores: number[] = semestralidade.map((object) =>
        Number(object.value)
      );
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);

      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={semestralidade}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_item_venda_bens) {
      const bens = dataNameReceita.filter(
        (object) => object.item === "Venda de Bens"
      );
      const valores: number[] = bens.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);
      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={bens}
        ></TableDisplayClubeItens>
      );
    }
    if (itajubense_receita_item_aplicacoes_venda_joias) {
      const joias = dataNameReceita.filter(
        (object) => object.item === "Venda de Jóias"
      );
      const valores: number[] = joias.map((object) => Number(object.value));
      const total = valores.reduce((a, b) => a + b);
      const med: string = (total / valores.length).toFixed(2);

      return (
        <TableDisplayClubeItens
          total={total}
          media={med}
          mes={month}
          categoria={categoria}
          dataName={joias}
        ></TableDisplayClubeItens>
      );
    }
  };

  return <div>{decide()}</div>;
};

export default TableDisplayClube;
