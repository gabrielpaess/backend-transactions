import { usersArray } from "../data";
import User from "./user";

// import UUID from "uuid-int";

// const id = 0;
// const generator = UUID(id);
// const uuid = generator.uuid();

class Transaction{
    public id:number = 0//uuid;
    public title:string;
    public value:number;
    public type:string;
    constructor(title:string,value:number,type:string){
        //this.id = Date.now(); // Não gerou
        this.title = title;
        this.value = value;
        this.type = type;
    }  
}

export default Transaction;