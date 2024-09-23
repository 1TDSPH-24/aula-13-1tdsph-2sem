//route sempre vai estar dentro de uma pasta
//pode ter mais de um route, mas não na mesma pasta

import { promises as fs} from "fs"
import { NextResponse } from "next/server";

//vamos criar o método get, para poder fazer acesso ao arquivo
export async function GET(){
    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8'); 
    const produto = JSON.parse(file);

    return NextResponse.json(produto);
}