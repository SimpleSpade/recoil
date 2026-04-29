// import {PlusOutlined} from '@ant-design/icons';
// import type {UploadProps} from 'antd';
import {Button, message} from 'antd';
import React, {useState, useRef} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import type {ActionType} from '@ant-design/pro-table';
// import ProTable from '@ant-design/pro-table';
// import {ModalForm, ProFormText} from '@ant-design/pro-form';
// import type {ProDescriptionsItemProps} from '@ant-design/pro-descriptions';
// import ProDescriptions from '@ant-design/pro-descriptions';
// import type {FormValueType} from './components/UpdateForm';
// import UpdateForm from './components/UpdateForm';
// import {
//   gerenzhongxininformationrule,
//   // informationrule,
//   // updateinformationRule,
//
//   // shenherizhiinformationrule,
//   // sheshiminjinginformationrule,
//   // tijiaoshenpiinformationRule,
//   // shijianluruxialakuanginformationrule,
//   // shijianbiaoqianinformationrule
// } from './service';
// import {UploadOutlined} from '@ant-design/icons';
import type {TableListItem,} from './data';
// import moment from 'moment';
// import {request} from 'umi';
import {
  // EditableProTable,
  // ProFormDateTimePicker,
  ProFormInstance,
} from '@ant-design/pro-components';
import {
  // ModalForm,
  ProForm, ProFormCheckbox,
  ProFormText, ProFormSelect,
  // ProFormRadio,
} from '@ant-design/pro-components';
import {useModel} from "@@/plugin-model/useModel";
import ProCard from "@ant-design/pro-card";
import {addinformationRule} from "@/pages/duiwujianshe_shijianluru/service";
// import {Placement} from "rc-drawer/lib/Drawer";

// import ProCard from "@ant-design/pro-card";
// import any = jasmine.any;
// import moment from 'moment';
// import {RecoilRoot} from "recoil";
// import ButtonTest from "@/pages/TableList/ButtonTest";
// import ShowTest from "@/pages/TableList/ShowTest";
// import {ColumnHeightOutlined, ReloadOutlined, SettingOutlined} from '@ant-design/icons';

/**
 * 添加节点
 *
 * @param fields
 */

/**
 * 更新节点
 *
 * @param fields
 */

/**
 * 删除节点
 *
 * @param selectedRows
 */

// const handleRemove = async (selectedRows: TableListItem[]) => {
//   const hide = message.loading('正在删除');
//   if (!selectedRows) return true;
//
//   try {
//     await removeRule({
//       key: selectedRows.map((row) => row.key),
//     });
//     hide();
//     message.success('删除成功，即将刷新');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('删除失败，请重试');
//     return false;
//   }
// };


