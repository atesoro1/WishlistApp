var express = require('express');
var router = express.Router();
var postgres = require('postgres');
const sql = postgres('postgres://postgres:Asians19@localhost:5432/database', {
  host        : 'localhost',         // Postgres ip address or domain name
  port        : 5432,       // Postgres server port
  database    : 'postgres',         // Name of database to connect to
  username    : 'postgres',         // Username of database user
  password    : 'Asians19',         // Password of database user
  ssl         : false,      // True, or options for tls.connect
  max         : 10,         // Max number of connections
  },
);

/* GET home page. */
router.get('/people/items/', async function(req, res, next) {
  let userId = parseInt(req.header('person'));
  const userItems = await sql`
  SELECT * FROM "Item" WHERE "userId" = ${userId}`;
  console.log(userItems);
  res.send({'userItems': userItems, 'userId': userId});
});

router.post('/people/items/insert/', async function(req, res, next) {
  let personId = req.body.personId;
  let title = req.body.title;
  let link = req.body.link;
  let comment = req.body.comment;
  try {
    await sql`
    INSERT INTO "Item"(title, link, comment, "userId") VALUES(${title}, ${link}, ${comment}, ${personId})
  `;
  res.send({'status': 'successful'});
  } catch(e) {
    res.send({'status': 'error'});
  }
  
});

router.delete('/people/items/delete/', async function(req, res, next) {
  let itemId = req.body.itemId;
  
  try {
    await sql`
    DELETE FROM "Item" WHERE "itemId" = ${itemId}
  `;
  res.send({'status': 'successful'});
  } catch(e) {
    res.send({'status': 'error'});
  }
  
});

module.exports = router;
