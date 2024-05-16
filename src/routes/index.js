import { Router } from 'express';

import ChatMessageController from '../controllers/ChatMessageController.js';

const routes = new Router();

routes.get('/message', ChatMessageController.get);

export default routes;
