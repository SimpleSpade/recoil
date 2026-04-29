import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      id: 1,
      policeId: '关联民警身份证号码1',
      policeName: '关联民警姓名1',
      staffPoliceid: '关联民警警号1',
      staffPeopleType: '关联人员类型1',
      policeSolutionDesc: '关联民警处理结果描述1',
      responsibilityResult: '责任标识1',
      staffPoliceUnit: '关联民警单位1',
      staffPoliceProcessResult: '关联民警处理结果1',
    },
    {
      id: 2,
      policeId: '关联民警身份证号码2',
      policeName: '关联民警姓名2',
      staffPoliceid: '关联民警警号2',
      staffPeopleType: '关联人员类型2',
      policeSolutionDesc: '关联民警处理结果描述2',
      responsibilityResult: '责任标识2',
      staffPoliceUnit: '关联民警单位2',
      staffPoliceProcessResult: '关联民警处理结果2',
    },
    {
      id: 3,
      policeId: '关联民警身份证号码3',
      policeName: '关联民警姓名3',
      staffPeopleType: '关联人员类型3',
      staffPoliceid: '关联民警警号3',
      policeSolutionDesc: '关联民警处理结果描述3',
      responsibilityResult: '责任标识3',
      staffPoliceUnit: '关联民警单位3',
      staffPoliceProcessResult: '关联民警处理结果3',
    },
  ];
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /duiwujianshe/api/renyuanshitusheshiminjinginformationrule': getRule,
};
