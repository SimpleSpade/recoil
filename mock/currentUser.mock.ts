// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /yijiyidang/api/currentUser': (req: Request, res: Response) => {
    res.status(200).send({
      name: '黄勇',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      userid: 'e7F0a18E-Cfbe-3045-DAc5-490adceA11C7',
      email: 'x.tzoeqmsvh@ecimvjwcp.ck',
      signature: '不动离样而万队为酸情需往太回约育外。',
      title: '有响对商适如难进线值报第该适路。',
      group: '前端 6 组',
      tags: [
        { key: 1, label: '健身达人' },
        { key: 2, label: '算法工程师' },
        { key: 3, label: '算法工程师' },
        { key: 4, label: '阳光少年' },
        { key: 5, label: '傻白甜' },
        { key: 6, label: '专注设计' },
        { key: 7, label: '算法工程师' },
      ],
      notifyCount: 84,
      unreadCount: 74,
      country: '南非',
      access: '在于院立长说斗些或次同型路提可空精。',
      geographic: { province: { label: '天津', key: 8 }, city: { label: '离岛', key: 9 } },
      address: '河南省 商丘市 虞城县',
      phone: '11176109121',
    });
  },
};
