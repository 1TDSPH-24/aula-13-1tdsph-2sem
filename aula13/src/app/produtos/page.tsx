import Link from "next/link";

export default function Produtos() {

    //Criar uma lista de objetos eletrônicos:

    const lista = [
        { id: 1, nome: 'Celular', preco: 1500, estoque: 10 },
        { id: 2, nome: 'Tablet', preco: 800, estoque: 5 },
        { id: 3, nome: 'Notebook', preco: 2500, estoque: 3 },
        { id: 4, nome: 'Smartwatch', preco: 300, estoque: 20 },
        { id: 5, nome: 'Fone de ouvido', preco: 200, estoque: 15 },
    ];

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
