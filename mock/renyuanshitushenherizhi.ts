import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      eventVerifyIdea: '审核意见1',
      eventVerifyResult: '事件审核结果1',
      eventVerifyTime: '2023-02-08',
    },
    {
      eventVerifyIdea: '审核意见2',
      eventVerifyResult: '事件审核结果2',
      eventVerifyTime: '2023-02-18',
    },
    {
      eventVerifyIdea: '审核意见3',
      eventVerifyResult: '事件审核结果3',
      eventVerifyTime: '2023-02-23',
    },
  ];
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /duiwujianshe/api/renyuanshitushenherizhiinformationrule': getRule,
};
