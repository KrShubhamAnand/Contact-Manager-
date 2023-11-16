const express = require('express');
const router = express.Router();

const {getContact,
    createContact,
    getContactByid,
    updateContact,
    deleteContact
    }               = require('../controller/contactController');
const validateToken = require('../middlewares/validateTokenHandler');

router.use(validateToken);

router.route('/').get(getContact);
router.route('/').post(createContact);
router.route('/:id').get(getContactByid);
router.route('/:id').put(updateContact);
router.route('/:id').delete(deleteContact);


module.exports = router;