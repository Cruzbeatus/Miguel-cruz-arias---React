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

db.athletes.find({ and:[{age: { $gt: 25}}, {nacionalidad: 'Colombiana'}] })

