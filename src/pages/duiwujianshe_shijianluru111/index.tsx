// import {PlusOutlined} from '@ant-design/icons';
import type {UploadProps} from 'antd';
import {message, Drawer, Button, Upload,} from 'antd';
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
  shenherizhiinformationrule,
  sheshiminjinginformationrule,
  tijiaoshenpiinformationRule,
  shijianluruxialakuanginformationrule,
  shijianbiaoqianinformationrule, chaxuninformationrule
} from './service';
import {PlusOutlined} from '@ant-design/icons';
import type {TableListItem, TableListPagination} from './data';
import {formatRowErrorMessages} from '@/utils/businessError';
// import moment from 'moment';
//@ts-ignore
import {request} from 'umi';
import {
  EditableProTable, ProFormCascader,
  ProFormDateTimePicker, ProFormGroup, ProFormInstance, EditableFormInstance
} from '@ant-design/pro-components';
import {
  ModalForm,
  ProForm, ProFormSelect,
  ProFormTextArea,
  ProFormText,
  DrawerForm,
  ProFormDatePicker,
} from '@ant-design/pro-components';
import type {
  shenherizhiTableListItem,
  sheshiminjingTableListItem,
  shijianbiaoqianTableListItem,
  chaxunjieguoTableListItem
} from "./data";
import moment, {Moment} from "moment";
// import {currentUser} from "@/services/ant-design-pro/api";
//@ts-ignore
import {useModel} from "@@/plugin-model/useModel";
// import {flushSync} from "react-dom";
// import ProCard from "@ant-design/pro-card";
// import {Placement} from "rc-drawer/lib/Drawer";

