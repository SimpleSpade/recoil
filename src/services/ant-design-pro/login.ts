// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 登录接口 POST /duiwujianshe/api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/duiwujianshe/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送验证码 POST /duiwujianshe/api/login/captcha */
export async function getFakeCaptcha(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFakeCaptchaParams,
  options?: { [key: string]: any },
) {
  return request<API.FakeCaptcha>('/duiwujianshe/api/login/captcha', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 登录接口 POST /duiwujianshe/api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/duiwujianshe/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}
