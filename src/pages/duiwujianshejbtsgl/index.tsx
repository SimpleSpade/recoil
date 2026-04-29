// import {PlusOutlined} from '@ant-design/icons';
import type {UploadProps} from 'antd';
import {message, Drawer, Button, Upload} from 'antd';
import React, {useState, useRef, useEffect} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
// import {ModalForm, ProFormText} from '@ant-design/pro-form';
import type {ProDescriptionsItemProps} from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import type {FormValueType} from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
import {
  informationrule,
  updateinformationRule,
  addinformationRule,
  // fenfainformationRule,
  pingguinformationRule, guidanginformationRule, shejirenyuaninformationrule
} from './service';
import {UploadOutlined} from '@ant-design/icons';
import type {TableListItem, TableListPagination} from './data';
import moment from 'moment';
import {request} from 'umi';
import {
  ModalForm,
  ProForm, ProFormSelect,
  ProFormTextArea,
  ProFormText,
  ProFormCascader,
  ProFormDatePicker,
  ProFormRadio,
} from '@ant-design/pro-components';
import type {shejirenyuanTableListItem} from "./data";

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
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  // const [tousufenfaModalVisible, setTousufenfaModalVisible] = useState<boolean>(false);
  const [pingdingModalVisible, setPingdingModalVisible] = useState<boolean>(false);
  const [luoshiModalVisible, setLuoshiModalVisible] = useState<boolean>(false);
  const [genzongModalVisible, setGenzongModalVisible] = useState<boolean>(false);

  const [bianjiuuid, setBianjiuuid] = useState<string>();
  const [bianjitsjbh, setBianjitsjbh] = useState<string>();
  const [bianjitsrxm, setBianjitsrxm] = useState<string>();
  const [bianjitsrlxfs, setBianjitsrlxfs] = useState<string>();
  const [bianjiqd, setBianjiqd] = useState<string>();
  const [bianjicj, setBianjicj] = useState<string>();
  const [bianjijz, setBianjijz] = useState<string>();
  const [bianjidw, setBianjidw] = useState<string>();
  const [bianjiwtms, setBianjiwtms] = useState<string>();
  const [bianjitsrq, setBianjitsrq] = useState<string>();
  const [bianjijrtszl, setBianjijrtszl] = useState<string>();
  const [bianjiifbianjibc, setBianjiifbianjibc] = useState<boolean>();
  const [bianjiifbianjitj, setBianjiifbianjitj] = useState<boolean>();
  const [bianjibcortl, setBianjibcortl] = useState<string>();
  const [bianjijzrq, setBianjijzrq] = useState<string>();
  const [bianjibllb, setBianjibllb] = useState<string>();
  const [bianjiwtlb, setBianjiwtlb] = useState<string>();
  // const [fenfauuid, setFenfauuid] = useState<string>();
  // const [fenfajz, setFenfajz] = useState<string>();
  // const [fenfadw, setFenfadw] = useState<string>();
  // const [fenfaiffenfaqr, setFenfaiffenfaqr] = useState<boolean>();
  const [pingguuid, setPingguuuid] = useState<string>();
  const [pingguqd, setPingguqd] = useState<string>();
  const [pingguyfwt, setPingguyfwt] = useState<string>();
  const [pinggucj, setPinggucj] = useState<string>();
  const [pinggujz, setPinggujz] = useState<string>();
  const [pinggudw, setPinggudw] = useState<string>();
  const [pingguwtlb, setPingguwtlb] = useState<string>();
  const [pinggubllb, setPinggubllb] = useState<string>();
  const [pingguwtms, setPingguwtms] = useState<string>();
  const [pinggudwzc, setPinggudwzc] = useState<string>();
  const [pinggujzfh, setPinggujzfh] = useState<string>();
  const [pinggubcortl, setPinggubcortl] = useState<string>();
  const [pinggujzcp, setPinggujzcp] = useState<string>();
  const [pingguxzpd, setPingguxzpd] = useState<string>();
  const [pinggu12389pd, setPinggu12389pd] = useState<string>();
  const [pddisabled, setPddisabled] = useState<boolean>();
  const [pdrules, setPdrules] = useState<boolean>();
  // const [pingguyfwtyj, setPingguyfwtyj] = useState<string>();
  // const [pingguyfwtej, setPingguyfwtej] = useState<string>();
  const [pinggujtbx, setPinggujtbx] = useState<string>();
  const [pinggugzjy, setPinggugzjy] = useState<string>();
  const [pingguzgdw, setPingguzgdw] = useState<string>();
  const [pinggudetaildata, setPingguDetaildata] = useState<any>();
  const [pingguifpinggubc, setPingguifpinggubc] = useState<boolean>();
  const [pingguifpinggutj, setPingguifpinggutj] = useState<boolean>();
  // const [luoshiuuid, setLuoshiuuid] = useState<string>();
  const [luoshiwtlb, setLuoshiwtlb] = useState<string>();
  const [luoshibllb, setLuoshibllb] = useState<string>();
  const [luoshiwtms, setLuoshiwtms] = useState<string>();
  const [luoshixzpd, setLuoshixzpd] = useState<any>();
  const [lschakanpd, setLuoshipd] = useState<any>();
  const [luoshiyfwtyj, setLuoshiyfwtyj] = useState<string>();
  const [luoshiyfwtej, setLuoshiyfwtej] = useState<string>();
  const [luoshijtbx, setLuoshijtbx] = useState<string>();
  const [luoshigzjy, setLuoshigzjy] = useState<string>();
  const [luoshilsqk, setLuoshilsqk] = useState<string>();
  const [luoshiuuid, setLuoshiuuid] = useState<string>();
  const [luoshidetaildata, setLuoshiDetaildata] = useState<any>();
  const [guidanguuid, setGuidanguuid] = useState<string>();
  const [guidangqr, setGuidangqr] = useState<boolean>();
  const [jbtsgluuid, setJbtsgluuid] = useState<string>();
  const [xinzengbcorff, setXinzengbcorff] = useState<string>();

  // const [yfwtyj, setYfwtyj] = useState<string>();
  // const [yfwtej, setYfwtej] = useState<any>();

  // useEffect(() => {
  //   if (yfwtyj === '态度不够平和') {
  //     setYfwtej([{
  //       value: '训斥',
  //       label: '训斥',
  //     },
  //       {
  //         value: '嘲讽',
  //         label: '嘲讽',
  //       },
  //       {
  //         value: '辱骂',
  //         label: '辱骂',
  //       },
  //       {
  //         value: '消极冷漠',
  //         label: '消极冷漠',
  //       },
  //       {
  //         value: '敷衍推脱',
  //         label: '敷衍推脱',
  //       },
  //       {
  //         value: '直接挂断电话',
  //         label: '直接挂断电话',
  //       },
  //       {
  //         value: '肢体语言过度',
  //         label: '肢体语言过度',
  //       },])
  //   } else if (yfwtyj === '执法不规范') {
  //     setYfwtej([{
  //       value: '未及时接报受理',
  //       label: '未及时接报受理',
  //     },
  //       {
  //         value: '未佩戴执法记录仪',
  //         label: '未佩戴执法记录仪',
  //       },
  //       {
  //         value: '办案取证不及时',
  //         label: '办案取证不及时',
  //       },
  //       {
  //         value: '过度执法',
  //         label: '过度执法',
  //       },
  //       {
  //         value: '执法偏袒失当',
  //         label: '执法偏袒失当',
  //       },
  //       {
  //         value: '其他程序不规范',
  //         label: '其他程序不规范',
  //       },
  //       {
  //         value: '不作为',
  //         label: '不作为',
  //       },])
  //   } else if (yfwtyj === '释法说理不够') {
  //     setYfwtej([{
  //       value: '案件调查解释不充分',
  //       label: '案件调查解释不充分',
  //     },
  //       {
  //         value: '交通执法解释不充分',
  //         label: '交通执法解释不充分',
  //       },
  //       {
  //         value: '事故处理解释不充分',
  //         label: '事故处理解释不充分',
  //       },
  //       {
  //         value: '案件管辖解释不充分',
  //         label: '案件管辖解释不充分',
  //       },
  //       {
  //         value: '非案件原因解释不充分',
  //         label: '非案件原因解释不充分',
  //       },])
  //   } else if (yfwtyj === '告知不主动') {
  //     setYfwtej([{
  //       value: '案件进展未主动告知',
  //       label: '案件进展未主动告知',
  //     },
  //       {
  //         value: '事故处理结果未主动告知',
  //         label: '事故处理结果未主动告知',
  //       },
  //       {
  //         value: '政策未主动告知',
  //         label: '政策未主动告知',
  //       },])
  //   } else if (yfwtyj === '纠纷调处不规范') {
  //     setYfwtej([{
  //       value: '未及时调解',
  //       label: '未及时调解',
  //     },
  //       {
  //         value: '调解方式简单随意',
  //         label: '调解方式简单随意',
  //       },
  //       {
  //         value: '未公平主持调解',
  //         label: '未公平主持调解',
  //       },])
  //   } else if (yfwtyj === '工作不文明') {
  //     setYfwtej([{
  //       value: '警务人员交通违法',
  //       label: '警务人员交通违法',
  //     },
  //       {
  //         value: '其他不文明行为',
  //         label: '其他不文明行为',
  //       },])
  //   } else if (yfwtyj === '工作不细致不深入') {
  //     setYfwtej([{
  //       value: '窗口沟通不细致',
  //       label: '窗口沟通不细致',
  //     },
  //       {
  //         value: '方式方法不当',
  //         label: '方式方法不当',
  //       },
  //       {
  //         value: '求助',
  //         label: '求助',
  //       },])
  //   } else if (yfwtyj === '处警不规范') {
  //     setYfwtej([{
  //       value: '未处警',
  //       label: '未处警',
  //     },
  //       {
  //         value: '未及时处警',
  //         label: '未及时处警',
  //       },
  //       {
  //         value: '处警未反馈',
  //         label: '处警未反馈',
  //       },])
  //   } else if (yfwtyj === '交通组织不合理') {
  //     setYfwtej([{
  //       value: '工作措施不到位',
  //       label: '工作措施不到位',
  //     },
  //       {
  //         value: '警力管事率不够',
  //         label: '警力管事率不够',
  //       },])
  //   }
  // }, [yfwtyj]);

  const handleAdd = async (fields: TableListItem) => {
    const hide = message.loading('正在添加');

    try {
      await addinformationRule({...fields, uuid: jbtsgluuid, xinzengbcorff: xinzengbcorff});
      hide();
      message.success('添加成功');
      return true;
    } catch (error) {
      hide();
      message.error('添加失败请重试！');
      return false;
    }
  };


  /** 分布更新窗口的弹窗 */
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();
  const [filename, setFilename] = useState<string>()


  useEffect(() => {
    shejirenyuaninformationrule({uuid: pingguuid}).then(res => {

        // @ts-ignore
        setPingguDetaildata(res.data)
        // @ts-ignore
        // setXlknetdata(res.xlk)
      }
    )
  }, [pingguuid]);

  // useEffect(() => {
  //   getjbtsgluuid({}).then(res => {
  //
  //       if (getuuid > 0) {
  //         // @ts-ignore
  //         setJbtsgluuid(res.data.uuid)
  //       }
  //
  //       // console.log(res)
  //       // @ts-ignore
  //       // setXlknetdata(res.xlk)
  //     }
  //   )
  // }, [getuuid]);


  useEffect(() => {
    shejirenyuaninformationrule({uuid: luoshiuuid}).then(res => {

        // @ts-ignore
        setLuoshiDetaildata(res.data)
        // @ts-ignore
        // setXlknetdata(res.xlk)
      }
    )
  }, [luoshiuuid]);
  // const [initialValues, setInitialValues] = useState<any>();
  /** 国际化配置 */
    // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
      const hide = message.loading('正在操作');

      try {
        await updateinformationRule({
          ...currentRow,
          ...fields,
          uuid: bianjiuuid,
          bcortl: bianjibcortl,
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
// eslint-disable-next-line @typescript-eslint/no-shadow
//   const fenfaUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
//     const hide = message.loading('正在保存');
//
//     try {
//       await fenfainformationRule({
//         ...currentRow,
//         ...fields,
//         uuid: fenfauuid,
//       });
//       hide();
//       message.success('保存成功');
//       return true;
//     } catch (error) {
//       hide();
//       message.error('保存失败请重试！');
//       return false;
//     }
//   };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const pingguUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
    const hide = message.loading('正在保存');

    try {
      await pingguinformationRule({
        ...currentRow,
        ...fields,
        uuid: pingguuid,
        bcortl: pinggubcortl,
      });
      hide();
      message.success('保存成功');
      return true;
    } catch (error) {
      hide();
      message.error('保存失败请重试！');
      return false;
    }
  };
  const guidangUpdate = async () => {
    const hide = message.loading('正在保存');

    try {
      await guidanginformationRule({
        uuid: guidanguuid,
      });
      hide();
      message.success('保存成功');
      return true;
    } catch (error) {
      hide();
      message.error('保存失败请重试！');
      return false;
    }
  };


  const xinzengprops: UploadProps = {
    name: 'file',
    headers: {'Authorization': localStorage.getItem('setAuthorization') as string},
    action: `/duiwujianshe/api/fenfatousuupload?&name=${filename}&uuid=${jbtsgluuid}`,
    showUploadList: true,
    maxCount: 1,
    beforeUpload: file => {
      setFilename(file.name)
      const isYsbrar = file.name.slice(-3) === 'rar';
      const isYsbRAR = file.name.slice(-3) === 'RAR';
      const isYsbZIP = file.name.slice(-3) === 'ZIP';
      const isYsbzip = file.name.slice(-3) === 'zip';
      if (!isYsbrar && !isYsbRAR && !isYsbZIP && !isYsbzip) {
        message.error(`${file.name} 不是rar文件或者zip文件`);
      }
      return isYsbrar || isYsbRAR || isYsbZIP || isYsbzip || Upload.LIST_IGNORE;
    },
    //   const filetype = file.name.substring(file.name.lastIndexOf('.'))
    //   //   console.log(filetype)
    //   const isXLSX = filetype === '.xls' || filetype === '.xlsx' || filetype === '.txt';
    //   setFilename(file.name)
    //   if (!isXLSX) {
    //     message.error(`${file.name}不是txt、xlsx、xls的格式，请重新上传！`);
    //   }
    //   return isXLSX || Upload.LIST_IGNORE;
    // },
    //@ts-ignore
    // onChange(info: { file: { status: string; name: any; uid: string; response: { data: { uid: string; status: string;errorMsg: string } } }; fileList: any; }) {
    //   if (info.file.response) {
    //     if (info.file.response.data.status === 'done') {
    //       message.success(`${info.file.name} 文件上传成功`);
    //       if (info.file.response.data.uid){
    //       }
    //     } else if (info.file.response.data.status === 'error') {
    //       message.error(`${info.file.response.data.errorMsg}`);
    //     }
    //   }
    // },
    onSuccess() {
      message.success(` 上传成功`)
    },
  };
  const props: UploadProps = {
    name: 'file',
    headers: {'Authorization': localStorage.getItem('setAuthorization') as string},
    action: `/duiwujianshe/api/fenfatousuupload?&name=${filename}&uuid=${bianjiuuid}`,
    showUploadList: true,
    maxCount: 1,
    beforeUpload: file => {
      setFilename(file.name)
      console.log(file.name.slice(-3))
      const isYsbrar = file.name.slice(-3) === 'rar';
      const isYsbRAR = file.name.slice(-3) === 'RAR';
      const isYsbZIP = file.name.slice(-3) === 'ZIP';
      const isYsbzip = file.name.slice(-3) === 'zip';
      if (!isYsbrar && !isYsbRAR && !isYsbZIP && !isYsbzip) {
        message.error(`${file.name} 不是rar文件或者zip文件`);
      }
      return isYsbrar || isYsbRAR || isYsbZIP || isYsbzip || Upload.LIST_IGNORE;
    },
    //   const filetype = file.name.substring(file.name.lastIndexOf('.'))
    //   //   console.log(filetype)
    //   const isXLSX = filetype === '.xls' || filetype === '.xlsx' || filetype === '.txt';
    //   setFilename(file.name)
    //   if (!isXLSX) {
    //     message.error(`${file.name}不是txt、xlsx、xls的格式，请重新上传！`);
    //   }
    //   return isXLSX || Upload.LIST_IGNORE;
    // },
    //@ts-ignore
    // onChange(info: { file: { status: string; name: any; uid: string; response: { data: { uid: string; status: string;errorMsg: string } } }; fileList: any; }) {
    //   if (info.file.response) {
    //     if (info.file.response.data.status === 'done') {
    //       message.success(`${info.file.name} 文件上传成功`);
    //       if (info.file.response.data.uid){
    //       }
    //     } else if (info.file.response.data.status === 'error') {
    //       message.error(`${info.file.response.data.errorMsg}`);
    //     }
    //   }
    // },
    onSuccess() {
      message.success(` 上传成功`)
    },
  };


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
      title: '序号',
      dataIndex: 'xh',
      key: 'hiddenxh',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '投诉件编号',
      dataIndex: 'tsjbh',
      // key: 'hiddentsjbh',
      // search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      initialValue: '',
    },
    {
      title: '工号/警号',
      dataIndex: 'ghjh',
      // key: 'hiddentsjbh',
      // search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: true,
      initialValue: '',
    },
    {
      title: '投诉人姓名',
      dataIndex: 'tsrxm',
      key: 'hiddentsrxm',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '投诉人联系方式',
      dataIndex: 'tsrlxfs',
      key: 'hiddentsrlxfs',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '渠道',
      dataIndex: 'qd2',
      key: 'hiddenqd',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '渠道',
      dataIndex: 'qd',
      // key: 'hiddensqr',
      // search: false,
      valueType: 'cascader',
      align: 'center',
      hideInTable: true,
      initialValue: [
        '全部',
        '全部'
      ],
      search: {
        transform: (value) => {
          return {
            qd1: value[0],
            qd2: value[1],
          };
        },
      },
      fieldProps: {
        options: [
          {
            field: '全部',
            value: '全部',
            language: [
              {
                field: '全部',
                value: '全部',
              },
            ],
          },
          {
            field: '12345',
            value: '12345',
            language: [
              {
                field: '12345',
                value: '12345',
              },
            ],
          },
          {
            field: '12337',
            value: '12337',
            language: [
              {
                field: '12337',
                value: '12337',
              },
            ],
          },
          {
            field: '12389',
            value: '12389',
            language: [
              {
                field: '12389',
                value: '12389',
              },
              {
                field: '阅处件',
                value: '阅处件',
              },
              {
                field: '转办件',
                value: '转办件',
              },
              {
                field: '市12389',
                value: '市12389',
              },
              {
                field: '研处件',
                value: '研处件',
              },
              {
                field: '专项件',
                value: '专项件',
              },
            ],
          },
        ],
        fieldNames: {
          children: 'language',
          label: 'field',
        },
      },
    },
    {
      title: '场景',
      dataIndex: 'cj',
      key: 'hiddencj',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '场景',
      dataIndex: 'cj',
      // key: 'hiddensqr',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      initialValue: '全部',
      valueEnum: {
        全部: {text: '全部'},
        现场执勤处警: {text: '现场执勤处警'},
        交警现场执法: {text: '交警现场执法'},
        窗口办事接待: {text: '窗口办事接待'},
        矛盾纠纷调处: {text: '矛盾纠纷调处'},
        案件调查处理: {text: '案件调查处理'},
        交通事故处理: {text: '交通事故处理'},
        违纪违规: {text: '违纪违规'},
        交通管理: {text: '交通管理'},
        犬类管理: {text: '犬类管理'},
      },
    },
    {
      title: '初步问题分类',
      dataIndex: 'wtlb',
      key: 'hiddenwtlb',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '初步问题分类',
      dataIndex: 'wtlb',
      // key: 'hiddensqr',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      initialValue: '全部',
      valueEnum: {
        全部: {text: '全部'},
        不作为慢作为: {text: '不作为慢作为'},
        执法不规范: {text: '执法不规范'},
        执法不文明: {text: '执法不文明'},
        乱作为: {text: '乱作为'},
        违纪违规: {text: '违纪违规'},
        窗口服务: {text: '窗口服务'},
        其他: {text: '其他'},
        空: {text: '空'},
      },
    },
    {
      title: '办理类别',
      dataIndex: 'bllb',
      key: 'hiddenbllb',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '办理类别',
      dataIndex: 'bllb',
      // key: 'hiddensqr',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      initialValue: '全部',
      valueEnum: {
        全部: {text: '全部'},
        '12389本市电话件': {text: '12389本市电话件'},
        阅处件: {text: '阅处件'},
        转办件: {text: '转办件'},
        专项件: {text: '专项件'},
        研处件: {text: '研处件'},
        其他: {text: '其他'},
      },
    },
    {
      title: '警种',
      dataIndex: 'jz',
      key: 'hiddenjz',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '警种',
      dataIndex: 'jz',
      // key: 'hiddensqr',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      initialValue: '全部',
      valueEnum: {
        全部: {text: '全部'},
        '指挥处-指挥中心': {text: '指挥处-指挥中心'},
        '指挥处-信访办': {text: '指挥处-信访办'},
        政治处: {text: '政治处'},
        警保处: {text: '警保处'},
        经侦支队: {text: '经侦支队'},
        治安支队: {text: '治安支队'},
        出入境办公室: {text: '出入境办公室'},
        交警支队: {text: '交警支队'},
        刑侦支队: {text: '刑侦支队'},
        法制支队: {text: '法制支队'},
        网安支队: {text: '网安支队'},
        监察室: {text: '监察室'},
        督察支队: {text: '督察支队'},
        特警支队: {text: '特警支队'},
        人口办: {text: '人口办'},
        看守所: {text: '看守所'},
        科技科: {text: '科技科'},
        高校派出所: {text: '高校派出所'},
        水上治安派出所: {text: '水上治安派出所'},
        反恐支队: {text: '反恐支队'},
        拘留所: {text: '拘留所'},
      },
    },
    {
      title: '单位',
      dataIndex: 'dw',
      key: 'hiddendw',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '单位',
      dataIndex: 'dw',
      // key: 'hiddensqr',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      initialValue: '全部',
      valueEnum: {
        全部: {text: '全部'},
        指挥处: {text: '指挥处'},
        '指挥处-指挥中心': {text: '指挥处-指挥中心'},
        '指挥处-信访办': {text: '指挥处-信访办'},
        政治处: {text: '政治处'},
        警保处: {text: '警保处'},
        经侦支队: {text: '经侦支队'},
        治安支队: {text: '治安支队'},
        出入境办公室: {text: '出入境办公室'},
        交警支队: {text: '交警支队'},
        刑侦支队: {text: '刑侦支队'},
        法制支队: {text: '法制支队'},
        安亭派出所: {text: '安亭派出所'},
        方泰派出所: {text: '方泰派出所'},
        封浜派出所: {text: '封浜派出所'},
        华亭派出所: {text: '华亭派出所'},
        黄渡派出所: {text: '黄渡派出所'},
        嘉城派出所: {text: '嘉城派出所'},
        戬浜派出所: {text: '戬浜派出所'},
        菊园派出所: {text: '菊园派出所'},
        娄塘派出所: {text: '娄塘派出所'},
        马陆派出所: {text: '马陆派出所'},
        南翔派出所: {text: '南翔派出所'},
        唐行派出所: {text: '唐行派出所'},
        外冈派出所: {text: '外冈派出所'},
        新成路派出所: {text: '新成路派出所'},
        徐行派出所: {text: '徐行派出所'},
        叶城派出所: {text: '叶城派出所'},
        江桥派出所: {text: '江桥派出所'},
        网安支队: {text: '网安支队'},
        真新新村派出所: {text: '真新新村派出所'},
        监察室: {text: '监察室'},
        督察支队: {text: '督察支队'},
        特警支队: {text: '特警支队'},
        人口办: {text: '人口办'},
        看守所: {text: '看守所'},
        科技科: {text: '科技科'},
        高校派出所: {text: '高校派出所'},
        水上治安派出所: {text: '水上治安派出所'},
        反恐支队: {text: '反恐支队'},
        拘留所: {text: '拘留所'},
      },
    },
    {
      title: '问题描述',
      dataIndex: 'wtms',
      key: 'hiddenwtms',
      search: false,
      width:300,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '单位自查',
      dataIndex: 'dwzc',
      key: 'hiddendwzc',
      search: false,
      width:300,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '警种复核',
      dataIndex: 'jzfh',
      key: 'hiddenjzfh',
      search: false,
      width:300,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '核查状态',
      dataIndex: 'hczt',
      key: 'hiddenhczt',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '核查状态',
      dataIndex: 'hczt',
      // key: 'hiddensqr',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      initialValue: '全部',
      valueEnum: {
        全部: {text: '全部'},
        未逾期: {text: '未逾期'},
        已逾期: {text: '已逾期'},
        // 临近逾期: {text: '临近逾期'},
      },
    },
    {
      title: '投诉日期',
      dataIndex: 'tsrq',
      valueType: 'dateRange',
      align: 'center',
      // hideInForm: true,
      hideInTable: true,
      initialValue: [
        moment().startOf('year').format('yyyy-MM-DD').valueOf(),
        moment().subtract(0, 'days').format('YYYY-MM-DD').valueOf()
      ],
      search: {
        transform: (value) => {
          return {
            tsrqstart_time: value[0],
            tsrqend_time: value[1],
          };
        },
      },
    },
    {
      title: '投诉日期',
      dataIndex: 'tsrq',
      key: 'hiddentsrq',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '截止日期',
      dataIndex: 'jzrq',
      key: 'hiddenjzrq',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '处理进度',
      dataIndex: 'cljd',
      key: 'hiddencljd',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      render: (dom) => {
        if (dom === '待分发') {
          return <div style={{color: 'red',}}>{dom}</div>
        } else if (dom === '待评估') {
          return <div style={{color: 'red',}}>{dom}</div>
        } else if (dom === '已逾期') {
          return <div style={{color: 'red',}}>{dom}</div>
        } else if (dom === '待归档') {
          return <div style={{color: 'red',}}>{dom}</div>
        }
        // else if (dom === '已归档') {
        //   return <div style={{color: 'green',}}>{dom}</div>
        // }
        return <div>{dom}</div>;
      },
    },

    {
      title: '处理进度',
      dataIndex: 'cljd',
      // key: 'hiddensqr',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      initialValue: '全部',
      valueEnum: {
        全部: {text: '全部'},
        待分发: {text: '待分发'},
        单位自查中: {text: '单位自查中'},
        警种复核中: {text: '警种复核中'},
        待评估: {text: '待评估'},
        落实整改中: {text: '落实整改中'},
        待归档: {text: '待归档'},
        已归档: {text: '已归档'},
      },
    },
    {
      title: '附件',
      dataIndex: 'fj',
      key: 'hiddenfj',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      render: (_, record) => [
        <Button
          disabled={record.iffjdownload}
          onClick={() => {
            request(`/duiwujianshe/api/fujianrardownload?&uuid=${record.uuid}`, {
              method: 'get',
              responseType: 'arrayBuffer',
              headers: {'Authorization': localStorage.getItem('setAuthorization') as string}
            }).then((res: any) => {
              const blob = new Blob([res]);
              // console.log(initialState.currentUser.name)
              const elementA = document.createElement('a');
              elementA.setAttribute('download', '附件.rar');
              elementA.style.display = 'none';
              elementA.href = URL.createObjectURL(blob);
              document.body.appendChild(elementA);
              elementA.click();
              document.body.removeChild(elementA);
            })
          }
          }
        >{_}</Button>
      ],
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      align: 'center',
      render: (_, record) => [
        <Button
          type={"primary"}
          key="config"
          disabled={record.ifbianjidisabled}
          onClick={() => {
            setDetailModalVisible(true)
            setBianjiuuid(record.uuid)
            setBianjitsjbh(record.tsjbh)
            setBianjitsrxm(record.tsrxm)
            setBianjitsrlxfs(record.tsrlxfs)
            setBianjiqd(record.qd)
            setBianjicj(record.cj)
            setBianjijz(record.jz)
            setBianjidw(record.dw)
            setBianjiwtms(record.wtms)
            setBianjitsrq(record.tsrq)
            setBianjijrtszl(record.jrtszl)
            setBianjiifbianjibc(record.ifbianjibc)
            setBianjiifbianjitj(record.ifbianjitj)
            setBianjijzrq(record.jzrq)
            setBianjibllb(record.bllb)
            setBianjiwtlb(record.wtlb)
          }}
        >
          分发
        </Button>,
        // <Button
        //   type={"primary"}
        //   key="config"
        //   disabled={record.iffenfadisabled}
        //   onClick={() => {
        //     setTousufenfaModalVisible(true)
        //     setFenfauuid(record.uuid)
        //     setFenfajz(record.jz)
        //     setFenfadw(record.dw)
        //     setFenfaiffenfaqr(record.iffenfaqr)
        //   }}
        // >
        //   分发
        // </Button>,
        <Button
          type={"primary"}
          key="config"
          disabled={record.ifpinggudisabled}
          onClick={() => {
            setPingdingModalVisible(true)
            setPingguuuid(record.uuid)
            setPingguqd(record.qd)
            setPingguyfwt(record.yfwt)
            setPinggucj(record.cj)
            setPinggujz(record.jz)
            setPinggudw(record.dw)
            setPingguwtlb(record.wtlb)
            setPinggubllb(record.bllb)
            setPingguwtms(record.wtms)
            setPinggudwzc(record.dwzc)
            setPinggujzfh(record.jzfh)
            setPinggujzcp(record.jzcp)
            setPddisabled(record.pddisabled)
            setPdrules(record.pdrules)
            setPingguxzpd(record.xzpd)
            setPinggu12389pd(record.lschakanpd)
            // setPingguyfwtyj(record.yfwtyj)
            // setPingguyfwtej(record.yfwtej)
            setPinggujtbx(record.jtbx)
            setPinggugzjy(record.gzjy)
            setPingguzgdw(record.zgdw)
            setPingguifpinggubc(record.ifpinggubc)
            setPingguifpinggutj(record.ifpinggutj)
          }}
        >
          评估
        </Button>,
        <Button
          type={"primary"}
          key="config"
          disabled={record.ifluoshidisabled}
          onClick={() => {
            setLuoshiModalVisible(true)
            setLuoshiuuid(record.uuid)
            setLuoshiwtlb(record.wtlb)
            setLuoshibllb(record.bllb)
            setLuoshiwtms(record.wtms)
            setLuoshixzpd(record.xzpd)
            setLuoshipd(record.lschakanpd)
            setLuoshiyfwtyj(record.yfwtyj)
            setLuoshiyfwtej(record.yfwtej)
            setLuoshijtbx(record.jtbx)
            setLuoshigzjy(record.gzjy)
            setLuoshilsqk(record.lsqk)
          }}
        >
          整改落实查看
        </Button>,
        <Button
          type={"primary"}
          key="config"
          disabled={record.ifguidangdisabled}
          onClick={() => {
            setGenzongModalVisible(true)
            setGuidanguuid(record.uuid)
            setGuidangqr(record.ifguidangqr)
          }}
        >
          归档
        </Button>,
      ],
    },
  ];

  const tablecolums: ProColumns<shejirenyuanTableListItem>[] = [
    {
      title: '人员类型',
      dataIndex: 'rylx',
      key: 'hiddenrylx',
      search: false,
      width: 420,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
        ],
      },
    },
    {
      title: '工号/警号',
      dataIndex: 'ghjh',
      key: 'hiddenghjh',
      search: false,
      width: 420,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
        ],
      },
    },
    {
      title: '姓名',
      dataIndex: 'xm',
      key: 'hiddenxm',
      search: false,
      width: 420,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
        ],
      },
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
            <Button key="new" type="primary"
                    onClick={() => {
                      handleModalVisible(true)

                      let d = new Date().getTime();
                      const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        const r = (d + Math.random() * 16) % 16 | 0;
                        d = Math.floor(d / 16);
                        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                      });
                      setJbtsgluuid(uuid)
                    }}
            >
              新增投诉
            </Button>,
            <Button type="primary" key="templatedownload" onClick={() => {
              const value = searchConfig?.form?.getFieldsValue();
              const tsjbh = value.tsjbh;
              const bllb = value.bllb;
              const cj = value.cj;
              const cljd = value.cljd;
              const dw = value.dw;
              const jz = value.jz;
              const wtlb = value.wtlb;
              const qd1 = value.qd[0];
              const qd2 = value.qd[1];
              const ghjh = value.ghjh;
              const hczt = value.hczt;
              const tsrqstarttime = value.tsrq[0];
              const tsrqendtime = value.tsrq[1];
              request(`/duiwujianshe/api/exceldownload?&tsjbh=${tsjbh}&ghjh=${ghjh}&hczt=${hczt}&bllb=${bllb}&cj=${cj}&cljd=${cljd}&dw=${dw}&jz=${jz}&wtlb=${wtlb}&qd1=${qd1}&qd2=${qd2}&tsrqstarttime=${tsrqstarttime}&tsrqendtime=${tsrqendtime}`, {
                method: 'get',
                responseType: 'arrayBuffer',
                headers: {'Authorization': localStorage.getItem('setAuthorization') as string}
              }).then((res: any) => {
                const blob = new Blob([res]);
                // console.log(initialState.currentUser.name)
                const elementA = document.createElement('a');
                elementA.setAttribute('download', '举报投诉明细.xlsx');
                elementA.style.display = 'none';
                elementA.href = URL.createObjectURL(blob);
                document.body.appendChild(elementA);
                elementA.click();
                document.body.removeChild(elementA);
              });

            }}>
              导出至EXCEL
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
        scroll={{x: 3000,}}
        // columnsState={{
        //   value: columnsStateMap,
        //   onChange: setColumnsStateMap,
        // }}
      />
      <ModalForm
        modalProps={{destroyOnClose: true, maskClosable: false}}
        title="新增投诉"
        width="1000px"
        submitter={{
          searchConfig: {
            submitText: '保存',
            resetText: '取消',
          },
          submitButtonProps: {
            style: {display: "none"}
          },
          // eslint-disable-next-line @typescript-eslint/no-shadow
          render: (props, dom) => {
            return [
              ...dom,
              <Button
                key="sumbit"
                type={"primary"}
                // disabled={xinzengifxinzengbc}
                onClick={() => {
                  props.submit();
                  setXinzengbcorff('bc')
                }}
              >
                保存
              </Button>,
              <Button
                key="sumbit"
                // disabled={xinzengifxinzengtj}
                onClick={() => {
                  props.submit();
                  setXinzengbcorff('ff')
                }}
              >
                分发
              </Button>,
            ];
          },
        }}
        visible={createModalVisible}
        layout={'horizontal'}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as TableListItem);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProForm.Group>
          <ProFormText
            label="投诉件编号"
            width="md"
            name="tsjbh"
            // disabled={true}
            rules={[
              {
                required: true,
                message: '请录入投诉件编号!',
              },
            ]}
            // initialValue={xinzengsqdw}
            placeholder="请录入投诉件编号"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="投诉人姓名"
            width="md"
            name="tsrxm"
            // disabled={true}
            // initialValue={xinzengsqr}
            placeholder="请录入投诉人姓名"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="投诉人电话"
            width="md"
            name="tsrdh"
            // disabled={true}
            // initialValue={xinzengsqr}
            placeholder="请录入投诉人电话"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCascader
            name="qd"
            width="sm"
            label="渠道"
            placeholder="请下拉选择渠道"
            rules={[
              {
                required: true,
                message: '请下拉选择渠道!',
              },
            ]}
            fieldProps={{
              options: [
                {
                  value: '12345',
                  label: '12345',
                  children: [
                    {
                      value: '12345',
                      label: '12345',
                    },
                  ],
                },
                {
                  value: '12337',
                  label: '12337',
                  children: [
                    {
                      value: '12337',
                      label: '12337',
                    },
                  ],
                },
                {
                  value: '12389',
                  label: '12389',
                  children: [
                    {
                      value: '12389',
                      label: '12389',
                    },
                    {
                      value: '阅处件',
                      label: '阅处件',
                    },
                    {
                      value: '转办件',
                      label: '转办件',
                    },
                    {
                      value: '市12389',
                      label: '市12389',
                    },
                    {
                      value: '研处件',
                      label: '研处件',
                    },
                    {
                      label: '专项件',
                      value: '专项件',
                    },
                  ],
                },
              ],
            }}
          />
          <ProFormSelect
            width="sm"
            name="cj"
            label="场景"
            placeholder="请下拉选择场景"
            rules={[
              {
                required: true,
                message: '请下拉选择场景！',
              },
            ]}
            options={[
              {
                value: '现场执勤处警',
                label: '现场执勤处警',
              },
              {
                value: '交警现场执法',
                label: '交警现场执法',
              },
              {
                value: '窗口办事接待',
                label: '窗口办事接待',
              },
              {
                value: '矛盾纠纷调处',
                label: '矛盾纠纷调处',
              },
              {
                value: '案件调查处理',
                label: '案件调查处理',
              },
              {
                value: '交通事故处理',
                label: '交通事故处理',
              },
              {
                value: '违纪违规',
                label: '违纪违规',
              },
              {
                value: '交通管理',
                label: '交通管理',
              },
              {
                value: '犬类管理',
                label: '犬类管理',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="jz"
            label="警种"
            placeholder="请下拉选择警种"
            rules={[
              {
                required: true,
                message: '请下拉选择警种！',
              },
            ]}
            options={[
              {
                value: '指挥处-指挥中心',
                label: '指挥处-指挥中心',
              },
              {
                value: '指挥处-信访办',
                label: '指挥处-信访办',
              },
              {
                value: '政治处',
                label: '政治处',
              },
              {
                value: '警保处',
                label: '警保处',
              },
              {
                value: '经侦支队',
                label: '经侦支队',
              },
              {
                value: '治安支队',
                label: '治安支队',
              },
              {
                value: '出入境办公室',
                label: '出入境办公室',
              },
              {
                value: '交警支队',
                label: '交警支队',
              },
              {
                value: '刑侦支队',
                label: '刑侦支队',
              },
              {
                value: '法制支队',
                label: '法制支队',
              },
              {
                value: '网安支队',
                label: '网安支队',
              },
              {
                value: '监察室',
                label: '监察室',
              },
              {
                value: '督察支队',
                label: '督察支队',
              },
              {
                value: '特警支队',
                label: '特警支队',
              },
              {
                value: '人口办',
                label: '人口办',
              },
              {
                value: '看守所',
                label: '看守所',
              },
              {
                value: '科技科',
                label: '科技科',
              },
              {
                value: '高校派出所',
                label: '高校派出所',
              },
              {
                value: '水上治安派出所',
                label: '水上治安派出所',
              },
              {
                value: '反恐支队',
                label: '反恐支队',
              },
              {
                value: '拘留所',
                label: '拘留所',
              },
            ]}
          />
          <ProFormSelect
            width="sm"
            name="dw"
            label="单位"
            placeholder="请下拉选择单位"
            rules={[
              {
                required: true,
                message: '请下拉选择单位！',
              },
            ]}
            options={[
              {
                value: '指挥处',
                label: '指挥处',
              },
              {
                value: '指挥处-指挥中心',
                label: '指挥处-指挥中心',
              },
              {
                value: '指挥处-信访办',
                label: '指挥处-信访办',
              },
              {
                value: '政治处',
                label: '政治处',
              },
              {
                value: '警保处',
                label: '警保处',
              },
              {
                value: '经侦支队',
                label: '经侦支队',
              },
              {
                value: '治安支队',
                label: '治安支队',
              },
              {
                value: '出入境办公室',
                label: '出入境办公室',
              },
              {
                value: '交警支队',
                label: '交警支队',
              },
              {
                value: '刑侦支队',
                label: '刑侦支队',
              },
              {
                value: '法制支队',
                label: '法制支队',
              },
              {
                value: '安亭派出所',
                label: '安亭派出所',
              },
              {
                value: '方泰派出所',
                label: '方泰派出所',
              },
              {
                value: '封浜派出所',
                label: '封浜派出所',
              },
              {
                value: '华亭派出所',
                label: '华亭派出所',
              },
              {
                value: '黄渡派出所',
                label: '黄渡派出所',
              },
              {
                value: '嘉城派出所',
                label: '嘉城派出所',
              },
              {
                value: '戬浜派出所',
                label: '戬浜派出所',
              },
              {
                value: '菊园派出所',
                label: '菊园派出所',
              },
              {
                value: '娄塘派出所',
                label: '娄塘派出所',
              },
              {
                value: '马陆派出所',
                label: '马陆派出所',
              },
              {
                value: '南翔派出所',
                label: '南翔派出所',
              },
              {
                value: '唐行派出所',
                label: '唐行派出所',
              },
              {
                value: '外冈派出所',
                label: '外冈派出所',
              },
              {
                value: '新成路派出所',
                label: '新成路派出所',
              },
              {
                value: '徐行派出所',
                label: '徐行派出所',
              },
              {
                value: '叶城派出所',
                label: '叶城派出所',
              },
              {
                value: '江桥派出所',
                label: '江桥派出所',
              },
              {
                value: '网安支队',
                label: '网安支队',
              },
              {
                value: '真新新村派出所',
                label: '真新新村派出所',
              },
              {
                value: '监察室',
                label: '监察室',
              },
              {
                value: '督察支队',
                label: '督察支队',
              },
              {
                value: '特警支队',
                label: '特警支队',
              },
              {
                value: '人口办',
                label: '人口办',
              },
              {
                value: '看守所',
                label: '看守所',
              },
              {
                value: '科技科',
                label: '科技科',
              },
              {
                value: '高校派出所',
                label: '高校派出所',
              },
              {
                value: '水上治安派出所',
                label: '水上治安派出所',
              },
              {
                value: '反恐支队',
                label: '反恐支队',
              },
              {
                value: '拘留所',
                label: '拘留所',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="问题描述"
            width={800}
            name="wtms"
            rules={[
              {
                required: true,
                message: '请输入问题描述!',
              },
            ]}
            placeholder="请输入问题描述"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormDatePicker
            name="tsrq"
            fieldProps={{disabledDate: (current) => current && current > moment().add(0, 'days')}}
            label="投诉日期"
            width={500}
            placeholder="下拉选择投诉日期"
            rules={[
              {
                required: true,
                message: '请下拉选择投诉日期!',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormRadio.Group
            name="jrtszl"
            label="计入投诉总量"
            rules={[
              {
                required: true,
                message: '请选择计入投诉总量!',
              },
            ]}
            options={[
              {
                label: '计入投诉总量',
                value: '计入投诉总量',
              },
              {
                label: '不计入投诉总量',
                value: '不计入投诉总量',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="wtlb"
            label="初步问题分类"
            // disabled={true}
            // initialValue={fenfajz}
            placeholder="请下拉选择初步问题分类"
            // rules={[
            //   {
            //     required: true,
            //     message: '请下拉选择初步问题分类！',
            //   },
            // ]}
            options={[
              {
                value: '不作为慢作为',
                label: '不作为慢作为',
              },
              {
                value: '执法不规范',
                label: '执法不规范',
              },
              {
                value: '执法不文明',
                label: '执法不文明',
              },
              {
                value: '乱作为',
                label: '乱作为',
              },
              {
                value: '违纪违规',
                label: '违纪违规',
              },
              {
                value: '窗口服务',
                label: '窗口服务',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
          />
          <ProFormSelect
            width="sm"
            name="bllb"
            label="办理类别"
            // disabled={true}
            // initialValue={fenfadw}
            placeholder="请下拉选择办理类别"
            rules={[
              {
                required: true,
                message: '请下拉选择办理类别！',
              },
            ]}
            options={[
              {
                value: '12389本市电话件',
                label: '12389本市电话件',
              },
              {
                value: '阅处件',
                label: '阅处件',
              },
              {
                value: '转办件',
                label: '转办件',
              },
              {
                value: '专项件',
                label: '专项件',
              },
              {
                value: '研处件',
                label: '研处件',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormDatePicker
            name="jzrq"
            label="核查截止日期"
            width="sm"
            fieldProps={{disabledDate: (current) => current && current < moment().add(-1, 'days')}}
            placeholder="下拉选择核查截止日期"
            rules={[
              {
                required: true,
                message: '请下拉选择核查截止日期!',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <Upload{...xinzengprops}>

            <label>附件上传: </label>
            <Button icon={<UploadOutlined/>}>文件上传</Button>
            <br/>
            <div>只能上传一份.rar/.zip压缩包，且大小不能超过20M</div>
          </Upload>
        </ProForm.Group>
        {/*<ProForm.Group>*/}
        {/*  <Dragger{...props}*/}
        {/*          height={100}>*/}
        {/*    <p className="ant-upload-text">支持多份文件上传（word，excel，pdf）</p>*/}
        {/*    <p className="ant-upload-hint">*/}
        {/*      word包含doc文件、docx文件，excel包含xlsx文件、xls文件，*/}
        {/*    </p>*/}
        {/*  </Dragger>*/}
        {/*</ProForm.Group>*/}

      </ModalForm>


      <ModalForm
        title="举报投诉编辑"
        width="1000px"
        modalProps={{destroyOnClose: true, maskClosable: false}}
        layout={'horizontal'}
        // initialValues={initialValues}
        submitter={{
          searchConfig: {
            submitText: '保存',
            resetText: '取消',
          },
          submitButtonProps: {
            style: {display: "none"}
          },
          // eslint-disable-next-line @typescript-eslint/no-shadow
          render: (props, dom) => {
            return [
              ...dom,
              <Button
                key="sumbit"
                type={"primary"}
                disabled={bianjiifbianjibc}
                onClick={() => {
                  props.submit();
                  setBianjibcortl('bc')
                }}
              >
                保存
              </Button>,
              <Button
                key="sumbit"
                disabled={bianjiifbianjitj}
                onClick={() => {
                  props.submit();
                  setBianjibcortl('tj')
                }}
              >
                分发
              </Button>,
            ];
          },
        }}
        labelAlign="right"
        style={{alignContent: "center", margin: 'auto'}}
        visible={detailModalVisible}
        onVisibleChange={setDetailModalVisible}
        onFinish={async (value) => {
          setDetailModalVisible(false)
          const success = await handleUpdate(value as TableListItem);
          if (success) {
            setDetailModalVisible(false)
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
          // setInitialValues({})
        }}
      >
        <ProForm.Group>
          <ProFormText
            label="投诉件编号"
            width="md"
            name="tsjbh"
            // disabled={true}
            rules={[
              {
                required: true,
                message: '请录入投诉件编号!',
              },
            ]}
            initialValue={bianjitsjbh}
            placeholder="请录入投诉件编号"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="投诉人姓名"
            width="md"
            name="tsrxm"
            // disabled={true}
            initialValue={bianjitsrxm}
            placeholder="请录入投诉人姓名"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="投诉人电话"
            width="md"
            name="tsrdh"
            initialValue={bianjitsrlxfs}
            // disabled={true}
            // initialValue={xinzengsqr}
            placeholder="请录入投诉人电话"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCascader
            name="qd"
            width="sm"
            label="渠道"
            initialValue={bianjiqd}
            placeholder="请下拉选择渠道"
            rules={[
              {
                required: true,
                message: '请下拉选择渠道!',
              },
            ]}
            fieldProps={{
              options: [
                {
                  value: '12345',
                  label: '12345',
                  children: [
                    {
                      value: '12345',
                      label: '12345',
                    },
                  ],
                },
                {
                  value: '12337',
                  label: '12337',
                  children: [
                    {
                      value: '12337',
                      label: '12337',
                    },
                  ],
                },
                {
                  value: '12389',
                  label: '12389',
                  children: [
                    {
                      value: '12389',
                      label: '12389',
                    },
                    {
                      value: '阅处件',
                      label: '阅处件',
                    },
                    {
                      value: '转办件',
                      label: '转办件',
                    },
                    {
                      value: '市12389',
                      label: '市12389',
                    },
                    {
                      value: '研处件',
                      label: '研处件',
                    },
                    {
                      label: '专项件',
                      value: '专项件',
                    },
                  ],
                },
              ],
            }}
          />
          <ProFormSelect
            width="sm"
            name="cj"
            label="场景"
            initialValue={bianjicj}
            placeholder="请下拉选择场景"
            rules={[
              {
                required: true,
                message: '请下拉选择场景！',
              },
            ]}
            options={[
              {
                value: '现场执勤处警',
                label: '现场执勤处警',
              },
              {
                value: '交警现场执法',
                label: '交警现场执法',
              },
              {
                value: '窗口办事接待',
                label: '窗口办事接待',
              },
              {
                value: '矛盾纠纷调处',
                label: '矛盾纠纷调处',
              },
              {
                value: '案件调查处理',
                label: '案件调查处理',
              },
              {
                value: '交通事故处理',
                label: '交通事故处理',
              },
              {
                value: '违纪违规',
                label: '违纪违规',
              },
              {
                value: '交通管理',
                label: '交通管理',
              },
              {
                value: '犬类管理',
                label: '犬类管理',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="jz"
            label="警种"
            initialValue={bianjijz}
            placeholder="请下拉选择警种"
            rules={[
              {
                required: true,
                message: '请下拉选择警种！',
              },
            ]}
            options={[
              {
                value: '指挥处-指挥中心',
                label: '指挥处-指挥中心',
              },
              {
                value: '指挥处-信访办',
                label: '指挥处-信访办',
              },
              {
                value: '政治处',
                label: '政治处',
              },
              {
                value: '警保处',
                label: '警保处',
              },
              {
                value: '经侦支队',
                label: '经侦支队',
              },
              {
                value: '治安支队',
                label: '治安支队',
              },
              {
                value: '出入境办公室',
                label: '出入境办公室',
              },
              {
                value: '交警支队',
                label: '交警支队',
              },
              {
                value: '刑侦支队',
                label: '刑侦支队',
              },
              {
                value: '法制支队',
                label: '法制支队',
              },
              {
                value: '网安支队',
                label: '网安支队',
              },
              {
                value: '监察室',
                label: '监察室',
              },
              {
                value: '督察支队',
                label: '督察支队',
              },
              {
                value: '特警支队',
                label: '特警支队',
              },
              {
                value: '人口办',
                label: '人口办',
              },
              {
                value: '看守所',
                label: '看守所',
              },
              {
                value: '科技科',
                label: '科技科',
              },
              {
                value: '高校派出所',
                label: '高校派出所',
              },
              {
                value: '水上治安派出所',
                label: '水上治安派出所',
              },
              {
                value: '反恐支队',
                label: '反恐支队',
              },
              {
                value: '拘留所',
                label: '拘留所',
              },
            ]}
          />
          <ProFormSelect
            width="sm"
            name="dw"
            label="单位"
            initialValue={bianjidw}
            placeholder="请下拉选择单位"
            rules={[
              {
                required: true,
                message: '请下拉选择单位！',
              },
            ]}
            options={[
              {
                value: '指挥处',
                label: '指挥处',
              },
              {
                value: '指挥处-指挥中心',
                label: '指挥处-指挥中心',
              },
              {
                value: '指挥处-信访办',
                label: '指挥处-信访办',
              },
              {
                value: '政治处',
                label: '政治处',
              },
              {
                value: '警保处',
                label: '警保处',
              },
              {
                value: '经侦支队',
                label: '经侦支队',
              },
              {
                value: '治安支队',
                label: '治安支队',
              },
              {
                value: '出入境办公室',
                label: '出入境办公室',
              },
              {
                value: '交警支队',
                label: '交警支队',
              },
              {
                value: '刑侦支队',
                label: '刑侦支队',
              },
              {
                value: '法制支队',
                label: '法制支队',
              },
              {
                value: '安亭派出所',
                label: '安亭派出所',
              },
              {
                value: '方泰派出所',
                label: '方泰派出所',
              },
              {
                value: '封浜派出所',
                label: '封浜派出所',
              },
              {
                value: '华亭派出所',
                label: '华亭派出所',
              },
              {
                value: '黄渡派出所',
                label: '黄渡派出所',
              },
              {
                value: '嘉城派出所',
                label: '嘉城派出所',
              },
              {
                value: '戬浜派出所',
                label: '戬浜派出所',
              },
              {
                value: '菊园派出所',
                label: '菊园派出所',
              },
              {
                value: '娄塘派出所',
                label: '娄塘派出所',
              },
              {
                value: '马陆派出所',
                label: '马陆派出所',
              },
              {
                value: '南翔派出所',
                label: '南翔派出所',
              },
              {
                value: '唐行派出所',
                label: '唐行派出所',
              },
              {
                value: '外冈派出所',
                label: '外冈派出所',
              },
              {
                value: '新成路派出所',
                label: '新成路派出所',
              },
              {
                value: '徐行派出所',
                label: '徐行派出所',
              },
              {
                value: '叶城派出所',
                label: '叶城派出所',
              },
              {
                value: '江桥派出所',
                label: '江桥派出所',
              },
              {
                value: '网安支队',
                label: '网安支队',
              },
              {
                value: '真新新村派出所',
                label: '真新新村派出所',
              },
              {
                value: '监察室',
                label: '监察室',
              },
              {
                value: '督察支队',
                label: '督察支队',
              },
              {
                value: '特警支队',
                label: '特警支队',
              },
              {
                value: '人口办',
                label: '人口办',
              },
              {
                value: '看守所',
                label: '看守所',
              },
              {
                value: '科技科',
                label: '科技科',
              },
              {
                value: '高校派出所',
                label: '高校派出所',
              },
              {
                value: '水上治安派出所',
                label: '水上治安派出所',
              },
              {
                value: '反恐支队',
                label: '反恐支队',
              },
              {
                value: '拘留所',
                label: '拘留所',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="问题描述"
            width={800}
            name="wtms"
            initialValue={bianjiwtms}
            rules={[
              {
                required: true,
                message: '请输入问题描述!',
              },
            ]}
            placeholder="请输入问题描述"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormDatePicker
            name="tsrq"
            fieldProps={{disabledDate: (current) => current && current > moment().add(0, 'days')}}
            label="投诉日期"
            width={500}
            initialValue={bianjitsrq}
            placeholder="下拉选择投诉日期"
            rules={[
              {
                required: true,
                message: '请下拉选择投诉日期!',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormRadio.Group
            name="jrtszl"
            label="计入投诉总量"
            initialValue={bianjijrtszl}
            rules={[
              {
                required: true,
                message: '请选择计入投诉总量!',
              },
            ]}
            options={[
              {
                label: '计入投诉总量',
                value: '计入投诉总量',
              },
              {
                label: '不计入投诉总量',
                value: '不计入投诉总量',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="wtlb"
            label="初步问题分类"
            // disabled={true}
            initialValue={bianjiwtlb}
            placeholder="请下拉选择初步问题分类"
            // rules={[
            //   {
            //     required: true,
            //     message: '请下拉选择初步问题分类！',
            //   },
            // ]}
            options={[
              {
                value: '不作为慢作为',
                label: '不作为慢作为',
              },
              {
                value: '执法不规范',
                label: '执法不规范',
              },
              {
                value: '执法不文明',
                label: '执法不文明',
              },
              {
                value: '乱作为',
                label: '乱作为',
              },
              {
                value: '违纪违规',
                label: '违纪违规',
              },
              {
                value: '窗口服务',
                label: '窗口服务',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
          />
          <ProFormSelect
            width="sm"
            name="bllb"
            label="办理类别"
            // disabled={true}
            initialValue={bianjibllb}
            placeholder="请下拉选择办理类别"
            rules={[
              {
                required: true,
                message: '请下拉选择办理类别！',
              },
            ]}
            options={[
              {
                value: '12389本市电话件',
                label: '12389本市电话件',
              },
              {
                value: '阅处件',
                label: '阅处件',
              },
              {
                value: '转办件',
                label: '转办件',
              },
              {
                value: '专项件',
                label: '专项件',
              },
              {
                value: '研处件',
                label: '研处件',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormDatePicker
            name="jzrq"
            label="核查截止日期"
            width="sm"
            initialValue={bianjijzrq}
            fieldProps={{disabledDate: (current) => current && current < moment().add(-1, 'days')}}
            placeholder="下拉选择核查截止日期"
            rules={[
              {
                required: true,
                message: '请下拉选择核查截止日期!',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <Upload{...props}>

            <label>附件上传: </label>
            <Button icon={<UploadOutlined/>}>文件上传</Button>
            <br/>
            <div>只能上传一份.rar/.zip压缩包，且大小不能超过20M</div>
          </Upload>
        </ProForm.Group>

      </ModalForm>


      {/*<ModalForm*/}
      {/*  title="举报投诉分发"*/}
      {/*  width="700px"*/}
      {/*  modalProps={{destroyOnClose: true,maskClosable:false}}*/}
      {/*  layout={'horizontal'}*/}
      {/*  // initialValues={initialValues}*/}
      {/*  submitter={{*/}
      {/*    searchConfig: {*/}
      {/*      submitText: '分发',*/}
      {/*      resetText: '取消',*/}
      {/*    },*/}
      {/*    submitButtonProps: {*/}
      {/*      disabled: fenfaiffenfaqr*/}
      {/*    },*/}
      {/*  }}*/}
      {/*  labelAlign="right"*/}
      {/*  style={{alignContent: "center", margin: 'auto'}}*/}
      {/*  visible={tousufenfaModalVisible}*/}
      {/*  onVisibleChange={setTousufenfaModalVisible}*/}
      {/*  onFinish={async (value) => {*/}
      {/*    setTousufenfaModalVisible(false)*/}
      {/*    const success = await fenfaUpdate(value as TableListItem);*/}
      {/*    if (success) {*/}
      {/*      setTousufenfaModalVisible(false)*/}
      {/*      if (actionRef.current) {*/}
      {/*        actionRef.current.reload();*/}
      {/*      }*/}
      {/*    }*/}
      {/*    // setInitialValues({})*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <ProForm.Group>*/}
      {/*    <ProFormSelect*/}
      {/*      width="sm"*/}
      {/*      name="jz"*/}
      {/*      label="警种"*/}
      {/*      disabled={true}*/}
      {/*      initialValue={fenfajz}*/}
      {/*      placeholder="请下拉选择警种"*/}
      {/*      rules={[*/}
      {/*        {*/}
      {/*          required: true,*/}
      {/*          message: '请下拉选择警种！',*/}
      {/*        },*/}
      {/*      ]}*/}
      {/*      options={[*/}
      {/*        {*/}
      {/*          value: '指挥处-指挥中心',*/}
      {/*          label: '指挥处-指挥中心',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '指挥处-信访办',*/}
      {/*          label: '指挥处-信访办',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '政治处',*/}
      {/*          label: '政治处',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '警保处',*/}
      {/*          label: '警保处',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '经侦支队',*/}
      {/*          label: '经侦支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '治安支队',*/}
      {/*          label: '治安支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '出入境办公室',*/}
      {/*          label: '出入境办公室',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '交警支队',*/}
      {/*          label: '交警支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '刑侦支队',*/}
      {/*          label: '刑侦支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '法制支队',*/}
      {/*          label: '法制支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '网安支队',*/}
      {/*          label: '网安支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '监察室',*/}
      {/*          label: '监察室',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '督察支队',*/}
      {/*          label: '督察支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '特警支队',*/}
      {/*          label: '特警支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '人口办',*/}
      {/*          label: '人口办',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '看守所',*/}
      {/*          label: '看守所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '科技科',*/}
      {/*          label: '科技科',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '高校派出所',*/}
      {/*          label: '高校派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '水上治安派出所',*/}
      {/*          label: '水上治安派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '反恐支队',*/}
      {/*          label: '反恐支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '拘留所',*/}
      {/*          label: '拘留所',*/}
      {/*        },*/}
      {/*      ]}*/}
      {/*    />*/}
      {/*    <ProFormSelect*/}
      {/*      width="sm"*/}
      {/*      name="dw"*/}
      {/*      label="单位"*/}
      {/*      disabled={true}*/}
      {/*      initialValue={fenfadw}*/}
      {/*      placeholder="请下拉选择单位"*/}
      {/*      rules={[*/}
      {/*        {*/}
      {/*          required: true,*/}
      {/*          message: '请下拉选择单位！',*/}
      {/*        },*/}
      {/*      ]}*/}
      {/*      options={[*/}
      {/*        {*/}
      {/*          value: '指挥处',*/}
      {/*          label: '指挥处',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '指挥处-指挥中心',*/}
      {/*          label: '指挥处-指挥中心',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '指挥处-信访办',*/}
      {/*          label: '指挥处-信访办',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '政治处',*/}
      {/*          label: '政治处',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '警保处',*/}
      {/*          label: '警保处',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '经侦支队',*/}
      {/*          label: '经侦支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '治安支队',*/}
      {/*          label: '治安支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '出入境办公室',*/}
      {/*          label: '出入境办公室',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '交警支队',*/}
      {/*          label: '交警支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '刑侦支队',*/}
      {/*          label: '刑侦支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '法制支队',*/}
      {/*          label: '法制支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '安亭派出所',*/}
      {/*          label: '安亭派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '方泰派出所',*/}
      {/*          label: '方泰派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '封浜派出所',*/}
      {/*          label: '封浜派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '华亭派出所',*/}
      {/*          label: '华亭派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '黄渡派出所',*/}
      {/*          label: '黄渡派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '嘉城派出所',*/}
      {/*          label: '嘉城派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '戬浜派出所',*/}
      {/*          label: '戬浜派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '菊园派出所',*/}
      {/*          label: '菊园派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '娄塘派出所',*/}
      {/*          label: '娄塘派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '马陆派出所',*/}
      {/*          label: '马陆派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '南翔派出所',*/}
      {/*          label: '南翔派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '唐行派出所',*/}
      {/*          label: '唐行派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '外冈派出所',*/}
      {/*          label: '外冈派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '新成路派出所',*/}
      {/*          label: '新成路派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '徐行派出所',*/}
      {/*          label: '徐行派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '叶城派出所',*/}
      {/*          label: '叶城派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '江桥派出所',*/}
      {/*          label: '江桥派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '网安支队',*/}
      {/*          label: '网安支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '真新新村派出所',*/}
      {/*          label: '真新新村派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '监察室',*/}
      {/*          label: '监察室',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '督察支队',*/}
      {/*          label: '督察支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '特警支队',*/}
      {/*          label: '特警支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '人口办',*/}
      {/*          label: '人口办',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '看守所',*/}
      {/*          label: '看守所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '科技科',*/}
      {/*          label: '科技科',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '高校派出所',*/}
      {/*          label: '高校派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '水上治安派出所',*/}
      {/*          label: '水上治安派出所',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '反恐支队',*/}
      {/*          label: '反恐支队',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '拘留所',*/}
      {/*          label: '拘留所',*/}
      {/*        },*/}
      {/*      ]}*/}
      {/*    />*/}
      {/*  </ProForm.Group>*/}
      {/*  <ProForm.Group>*/}
      {/*    <ProFormSelect*/}
      {/*      width="sm"*/}
      {/*      name="wtlb"*/}
      {/*      label="初步问题分类"*/}
      {/*      // disabled={true}*/}
      {/*      // initialValue={fenfajz}*/}
      {/*      placeholder="请下拉选择初步问题分类"*/}
      {/*      // rules={[*/}
      {/*      //   {*/}
      {/*      //     required: true,*/}
      {/*      //     message: '请下拉选择初步问题分类！',*/}
      {/*      //   },*/}
      {/*      // ]}*/}
      {/*      options={[*/}
      {/*        {*/}
      {/*          value: '不作为慢作为',*/}
      {/*          label: '不作为慢作为',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '执法不规范',*/}
      {/*          label: '执法不规范',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '执法不文明',*/}
      {/*          label: '执法不文明',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '乱作为',*/}
      {/*          label: '乱作为',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '违纪违规',*/}
      {/*          label: '违纪违规',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '窗口服务',*/}
      {/*          label: '窗口服务',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '其他',*/}
      {/*          label: '其他',*/}
      {/*        },*/}
      {/*      ]}*/}
      {/*    />*/}
      {/*    <ProFormSelect*/}
      {/*      width="sm"*/}
      {/*      name="bllb"*/}
      {/*      label="办理类别"*/}
      {/*      // disabled={true}*/}
      {/*      // initialValue={fenfadw}*/}
      {/*      placeholder="请下拉选择办理类别"*/}
      {/*      rules={[*/}
      {/*        {*/}
      {/*          required: true,*/}
      {/*          message: '请下拉选择办理类别！',*/}
      {/*        },*/}
      {/*      ]}*/}
      {/*      options={[*/}
      {/*        {*/}
      {/*          value: '12389本市电话件',*/}
      {/*          label: '12389本市电话件',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '阅处件',*/}
      {/*          label: '阅处件',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '转办件',*/}
      {/*          label: '转办件',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '专项件',*/}
      {/*          label: '专项件',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '研处件',*/}
      {/*          label: '研处件',*/}
      {/*        },*/}
      {/*        {*/}
      {/*          value: '其他',*/}
      {/*          label: '其他',*/}
      {/*        },*/}
      {/*      ]}*/}
      {/*    />*/}
      {/*  </ProForm.Group>*/}
      {/*  <ProForm.Group>*/}
      {/*    <ProFormDatePicker*/}
      {/*      name="jzrq"*/}
      {/*      label="核查截止日期"*/}
      {/*      width="sm"*/}
      {/*      fieldProps={{disabledDate:(current) => current && current < moment().add(-1, 'days')}}*/}
      {/*      placeholder="下拉选择核查截止日期"*/}
      {/*      rules={[*/}
      {/*        {*/}
      {/*          required: true,*/}
      {/*          message: '请下拉选择核查截止日期!',*/}
      {/*        },*/}
      {/*      ]}*/}
      {/*    />*/}
      {/*  </ProForm.Group>*/}
      {/*  <ProForm.Group>*/}
      {/*    <Upload{...props}>*/}

      {/*      <label>附件上传: </label>*/}
      {/*      <Button icon={<UploadOutlined/>}>文件上传</Button>*/}
      {/*      <br/>*/}
      {/*      <div>只能上传一份.rar/.zip压缩包，且大小不能超过20M</div>*/}
      {/*    </Upload>*/}
      {/*  </ProForm.Group>*/}

      {/*</ModalForm>*/}


      <ModalForm
        title="评定"
        width="1000px"
        modalProps={{destroyOnClose: true, maskClosable: false}}
        layout={'horizontal'}
        // initialValues={initialValues}
        submitter={{
          searchConfig: {
            submitText: '保存',
            resetText: '取消',
          },
          submitButtonProps: {
            style: {display: "none"}
          },
          // eslint-disable-next-line @typescript-eslint/no-shadow
          render: (props, dom) => {
            return [
              ...dom,
              <Button
                key="sumbit"
                type={"primary"}
                disabled={pingguifpinggubc}
                onClick={() => {
                  props.submit();
                  setPinggubcortl('bc')
                }}
              >
                保存
              </Button>,
              <Button
                key="sumbit"
                disabled={pingguifpinggutj}
                onClick={() => {
                  props.submit();
                  setPinggubcortl('tj')
                }}
              >
                提交
              </Button>,
            ];
          },
        }}
        labelAlign="right"
        style={{alignContent: "center", margin: 'auto'}}
        visible={pingdingModalVisible}
        onVisibleChange={setPingdingModalVisible}
        onFinish={async (value) => {
          setPingdingModalVisible(false)
          const success = await pingguUpdate(value as TableListItem);
          if (success) {
            setPingdingModalVisible(false)
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
          // setInitialValues({})
        }}
      >
        <ProForm.Group>
          <ProFormCascader
            name="qd"
            width="sm"
            label="渠道"
            disabled={true}
            initialValue={pingguqd}
            placeholder="请下拉选择渠道"
            rules={[
              {
                required: true,
                message: '请下拉选择渠道!',
              },
            ]}
            fieldProps={{
              options: [
                {
                  value: '12345',
                  label: '12345',
                  children: [
                    {
                      value: '12345',
                      label: '12345',
                    },
                  ],
                },
                {
                  value: '12337',
                  label: '12337',
                  children: [
                    {
                      value: '12337',
                      label: '12337',
                    },
                  ],
                },
                {
                  value: '12389',
                  label: '12389',
                  children: [
                    {
                      value: '12389',
                      label: '12389',
                    },
                    {
                      value: '阅处件',
                      label: '阅处件',
                    },
                    {
                      value: '转办件',
                      label: '转办件',
                    },
                    {
                      value: '市12389',
                      label: '市12389',
                    },
                    {
                      value: '研处件',
                      label: '研处件',
                    },
                    {
                      label: '专项件',
                      value: '专项件',
                    },
                  ],
                },
              ],
            }}
          />
          <ProFormSelect
            width="sm"
            name="cj"
            label="场景"
            disabled={true}
            initialValue={pinggucj}
            placeholder="请下拉选择场景"
            rules={[
              {
                required: true,
                message: '请下拉选择场景！',
              },
            ]}
            options={[
              {
                value: '现场执勤处警',
                label: '现场执勤处警',
              },
              {
                value: '交警现场执法',
                label: '交警现场执法',
              },
              {
                value: '窗口办事接待',
                label: '窗口办事接待',
              },
              {
                value: '矛盾纠纷调处',
                label: '矛盾纠纷调处',
              },
              {
                value: '案件调差办理',
                label: '案件调差办理',
              },
              {
                value: '交通事故处理',
                label: '交通事故处理',
              },
              {
                value: '违纪违规',
                label: '违纪违规',
              },
              {
                value: '交通管理',
                label: '交通管理',
              },
              {
                value: '犬类管理',
                label: '犬类管理',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="jz"
            label="警种"
            disabled={true}
            initialValue={pinggujz}
            placeholder="请下拉选择警种"
            rules={[
              {
                required: true,
                message: '请下拉选择警种！',
              },
            ]}
            options={[
              {
                value: '指挥处-指挥中心',
                label: '指挥处-指挥中心',
              },
              {
                value: '指挥处-信访办',
                label: '指挥处-信访办',
              },
              {
                value: '政治处',
                label: '政治处',
              },
              {
                value: '警保处',
                label: '警保处',
              },
              {
                value: '经侦支队',
                label: '经侦支队',
              },
              {
                value: '治安支队',
                label: '治安支队',
              },
              {
                value: '出入境办公室',
                label: '出入境办公室',
              },
              {
                value: '交警支队',
                label: '交警支队',
              },
              {
                value: '刑侦支队',
                label: '刑侦支队',
              },
              {
                value: '法制支队',
                label: '法制支队',
              },
              {
                value: '网安支队',
                label: '网安支队',
              },
              {
                value: '监察室',
                label: '监察室',
              },
              {
                value: '督察支队',
                label: '督察支队',
              },
              {
                value: '特警支队',
                label: '特警支队',
              },
              {
                value: '人口办',
                label: '人口办',
              },
              {
                value: '看守所',
                label: '看守所',
              },
              {
                value: '科技科',
                label: '科技科',
              },
              {
                value: '高校派出所',
                label: '高校派出所',
              },
              {
                value: '水上治安派出所',
                label: '水上治安派出所',
              },
              {
                value: '反恐支队',
                label: '反恐支队',
              },
              {
                value: '拘留所',
                label: '拘留所',
              },
            ]}
          />
          <ProFormSelect
            width="sm"
            name="dw"
            label="单位"
            disabled={true}
            initialValue={pinggudw}
            placeholder="请下拉选择单位"
            rules={[
              {
                required: true,
                message: '请下拉选择单位！',
              },
            ]}
            options={[
              {
                value: '指挥处',
                label: '指挥处',
              },
              {
                value: '指挥处-指挥中心',
                label: '指挥处-指挥中心',
              },
              {
                value: '指挥处-信访办',
                label: '指挥处-信访办',
              },
              {
                value: '政治处',
                label: '政治处',
              },
              {
                value: '警保处',
                label: '警保处',
              },
              {
                value: '经侦支队',
                label: '经侦支队',
              },
              {
                value: '治安支队',
                label: '治安支队',
              },
              {
                value: '出入境办公室',
                label: '出入境办公室',
              },
              {
                value: '交警支队',
                label: '交警支队',
              },
              {
                value: '刑侦支队',
                label: '刑侦支队',
              },
              {
                value: '法制支队',
                label: '法制支队',
              },
              {
                value: '安亭派出所',
                label: '安亭派出所',
              },
              {
                value: '方泰派出所',
                label: '方泰派出所',
              },
              {
                value: '封浜派出所',
                label: '封浜派出所',
              },
              {
                value: '华亭派出所',
                label: '华亭派出所',
              },
              {
                value: '黄渡派出所',
                label: '黄渡派出所',
              },
              {
                value: '嘉城派出所',
                label: '嘉城派出所',
              },
              {
                value: '戬浜派出所',
                label: '戬浜派出所',
              },
              {
                value: '菊园派出所',
                label: '菊园派出所',
              },
              {
                value: '娄塘派出所',
                label: '娄塘派出所',
              },
              {
                value: '马陆派出所',
                label: '马陆派出所',
              },
              {
                value: '南翔派出所',
                label: '南翔派出所',
              },
              {
                value: '唐行派出所',
                label: '唐行派出所',
              },
              {
                value: '外冈派出所',
                label: '外冈派出所',
              },
              {
                value: '新成路派出所',
                label: '新成路派出所',
              },
              {
                value: '徐行派出所',
                label: '徐行派出所',
              },
              {
                value: '叶城派出所',
                label: '叶城派出所',
              },
              {
                value: '江桥派出所',
                label: '江桥派出所',
              },
              {
                value: '网安支队',
                label: '网安支队',
              },
              {
                value: '真新新村派出所',
                label: '真新新村派出所',
              },
              {
                value: '监察室',
                label: '监察室',
              },
              {
                value: '督察支队',
                label: '督察支队',
              },
              {
                value: '特警支队',
                label: '特警支队',
              },
              {
                value: '人口办',
                label: '人口办',
              },
              {
                value: '看守所',
                label: '看守所',
              },
              {
                value: '科技科',
                label: '科技科',
              },
              {
                value: '高校派出所',
                label: '高校派出所',
              },
              {
                value: '水上治安派出所',
                label: '水上治安派出所',
              },
              {
                value: '反恐支队',
                label: '反恐支队',
              },
              {
                value: '拘留所',
                label: '拘留所',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="wtlb"
            label="初步问题分类"
            disabled={true}
            initialValue={pingguwtlb}
            placeholder="请下拉选择初步问题分类"
            // rules={[
            //   {
            //     required: true,
            //     message: '请下拉选择问题类别！',
            //   },
            // ]}
            options={[
              {
                value: '不作为慢作为',
                label: '不作为慢作为',
              },
              {
                value: '执法不规范',
                label: '执法不规范',
              },
              {
                value: '执法不文明',
                label: '执法不文明',
              },
              {
                value: '乱作为',
                label: '乱作为',
              },
              {
                value: '违纪违规',
                label: '违纪违规',
              },
              {
                value: '窗口服务',
                label: '窗口服务',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
          />
          <ProFormSelect
            width="sm"
            name="bllb"
            label="办理类别"
            disabled={true}
            initialValue={pinggubllb}
            placeholder="请下拉选择办理类别"
            // rules={[
            //   {
            //     required: true,
            //     message: '请下拉选择办理类别！',
            //   },
            // ]}
            options={[
              {
                value: '12389本市电话件',
                label: '12389本市电话件',
              },
              {
                value: '阅处件',
                label: '阅处件',
              },
              {
                value: '转办件',
                label: '转办件',
              },
              {
                value: '专项件',
                label: '专项件',
              },
              {
                value: '研处件',
                label: '研处件',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="问题描述"
            width={600}
            name="wtms"
            disabled={true}
            initialValue={pingguwtms}
            rules={[
              {
                required: true,
                message: '请输入问题描述!',
              },
            ]}
            placeholder="请输入问题描述"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="单位自查"
            width={600}
            name="dwzc"
            disabled={true}
            initialValue={pinggudwzc}
            rules={[
              {
                required: true,
                message: '请输入问题描述!',
              },
            ]}
            placeholder="请输入问题描述"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProTable
            headerTitle="涉及人员"
            options={false}
            search={false}
            columnEmptyText={false}
            pagination={false}
            dataSource={pinggudetaildata}
            columns={tablecolums}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="警种复核"
            width={600}
            name="jzfh"
            disabled={true}
            initialValue={pinggujzfh}
            rules={[
              {
                required: true,
                message: '请输入问题描述!',
              },
            ]}
            placeholder="请输入问题描述"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="md"
            name="jzcp"
            label="警种初评"
            disabled={true}
            initialValue={pinggujzcp}
            placeholder="请下拉选择警种初评（支持多选）"
            fieldProps={{
              mode: 'multiple',
            }}
            rules={[
              {
                required: true,
                message: '请下拉选择警种初评！',
                type: 'array',
              },
            ]}
            options={[
              {
                value: '有责',
                label: '有责',
              },
              {
                value: '需改进',
                label: '需改进',
              },
              {
                value: '无责',
                label: '无责',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="md"
            name="xzpd"
            label="性质判定"
            initialValue={pingguxzpd}
            placeholder="请下拉选择性质判定（支持多选）"
            fieldProps={{
              mode: 'multiple',
            }}
            rules={[
              {
                required: true,
                message: '请下拉选择性质判定！',
                type: 'array',
              },
            ]}
            options={[
              {
                value: '有责',
                label: '有责',
              },
              {
                value: '需改进',
                label: '需改进',
              },
              {
                value: '无责',
                label: '无责',
              },
            ]}
          />
          <ProFormSelect
            width="md"
            name="lschakanpd"
            label="12389判定"
            // style={{display:"none"}}
            disabled={pddisabled}
            initialValue={pinggu12389pd}
            placeholder="请下拉选择12389判定"
            rules={[
              {
                required: pdrules,
                message: '请下拉12389判定！',
              },
            ]}
            options={[
              {
                value: '属实',
                label: '属实',
              },
              {
                value: '属实，并存在其他问题',
                label: '属实，并存在其他问题',
              },
              {
                value: '部分属实',
                label: '部分属实',
              },
              {
                value: '部分属实，但不存在问题',
                label: '部分属实，但不存在问题',
              },
              {
                value: '不属实，但存在其他问题',
                label: '不属实，但存在其他问题',
              },
              {
                value: '不属实',
                label: '不属实',
              },
              {
                value: '无法查实',
                label: '无法查实',
              },
              {
                value: '无法查实，但存在其他问题',
                label: '无法查实，但存在其他问题',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCascader
            width="md"
            name="yfwt"
            label="引发问题"
            initialValue={pingguyfwt}
            placeholder="请下拉选择引发问题"
            rules={[
              {
                required: true,
                message: '请下拉选择引发问题!',
              },
            ]}
            fieldProps={{
              options:[
                {
                  label: '态度不够平和',
                  value: '态度不够平和',
                  children: [
                    {
                      label: '训斥',
                      value: '训斥',
                    },
                    {
                      label: '嘲讽',
                      value: '嘲讽',
                    },
                    {
                      label: '辱骂',
                      value: '辱骂',
                    },
                    {
                      label: '消极冷漠',
                      value: '消极冷漠',
                    },
                    {
                      label: '敷衍推脱',
                      value: '敷衍推脱',
                    },
                    {
                      label: '直接挂断电话',
                      value: '直接挂断电话',
                    },
                    {
                      label: '肢体语言过度',
                      value: '肢体语言过度',
                    },
                  ],
                },
                {
                  label: '执法不规范',
                  value: '执法不规范',
                  children: [
                    {
                      label: '未及时接报受理',
                      value: '未及时接报受理',
                    },
                    {
                      label: '未佩戴执法记录仪',
                      value: '未佩戴执法记录仪',
                    },
                    {
                      label: '办案取证不及时',
                      value: '办案取证不及时',
                    },
                    {
                      label: '过度执法',
                      value: '过度执法',
                    },
                    {
                      label: '执法偏袒失当',
                      value: '执法偏袒失当',
                    },
                    {
                      label: '其他程序不规范',
                      value: '其他程序不规范',
                    },
                    {
                      label: '不作为',
                      value: '不作为',
                    },
                  ],
                },
                {
                  label: '释法说理不够',
                  value: '释法说理不够',
                  children: [
                    {
                      label: '案件调查解释不充分',
                      value: '案件调查解释不充分',
                    },
                    {
                      label: '交通执法解释不充分',
                      value: '交通执法解释不充分',
                    },
                    {
                      label: '事故处理解释不充分',
                      value: '事故处理解释不充分',
                    },
                    {
                      label: '案件管辖解释不充分',
                      value: '案件管辖解释不充分',
                    },
                    {
                      label: '非案件原因解释不充分',
                      value: '非案件原因解释不充分',
                    },
                  ],
                },
                {
                  label: '告知不主动',
                  value: '告知不主动',
                  children: [
                    {
                      label: '案件进展未主动告知',
                      value: '案件进展未主动告知',
                    },
                    {
                      label: '事故处理结果未主动告知',
                      value: '事故处理结果未主动告知',
                    },
                    {
                      label: '政策未主动告知',
                      value: '政策未主动告知',
                    },
                  ],
                },
                {
                  label: '纠纷调处不规范',
                  value: '纠纷调处不规范',
                  children: [
                    {
                      label: '未及时调解',
                      value: '未及时调解',
                    },
                    {
                      label: '调解方式简单随意',
                      value: '调解方式简单随意',
                    },
                    {
                      label: '未公平主持调解',
                      value: '未公平主持调解',
                    },
                  ],
                },
                {
                  label: '工作不文明',
                  value: '工作不文明',
                  children: [
                    {
                      label: '警务人员交通违法',
                      value: '警务人员交通违法',
                    },
                    {
                      label: '其他不文明行为',
                      value: '其他不文明行为',
                    },
                  ],
                },
                {
                  label: '工作不细致不深入',
                  value: '工作不细致不深入',
                  children: [
                    {
                      label: '窗口沟通不细致',
                      value: '窗口沟通不细致',
                    },
                    {
                      label: '方式方法不当',
                      value: '方式方法不当',
                    },
                    {
                      label: '求助',
                      value: '求助',
                    },
                  ],
                },
                {
                  label: '处警不规范',
                  value: '处警不规范',
                  children: [
                    {
                      label: '未处警',
                      value: '未处警',
                    },
                    {
                      label: '未及时处警',
                      value: '未及时处警',
                    },
                    {
                      label: '处警未反馈',
                      value: '处警未反馈',
                    },
                  ],
                },
                {
                  label: '交通组织不合理',
                  value: '交通组织不合理',
                  children: [
                    {
                      label: '工作措施不到位',
                      value: '工作措施不到位',
                    },
                    {
                      label: '警力管事率不够',
                      value: '警力管事率不够',
                    },
                  ],
                },
                {
                  label: '无责',
                  value: '无责',
                  children: [
                    {
                      label: '无责',
                      value: '无责',
                    },
                  ],
                },
              ],
            }}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="具体表现"
            width={600}
            name="jtbx"
            initialValue={pinggujtbx}
            // rules={[
            //   {
            //     required: true,
            //     message: '请输入问题描述!',
            //   },
            // ]}
            placeholder="请输入工作表现，如无责可不填写"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="工作建议"
            width={600}
            name="gzjy"
            initialValue={pinggugzjy}
            // rules={[
            //   {
            //     required: true,
            //     message: '请输入问题描述!',
            //   },
            // ]}
            placeholder="请输入工作建议，如无责可不填写"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="md"
            name="zgdw"
            label="整改单位"
            initialValue={pingguzgdw}
            placeholder="请下拉选择整改单位"
            // rules={[
            //   {
            //     required: true,
            //     message: '请下拉选择单位！',
            //   },
            // ]}
            options={[
              {
                value: '指挥处',
                label: '指挥处',
              },
              {
                value: '指挥处-指挥中心',
                label: '指挥处-指挥中心',
              },
              {
                value: '指挥处-信访办',
                label: '指挥处-信访办',
              },
              {
                value: '政治处',
                label: '政治处',
              },
              {
                value: '警保处',
                label: '警保处',
              },
              {
                value: '经侦支队',
                label: '经侦支队',
              },
              {
                value: '治安支队',
                label: '治安支队',
              },
              {
                value: '出入境办公室',
                label: '出入境办公室',
              },
              {
                value: '交警支队',
                label: '交警支队',
              },
              {
                value: '刑侦支队',
                label: '刑侦支队',
              },
              {
                value: '法制支队',
                label: '法制支队',
              },
              {
                value: '安亭派出所',
                label: '安亭派出所',
              },
              {
                value: '方泰派出所',
                label: '方泰派出所',
              },
              {
                value: '封浜派出所',
                label: '封浜派出所',
              },
              {
                value: '华亭派出所',
                label: '华亭派出所',
              },
              {
                value: '黄渡派出所',
                label: '黄渡派出所',
              },
              {
                value: '嘉城派出所',
                label: '嘉城派出所',
              },
              {
                value: '戬浜派出所',
                label: '戬浜派出所',
              },
              {
                value: '菊园派出所',
                label: '菊园派出所',
              },
              {
                value: '娄塘派出所',
                label: '娄塘派出所',
              },
              {
                value: '马陆派出所',
                label: '马陆派出所',
              },
              {
                value: '南翔派出所',
                label: '南翔派出所',
              },
              {
                value: '唐行派出所',
                label: '唐行派出所',
              },
              {
                value: '外冈派出所',
                label: '外冈派出所',
              },
              {
                value: '新成路派出所',
                label: '新成路派出所',
              },
              {
                value: '徐行派出所',
                label: '徐行派出所',
              },
              {
                value: '叶城派出所',
                label: '叶城派出所',
              },
              {
                value: '江桥派出所',
                label: '江桥派出所',
              },
              {
                value: '网安支队',
                label: '网安支队',
              },
              {
                value: '真新新村派出所',
                label: '真新新村派出所',
              },
              {
                value: '监察室',
                label: '监察室',
              },
              {
                value: '督察支队',
                label: '督察支队',
              },
              {
                value: '特警支队',
                label: '特警支队',
              },
              {
                value: '人口办',
                label: '人口办',
              },
              {
                value: '看守所',
                label: '看守所',
              },
              {
                value: '科技科',
                label: '科技科',
              },
              {
                value: '高校派出所',
                label: '高校派出所',
              },
              {
                value: '水上治安派出所',
                label: '水上治安派出所',
              },
              {
                value: '反恐支队',
                label: '反恐支队',
              },
              {
                value: '拘留所',
                label: '拘留所',
              },
            ]}
          />
        </ProForm.Group>
      </ModalForm>


      <ModalForm
        title="整改落实查看"
        width="1000px"
        modalProps={{destroyOnClose: true, maskClosable: false}}
        layout={'horizontal'}
        // initialValues={initialValues}
        submitter={{
          searchConfig: {
            // submitText: '确认',
            resetText: '取消',
          },
          submitButtonProps: {
            style: {display: "none"}
          },
        }}
        labelAlign="right"
        style={{alignContent: "center", margin: 'auto'}}
        visible={luoshiModalVisible}
        onVisibleChange={setLuoshiModalVisible}
        onFinish={async () => {
          setLuoshiModalVisible(false)
          // setInitialValues({})
        }}
      >
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="wtlb"
            label="初步问题分类"
            disabled={true}
            initialValue={luoshiwtlb}
            placeholder="请下拉选择初步问题分类"
            // rules={[
            //   {
            //     required: true,
            //     message: '请下拉选择问题类别！',
            //   },
            // ]}
            options={[
              {
                value: '不作为慢作为',
                label: '不作为慢作为',
              },
              {
                value: '执法不规范',
                label: '执法不规范',
              },
              {
                value: '执法不文明',
                label: '执法不文明',
              },
              {
                value: '乱作为',
                label: '乱作为',
              },
              {
                value: '违纪违规',
                label: '违纪违规',
              },
              {
                value: '窗口服务',
                label: '窗口服务',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
          />
          <ProFormSelect
            width="sm"
            name="bllb"
            label="办理类别"
            disabled={true}
            initialValue={luoshibllb}
            placeholder="请下拉选择办理类别"
            // rules={[
            //   {
            //     required: true,
            //     message: '请下拉选择办理类别！',
            //   },
            // ]}
            options={[
              {
                value: '12389本市电话件',
                label: '12389本市电话件',
              },
              {
                value: '阅处件',
                label: '阅处件',
              },
              {
                value: '转办件',
                label: '转办件',
              },
              {
                value: '专项件',
                label: '专项件',
              },
              {
                value: '研处件',
                label: '研处件',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="问题描述"
            width={600}
            name="wtms"
            disabled={true}
            initialValue={luoshiwtms}
            rules={[
              {
                required: true,
                message: '请输入问题描述!',
              },
            ]}
            placeholder="请输入问题描述"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProTable
            headerTitle="涉及人员"
            options={false}
            search={false}
            columnEmptyText={false}
            pagination={false}
            dataSource={luoshidetaildata}
            columns={tablecolums}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="md"
            name="xzpd"
            label="性质判定"
            disabled={true}
            initialValue={luoshixzpd}
            placeholder="请下拉选择性质判定（支持多选）"
            fieldProps={{
              mode: 'multiple',
            }}
            rules={[
              {
                required: true,
                message: '请下拉选择性质判定！',
                type: 'array',
              },
            ]}
            options={[
              {
                value: '有责',
                label: '有责',
              },
              {
                value: '需改进',
                label: '需改进',
              },
              {
                value: '无责',
                label: '无责',
              },
            ]}
          />
          <ProFormSelect
            width="md"
            name="lschakanpd"
            label="12389判定"
            // style={{display:"none"}}
            disabled={true}
            initialValue={lschakanpd}
            placeholder="请下拉选择12389判定"
            // rules={[
            //   {
            //     required: pdrules,
            //     message: '请下拉12389判定！',
            //   },
            // ]}
            options={[
              {
                value: '属实',
                label: '属实',
              },
              {
                value: '属实，并存在其他问题',
                label: '属实，并存在其他问题',
              },
              {
                value: '部分属实',
                label: '部分属实',
              },
              {
                value: '部分属实，但不存在问题',
                label: '部分属实，但不存在问题',
              },
              {
                value: '不属实，但存在其他问题',
                label: '不属实，但存在其他问题',
              },
              {
                value: '不属实',
                label: '不属实',
              },
              {
                value: '无法查实',
                label: '无法查实',
              },
              {
                value: '无法查实，但存在其他问题',
                label: '无法查实，但存在其他问题',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="md"
            name="yfwtyj"
            label="引发问题一级"
            disabled={true}
            initialValue={luoshiyfwtyj}
            placeholder="请下拉选择引发问题一级"
            rules={[
              {
                required: true,
                message: '请下拉引发问题一级！',
              },
            ]}
            options={[
              {
                value: '态度不够平和',
                label: '态度不够平和',
              },
              {
                value: '执法不规范',
                label: '执法不规范',
              },
              {
                value: '释法说理不够',
                label: '释法说理不够',
              },
              {
                value: '告知不主动',
                label: '告知不主动',
              },
              {
                value: '纠纷调处不规范',
                label: '纠纷调处不规范',
              },
              {
                value: '工作不文明',
                label: '工作不文明',
              },
              {
                value: '工作不细致不深入',
                label: '工作不细致不深入',
              },
              {
                value: '处警不规范',
                label: '处警不规范',
              },
              {
                value: '交通组织不合理',
                label: '交通组织不合理',
              },
              {
                value: '无责',
                label: '无责',
              },
            ]}
          />
          <ProFormSelect
            width="md"
            name="yfwtej"
            label="引发问题二级"
            disabled={true}
            initialValue={luoshiyfwtej}
            placeholder="请下拉选择引发问题二级"
            rules={[
              {
                required: true,
                message: '请下拉选择引发问题二级！',
              },
            ]}
            options={[
              {
                value: '训斥',
                label: '训斥',
              },
              {
                value: '嘲讽',
                label: '嘲讽',
              },
              {
                value: '辱骂',
                label: '辱骂',
              },
              {
                value: '消极冷漠',
                label: '消极冷漠',
              },
              {
                value: '敷衍推脱',
                label: '敷衍推脱',
              },
              {
                value: '直接挂断电话',
                label: '直接挂断电话',
              },
              {
                value: '肢体语言过度',
                label: '肢体语言过度',
              },
              {
                value: '未及时接报受理',
                label: '未及时接报受理',
              },
              {
                value: '未佩戴执法记录仪',
                label: '未佩戴执法记录仪',
              },
              {
                value: '办案取证不及时',
                label: '办案取证不及时',
              },
              {
                value: '过度执法',
                label: '过度执法',
              },
              {
                value: '执法偏袒失当',
                label: '执法偏袒失当',
              },
              {
                value: '其他程序不规范',
                label: '其他程序不规范',
              },
              {
                value: '不作为',
                label: '不作为',
              },
              {
                value: '案件调查解释不充分',
                label: '案件调查解释不充分',
              },
              {
                value: '交通执法解释不充分',
                label: '交通执法解释不充分',
              },
              {
                value: '事故处理解释不充分',
                label: '事故处理解释不充分',
              },
              {
                value: '案件管辖解释不充分',
                label: '案件管辖解释不充分',
              },
              {
                value: '非案件原因解释不充分',
                label: '非案件原因解释不充分',
              },
              {
                value: '案件进展未主动告知',
                label: '案件进展未主动告知',
              },
              {
                value: '事故处理结果未主动告知',
                label: '事故处理结果未主动告知',
              },
              {
                value: '政策未主动告知',
                label: '政策未主动告知',
              },
              {
                value: '未及时调解',
                label: '未及时调解',
              },
              {
                value: '调解方式简单随意',
                label: '调解方式简单随意',
              },
              {
                value: '未公平主持调解',
                label: '未公平主持调解',
              },
              {
                value: '警务人员交通违法',
                label: '警务人员交通违法',
              },
              {
                value: '其他不文明行为',
                label: '其他不文明行为',
              },
              {
                value: '窗口沟通不细致',
                label: '窗口沟通不细致',
              },
              {
                value: '方式方法不当',
                label: '方式方法不当',
              },
              {
                value: '求助',
                label: '求助',
              },
              {
                value: '未处警',
                label: '未处警',
              },
              {
                value: '未及时处警',
                label: '未及时处警',
              },
              {
                value: '处警未反馈',
                label: '处警未反馈',
              },
              {
                value: '工作措施不到位',
                label: '工作措施不到位',
              },
              {
                value: '警力管事率不够',
                label: '警力管事率不够',
              },
              {
                value: '无责',
                label: '无责',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="具体表现"
            width={600}
            name="jtbx"
            disabled={true}
            initialValue={luoshijtbx}
            // rules={[
            //   {
            //     required: true,
            //     message: '请输入问题描述!',
            //   },
            // ]}
            placeholder="请输入工作表现，如无责可不填写"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="工作建议"
            width={600}
            name="gzjy"
            disabled={true}
            initialValue={luoshigzjy}
            // rules={[
            //   {
            //     required: true,
            //     message: '请输入问题描述!',
            //   },
            // ]}
            placeholder="请输入工作建议，如无责可不填写"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="落实情况"
            width={600}
            name="lsqk"
            disabled={true}
            initialValue={luoshilsqk}
            rules={[
              {
                required: true,
                message: '请输入落实情况!',
              },
            ]}
            // placeholder="请输入工作建议，如无责可不填写"
          />
        </ProForm.Group>
      </ModalForm>


      <ModalForm
        title="归档"
        width="400px"
        layout={'horizontal'}
        submitter={{
          searchConfig: {
            // submitText: '确认',
            resetText: '关闭',
          },
          submitButtonProps: {
            style: {
              display: 'none',
            },
          },
          // eslint-disable-next-line @typescript-eslint/no-shadow
          render: (props, dom) => {
            return [
              ...dom,
              <Button
                key="sumbit"
                type={"primary"}
                disabled={guidangqr}
                onClick={() => {
                  props.submit();
                  // setPinggubcortl('bc')
                }}
              >
                确认
              </Button>,
            ];
          },
        }}
        visible={genzongModalVisible}
        onVisibleChange={setGenzongModalVisible}
        onFinish={async () => {
          setGenzongModalVisible(false)
          const success = await guidangUpdate();
          if (success) {
            setGenzongModalVisible(false)
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        是否确认归档
      </ModalForm>


      <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value, currentRow);

          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);
          setCurrentRow(undefined);
        }}
        updateModalVisible={updateModalVisible}
        values={currentRow || {}}
      />

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
