// import {PlusOutlined} from '@ant-design/icons';
import {message, Button, Upload, UploadProps} from 'antd';
import React, {useState, useRef} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {ModalForm, ProFormText, ProFormSelect} from '@ant-design/pro-form';
// import type {ProDescriptionsItemProps} from '@ant-design/pro-descriptions';
// import ProDescriptions from '@ant-design/pro-descriptions';
// import type {FormValueType} from './components/UpdateForm';
// import UpdateForm from './components/UpdateForm';
import {shebeiguanli, addshebeiguanli} from './service';
import type {TableListItem, TableListPagination} from './data';
import {request} from 'umi';
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

const handleAdd = async (fields: TableListItem) => {
  const hide = message.loading('正在添加');

  try {
    await addshebeiguanli({...fields});
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};
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
  /** 新建窗口的弹窗 */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  /** 分布更新窗口的弹窗 */
    // const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
    // const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // const [currentRow, setCurrentRow] = useState<TableListItem>();
  // const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>({
  //   hiddenpeople: {
  //     show: false,
  //   },
  //   hiddenthings: {
  //     show: false,
  //   },
  // });
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
    {
      title: '资产系统编号',
      dataIndex: 'zcxtbh',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '资产名称',
      dataIndex: 'zcmc',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '型号',
      dataIndex: 'xh',
      valueType: 'textarea',
      align: 'center',
      // search: false,
      hideInTable: false,
    },
    {
      title: '规格',
      dataIndex: 'gg',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '数量',
      dataIndex: 'sl',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '设备',
      dataIndex: 'sb',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '单位',
      dataIndex: 'dw',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '起始U位',
      dataIndex: 'qsuw',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '占用U位',
      dataIndex: 'zyuw',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '关联设备',
      dataIndex: 'glsb',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '槽位或端口号',
      dataIndex: 'cwhdkh',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '项目编号',
      dataIndex: 'xmbh',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '项目名称',
      dataIndex: 'xmmc',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '操作说明',
      dataIndex: 'czsm',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '操作人',
      dataIndex: 'czr',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '操作时间',
      dataIndex: 'czsj',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '备注',
      dataIndex: 'bz',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '资产编码',
      dataIndex: 'zcbm',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
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
    // {
    //   title: '操作',
    //   dataIndex: 'option',
    //   valueType: 'option',
    //   align: 'center',
    //   render: (_, record) => [
    //     <a
    //       key="config"
    //       onClick={() => {
    //         handleUpdateModalVisible(true);
    //         setCurrentRow(record);
    //       }}
    //     >
    //       修改
    //     </a>,
    //     <a>详情</a>
    //   ],
    // },
  ];
  const [filename, setFilename] = useState<string>()
  // const [picturehtbh, setPicturehtbh] = useState<string>('')
  const props: UploadProps = {
    name: 'file',
    // headers: {'Authorization': localStorage.getItem('setAuthorization') as string},
    action: `/wuziguanli/api/devicseupload?&name=${filename}`,
    showUploadList: false,
    // maxCount: 1,
    beforeUpload: file => {
      setFilename(file.name)
      // console.log(props)
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
            <Button type="primary" key="templatedownload" onClick={() => {
              request(`/wuziguanli/api/alldevicedownload`, {
                method: 'get',
                responseType: 'arrayBuffer',
                // headers: {'Authorization': localStorage.getItem('setAuthorization') as string}
              }).then((res: any) => {
                const blob = new Blob([res]);
                // console.log(initialState.currentUser.name)
                const elementA = document.createElement('a');
                elementA.setAttribute('download', '全量设备清单.xlsx');
                elementA.style.display = 'none';
                elementA.href = URL.createObjectURL(blob);
                document.body.appendChild(elementA);
                elementA.click();
                document.body.removeChild(elementA);
              });

            }}>
              清单下载
            </Button>,
            <Button
              onClick={() => {
                handleModalVisible(true)
              }}
            >
              设备新增
            </Button>,
            <Upload {...props}>
              <Button
                type="primary"
                style={{marginRight: 15}}
                // icon={<UploadOutlined/>}
                // onClick={()=>{
                //   // @ts-ignore
                //   setPicturehtbh(record.htbh)
                // }}
              >
                批量上传
              </Button>
            </Upload>,
            // <Button key="out" type="primary" onClick={() => {
            //   const values = searchConfig?.form?.getFieldsValue();
            //   if (values.createtime) {
            //     const start_time = moment(values.createtime[0]).format('yyyy-MM-DD HH:mm:ss');
            //     const end_time = moment(values.createtime[1]).format('yyyy-MM-DD HH:mm:ss');
            //     const exceldownload = `/ztytest/api/informationdownload?&starttime=${start_time}&endtime=${end_time}`;
            //     // console.log(exceldownload)
            //     message.success("这是可修改的下载接口，此处获取了时间范围" + exceldownload)
            //   } else {
            //     message.error("请选择需要下载的时间范围")
            //   }
            //
            // }}>
            //   下载
            // </Button>,
          ],
        }}
        request={shebeiguanli}
        columns={columns}
        scroll={{x: 2000}}
        // columnsState={{
        //   value: columnsStateMap,
        //   onChange: setColumnsStateMap,
        // }}
      />
      <ModalForm
        title="设备新增"
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        modalProps={{destroyOnClose: true}}
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
        <ProFormText
          label="请输入资产编码"
          width="md"
          name="zcbm"
          placeholder="请输入资产编码"
        />
        <ProFormText
          label="请输入资产名称"
          rules={[
            {
              required: true,
              message: '请输入资产名称！',
            },
          ]}
          width="md"
          name="zcmc"
          placeholder="请输入资产名称"
        />
        <ProFormText
          label="请输入型号"
          rules={[
            {
              required: true,
              message: '请输入型号！',
            },
          ]}
          width="md"
          name="xh"
          placeholder="请输入型号"
        />
        <ProFormText
          label="请输入规格"
          width="md"
          name="gg"
          placeholder="请输入规格"
        />
        <ProFormText
          label="请输入数量"
          initialValue={'1'}
          rules={[
            {
              required: true,
              message: '请输入数量！',
            },
          ]}
          width="md"
          name="sl"
          placeholder="请输入数量"
        />
        <ProFormSelect
          width="md"
          initialValue={'台'}
          options={[
            {
              value: '块',
              label: '块',
            },
            {
              value: '台',
              label: '台',
            },
            {
              value: '条',
              label: '条',
            },
          ]}
          name="dw"
          label="请输入单位"
          placeholder="请输入单位"
          rules={[
            {
              required: true,
              message: '请输入单位！',
            },
          ]}
        />
        <ProFormText
          label="请输入机房"
          width="md"
          name="jf"
          placeholder="请输入机房"
        />
        <ProFormText
          label="请输入机柜"
          width="md"
          name="jg"
          placeholder="请输入机柜"
        />
        <ProFormText
          label="请输入起始U位"
          width="md"
          name="qsuw"
          placeholder="请输入起始U位"
        />
        <ProFormText
          label="请输入占用U位"
          width="md"
          name="zyuw"
          placeholder="请输入占用U位"
        />
        <ProFormText
          label="请输入关联设备daixiugai"
          width="md"
          name="glsb"
          placeholder="请输入关联设备"
        />
        <ProFormText
          label="请输入槽位或端口号"
          width="md"
          name="cwhdkh"
          placeholder="请输入槽位或端口号"
        />
        <ProFormText
          label="请输入项目编号"
          width="md"
          name="xmbh"
          placeholder="请输入项目编号"
        />
        <ProFormText
          label="请输入项目名称"
          width="md"
          name="xmmc"
          placeholder="请输入项目名称"
        />
        <ProFormText
          label="请输入操作说明"
          width="md"
          name="czsm"
          placeholder="请输入操作说明"
        />
        <ProFormText
          label="请输入操作人"
          width="md"
          name="czr"
          placeholder="请输入操作人"
        />
        <ProFormText
          label="请输入操作时间"
          width="md"
          name="czsj"
          placeholder="请输入操作时间"
        />
        <ProFormText
          label="请输入备注"
          width="md"
          name="bz"
          placeholder="请输入备注"
        />
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

      {/*<Drawer*/}
      {/*  width={1200}*/}
      {/*  visible={showDetail}*/}
      {/*  onClose={() => {*/}
      {/*    setCurrentRow(undefined);*/}
      {/*    setShowDetail(false);*/}
      {/*  }}*/}
      {/*  closable={false}*/}
      {/*>*/}
      {/*  {currentRow?.id && (*/}
      {/*    <ProDescriptions<TableListItem>*/}
      {/*      column={2}*/}
      {/*      title={currentRow?.id}*/}
      {/*      request={async () => ({*/}
      {/*        data: currentRow || {},*/}
      {/*      })}*/}
      {/*      params={{*/}
      {/*        id: currentRow?.id,*/}
      {/*      }}*/}
      {/*      columns={columns as ProDescriptionsItemProps<TableListItem>[]}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*</Drawer>*/}
    </PageContainer>

  );
};

export default TableListzsgc;
