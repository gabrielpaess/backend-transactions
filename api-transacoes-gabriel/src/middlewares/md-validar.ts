import express from "express";
import { usersArray } from "../data";

function validarNome(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  const { name } = request.body;

  //console.log("valid Name Middleware ");

  if (!name) {
    return response.status(400).json({
      msg: "O nome deve ser informado",
    });
  }

  if (name.length < 3) {
    return response.status(400).json({
      msg: "O nome deve conter no minimo 3 caracteres",
    });
  }

  next();
}

function validarCpf(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  const { cpf } = request.body;

  //console.log("valid CPF Middleware");

  const existe = usersArray.find((f) => {
    return f.cpf === cpf;
  });

  if (existe) {
    return response.status(400).json({msg:"CPF já Cadastrado"});
  }

  next();
}

function validarEmail(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  const { email } = request.body;

  //console.log("valid Name Middleware ");

  if (!email) {
    return response.status(400).json({
      msg: "O email deve ser informado",
    });
  }

  //https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const arroba = new RegExp("@")
  if (!arroba.test(email)) {
    return response.status(400).json({
      msg: "Digite um email valido",
    });
  }

  next();
}

function validarAge(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  const { age } = request.body;

  //console.log("valid Name Middleware");

  if (!age) {
    return response.status(400).json({
      msg: "O idade dever informado corretamente",
    });
  }

  next();
}

function validarUser(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  const { userId }: { userId?: string } = request.params;

    const userIdInt: number = parseInt(userId);

    // encontrar o registro
    const indiceUser = usersArray.findIndex((f) => {
      return f.id === userIdInt;
    });

    if (indiceUser === -1) {
      return response.status(404).json({
        msg: "User not found",
      });
    }
  
    //request.indiceUser  = indiceUser
  next();
}

function validarTransactions(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  const { userId, id }: { userId?: string; id?: string } = request.params;

    const userIdInt: number = parseInt(userId);
    const idInt: number = parseInt(id);

    // encontrar o registro que queremos alterar
    const indiceUser = usersArray.findIndex((f) => {
      return f.id === userIdInt;
    });

    const transactions = usersArray[indiceUser].transactions.find(
      (f) => f.id === idInt
    );

    if (!transactions) {
      return response.status(404).json({
        msg: "Transactions not found",
      });
    }

  next();
}

export {validarNome,validarCpf, validarEmail, validarAge ,validarUser, validarTransactions};
