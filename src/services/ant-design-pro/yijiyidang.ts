// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取规则列表 GET /duiwujianshe/api/messageget */
export async function yijiyidang(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.yijiyidangParams,
  options?: { [key: string]: any },
) {
  return request<API.YijiyidangList>('/duiwujianshe/api/messageget', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
