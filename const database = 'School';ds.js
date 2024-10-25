const database = 'School';

// USO GENERAL -----------------------------------------------------------------

use('School');

db.athletes.find({}) 
db.athletes.findOne({nombre: 'juan'}) 
db.athletes.findOne({age: 25}) 

// $eq: igual a 30 -----------------------------------------------------------------

db.athletes.find({age: {$eq: 25} })
db.athletes.find({tipo_documento: {$eq: 'CC'} })
db.athletes.find({pasatiempos: {$eq: 'Yoga'} })
db.athletes.find({pasatiempos: {$eq: [
    "Natación",
    "Yoga",
    "Ciclismo"
]} })


// $ne: No igual a 30 años -----------------------------------------------------------------

db.athletes.find({age: {$ne: 25} })
db.athletes.find({tipo_documento: {$ne: 'CC'} })
db.athletes.find({pasatiempos: {$ne: 'Yoga'} })
db.athletes.find({pasatiempos: {$ne: [
    "Natación",
    "Yoga",
    "Ciclismo"
]} })


// $gt: mayor que 25 años -----------------------------------------------------------------

db.athletes.find({age: {$gt: 25} })

// $lt: menor que 25 años -----------------------------------------------------------------

db.athletes.find({age: {$lt: 25} })

// $in: Edad es 10, 30, o 40 -----------------------------------------------------------------

db.athletes.find({age: {$in: [10, 20, 30]} })

// $nin: Edad no es 10, 30, o 40 ---------------------------------------------------------------

db.athletes.find({age: {$nin: [10, 20, 30]} })

// $and: Edad mayor que 25 y nacionalidad colombia ---------------------------------------------------------------

db.athletes.find({ and:[{age: { $gt: 10}}, {equipo: "Team A"}] }) */


//PROYECCIONES

//las proyecciones permiten especificar que campps incluir o excluir en los 
// resultados de la tranferencia de datos


-INCLUIR: Especificar los campos a incluir 1
-Excluir: Especificar los campos a excluir 0


db.athletes.find({age: { $gt: 25 } } { nombre: 1})

//Ordenamiento y limitacion de resultados

// Estas operaciones permiten controlar comose presentan los resultados de una consulta

// - sort():Ordenar los resultados segun uno o mas campos
// - limit(): LImita el numero de documentos devueltos
// - skip(): Omite un numero especifico de documentos

db.athletes.find().sort({age: -1}).skip(10).limit(5)

db.athletes.find({}).sort({nombre: -1}).limit(5)

