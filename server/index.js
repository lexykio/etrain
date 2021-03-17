const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const Person = require('../database/controllers/people.js');
const Cohort = require('../database/controllers/cohort.js');
const Connection = require('../database/controllers/connection.js');

const app = express();
const PORT = 3000;

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));


// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

/// Cohort
// app.post('/cohort/create', (req, res) => {
//   console.log('In POST Cohort Create')

// });

/// Get a User by submitinga LinkedIn link
app.get('/cohort', (req, res) => {
  Cohort.getCohortId(req.query, (err, data) => {

    if (err) {
      res.send (`An Error Occured ${err}`)
    } else {
      res.send({
        "id": data
      })
    }

  });
});

/// Users

/// Create a User
app.post('/person/create', (req, res) => {
  let userData = req.body;

  Cohort.getCohortId({name: userData.cohort}, (err, id) => {

    userData['cohort_id'] = id;

    Person.createPerson(userData, (err, data) => {
      if (err) {
        res.send (`An Error Occured ${err}`)
      } else {
        res.send(data)
      }
    });
  })

});

/// Get a User's data by submitinga a name
app.get('/person', (req, res) => {

  Person.getPerson(req.body, (err, data) => {
    if (err) {
      res.send (`An Error Occured ${err}`)
    } else {
      res.send(data)
    }
  });

});






/// Get a User's data by submitting a linkedin name
app.get('/person/:linkedInId', (req, res) => {

  Person.getPersonByLinkedIn(req.params.linkedInId, (err, data) => {
    if (err) {
      res.send (`An Error Occured ${err}`)
    } else {
      console.log(data)
      res.send(data)
    }
  });

});






// /// Get a List of all the people Who this person have not endorced
// app.get('/connections', (req, res) => {

//   Connection.getUnConnectedList(req.query.id, req.query.cohort_id, (err, data) => {
//     if (err) {
//       res.send (`An Error Occured ${err}`)
//     } else {
//       res.send(data)
//     }
//   });

// });

// // Post a new connection between a user and a target person
// app.post('/connections', (req, res) => {

//   Connection.createConnection(req.query.id, req.query.target_id, req.query.status_type,(err, data) => {
//     if (err) {
//       res.send (`An Error Occured ${err}`)
//     } else {
//       res.send(data)
//     }
//   });
// });


// // Get the id of a exisiting connection if it exisits
// app.get('/connections/id', (req, res) => {

//   Connection.getConnectedId(req.query.id, req.query.target_id,(err, data) => {
//     if (err) {
//       res.send (`An Error Occured ${err}`)
//     } else {
//       res.send(data)
//     }
//   });
// });



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
