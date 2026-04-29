// @ts-ignore
import { request } from 'umi';
import { TableListItem } from './data';

/** 获取规则列表 GET /api/rule */
export async function shebeiguanli(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    data: TableListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/wuziguanli/api/shebeiguanlimessageget', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateshebeiguanli(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/wuziguanli/api/shebeiguanlimessageget', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addshebeiguanli(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/wuziguanli/api/shebeiguanlimessageget', {
    data,
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeshebeiguanli(data: { key: number[] }, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/wuziguanli/api/shebeiguanlimessageget', {
    data,
    method: 'DELETE',
    ...(options || {}),
  });
}
