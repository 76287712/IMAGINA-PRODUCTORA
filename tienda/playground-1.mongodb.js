
// Select the database to use.
use('Imagina');

// Insert a few documents into the clases collection.
/*
db.getCollection('Clases').insertMany([
  { 'nombre': 'Corazon Encantado', 'interprete': 'DB gt', 'price': 130, 'profesor': 'Carlos Paz' },
  { 'nombre': 'Coreografia Alladin', 'interprete': 'Disney', 'price': 130, 'profesor': 'Ale Calderon y Carlos Paz'  },
  { 'nombre': 'Ojitos lindos, despues de la playa y esta noche', 'interprete': 'Mix', 'price': 150, 'profesor': 'Ale Calderon y Carlos Paz'  },
  { 'nombre': 'Perfecto', 'interprete': 'Ed Sheeran', 'price': 100,  'profesor': 'Ale Calderon' },
  { 'nombre': 'Que precio tiene el cielo', 'interprete': 'Marck Antony', 'price': 120, 'profesor': 'Ale Calderon y Carlos Paz' },
  { 'nombre': 'Que más te puedo pedir', 'interprete': '', 'price': 100,  'profesor': 'Ale Calderon y Carlos Paz' },
  { 'nombre': 'Que bueno es quererte', 'interprete': 'Natalia jimenez y banda MS ', 'price': 120, 'profesor': 'Carlos Paz ' }
]);
*/
  // Run a find command to view price and profesor.
/*db.getCollection('Clases').find({
  $and: [{ 'price': { $lte: 120}}, {'profesor': 'Ale Calderon y Carlos Paz' }]
});

  // Run a deleteMany command to delete multiple documents
db.getCollection('Clases').deleteMany({
  'price': 130
});

  // Run a deleteOne command to delete a document
db.getCollection('Clases').deleteOne({
  'interprete': 'Marck Antony'
});

db.getCollection('Clases').replaceOne(
    { "nombre" : "Perfecto" , 'interprete': 'Ed Sheeran', 'price': 100,  'profesor': 'Ale Calderon' },
    { "nombre" :  "imperfecto" }
); */  
/*
db.getCollection('Clases').insertOne({
  'nombre': 'Hola Mundo', 'interprete': 'Rachel', 'price': 1000, 'profesor': '' 
})
*/
/*
db.getCollection('Clases').updateOne(
  { 'price' : 120 },
  { $set: { 'price' : 300 } }
);
*/
/*
db.getCollection('Clases').find({
  'price': { $not: {$eq: 100}}
});
*/
db.getCollection('Clases').updateMany(
  { 'interprete' : 'Disney' },
  { $set: { 'interprete' : "Mickey Mouse" } }
);