const TableListzsgc: React.FC = () => {

  /** 新建窗口的弹窗 */
    // const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const formRef = useRef<ProFormInstance<any>>();
  // const [bianjibutton, setBianjibutton] = useState<boolean>();
  // const [shanchubutton, setShanchubutton] = useState<boolean>();
  //提交审批
  // const [tijiaoshenpiModalVisible, setTijiaoshenpiModalVisible] = useState<boolean>(false);
  // const [tijiaoshenpiuuid, setTijiaoshenpiguuid] = useState<string>();

  //触发请求
  const [changerequest, setChangerequest] = useState<number>(0)


  //初始数据
  // const [chushiyonghuming, setChushiyonghuming] = useState<string>();
  // const [chushizhengjianhaoma, setChushizhengjianhaoma] = useState<string>();
  // const [chushilianxidianhua, setChushilianxidianhua] = useState<string>();
  // const [chushixingming, setChushixingming] = useState<string>();
  // const [chushijinghaogonghao, setChushijinghaogonghao] = useState<string>();
  // const [chushiyuanmima, setChushiyuanmima] = useState<string>();
  // const [chushieventRecorder, setChushieventRecorder] = useState<boolean>();
  // const [chushieventAuditor, setChushieventAuditor] = useState<boolean>();
  // const [chushiadministrator, setChushiadministrator] = useState<boolean>();
  // const [chushiglobalView, setChushiglobalView] = useState<boolean>();
  //获得登录数据
  const {initialState} = useModel('@@initialState');
  // @ts-ignore
  const {currentUser} = initialState;

  //禁用
  const [bianjibutton, setBianjibutton] = useState<boolean>(false);
  const [baocunxiugaibutton, setBaocunxiugaibutton] = useState<boolean>(true);

  // const [yonghuming, setYonghuming] = useState<boolean>(true);
  const [zhengjianhaoma, setZhengjianhaoma] = useState<boolean>(true);
  const [lianxidianhua, setLianxidianhua] = useState<boolean>(true);
  const [xingming, setXingming] = useState<boolean>(true);
  const [jinghaogonghao, setJinghaogonghao] = useState<boolean>(true);
  const [jingzhong, setJingzhong] = useState<boolean>(true);
  // const [yuanmima, setYuanmima] = useState<boolean>(true);
  const [xinmima, setXinmima] = useState<boolean>(true);
  const [xinmimaqueren, setXinmimaqueren] = useState<boolean>(true);

  //数据下拉框
  // const [policeCategoryformxlk, setpPoliceCategoryformxlk] = useState([]);


  const handleAdd = async (fields: TableListItem) => {
    const hide = message.loading('正在添加');

    try {
      await addinformationRule({...fields,uuid:currentUser.uuid});
      hide();
      setBaocunxiugaibutton(true)
      setBianjibutton(false)
      // setYonghuming(true)
      setZhengjianhaoma(true)
      setLianxidianhua(true)
      setXingming(true)
      setJinghaogonghao(true)
      setJingzhong(true)
      // setYuanmima(true)
      setXinmima(true)
      setXinmimaqueren(true)
      message.success('保存成功');
      return true;
    } catch (error) {
      hide();
      message.error('保存失败请重试！');
      return false;
    }
  };

  // useEffect(() => {
  //   gerenzhongxininformationrule().then(res => {
  //       // @ts-ignore
  //       setChushiyonghuming(res.data.username)
  //       // @ts-ignore
  //       setChushizhengjianhaoma(res.data.cardid)
  //       // @ts-ignore
  //       setChushilianxidianhua(res.data.phonenum)
  //       // @ts-ignore
  //       setChushixingming(res.data.name)
  //       // @ts-ignore
  //       setChushijinghaogonghao(res.data.policeidjobid)
  //       // @ts-ignore
  //       setChushiyuanmima(res.data.oldpassword)
  //       // @ts-ignore
  //       setChushieventRecorder(res.data.eventrecorder)
  //       // @ts-ignore
  //       setChushieventAuditor(res.data.eventauditor)
  //       // @ts-ignore
  //       setChushiadministrator(res.data.administrator)
  //       // @ts-ignore
  //       setChushiglobalView(res.data.globalview)
  //       // setShijianzerenbiaojitablexlk(res.sjzrbjtablexlk)
  //
  //     }
  //   )
  // }, [changerequest]);


  // };


  /** 分布更新窗口的弹窗 */
    // const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();


  // const sheshiminjingcolumns: ProColumns<sheshiminjingTableListItem>[] = [
  //
  //   {
  //     title: 'id',
  //     dataIndex: 'id',
  //     search: false,
  //     valueType: 'textarea',
  //     align: 'center',
  //     hideInTable: true,
  //   },
  //   {
  //     title: '民警身份证号码',
  //     dataIndex: 'policeId',
  //     search: false,
  //     valueType: 'textarea',
  //     align: 'center',
  //     hideInTable: false,
  //   },
  //   {
  //     title: '民警姓名',
  //     dataIndex: 'policeName',
  //     search: false,
  //     valueType: 'textarea',
  //     align: 'center',
  //     hideInTable: false,
  //   },
  //   {
  //     title: '警号',
  //     dataIndex: 'staffPoliceid',
  //     search: false,
  //     valueType: 'textarea',
  //     align: 'center',
  //     hideInTable: false,
  //   },
  //   {
  //     title: '民警处理结果描述',
  //     dataIndex: 'policeSolutionDesc',
  //     search: false,
  //     valueType: 'textarea',
  //     align: 'center',
  //     hideInTable: false,
  //   },
  //   {
  //     title: '责任标识',
  //     dataIndex: 'responsibilityResult',
  //     search: false,
  //     valueType: 'textarea',
  //     align: 'center',
  //     hideInTable: false,
  //   },
  //   {
  //     title: '操作',
  //     dataIndex: 'option',
  //     valueType: 'option',
  //     align: 'center',
  //     render: (text, record, _, action) => [
  //       <a
  //         key="editable1"
  //         type={"primary"}
  //         onClick={() => {
  //           action?.startEditable?.(record.id);
  //         }}
  //       >
  //         编辑
  //       </a>,
  //       <a
  //         key="delete"
  //         onClick={() => {
  //           const tableDataSource = formRef.current?.getFieldValue(
  //             'table',
  //           ) as sheshiminjingTableListItem[];
  //           formRef.current?.setFieldsValue({
  //             table: tableDataSource.filter((item) => item.id !== record.id),
  //           });
  //         }}
  //       >
  //         删除
  //       </a>,
  //     ],
  //   },
  // ];


  return (
    <PageContainer>
      <ProCard>
        <ProCard bordered layout="center">
          <ProForm
            formRef={formRef}
            grid={true}
            rowProps={{gutter: 16}}
            onFinish={async (value) => {
              const success = await handleAdd(value as TableListItem);
              if (success) {
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }
              // setInitialValues({})
            }}
            submitter={{
              searchConfig: {
                submitText: '提交',
                resetText: '重置',
              },
              submitButtonProps: {
                style: {marginLeft: "220%"}
              },
              resetButtonProps: {
                style: {
                  display: "none"
                }
              },
              render: (props) => {
                return [
                  <Button
                    key="rest"
                    type={"primary"}
                    disabled={bianjibutton}
                    onClick={() => {
                      setBaocunxiugaibutton(false)
                      setBianjibutton(true)
                      // setYonghuming(false)
                      setZhengjianhaoma(false)
                      setLianxidianhua(false)
                      setXingming(false)
                      setJinghaogonghao(false)
                      setJingzhong(false)
                      // setYuanmima(false)
                      setXinmima(false)
                      setXinmimaqueren(false)
                      setChangerequest(changerequest + 1)
                    }}
                  >
                    编辑
                  </Button>,
                  <Button
                    key="submit"
                    type={"primary"}
                    disabled={baocunxiugaibutton}
                    onClick={() => {
                      props.form?.submit?.()
                      // setBianjibutton(false)
                    }}
                  >
                    保存修改
                  </Button>,
                ];
              },
            }}

            autoFocusFirstInput
            // rowProps={{gutter: 16,}}
            layout={"horizontal"}
            labelCol={{span: 10}}
            labelAlign="right"
            style={{alignContent: "center", margin: 'auto'}}
          >
            <ProForm.Group
              colProps={{
                span: 18,
              }}
              title={"用户信息"}
            >
              {/*<ProFormText*/}
              {/*  name="uuid"*/}
              {/*  initialValue={currentUser.uuid}*/}
              {/*  disabled={true}*/}
              {/*  style={{display:"none"}}*/}
              {/*/>*/}
              <ProFormText
                label="用户名"
                name="userName"
                initialValue={currentUser.userName}
                disabled={true}
                placeholder="请录入用户名"
                rules={[
                  {
                    required: true,
                    message: '请录入用户名！',
                  },
                ]}
              />
              <ProFormText
                label="证件号码"
                name="cardId"
                disabled={zhengjianhaoma}
                initialValue={currentUser.cardId}
                placeholder="请录入证件号码"
                rules={[
                  {
                    required: true,
                    message: '请录入证件号码！',
                  },
                ]}
              />
              <ProFormText
                label="联系电话"
                name="phoneNum"
                disabled={lianxidianhua}
                initialValue={currentUser.phoneNum}
                placeholder="请录入联系电话"
                rules={[
                  {
                    required: true,
                    message: '请录入联系电话！',
                  },
                ]}
              />
              <ProFormText
                label="单位"
                name="staffPoliceUnit"
                disabled={true}
                initialValue={currentUser.staffPoliceUnit}
                placeholder="请录入单位"
                rules={[
                  {
                    required: true,
                    message: '请录入单位！',
                  },
                ]}
              />
              <ProFormText
                label="姓名"
                name="name"
                disabled={xingming}
                initialValue={currentUser.name}
                placeholder="请录入姓名"
                rules={[
                  {
                    required: true,
                    message: '请录入姓名！',
                  },
                ]}
              />
              <ProFormText
                label="警号/工号"
                name="policeIdJobId"
                disabled={jinghaogonghao}
                initialValue={currentUser.policeIdJobId}
                placeholder="请录入警号/工号"
                rules={[
                  {
                    required: true,
                    message: '请录入警号/工号！',
                  },
                ]}
              />
              <ProFormSelect
                label="警种"
                name="policeCategory"
                disabled={jingzhong}
                initialValue={currentUser.policeCategory}
                placeholder="请录入警种"
                // options={policeCategoryformxlk}
                // rules={[
                //   {
                //     required: true,
                //     message: '请录入警种！',
                //   },
                // ]}
                options={[
                  {label: ' 指挥', value: '指挥'},
                  {label: '政工', value: '政工'},
                  {label: '警保', value: '警保'},
                  {label: '经侦', value: '经侦'},
                  {label: '治安', value: '治安'},
                  {label: '出入境', value: '出入境'},
                  {label: '交警', value: '交警'},
                  {label: '刑侦', value: '刑侦'},
                  {label: '法制', value: '法制'},
                  {label: '网安', value: '网安'},
                  {label: '监察', value: '监察'},
                  {label: '督察', value: '督察'},
                  {label: '特警', value: '特警'},
                  {label: '人口', value: '人口'},
                  {label: '监所', value: '监所'},
                  {label: '科技', value: '科技'},
                  {label: '高校', value: '高校'},
                  {label: '水上', value: '水上'},
                ]}
              />

            </ProForm.Group>
            <ProForm.Group
              title={"密码"}
              colProps={{
                span: 18,
              }}
            >
              {/*<ProFormText*/}
              {/*  label="原密码"*/}
              {/*  // initialValue={chushiyuanmima}*/}
              {/*  disabled={yuanmima}*/}
              {/*  name="oldPassword"*/}
              {/*  rules={[*/}
              {/*    {*/}
              {/*      required: true,*/}
              {/*      message: '原密码！',*/}
              {/*    },*/}
              {/*  ]}*/}
              {/*  placeholder="原密码"*/}
              {/*/>*/}
              <ProFormText.Password
                label="新密码"
                disabled={xinmima}
                extra={'请设置数字+大写字母+小写字母+特殊字符的8位及以上复杂密码'}
                name="newPassword"
                rules={[
                  // {
                  //   min: 8,
                  //   required: true,
                  //   message: '请录入8位及以上新密码！',
                  // },
                  {
                    required: true,
                    pattern: /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\[\]\`\~\!\@\#\$\%\^\&\*\(\)\,\.\/\<\>\?\;\'\\\|\{\}\-\=\+]).{8,100}$/,
                    message: '请设置数字+大写字母+小写字母+特殊字符的8位及以上复杂密码',
                  },
                ]}
                placeholder="请录入新密码"
              />
              <ProFormText.Password
                label="新密码确认"
                disabled={xinmimaqueren}
                name="newPasswordConfirm"
                extra={'请设置数字+大写字母+小写字母+特殊字符的8位及以上复杂密码'}
                rules={[
                  {
                    required: true,
                    pattern: /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\[\]\`\~\!\@\#\$\%\^\&\*\(\)\,\.\/\<\>\?\;\'\\\|\{\}\-\=\+]).{8,100}$/,
                    message: '请再次录入8位及以上新密码！',
                  },
                  ({getFieldValue}) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('两次密码不一致请仔细核对!'));
                    },
                  }),
                ]}
                placeholder="请再次录入新密码"
              />
            </ProForm.Group>
            <ProForm.Group
              title={"访问类型"}
              colProps={{
                span: 18,
              }}
              // autoFocus={true}
            >
              <ProFormCheckbox
                name="eventRecorder"
                disabled={true}
                label={'事件录入员'}
                initialValue={currentUser.eventrecorder}
                // extra={'事件录入员可以录入、编辑事件并提交审批'}
              >事件录入员可以录入、编辑事件并提交审批</ProFormCheckbox>
              <ProFormCheckbox
                name="eventAuditor"
                disabled={true}
                label={'事件审核员'}
                initialValue={currentUser.eventauditor}
                // extra={'事件审核员用户可以审核本单位提交审批的事件'}
              >事件审核员用户可以审核本单位提交审批的事件</ProFormCheckbox>
              <ProFormCheckbox
                name="accountAdministrator"
                disabled={true}
                label={'单位账号管理员'}
                initialValue={currentUser.accountAdministrator}
                // extra={'账号管理员用户可以进入账号管理页面新增或编辑已有用户'}
              >单位账号管理员用户可以进入账号管理页面对本单位账号进行新增或编辑</ProFormCheckbox>
              <ProFormCheckbox
                name="administrator"
                disabled={true}
                label={'系统账号管理员'}
                initialValue={currentUser.administrator}
                // extra={'账号管理员用户可以进入账号管理页面新增或编辑已有用户'}
              >系统账号管理员用户可以进入账号管理页面对各单位账号进行新增或编辑</ProFormCheckbox>
              <ProFormCheckbox
                name="globalView"
                disabled={true}
                label={'全局查看'}
                initialValue={currentUser.globalview}
                // extra={'全局查看用户可以查看所有事件'}
              >全局查看用户可以查看所有事件</ProFormCheckbox>
            </ProForm.Group>
          </ProForm>
        </ProCard>

      </ProCard>
    </PageContainer>

  );
};

export default TableListzsgc;
