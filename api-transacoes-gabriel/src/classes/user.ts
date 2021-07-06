import Transaction from "./transaction";
import UUID from "uuid-int";
import { usersArray } from "../data";


const id = 0;
const generator = UUID(id);
const uuid = generator.uuid();

class User {
  public id: number = uuid;
  public name: string;
  public cpf: string;
  public email: string;
  public age: number;
  public transactions : Transaction[] //= []; se colocar receber variavel aqui cmeça antes

  constructor(
    //id: number,
    name: string,
    cpf: string,
    email: string,
    age: number,
  ) {
    //this.id = id;
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.age = age;
    this.transactions = [];
  }

  adicionarTransacao(title: string, value: number, type:string) {
    this.transactions.push({
      id:Date.now(),
      title,
      value,
      type
    });
  }

  allTransactions() {
    return this.transactions;
  }
  
  removeTransactions(id: number) {
    // acho indice
    const indice = this.transactions.findIndex(
      (f) => f.id === id
    );
    if (indice === -1) {
      // trata a falha
    }

    this.transactions.splice(indice, 1);
  }
}

export default User;