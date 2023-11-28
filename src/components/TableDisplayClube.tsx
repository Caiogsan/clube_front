import TableDisplayClubeItens from "./TableDisplayClubeItens";
import { TableContext } from "../context/TableContext";
import { useContext } from "react";

const TableDisplayClube = () => {
    const { month, categoria, bancoDeDados, receitaDespesa, whichItem, dataNameReceita } = useContext(TableContext)
    // itens
    const itajubense_receita_item_todos = bancoDeDados === 'clube_itajubense' && receitaDespesa === 'receita' && categoria === 'item' && whichItem === 'todos'
    const itajubense_receita_item_aluguel_antena = bancoDeDados === 'clube_itajubense' && receitaDespesa === 'receita' && categoria === 'item' && whichItem === 'aluguel antena celular'
    const itajubense_receita_item_aluguel_salao = bancoDeDados === 'clube_itajubense' && receitaDespesa === 'receita' && categoria === 'item' && whichItem === 'aluguel salão social'
    const itajubense_receita_item_convite = bancoDeDados === 'clube_itajubense' && receitaDespesa === 'receita' && categoria === 'item' && whichItem === 'convites'
    const itajubense_receita_item_devoluc_fornecedor = bancoDeDados === 'clube_itajubense' && receitaDespesa === 'receita' && categoria === 'item' && whichItem === 'devolução de fornecedor'
    const itajubense_receita_item_eventos_taxas_etc = bancoDeDados === 'clube_itajubense' && receitaDespesa === 'receita' && categoria === 'item' && whichItem === 'eventos, taxas e outros'
    const itajubense_receita_item_indenizacoes = bancoDeDados === 'clube_itajubense' && receitaDespesa === 'receita' && categoria === 'item' && whichItem === 'indenizações'
    const itajubense_receita_item_aplicacoes_financ = bancoDeDados === 'clube_itajubense' && receitaDespesa === 'receita' && categoria === 'item' && whichItem === 'aplicações financeiras e créditos dist sicoob'
    const itajubense_receita_item_mensalidades = bancoDeDados === 'clube_itajubense' && receitaDespesa === 'receita' && categoria === 'item' && whichItem === 'mensalidades, parcelamentos e juros'
    const itajubense_receita_item_semestralidade = bancoDeDados === 'clube_itajubense' && receitaDespesa === 'receita' && categoria === 'item' && whichItem === 'aplicações financeiras e créditos dist sicoob'
    const itajubense_receita_item_venda_bens = bancoDeDados === 'clube_itajubense' && receitaDespesa === 'receita' && categoria === 'item' && whichItem === 'aplicações financeiras e créditos dist sicoob'
    const itajubense_receita_item_aplicacoes_venda_joias = bancoDeDados === 'clube_itajubense' && receitaDespesa === 'receita' && categoria === 'item' && whichItem === 'aplicações financeiras e créditos dist sicoob'
    
    const decide = () => {
        if(itajubense_receita_item_todos){
            return (
                <TableDisplayClubeItens dataName={dataNameReceita}></TableDisplayClubeItens>
            )
        }
        if(itajubense_receita_item_aluguel_antena){
            const aluguelAntenaCelular = dataNameReceita.filter((object) => object.item === 'Aluguel Antena Celular')
            return (
                <TableDisplayClubeItens dataName={aluguelAntenaCelular}></TableDisplayClubeItens>
            )
        }
        if(itajubense_receita_item_aluguel_salao){
            const aluguelAntenaSalao = dataNameReceita.filter((object) => object.item === 'Aluguel Salão Social')
            return (
                <TableDisplayClubeItens dataName={aluguelAntenaSalao}></TableDisplayClubeItens>
            )
        }
        if(itajubense_receita_item_aplicacoes_financ){
            const appFinanc = dataNameReceita.filter((object) => object.item === 'Aplicações Financeiras e Crédito Dist Sicoob')
            return (
                <TableDisplayClubeItens dataName={appFinanc}></TableDisplayClubeItens>
            )
        }
        if(itajubense_receita_item_convite){
            const convite = dataNameReceita.filter((object) => object.item === 'Convites')
            return (
                <TableDisplayClubeItens dataName={convite}></TableDisplayClubeItens>
            )
        }
        if(itajubense_receita_item_devoluc_fornecedor){
            const fornecedor = dataNameReceita.filter((object) => object.item === 'Devolução de Fornecedor')
            return (
                <TableDisplayClubeItens dataName={fornecedor}></TableDisplayClubeItens>
            )
        }
        if(itajubense_receita_item_eventos_taxas_etc){
            const evtTx = dataNameReceita.filter((object) => object.item === 'Eventos, Taxas e Outros')
            return (
                <TableDisplayClubeItens dataName={evtTx}></TableDisplayClubeItens>
            )
        }
        if(itajubense_receita_item_indenizacoes){
            const indenizações = dataNameReceita.filter((object) => object.item === 'Indenizações')
            return (
                <TableDisplayClubeItens dataName={indenizações}></TableDisplayClubeItens>
            )
        }
        if( itajubense_receita_item_mensalidades){
            const indenizações = dataNameReceita.filter((object) => object.item === 'Mensalidades, Parcelamentos e Juros')
            return (
                <TableDisplayClubeItens dataName={indenizações}></TableDisplayClubeItens>
            )
        }
       
        
    }

  return (
    <div>
        {decide()}
    </div>
  );
};

export default TableDisplayClube;
