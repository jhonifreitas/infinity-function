import { Router } from 'express';
import { AuthRole } from '../../enums/auth.enum';

import { ensureRole } from '../middlewares/ensure-role';
import StudentController from '../controllers/student.controller';
import { ensureAuthentication } from '../middlewares/ensure-authentication';

const studentRouter = Router();

studentRouter.use(ensureAuthentication);

studentRouter.post('/', StudentController.store);
studentRouter.put('/:id', StudentController.update);
studentRouter.delete(
  '/:id',
  ensureRole([AuthRole.ADMINISTRATOR]),
  StudentController.delete
);

export default studentRouter;