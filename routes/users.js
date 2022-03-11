var express = require('express');
var router = express.Router();
const db = require('../model/db');
const userModel = require('../model/user');

/* GET users listing. */
router.get('/', async function (req, res, next) {

  let dbConn = await db.getConnection();
  const rows = await dbConn.query("SELECT userId,username,`first` FROM user");
  dbConn.end();

  res.send(rows);
});

router.get('/:userId', async function (req, res, next) {
  let userId = parseInt(req.params.userId.trim());
  let result = await userModel.getUser(userId);
  res.send(result);

});



module.exports = router;
