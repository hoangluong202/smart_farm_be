let express = require('express')
let router = express.Router()
let Record = require('../controllers/records.controller')
router.route("/records").get(Record.getOne)
router.route("/allrecs/:id").get(Record.getAll)
router.route("/records/create-data").get(Record.createRandomData)
router.route("/records/average").get(Record.getAvegareValues)
router.route("/records/:time").get(Record.getByTime)
router.route("/timerecords/:bytime").get(Record.getRecordByTime)
// router.route("/createdata").get(Record.createRandomData)

exports.recordRouter = router