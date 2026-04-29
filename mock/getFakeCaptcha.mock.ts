// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /yijiyidang/api/login/captcha': (req: Request, res: Response) => {
    res.status(200).send({ code: 93, status: 'error' });
  },
};
