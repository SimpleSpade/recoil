import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      uuid: '1',
      xh: '1',
      eventTagName: ["zhejiang", "hangzhou", "xihu"],
      setYewuchangjingDetaildata:["zhejiang", "hangzhou", "xihu"],
      eventCatelogId: '212',
      eventDesc: '212',
      responsibilityResult: '12',
      eventSolutionDesc: '121',
      complainStaffName: '121212',
      eventVerifyResult: '1212121',
      staffNationality: '21212',
      staffIdType: '1212121',
      staffId: '1212111',
      eventCatelogType: '22212',
      eventEndTime: '212',
      eventCatelogDesc: '12211',
      solutionDesc: '121',
      eventCreateTime:'2012-04-20',
      setSheshiminjingDetaildata:[
    {
      id: 1,
      policeId: 'dwqdwqdwqfwefewfwefewfew',
      policeName: 'dwqdwqdwqdqwfewfewfwefewfwefewfew',
      staffPoliceid: 'wfewfew',
      policeSolutionDesc: '121',
      responsibilityResult: 'wfewfew111',
    },
    {
      id: 2,
      policeId: 'qwwqerqwrqwewqerq',
      policeName: 'qwwqerqwrqwerqwerqwerwqerq',
      staffPoliceid: 'qwrqwer',
      policeSolutionDesc: '23232',
      responsibilityResult: 'wfewfew222',
    },
    {
      id: 3,
      policeId: 'bvcxbxcvbxcvbvcbxvbcxvbcxvbxcbcx',
      policeName: 'bvcxbxcvbxcvbvcbxvbcxvbxcvbcxvbcxvbcxvbxcbcx',
      staffPoliceid: 'bvcbxvbcxvb',
      policeSolutionDesc: '343',
      responsibilityResult: 'wfewfew333',
    },
  ],

    },
    {
      uuid: '3',
      xh: '1',
      eventCatelogId: '515',
      eventDesc: '515',
      responsibilityResult: '15',
      eventSolutionDesc: '151',
      complainStaffName: '151515',
      eventVerifyResult: '1515151',
      staffNationality: '51515',
      staffIdType: '1515151',
      staffId: '1515111',
      eventCatelogType: '55515',
      eventEndTime: '515',
      eventCatelogDesc: '1511',
      solutionDesc: '151',
      eventCreateTime:'2022-04-20',
    },
    {
      uuid: '2',
      xh: '1',
      eventCatelogId: '616',
      eventDesc: '616',
      responsibilityResult: '16',
      eventSolutionDesc: '161',
      staffName: '161616',
      eventVerifyResult: '1616161',
      staffNationality: '61616',
      staffIdType: '1616161',
      staffId: '1616111',
      eventCatelogType: '66616',
      eventEndTime: '616',
      eventCatelogDesc: '16311',
      solutionDesc: '161',
      eventCreateTime:'2024-04-20',
    },
  ];
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /duiwujianshe/api/shijianchakanzhuanguaninformationrule': getRule,
};
