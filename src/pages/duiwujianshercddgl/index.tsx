// import {PlusOutlined} from '@ant-design/icons';
import {message, Drawer, Button, Upload, UploadProps} from 'antd';
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
  fenfainformationRule, pingguinformationRule, guidanginformationRule, rcddshejirenyuaninformationrule
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

  ProFormDatePicker, ProFormCascader,

} from '@ant-design/pro-components';
import {shejirenyuanTableListItem} from "./data";
// import {getjbtsgluuid} from "@/pages/duiwujianshejbtsgl/service";
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
  // const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const [tousufenfaModalVisible, setTousufenfaModalVisible] = useState<boolean>(false);
  const [pingdingModalVisible, setPingdingModalVisible] = useState<boolean>(false);
  const [luoshiModalVisible, setLuoshiModalVisible] = useState<boolean>(false);
  const [genzongModalVisible, setGenzongModalVisible] = useState<boolean>(false);


  const [fenfauuid, setFenfauuid] = useState<string>();
  const [fenfajjrxm, setFenfajjrxm] = useState<string>();
  const [fenfajjrjhgh, setFenfajjrjhgh] = useState<string>();
  const [fenfajjrdh, setFenfajjrdh] = useState<string>();
  const [fenfacj, setFenfacj] = useState<string>();
  const [fenfasjdw, setFenfasjdw] = useState<string>();
  const [fenfawtms, setFenfawtms] = useState<string>();
  const [fenfawtlb, setFenfawtlb] = useState<string>();
  const [fenfabllb, setFenfabllb] = useState<string>();
  const [fenfahcjzrq, setFenfahcjzrq] = useState<string>();
  const [fenfaifpinggubc, setFenfaifpinggubc] = useState<boolean>();
  const [fenfaifpingguff, setFenfaifpingguff] = useState<boolean>();
  const [fenfabcorff, setFenfabcorff] = useState<string>();
  const [pingguuid, setPingguuuid] = useState<string>();
  const [pinggucj, setPinggucj] = useState<string>();
  const [pinggusjdw, setPinggudw] = useState<string>();
  const [pingguwtlb, setPingguwtlb] = useState<string>();
  const [pinggubllb, setPinggubllb] = useState<string>();
  const [pingguwtms, setPingguwtms] = useState<string>();
  const [pinggudwzc, setPinggudwzc] = useState<string>();
  // const [pinggujzfh, setPinggujzfh] = useState<string>();
  const [pinggubcortl, setPinggubcortl] = useState<string>();
  const [pinggudwcp, setPinggudwcp] = useState<string>();
  const [pingguxzpd, setPingguxzpd] = useState<string>();
  // const [pddisabled, setPddisabled] = useState<boolean>();
  // const [pdrules, setPdrules] = useState<boolean>();
  // const [pingguyfwtyj, setPingguyfwtyj] = useState<string>();
  // const [pingguyfwtej, setPingguyfwtej] = useState<string>();
  const [pinggujtbx, setPinggujtbx] = useState<string>();
  const [pingguyfwt, setPingguyfwt] = useState<string>();
  const [pinggugzjy, setPinggugzjy] = useState<string>();
  const [pinggudetaildata, setPingguDetaildata] = useState<any>();
  const [pingguifpinggubc, setPingguifpinggubc] = useState<boolean>();
  const [pingguifpinggutj, setPingguifpinggutj] = useState<boolean>();
  // const [luoshiuuid, setLuoshiuuid] = useState<string>();
  const [luoshiwtlb, setLuoshiwtlb] = useState<string>();
  const [luoshibllb, setLuoshibllb] = useState<string>();
  const [luoshiwtms, setLuoshiwtms] = useState<string>();
  const [luoshixzpd, setLuoshixzpd] = useState<any>();
  const [luoshidwcp, setLuoshidwcp] = useState<any>();
  const [luoshiyfwtyj, setLuoshiyfwtyj] = useState<string>();
  const [luoshiyfwtej, setLuoshiyfwtej] = useState<string>();
  const [luoshijtbx, setLuoshijtbx] = useState<string>();
  const [luoshigzjy, setLuoshigzjy] = useState<string>();
  const [luoshilsqk, setLuoshilsqk] = useState<string>();
  const [luoshiuuid, setLuoshiuuid] = useState<string>();
  const [luoshidetaildata, setLuoshiDetaildata] = useState<any>();
  const [guidanguuid, setGuidanguuid] = useState<string>();
  const [guidangqr, setGuidangqr] = useState<boolean>();
  // const [xinzengifxinzengbc, setXinzengifxinzengbc] = useState<boolean>();
  // const [xinzengifxinzengtj, setXinzengifxinzengtj] = useState<boolean>();
  const [xinzengbcorff, setXinzengbcorff] = useState<string>();
  const [rcddgluuid, setRcddggluuid] = useState<string>();



  const handleAdd = async (fields: TableListItem) => {
    const hide = message.loading('正在添加');

    try {
      await addinformationRule({
        ...fields, uuid: rcddgluuid,
        bcortl: xinzengbcorff,
      });
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
    rcddshejirenyuaninformationrule({uuid: pingguuid}).then(res => {

        // @ts-ignore
        setPingguDetaildata(res.data)
        // @ts-ignore
        // setXlknetdata(res.xlk)
      }
    )
  }, [pingguuid]);

  useEffect(() => {
    rcddshejirenyuaninformationrule({uuid: luoshiuuid}).then(res => {

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
      const hide = message.loading('正在保存');

      try {
        await updateinformationRule({
          ...currentRow,
          ...fields,
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
// eslint-disable-next-line @typescript-eslint/no-shadow
  const fenfaUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
    const hide = message.loading('正在操作');

    try {
      await fenfainformationRule({
        ...currentRow,
        ...fields,
        uuid: fenfauuid,
        bcorff: fenfabcorff,
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
  const pingguUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
    const hide = message.loading('正在操作');

    try {
      await pingguinformationRule({
        ...currentRow,
        ...fields,
        uuid: pingguuid,
        bcortl: pinggubcortl,
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
    action: `/duiwujianshe/api/rcddhlfenfatousuupload?&name=${filename}&uuid=${rcddgluuid}`,
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
  const props: UploadProps = {
    name: 'file',
    headers: {'Authorization': localStorage.getItem('setAuthorization') as string},
    action: `/duiwujianshe/api/rcddhlfenfatousuupload?&name=${filename}&uuid=${fenfauuid}`,
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
      title: '检举人姓名',
      dataIndex: 'jjrxm',
      // key: 'hiddenjjrxm',
      // search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      initialValue: '',
    },
    {
      title: '检举人警号/工号',
      dataIndex: 'jjrjhgh',
      // key: 'hiddentsjbh',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      // initialValue: '',
    },
    {
      title: '工号/警号',
      dataIndex: 'ghjh',
      // key: 'hiddentsjbh',
      // search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      initialValue:'',
    },
    {
      title: '检举人联系方式',
      dataIndex: 'jjrlxfs',
      key: 'hiddenjjrlxfs',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
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
      title: '涉及单位',
      dataIndex: 'sjdw',
      key: 'hiddensjdw',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '涉及单位',
      dataIndex: 'sjdw',
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
      valueType: 'textarea',
      align: 'center',
      width:300,
      hideInTable: false,
    },
    {
      title: '单位自查',
      dataIndex: 'dwzc',
      key: 'hiddendwzc',
      width:300,
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '检举日期',
      dataIndex: 'jjrq',
      key: 'hiddenjjrq',
      search: false,
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
      },
    },
    {
      title: '投诉日期',
      dataIndex: 'tsrq',
      key: 'hiddentsrq',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: true,
    },
    {
      title: '核查截止日期',
      dataIndex: 'hcjzrq',
      key: 'hiddenhcjzrq',
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
        } else if (dom === '已归档') {
          return <div style={{color: 'green',}}>{dom}</div>
        }
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
        // 警种复核中: {text: '警种复核中'},
        待评估: {text: '待评估'},
        落实整改中: {text: '落实整改中'},
        待归档: {text: '待归档'},
        已逾期: {text: '已逾期'},
        已归档: {text: '已归档'},
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
            request(`/duiwujianshe/api/rcddglfujianrardownload?&uuid=${record.uuid}`, {
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
          disabled={record.iffenfadisabled}
          onClick={() => {
            setTousufenfaModalVisible(true)
            setFenfauuid(record.uuid)
            setFenfajjrxm(record.jjrxm)
            setFenfajjrjhgh(record.jjrxm)
            setFenfajjrdh(record.jjrlxfs)
            setFenfacj(record.cj)
            setFenfasjdw(record.sjdw)
            setFenfawtms(record.wtms)
            setFenfawtlb(record.wtlb)
            setFenfabllb(record.bllb)
            setFenfahcjzrq(record.hcjzrq)
            setFenfaifpinggubc(record.ifpinggubc)
            setFenfaifpingguff(record.ifpingguff)

          }}
        >
          分发
        </Button>,
        <Button
          type={"primary"}
          key="config"
          disabled={record.ifpinggudisabled}
          onClick={() => {
            setPingdingModalVisible(true)
            setPingguuuid(record.uuid)
            setPinggucj(record.cj)
            setPinggudw(record.sjdw)
            setPingguwtlb(record.wtlb)
            setPinggubllb(record.bllb)
            setPingguwtms(record.wtms)
            setPinggudwzc(record.dwzc)
            // setPinggujzfh(record.jzfh)
            setPinggudwcp(record.dwcp)
            setPingguxzpd(record.xzpd)
            // setPingguyfwtyj(record.yfwtyj)
            // setPingguyfwtej(record.yfwtej)
            setPinggujtbx(record.jtbx)
            setPingguyfwt(record.yfwt)
            setPinggugzjy(record.gzjy)
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
            setLuoshidwcp(record.dwcp)
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
                      setRcddggluuid(uuid)
                    }}
            >
              新增投诉
            </Button>,
            <Button type="primary" key="templatedownload" onClick={() => {
              const value = searchConfig?.form?.getFieldsValue();
              const jjrxm = value.jjrxm;
              const bllb = value.bllb;
              const cj = value.cj;
              const cljd = value.cljd;
              const sjdw = value.sjdw;
              const wtlb = value.wtlb;
              const tsrqstarttime = value.tsrq[0];
              const tsrqendtime = value.tsrq[1];
              const hczt = value.hczt;
              const ghjh = value.ghjh;
              request(`/duiwujianshe/api/rcddglexceldownload?&jjrxm=${jjrxm}&bllb=${bllb}&hczt=${hczt}&ghjh=${ghjh}&cj=${cj}&cljd=${cljd}&sjdw=${sjdw}&wtlb=${wtlb}&tsrqstarttime=${tsrqstarttime}&tsrqendtime=${tsrqendtime}`, {
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
            label="检举人姓名"
            width="md"
            name="jjrxm"
            // disabled={true}
            // rules={[
            //   {
            //     required: true,
            //     message: '请录入投诉件编号!',
            //   },
            // ]}
            // initialValue={xinzengsqdw}
            placeholder="请录入检举人姓名"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="检举人警号/工号"
            width="md"
            name="jjrjhgh"
            // disabled={true}
            // initialValue={xinzengsqr}
            placeholder="请录入警号或工号"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="检举人电话"
            width="md"
            name="jjrdh"
            // disabled={true}
            // initialValue={xinzengsqr}
            placeholder="请录入检举人电话"
          />
        </ProForm.Group>
        <ProForm.Group>
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
          <ProFormSelect
            width="sm"
            name="sjdw"
            label="涉及单位"
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
            name="hcjzrq"
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
      </ModalForm>


      <ModalForm
        title="举报投诉分发"
        width="1000px"
        modalProps={{destroyOnClose: true, maskClosable: false}}
        layout={'horizontal'}
        // initialValues={initialValues}
        submitter={{
          searchConfig: {
            submitText: '分发',
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
                disabled={fenfaifpinggubc}
                onClick={() => {
                  props.submit();
                  setFenfabcorff('bc')
                }}
              >
                保存
              </Button>,
              <Button
                key="sumbit"
                disabled={fenfaifpingguff}
                onClick={() => {
                  props.submit();
                  setFenfabcorff('ff')
                }}
              >
                分发
              </Button>,
            ];
          },
        }}
        labelAlign="right"
        style={{alignContent: "center", margin: 'auto'}}
        visible={tousufenfaModalVisible}
        onVisibleChange={setTousufenfaModalVisible}
        onFinish={async (value) => {
          setTousufenfaModalVisible(false)
          const success = await fenfaUpdate(value as TableListItem);
          if (success) {
            setTousufenfaModalVisible(false)
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
          // setInitialValues({})
        }}
      >
        <ProForm.Group>
          <ProFormText
            label="检举人姓名"
            width="md"
            name="jjrxm"
            // disabled={true}
            // rules={[
            //   {
            //     required: true,
            //     message: '请录入投诉件编号!',
            //   },
            // ]}
            initialValue={fenfajjrxm}
            placeholder="请录入检举人姓名"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="检举人警号/工号"
            width="md"
            name="jjrjhgh"
            // disabled={true}
            initialValue={fenfajjrjhgh}
            placeholder="请录入警号或工号"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="检举人电话"
            width="md"
            name="jjrdh"
            // disabled={true}
            initialValue={fenfajjrdh}
            placeholder="请录入检举人电话"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="cj"
            label="场景"
            initialValue={fenfacj}
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
          <ProFormSelect
            width="sm"
            name="sjdw"
            label="涉及单位"
            initialValue={fenfasjdw}
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
            initialValue={fenfawtms}
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
            width="sm"
            name="wtlb"
            label="初步问题分类"
            // disabled={true}
            initialValue={fenfawtlb}
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
            initialValue={fenfabllb}
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
            name="hcjzrq"
            label="核查截止日期"
            width="sm"
            initialValue={fenfahcjzrq}
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


      <ModalForm
        title="评估"
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
          <ProFormSelect
            width="sm"
            name="sjdw"
            label="涉及单位"
            disabled={true}
            initialValue={pinggusjdw}
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
          <ProFormSelect
            width="md"
            name="dwcp"
            label="单位初评"
            disabled={true}
            initialValue={pinggudwcp}
            placeholder="请下拉选择单位初评（支持多选）"
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
        </ProForm.Group>
        <ProForm.Group>
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
            name="dwcp"
            label="单位初评"
            disabled={true}
            initialValue={luoshidwcp}
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
