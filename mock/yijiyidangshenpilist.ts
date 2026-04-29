import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      old:['设备编码:1111','设备名称:11111','设备厂商:111111111111111111111111111111','行政区划:11111111111111111111111111111111111',],
      new:['设备编码:1111','设备名称:11111','设备厂商:222222222222222222222222222222','行政区划:22222222222222222222222222222222222',],
    },
  ];
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /yijiyidang/api/messageget': getRule,
};
