// import {PlusOutlined} from '@ant-design/icons';
// import type {UploadProps} from 'antd';
import {message, Drawer, Button} from 'antd';
import React, {useState, useRef, useEffect} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
// import {ModalForm, ProFormText} from '@ant-design/pro-form';
import type {ProDescriptionsItemProps} from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import type {FormValueType} from './components/UpdateForm';
// import UpdateForm from './components/UpdateForm';
import {
  informationrule,
  updateinformationRule,
  addinformationRule,
  removeRule,
  zhanghaoguanlixialakuanginformationrule,
} from './service';
import {PlusOutlined} from '@ant-design/icons';
import type {TableListItem, TableListPagination} from './data';
// import moment from 'moment';
import {
  ProFormInstance, ProFormCheckbox
} from '@ant-design/pro-components';
import {
  ModalForm,
  ProForm, ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import {useModel} from "@@/plugin-model/useModel";
// import type {shenherizhiTableListItem, sheshiminjingTableListItem, shijianbiaoqianTableListItem} from "./data";
// import moment from "moment";
// import ProCard from "@ant-design/pro-card";
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



const TableListzsgc: React.FC = () => {

  /** 新建窗口的弹窗 */
    // const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const formRef = useRef<ProFormInstance<any>>();
  // const [ceshi, setCeshi] = useState<any>();
  //获得登录数据
  const {initialState} = useModel('@@initialState');
  // @ts-ignore
  const {currentUser} = initialState;

  //事件导入
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  const [xinzengxitong, setXinzengxitong] = useState<boolean>(true);
  const [xinzengquanju, setXinzengquanju] = useState<boolean>(true);

  //编辑事件
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const [bianjishijianuuid, setBianjishijianguuid] = useState<string>();
  const [bianjishijianusername, setBianjishijiangusername] = useState<string>();
  const [bianjishijianunit, setBianjishijiangunit] = useState<string>();
  const [bianjishijianname, setBianjishijiangname] = useState<string>();
  const [bianjishijiancardid, setBianjishijiangcardid] = useState<string>();
  const [bianjishijianpoliceidjobid, setBianjishijiangpoliceidjobid] = useState<string>();
  const [bianjishijianpolicecategory, setBianjishijiangpolicecategory] = useState<string>();
  const [bianjishijianifeventrecorder, setBianjishijiangifeventrecorder] = useState<boolean>();
  const [bianjishijianifeventauditor, setBianjishijiangifeventauditor] = useState<boolean>();
  const [bianjishijianifaccountadministrator, setBianjishijiangifaccountadministrator] = useState<boolean>();
  const [bianjishijianifadministrator, setBianjishijiangifadministrator] = useState<boolean>();
  const [bianjishijianifglobalview, setBianjishijiangifglobalview] = useState<boolean>();
  const [bianjishijianxitong, setBianjishijianxitong] = useState<boolean>();
  const [bianjishijianquanju, setBianjishijianquanju] = useState<boolean>();
  const [bianjishijianphonenum, setBianjishijiangphonenum] = useState<string>();


  //删除
  const [shanchuuuid, setShanchuuuid] = useState<string>();
  const [shanchuModalVisible, setShanchuModalVisible] = useState<boolean>(false);

  //数据下拉框
  const [unittablexlk, setUnittablexlk] = useState({});
  // const [policecategorytablexlk, setPolicecategorytablexlk] = useState({});
  const [unitformxlk, setUnitformxlk] = useState([]);
  // const [policecategoryformxlk, setPolicecategoryformxlk] = useState([]);

  useEffect(() => {
    zhanghaoguanlixialakuanginformationrule().then(res => {

        // @ts-ignore
        setUnittablexlk(res.unittablexlk)
        // @ts-ignore
        // setPolicecategorytablexlk(res.policecategorytablexlk)
        // @ts-ignore
        setUnitformxlk(res.unitformxlk)
        // @ts-ignore
        // setPolicecategoryformxlk(res.policecategoryformxlk)

      }
    )
  }, []);


  const handleRemove = async (uuid: string) => {
    const hide = message.loading('正在删除');
    if (!uuid) return true;

    try {
      await removeRule({
        uuid: shanchuuuid,
      });
      hide();
      message.success('删除成功，即将刷新');
      return true;
    } catch (error) {
      hide();
      message.error('删除失败，请重试');
      return false;
    }
  };


  // useEffect(() => {
  //   sheshiminjinginformationrule({uuid: bianjishijianuuid}).then(res => {
  //
  //       // @ts-ignore
  //       setSheshiminjingDetaildata(res.data)
  //       // @ts-ignore
  //       // setXlknetdata(res.xlk)
  //     }
  //   )
  // }, [bianjishijianuuid]);
  // useEffect(() => {
  //   shijianbiaoqianinformationrule({uuid: bianjishijianuuid}).then(res => {
  //
  //       // @ts-ignore
  //       setShijianbiaoqianDetaildata(res.data)
  //       // @ts-ignore
  //       // setXlknetdata(res.xlk)
  //     }
  //   )
  // }, [bianjishijianuuid]);
  // useEffect(() => {
  //   shenherizhiinformationrule({uuid: bianjishijianuuid}).then(res => {
  //
  //       // @ts-ignore
  //       setShenherizhixiangqingDetaildata(res.data)
  //       // @ts-ignore
  //       // setXlknetdata(res.xlk)
  //     }
  //   )
  // }, [bianjishijianuuid]);


  // const [tousufenfaModalVisible, setTousufenfaModalVisible] = useState<boolean>(false);

  const handleAdd = async (fields: TableListItem) => {
    const hide = message.loading('正在添加');

    try {
      await addinformationRule({...fields});
      hide();
      message.success('添加成功');
      return true;
    } catch (error) {
      hide();
      message.error('添加失败请重试！');
      return false;
    }
  };

  const bianjishijianUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
    const hide = message.loading('正在操作');

    try {
      await updateinformationRule({
        ...currentRow,
        ...fields,
        uuid: bianjishijianuuid,
      });
      hide();
      message.success('操作成功');
      return true;
    } catch (error) {
      hide();
      message.error('操作失败请重试！');
      return false;
    }
  };


  /** 分布更新窗口的弹窗 */
    // const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();


  const columns: ProColumns<TableListItem>[] = [

    {
      title: 'UUID',
      dataIndex: 'uuid',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: true,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      // search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '单位',
      dataIndex: 'unit',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '单位',
      dataIndex: 'unit',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      initialValue: '全部',
      valueEnum: unittablexlk,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      // search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '证件号码',
      dataIndex: 'cardid',
      // search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '警号/工号',
      dataIndex: 'policeidjobid',
      // search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '警种',
      dataIndex: 'policecategory',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '警种',
      initialValue: '全部',
      dataIndex: 'policecategory',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      valueEnum: {
        全部: {text: '全部'},
        指挥: {text: '指挥'},
        政工: {text: '政工'},
        警保: {text: '警保'},
        经侦: {text: '经侦'},
        治安: {text: '治安'},
        出入境: {text: '出入境'},
        交警: {text: '交警'},
        刑侦: {text: '刑侦'},
        法制: {text: '法制'},
        网安: {text: '网安'},
        监察: {text: '监察'},
        督察: {text: '督察'},
        特警: {text: '特警'},
        人口: {text: '人口'},
        监所: {text: '监所'},
        科技: {text: '科技'},
        高校: {text: '高校'},
        水上: {text: '水上'},
      },
    },
    {
      title: '是否为事件录入员',
      dataIndex: 'ifeventrecorder',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '是否为事件审核员',
      dataIndex: 'ifeventauditor',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '是否为单位账号管理员',
      dataIndex: 'ifaccountadministrator',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },

    {
      title: '是否为系统账号管理员',
      dataIndex: 'ifadministrator',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '是否为全局查看',
      dataIndex: 'ifglobalview',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      align: 'center',
      render: (_, record) => [
        <Button
          type={"primary"}
          disabled={record.ifbianjibutton}
          // key="config"
          onClick={() => {
            setDetailModalVisible(true)
            setBianjishijianguuid(record.uuid)
            setBianjishijiangusername(record.username)
            setBianjishijiangunit(record.unit)
            setBianjishijiangname(record.name)
            setBianjishijiangcardid(record.cardid)
            setBianjishijiangpoliceidjobid(record.policeidjobid)
            setBianjishijiangpolicecategory(record.policecategory)
            setBianjishijiangphonenum(record.phonenum)
            setBianjishijianxitong(record.bianjishijianxitong)
            setBianjishijianquanju(record.bianjishijianquanju)
            if (record.ifadministrator === '是') {
              setBianjishijiangifadministrator(true)
            } else if (record.ifadministrator === '否') {
              setBianjishijiangifadministrator(false)
            }
            if (record.ifeventrecorder === '是') {
              setBianjishijiangifeventrecorder(true)
            } else if (record.ifeventrecorder === '否') {
              setBianjishijiangifeventrecorder(false)
            }
            if (record.ifeventauditor === '是') {
              setBianjishijiangifeventauditor(true)
            } else if (record.ifeventauditor === '否') {
              setBianjishijiangifeventauditor(false)
            }
            if (record.ifaccountadministrator === '是') {
              setBianjishijiangifaccountadministrator(true)
            } else if (record.ifaccountadministrator === '否') {
              setBianjishijiangifaccountadministrator(false)
            }
            if (record.ifglobalview === '是') {
              setBianjishijiangifglobalview(true)
            } else if (record.ifglobalview === '否') {
              setBianjishijiangifglobalview(false)
            }
          }}
        >
          编辑
        </Button>,
        <Button
          disabled={record.ifshanchubutton}
          onClick={() => {
            setShanchuuuid(record.uuid)
            setShanchuModalVisible(true)
          }}
        >
          删除
        </Button>
      ],
    },
  ];


  return (
    <PageContainer>
      <ProTable<TableListItem, TableListPagination>
        headerTitle="查询表格"
        actionRef={actionRef}
        rowKey="key"
        search={{
          defaultCollapsed: false,
          labelWidth: 'auto',
          optionRender: (searchConfig, formProps, dom) => [
            ...dom.reverse(),
            <Button
              type="primary"
              icon={<PlusOutlined/>}
              onClick={() => {
                setCreateModalVisible(true)
                if (currentUser.administrator===true){
                  setXinzengxitong(false)
                  setXinzengquanju(false)
                } else {
                  setXinzengxitong(true)
                  setXinzengquanju(true)
                }
              }}
            >
              新增用户
            </Button>,
          ],
        }}
        // search={false}
        request={informationrule}
        columns={columns.map(item => { // 通过配置 给每个单元格添加不换行属性

          const fun = () => ({style: {whiteSpace: 'nowrap'}});
          //@ts-ignore
          item.onHeaderCell = fun;
          //@ts-ignore
          item.onCell = fun;

          return item;

        })}
        scroll={{x: 1000,}}
        // columnsState={{
        //   value: columnsStateMap,
        //   onChange: setColumnsStateMap,
        // }}
      />

      <ModalForm
        formRef={formRef}
        // initialValues={{
        //   table: sheshiminjingnulldata,
        // }}
        validateTrigger="onBlur"
        title="新增用户"
        width="1000px"
        modalProps={{destroyOnClose: true, maskClosable: false}}
        layout={'horizontal'}
        labelAlign={'right'}
        grid={true}
        rowProps={{gutter: 16}}
        labelCol={{span: 10}}
        // initialValues={{
        //   table: sheshiminjingdetaildata,
        //   shijianbiaoqiantable: shijianbiaoqiandetaildata,
        // }}
        // initialValues={initialValues}
        submitter={{
          searchConfig: {
            submitText: '保存',
            resetText: '取消',
          },
        }}
        style={{alignContent: "center", margin: 'auto', width: 850}}
        visible={createModalVisible}
        onVisibleChange={setCreateModalVisible}
        onFinish={async (value) => {
          setCreateModalVisible(false)
          const success = await handleAdd(value as TableListItem);
          if (success) {
            setCreateModalVisible(false)
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
          // setInitialValues({})
        }}
      >
        <ProForm.Group
          title={"用户信息"}
          colProps={{
            span: 18,
          }}
        >
          <ProFormText
            label="用户名"
            name="userName"
            width={"md"}
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
            width={"md"}
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
            width={"md"}
            placeholder="请录入联系电话"
            rules={[
              {
                required: true,
                message: '请录入联系电话！',
              },
            ]}
          />
          <ProFormSelect
            label="单位"
            name="unit"
            width={"md"}
            placeholder="请录入单位"
            rules={[
              {
                required: true,
                message: '请录入单位！',
              },
            ]}
            options={unitformxlk}
          />
          <ProFormText
            label="姓名"
            name="name"
            width={"md"}
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
            width={"md"}
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
            width={"md"}
            placeholder="请录入警种"
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
          colProps={{
            span: 18,
          }}
          title={"密码"}
        >
          {/*<ProFormText*/}
          {/*  label="原密码"*/}
          {/*  name="oldPassword"*/}
          {/*  width={"md"}*/}
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
            width={"md"}
            extra={'请设置数字+大写字母+小写字母的8位及以上复杂密码'}
            name="newPassword"
            rules={[
              {
                min: 8,
                required: true,
                message: '请录入8位及以上新密码！',
              },
            ]}
            placeholder="请录入新密码"
          />
          <ProFormText.Password
            label="新密码确认"
            name="newPasswordConfirm"
            extra={'请设置数字+大写字母+小写字母的8位及以上复杂密码'}
            rules={[
              {
                min: 8,
                required: true,
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
          colProps={{
            span: 18,
          }}
          title={"访问类型"}
        >
          <ProFormCheckbox
            name="eventRecorder"
            width={"md"}
            label={'事件录入员'}
            // extra={'事件录入员可以录入、编辑事件并提交审批'}
          >事件录入员可以录入、编辑事件并提交审批</ProFormCheckbox>
          <ProFormCheckbox
            name="eventAuditor"
            width={"md"}
            label={'事件审核员'}
            // extra={'事件审核员用户可以审核本单位提交审批的事件'}
          >事件审核员用户可以审核本单位提交审批的事件并在人员视图内查看人员相关事件</ProFormCheckbox>
          <ProFormCheckbox
            name="accountAdministrator"
            width={"md"}
            label={'单位账号管理员'}
            // extra={'账号管理员用户可以进入账号管理页面新增或编辑已有用户'}
          >单位账号管理员用户可以进入账号管理页面对本单位账号进行新增或编辑</ProFormCheckbox>
          <ProFormCheckbox
            name="administrator"
            width={"md"}
            label={'系统账号管理员'}
            disabled={xinzengxitong}
            // extra={'账号管理员用户可以进入账号管理页面新增或编辑已有用户'}
          >系统账号管理员用户可以进入账号管理页面对各单位账号进行新增或编辑</ProFormCheckbox>
          <ProFormCheckbox
            name="globalView"
            width={"md"}
            label={'全局查看'}
            disabled={xinzengquanju}
            // extra={'全局查看用户可以查看所有事件'}
          >全局查看用户可以查看所有事件</ProFormCheckbox>
        </ProForm.Group>

      </ModalForm>

      <ModalForm
        formRef={formRef}
        validateTrigger="onBlur"
        title="用户编辑"
        width="1000px"
        modalProps={{destroyOnClose: true, maskClosable: false}}
        layout={'vertical'}
        labelAlign={'right'}
        // initialValues={{
        //   table: sheshiminjingdetaildata,
        //   shijianbiaoqiantable: shijianbiaoqiandetaildata,
        // }}
        // initialValues={initialValues}
        submitter={{
          searchConfig: {
            submitText: '提交',
            resetText: '取消',
          },
        }}
        style={{alignContent: "center", margin: 'auto', width: 850}}
        visible={detailModalVisible}
        onVisibleChange={setDetailModalVisible}
        onFinish={async (value) => {
          setDetailModalVisible(false)
          const success = await bianjishijianUpdate(value as TableListItem);
          if (success) {
            setDetailModalVisible(false)
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
          // setInitialValues({})
        }}
      >
        <ProForm.Group
          title={"用户信息"}
        >
          <ProFormText
            label="用户名"
            name="userName"
            width={"md"}
            disabled={true}
            initialValue={bianjishijianusername}
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
            width={"md"}
            initialValue={bianjishijiancardid}
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
            initialValue={bianjishijianphonenum}
            width={"md"}
            placeholder="请录入联系电话"
            rules={[
              {
                required: true,
                message: '请录入联系电话！',
              },
            ]}
          />
          <ProFormSelect
            label="单位"
            name="unit"
            width={"md"}
            initialValue={bianjishijianunit}
            placeholder="请录入单位"
            rules={[
              {
                required: true,
                message: '请录入单位！',
              },
            ]}
            options={unitformxlk}
          />
          <ProFormText
            label="姓名"
            name="name"
            width={"md"}
            initialValue={bianjishijianname}
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
            width={"md"}
            initialValue={bianjishijianpoliceidjobid}
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
            width={"md"}
            initialValue={bianjishijianpolicecategory}
            placeholder="请录入警种"
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
        >
          {/*<ProFormText*/}
          {/*  label="原密码"*/}
          {/*  name="oldPassword"*/}
          {/*  width={"md"}*/}
          {/*  rules={[*/}
          {/*    {*/}
          {/*      required: true,*/}
          {/*      message: '原密码！',*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*  placeholder="原密码"*/}
          {/*/>*/}
          <ProFormText.Password
            width={"md"}
            label="新密码"
            extra={'请设置数字+大写字母+小写字母+特殊字符的8位及以上复杂密码'}
            name="newPassword"
            rules={[
              {
                required: true,
                pattern: /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\[\]\`\~\!\@\#\$\%\^\&\*\(\)\,\.\/\<\>\?\;\'\\\|\{\}\-\=\+]).{8,100}$/,
                message: '请录入8位及以上新密码！',
              },
            ]}
            placeholder="请录入新密码"
          />
          <ProFormText.Password
            label="新密码确认"
            width={"md"}
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
        >
          <ProFormCheckbox
            name="eventRecorder"
            // disabled={true}
            width={"md"}
            label={'事件录入员'}
            initialValue={bianjishijianifeventrecorder}
            // extra={'事件录入员可以录入、编辑事件并提交审批'}
          >事件录入员可以录入、编辑事件并提交审批</ProFormCheckbox>
          <ProFormCheckbox
            name="eventAuditor"
            // disabled={true}
            width={"md"}
            label={'事件审核员'}
            initialValue={bianjishijianifeventauditor}
            // extra={'事件审核员用户可以审核本单位提交审批的事件'}
          >事件审核员用户可以审核本单位提交审批的事件并在人员视图内查看人员相关事件</ProFormCheckbox>
           <ProFormCheckbox
            name="accountAdministrator"
            // disabled={true}
            width={"md"}
            label={'单位账号管理员'}
            initialValue={bianjishijianifaccountadministrator}
            // extra={'账号管理员用户可以进入账号管理页面新增或编辑已有用户'}
          >单位账号管理员用户可以进入账号管理页面对本单位账号进行新增或编辑</ProFormCheckbox>
          <ProFormCheckbox
            name="administrator"
            // disabled={true}
            width={"md"}
            label={'系统账号管理员'}
            disabled={bianjishijianxitong}
            initialValue={bianjishijianifadministrator}
            // extra={'账号管理员用户可以进入账号管理页面新增或编辑已有用户'}
          >系统账号管理员用户可以进入账号管理页面对各单位账号进行新增或编辑</ProFormCheckbox>
          <ProFormCheckbox
            name="globalView"
            // disabled={true}
            width={"md"}
            label={'全局查看'}
            disabled={bianjishijianquanju}
            initialValue={bianjishijianifglobalview}
            // extra={'全局查看用户可以查看所有事件'}
          >全局查看用户可以查看所有事件</ProFormCheckbox>
        </ProForm.Group>


      </ModalForm>


      <ModalForm
        formRef={formRef}
        validateTrigger="onBlur"
        title="用户删除"
        width="400px"
        modalProps={{destroyOnClose: true, maskClosable: false}}
        layout={'vertical'}
        labelAlign={'right'}
        // initialValues={{
        //   table: sheshiminjingdetaildata,
        //   shijianbiaoqiantable: shijianbiaoqiandetaildata,
        // }}
        // initialValues={initialValues}
        submitter={{
          searchConfig: {
            submitText: '确认',
            resetText: '取消',
          },
        }}
        style={{alignContent: "center", margin: 'auto', width: 400}}
        visible={shanchuModalVisible}
        onVisibleChange={setShanchuModalVisible}
        onFinish={async (uuid) => {
          setShanchuModalVisible(false)
          const success = await handleRemove(uuid);
          if (success) {
            setShanchuModalVisible(false)
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
          // setInitialValues({})
        }}
      >
        <ProForm.Group
          title={"是否确认删除此账号"}
        >

        </ProForm.Group>

      </ModalForm>


      <Drawer
        width={1200}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.uuid && (
          <ProDescriptions<TableListItem>
            column={2}
            title={currentRow?.uuid}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.uuid,
            }}
            columns={columns as ProDescriptionsItemProps<TableListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>

  );
};

export default TableListzsgc;
