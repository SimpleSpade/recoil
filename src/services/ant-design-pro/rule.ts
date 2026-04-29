// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取规则列表 GET /duiwujianshe/api/rule */
export async function rule(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ruleParams,
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/duiwujianshe/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /duiwujianshe/api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/duiwujianshe/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /duiwujianshe/api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/duiwujianshe/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /duiwujianshe/api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/duiwujianshe/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
