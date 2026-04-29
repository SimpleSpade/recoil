import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      data: [
        {
          xh: '1',
          jksbmc: '11',
          jpbh: '111',
        },
        {
          xh: '2',
          jksbmc: '22',
          jpbh: '222',
        },
        {
          xh: '3',
          jksbmc: '33',
          jpbh: '333',
        },
        {
          xh: '4',
          jksbmc: '44',
          jpbh: '444',
        }
      ],
      sqdw: '东方有线',
      sqsj: 'sqsj',
      sqr: 'sqr',
      lxdh: 'lxdh',
      xgsx: 'xgsx',
      sqyy: 'sqyy',
      pcssh: 'pcssh',
      pcsshjg: 'pcsshjg',
      pcsshrq: 'pcsshrq',
      kjksh1: 'kjksh1',
      kjkshjg1: 'kjkshjg1',
      kjkshrq1: 'kjkshrq1',
      kjksh2: 'kjksh2',
      kjkshjg2: 'kjkshjg2',
      kjkshrq2: 'kjkshrq2',
      hksh: 'hksh',
      hkshjg: 'hkshjg',
      hkshrq: 'hkshrq',
      pcsdisable: true,
      kjkdisable: true,
      kjk1disable: true,
      kjk2disable: false,
      hkdisable: true,
    },
  ];
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /yijiyidang/api/sbxgshshenpiinformationrule': getRule,
};
