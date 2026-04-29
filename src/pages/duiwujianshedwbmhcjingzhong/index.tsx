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
  dwzcupdateinformationRule,
  jzfhupdateinformationRule,
} from './service';
import type {TableListItem, TableListPagination} from './data';
import moment from 'moment';
import {request} from 'umi';
import {
  ModalForm,
  ProForm, ProFormGroup, ProFormList, ProFormSelect, ProFormText,
  ProFormTextArea,
  // ProFormText,
  // ProFormCascader,
  // ProFormDatePicker,
  // ProFormRadio,

} from '@ant-design/pro-components';
import {shejirenyuaninformationrule} from "@/pages/duiwujianshejbtsgl/service";
import {shejirenyuanTableListItem} from "@/pages/duiwujianshejbtsgl/data";
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
  const [danweizichaModalVisible, setDanweizichaModalVisible] = useState<boolean>(false);
  const [jingzhongfuheModalVisible, setJingzhongfuheModalVisible] = useState<boolean>(false);


  const [danweizichauuid, setDanweizichauuid] = useState<string>();
  const [danweizichajz, setDanweizichajz] = useState<string>();
  const [danweizichadw, setDanweizichadw] = useState<string>();
  const [ifdanweizichaqr, setIfdanweizichaqr] = useState<boolean>();
  const [jingzhongfuheuuid, setJingzhongfuheuuid] = useState<string>();
  const [jingzhongfuhejz, setJingzhongfuhejz] = useState<string>();
  const [jingzhongfuhedw, setJingzhongfuhedw] = useState<string>();
  const [jingzhongfuhedwzc, setJingzhongfuhedwzc] = useState<string>();
  const [ifjingzhongfuhetj, setIfjingzhongfuhetj] = useState<boolean>();
  const [jingzhongfuhedetaildata, setJingzhongfuheDetaildata] = useState<any>();

  useEffect(() => {
    shejirenyuaninformationrule({uuid: jingzhongfuheuuid}).then(res => {

        // @ts-ignore
        setJingzhongfuheDetaildata(res.data)
        // @ts-ignore
        // setXlknetdata(res.xlk)
      }
    )
  }, [jingzhongfuheuuid]);




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
        await dwzcupdateinformationRule({
          ...currentRow,
          ...fields,
          uuid: danweizichauuid,
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

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const jingzhongfuheUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
      const hide = message.loading('正在提交');

      try {
        await jzfhupdateinformationRule({
          ...currentRow,
          ...fields,
          uuid: jingzhongfuheuuid,
        });
        hide();
        message.success('提交成功');
        return true;
      } catch (error) {
        hide();
        message.error('提交失败请重试！');
        return false;
      }
    };

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
        临近逾期: {text: '临近逾期'},
      },
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
      title: ' 核查截止日期',
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
        if (dom === '已逾期') {
          return <div style={{color: 'red',}}>{dom}</div>
        } else if (dom === '核查完成') {
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
        单位自查中: {text: '单位自查中'},
        警种复核中: {text: '警种复核中'},
        核查完成: {text: '核查完成'},
      },
    },
    // {
    //   title: '逾期',
    //   dataIndex: 'yq',
    //   key: 'hiddenhcyq',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
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
          onClick={()=>{
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
          style={{display:"none"}}
          type={"primary"}
          key="config"
          disabled={record.ifdanweizichadisabled}
          onClick={() => {
            setDanweizichaModalVisible(true)
            setDanweizichauuid(record.uuid)
            setDanweizichajz(record.jz)
            setDanweizichadw(record.dw)
            setIfdanweizichaqr(record.ifdanweizichaqr)

          }}
        >
          单位自查
        </Button>,
        <Button
          type={"primary"}
          key="config"
          disabled={record.ifjingzhongfuhedisabled}
          onClick={() => {
            setJingzhongfuheModalVisible(true)
            setJingzhongfuheuuid(record.uuid)
            setJingzhongfuhejz(record.jz)
            setJingzhongfuhedw(record.dw)
            setJingzhongfuhedwzc(record.dwzc)
            setIfjingzhongfuhetj(record.ifjingzhongfuchatj)

          }}
        >
          警种复查
        </Button>,
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
        title="单位自查"
        width="800px"
        modalProps={{destroyOnClose: true,maskClosable:false}}
        layout={'horizontal'}
        // initialValues={initialValues}
        submitter={{
          searchConfig: {
            submitText: '提交',
            resetText: '取消',
          },
          submitButtonProps: {
            disabled: ifdanweizichaqr
          },
        }}
        labelAlign="right"
        style={{alignContent: "center", margin: 'auto'}}
        visible={danweizichaModalVisible}
        onVisibleChange={setDanweizichaModalVisible}
        onFinish={async (value) => {
          setDanweizichaModalVisible(false)
          const success = await handleUpdate(value as TableListItem);
          if (success) {
            setDanweizichaModalVisible(false)
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
            name="jz"
            label="警种"
            disabled={true}
            initialValue={danweizichajz}
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
            initialValue={danweizichadw}
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
          <ProFormList
            name="sjry"
            label="涉及人员"
            // rules={[{required: true, message: '请填写涉及设备'}]}
            initialValue={[
              {
                ghjh: '',
                xm: '',
              },
            ]}
            copyIconProps={{tooltipText: '复制此列到末尾'}}
            deleteIconProps={{
              tooltipText: '删除此列',
            }}
          >
            <ProFormGroup key="group">
              <ProFormSelect
                width={100}
                rules={[
                  {
                    required: true,
                    message: '请选择修改属性！',
                  },
                ]}
                options={[
                  {
                    value: '民警',
                    label: '民警',
                  },
                  {
                    value: '辅管',
                    label: '辅管',
                  },
                  {
                    value: '其他',
                    label: '其他',
                  },
                ]}
                name="rylx"
                label="人员类型"
              />
              <ProFormText width={100} name="ghjh" label="工号/警号"
              rules={[
                  {
                    required: true,
                    message: '请输入工号/警号！',
                  },
                ]}/>
              <ProFormText width={100} name="xm" label="姓名"
              rules={[
                  {
                    required: true,
                    message: '请选择姓名！',
                  },
                ]}/>
            </ProFormGroup>
          </ProFormList>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="单位自查"
            width={600}
            name="dwzc"
            rules={[
              {
                required: true,
                message: '请输入单位自查说明!',
              },
            ]}
            placeholder="请输入单位自查说明"
          />
        </ProForm.Group>

      </ModalForm>

      <ModalForm
        title="警种复核"
        width="800px"
        modalProps={{destroyOnClose: true,maskClosable:false}}
        layout={'horizontal'}
        // initialValues={initialValues}
        submitter={{
          searchConfig: {
            submitText: '提交反馈',
            resetText: '取消',
          },
          submitButtonProps: {
            disabled: ifjingzhongfuhetj
          },
        }}
        labelAlign="right"
        style={{alignContent: "center", margin: 'auto'}}
        visible={jingzhongfuheModalVisible}
        onVisibleChange={setJingzhongfuheModalVisible}
        onFinish={async (value) => {
          setJingzhongfuheModalVisible(false)
          const success = await jingzhongfuheUpdate(value as TableListItem);
          if (success) {
            setJingzhongfuheModalVisible(false)
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
            name="jz"
            label="警种"
            disabled={true}
            initialValue={jingzhongfuhejz}
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
            initialValue={jingzhongfuhedw}
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
          <ProTable
            headerTitle="涉及人员"
            options={false}
            search={false}
            columnEmptyText={false}
            pagination={false}
            dataSource={jingzhongfuhedetaildata}
            columns={tablecolums}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="单位自查"
            width={600}
            name="dwzc"
            disabled={true}
            initialValue={jingzhongfuhedwzc}
            // rules={[
            //   {
            //     required: true,
            //     message: '请输入问题描述!',
            //   },
            // ]}
            placeholder="请输入单位自查说明"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="警种复核"
            width={600}
            name="jzfh"
            // disabled={true}
            // initialValue={jingzhongfuhedwzc}
            rules={[
              {
                required: true,
                message: '请输入警种复核说明!',
              },
            ]}
            placeholder="请输入警种复核说明"
          />
        </ProForm.Group>
        <ProFormSelect
            width="md"
            name="jzcp"
            label="警种初评"
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
