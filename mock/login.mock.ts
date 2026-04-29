// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /yijiyidang/api/login/account': (req: Request, res: Response) => {
    res.status(200).send({ status: 'warning', type: 10, currentAuthority: 'user' });
  },
};
