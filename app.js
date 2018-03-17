// instância do MongoClient
var MongoClient = require('mongodb').MongoClient;

//conexão com o banco de dados remoto exemplomlab
MongoClient.connect('mongodb://nome_do_usuario:senha@ds012678.mlab.com:12678/exemplomlab', function (err, db) {
    if(!err) { 
     console.log('Conectado'); 
  }
     //criação da collection estudantes
     db.collection('Estudantes', function (err, collection) {        
        collection.insert({ nome: 'Maria', idade: '18' });
        collection.insert({ nome: 'Joana', idade: '22' });
        collection.insert({ nome: 'João', idade: '23' });  
        collection.insert({ nome: 'Luis', idade: '19' });     
       
        db.collection('Estudantes').count(function (err, count) {
            if (err) throw err;            
            console.log('Total linhas inseridas: ' + count);
        });
    });
});