var mysql = require('mysql');


// var db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE
// });

// var db = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'Luka-duka11',
//   database: 'etrain'
// });



// db.connect((err) => {
//   if (err) {
//     console.error('error connecting: ' + err.message);
//     return;
//   }
//   console.log('connected to the mysql server!');
// });

// db.end((err) => {
//   if (err) {
//     console.error(err);
//   }
// });


// module.exports = db;



const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'etrain',
  'root', 
  'Luka-duka11', {
  host: '127.0.0.1',
  dialect: 'mysql'
});


// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

module.exports = sequelize;