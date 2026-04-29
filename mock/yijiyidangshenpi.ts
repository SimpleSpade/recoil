import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      uuid: '1',
      xh: '1',
      sbbm: 'dwqdwqdwqdqwfewfewfwefewfwefewfew',
      sbmc: 'dwqdwqdwqdqwfewfewfwefewfwefewfew',
      spzt: '审批中',
    },
    {
      uuid: '2',
      xh: '2',
      sbbm: 'qwwqerqwrqwerqwerqwerwqerq',
      sbmc: 'qwwqerqwrqwerqwerqwerwqerq',
      spzt: '审批完成',
    },
    {
      uuid: '3',
      xh: '3',
      sbbm: 'bvcxbxcvbxcvbvcbxvbcxvbxcvbcxvbcxvbcxvbxcbcx',
      sbmc: 'bvcxbxcvbxcvbvcbxvbcxvbxcvbcxvbcxvbcxvbxcbcx',
      spzt: '审批完成',
    },
  ];
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /yijiyidang/api/examineApprove': getRule,
};
