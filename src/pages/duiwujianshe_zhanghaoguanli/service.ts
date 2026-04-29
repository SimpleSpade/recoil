// @ts-ignore
import { request } from 'umi';
import {
  TableListItem,
} from './data';

/** 获取规则列表 GET /api/rule */
export async function informationrule(
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
  }>('/duiwujianshe/api/zhanghaoguanliinformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


/** 新建规则 PUT /api/rule */
export async function updateinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/zhanghaoguanliinformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}



/** 新建规则 POST /api/rule */
export async function addinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/zhanghaoguanliinformationrule', {
    data,
    method: 'POST',
    ...(options || {}),
  });
}


/** 删除规则 DELETE /api/rule */
export async function removeRule(data: { uuid: string | undefined }, options?: { [p: string]: any }) {
  return request<Record<string, any>>('/duiwujianshe/api/zhanghaoguanliinformationrule', {
    data,
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function zhanghaoguanlixialakuanginformationrule(
  // params: { uuid: string | undefined },
  options?: { [p: string]: any },
) {
  return request<{}>('/duiwujianshe/api/zhanghaoguanlixialakuanginformationrule', {
    method: 'GET',
    params: {
      // ...params,
    },
    ...(options || {}),
  });
}




