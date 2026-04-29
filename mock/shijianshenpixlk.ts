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
    glmjdwcreatetablexlk: {
      关联民警单位1: {
        text: '关联民警单位1',
      },
      关联民警单位2: {
        text: '关联民警单位2',
      },
    },

  };

  return res.json(result);
}

export default {
  'GET /duiwujianshe/api/shijianshenpixialakuanginformationrule': getRule,
};
