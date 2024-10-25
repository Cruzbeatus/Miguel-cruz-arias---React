/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'School';
const collection = 'athletes';

// Create a new database.
use('School');

// Create a new collection.
db.createCollection('athletes');

/* db.athletes.aggregate([
    { $group: {
    _id: null,
    fieldN: {totalEdad: expressionN}
    }} */

/* db.athletes.aggregate([
    { $group: {
    _id: null,
    totalEdad: { $sum: '$age' }
    }}
]) */

/* db.athletes.aggregate([
    { $group: {
        _Id: null,
        promedioAltura: { $avg: '$estatura' }
    }
    }
]) */

db.athletes.updateOne(
    {documento: ""}
    { $set: {direcccion: ""}}
)
db.athletes