const router = require('express').Router();

const {
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
} = require('../../controllers/user-controller');

// GET all users
router.route('/').get(getAllUsers);

//GET user by ID
router.route('/:id').get(getUserById);

// POST a new user
router.route('/').post(createUser);

// DELETE user by ID
router.route('/:id').delete(deleteUser);


module.exports = router;
