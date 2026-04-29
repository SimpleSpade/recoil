import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
// import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { PageLoading } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import defaultSettings from '../config/defaultSettings';
import {RequestConfig} from "@@/plugin-request/request";
import {RequestOptionsInit} from 'umi-request';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
// import {Link} from "@umijs/preset-dumi/lib/theme";

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/duiwujianshe/user/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser();
      //.data
      //@ts-ignore
      return msg.data;
    }  catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    // waterMarkProps: {
    //   content: initialState?.currentUser?.name,
    // },
    logo: false,
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    links: isDev
      ? [
          // <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
          //   <LinkOutlined />
          //   <span>OpenAPI 文档</span>
          // </Link>,
          // <Link to="https://www.baidu.com" key="docs">
          //   <LinkOutlined />
          //   <span>首页</span>
          // </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    // childrenRender: (children, props) => {
    //   // if (initialState?.loading) return <PageLoading />;
    //   return (
    //     <>
    //       {children}
    //       {!props.location?.pathname?.includes('/login') && (
    //         <SettingDrawer
    //           disableUrlParams
    //           enableDarkTheme
    //           settings={initialState?.settings}
    //           onSettingChange={(settings) => {
    //             setInitialState((preInitialState) => ({
    //               ...preInitialState,
    //               settings,
    //             }));
    //           }}
    //         />
    //       )}
    //     </>
    //   );
    // },
    ...initialState?.settings,
  };
};
//前置拦截器
const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => {

  // const token = localStorage.getItem('setAuthorization');
  // console.log(location.pathname)
  // if (location.pathname.search("\/5gcrm-client\/qrcode") != -1) {
  //   const previousUrl = location.pathname
  //   sessionStorage.setItem('previousUrl', previousUrl)
  // }

  const token = localStorage.getItem('setAuthorization');
  // console.log(token)
  const authHeader = {}
  if (token) {
    authHeader['Authorization'] = token
  }
  // console.log(authHeader['Authorization'] = token)
  // sessionStorage.setItem('setAuthorization',authHeader)
  // console.log(Author.setAuthorization)
  // Author.setAuthorization = authHeader;
  // console.log(Author.setAuthorization)
  // const token = sessionStorage.getItem('token');
  // console.log(token);
  // const token = sessionStorage.getItem('setAuthorization');
  // console.log(token)
  // const redirect = {}
  // redirect['redirect'] = `${url}`

  return {
    url: `${url}`,
    options: {...options, interceptors: true, headers: {...options.headers, ...authHeader}},
  };
  // if (sessionStorage.getItem('token')) {
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //     'Authorization': `Token ${sessionStorage.getItem('token')}`,
  //   };
  //   return {
  //     url,
  //     options: { ...options, headers },
  //   };
  // }

};
//后置拦截器  options: RequestOptionsInit
const authHeaderResponseInterceptor = (response: Response) => {
  const setAuthorization = response.headers.get('setAuthorization') || "";
  // console.log(setAuthorization)
  // if (setAuthorization) {
  localStorage.setItem('setAuthorization', setAuthorization)
  //登录12小时后清除缓存
  // setTimeout(()=>sessionStorage.clear(),43200000)
  // }

  // if (setAuthorization) {
  //   localStorage.setItem('setAuthorization', setAuthorization)
  // }
  return response;
};

export const request: RequestConfig = {
  // errorHandler,
  requestInterceptors: [authHeaderInterceptor,],
  responseInterceptors: [authHeaderResponseInterceptor,],
};

