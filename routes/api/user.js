const router = require('express').Router();

const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
    getAllUsers,
    getUserById,
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router.route('/').get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Set up POST and DELETE at /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

// Set up GET one and DELETE at /api/users/:id
router.route('/:id').get(getUserById).delete(deleteUser);

// Set up GET all and POST at /api/users
router.route('/').get(getAllUsers).post(createUser);

module.exports = router;
