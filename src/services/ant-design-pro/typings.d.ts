// @ts-ignore
/* eslint-disable */

import {stringify} from "querystring";

declare namespace API {
  type CurrentUser = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: string;
    phone?: string;
    email?: string;
    userStatus?: number;
    createTime?: string;
    permission?:number;
  };

  //登陆返回结果
  type LoginResult = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: string;
    phone?: string;
    email?: string;
    userStatus?: number;
    createTime?: string;
    permission?:number;
  };
  //注册返回结果
  type RegisterResult=number;

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: CurrentUser[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };
  //对接后端
  type BaseResponse<T>={
    data:T,
    message:string,
    code:number,
    description:string
  }

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };
//登陆表单参数
  type LoginParams = {
    userAccount?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };
//注册表单参数
  type RegisterParams = {
    userAccount?: string;
    password?: string;
    checkCode?: string;
  };
  //对接后端删除方法的接口
  type deleteResponse={
     isSuccess?:boolean;
  }

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
