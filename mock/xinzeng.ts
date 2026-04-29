import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      sqdw: '提交申请',
      sqsj: '172727',
      sqr: '127272',
      lxdh: '124727272',
    },
  ];

  let xlkdata = [
    {
      value: '派出所审核',
      label: '派出所审核',
    },
    {
      value: '科技科审核',
      label: '科技科审核',
    },
    {
      value: '海康审核',
      label: '海康审核',
    },
  ];
  const result = {
    data: positionArr,
    xlk: xlkdata,
  };

  return res.json(result);
}

export default {
  'GET /yijiyidang/api/sbxgsqxinzenginformationrule': getRule,
};
