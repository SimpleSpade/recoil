import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      uuid: '1',
      xh: '序号1',
      eventCatelogId: '212',
      eventDesc: '事件描述1',
      responsibilityResult: '12',
      staffPeopleType: '关联人员类型1',
      eventSolutionDesc: '事件处置结果描述1',
      complainStaffName: '121212',
      eventVerifyResult: '事件审核结果1',
      staffNationality: '21212',
      staffIdType: '1212121',
      staffId: '1212111',
      eventCatelogType: '22212',
      eventEndTime: '212',
      eventCatelogDesc: '事件业务来源1',
      solutionDesc: '121',
      eventCreateTime: '2012-04-20',
      eventSolutionTime: '2013-04-20',
      complainantStaffName:'投诉人名称1',
      eventInsertDepartment:'收集部门1',
      eventNegativeExponent:'负指数1',
      eventAttributionAnalysisTableShow:'归因分析1',
      complainantStaffNationality:'中国',
      complainantStaffIdType:'证件1',
      complainantStaffId:'投诉人证件号码1',
      complainantStaffPhoneNum:'15000001123',
      eventPoliceCategory:'事件关联警种1',
      eventAttributionAnalysis:'归因分析1',
      eventRectificationMeasures:'整改措施12',

    },
    {
      uuid: '3',
      xh: '序号2',
      eventCatelogId: '515',
      eventDesc: '事件描述2',
      responsibilityResult: '15',
      staffPeopleType: '关联人员类型2',
      eventSolutionDesc: '事件处置结果描述2',
      complainStaffName: '151515',
      eventVerifyResult: '事件审核结果2',
      staffNationality: '51515',
      staffIdType: '1515151',
      staffId: '1515111',
      eventCatelogType: '55515',
      eventEndTime: '515',
      eventCatelogDesc: '事件业务来源2',
      solutionDesc: '151',
      eventCreateTime: '2022-04-20',
      eventSolutionTime: '2023-04-20',
      complainantStaffName:'投诉人名称2',
      eventInsertDepartment:'收集部门2',
      eventNegativeExponent:'负指数2',
      eventAttributionAnalysisTableShow:'归因分析2',
      complainantStaffNationality:'中国',
      complainantStaffIdType:'证件2',
      complainantStaffId:'投诉人证件号码2',
      complainantStaffPhoneNum:'150000011233',
      eventPoliceCategory:'事件关联警种2',
      eventAttributionAnalysis:'归因分析2',
      eventRectificationMeasures:'整改措施123',
    },
    {
      uuid: '2',
      xh: '序号3',
      eventCatelogId: '616',
      eventDesc: '事件描述3',
      responsibilityResult: '16',
      staffPeopleType: '关联人员类型3',
      eventSolutionDesc: '事件处置结果描述3',
      staffName: '161616',
      eventVerifyResult: '事件审核结果3',
      staffNationality: '61616',
      staffIdType: '1616161',
      staffId: '1616111',
      eventCatelogType: '66616',
      eventEndTime: '616',
      eventCatelogDesc: '事件业务来源3',
      solutionDesc: '161',
      eventCreateTime: '2024-04-20',
      eventSolutionTime: '2023-04-20',
      complainantStaffName:'投诉人名称3',
      eventInsertDepartment:'收集部门3',
      eventNegativeExponent:'负指数3',
      eventAttributionAnalysisTableShow:'归因分析3',
      complainantStaffNationality:'meiguo',
      complainantStaffIdType:'证件3',
      complainantStaffId:'投诉人证件号码3',
      complainantStaffPhoneNum:'1500000112232',
      eventPoliceCategory:'事件关联警种3',
      eventAttributionAnalysis:'归因分析31',
      eventRectificationMeasures:'整改措施12111133',
    },
  ];
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /duiwujianshe/api/shijianchakaninformationrule': getRule,
};
