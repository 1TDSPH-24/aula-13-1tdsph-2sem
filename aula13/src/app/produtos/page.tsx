"use client"

import Link from "next/link";
import { TipoProduto } from "@/types";
import { useEffect, useState } from "react";

export default function Produtos() {

    const [list, setList] = useState<TipoProduto[]>([]);

    useEffect(() => {
        
        const chamadaApi = async () => {

            const response = await fetch('http://localhost:3000/api');
            const data = await response.json();
            setList(data);
        }
        chamadaApi();
    }, [])

  return (
    <div>
        <h1>Produtos</h1>
        <table className="table_custom">
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
                {list.map((produto) => (
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.estoque}</td>
                        <td><Link href={`/produtos/produto/${produto.id}`}>Editar</Link></td>
                    </tr>
                    ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5}>Total de produtos: {list.length}</td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}
