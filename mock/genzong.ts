import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      clbz: '提交申请',
      clr: '1',
      kssj: '1',
      jssj: '1',
      jg: '1',
    },
    {
      clbz: '派出所审批',
      clr: '2',
      kssj: '2',
      jssj: '2',
      jg: '2',
    },
    {
      clbz: '科技科审批',
      clr: '',
      kssj: '',
      jssj: '',
      jg: '',
    },
    {
      clbz: '科技科审批',
      clr: '4',
      kssj: '4',
      jssj: '4',
      jg: '4',
    },
    {
      clbz: '海康确认',
      clr: '5',
      kssj: '5',
      jssj: '5',
      jg: '5',
    },
    {
      clbz: '结束',
      clr: '6',
      kssj: '6',
      jssj: '6',
      jg: '6',
    },
  ];
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /yijiyidang/api/sbxgsqgenzonginformationrule': getRule,
};
