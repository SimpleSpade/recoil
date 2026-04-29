// import {PlusOutlined} from '@ant-design/icons';
import {message, Drawer, Button} from 'antd';
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
  fankuiupdateinformationRule,

} from './service';
import type {TableListItem, TableListPagination} from './data';
import moment from 'moment';

import {
  ModalForm,
  ProForm, ProFormSelect,
  ProFormTextArea,
  // ProFormText,
  // ProFormCascader,
  // ProFormDatePicker,
  // ProFormRadio,

} from '@ant-design/pro-components';
import {shejirenyuanTableListItem} from "@/pages/duiwujianshejbtsgl/data";
import {shejirenyuaninformationrule} from "@/pages/duiwujianshejbtsgl/service";
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

// const handleAdd = async (fields: TableListItem) => {
//   const hide = message.loading('正在添加');
//
//   try {
//     await addinformationRule({...fields});
//     hide();
//     message.success('添加成功');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('添加失败请重试！');
//     return false;
//   }
// };
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
  const [fankuiModalVisible, setFankuiModalVisible] = useState<boolean>(false);
  const [chakanModalVisible, setChakanModalVisible] = useState<boolean>(false);


  const [fankuiuuid, setFankuiuuid] = useState<string>();
  const [fankuiwtlb, setFankuiwtlb] = useState<string>();
  const [fankuibllb, setFankuibllb] = useState<string>();
  const [fankuiwtms, setFankuiwtms] = useState<string>();
  const [fankuijtbx, setFankuijtbx] = useState<string>();
  const [fankuigzjy, setFankuigzjy] = useState<string>();
  const [fankuixzpd, setFankuixzpd] = useState<string>();
  const [fankuilsfankuipd, setFankuilsfankuipd] = useState<string>();
  const [chakanlschakanpd, setChakanlschakanpd] = useState<string>();
  const [fankuiyfwtyj, setFankuiyfwtyj] = useState<string>();
  const [fankuiyfwtej, setFankuiyfwtej] = useState<string>();
  // const [fankuilsqk, setFankuilsqk] = useState<string>();
  const [iffankuiqr, setIffankuiqr] = useState<boolean>();

  const [chakanuuid, setChakanuuid] = useState<string>();
  const [chakanwtlb, setChakanwtlb] = useState<string>();
  const [chakanbllb, setChakanbllb] = useState<string>();
  const [chakanwtms, setChakanwtms] = useState<string>();
  const [chakanxzpd, setChakanxzpd] = useState<string>();
  const [chakanyfwtyj, setChakanyfwtyj] = useState<string>();
  const [chakanyfwtej, setChakanyfwtej] = useState<string>();
  const [chakanjtbx, setChakanjtbx] = useState<string>();
  const [chakangzjy, setChakangzjy] = useState<string>();
  const [chakanlsqk, setChakanlsqk] = useState<string>();
  const [fankuidetaildata, setFankuiDetaildata] = useState<any>();
  const [chakandetaildata, setChakanDetaildata] = useState<any>();

  useEffect(() => {
    shejirenyuaninformationrule({uuid: fankuiuuid}).then(res => {

        // @ts-ignore
        setFankuiDetaildata(res.data)
        // @ts-ignore
        // setXlknetdata(res.xlk)
      }
    )
  }, [fankuiuuid]);

  useEffect(() => {
    shejirenyuaninformationrule({uuid: chakanuuid}).then(res => {

        // @ts-ignore
        setChakanDetaildata(res.data)
        // @ts-ignore
        // setXlknetdata(res.xlk)
      }
    )
  }, [chakanuuid]);





  /** 分布更新窗口的弹窗 */
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();
  // const [initialValues, setInitialValues] = useState<any>();
  /** 国际化配置 */
    // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
      const hide = message.loading('正在确认');

      try {
        await fankuiupdateinformationRule({
          ...currentRow,
          ...fields,
          uuid: fankuiuuid,
        });
        hide();
        message.success('确认成功');
        return true;
      } catch (error) {
        hide();
        message.error('确认失败请重试！');
        return false;
      }
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
      key: 'hiddenqd2',
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
        案件调差办理: {text: '案件调查处理'},
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
    // {
    //   title: '反馈时限',
    //   dataIndex: 'jzrq',
    //   key: 'hiddenjzrq',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    {
      title: '处理进度',
      dataIndex: 'cljd',
      key: 'hiddencljd',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
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
        落实整改中: {text: '落实整改中'},
        整改完成: {text: '整改完成'},
        已逾期: {text: '已逾期'},
      },
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
          disabled={record.iffankuidisabled}
          onClick={() => {
            setFankuiModalVisible(true)
            setFankuiuuid(record.uuid)
            setFankuiwtlb(record.wtlb)
            setFankuibllb(record.bllb)
            setFankuiwtms(record.wtms)
            setFankuixzpd(record.xzpd)
            setFankuilsfankuipd(record.lschakanpd)
            setFankuiyfwtyj(record.yfwtyj)
            setFankuiyfwtej(record.yfwtej)
            setFankuijtbx(record.jtbx)
            setFankuigzjy(record.gzjy)
            // setFankuilsqk(record.lsqk)
            setIffankuiqr(record.iffankuiqr)
          }}
        >
          反馈
        </Button>,
        <Button
          type={"primary"}
          key="config"
          disabled={record.ifchakandisabled}
          onClick={() => {
            setChakanModalVisible(true)
            setChakanuuid(record.uuid)
            setChakanwtlb(record.wtlb)
            setChakanbllb(record.bllb)
            setChakanwtms(record.wtms)
            setChakanxzpd(record.xzpd)
            setChakanyfwtyj(record.yfwtyj)
            setChakanyfwtej(record.yfwtej)
            setChakanlschakanpd(record.lschakanpd)
            setChakanjtbx(record.jtbx)
            setChakangzjy(record.gzjy)
            setChakanlsqk(record.lsqk)
          }}
        >
          查看
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
        title="整改落实反馈"
        width="1000px"
        modalProps={{destroyOnClose: true,maskClosable:false}}
        layout={'horizontal'}
        // initialValues={initialValues}
        submitter={{
          searchConfig: {
            submitText: '提交',
            resetText: '取消',
          },
          submitButtonProps: {
            disabled: iffankuiqr
          },
        }}
        labelAlign="right"
        style={{alignContent: "center", margin: 'auto'}}
        visible={fankuiModalVisible}
        onVisibleChange={setFankuiModalVisible}
        onFinish={async (value) => {
          setFankuiModalVisible(false)
          const success = await handleUpdate(value as TableListItem);
          if (success) {
            setFankuiModalVisible(false)
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
            name="wtlb"
            label="初步问题分类"
            disabled={true}
            initialValue={fankuiwtlb}
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
              {
                value: '空',
                label: '空',
              },
            ]}
          />
          <ProFormSelect
            width="sm"
            name="bllb"
            label="办理类别"
            disabled={true}
            initialValue={fankuibllb}
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
            initialValue={fankuiwtms}
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
            dataSource={fankuidetaildata}
            columns={tablecolums}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="md"
            name="xzpd"
            label="性质判定"
            initialValue={fankuixzpd}
            disabled={true}
            // initialValue={pinggudw}
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
            initialValue={fankuilsfankuipd}
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
            initialValue={fankuiyfwtyj}
            disabled={true}
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
            initialValue={fankuiyfwtej}
            disabled={true}
            // initialValue={pinggudw}
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
            initialValue={fankuijtbx}
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
            initialValue={fankuigzjy}
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
            // disabled={true}
            // initialValue={fankuilsqk}
            rules={[
              {
                required: true,
                message: '请输入落实情况，如无责可不填写!',
              },
            ]}
            // placeholder="请输入工作建议，如无责可不填写"
          />
        </ProForm.Group>

      </ModalForm>

      <ModalForm
        title="整改落实查看"
        width="1000px"
        modalProps={{destroyOnClose: true,maskClosable:false}}
        layout={'horizontal'}
        // initialValues={initialValues}
        submitter={{
          searchConfig: {
            submitText: '确认',
            resetText: '取消',
          },
          submitButtonProps: {
            style:{display:"none"}
          },
        }}
        labelAlign="right"
        style={{alignContent: "center", margin: 'auto'}}
        visible={chakanModalVisible}
        onVisibleChange={setChakanModalVisible}
        onFinish={async () => {
          setChakanModalVisible(false)
          // setInitialValues({})
        }}
      >
        <ProForm.Group>
          <ProFormSelect
            width="sm"
            name="wtlb"
            label="初步问题分类"
            disabled={true}
            initialValue={chakanwtlb}
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
              {
                value: '空',
                label: '空',
              },
            ]}
          />
          <ProFormSelect
            width="sm"
            name="bllb"
            label="办理类别"
            disabled={true}
            initialValue={chakanbllb}
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
            initialValue={chakanwtms}
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
            dataSource={chakandetaildata}
            columns={tablecolums}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width="md"
            name="xzpd"
            label="性质判定"
            disabled={true}
            initialValue={chakanxzpd}
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
            initialValue={chakanlschakanpd}
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
            initialValue={chakanyfwtyj}
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
            initialValue={chakanyfwtej}
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
            initialValue={chakanjtbx}
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
            initialValue={chakangzjy}
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
            initialValue={chakanlsqk}
            rules={[
              {
                required: true,
                message: '请输入落实情况，如无责可不填写!',
              },
            ]}
            // placeholder="请输入工作建议，如无责可不填写"
          />
        </ProForm.Group>

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
