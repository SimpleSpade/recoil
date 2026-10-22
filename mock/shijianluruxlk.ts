import {Request, Response} from 'express';


// mock tableListDataSource


function getRule(req: Request, res: Response) {
  let positionArr = [
    {
      value: '投诉人国籍1',
      label: '投诉人国籍1',
    },
    {
      value: '投诉人国籍2',
      label: '投诉人国籍2',
    },
  ];
  const result = {
    tsrgjfromxlk: positionArr,
    errorMsg: [
      {
        error_row: 3,
        error_msg: "请检查必填项1"
      },
      {
        error_row: 4,
        error_msg: "请检查必填项2"
      },
      {
        error_row: 5,
        error_msg: "请检查必填项3"
      },
      {
        error_row: 6,
        error_msg: "请检查必填项4"
      },
    ],
    ywcjfromdxlk: [
      {
        value: 'jiangsu',
        label: '业务场景1',
        children: [
          {
            value: 'nanjing',
            label: '业务场景2',
            children: [
              {
                value: 'zhonghuamen',
                label: '业务场景3',
              },
            ],
          },
        ],
      },
    ],
    wtlxfromdxlk: [
      {
        value: 'zhejiang',
        label: '问题类型1',
        children: [
          {
            value: 'hangzhou',
            label: '问题类型2',
            children: [
              {
                value: 'xihu',
                label: '问题类型3',
              },
            ],
          },
        ],
      },
    ],
    sjywlxfromxlk: [
      {
        value: 'zhejiang',
        label: '事件业务来源1',
        children: [
          {
            value: 'hangzhou',
            label: '事件业务来源2',
          },
          {
            value: 8,
            label: '12345',
          },
          {
            value: 9,
            label: '12337',
          },
          {
            value: 10,
            label: '12377',
          },
          {
            value: 11,
            label: '信访',
          },
        ],
      },
    ],
    gyfxfromdxlk: [
      {
        value: 'zhejiang',
        label: '归因分析1',
        children: [
          {
            value: 'hangzhou',
            label: '归因分析2',
          },
        ],
      },
      {
        value: 'shanghai',
        label: '归因分析3',
        children: [
          {
            value: 'jiading',
            label: '归因分析4',
          },
        ],
      },
    ],
    gyfxtablexlk: [
      {
        label: '归因分析1',
        value: 'fe',
        children: [
          {
            label: '归因分析2',
            value: 'js',
          },
          {
            label: '归因分析3',
            value: 'ts',
          },
        ],
      },
      {
        label: '归因分析4',
        value: 'be',
        children: [
          {
            label: '归因分析5',
            value: 'java',
          },
          {
            label: '归因分析6',
            value: 'go',
          },
        ],
      },
    ],
    glmjdwtablexlk: {
      关联民警单位1: {
        text: '关联民警单位1',
      },
      关联民警单位2: {
        text: '关联民警单位2',
      },
    },
    gxgzrylxtablexlk: {
      关心关注人员类型1: {
        text: '关心关注人员类型1',
      },
      关心关注人员类型2: {
        text: '关心关注人员类型2',
      },
    },
    sfyrdstablexlk:
      {
        是: {
          text: '是',
        },
        否: {
          text: '否',
        },
      },
    sjywlxtablexlk: [{
      field: '事件业务来源1',
      value: '事件业务来源1',
      disabled: true,
      language: [
        {
          field: '事件业务来源2',
          value: '关联民警处理结果',
        },
        {
          field: '事件业务来源3',
          value: 'ts',
        },
      ],
    },
      {
        field: '事件业务来源4',
        value: 'be',
        disabled: true,
        language: [
          {
            field: '事件业务来源5',
            value: 'java',
          },
          {
            field: '事件业务来源6',
            value: 'go',
          },
        ],
      },
    ],
    glmjcljgcreatetablexlk: [
      {
        field: '关联民警处理结果1',
        value: '关联民警处理结果1',
        disabled: true,
        language: [
          {
            field: '关联民警处理结果2',
            value: '关联民警处理结果',
          },
          {
            field: '关联民警处理结果3',
            value: 'ts',
          },
        ],
      },
      {
        field: '关联民警处理结果4',
        value: 'be',
        disabled: true,
        language: [
          {
            field: '关联民警处理结果5',
            value: 'java',
          },
          {
            field: '关联民警处理结果6',
            value: 'go',
          },
        ],
      },
    ],
    glrylxtablexlk: {
      关联人员类型1: {
        text: '关联人员类型1',
      },
      关联人员类型2: {
        text: '关联人员类型2',
      },
    },
    glrylxformxlk: [
      {
        value: '民警',
        label: '民警',
      },
      {
        value: '辅警',
        label: '辅警',
      },
      {
        value: '全部',
        label: '全部',
      },
    ],
    ywcjtablexlk: [
      {
        field: '业务场景1',
        value: 'fe',
        language: [
          {
            field: '业务场景2',
            value: 'js',
          },
          {
            field: '业务场景3',
            value: 'ts',
          },
        ],
      },
      {
        field: '业务场景4',
        value: 'be',
        language: [
          {
            field: '业务场景5',
            value: 'java',
          },
          {
            field: '业务场景6',
            value: 'go',
          },
        ],
      },
    ],
    wtlxtablexlk: [
      {
        field: '问题类型1',
        value: 'fe',
        language: [
          {
            field: '问题类型2',
            value: 'js',
          },
          {
            field: '问题类型3',
            value: 'ts',
          },
        ],
      },
      {
        field: '问题类型4',
        value: 'be',
        language: [
          {
            field: '问题类型5',
            value: 'java',
          },
          {
            field: '问题类型6',
            value: 'go',
          },
        ],
      },
    ],
    sjgljztablexlk: {
      事件关联警种1: {
        text: '事件关联警种1',
      },
      事件关联警种2: {
        text: '事件关联警种2',
      },
    },
    sjshjgtablexlk: {
      事件审核结果1: {
        text: '事件审核结果1',
      },
      事件审核结果2: {
        text: '事件审核结果2',
      },
    },
    tsrzjlxfromxlk: [
      {
        value: 'zhejiang',
        label: '投诉人证件类型1',
        children: [
          {
            value: 'hangzhou',
            label: '投诉人证件类型2',
            children: [
              {
                value: 'xihu',
                label: '投诉人证件类型3',
              },
            ],
          },
        ],
      },
    ],
    sjgljzfromdxlk: [
      {
        value: 'zhejiang',
        label: '事件关联警种1',
        children: [
          {
            value: 'hangzhou',
            label: '事件关联警种2',
            children: [
              {
                value: 'xihu',
                label: '事件关联警种3',
              },
            ],
          },
        ],
      },
    ],
    // 事件所属单位与关联人员单位共用这份下拉数据。
    // 派出所使用「XX所」短名，必须与页面 POLICE_STATION_DEPARTMENTS 名单一致，
    // 选中派出所后「事件对应派出所业务领域」才会解除禁用；其余为分局科室/支队，用于验证禁用逻辑。
    glmjdwcreatetablexlk: {
      华亭所: {text: '华亭所'},
      南翔所: {text: '南翔所'},
      叶城所: {text: '叶城所'},
      唐行所: {text: '唐行所'},
      嘉城所: {text: '嘉城所'},
      外冈所: {text: '外冈所'},
      娄塘所: {text: '娄塘所'},
      安亭所: {text: '安亭所'},
      封浜所: {text: '封浜所'},
      徐行所: {text: '徐行所'},
      戬浜所: {text: '戬浜所'},
      新成所: {text: '新成所'},
      方泰所: {text: '方泰所'},
      水上所: {text: '水上所'},
      江桥所: {text: '江桥所'},
      真新所: {text: '真新所'},
      菊园所: {text: '菊园所'},
      马陆所: {text: '马陆所'},
      高校上赛所: {text: '高校上赛所'},
      黄渡所: {text: '黄渡所'},
      交警支队: {text: '交警支队'},
      治安支队: {text: '治安支队'},
      分局数据科: {text: '分局数据科'},
    },
    sjdypcsywly: {
      治安: {text: '治安'},
      社区: {text: '社区'},
      交通: {text: '交通'},
      巡逻: {text: '巡逻'},
      综合指挥: {text: '综合指挥'},
      队伍管理: {text: '队伍管理'}
    },

  };

  return res.json(result);
}

export default {
  'GET /duiwujianshe/api/shijianluruxialakuanginformationrule': getRule,
};
