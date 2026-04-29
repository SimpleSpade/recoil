// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /yijiyidang/api/notices': (req: Request, res: Response) => {
    res.status(200).send({
      data: [
        {
          id: 'Cfb5AD42-fC4e-4e7e-3849-C3ed6024AE7F',
          extra: '40z2rM',
          key: 11,
          read: true,
          avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          title: '想方四它北合单空展式低张们质研导。',
          status: 'warning',
          datetime: '1983-10-30',
          description: '联目克大劳至儿么消意信文主称。',
          type: 'notification',
        },
      ],
      total: 91,
      success: false,
    });
  },
};
