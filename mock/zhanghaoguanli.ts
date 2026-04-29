import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      uuid: '1',
      username: 'zty',
      unit: '南翔派出所',
      name: '赵唐煜',
      cardid: '3101114199888888',
      policeidjobid: '15221',
      ifeventrecorder: '是',
      ifeventauditor: '否',
      ifadministrator: '是',
      ifglobalview: '否',
      ifaccountadministrator: '否',
      policecategory: '民警',
      phonenum: '15000000',
    },
    {
      uuid: '2',
      username: 'zty22',
      unit: '嘉城派出所',
      name: '施晨烨',
      cardid: '3101224199888888',
      policeidjobid: '3221',
      ifeventrecorder: '是',
      ifeventauditor: '是',
      ifadministrator: '是',
      ifglobalview: '是',
      policecategory: '交警',
      ifaccountadministrator: '否',
      phonenum: '160000000',
    },
    {
      uuid: '3',
      username: 'zty3',
      unit: '新成派出所',
      name: '陈佳宇',
      cardid: '31031424199888888',
      policecategory: '督查',
      policeidjobid: '85221',
      ifeventrecorder: '否',
      ifeventauditor: '否',
      ifadministrator: '否',
      ifglobalview: '是',
      ifaccountadministrator: '否',
      phonenum: '1770000000',
    },
  ];
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /duiwujianshe/api/zhanghaoguanliinformationrule': getRule,
};
