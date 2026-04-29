import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr =
    {
      username: 'zty',
      cardid: '31011418888888',
      phonenum: '1500000000',
      name: '赵唐煜',
      policeidjobid: '1221',
      oldpassword: '12345678',
      eventrecorder: true,
      eventauditor: false,
      administrator: false,
      globalview: true,
      policeCategory:'交警',
    };
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /duiwujianshe/api/gerenzhongxininformationrule': getRule,
};
