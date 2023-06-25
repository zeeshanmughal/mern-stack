const express = require('express')
const router = express.Router();
const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalControllers')


// We use this router.route for 2 same routes instead of using the below routes
 
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)


// router.get('/', getGoals)

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

module.exports = router