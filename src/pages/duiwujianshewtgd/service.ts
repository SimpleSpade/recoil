// @ts-ignore
import { request } from 'umi';
import {
  genzongTableListItem,
  shejirenyuanTableListItem,
  TableListItem,
  xiangqingTableListItem,
  xinzengTableListItem
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
  }>('/duiwujianshe/api/wtgdinformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function xiangqinginformationrule(
  params: { uuid: string | undefined },
  options?: { [p: string]: any },
) {
  return request<{
    data: xiangqingTableListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/yijiyidang/api/sbxgsqxiangqinginformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
/** 获取规则列表 GET /api/rule */
export async function genzonginformationrule(
  params: { uuid: string | undefined },
  options?: { [p: string]: any },
) {
  return request<{
    data: genzongTableListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/yijiyidang/api/sbxgsqgenzonginformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function xinzenginformationrule(
  params: { name: string | undefined },
  options?: { [p: string]: any },
) {
  return request<{
    data: xinzengTableListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/yijiyidang/api/sbxgsqxinzenginformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


/** 新建规则 PUT /api/rule */
export async function updateinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/wtgdbianjiinformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

export async function fenfainformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/rcddglfenfainformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}


/** 获取规则列表 GET /api/rule */
export async function shejirenyuaninformationrule(
  params: { uuid: string | undefined },
  options?: { [p: string]: any },
) {
  return request<{
    data: shejirenyuanTableListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/duiwujianshe/api/shejirenyuaninformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function rcddshejirenyuaninformationrule(
  params: { uuid: string | undefined },
  options?: { [p: string]: any },
) {
  return request<{
    data: shejirenyuanTableListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/duiwujianshe/api/rcddshejirenyuaninformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


export async function pingguinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/rcddglpingguinformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

export async function guidanginformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/rcddglguidanginformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}


/** 新建规则 POST /api/rule */
export async function addinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/duiwujianshe/api/rcddglinformationrule', {
    data,
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(data: { key: number[] }, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/duiwujianshe/api/jbtsglinformationrule', {
    data,
    method: 'DELETE',
    ...(options || {}),
  });
}
