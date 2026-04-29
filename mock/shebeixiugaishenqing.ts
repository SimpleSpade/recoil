import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      uuid: '21dadfasfasf',
      xh: '1',
      sqdw: '1',
      sqr: '1',
      lxdh: '1',
      xgsx: '1',
      sqyy: '1',
      dqbz: '1',
      shjg: '1',
      sqsj: '1',
      pcssh: '1',
      pcsshjg: '1',
      pcsshrq: '1',
      kjksh1: '1',
      kjkshjg1: '1',
      kjkshrq1: '1',
      kjksh2: '1',
      kjkshjg2: '1',
      kjkshrq2: '1',
      hksh: '1',
      hkshjg: '1',
      hkshrq: '1',
      pcsshbz: true,
      kjkshbz: true,
      czyshbz1: true,
      czyshbz2: false,
      hkshbz: true,
    },
    {
      uuid: '221dadfasfasf',
      xh: '2',
      sqdw: '2',
      sqr: '2',
      lxdh: '2',
      xgsx: '2',
      sqyy: '2',
      dqbz: '2',
      shjg: '2',
      sqsj: '2',
      pcssh: '2',
      pcsshjg: '2',
      pcsshrq: '2',
      kjksh1: '2',
      kjkshjg1: '2',
      kjkshrq1: '2',
      kjksh2: '2',
      kjkshjg2: '2',
      kjkshrq2: '2',
      hksh: '2',
      hkshjg: '2',
      hkshrq: '2',
      pcsshbz: true,
      kjkshbz: true,
      czyshbz1: false,
      czyshbz2: true,
      hkshbz: true,
    },
    {
      uuid: '321dadfasfasf',
      xh: '3',
      sqdw: '3',
      sqr: '3',
      lxdh: '3',
      xgsx: '3',
      sqyy: '3',
      dqbz: '3',
      shjg: '3',
      sqsj: '3',
      pcssh: '3',
      pcsshjg: '3',
      pcsshrq: '3',
      kjksh1: '3',
      kjkshjg1: '3',
      kjkshrq1: '3',
      kjksh2: '3',
      kjkshjg2: '3',
      kjkshrq2: '3',
      hksh: '3',
      hkshjg: '3',
      hkshrq: '3',
      pcsshbz: true,
      kjkshbz: true,
      czyshbz1: true,
      czyshbz2: true,
      hkshbz: false,
    },
  ];
  const result = {
    data: positionArr,

  };

  return res.json(result);
}

export default {
  'GET /yijiyidang/api/sbxgsqinformationrule': getRule,
};
