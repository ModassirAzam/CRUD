import express from 'express';
import { addUser,getUsers,getUser,editUser,deleteUser,signin } from '../controller/user-controller.js';


const router = express.Router();

router.post('/add',addUser);
router.get('/all',getUsers);
router.get('/:phone',getUser);
router.post('/:phone',editUser);
router.delete('/:phone',deleteUser);

router.post('/sigin',signin);


export default router;