// import {PlusOutlined} from '@ant-design/icons';
import {message, Drawer, Button} from 'antd';
import React, {useState, useRef} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import type {ProColumns, ActionType, ColumnsState} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {ModalForm, ProFormText} from '@ant-design/pro-form';
import type {ProDescriptionsItemProps} from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import type {FormValueType} from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
import {informationrule, updateinformationRule, addinformationRule} from './service';
import type {TableListItem, TableListPagination} from './data';
import moment from 'moment';
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
/**
 * 更新节点
 *
 * @param fields
 */

const handleUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
  const hide = message.loading('正在配置');

  try {
    await updateinformationRule({
      ...currentRow,
      ...fields,
    });
    hide();
    message.success('修改成功');
    return true;
  } catch (error) {
    hide();
    message.error('修改失败请重试！');
    return false;
  }
};
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
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();
  const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>({
    hiddenpeople: {
      show: false,
    },
    hiddenthings: {
      show: false,
    },
  });
  // const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([]);
  /** 国际化配置 */

  const columns: ProColumns<TableListItem>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: true,
    },
    {
      title: '用户姓名',
      dataIndex: 'username',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '经纬度',
      dataIndex: 'longitudeandlatitude',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '创建时间',
      dataIndex: 'createtime',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '创建时间',
      dataIndex: 'createtime',
      valueType: 'dateTimeRange',
      align: 'center',
      hideInForm: true,
      hideInTable: true,
      initialValue: [
        moment().startOf('day').format('yyyy-MM-DD 00:00:00').valueOf(),
        moment().endOf('day').format('yyyy-MM-DD 23:59:59').valueOf()
      ],
      search: {
        transform: (value) => {
          return {
            start_time: value[0],
            end_time: value[1],
          };
        },
      },
    },
    {
      title: '被隐藏的人',
      dataIndex: 'hiddenpeople',
      key: 'hiddenpeople',
      valueType: 'textarea',
      align: 'center',
      search: false,
      showSorterTooltip: false,
    },
    {
      title: '被隐藏的事',
      dataIndex: 'hiddenthings',
      key: 'hiddenthings',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '操作人',
      dataIndex: 'operator',
      valueType: 'textarea',
      align: 'center',
      search: false,
      hideInTable: false,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      align: 'center',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleUpdateModalVisible(true);
            setCurrentRow(record);
          }}
        >
          修改
        </a>,
        <a>详情</a>
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
            <Button key="out" type="primary" onClick={() => {
              const values = searchConfig?.form?.getFieldsValue();
              if (values.createtime) {
                const start_time = moment(values.createtime[0]).format('yyyy-MM-DD HH:mm:ss');
                const end_time = moment(values.createtime[1]).format('yyyy-MM-DD HH:mm:ss');
                const exceldownload = `/ztytest/api/informationdownload?&starttime=${start_time}&endtime=${end_time}`;
                // console.log(exceldownload)
                message.success("这是可修改的下载接口，此处获取了时间范围" + exceldownload)
              } else {
                message.error("请选择需要下载的时间范围")
              }

            }}>
              下载
            </Button>,
          ],
        }}
        request={informationrule}
        columns={columns}
        columnsState={{
          value: columnsStateMap,
          onChange: setColumnsStateMap,
        }}
      />
      <ModalForm
        title="新建友好企业"
        width="400px"
        visible={createModalVisible}
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
        <ProFormText
          label="请输入友好企业名称"
          rules={[
            {
              required: true,
              message: '请输入友好企业名称！',
            },
          ]}
          width="md"
          name="name"
          placeholder="请输入友好企业名称"
        />
        <ProFormText
          label="请输入负责部门"
          rules={[
            {
              required: true,
              message: '请输入负责部门！',
            },
          ]}
          width="md"
          name="department"
          placeholder="请输入负责部门"
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
        {currentRow?.id && (
          <ProDescriptions<TableListItem>
            column={2}
            title={currentRow?.id}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.id,
            }}
            columns={columns as ProDescriptionsItemProps<TableListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>

  );
};

export default TableListzsgc;
