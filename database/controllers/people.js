
// const db = require('../index.js');

// const createPerson = (data, cb) => {

//   let person_query = `INSERT INTO people(first_name,last_name,linkedin,corhort_id) VALUES ('${data.first_name}','${data.last_name}','${data.linkedin}',${data.cohort_id});`

//   db.query(person_query,(err, results, fields) => {
//     if (err) {
//       return console.error(err.message);
//       cb(err)
//     }
//     cb(null, results);
//   });
// };


// const getPerson = (data, cb) => {
//   // Get person data
//   let person_query = `SELECT * FROM people as p WHERE p.first_name = "${data.first_name}" AND p.last_name = "${data.last_name}";`

//   db.query(person_query,(err, results, fields) => {
//     if (err) {
//       return console.error(err.message);
//       cb(err)
//     }
//     cb(null, results);
//   });

// }

// const getPersonByLinkedIn = (data, cb) => {
//   // Get person data
//   // let person_query = `SELECT * FROM people as p WHERE p.linkedin = "${data}";`
//   let person_query = `SELECT * FROM people as p WHERE p.linkedin = "lexyk";`;

//   db.query(person_query,(err, results) => {
//     if (err) {
//       if (err.fatal)
//             startConnection();
//       console.error(err.message);
//       cb(err)
//     }

//     // cb(null, results);
//     console.log(results)
//   });

// }

// // con.query('SELECT * FROM authors', (err,rows) => {
// //   if(err) throw err;

// //   console.log('Data received from Db:');
// //   console.log(rows);
// // });


const sequelize = require('../index.js');

const getPersonByLinkedIn = (data, cb) => {
  sequelize.query(`SELECT * FROM people WHERE linkedin = "${data}";`, { type: sequelize.QueryTypes.SELECT })
  .then(user => {
    // console.log(user[0])
    cb(null, user[0])
  })
}


// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

module.exports = {
  // createPerson: createPerson,
  // getPerson: getPerson,
  getPersonByLinkedIn: getPersonByLinkedIn
}
