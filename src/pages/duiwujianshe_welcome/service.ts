// @ts-ignore
import { request } from 'umi';
import {
  shenherizhiTableListItem,
  sheshiminjingTableListItem, shijianbiaoqianTableListItem,
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
  }>('/duiwujianshe/api/shijianluruinformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


/** 新建规则 PUT /api/rule */
export async function updateinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/shijianlurubianjiinformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

export async function tijiaoshenpiinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/tijiaoshenpiinformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}


/** 获取规则列表 GET /api/rule */
export async function shenherizhiinformationrule(
  params: { uuid: string | undefined },
  options?: { [p: string]: any },
) {
  return request<{
    data: shenherizhiTableListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/duiwujianshe/api/shenherizhiinformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
export async function sheshiminjinginformationrule(
  params: { uuid: string | undefined },
  options?: { [p: string]: any },
) {
  return request<{
    data: sheshiminjingTableListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/duiwujianshe/api/sheshiminjinginformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function shijianbiaoqianinformationrule(
  params: { uuid: string | undefined },
  options?: { [p: string]: any },
) {
  return request<{
    data: shijianbiaoqianTableListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/duiwujianshe/api/shijianbiaoqianinformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/shijianluruinformationrule', {
    data,
    method: 'POST',
    ...(options || {}),
  });
}

export async function shijianluruxialakuanginformationrule(
  // params: { uuid: string | undefined },
  options?: { [p: string]: any },
) {
  return request<{}>('/duiwujianshe/api/shijianluruxialakuanginformationrule', {
    method: 'GET',
    params: {
      // ...params,
    },
    ...(options || {}),
  });
}




