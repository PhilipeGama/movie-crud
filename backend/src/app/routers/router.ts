import { Router } from 'express';
import Multer from 'multer';

import AuthController from '../controller/auth.controller';
import GenderController from '../controller/gender.controller';
import MovieController from '../controller/movie.controller';
import UserController from '../controller/user.controller';
import Auth from '../middlewares/auth-middleware';
import uploadConfig from '../utils/multer';

const upload = Multer(uploadConfig);
const router = Router();

router.post('/auth', AuthController.auth);

router.get('/health-check', (req, res) => {
	res.send('api health');
})

router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.postUser);
router.put('/users', UserController.putUser);
router.get('/genders', GenderController.getAllGender);
router.get('/movies', MovieController.getMoviesPaginated);

router.use(Auth);

router.post('/genders', GenderController.postGender);
router.put('/genders', GenderController.putGender);

// router.get('/deleteimg', MovieController.deleteFile);
router.get('/movies/:id', MovieController.getMovieByID);
router.post('/movies', upload.single('poster'), MovieController.postMovie);
router.put('/movies/:id', upload.single('poster'), MovieController.putMovie);
router.delete('/movies/:id', MovieController.deleteMovie);

export default router;
