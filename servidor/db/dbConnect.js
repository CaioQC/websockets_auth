import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config()

const cliente = new MongoClient(process.env.STRING_CONEXAO);

let documentosColecao;
let usuariosColecao

try {
  await cliente.connect();

  const db = cliente.db("websockets");
  documentosColecao = db.collection("documents");
  usuariosColecao = db.collection("usuarios")

  console.log("Conectado ao banco de dados com sucesso!");
}

catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };