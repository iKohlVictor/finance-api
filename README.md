finance-api

Modulos -> Users, Transactions

Models

## User
-> id, createdAt, UpdatedAt, name, lastName, email, phoneNumber, password

email -> precisar ser um email válido e único 
phoneNumber -> precisa ser um telefone válido
password -> precisar se encriptada e salva no banco


Controller

## User (POST, GET, PUT) 
-> registrar um usuário
-> visualizar informações
-> alterar dados

## Transaction (POST, GET, PUT) 
-> registar uma transação[despesa | receita]
-> visualizar receita 
-> alterar uma transação 

Services
user.model