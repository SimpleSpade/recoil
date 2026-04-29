import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {error_row:3,
      error_msg:"请检查必填项1"},
    {error_row:4,
      error_msg:"请检查必填项2"},
    {error_row:5,
      error_msg:"请检查必填项3"},
    {error_row:6,
      error_msg:"请检查必填项4"},
  ];
  const result = {
    errorMsg: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /duiwujianshe/api/shijianluruxialakuanginformationrule': getRule,
};
