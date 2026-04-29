import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      id: 1,
      eventTagType: '标签类型1',
      eventTagName: '标签名称1',
    },
    {
      id: 2,
      eventTagType: '标签类型2',
      eventTagName: '标签名称2',
    },
    {
      id: 3,
      eventTagType: '标签类型3',
      eventTagName: '标签名称3',
    },
  ];
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /duiwujianshe/api/shijianbiaoqianinformationrule': getRule,
};
