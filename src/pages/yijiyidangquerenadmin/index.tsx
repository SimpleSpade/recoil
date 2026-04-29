// import {PlusOutlined} from '@ant-design/icons';
import {message, Drawer, Button, List} from 'antd';
import React, {useState, useRef} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import type {ProColumns, ActionType, ColumnsState} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {ModalForm} from '@ant-design/pro-form';
import type {ProDescriptionsItemProps} from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
// import type {FormValueType} from './components/UpdateForm';
// import UpdateForm from './components/UpdateForm';
import {informationrule, addinformationRule} from './service';
import type {TableListItem, TableListPagination} from './data';
import {yijiyidang} from "@/services/ant-design-pro/yijiyidang";
import ProCard from "@ant-design/pro-card";
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

// const handleUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
//   const hide = message.loading('正在配置');
//
//   try {
//     await updateinformationRule({
//       ...currentRow,
//       ...fields,
//     });
//     hide();
//     message.success('修改成功');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('修改失败请重试！');
//     return false;
//   }
// };
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
  const [shenpiuuid , setShenpiuuid]=useState()
  const [shenpizt , setShenpizt]=useState<string>()
  const handleAdd = async (fields: TableListItem) => {
  const hide = message.loading('正在审批');

  try {
    await addinformationRule({...fields,uuid:shenpiuuid,spzt:shenpizt});
    hide();
    message.success('审批成功');
    return true;
  } catch (error) {
    hide();
    message.error('审批失败请重试！');
    return false;
  }
};
  /** 新建窗口的弹窗 */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  /** 分布更新窗口的弹窗 */
    // const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();
  const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>({
    hiddenxh: {show: true,},
    hiddensbbm: {show: true,},
    hiddensbmc: {show: true,},
    hiddensbcs: {show: false,},
    hiddenxzqh: {show: false,},
    hiddenjkdlx: {show: false,},
    hiddensbxh: {show: false,},
    hiddendwsc: {show: false,},
    hiddenipv4dz: {show: false,},
    hiddenipv6dz: {show: false,},
    hiddenmacdz: {show: false,},
    hiddensxjlx: {show: false,},
    hiddensxjgnlx: {show: false,},
    hiddenbgsx: {show: false,},
    hiddensxjbmgs: {show: false,},
    hiddendyccsbip: {show: false,},
    hiddendyccsbtd: {show: false,},
    hiddenazdz: {show: false,},
    hiddenjd: {show: false,},
    hiddenwd: {show: false,},
    hiddensxjwzlx: {show: false,},
    hiddenjsfx: {show: false,},
    hiddensxjcjyszpurl: {show: false,},
    hiddenlwsx: {show: false,},
    hiddenssxqgajg: {show: false,},
    hiddenazsj: {show: false,},
    hiddengldw: {show: false,},
    hiddengldwlxfs: {show: false,},
    hiddenlxhtpbcts: {show: false,},
    hiddensbzt: {show: false,},
    hiddenssbmhy: {show: false,},
    hiddensptpfbl: {show: false,},
    hiddenspxhlx: {show: false,},
    hiddensfdwgx: {show: false,},
    hiddensfjrsjpt: {show: false,},
    hiddenjpbh: {show: false,},
    hiddenjsyylb: {show: false,},
    hiddenazgd: {show: false,},
    hiddenksjl: {show: false,},
    hiddendwmk: {show: false,},
    hiddencsbh: {show: false,},
    hiddencsmc: {show: false,},
    hiddenbwlx: {show: false,},
    hiddencrfx: {show: false,},
    hiddenspzt: {show: true,},
  });
  const [olddata, setOlddata] = useState<any>([])
  const [newdata, setNewdata] = useState<any>([])
  // const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([]);
  /** 国际化配置 */

  const columns: ProColumns<TableListItem>[] = [
    // {
    //   title: 'ID',
    //   dataIndex: 'id',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: true,
    // },
    // {
    //   title: '用户姓名',
    //   dataIndex: 'username',
    //   valueType: 'textarea',
    //   align: 'center',
    //   search: false,
    //   hideInTable: false,
    // },
    // {
    //   title: '经纬度',
    //   dataIndex: 'longitudeandlatitude',
    //   valueType: 'textarea',
    //   align: 'center',
    //   search: false,
    //   hideInTable: false,
    // },
    // {
    //   title: '创建时间',
    //   dataIndex: 'createtime',
    //   valueType: 'textarea',
    //   align: 'center',
    //   search: false,
    //   hideInTable: false,
    // },
    // {
    //   title: '创建时间',
    //   dataIndex: 'createtime',
    //   valueType: 'dateTimeRange',
    //   align: 'center',
    //   hideInForm: true,
    //   hideInTable: true,
    //   initialValue: [
    //     moment().startOf('day').format('yyyy-MM-DD 00:00:00').valueOf(),
    //     moment().endOf('day').format('yyyy-MM-DD 23:59:59').valueOf()
    //   ],
    //   search: {
    //     transform: (value) => {
    //       return {
    //         start_time: value[0],
    //         end_time: value[1],
    //       };
    //     },
    //   },
    // },

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
      title: '设备编码（20位）',
      dataIndex: 'sbbm',
      key: 'hiddensbbm',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '设备名称',
      dataIndex: 'sbmc',
      key: 'hiddensbmc',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    // {
    //   title: '设备厂商',
    //   dataIndex: 'sbcs',
    //   key: 'hiddensbcs',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '行政区划',
    //   dataIndex: 'xzqh',
    //   key: 'hiddenxzqh',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '监控点类型',
    //   dataIndex: 'jkdlx',
    //   key: 'hiddenjkdlx',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '设备型号',
    //   dataIndex: 'sbxh',
    //   key: 'hiddensbxh',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '点位俗称',
    //   dataIndex: 'dwsc',
    //   key: 'hiddendwsc',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: 'IPV4地址',
    //   dataIndex: 'ipv4dz',
    //   key: 'hiddenipv4dz',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: 'IPV6地址',
    //   dataIndex: 'ipv6dz',
    //   key: 'hiddenipv6dz',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: 'MAC地址',
    //   dataIndex: 'macdz',
    //   key: 'hiddenmacdz',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '摄像机类型',
    //   dataIndex: 'sxjlx',
    //   key: 'hiddensxjlx',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '摄像机功能类型',
    //   dataIndex: 'sxjgnlx',
    //   key: 'hiddensxjgnlx',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '补光属性',
    //   dataIndex: 'bgsx',
    //   key: 'hiddenbgsx',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '摄像机编码格式',
    //   dataIndex: 'sxjbmgs',
    //   key: 'hiddensxjbmgs',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '对应存储设备IP',
    //   dataIndex: 'dyccsbip',
    //   key: 'hiddendyccsbip',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '对应存储设备通道',
    //   dataIndex: 'dyccsbtd',
    //   key: 'hiddendyccsbtd',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '安装地址',
    //   dataIndex: 'azdz',
    //   key: 'hiddenazdz',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '经度',
    //   dataIndex: 'jd',
    //   key: 'hiddenjd',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '纬度',
    //   dataIndex: 'wd',
    //   key: 'hiddenwd',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '摄像机位置类型',
    //   dataIndex: 'sxjwzlx',
    //   key: 'hiddensxjwzlx',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '监视方向',
    //   dataIndex: 'jsfx',
    //   key: 'hiddenjsfx',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '摄像机场景预设照片URL',
    //   dataIndex: 'sxjcjyszpurl',
    //   key: 'hiddensxjcjyszpurl',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '联网属性',
    //   dataIndex: 'lwsx',
    //   key: 'hiddenlwsx',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '所属辖区公安机关',
    //   dataIndex: 'ssxqgajg',
    //   key: 'hiddenssxqgajg',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '安装时间',
    //   dataIndex: 'azsj',
    //   key: 'hiddenazsj',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '管理单位',
    //   dataIndex: 'gldw',
    //   key: 'hiddengldw',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '管理单位联系方式',
    //   dataIndex: 'gldwlxfs',
    //   key: 'hiddengldwlxfs',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '录像或图片保存天数',
    //   dataIndex: 'lxhtpbcts',
    //   key: 'hiddenlxhtpbcts',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '设备状态',
    //   dataIndex: 'sbzt',
    //   key: 'hiddensbzt',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '所属部门/行业',
    //   dataIndex: 'ssbmhy',
    //   key: 'hiddenssbmhy',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '视频/图片分辨率',
    //   dataIndex: 'sptpfbl',
    //   key: 'hiddensptpfbl',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '视频信号类型',
    //   dataIndex: 'spxhlx',
    //   key: 'hiddenspxhlx',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '是否对外共享',
    //   dataIndex: 'sfdwgx',
    //   key: 'hiddensfdwgx',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '是否接入三级平台',
    //   dataIndex: 'sfjrsjpt',
    //   key: 'hiddensfjrsjpt',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '键盘编号',
    //   dataIndex: 'jpbh',
    //   key: 'hiddenjpbh',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '建设应用类别',
    //   dataIndex: 'jsyylb',
    //   key: 'hiddenjsyylb',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '安装高度（单位米）',
    //   dataIndex: 'azgd',
    //   key: 'hiddenazgd',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '可视距离（单位米）',
    //   dataIndex: 'ksjl',
    //   key: 'hiddenksjl',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '定位模块',
    //   dataIndex: 'dwmk',
    //   key: 'hiddendwmk',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '场所编号',
    //   dataIndex: 'csbh',
    //   key: 'hiddencsbh',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '场所名称',
    //   dataIndex: 'csmc',
    //   key: 'hiddencsmc',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '部位类型',
    //   dataIndex: 'bwlx',
    //   key: 'hiddenbwlx',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    // {
    //   title: '出入方向',
    //   dataIndex: 'crfx',
    //   key: 'hiddencrfx',
    //   search: false,
    //   valueType: 'textarea',
    //   align: 'center',
    //   hideInTable: false,
    // },
    {
      title: '修改时间',
      dataIndex: 'xgsj',
      key: 'hiddenxgsj',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '确认状态',
      dataIndex: 'qrzt',
      key: 'hiddenqrzt',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },

    // {
    //   title: '被隐藏的人',
    //   dataIndex: 'hiddenpeople',
    //   key: 'hiddenpeople',
    //   valueType: 'textarea',
    //   align: 'center',
    //   search: false,
    //   showSorterTooltip: false,
    // },
    // {
    //   title: '被隐藏的事',
    //   dataIndex: 'hiddenthings',
    //   key: 'hiddenthings',
    //   valueType: 'textarea',
    //   align: 'center',
    //   search: false,
    //   hideInTable: false,
    // },
    // {
    //   title: '操作人',
    //   dataIndex: 'operator',
    //   valueType: 'textarea',
    //   align: 'center',
    //   search: false,
    //   hideInTable: false,
    // },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      align: 'center',
      render: (_, record) => [
        <Button
          disabled={record.qrzt === '待确认' ? false : true}
          type={"primary"}
          key="config"
          onClick={() => {
            handleModalVisible(true);
            // @ts-ignore
            setShenpiuuid(record.uuid)
            yijiyidang({uuid: record.uuid}).then(res => {
              // console.log(res)
              // @ts-ignore
              setOlddata(res.data[0].old);
              // console.log(olddata)
              // @ts-ignore
              setNewdata(res.data[0].new);
            })
            // setCurrentRow(record);
            // console.log(record.uuid)
          }}
        >
          确认
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
        // search={{
        //   defaultCollapsed: false,
        //   labelWidth: 'auto',
        //   optionRender: (searchConfig, formProps, dom) => [
        //     ...dom.reverse(),
        //     <Button key="out" type="primary" onClick={() => {
        //       const values = searchConfig?.form?.getFieldsValue();
        //       if (values.createtime) {
        //         const start_time = moment(values.createtime[0]).format('yyyy-MM-DD HH:mm:ss');
        //         const end_time = moment(values.createtime[1]).format('yyyy-MM-DD HH:mm:ss');
        //         const exceldownload = `/ztytest/api/informationdownload?&starttime=${start_time}&endtime=${end_time}`;
        //         // console.log(exceldownload)
        //         message.success("这是可修改的下载接口，此处获取了时间范围" + exceldownload)
        //       } else {
        //         message.error("请选择需要下载的时间范围")
        //       }
        //
        //     }}>
        //       下载
        //     </Button>,
        //   ],
        // }}
        search={false}
        request={informationrule}
        columns={columns.map(item => { // 通过配置 给每个单元格添加不换行属性

          const fun = () => ({style: {whiteSpace: 'nowrap'}});
          //@ts-ignore
          item.onHeaderCell = fun;
          //@ts-ignore
          item.onCell = fun;

          return item;

        })}
        scroll={{x: '110vh'}}
        columnsState={{
          value: columnsStateMap,
          onChange: setColumnsStateMap,
        }}
      />
      <ModalForm
        title="确认详情"
        width="1000px"
        submitter={{
          submitButtonProps: {
            style: {
              display: 'none',
            },
          },
           render: (props, defaultDoms) => {
            return [
              ...defaultDoms,
              <Button
                key="ok"
                type={"primary"}
                onClick={() => {
                  setShenpizt("fail")
                  props.submit();
                }}
              >
                确认驳回
              </Button>,
              <Button
                key="ok"
                type={"primary"}
                onClick={() => {
                  setShenpizt("success")
                  props.submit();
                }}
              >
                确认通过
              </Button>,
            ];
          },
          searchConfig:{
            submitText:'确认通过'
          }
        }}
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          console.log(value)
          const success = await handleAdd(value as TableListItem);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProCard bordered={true}>
          <ProCard>
            <List
            size="small"
            bordered
            header={<div>原有数据</div>}
            // style={{width:200}}
            dataSource={olddata}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
          </ProCard>
          <ProCard>
            <List
            size="small"
            header={<div>需确认数据</div>}
            bordered
            // style={{width:200}}
            dataSource={newdata}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
          </ProCard>


        </ProCard>


      </ModalForm>

      {/*<UpdateForm*/}
      {/*  onSubmit={async (value) => {*/}
      {/*    const success = await handleUpdate(value, currentRow);*/}

      {/*    if (success) {*/}
      {/*      handleUpdateModalVisible(false);*/}
      {/*      setCurrentRow(undefined);*/}

      {/*      if (actionRef.current) {*/}
      {/*        actionRef.current.reload();*/}
      {/*      }*/}
      {/*    }*/}
      {/*  }}*/}
      {/*  onCancel={() => {*/}
      {/*    handleUpdateModalVisible(false);*/}
      {/*    setCurrentRow(undefined);*/}
      {/*  }}*/}
      {/*  updateModalVisible={updateModalVisible}*/}
      {/*  values={currentRow || {}}*/}
      {/*/>*/}

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
