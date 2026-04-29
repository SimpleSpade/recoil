import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {

  let positionArr = {
    uuid: 1234,
    }
  ;
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /duiwujianshe/api/getjbtsgluuid': getRule,
};
