const router = require('express').Router();
const Batch= require('../controller/BatchController')
//router.use(express.json());
router.get('/',Batch.allBatchs);
router.post('/reg',Batch.createBatch);
router.delete('/:bid',Batch.deleteBatch);
router.put('/:bid',Batch.updateBatch);

module.exports = router;