import ProCard from "@ant-design/pro-card";
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

  //删除
  const [shanchuModalVisible, setShanchuModalVisible] = useState<boolean>(false);
  const [shanchuuuid, setShanchuuuid] = useState<string>();

  //事件导入
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  const [chaxunModalVisible, setChaxunModalVisible] = useState<boolean>(false);
  const [complainantStaffPhoneNumifdisable, setComplainantStaffPhoneNumifdisable] = useState<boolean>(false);
  const [position, setPosition] = useState<'bottom' | 'hidden'>('bottom');
  const [chaxunvalue, setChaxunvalue] = useState<string>();
  const [chaxundetaildata, setChaxunDetaildata] = useState<any>();
  const [chaxunminjingdetaildata, setChaxunminjingDetaildata] = useState<any>();
  const [chaxunfujingdetaildata, setChaxunfujingDetaildata] = useState<any>();
  const [chaxunalldata, setChaxunalldata] = useState<any>([]);
  const [selectedRowsState, setSelectedRows] = useState<chaxunjieguoTableListItem[]>([]);
  const [guanlianminjingsfzreadonly, setGuanlianminjingsfzreadonly] = useState<boolean>(false);
  const [guanlianminjingxmreadonly, setGuanlianminjingxmreadonly] = useState<boolean>(false);
  const [guanlianminjingjhreadonly, setGuanlianminjingjhreadonly] = useState<boolean>(false);
  // const [daorusheshiminjingdetaildata, setDaorusheshiminjingdetaildata] = useState<any>();
  // const [inputValue, setInputValue] = React.useState('');

  const handleChange = (value: string) => {
    if (/.{2,}/.test(value)) {
      setChaxunvalue(value)
      setChaxunModalVisible(true);
    } else {
      alert('请输入姓名、民警警号或辅警工号进行检索。\n' +
        '注意一：民警警号及辅警工号需精确输入，不支持模糊检索。\n' +
        '注意二：如需检索多个人员，请使用‘;’分隔，同一时刻允许姓名或民警警号或辅警工号进行混合检索')
    }
  };
  useEffect(() => {
    chaxuninformationrule({value: chaxunvalue}).then(res => {
        // @ts-ignore
        setChaxunDetaildata(res.chaxundata)
        // @ts-ignore
        setChaxunalldata(res.chaxundata)
        // @ts-ignore
        setChaxunminjingDetaildata(res.chaxunminjingdata)
      // @ts-ignore
        setChaxunfujingDetaildata(res.chaxunfujingdata)


      }
    )
  }, [chaxunvalue]);
  // useEffect(() => {
  //   // @ts-ignore
  //   const newmj = chaxunalldata.filter(chaxunmjdata => chaxunmjdata.staffPeopleType === '民警');
  //   setChaxunminjingDetaildata(newmj)
  //   // @ts-ignore
  //   const newfj = chaxunalldata.filter(chaxunfjdata => chaxunfjdata.staffPeopleType === '辅警');
  //   setChaxunfujingDetaildata(newfj)
  //
  // }, [chaxunalldata]);
  //
  // useEffect(() => {
  //   console.log(chaxunminjingdetaildata)
  //
  // }, [chaxunminjingdetaildata]);
  //
  // useEffect(() => {
  //   console.log(chaxunfujingdetaildata)
  //
  // }, [chaxunminjingdetaildata]);


  // const [daorubutton, setDaorubutton] = useState<boolean>(false);

  //编辑事件
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const [bianjishijianuuid, setBianjishijianguuid] = useState<string>();
  const [shenherizhidetaildata, setShenherizhiDetaildata] = useState<any>();
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [editableKeys2, setEditableRowKeys2] = useState<React.Key[]>([]);
  const [sheshiminjingdetaildata, setSheshiminjingDetaildata] = useState<sheshiminjingTableListItem[]>([]);
  const editorFormRef = useRef<EditableFormInstance<sheshiminjingTableListItem>>();
  const [sheshiminjingxiangqingdetaildata, setSheshiminjingxiangqingDetaildata] = useState<sheshiminjingTableListItem[]>([]);
  const [yewuchangjingdetaildata, setYewuchangjingDetaildata] = useState<shijianbiaoqianTableListItem[]>([]);
  const [wentileixingdetaildata, setWentileixingDetaildata] = useState<shijianbiaoqianTableListItem[]>([]);
  const [shijianbiaoqianxiangqingdetaildata, setShijianbiaoqianxiangqingDetaildata] = useState<shijianbiaoqianTableListItem[]>([]);
  const [bianjicomplainantStaffName, setBianjicomplainantStaffName] = useState<string>();
  const [bianjicomplainantStaffNationality, setBianjicomplainantStaffNationality] = useState<string>();
  const [bianjicomplainantStaffIdType, setBianjicomplainantStaffIdType] = useState<string>();
  const [bianjicomplainantStaffId, setBianjicomplainantStaffId] = useState<string>();
  const [bianjicomplainantStaffPhoneNum, setBianjicomplainantStaffPhoneNum] = useState<string>();
  const [bianjieventSolutionTime, setBianjieventSolutionTime] = useState<string>();
  const [bianjieventChannelDesc, setBianjieventChannelDesc] = useState<string>();
  const [bianjieventCreateTime, setBianjieventCreateTime] = useState<string>();
  const [bianjieventCatelogDesc, setBianjieventCatelogDesc] = useState<string>();
  const [bianjieventPoliceCategory, setBianjieventPoliceCategory] = useState<string>();
  const [bianjieventAttributionAnalysis, setBianjieventAttributionAnalysis] = useState<string>();
  const [bianjieventDesc, setBianjieventDesc] = useState<string>();
  const [bianjieventSolutionDesc, setBianjieventSolutionDesc] = useState<string>();
  const [bianjieventRectificationMeasures, setBianjieventRectificationMeasures] = useState<string>();
  const [bianjieventSectionChiefName, setBianjieventSectionChiefName] = useState<string>();
  const [bianjieventSectionChiefPoliceid, setBianjieventSectionChiefPoliceid] = useState<string>();
  const [bianjieventSupervisingLeaderName, setBianjieventSupervisingLeaderName] = useState<string>();
  const [bianjieventSupervisingLeaderPoliceid, setBianjieventSupervisingLeaderPoliceid] = useState<string>();

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
  const [xiangqingeventRectificationMeasures, setXiangqingeventRectificationMeasures] = useState<string>();
  const [xiangqingeventSectionChiefName, setXiangqingeventSectionChiefName] = useState<string>();
  const [xiangqingeventSectionChiefPoliceid, setXiangqingeventSectionChiefPoliceid] = useState<string>();
  const [xiangqingeventSupervisingLeaderName, setXiangqingeventSupervisingLeaderName] = useState<string>();
  const [xiangqingeventSupervisingLeaderPoliceid, setXiangqingeventSupervisingLeaderPoliceid] = useState<string>();

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
  const [guiyinfenxitablexlk, setGuiyinfenxitablexlk] = useState([]);
  const [shijianguanlianjingzhongformxlk, setShijianguanlianjingzhongformxlk] = useState([]);
  const [guiyinfenxiformxlk, setGuiyinfenxiformxlk] = useState([]);
  const [guanlianminjingdanweitablexlk, setGuanlianminjingdanweitablexlk] = useState({});
  const [guanlianminjingchulijieguotablexlk, setGuanlianminjingchulijieguotablexlk] = useState({});

  const [guanlianrenyuanleixingtablexlk, setGuanlianrenyuanleixingtablexlk] = useState({});
  const [guanlianrenyuanleixingfromxlk, setGuanlianrenyuanleixingfromxlk] = useState([]);
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
  if (changeEventSolutiontime) {
    if (changeEventCreatetime) {
      if (changeEventCreatetime > changeEventSolutiontime) {
        message.error('事件发生日期需要小于事件办结日期')

      }
    }
  }

  const changeEventCatelogDesc = (value: any) => {
    // console.log(value[1])
    if (value[1]) {
      if (value[1] === 8) {
        setComplainantStaffPhoneNumifdisable(true)
      } else if (value[1] === 9) {
        setComplainantStaffPhoneNumifdisable(true)
      } else if (value[1] === 10) {
        setComplainantStaffPhoneNumifdisable(true)
      } else if (value[1] === 11) {
        setComplainantStaffPhoneNumifdisable(true)
      } else {
        setComplainantStaffPhoneNumifdisable(false)
      }
    }
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
        setGuanlianminjingdanweitablexlk(res.glmjdwcreatetablexlk)
        // @ts-ignore
        setGuanlianminjingchulijieguotablexlk(res.glmjcljgcreatetablexlk)
        // @ts-ignore
        setGuanlianrenyuanleixingtablexlk(res.glrylxtablexlk)
        // @ts-ignore
        setGuanlianrenyuanleixingfromxlk(res.glrylxformxlk)

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
  // const chaxunneirong = async (fields: Record<string, any>) => {
  //   setDaorusheshiminjingdetaildata(fields)
  //   console.log(daorusheshiminjingdetaildata)
  // };


  /**
   * 删除节点
   *
   * @param selectedRows
   */

  const handleRemove = async () => {
    const hide = message.loading('正在删除');

    try {
      await removeRule({
        uuid: shanchuuuid
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


  const handleAdd = async (fields: TableListItem) => {
    const hide = message.loading('正在添加');
    setGuanlianminjingsfzreadonly(false)
    setGuanlianminjingxmreadonly(false)
    setGuanlianminjingjhreadonly(false)

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


  //查询中的下拉

  const [changexialavalue,setChangexialavalue]=useState<string>()
  useEffect(()=>{
    if (changexialavalue === '全部') {
      setChaxunDetaildata(chaxunalldata)
    } else if (changexialavalue === '民警') {
      setChaxunDetaildata(chaxunminjingdetaildata)
    } else if (changexialavalue === '辅警') {
      setChaxunDetaildata(chaxunfujingdetaildata)
    }
    console.log('all:'+chaxunalldata,'民警:'+chaxunminjingdetaildata,'辅警:'+chaxunfujingdetaildata)
  },([changexialavalue]))


  // const changeStandardtariff = (value: string) => {
  //   console.log('all:'+chaxunalldata,'民警:'+chaxunminjingdetaildata,'辅警:'+chaxunfujingdetaildata)
  //   if (value === '全部') {
  //     setChaxunDetaildata(chaxunalldata)
  //   } else if (value === '民警') {
  //     setChaxunDetaildata(chaxunminjingdetaildata)
  //   } else if (value === '辅警') {
  //     setChaxunDetaildata(chaxunfujingdetaildata)
  //   }
  // }

  /** 分布更新窗口的弹窗 */
    // const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();
  const [filename, setFilename] = useState<string>()
  //获得登录数据
  const {initialState} = useModel('@@initialState');
  // @ts-ignore
  const {currentUser} = initialState;
  const props: UploadProps = {
    name: 'file',
    headers: {'Authorization': localStorage.getItem('setAuthorization') as string},
    action: `/duiwujianshe/api/shijianluruupload?name=${filename}}`,
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
      width: 100,
      ellipsis: true,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '发生日期范围',
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
      title: '录入日期范围',
      dataIndex: 'eventEnterTime',
      key: 'eventEnterTime',
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
            eventEnterTimeStartTime: value[0],
            eventEnterTimeEndTime: value[1],
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
      title: '收集部门',
      dataIndex: 'eventInsertDepartment',
      search: false,
      width: 150,
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
    // {
    //   title: '归因分析*',
    //   dataIndex: 'eventAttributionAnalysis',
    //   // search: false,
    //   valueType: 'select',
    //   align: 'center',
    //   initialValue: '全部',
    //   hideInTable: true,
    //   valueEnum: guiyinfenxitablexlk,
    // },
    {
      title: '归因分析',
      dataIndex: 'eventAttributionAnalysisTableShow',
      width: 150,
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '归因分析',
      hideInTable: true,
      dataIndex: 'eventAttributionAnalysis',
      width: 100,
      initialValue: '全部',
      // request: async () => cascaderOptions,
      fieldProps: {
        options: guiyinfenxitablexlk,
        fieldNames: {
          children: 'children',
          label: 'label',
        },
        showSearch: true,
        filterTreeNode: true,
        multiple: false,
        treeNodeFilterProp: 'label',
      },
      valueType: 'treeSelect',
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
            if (record.eventCatelogDesc === '12345') {
              setComplainantStaffPhoneNumifdisable(true)
            } else if (record.eventCatelogDesc === '12337') {
              setComplainantStaffPhoneNumifdisable(true)
            } else if (record.eventCatelogDesc === '12377') {
              setComplainantStaffPhoneNumifdisable(true)
            } else if (record.eventCatelogDesc === '信访') {
              setComplainantStaffPhoneNumifdisable(true)
            } else {
              setComplainantStaffPhoneNumifdisable(false)
            }
            setBianjieventPoliceCategory(record.eventPoliceCategory)
            setBianjieventAttributionAnalysis(record.eventAttributionAnalysis)
            setBianjieventDesc(record.eventDesc)
            setBianjieventSolutionDesc(record.eventSolutionDesc)
            setBianjieventRectificationMeasures(record.eventRectificationMeasures)
            setBianjieventSectionChiefName(record.eventSectionChiefName)
            setBianjieventSectionChiefPoliceid(record.eventSectionChiefPoliceid)
            setBianjieventSupervisingLeaderName(record.eventSupervisingLeaderName)
            setBianjieventSupervisingLeaderPoliceid(record.eventSupervisingLeaderPoliceid)
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
            setXiangqingeventRectificationMeasures(record.eventRectificationMeasures)
            setXiangqingeventSectionChiefName(record.eventSectionChiefName)
            setXiangqingeventSectionChiefPoliceid(record.eventSectionChiefPoliceid)
            setXiangqingeventSupervisingLeaderName(record.eventSupervisingLeaderName)
            setXiangqingeventSupervisingLeaderPoliceid(record.eventSupervisingLeaderPoliceid)
            setBianjibutton(true)
            setShanchubutton(true)
          }}
        >
          详情
        </Button>,
        <Button
          type={"primary"}
          disabled={record.shanchubutton}
          // key="config"
          onClick={() => {
            setShanchuModalVisible(true)
            setShanchuuuid(record.uuid)
          }}
        >
          删除
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
      title: '关联人员身份证号码',
      dataIndex: 'policeId',
      readonly: guanlianminjingsfzreadonly,
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },

    {
      title: '关联人员姓名',
      dataIndex: 'policeName',
      readonly: guanlianminjingxmreadonly,
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联人员警号',
      dataIndex: 'staffPoliceid',
      readonly: guanlianminjingjhreadonly,
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联人员单位',
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
      width: 200,
    },
    {
      title: '关联人员类型',
      dataIndex: 'staffPeopleType',
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: false,
      valueEnum: guanlianrenyuanleixingtablexlk,
      width: 200,
    },
    {
      title: '关联人员处理结果描述',
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
      width: 200,
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
      width: 200,
      valueEnum: {
        0: {text: '有责需问责'},
        3: {text: '有责需追责'},
        2: {text: '需改进'},
        1: {text: '无责'},
      },
    },
    {
      title: '关联人员处理结果',
      dataIndex: 'staffPoliceProcessResult',
      search: false,
      valueType: 'treeSelect',
      width: 300,
      align: 'center',
      hideInTable: false,
      fieldProps: {
        options: guanlianminjingchulijieguotablexlk,
        fieldNames: {
          children: 'language',
          label: 'field',
        },
        showSearch: true,
        filterTreeNode: true,
        multiple: true,
        treeNodeFilterProp: 'field',
      },
    },
    {
      title: '关联人员对应二级科领导姓名',
      dataIndex: 'staffSectionChiefName',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联人员对应二级科领导警号',
      dataIndex: 'staffSectionChiefPoliceid',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联人员对应本单位分管领导姓名',
      dataIndex: 'staffSupervisingLeaderName',
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联人员对应本单位分管领导警号',
      dataIndex: 'staffSupervisingLeaderPoliceid',
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联警辅对应带辅民警姓名',
      dataIndex: 'staffSupervisingOfficerName',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联警辅对应带辅民警警号',
      dataIndex: 'staffSupervisingOfficerPoliceid',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      align: 'center',
      width: 200,
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
          key="delete1"
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
  const createsheshiminjingcolumns: ProColumns<sheshiminjingTableListItem>[] = [

    {
      title: 'id',
      dataIndex: 'id',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: true,
    },
    {
      title: '关联人员身份证号码',
      dataIndex: 'policeId',
      readonly: guanlianminjingsfzreadonly,
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },

    {
      title: '关联人员姓名',
      dataIndex: 'policeName',
      readonly: guanlianminjingxmreadonly,
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联人员警号',
      dataIndex: 'staffPoliceid',
      readonly: guanlianminjingjhreadonly,
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联人员单位',
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
      width: 200,
    },
    {
      title: '关联人员类型',
      dataIndex: 'staffPeopleType',
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: false,
      valueEnum: guanlianrenyuanleixingtablexlk,
      width: 200,
    },
    {
      title: '关联人员处理结果描述',
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
      width: 200,
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
      width: 200,
      valueEnum: {
        0: {text: '有责需问责'},
        3: {text: '有责需追责'},
        2: {text: '需改进'},
        1: {text: '无责'},
      },
    },
    {
      title: '关联人员处理结果',
      dataIndex: 'staffPoliceProcessResult',
      search: false,
      valueType: 'treeSelect',
      width: 300,
      align: 'center',
      hideInTable: false,
      fieldProps: {
        options: guanlianminjingchulijieguotablexlk,
        fieldNames: {
          children: 'language',
          label: 'field',
        },
        showSearch: true,
        filterTreeNode: true,
        multiple: true,
        treeNodeFilterProp: 'field',
      },
    },
    {
      title: '关联人员对应二级科领导姓名',
      dataIndex: 'staffSectionChiefName',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联人员对应二级科领导警号',
      dataIndex: 'staffSectionChiefPoliceid',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联人员对应本单位分管领导姓名',
      dataIndex: 'staffSupervisingLeaderName',
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联人员对应本单位分管领导警号',
      dataIndex: 'staffSupervisingLeaderPoliceid',
      formItemProps: () => {
        return {
          rules: [{required: true, message: '此项为必填项'}],
        };
      },
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联警辅对应带辅民警姓名',
      dataIndex: 'staffSupervisingOfficerName',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '关联警辅对应带辅民警警号',
      dataIndex: 'staffSupervisingOfficerPoliceid',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      width: 200,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      align: 'center',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable12"
          type={"primary"}
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="delete12"
          onClick={() => {
            const tableDataSource = formRef.current?.getFieldValue(
              'createtable',
            ) as sheshiminjingTableListItem[];
            formRef.current?.setFieldsValue({
              createtable: tableDataSource.filter((item) => item.id !== record.id),
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
      title: '关联人员身份证号码',
      dataIndex: 'policeId',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联人员姓名',
      dataIndex: 'policeName',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联人员警号',
      dataIndex: 'staffPoliceid',
      search: false,
      // valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联人员单位',
      dataIndex: 'staffPoliceUnit',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联人员类型',
      dataIndex: 'staffPeopleType',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联人员处理结果描述',
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
      title: '关联人员处理结果',
      dataIndex: 'staffPoliceProcessResult',
      search: false,
      valueType: 'textarea',
      align: 'center',
      width: 300,
      hideInTable: false,
    },
    {
      title: '关联人员对应二级科领导姓名',
      dataIndex: 'staffSectionChiefName',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联人员对应二级科领导警号',
      dataIndex: 'staffSectionChiefPoliceid',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联人员对应本单位分管领导姓名',
      dataIndex: 'staffSupervisingLeaderName',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联人员对应本单位分管领导警号',
      dataIndex: 'staffSupervisingLeaderPoliceid',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联警辅对应带辅民警姓名',
      dataIndex: 'staffSupervisingOfficerName',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联警辅对应带辅民警警号',
      dataIndex: 'staffSupervisingOfficerPoliceid',
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
  const chaxunjieguocolumns: ProColumns<chaxunjieguoTableListItem>[] = [

    {
      title: 'id',
      dataIndex: 'id',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: true,
    },
    {
      title: '关联人员身份证号码',
      dataIndex: 'policeId',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: true,
    },
    {
      title: '关联人员姓名',
      dataIndex: 'policeName',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联人员警号',
      dataIndex: 'staffPoliceid',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联人员单位',
      dataIndex: 'staffPoliceUnit',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '关联人员类型',
      dataIndex: 'staffPeopleType',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
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
            // console.log(record.id)
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


  // @ts-ignore
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
                setComplainantStaffPhoneNumifdisable(false)
                setPosition("bottom")
              }}
            >
              导入
            </Button>,
            <Upload{...props}>
              <Button type="primary" disabled={currentUser.ifpiliangdaoru} icon={<PlusOutlined/>}>批量导入</Button>
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
        title="确认删除"
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
                删除
              </Button>,
            ];
          },
        }}
        visible={shanchuModalVisible}
        onVisibleChange={setShanchuModalVisible}
        onFinish={async () => {
          setShanchuModalVisible(false)
          const success = await handleRemove();
          if (success) {
            setShanchuModalVisible(false)
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        是否确认删除
      </ModalForm>


      <ModalForm
        formRef={formRef}

        // initialValues={{
        //   createtable: daorusheshiminjingdetaildata,
        // }}
        // onInit={}
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
          setGuanlianminjingsfzreadonly(false)
          setGuanlianminjingxmreadonly(false)
          setGuanlianminjingjhreadonly(false)
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
              label="投诉人电话号码(11位)"
              width="md"
              extra={'若事件业务来源为12345、12337、12377或信访，请填写投诉人电话号码(11位)'}
              name="complainantStaffPhoneNum"
              // disabled={complainantStaffPhoneNumifdisable}
              // initialValue={bianjicomplainantStaffPhoneNum}
              placeholder="请录入投诉人电话号码(11位)"
              rules={[
                {
                  required: complainantStaffPhoneNumifdisable,
                  message: '请录入投诉人电话号码(11位)！',
                },
              ]}
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
              fieldProps={{onChange: (value: any) => changeEventCatelogDesc(value),}}
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
              label="事件发生日期"
              width="md"
              name="eventCreateTime"
              // initialValue={bianjieventCreateTime}
              fieldProps={{onChange: (value) => changeEventCreateTime(value),}}
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件发生日期！',
                },
              ]}
              // disabled={true}
              // initialValue={bianjitsrxm}
              placeholder="请下拉选择事件发生日期"
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
            <ProFormCascader
              width="md"
              rules={[
                {
                  required: true,
                  message: '请下拉选择归因分析！',
                },
              ]}
              request={async () => guiyinfenxiformxlk}
              name="eventAttributionAnalysis"
              placeholder="请下拉选择归因分析"
              label="归因分析"
              // initialValue={[' ', ' ', ' ']}
              // addonAfter={'qixian'}
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
                  min: 4,
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
              placeholder="请输入事件处置结果描述"
              rules={[
                {
                  required: true,
                  message: '请输入事件处置结果描述！',
                },
              ]}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormTextArea
              width={800}
              // initialValue={bianjieventSolutionDesc}
              name="eventRectificationMeasures"
              label="整改措施"
              placeholder="请输入整改措施"
              rules={[
                {
                  required: true,
                  message: '请输入整改措施！',
                },
              ]}
            />
          </ProForm.Group>
        </ProForm.Group>
        <ProForm.Group
          title={"事件所属二级科领导"}
        >

            <ProFormText
              label="姓名"
              width="md"
              name="eventSectionChiefName"
              // disabled={true}
              // initialValue={bianjicomplainantStaffName}
              placeholder="请录入姓名"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入投诉人姓名！',
              //   },
              // ]}
            />
            <ProFormText
              label="警号"
              width="md"
              name="eventSectionChiefPoliceid"
              // disabled={true}
              // initialValue={bianjicomplainantStaffId}
              placeholder="请录入警号"
              // rules={[
              //   {
              //     required: true,
              //     message: '请录入投诉人证件号码！',
              //   },
              // ]}
            />
        </ProForm.Group>
        <ProForm.Group
          title={"事件所属单位分管领导"}
        >

          <ProFormText
            label="姓名"
            width="md"
            name="eventSupervisingLeaderName"
            // disabled={true}
            // initialValue={bianjicomplainantStaffName}
            placeholder="请录入姓名"
            rules={[
              {
                required: true,
                message: '请录入姓名！',
              },
            ]}
          />
          <ProFormText
            label="警号"
            width="md"
            name="eventSupervisingLeaderPoliceid"
            // disabled={true}
            // initialValue={bianjicomplainantStaffId}
            placeholder="请录入警号"
            rules={[
              {
                required: true,
                message: '请录入警号！',
              },
            ]}
          />
        </ProForm.Group>
        <EditableProTable<sheshiminjingTableListItem>
          rowKey="id"
          scroll={{
            x: 1500,
          }}
          // request={()=>{
          //   return [
          //       {
          //     id: '12',
          //     staffPoliceid: '321321',
          //     policeName: '三张',
          //     staffPoliceUnit: '嘉城所',
          //     policeId: '310114177777777777',
          //   },
          //   {
          //     id: '22',
          //     staffPoliceid: '321323',
          //     policeName: '四李',
          //     staffPoliceUnit: '南翔所',
          //     policeId: '310114166666666666',
          //   },
          //   ]
          // }}
          // dataSource={daorusheshiminjingdetaildata}
          // value={daorusheshiminjingdetaildata}
          editableFormRef={editorFormRef}
          // headerTitle="关联人员"
          formItemProps={{
            label: '关联人员（关联人员至少一人）',
          }}
          maxLength={3000}
          name="createtable"
          // fieldProps={{
          //     value: hidden,
          //     // onChange: (e) => setPosition(e.target.value),
          //   }}
          // dataSource={daorusheshiminjingdetaildata}
          // controlled={controlled}
          // formRef={ref}
          //@ts-ignore
          recordCreatorProps={
            position !== 'hidden'
              ? {
                creatorButtonText: '添加',
                //@ts-ignore
                record: () => ({id: (Math.random() * 1000000).toFixed(0)}),
              }
              : false
          }
          toolbar={{
            // style: {float: "left"},
            search: {
              onSearch: (value: string) => {
                handleChange(value)
              },
            },
            actions: [
              <Button
                type="primary"
                key="buming"
                onClick={() => {
                  setGuanlianminjingsfzreadonly(true)
                  setGuanlianminjingxmreadonly(true)
                  setGuanlianminjingjhreadonly(true)
                  setPosition("hidden")
                  // actionRef?.current?.addEditRecord({
                  //   record:'sssss',
                  //   id: '1',
                  //   title: '新的一行'
                  // })
                  // actionRef?.current?.addEditRecord({
                  //   createtable: [
                  //     {
                  //       id: '1',
                  //       staffPoliceid: '不明',
                  //       policeName: '不明',
                  //       policeId: '不明',
                  //     },
                  //   ]
                  // });
                  setEditableRowKeys2(() => ['1'])
                  formRef?.current?.setFieldsValue({
                    createtable: [
                      {
                        id: '1',
                        staffPoliceid: '不明',
                        policeName: '不明',
                        policeId: '不明',
                      },
                    ]
                  });
                }}
              >
                不明
              </Button>,
              <Button
                type="primary"
                onClick={() => {
                  setGuanlianminjingsfzreadonly(false)
                  setGuanlianminjingxmreadonly(false)
                  setGuanlianminjingjhreadonly(false)
                  setPosition("bottom")
                  setEditableRowKeys2(() => ['new'])
                  formRef?.current?.setFieldsValue({
                    createtable: [
                      {
                        id: 'new',
                      },
                    ]
                  });
                }}
              >
                重置
              </Button>,
            ],
          }}
          columns={createsheshiminjingcolumns}
          editable={{
            type: 'multiple',
            editableKeys: editableKeys2,
            onChange: setEditableRowKeys2,
            cancelText: ' ',
          }}
        />

        <ProForm.Group
          title={"事件标签"}
        >
          <ProFormGroup key="group1">
            <ProFormCascader
              width="md"
              rules={[
                {
                  required: true,
                  message: '请选择业务场景！',
                },
              ]}
              request={async () => yewuchangjingfromxlk}
              name="yewuchangjing"
              label="业务场景"
              // initialValue={[' ', ' ', ' ']}
              // addonAfter={'qixian'}
            />
          </ProFormGroup>
          <ProFormGroup key="group2">
            <ProFormCascader
              width="md"
              rules={[
                {
                  required: true,
                  message: '请选择问题类型！',
                },
              ]}
              request={async () => wentileixingfromxlk}
              name="wentileixing"
              label="问题类型"
              // initialValue={[' ', ' ', ' ']}
              // addonAfter={'qixian'}
            />
          </ProFormGroup>
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
        title="查询结果"
        width="600px"
        layout={'horizontal'}
        modalProps={{destroyOnClose: true, maskClosable: false}}
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
          render: (props) => {
            return [
              // ...dom,
              <Button
                // key="sumbit"
                // type={"primary"}
                // disabled={guidangqr}
                onClick={() => {
                  props.reset();
                  setChaxunModalVisible(false)
                  setChaxunvalue('')
                  setChaxunDetaildata([])
                  setChaxunminjingDetaildata([])
                  setChaxunfujingDetaildata([])
                  setChaxunalldata([])
                  // setEditableRowKeys2(selectedRows.id)
                  // setPinggubcortl('bc')
                }}
              >
                关闭
              </Button>,
              <Button
                // key="sumbit"
                type={"primary"}
                // disabled={guidangqr}
                onClick={() => {
                  props.submit();
                  setGuanlianminjingsfzreadonly(false)
                  setGuanlianminjingxmreadonly(false)
                  setGuanlianminjingjhreadonly(false)
                  setChaxunvalue('')
                  setChaxunDetaildata([])
                  setChaxunminjingDetaildata([])
                  setChaxunfujingDetaildata([])
                  setChaxunalldata([])
                  // setEditableRowKeys2(selectedRows.id)
                  // setPinggubcortl('bc')
                }}
              >
                确认
              </Button>,
            ];
          },
        }}
        visible={chaxunModalVisible}
        onVisibleChange={setChaxunModalVisible}
        onFinish={async () => {
          // setDaorusheshiminjingdetaildata(chaxundetaildata)
          setChaxunModalVisible(false)
          // console.log(selectedRowsState)
          // setDaorusheshiminjingdetaildata(selectedRowsState)
          // actionRef.current?.reloadAndRest?.();
          if (selectedRowsState) {
            // actionRef?.current?.addEditRecord({createtable: selectedRowsState})
            // console.log(selectedRowsState)
            formRef?.current?.setFieldsValue({createtable: selectedRowsState});
            // actionRef?.current?.

            setTimeout(() => {
              setEditableRowKeys2(() => selectedRowsState.map(v => v.id))
              // console.log(selectedRowsState.map(v => v.id), editableKeys2)
            }, 0)
          } else if (!selectedRowsState) {
            formRef?.current?.resetFields()
          }
          // const success = await chaxunneirong(value as chaxunjieguoTableListItem);
          // setChaxunModalVisible(false)
        }}
      >
        <ProTable
          // headerTitle="关联人员"
          scroll={{x: 400,}}
          options={false}
          search={false}
          toolBarRender={() => [
            <ProFormSelect
              label={'关联人员类型'}
              width={150}
              style={{marginRight: 100}}
              initialValue={'全部'}
              fieldProps={{onChange: (value) => setChangexialavalue(value),}}
              options={guanlianrenyuanleixingfromxlk}
            />,
            <ProCard style={{width: 240}}></ProCard>

          ]}
          rowKey="id"
          columnEmptyText={false}
          pagination={false}
          dataSource={chaxundetaildata}
          columns={chaxunjieguocolumns}
          rowSelection={{
            onChange: (_, selectedRows) => {
              setSelectedRows(selectedRows);
            },
          }}
        />

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
              label="投诉人电话号码(11位)"
              width="md"
              name="complainantStaffPhoneNum"
              // disabled={true}
              extra={'若事件业务来源为12345、12337、12377或信访，请填写投诉人电话号码(11位)'}
              initialValue={bianjicomplainantStaffPhoneNum}
              placeholder="请录入投诉人电话号码(11位)"
              rules={[
                {
                  required: complainantStaffPhoneNumifdisable,
                  message: '请录入投诉人电话号码(11位)！',
                },
              ]}
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
              fieldProps={{onChange: (value: any) => changeEventCatelogDesc(value),}}
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
              label="事件发生日期"
              width="md"
              name="eventCreateTime"
              initialValue={bianjieventCreateTime}
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件发生日期！',
                },
              ]}
              // disabled={true}
              // initialValue={bianjitsrxm}
              placeholder="请下拉选择事件发生日期"
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
            <ProFormCascader
              width="md"
              rules={[
                {
                  required: true,
                  message: '请下拉选择归因分析！',
                },
              ]}
              request={async () => guiyinfenxiformxlk}
              name="eventAttributionAnalysis"
              placeholder="请下拉选择归因分析"
              initialValue={bianjieventAttributionAnalysis}
              label="归因分析"
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
                  min: 4,
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
          <ProForm.Group>
            <ProFormTextArea
              width={800}
              initialValue={bianjieventRectificationMeasures}
              name="eventRectificationMeasures"
              label="整改措施"
              placeholder="请输入整改措施"
              rules={[
                {
                  required: true,
                  message: '请输入整改措施！',
                },
              ]}
            />
          </ProForm.Group>
        </ProForm.Group>
        <ProForm.Group
          title={"事件所属二级科领导"}
        >
          <ProFormText
            label="姓名"
            width="md"
            name="eventSectionChiefName"
            // disabled={true}
            initialValue={bianjieventSectionChiefName}
            placeholder="请录入姓名"
            // rules={[
            //   {
            //     required: true,
            //     message: '请录入投诉人姓名！',
            //   },
            // ]}
          />
          <ProFormText
            label="警号"
            width="md"
            name="eventSectionChiefPoliceid"
            // disabled={true}
            initialValue={bianjieventSectionChiefPoliceid}
            placeholder="请录入警号"
            // rules={[
            //   {
            //     required: true,
            //     message: '请录入投诉人证件号码！',
            //   },
            // ]}
          />
        </ProForm.Group>
        <ProForm.Group
          title={"事件所属单位分管领导"}
        >
          <ProFormText
            label="姓名"
            width="md"
            name="eventSupervisingLeaderName"
            // disabled={true}
            initialValue={bianjieventSupervisingLeaderName}
            placeholder="请录入姓名"
            rules={[
              {
                required: true,
                message: '请录入姓名！',
              },
            ]}
          />
          <ProFormText
            label="警号"
            width="md"
            name="eventSupervisingLeaderPoliceid"
            // disabled={true}
            initialValue={bianjieventSupervisingLeaderPoliceid}
            placeholder="请录入警号"
            rules={[
              {
                required: true,
                message: '请录入警号！',
              },
            ]}
          />
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
            x: 1500,
          }}
          editableFormRef={editorFormRef}
          formItemProps={{
            label: '关联人员（关联人员至少一人）',
          }}
          headerTitle="可编辑表格"
          maxLength={3000}
          name="table"
          // controlled={controlled}
          recordCreatorProps={
            {
              creatorButtonText: '添加',
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
          <ProFormGroup key="group3">
            <ProFormCascader
              width="md"
              allowClear
              initialValue={yewuchangjingdetaildata}
              rules={[
                {
                  required: true,
                  message: '请选择业务场景！',
                },
              ]}
              request={async () => yewuchangjingfromxlk}
              name="yewuchangjing"
              label="业务场景"
            />
          </ProFormGroup>
          <ProFormGroup key="group">
            <ProFormCascader
              width="md"
              allowClear
              initialValue={wentileixingdetaildata}
              rules={[
                {
                  required: true,
                  message: '请选择问题类型！',
                },
              ]}
              request={async () => wentileixingfromxlk}
              name="wentileixing"
              label="问题类型"
            />
          </ProFormGroup>
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
              label="事件发生日期"
              width="md"
              name="eventCreateTime"
              disabled={true}
              initialValue={xiangqingeventCreateTime}
              rules={[
                {
                  required: true,
                  message: '请下拉选择事件发生日期！',
                },
              ]}
              // disabled={true}
              // initialValue={xiangqingtsrxm}
              placeholder="请下拉选择事件发生日期"
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
            <ProFormCascader
              width="md"
              name="eventAttributionAnalysis"
              label="归因分析"
              disabled={true}
              initialValue={xiangqingeventAttributionAnalysis}
              placeholder="请下拉选择归因分析"
              rules={[
                {
                  required: true,
                  message: '请下拉选择归因分析！',
                },
              ]}
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
          <ProForm.Group>
            <ProFormTextArea
              width={800}
              disabled={true}
              initialValue={xiangqingeventRectificationMeasures}
              name="eventRectificationMeasures"
              label="整改措施"
              placeholder="请输入整改措施"
              rules={[
                {
                  required: true,
                  message: '请输入整改措施！',
                },
              ]}
            />
          </ProForm.Group>
        </ProForm.Group>
        <ProForm.Group
          title={"事件所属二级科领导"}
        >
          <ProFormText
            label="姓名"
            width="md"
            name="eventSectionChiefName"
            disabled={true}
            initialValue={xiangqingeventSectionChiefName}
            placeholder="请录入姓名"
            // rules={[
            //   {
            //     required: true,
            //     message: '请录入投诉人姓名！',
            //   },
            // ]}
          />
          <ProFormText
            label="警号"
            width="md"
            name="eventSectionChiefPoliceid"
            disabled={true}
            initialValue={xiangqingeventSectionChiefPoliceid}
            placeholder="请录入警号"
            // rules={[
            //   {
            //     required: true,
            //     message: '请录入投诉人证件号码！',
            //   },
            // ]}
          />
        </ProForm.Group>
        <ProForm.Group
          title={"事件所属单位分管领导"}
        >
          <ProFormText
            label="姓名"
            width="md"
            name="eventSupervisingLeaderName"
            disabled={true}
            initialValue={xiangqingeventSupervisingLeaderName}
            placeholder="请录入姓名"
            rules={[
              {
                required: true,
                message: '请录入姓名！',
              },
            ]}
          />
          <ProFormText
            label="警号"
            width="md"
            name="eventSupervisingLeaderPoliceid"
            disabled={true}
            initialValue={xiangqingeventSupervisingLeaderPoliceid}
            placeholder="请录入警号"
            rules={[
              {
                required: true,
                message: '请录入警号！',
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group
          title={"涉事民警"}
        >
          <ProTable
            // headerTitle="关联人员"
            scroll={{x: 3000,}}
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
        width={1500}
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
