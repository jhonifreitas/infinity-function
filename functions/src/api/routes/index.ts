import { Router } from 'express';

import userRouter from './user.route';
import studentRouter from './student.route';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/students', studentRouter);

export default routes;
