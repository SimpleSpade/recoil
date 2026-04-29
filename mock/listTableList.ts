import {Request, Response} from 'express';
// import {informationrule} from "@/pages/TableListtj/service";


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {id: 1, username: '我', longitudeandlatitude: '121.26818140045167，31.349871569138436',
      createtime: '2022-09-11 14:53:25', hiddenpeople: '我自己', hiddenthings: '想下班', operator: '自己'},
  ];
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /wuziguanli/api/informationrule': getRule,
};
