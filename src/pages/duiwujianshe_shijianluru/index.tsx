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
// import UpdateForm from './components/UpdateForm';
import {
  informationrule,
  updateinformationRule,
  addinformationRule,
  shenherizhiinformationrule,
  sheshiminjinginformationrule,
  tijiaoshenpiinformationRule,
  shijianluruxialakuanginformationrule,
  shijianbiaoqianinformationrule
} from './service';
import {PlusOutlined} from '@ant-design/icons';
import type {TableListItem, TableListPagination} from './data';
import {formatRowErrorMessages} from '@/utils/businessError';
// import moment from 'moment';
//@ts-ignore
import {request} from 'umi';
import {
  EditableProTable, ProFormCascader,
  ProFormDateTimePicker, ProFormGroup, ProFormInstance, ProFormList, EditableFormInstance
} from '@ant-design/pro-components';
import {
  ModalForm,
  ProForm, ProFormSelect,
  ProFormTextArea,
  ProFormText,
  DrawerForm,
  ProFormDatePicker,
} from '@ant-design/pro-components';
import type {shenherizhiTableListItem, sheshiminjingTableListItem, shijianbiaoqianTableListItem} from "./data";
import moment, {Moment} from "moment";
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
  const [bianjibutton, setBianjibutton] = useState<boolean>();
  const [shanchubutton, setShanchubutton] = useState<boolean>();
  // const [ceshi, setCeshi] = useState<any>();
  //提交审批
  const [tijiaoshenpiModalVisible, setTijiaoshenpiModalVisible] = useState<boolean>(false);
  const [tijiaoshenpiuuid, setTijiaoshenpiguuid] = useState<string>();

  //事件导入
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // const [daorubutton, setDaorubutton] = useState<boolean>(false);

  //编辑事件
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const [bianjishijianuuid, setBianjishijianguuid] = useState<string>();
  const [shenherizhidetaildata, setShenherizhiDetaildata] = useState<any>();
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  // const [sheshiminjingnulldata] = useState([{
  //     id: 1,
  //     policeId: null,
  //     policeName: null,
  //     staffPoliceid: null,
  //     policeSolutionDesc: null,
  //     responsibilityResult: null,
  //   },]);
  const [sheshiminjingdetaildata, setSheshiminjingDetaildata] = useState<sheshiminjingTableListItem[]>([]);
  const editorFormRef = useRef<EditableFormInstance<sheshiminjingTableListItem>>();

  // const [shenherizhixiangqingdetaildata, setShenherizhixiangqingDetaildata] = useState<any>();
  const [sheshiminjingxiangqingdetaildata, setSheshiminjingxiangqingDetaildata] = useState<sheshiminjingTableListItem[]>([]);

  // const [editshijianbiaoqiantableKeys, setEditshijianbiaoqiantableRowKeys] = useState<React.Key[]>([]);
  const [yewuchangjingdetaildata, setYewuchangjingDetaildata] = useState<shijianbiaoqianTableListItem[]>([]);
  const [wentileixingdetaildata, setWentileixingDetaildata] = useState<shijianbiaoqianTableListItem[]>([]);
  const [shijianbiaoqianxiangqingdetaildata, setShijianbiaoqianxiangqingDetaildata] = useState<shijianbiaoqianTableListItem[]>([]);

  const [bianjicomplainantStaffName, setBianjicomplainantStaffName] = useState<string>();
  const [bianjicomplainantStaffNationality, setBianjicomplainantStaffNationality] = useState<string>();
  const [bianjicomplainantStaffIdType, setBianjicomplainantStaffIdType] = useState<string>();
  const [bianjicomplainantStaffId, setBianjicomplainantStaffId] = useState<string>();
  const [bianjicomplainantStaffPhoneNum, setBianjicomplainantStaffPhoneNum] = useState<string>();
  // const [bianjieventCatelogType, setBianjieventCatelogType] = useState<string>();
  const [bianjieventSolutionTime, setBianjieventSolutionTime] = useState<string>();
  const [bianjieventChannelDesc, setBianjieventChannelDesc] = useState<string>();
  const [bianjieventCreateTime, setBianjieventCreateTime] = useState<string>();
  const [bianjieventCatelogDesc, setBianjieventCatelogDesc] = useState<string>();
  const [bianjieventPoliceCategory, setBianjieventPoliceCategory] = useState<string>();
  const [bianjieventAttributionAnalysis, setBianjieventAttributionAnalysis] = useState<string>();
  const [bianjieventDesc, setBianjieventDesc] = useState<string>();
  const [bianjieventSolutionDesc, setBianjieventSolutionDesc] = useState<string>();
  // const [bianjieventTagName, setBianjieventTagName] = useState<any>();
  //详情表单
  const [detailDrawerVisible, setDetailDrawerVisible] = useState<boolean>(false);
  const [xiangqinguuid, setXiangqinguuid] = useState<string>();
  const [xiangqingcomplainantStaffName, setXiangqingcomplainantStaffName] = useState<string>();
  const [xiangqingcomplainantStaffNationality, setXiangqingcomplainantStaffNationality] = useState<string>();
  const [xiangqingcomplainantStaffIdType, setXiangqingcomplainantStaffIdType] = useState<string>();
  const [xiangqingcomplainantStaffId, setXiangqingcomplainantStaffId] = useState<string>();
  const [xiangqingcomplainantStaffPhoneNum, setXiangqingcomplainantStaffPhoneNum] = useState<string>();
  const [shenherizhixiangqingdetaildata, setShenherizhixiangqingDetaildata] = useState<any>();
  // const [xiangqingeventCatelogType, setXiangqingeventCatelogType] = useState<string>();
  const [xiangqingeventSolutionTime, setXiangqingeventSolutionTime] = useState<string>();
  const [xiangqingeventChannelDesc, setXiangqingeventChannelDesc] = useState<string>();
  const [xiangqingeventCreateTime, setXiangqingeventCreateTime] = useState<string>();
  const [xiangqingeventPoliceCategory, setXiangqingeventPoliceCategory] = useState<string>();
  const [xiangqingeventAttributionAnalysis, setXiangqingeventAttributionAnalysis] = useState<string>();
  const [xiangqingeventDesc, setXiangqingeventDesc] = useState<string>();
  const [xiangqingeventCatelogDesc, setXiangqingeventCatelogDesc] = useState<string>();
  const [xiangqingeventSolutionDesc, setXiangqingeventSolutionDesc] = useState<string>();

  //数据下拉框
  // const [shijianyewuleixingtablexlk, setShijianyewuleixingtablexlk] = useState([]);
  const [yewuchangjingtablexlk, setYewuchangjingtablexlk] = useState([]);
  const [wentileixingtablexlk, setWentileixingtablexlk] = useState([]);
  // const [shijianbiaoqianmingchengtablexlk, setShijianbiaoqianmingchengtablexlk] = useState([]);
  // const [shijianzerenbiaojitablexlk, setShijianzerenbiaojitablexlk] = useState({});
  const [shijianyewuleixingfromxlk, setShijianyewuleixingfromxlk] = useState([]);
  const [tousurenguojifromxlk, setTousurenguojifromxlk] = useState([]);
  const [tousurenzhengjianleixingfromxlk, setTousurenzhengjianleixingfromxlk] = useState([]);
  // const [shijianbiaoqianbiaomingchengxingfromyijixlk, setShijianbiaoqianbiaomingchengxingfromyijixlk] = useState([]);
  // const [shijianbiaoqianbiaomingchengxingfromerjixlk, setShijianbiaoqianbiaomingchengxingfromerjixlk] = useState([]);
  const [yewuchangjingfromxlk, setYewuchangjingfromxlk] = useState([]);
  const [wentileixingfromxlk, setWentileixingfromxlk] = useState([]);
  const [shijianshenhejieguotablexlk, setShijianshenhejieguotablexlk] = useState({});
  const [shijianguanlianjingzhongtablexlk, setShijianguanlianjingzhongtablexlk] = useState({});
  const [guiyinfenxitablexlk, setGuiyinfenxitablexlk] = useState({});
  const [shijianguanlianjingzhongformxlk, setShijianguanlianjingzhongformxlk] = useState([]);
  const [guiyinfenxiformxlk, setGuiyinfenxiformxlk] = useState([]);
  const [guanlianminjingdanweitablexlk, setGuanlianminjingdanweitablexlk] = useState({});
  // const [change, setChange] = useState<string>();
  //
  // const changeStandardtariff = (value: string) => {
  //   setChange(value)
  // }

  // useEffect(() => {
  //   if (change === '队伍标签') {
  //     shijianluruxialakuanginformationrule().then(res => {
  //
  //       // @ts-ignore
  //       setShijianbiaoqianbiaomingchengxingfromxlk(res.sjbqbqmcfromdxlk)
  //       // @ts-ignore
  //       // setShijianbiaoqianbiaomingchengxingfromxlk(res.sjbqbqmcfromyxlk)
  //
  //     })
  //   } else if (change === '业务场景标签') {
  //     shijianluruxialakuanginformationrule().then(res => {
  //
  //       // @ts-ignore
  //       // setShijianbiaoqianbiaomingchengxingfromxlk(res.sjbqbqmcfromdxlk)
  //       // @ts-ignore
  //       setShijianbiaoqianbiaomingchengxingfromxlk(res.sjbqbqmcfromyxlk)
  //
  //     })
  //   }
  // }, [change])
  const [changeEventSolutiontime, setChangeEventSolutiontime] = useState<Moment | null>();
  const [changeEventCreatetime, setChangeEventCreatetime] = useState<Moment | null>();

  const changeEventSolutionTime = (value: Moment | null) => {
    if (value != null) {
      console.log(value.format('YYYY-MM-DD HH:mm:ss').valueOf())
      setChangeEventSolutiontime(value)
    }
  }

  const changeEventCreateTime = (value: Moment | null) => {
    if (value != null) {
      console.log(value.format('YYYY-MM-DD HH:mm:ss').valueOf())
      setChangeEventCreatetime(value)
    }
  }
  if (changeEventSolutiontime){
    if (changeEventCreatetime){
      if (changeEventCreatetime>changeEventSolutiontime){
        message.error('事件创建日期需要小于事件办结日期')

      }    }
  }


  useEffect(() => {
    shijianluruxialakuanginformationrule().then(res => {

        // @ts-ignore
        setYewuchangjingtablexlk(res.ywcjtablexlk)
        // @ts-ignore
        setWentileixingtablexlk(res.wtlxtablexlk)
        // @ts-ignore
        // setShijianbiaoqianmingchengtablexlk(res.sjbqmctablexlk)
        // @ts-ignore
        setShijianyewuleixingfromxlk(res.sjywlxfromxlk)
      // @ts-ignore
        setGuiyinfenxitablexlk(res.gyfxtablexlk)
      // @ts-ignore
      setShijianguanlianjingzhongtablexlk(res.sjgljztablexlk)
      // @ts-ignore
      setShijianshenhejieguotablexlk(res.sjshjgtablexlk)
        // @ts-ignore
        setTousurenguojifromxlk(res.tsrgjfromxlk)
        // @ts-ignore
        setTousurenzhengjianleixingfromxlk(res.tsrzjlxfromxlk)
        // @ts-ignore
        setYewuchangjingfromxlk(res.ywcjfromdxlk)
        // @ts-ignore
        setWentileixingfromxlk(res.wtlxfromdxlk)
      // @ts-ignore
      setShijianguanlianjingzhongformxlk(res.sjgljzfromdxlk)
      // @ts-ignore
      setGuiyinfenxiformxlk(res.gyfxfromdxlk)
      // @ts-ignore
      setGuanlianminjingdanweitablexlk(res.glmjdwtablexlk)
        // // @ts-ignore
        // setShijianbiaoqianbiaomingchengxingfromerjixlk(res.sjbqbqmcfromyxlk)

      }
    )
  }, []);


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

  useEffect(() => {
    sheshiminjinginformationrule({uuid: xiangqinguuid}).then(res => {

        // @ts-ignore
        setSheshiminjingxiangqingDetaildata(res.data)
        // @ts-ignore
        // setXlknetdata(res.xlk)
      }
    )
  }, [xiangqinguuid]);
  useEffect(() => {
    shijianbiaoqianinformationrule({uuid: xiangqinguuid}).then(res => {

        // @ts-ignore
        setShijianbiaoqianxiangqingDetaildata(res.data)
        // @ts-ignore
        // setXlknetdata(res.xlk)
      }
    )
  }, [xiangqinguuid]);
  useEffect(() => {
    shenherizhiinformationrule({uuid: xiangqinguuid}).then(res => {

        // @ts-ignore
        setShenherizhixiangqingDetaildata(res.data)
        // @ts-ignore
        // setXlknetdata(res.xlk)
      }
    )
  }, [xiangqinguuid]);
  useEffect(() => {
    shenherizhiinformationrule({uuid: bianjishijianuuid}).then(res => {

        // @ts-ignore
        setShenherizhiDetaildata(res.data)
        // @ts-ignore
        // setXlknetdata(res.xlk)
      }
    )
  }, [bianjishijianuuid]);


  // const [tousufenfaModalVisible, setTousufenfaModalVisible] = useState<boolean>(false);

  const tijiaoshenpiUpdate = async () => {
    const hide = message.loading('正在提交审批');

    try {
      await tijiaoshenpiinformationRule({
        uuid: tijiaoshenpiuuid,
      });
      hide();
      message.success('提交审批成功');
      return true;
    } catch (error) {
      hide();
      message.error('提交审批失败请重试！');
      return false;
    }
  };
  const handleAdd = async (fields: TableListItem) => {
    const hide = message.loading('正在添加');

    try {
      const res = await addinformationRule({...fields});
      hide();
      const errorMessage = formatRowErrorMessages(res as any);
      if (errorMessage) {
        message.error(errorMessage);
        return false;
      }
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
  const [filename, setFilename] = useState<string>()
  const props: UploadProps = {
    name: 'file',
    headers: {'Authorization': localStorage.getItem('setAuthorization') as string},
    action: `/duiwujianshe/api/shijianluruupload?&name=${filename}}`,
    showUploadList: false,
    maxCount: 1,
    beforeUpload: file => {
      setFilename(file.name)
    },
    // onChange() {
    //   // eslint-disable-next-line @typescript-eslint/no-shadow
    //   let message = ""
    //   ceshi.forEach((ele: any) => {
    //       message += "第" + ele.error_row + "行，" + ele.error_msg + '\n'
    //     }
    //   )
    //   window.alert(message)
    // },
    // @ts-ignore
    onSuccess(v) {
      // console.log(v)
      if (v.success === false) {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        let message = ""
        v.errorMsg.forEach((ele: any) => {
            message += "第" + ele.error_row + "行，" + ele.error_msg + '\n'
          }
        )
        window.alert(message)
      } else if (v.success === true) {
        message.success(` 上传成功`)
      }
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
      search: false,
      valueType: 'textarea',
      align: 'center',
      width: 50,
      hideInTable: false,
    },

    {
      title: '事件业务来源',
      dataIndex: 'eventCatelogDesc',
      search: false,
      width: 300,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '创建日期范围',
      dataIndex: 'eventSolutionTime',
      valueType: 'dateRange',
      align: 'center',
      // hideInForm: true,
      hideInTable: true,
      initialValue: [
        moment().year(moment().year() - 2).startOf("year").format("YYYY-MM-DD"),
        moment().subtract(0, 'days').format('YYYY-MM-DD').valueOf()
      ],
      search: {
        transform: (value) => {
          return {
            eventSolutionTimeStartTime: value[0],
            eventSolutionTimeEndTime: value[1],
          };
        },
      },
    },
    {
      title: '事件描述',
      dataIndex: 'eventDesc',
      // search: false,
      valueType: 'textarea',
      align: 'center',
      width: 300,
      ellipsis: true,
      hideInTable: false,
    },
    {
      title: '业务场景',
      dataIndex: 'eventAllTagNameBusinessScenario',
      // search: false,
      valueType: 'treeSelect',
      initialValue: '全部',
      align: 'center',
      hideInTable: true,
      fieldProps: {
        options: yewuchangjingtablexlk,
        fieldNames: {
          children: 'language',
          label: 'field',
        },
        showSearch: true,
        filterTreeNode: true,
        // multiple: true,
        treeNodeFilterProp: 'field',
      },
    },
    {
      title: '问题类型',
      dataIndex: 'eventAllTagNameQuestionType',
      // search: false,
      valueType: 'treeSelect',
      initialValue: '全部',
      align: 'center',
      hideInTable: true,
      fieldProps: {
        options: wentileixingtablexlk,
        fieldNames: {
          children: 'language',
          label: 'field',
        },
        showSearch: true,
        filterTreeNode: true,
        // multiple: true,
        treeNodeFilterProp: 'field',
      },
    },
    // {
    //   title: '事件责任标识',
    //   dataIndex: 'responsibilityResult',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '事件责任标识',
    //   dataIndex: 'responsibilityResult',
    //   // search: false,
    //   valueType: 'select',
    //   align: 'center',
    //   hideInTable: true,
    //   valueEnum: shijianzerenbiaojitablexlk,
    // },
    {
      title: '事件处置结果描述',
      dataIndex: 'eventSolutionDesc',
      search: false,
      width: 300,
      ellipsis: true,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '投诉人名称',
      dataIndex: 'complainantStaffName',
      search: false,
      valueType: 'textarea',
      align: 'center',
      width: 100,
      hideInTable: false,
    },
    {
      title: '事件审核结果',
      dataIndex: 'eventVerifyResult',
      search: false,
      width: 200,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '事件审核结果',
      dataIndex: 'eventVerifyResult',
      // search: false,
      valueType: 'select',
      align: 'center',
      initialValue: '全部',
      hideInTable: true,
      valueEnum: shijianshenhejieguotablexlk,
    },
    // {
    //   title: '事件标签名称',
    //   dataIndex: 'eventAllTagName',
    //   // search: false,
    //   valueType: 'treeSelect',
    //   initialValue: '全部',
    //   align: 'center',
    //   hideInTable: true,
    //   fieldProps: {
    //     options: shijianbiaoqianmingchengtablexlk,
    //     fieldNames: {
    //       children: 'language',
    //       label: 'field',
    //     },
    //     showSearch: true,
    //     filterTreeNode: true,
    //     // multiple: true,
    //     treeNodeFilterProp: 'field',
    //   },
    //   // search: false,
    //   // valueType: 'cascader',
    //   // align: 'center',
    //   // initialValue: '全部',
    //   // hideInTable: true,
    //   // search: {
    //   //   transform: (value) => {
    //   //     return {
    //   //       eventAllTagName1: value[0],
    //   //       eventAllTagName2: value[1],
    //   //       eventAllTagName3: value[2],
    //   //     };
    //   //   },
    //   // },
    //   // fieldProps: {
    //   //   options: shijianbiaoqianmingchengtablexlk,
    //   //   fieldNames: {
    //   //     children: 'language',
    //   //     label: 'field',
    //   //   },
    //   //   showSearch: true,
    //   //   filterTreeNode: true,
    //   //   // multiple: true,
    //   //   treeNodeFilterProp: 'field',
    //   // },
    //   // valueEnum: shijianbiaoqianmingchengtablexlk,
    // },
    {
      title: '事件关联警种',
      dataIndex: 'eventPoliceCategory',
      // search: false,
      valueType: 'select',
      align: 'center',
      initialValue: '全部',
      hideInTable: true,
      valueEnum: shijianguanlianjingzhongtablexlk,
    },
    {
      title: '归因分析',
      dataIndex: 'eventAttributionAnalysis',
      // search: false,
      valueType: 'select',
      align: 'center',
      initialValue: '全部',
      hideInTable: true,
      valueEnum: guiyinfenxitablexlk,
    },

    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      align: 'center',
      fixed: 'right',
      width: 300,
      render: (_, record) => [
        <Button
          type={"primary"}
          disabled={record.tijiaoshenpibutton}
          // key="config"
          onClick={() => {
            setTijiaoshenpiModalVisible(true)
            setTijiaoshenpiguuid(record.uuid)
          }}
        >
          提交审批
        </Button>,
        <Button
          type={"primary"}
          disabled={record.bianjishijianbutton}
          // key="config"
          onClick={() => {
            setDetailModalVisible(true)
            setBianjishijianguuid(record.uuid)
            setBianjicomplainantStaffName(record.complainantStaffName)
            setBianjicomplainantStaffNationality(record.complainantStaffNationality)
            setBianjicomplainantStaffIdType(record.complainantStaffIdType)
            setBianjicomplainantStaffId(record.complainantStaffId)
            setBianjicomplainantStaffPhoneNum(record.complainantStaffPhoneNum)
            // setBianjieventCatelogType(record.eventCatelogType)
            setBianjieventSolutionTime(record.eventSolutionTime)
            setBianjieventChannelDesc(record.eventChannelDesc)
            setBianjieventCreateTime(record.eventCreateTime)
            setBianjieventCatelogDesc(record.eventCatelogDesc)
            setBianjieventPoliceCategory(record.eventPoliceCategory)
            setBianjieventAttributionAnalysis(record.eventAttributionAnalysis)
            setBianjieventDesc(record.eventDesc)
            setBianjieventSolutionDesc(record.eventSolutionDesc)
            // setBianjieventTagName(record.eventTagName)
            setBianjibutton(false)
            setShanchubutton(false)
            setSheshiminjingDetaildata(record.setSheshiminjingDetaildata)
            setYewuchangjingDetaildata(record.setYewuchangjingDetaildata)
            setWentileixingDetaildata(record.setWentileixingDetaildata)
          }}
        >
          编辑事件
        </Button>,
        <Button
          type={"primary"}
          // key="config"
          onClick={() => {
            setDetailDrawerVisible(true)
            setXiangqinguuid(record.uuid)
            setXiangqingcomplainantStaffName(record.complainantStaffName)
            setXiangqingcomplainantStaffNationality(record.complainantStaffNationality)
            setXiangqingcomplainantStaffIdType(record.complainantStaffIdType)
            setXiangqingcomplainantStaffId(record.complainantStaffId)
            setXiangqingcomplainantStaffPhoneNum(record.complainantStaffPhoneNum)
            // setXiangqingeventCatelogType(record.eventCatelogType)
            setXiangqingeventSolutionTime(record.eventSolutionTime)
            setXiangqingeventChannelDesc(record.eventChannelDesc)
            setXiangqingeventCreateTime(record.eventCreateTime)
            setXiangqingeventPoliceCategory(record.eventPoliceCategory)
            setXiangqingeventAttributionAnalysis(record.eventAttributionAnalysis)
            setXiangqingeventDesc(record.eventDesc)
            setXiangqingeventCatelogDesc(record.eventCatelogDesc)
            setXiangqingeventSolutionDesc(record.eventSolutionDesc)
            setBianjibutton(true)
            setShanchubutton(true)
          }}
        >
          详情
        </Button>,
      ],
    },
  ];

  const sheshiminjingcolumns: ProColumns<sheshiminjingTableListItem>[] = [

    {
      title: 'id',
      dataIndex: 'id',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: true,
    },
    {
      title: '关联民警身份证号码',
      dataIndex: 'policeId',
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联民警姓名',
      dataIndex: 'policeName',
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联民警警号',
      dataIndex: 'staffPoliceid',
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联民警单位',
      dataIndex: 'staffPoliceUnit',
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: false,
      valueEnum: guanlianminjingdanweitablexlk,
    },
    {
      title: '关联民警处理结果描述',
      dataIndex: 'policeSolutionDesc',
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '责任标识',
      dataIndex: 'responsibilityResult',
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必选项'}],
        };
      },
      search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: false,
      valueEnum: {
        0: {text: '有责'},
        1: {text: '无责'},
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      align: 'center',
      render: (text, record, _, action) => [
        <a
          key="editable1"
          type={"primary"}
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            const tableDataSource = formRef.current?.getFieldValue(
              'table',
            ) as sheshiminjingTableListItem[];
            formRef.current?.setFieldsValue({
              table: tableDataSource.filter((item) => item.id !== record.id),
            });
          }}
        >
          删除
        </a>,
      ],
    },
  ];
  const sheshiminjingwucaozuocolumns: ProColumns<sheshiminjingTableListItem>[] = [

    {
      title: 'id',
      dataIndex: 'id',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: true,
    },
    {
      title: '关联民警身份证号码',
      dataIndex: 'policeId',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联民警姓名',
      dataIndex: 'policeName',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联民警警号',
      dataIndex: 'staffPoliceid',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联民警单位',
      dataIndex: 'staffPoliceUnit',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联民警处理结果描述',
      dataIndex: 'policeSolutionDesc',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '责任标识',
      dataIndex: 'responsibilityResult',
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
      render: (text, record, _, action) => [
        <Button
          key="editable1"
          disabled={true}
          type={"primary"}
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </Button>,
        <Button
          key="delete"
          disabled={true}
          onClick={() => {
            setSheshiminjingDetaildata(sheshiminjingdetaildata.filter((item) => item.id !== record.id));
          }}
        >
          删除
        </Button>,
      ],
    },
  ];

  const shijianbiaoqiancolumns: ProColumns<shijianbiaoqianTableListItem>[] = [

    {
      title: 'UUID',
      dataIndex: 'id',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: true,
    },
    {
      title: '标签类型',
      dataIndex: 'eventTagType',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '标签名称',
      dataIndex: 'eventTagName',
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
      render: (text, record, _, action) => [
        <Button
          key="editable2"
          type={"primary"}
          disabled={bianjibutton}
          onClick={() => {
            action?.startEditable?.(record.id);
            console.log(record.id)
          }}
        >
          编辑
        </Button>,
        <Button
          key="delete2"
          // type={"primary"}
          disabled={shanchubutton}
          onClick={() => {
            const tableDataSource = formRef.current?.getFieldValue(
              'shijianbiaoqiantable',
            ) as shijianbiaoqianTableListItem[];
            formRef.current?.setFieldsValue({
              shijianbiaoqiantable: tableDataSource.filter((item) => item.id !== record.id),
            });
          }}
        >
          删除
        </Button>,
      ],
    },
  ];


  const shenherizhicolums: ProColumns<shenherizhiTableListItem>[] = [
    {
      title: '审核意见',
      dataIndex: 'eventVerifyIdea',
      search: false,
      width: 420,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '事件审核结果',
      dataIndex: 'eventVerifyResult',
      search: false,
      width: 420,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '审核日期',
      dataIndex: 'eventVerifyTime',
      search: false,
      width: 420,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
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
              }}
            >
              直接导入
            </Button>,
            <Upload{...props}>
              <Button type="primary" icon={<PlusOutlined/>}>批量导入</Button>
            </Upload>,
            <Button type="primary" key="templatedownload" onClick={() => {
              request(`/duiwujianshe/api/shijiandaorumubanexceldownload`, {
                method: 'get',
                responseType: 'arrayBuffer',
                headers: {'Authorization': localStorage.getItem('setAuthorization') as string}
              }).then((res: any) => {
                const blob = new Blob([res]);
                // console.log(initialState.currentUser.name)
                const elementA = document.createElement('a');
                elementA.setAttribute('download', '导入模板.rar');
                elementA.style.display = 'none';
                elementA.href = URL.createObjectURL(blob);
                document.body.appendChild(elementA);
                elementA.click();
                document.body.removeChild(elementA);
              });

            }}>
              下载模板
            </Button>,
          ],
        }}
        // search={false}
        request={informationrule}
        columns={columns}
        scroll={{x: 2500,}}
        // columnsState={{
        //   value: columnsStateMap,
        //   onChange: setColumnsStateMap,
        // }}
      />
      <ModalForm
        title="提交审批"
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
                // disabled={guidangqr}
                onClick={() => {
                  props.submit();
                  // setPinggubcortl('bc')
                }}
              >
                提交
              </Button>,
            ];
          },
        }}
        visible={tijiaoshenpiModalVisible}
        onVisibleChange={setTijiaoshenpiModalVisible}
        onFinish={async () => {
          setTijiaoshenpiModalVisible(false)
          const success = await tijiaoshenpiUpdate();
          if (success) {
            setTijiaoshenpiModalVisible(false)
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        是否提交审批
      </ModalForm>

      <ModalForm
        formRef={formRef}
        // initialValues={{
        //   table: sheshiminjingnulldata,
        // }}
        validateTrigger="onBlur"
        title="事件导入"
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
          // submitButtonProps:{
          //   disabled:daorubutton
          // }
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
          title={"投诉人信息"}
        >
          <ProForm.Group>
            <ProFormText
              label="投诉人姓名"
              width="md"
              name="complainantStaffName"
              // disabled={true}
              // initialValue={bianjicomplainantStaffName}
              placeholder="请录入投诉人姓名"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入投诉人姓名！',
              //   },
              // ]}
            />
            <ProFormSelect.SearchSelect
              mode={"single"}
              fieldProps={{
                labelInValue: true,
              }}
              width="md"
              name="complainantStaffNationality"
              label="投诉人国籍"
              placeholder="请下拉选择投诉人国籍"
              // initialValue={bianjicomplainantStaffNationality}
              // rules={[
              //   {
              //     required: true,
              //     message: '请下拉选择投诉人国籍！',
              //   },
              // ]}
              options={tousurenguojifromxlk}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              width="md"
              name="complainantStaffIdType"
              label="投诉人证件类型"
              // initialValue={bianjicomplainantStaffIdType}
              placeholder="请下拉选择投诉人证件类型"
              // rules={[
              //   {
              //     required: true,
              //     message: '请下拉选择投诉人证件类型！',
              //   },
              // ]}
              options={tousurenzhengjianleixingfromxlk}
            />
            <ProFormText
              label="投诉人证件号码"
              width="md"
              name="complainantStaffId"
              // disabled={true}
              // initialValue={bianjicomplainantStaffId}
              placeholder="请录入投诉人证件号码"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入投诉人证件号码！',
              //   },
              // ]}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              label="投诉人电话号码"
              width="md"
              extra={'若事件业务来源为12345、12337、12377或信访，请填写投诉人电话号码'}
              name="complainantStaffPhoneNum"
              // disabled={true}
              // initialValue={bianjicomplainantStaffPhoneNum}
              placeholder="请录入投诉人电话号码"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入投诉人电话号码！',
              //   },
              // ]}
            />
          </ProForm.Group>
        </ProForm.Group>
        <ProForm.Group
          title={"事件详情"}
        >
          <ProForm.Group>
            <ProFormCascader
              width="md"

              placeholder="请下拉选择事件业务来源"
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件业务来源！',
                },
              ]}
              request={async () => shijianyewuleixingfromxlk}
              name="eventCatelogDesc"
              label="事件业务来源"
              // initialValue={[' ', ' ', ' ']}
              // addonAfter={'qixian'}
            />
            {/*<ProFormSelect*/}
            {/*  width="md"*/}
            {/*  name="eventCatelogDesc"*/}
            {/*  label="事件业务来源"*/}
            {/*  // initialValue={bianjieventCatelogDesc}*/}
            {/*  fieldProps={{*/}
            {/*    filterOption: () => {*/}
            {/*      return true*/}
            {/*    }*/}
            {/*  }}*/}
            {/*  placeholder="请下拉选择事件业务来源"*/}
            {/*  rules={[*/}
            {/*    {*/}
            {/*      required: true,*/}
            {/*      message: '请下拉选择事件业务来源！',*/}
            {/*    },*/}
            {/*  ]}*/}
            {/*  options={shijianyewuleixingfromxlk}*/}
            {/*/>*/}
             <ProFormDateTimePicker
              label="事件创建日期"
              width="md"
              name="eventCreateTime"
              // initialValue={bianjieventCreateTime}
              fieldProps={{onChange: (value) => changeEventCreateTime(value),}}
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件创建日期！',
                },
              ]}
              // disabled={true}
              // initialValue={bianjitsrxm}
              placeholder="请下拉选择事件创建日期"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              width="md"
              name="eventChannelDesc"
              label="事件上游渠道唯一标识"
              // initialValue={bianjieventChannelDesc}
              placeholder="请录入事件上游渠道唯一标识"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入事件上游渠道唯一标识！',
              //   },
              // ]}
            />
            <ProFormDateTimePicker
              label="事件办结日期"
              width="md"
              name="eventSolutionTime"
              fieldProps={{onChange: (value) => changeEventSolutionTime(value),}}
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件办结日期！',
                },
              ]}
              // disabled={true}
              // initialValue={bianjieventSolutionTime}
              placeholder="请下拉选择事件办结日期"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              width="md"
              name="eventPoliceCategory"
              label="事件关联警种"
              // initialValue={bianjieventPoliceCategory}
              fieldProps={{
                filterOption: () => {
                  return true
                }
              }}
              placeholder="请下拉选择事件关联警种"
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件关联警种！',
                },
              ]}
              options={shijianguanlianjingzhongformxlk}
            />
            <ProFormSelect
              width="md"
              name="eventAttributionAnalysis"
              label="归因分析"
              // initialValue={bianjieventPoliceCategory}
              fieldProps={{
                filterOption: () => {
                  return true
                }
              }}
              placeholder="请下拉选择归因分析"
              rules={[
                {
                  required: true,
                  message: '请下拉选择归因分析！',
                },
              ]}
              options={guiyinfenxiformxlk}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormTextArea
              width={800}
              name="eventDesc"
              label="事件描述"
              // initialValue={bianjieventDesc}
              placeholder="事件描述内容"
              rules={[
                {
                  min:4,
                  required: true,
                  message: '事件描述内容需大于3个字符！',
                },
              ]}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormTextArea
              width={800}
              // initialValue={bianjieventSolutionDesc}
              name="eventSolutionDesc"
              label="事件处置结果描述"
              placeholder="事件处置结果描述"
              rules={[
                {
                  required: true,
                  message: '事件处置结果描述！',
                },
              ]}
            />
          </ProForm.Group>
        </ProForm.Group>


        <EditableProTable<sheshiminjingTableListItem>
          rowKey="id"
          scroll={{
            x: 1200,
          }}

          editableFormRef={editorFormRef}
          // headerTitle="关联民警"
          formItemProps={{
            label: '关联民警（关联民警至少一人）',
          }}
          maxLength={2000}
          name="table"
          // controlled={controlled}
          recordCreatorProps={
            {
              //@ts-ignore
              record: () => ({id: (Math.random() * 1000000).toFixed(0)}),
            }
          }
          toolBarRender={false}
          columns={sheshiminjingcolumns}
          editable={{
            type: 'multiple',
            editableKeys,
            onChange: setEditableRowKeys,
          }}
        />

        <ProForm.Group
          title={"事件标签"}
        >
          <ProFormList
            name="yewuchangjing"
            // label="事件标签"
            // rules={[{required: true, message: '请填写涉及设备'}]}
            initialValue={[
              {
                eventTagName: null,
              }
            ]}
            copyIconProps={{tooltipText: '复制此项到末尾'}}
            min={1}
            deleteIconProps={{
              tooltipText: '删除此列',
            }}
          >
            <ProFormGroup key="group">
              <ProFormCascader
                width="md"
                rules={[
                  {
                    required: true,
                    message: '请选择业务场景！',
                  },
                ]}
                request={async () => yewuchangjingfromxlk}
                name="eventTagName"
                label="业务场景"
                // initialValue={[' ', ' ', ' ']}
                // addonAfter={'qixian'}
              />
            </ProFormGroup>
          </ProFormList>
          <ProFormList
            name="wentileixing"
            // label="事件标签"
            // rules={[{required: true, message: '请填写涉及设备'}]}
            initialValue={[
              {
                eventTagName: null,
              }
            ]}
            copyIconProps={{tooltipText: '复制此项到末尾'}}
            min={1}
            deleteIconProps={{
              tooltipText: '删除此列',
            }}
          >
            <ProFormGroup key="group">
              <ProFormCascader
                width="md"
                rules={[
                  {
                    required: true,
                    message: '请选择问题类型！',
                  },
                ]}
                request={async () => wentileixingfromxlk}
                name="eventTagName"
                label="问题类型"
                // initialValue={[' ', ' ', ' ']}
                // addonAfter={'qixian'}
              />
            </ProFormGroup>
          </ProFormList>
        </ProForm.Group>

        <ProForm.Group
          title={"审核日志（日期倒序排列）"}
        >
          <ProTable
            // headerTitle="涉及人员"
            scroll={{x: 800,}}
            options={false}
            search={false}
            columnEmptyText={false}
            pagination={false}
            // dataSource={shenherizhidetaildata}
            columns={shenherizhicolums}
          />
        </ProForm.Group>

      </ModalForm>

      <ModalForm
        formRef={formRef}
        initialValues={{
          table: sheshiminjingdetaildata,
        }}
        validateTrigger="onBlur"
        title="编辑事件"
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
          title={"投诉人信息"}
        >
          <ProForm.Group>
            <ProFormText
              label="投诉人姓名"
              width="md"
              name="complainantStaffName"
              // disabled={true}
              initialValue={bianjicomplainantStaffName}
              placeholder="请录入投诉人姓名"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入投诉人姓名！',
              //   },
              // ]}
            />
            <ProFormSelect.SearchSelect
              mode={"single"}
              fieldProps={{
                labelInValue: true,
              }}
              width="md"
              name="complainantStaffNationality"
              label="投诉人国籍"
              placeholder="请下拉选择投诉人国籍"
              initialValue={bianjicomplainantStaffNationality}
              // rules={[
              //   {
              //     required: true,
              //     message: '请下拉选择投诉人国籍！',
              //   },
              // ]}
              options={tousurenguojifromxlk}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              width="md"
              name="complainantStaffIdType"
              label="投诉人证件类型"
              initialValue={bianjicomplainantStaffIdType}
              placeholder="请下拉选择投诉人证件类型"
              // rules={[
              //   {
              //     required: true,
              //     message: '请下拉选择投诉人证件类型！',
              //   },
              // ]}
              options={tousurenzhengjianleixingfromxlk}
            />
            <ProFormText
              label="投诉人证件号码"
              width="md"
              name="complainantStaffId"
              // disabled={true}
              initialValue={bianjicomplainantStaffId}
              placeholder="请录入投诉人证件号码"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入投诉人证件号码！',
              //   },
              // ]}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              label="投诉人电话号码"
              width="md"
              name="complainantStaffPhoneNum"
              // disabled={true}
              extra={'若事件业务来源为12345、12337、12377或信访，请填写投诉人电话号码'}
              initialValue={bianjicomplainantStaffPhoneNum}
              placeholder="请录入投诉人电话号码"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入投诉人电话号码！',
              //   },
              // ]}
            />
          </ProForm.Group>
        </ProForm.Group>
        <ProForm.Group
          title={"事件详情"}
        >
          <ProForm.Group>
            <ProFormCascader
              width="md"
              placeholder="请下拉选择事件业务来源"
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件业务来源！',
                },
              ]}
              request={async () => shijianyewuleixingfromxlk}
              initialValue={bianjieventCatelogDesc}
              name="eventCatelogDesc"
              label="事件业务来源"
              // initialValue={[' ', ' ', ' ']}
              // addonAfter={'qixian'}
            />

            {/*<ProFormSelect*/}
            {/*  width="md"*/}
            {/*  name="eventCatelogDesc"*/}
            {/*  label="事件业务来源"*/}
            {/*  initialValue={bianjieventCatelogDesc}*/}
            {/*  fieldProps={{*/}
            {/*    filterOption: () => {*/}
            {/*      return true*/}
            {/*    }*/}
            {/*  }}*/}
            {/*  placeholder="请下拉选择事件业务来源"*/}
            {/*  rules={[*/}
            {/*    {*/}
            {/*      required: true,*/}
            {/*      message: '请下拉选择事件业务来源！',*/}
            {/*    },*/}
            {/*  ]}*/}
            {/*  options={shijianyewuleixingfromxlk}*/}
            {/*/>*/}
            <ProFormDateTimePicker
              label="事件办结日期"
              width="md"
              name="eventSolutionTime"
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件办结日期！',
                },
              ]}
              // disabled={true}
              initialValue={bianjieventSolutionTime}
              placeholder="请下拉选择事件办结日期"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              width="md"
              name="eventChannelDesc"
              label="事件上游渠道唯一标识"
              initialValue={bianjieventChannelDesc}
              placeholder="请录入事件上游渠道唯一标识"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入事件上游渠道唯一标识！',
              //   },
              // ]}
            />
            <ProFormDateTimePicker
              label="事件创建日期"
              width="md"
              name="eventCreateTime"
              initialValue={bianjieventCreateTime}
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件创建日期！',
                },
              ]}
              // disabled={true}
              // initialValue={bianjitsrxm}
              placeholder="请下拉选择事件创建日期"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              width="md"
              name="eventPoliceCategory"
              label="事件关联警种"
              initialValue={bianjieventPoliceCategory}
              fieldProps={{
                filterOption: () => {
                  return true
                }
              }}
              placeholder="请下拉选择事件关联警种"
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件关联警种！',
                },
              ]}
              options={shijianguanlianjingzhongformxlk}
            />
            <ProFormSelect
              width="md"
              name="eventAttributionAnalysis"
              label="归因分析"
              initialValue={bianjieventAttributionAnalysis}
              fieldProps={{
                filterOption: () => {
                  return true
                }
              }}
              placeholder="请下拉选择归因分析"
              rules={[
                {
                  required: true,
                  message: '请下拉选择归因分析！',
                },
              ]}
              options={guiyinfenxiformxlk}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormTextArea
              width={800}
              name="eventDesc"
              label="事件描述"
              initialValue={bianjieventDesc}
              placeholder="事件描述内容"
              rules={[
                {
                  min:4,
                  required: true,
                  message: '事件描述内容！',
                },
              ]}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormTextArea
              width={800}
              initialValue={bianjieventSolutionDesc}
              name="eventSolutionDesc"
              label="事件处置结果描述"
              placeholder="事件处置结果描述"
              rules={[
                {
                  required: true,
                  message: '事件处置结果描述！',
                },
              ]}
            />
          </ProForm.Group>
        </ProForm.Group>


        {/*<EditableProTable<sheshiminjingTableListItem>*/}
        {/*  rowKey="id"*/}
        {/*  name="table"*/}
        {/*  recordCreatorProps={{*/}
        {/*    //@ts-ignore*/}
        {/*    record: (index) => ({id: index + 1}),*/}
        {/*  }}*/}
        {/*  headerTitle="涉事民警（行必须填好才能提交）"*/}
        {/*  maxLength={100}*/}
        {/*  scroll={{x: 800,}}*/}
        {/*  // loading={false}*/}
        {/*  columns={sheshiminjingcolumns}*/}
        {/*  value={sheshiminjingdetaildata}*/}
        {/*  onChange={setSheshiminjingDetaildata}*/}
        {/*  editable={{*/}
        {/*    type: 'multiple',*/}
        {/*    editableKeys,*/}
        {/*    // onSave: async (rowKey, data, row) => {*/}
        {/*    //   console.log(rowKey, data, row);*/}
        {/*    //   // await waitTime(2000);*/}
        {/*    // },*/}
        {/*    onChange: setEditableRowKeys,*/}
        {/*  }}*/}
        {/*/>*/}
        <EditableProTable<sheshiminjingTableListItem>
          rowKey="id"
          scroll={{
            x: 1200,
          }}
          editableFormRef={editorFormRef}
          formItemProps={{
            label: '关联民警（关联民警至少一人）',
          }}
          headerTitle="可编辑表格"
          maxLength={2000}
          name="table"
          // controlled={controlled}
          recordCreatorProps={
            {
              //@ts-ignore
              record: () => ({id: (Math.random() * 1000000).toFixed(0)}),
            }
          }
          toolBarRender={false}
          columns={sheshiminjingcolumns}
          editable={{
            type: 'multiple',
            editableKeys,
            onChange: setEditableRowKeys,
          }}
        />

        <ProForm.Group
          title={"事件标签"}
        >
          <ProFormList
            name="yewuchangjing"
            // label="事件标签"
            // rules={[{required: true, message: '请填写涉及设备'}]}
            initialValue={yewuchangjingdetaildata}
            copyIconProps={{tooltipText: '复制此项到末尾'}}
            min={1}
            deleteIconProps={{
              tooltipText: '删除此列',
            }}
          >
            <ProFormGroup key="group">
              <ProFormCascader
                width="md"
                allowClear
                rules={[
                  {
                    required: true,
                    message: '请选择业务场景！',
                  },
                ]}
                request={async () => yewuchangjingfromxlk}
                name="eventTagName"
                label="业务场景"
              />
            </ProFormGroup>
          </ProFormList>
          <ProFormList
            name="wentileixing"
            // label="事件标签"
            // rules={[{required: true, message: '请填写涉及设备'}]}
            initialValue={wentileixingdetaildata}
            copyIconProps={{tooltipText: '复制此项到末尾'}}
            min={1}
            deleteIconProps={{
              tooltipText: '删除此列',
            }}
          >
            <ProFormGroup key="group">
              <ProFormCascader
                width="md"
                allowClear
                rules={[
                  {
                    required: true,
                    message: '请选择问题类型！',
                  },
                ]}
                request={async () => wentileixingfromxlk}
                name="eventTagName"
                label="问题类型"
              />
            </ProFormGroup>
          </ProFormList>
        </ProForm.Group>

        <ProForm.Group
          title={"审核日志（日期倒序排列）"}
        >
          <ProTable
            // headerTitle="涉及人员"
            scroll={{x: 800,}}
            options={false}
            search={false}
            columnEmptyText={false}
            pagination={false}
            dataSource={shenherizhidetaildata}
            columns={shenherizhicolums}
          />
        </ProForm.Group>

      </ModalForm>

      <DrawerForm
        title="详情"
        width="1000px"
        drawerProps={{destroyOnClose: true, maskClosable: false, placement: "left"}}
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
          submitButtonProps: {
            style: {display: "none"}
          },
        }}
        style={{alignContent: "center", margin: 'auto', width: 850}}
        visible={detailDrawerVisible}
        onVisibleChange={setDetailDrawerVisible}
        onFinish={async () => {
          setDetailDrawerVisible(false)
          // const success = await xiangqingshijianUpdate(value as TableListItem);

          // setInitialValues({})
        }}
      >
        <ProForm.Group
          title={"投诉人信息"}
        >
          <ProForm.Group>
            <ProFormText
              label="投诉人姓名"
              width="md"
              name="complainantStaffName"
              disabled={true}
              initialValue={xiangqingcomplainantStaffName}
              placeholder="请录入投诉人姓名"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入投诉人姓名！',
              //   },
              // ]}
            />
            <ProFormSelect
              width="md"
              name="complainantStaffNationality"
              label="投诉人国籍"
              placeholder="请下拉选择投诉人国籍"
              disabled={true}
              initialValue={xiangqingcomplainantStaffNationality}
              // rules={[
              //   {
              //     required: true,
              //     message: '请下拉选择投诉人国籍！',
              //   },
              // ]}
              options={[
                {
                  value: '现场执勤处警',
                  label: '现场执勤处警',
                },
                {
                  value: '交警现场执法',
                  label: '交警现场执法',
                },
              ]}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              width="md"
              name="complainantStaffIdType"
              label="投诉人证件类型"
              disabled={true}
              initialValue={xiangqingcomplainantStaffIdType}
              placeholder="请下拉选择投诉人证件类型"
              // rules={[
              //   {
              //     required: true,
              //     message: '请下拉选择投诉人证件类型！',
              //   },
              // ]}
              options={[
                {
                  value: '身份证',
                  label: '身份证',
                },
                {
                  value: '护照',
                  label: '护照',
                },
              ]}
            />
            <ProFormText
              label="投诉人证件号码"
              width="md"
              name="complainantStaffId"
              disabled={true}
              initialValue={xiangqingcomplainantStaffId}
              placeholder="请录入投诉人证件号码"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入投诉人证件号码！',
              //   },
              // ]}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              label="投诉人电话号码"
              width="md"
              name="complainantStaffPhoneNum"
              disabled={true}
              initialValue={xiangqingcomplainantStaffPhoneNum}
              placeholder="请录入投诉人电话号码"
              rules={[
                {
                  required: true,
                  message: '请录入投诉人电话号码！',
                },
              ]}
            />
          </ProForm.Group>
        </ProForm.Group>
        <ProForm.Group
          title={"事件详情"}
        >
          <ProForm.Group>
            <ProFormSelect
              width="md"
              name="eventCatelogDesc"
              label="事件业务来源"
              disabled={true}
              initialValue={xiangqingeventCatelogDesc}
              placeholder="请下拉选择事件业务来源"
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件业务来源！',
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
              ]}
            />
            <ProFormDatePicker
              label="事件办结日期"
              width="md"
              name="eventSolutionTime"
              disabled={true}
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件办结日期！',
                },
              ]}
              // disabled={true}
              initialValue={xiangqingeventSolutionTime}
              placeholder="请下拉选择事件办结日期"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              width="md"
              name="eventChannelDesc"
              label="事件上游渠道唯一标识"
              disabled={true}
              initialValue={xiangqingeventChannelDesc}
              placeholder="请录入事件上游渠道唯一标识"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入事件上游渠道唯一标识！',
              //   },
              // ]}
            />
            <ProFormDatePicker
              label="事件创建日期"
              width="md"
              name="eventCreateTime"
              disabled={true}
              initialValue={xiangqingeventCreateTime}
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件创建日期！',
                },
              ]}
              // disabled={true}
              // initialValue={xiangqingtsrxm}
              placeholder="请下拉选择事件创建日期"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              width="md"
              name="eventPoliceCategory"
              disabled={true}
              label="事件关联警种"
              initialValue={xiangqingeventPoliceCategory}
              fieldProps={{
                filterOption: () => {
                  return true
                }
              }}
              placeholder="请下拉选择事件关联警种"
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件关联警种！',
                },
              ]}
              options={shijianguanlianjingzhongformxlk}
            />
            <ProFormSelect
              width="md"
              name="eventAttributionAnalysis"
              label="归因分析"
              disabled={true}
              initialValue={xiangqingeventAttributionAnalysis}
              fieldProps={{
                filterOption: () => {
                  return true
                }
              }}
              placeholder="请下拉选择归因分析"
              rules={[
                {
                  required: true,
                  message: '请下拉选择归因分析！',
                },
              ]}
              options={guiyinfenxiformxlk}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormTextArea
              width={800}
              name="eventDesc"
              label="事件描述"
              disabled={true}
              initialValue={xiangqingeventDesc}
              placeholder="事件描述内容"
              rules={[
                {
                  required: true,
                  message: '事件描述内容！',
                },
              ]}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormTextArea
              width={800}
              disabled={true}
              initialValue={xiangqingeventSolutionDesc}
              name="eventSolutionDesc"
              label="事件处置结果描述"
              placeholder="事件处置结果描述"
              rules={[
                {
                  required: true,
                  message: '事件处置结果描述！',
                },
              ]}
            />
          </ProForm.Group>
        </ProForm.Group>
        <ProForm.Group
          title={"涉事民警"}
        >
          <ProTable
            // headerTitle="关联民警"
            scroll={{x: 1200,}}
            options={false}
            search={false}
            columnEmptyText={false}
            pagination={false}
            dataSource={sheshiminjingxiangqingdetaildata}
            columns={sheshiminjingwucaozuocolumns}
          />
        </ProForm.Group>
        <ProForm.Group
          title={"事件标签"}
        >
          <ProTable
            // headerTitle="涉及人员"
            scroll={{x: 800,}}
            options={false}
            search={false}
            columnEmptyText={false}
            pagination={false}
            dataSource={shijianbiaoqianxiangqingdetaildata}
            columns={shijianbiaoqiancolumns}
          />
        </ProForm.Group>

        <ProForm.Group
          title={"审核日志（日期倒序排列）"}
        >
          <ProTable
            // headerTitle="涉及人员"
            scroll={{x: 800,}}
            options={false}
            search={false}
            columnEmptyText={false}
            pagination={false}
            dataSource={shenherizhixiangqingdetaildata}
            columns={shenherizhicolums}
          />
        </ProForm.Group>

      </DrawerForm>

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
