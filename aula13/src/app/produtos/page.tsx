"use client"
import { TipoProdutos } from "@/type";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Produtos() {

    //Criar uma lista de objetos eletrônicos:

    const [lista, setLista] = useState<TipoProdutos[]>([])
    
    useEffect(() => {

        const chamadaApi = async ()=>{

            const response = await fetch("http://localhost:3000/api");
            const data = await response.json();
            console.log(data)
            setLista(data);
        }
        chamadaApi();
    },[])

  return (
    <div>
        <h1>Produtos</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {lista.map((produto) => (
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.estoque}</td>
                        <td> <Link href={`/produtos/produto/${produto.id}`}>Editar</Link> </td>
                    </tr>
                    ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5}>Total de produtos: {lista.length}</td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}
