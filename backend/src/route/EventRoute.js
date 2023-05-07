const router = require('express').Router();
const Event= require('../controller/EventController')
//router.use(express.json());
router.get('/',Event.allEvents);
//router.get('/:eid',Event.singleEventId);
router.get('/:ename',Event.singleEventName);
router.post('/add',Event.createEvent);
router.delete('/delete',Event.deleteEvent);
router.put('/:eid',Event.updateEvent);

module.exports = router;