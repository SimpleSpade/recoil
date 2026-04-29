// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取规则列表 GET /duiwujianshe/api/shebeiguanlimessageget */
export async function shebeiguanlimessageget(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.shebeiguanlimessagegetParams,
  options?: { [key: string]: any },
) {
  return request<API.ShebeiguanliMessageget>('/duiwujianshe/api/shebeiguanlimessageget', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
