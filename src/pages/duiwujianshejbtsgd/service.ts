// @ts-ignore
import { request } from 'umi';
import { TableListItem} from './data';

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
  }>('/duiwujianshe/api/jbtsglguidanginformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}




/** 新建规则 PUT /api/rule */
export async function fankuiupdateinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/fankuiinformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

export async function jzfhupdateinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/dwbmhcjzfhinformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

export async function fenfainformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/jbtsglfenfainformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

export async function pingguinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/jbtsglpingguinformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

export async function guidanginformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/jbtsglguidanginformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}


/** 新建规则 POST /api/rule */
export async function addinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/dwbmhcinformationrule', {
    data,
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(data: { key: number[] }, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/duiwujianshe/api/dwbmhcinformationrule', {
    data,
    method: 'DELETE',
    ...(options || {}),
  });
}
