// @ts-ignore
import { request } from 'umi';
import {genzongTableListItem, TableListItem, xiangqingTableListItem, xinzengTableListItem} from './data';

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
  }>('/yijiyidang/api/sbxgsqinformationrule', {
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

/** 获取规则列表 GET /api/rule */
export async function shenpiinformationrule(
  params: { uuid: string | undefined },
  options?: { [p: string]: any },
) {
  return request<{
    data: xinzengTableListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/yijiyidang/api/sbxgshshenpiinformationrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}



export async function xiugaishenpiinformationrule(
  params: { uuid: string | undefined },
  options?: { [p: string]: any },
) {
  return request<{
    data: xinzengTableListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/yijiyidang/api/xiugaishenpiinformationrule', {
    method: 'post',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}



/** 新建规则 PUT /api/rule */
export async function updateinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/yijiyidang/api/sbxgsqinformationrule', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addinformationRule(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>('/yijiyidang/api/sbxgsqinformationrule', {
    data,
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(data: { key: number[] }, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/yijiyidang/api/sbxgsqinformationrule', {
    data,
    method: 'DELETE',
    ...(options || {}),
  });
}
