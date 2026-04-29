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
  updateinformationRule,
  addinformationRule,
  genzonginformationrule,
  xiangqinginformationrule,
  xinzenginformationrule
} from './service';
import type {TableListItem, TableListPagination} from './data';
import moment from 'moment';
import {
  ModalForm,
  ProForm, ProFormSelect,
  ProFormTextArea,
  ProFormText,
  ProFormList,
  ProFormGroup,
  ProFormDigit
} from '@ant-design/pro-components';
import {useModel} from 'umi';
import {genzongTableListItem, xiangqingTableListItem,} from "./data";
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
  const {initialState} = useModel('@@initialState');
  // @ts-ignore
  const {currentUser} = initialState;
  /** 新建窗口的弹窗 */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const [genzongModalVisible, setGenzongModalVisible] = useState<boolean>(false);
  const [detailuuid, setDetailuuid] = useState<string>();
  const [genzonguuid, setGenzonguuid] = useState<string>();
  const [xinzengid, setXinzengid] = useState();
  const [detaildata, setDetaildata] = useState<any>();
  const [genzongdata, setGenzongdata] = useState<any>();
  const [xlkdata, setXlkdata] = useState<any>();

  const [detailsqdw, setDetailsqdw] = useState<string>();
  const [detailsqsj, setDetailsqsj] = useState<string>();
  const [detailsqr, setDetailsqr] = useState<string>();
  const [detaillxdh, setDetaillxdh] = useState<string>();
  const [detailxgsx, setDetailxgsx] = useState<string>();
  const [detailsqyy, setDetailsqyy] = useState<string>();
  const [detailpcssh, setDetailpcssh] = useState<string>();
  const [detailpcsshjg, setDetailpcsshjg] = useState<string>();
  const [detailpcsshrq, setDetailpcsshrq] = useState<string>();
  const [detailkjksh, setDetailkjksh] = useState<string>();
  const [detailkjkshjg, setDetailkjkshjg] = useState<string>();
  const [detailkjkshrq, setDetailkjkshrq] = useState<string>();
  const [detailkjksh1, setDetailkjksh1] = useState<string>();
  const [detailkjkshjg1, setDetailkjkshjg1] = useState<string>();
  const [detailkjkshrq1, setDetailkjkshrq1] = useState<string>();
  const [detailkjksh2, setDetailkjksh2] = useState<string>();
  const [detailkjkshjg2, setDetailkjkshjg2] = useState<string>();
  const [detailkjkshrq2, setDetailkjkshrq2] = useState<string>();
  const [detailhksh, setDetailhksh] = useState<string>();
  const [detailhkshjg, setDetailhkshjg] = useState<string>();
  const [detailhkshrq, setDetailhkshrq] = useState<string>();
  const [xinzengsqdw, setXinzengsqdw] = useState<string>();
  const [xinzengsqsj, setXinzengsqsj] = useState<string>();
  const [xinzengsqr, setXinzengsqr] = useState<string>();
  const [xinzenglxdh, setXinzenglxdh] = useState<string>();


  /** 分布更新窗口的弹窗 */
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();
  // const [initialValues, setInitialValues] = useState<any>();
  /** 国际化配置 */
  useEffect(() => {
    genzonginformationrule({uuid: genzonguuid}).then(res => {
        if (res) {
          setGenzongdata(res.data)
        }
      }
    )
  }, [genzonguuid]);

  useEffect(() => {
    xinzenginformationrule({name: currentUser.name}).then(res => {
        if (res) {
          // @ts-ignore
          setXinzengsqdw(res.data[0].sqdw)
          // @ts-ignore
          setXinzengsqsj(res.data[0].sqsj)
          // @ts-ignore
          setXinzengsqr(res.data[0].sqr)
          // @ts-ignore
          setXinzenglxdh(res.data[0].lxdh)
          // @ts-ignore
          setXlkdata(res.xlk)
        }
      }
    )
  }, [xinzengid]);

  useEffect(() => {
    xiangqinginformationrule({uuid: detailuuid}).then(res => {
        //@ts-ignore
        setDetaildata(res.data[0].data)
      }
    )
  }, [detailuuid]);
  console.log(detailsqdw)


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
      title: '申请单位',
      dataIndex: 'sqdw',
      key: 'hiddensqdw',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '申请人',
      dataIndex: 'sqr',
      key: 'hiddensqr',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    // {
    //   title: '申请时间',
    //   dataIndex: 'sqsj',
    //   // key: 'hiddensqr',
    //   // search: false,
    //   valueType: 'date',
    //   align: 'center',
    //   hideInTable: true,
    //   initialValue: moment().format('YYYY-MM-DD').valueOf(),
    // },
    {
      title: '申请时间',
      dataIndex: 'sqsj',
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
            sqsjstart_time: value[0],
            sqsjend_time: value[1],
          };
        },
      },
    },
    {
      title: '申请单位',
      dataIndex: 'sqdw',
      // key: 'hiddensqr',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      valueEnum: {
        全部: {text: '全部'},
        嘉定电信局: {text: '嘉定电信局'},
        东方有线: {text: '东方有线'},
        华恒通: {text: '华恒通'},
        嘉定移动: {text: '嘉定移动'},
        早田: {text: '早田'},
        东大智能: {text: '东大智能'},
        旗安: {text: '旗安'},
        上海信圣实业: {text: '上海信圣实业'},
        公安三所: {text: '公安三所'},
        永韧: {text: '永韧'},
        嘉城有线: {text: '嘉城有线'},
        富赛: {text: '富赛'},
        杰宝大王: {text: '杰宝大王'},
        华宇: {text: '华宇'},
        凯达: {text: '凯达'},
        管理员: {text: '管理员'},
      },
    },

    {
      title: '修改属性',
      dataIndex: 'xgsx',
      // key: 'hiddensqr',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      valueEnum: {
        全部: {text: '全部'},
        新增监控: {text: '新增监控'},
        拆除监控: {text: '拆除监控'},
        修改功能类型: {text: '修改功能类型'},
        其他: {text: '其他'},
      },
    },
    {
      title: '当前步骤',
      dataIndex: 'dqbz',
      // key: 'hiddensqr',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      valueEnum: {
        全部: {text: '全部'},
        派出所审核: {text: '派出所审核'},
        科技科审核: {text: '科技科审核'},
        操作员审核: {text: '操作员审核'},
        海康确认: {text: '海康确认'},
        结束: {text: '结束'},
      },
    },
    {
      title: '审核结果',
      dataIndex: 'shjg',
      // key: 'hiddensqr',
      // search: false,
      valueType: 'select',
      align: 'center',
      hideInTable: true,
      valueEnum: {
        全部: {text: '全部'},
        通过: {text: '通过'},
        驳回: {text: '驳回'},
        审核中: {text: '审核中'},
      },
    },
    {
      title: '联系电话',
      dataIndex: 'lxdh',
      key: 'hiddenlxdh',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '修改属性',
      dataIndex: 'xgsx',
      key: 'hiddenxgsx',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '申请原因',
      dataIndex: 'sqyy',
      key: 'hiddensqyy',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '当前步骤',
      dataIndex: 'dqbz',
      key: 'hiddendqbz',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '审核结果',
      dataIndex: 'shjg',
      key: 'hiddenshjg',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '申请时间',
      dataIndex: 'sqsj',
      // key: 'hiddensqr',
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
      // initialValue: moment().format('YYYY-MM-DD').valueOf(),
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
          type={"primary"}
          key="config"
          onClick={() => {
            setDetailModalVisible(true);
            setDetailuuid(record.uuid)
            setDetailsqdw(record.sqdw)
            setDetailsqsj(record.sqsj)
            setDetailsqr(record.sqr)
            setDetaillxdh(record.lxdh)
            setDetailxgsx(record.xgsx)
            setDetailsqyy(record.sqyy)
            setDetailpcssh(record.pcssh)
            setDetailpcsshjg(record.pcsshjg)
            setDetailpcsshrq(record.pcsshrq)
            setDetailkjksh(record.kjksh)
            setDetailkjkshjg(record.kjkshjg)
            setDetailkjkshrq(record.kjkshrq)
            setDetailkjksh1(record.kjksh1)
            setDetailkjkshjg1(record.kjkshjg1)
            setDetailkjkshrq1(record.kjkshrq1)
            setDetailkjksh2(record.kjksh2)
            setDetailkjkshjg2(record.kjkshjg2)
            setDetailkjkshrq2(record.kjkshrq2)
            setDetailhksh(record.hksh)
            setDetailhkshjg(record.hkshjg)
            setDetailhkshrq(record.hkshrq)
            // setCurrentRow(record);
          }}
        >
          详情
        </Button>,
        <Button
          type={"primary"}
          key="config"
          onClick={() => {
            //   handleUpdateModalVisible(true);
            //   setCurrentRow(record);
            setGenzongModalVisible(true);
            setGenzonguuid(record.uuid);
          }}
        >
          跟踪
        </Button>,
      ],
    },
  ];
  const tablecolums: ProColumns<xiangqingTableListItem>[] = [
    {
      title: '序号',
      dataIndex: 'xh',
      key: 'hiddenxh',
      width: 80,
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '监控设备名称',
      dataIndex: 'jksbmc',
      key: 'hiddenxh',
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
      title: '键盘编号（9位）',
      dataIndex: 'jpbh',
      key: 'hiddenxh',
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
  const genzongcolums: ProColumns<genzongTableListItem>[] = [
    {
      title: '处理步骤',
      dataIndex: 'clbz',
      key: 'hiddenclbz',
      width: 225,
      search: false,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '处理人',
      dataIndex: 'clr',
      key: 'hiddenclr',
      search: false,
      width: 225,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '结束时间',
      dataIndex: 'jssj',
      key: 'hiddenjssj',
      search: false,
      width: 225,
      valueType: 'textarea',
      align: 'center',
      hideInTable: false,
    },
    {
      title: '结果',
      dataIndex: 'jg',
      key: 'hiddenjg',
      search: false,
      width: 225,
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
            <Button key="out" type="primary"
                    onClick={() => {
                      handleModalVisible(true)
                      // @ts-ignore
                      setXinzengid(moment.now())
                    }}
            >
              新增
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
        scroll={{x: '110vh'}}
        // columnsState={{
        //   value: columnsStateMap,
        //   onChange: setColumnsStateMap,
        // }}
      />
      <ModalForm
        modalProps={{destroyOnClose: true}}
        title="一机一档监控属性修改申请"
        width="1000px"
        submitter={{
          searchConfig: {
            submitText: '提交',
            resetText: '关闭',
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
            label="申请单位"
            width="md"
            name="sqdw"
            disabled={true}
            initialValue={xinzengsqdw}
            // placeholder="请输入友好企业名称"
          />
          <ProFormText
            label="申请时间"
            width="md"
            name="sqsj"
            disabled={true}
            initialValue={xinzengsqsj}
            // placeholder="请输入负责部门"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="申 请 人 "
            width="md"
            name="sqr"
            disabled={true}
            initialValue={xinzengsqr}
            // placeholder="请输入友好企业名称"
          />
          <ProFormText
            label="联系电话"
            width="md"
            name="lxdh"
            disabled={true}
            initialValue={xinzenglxdh}
            // placeholder="请输入负责部门"
          />
        </ProForm.Group>

        <ProForm.Group>
          <ProFormTextArea
            label="申请原因"
            width={800}
            name="sqyy"
            rules={[
              {
                required: true,
                message: '请填写申请原因！',
              },
            ]}
            // placeholder="请输入友好企业名称"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormList
            name="sjsb"
            label="涉及设备"
            // rules={[{required: true, message: '请填写涉及设备'}]}
            initialValue={[
              {
                jksbmc: '',
                jpbh: '',
              },
            ]}
            copyIconProps={{tooltipText: '复制此项到末尾'}}
            deleteIconProps={{
              tooltipText: '删除此列',
            }}
          >
            <ProFormGroup key="group">
              <ProFormDigit width={80} name="xh" label="序号" />
              <ProFormText width={100} name="jksbmc" label="监控设备名称"/>
              <ProFormText width={100} name="jpbh" label="键盘编号（9位）" rules={[{max: 9,min: 9,message:'请输入9位键盘编号',required:true}]}/>
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
                    value: '新增监控',
                    label: '新增监控',
                  },
                  {
                    value: '拆除监控',
                    label: '拆除监控',
                  },
                  {
                    value: '修改功能类型',
                    label: '修改功能类型',
                  },
                  {
                    value: '其他',
                    label: '其他',
                  },
                ]}
                name="xgsx"
                label="修改属性"
              />
            </ProFormGroup>
          </ProFormList>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width={500}
            options={xlkdata}
            rules={[
              {
                required: true,
                message: '请选择审核对象！',
              },
            ]}
            name="tjshdx"
            label="提交审核对象"
          />
        </ProForm.Group>
      </ModalForm>


      <ModalForm
        title="申请详情"
        width="1000px"
        modalProps={{destroyOnClose: true}}
        layout={'horizontal'}
        // initialValues={initialValues}
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
        }}
        labelAlign="right"
        style={{alignContent: "center", margin: 'auto'}}
        visible={detailModalVisible}
        onVisibleChange={setDetailModalVisible}
        onFinish={async () => {
          setDetailModalVisible(false)
          // setInitialValues({})
        }}
      >
        <ProForm.Group>
          <ProFormText
            label="申请单位"
            width="md"
            key="sqdw"
            name="sqdw"
            disabled={true}
            initialValue={detailsqdw}
            // initialValue={initialValues?.sqdw}
            // placeholder="请输入友好企业名称"
          />
          <ProFormText
            label="申请时间"
            width="md"
            name="sqsj"
            disabled={true}
            initialValue={detailsqsj}
            // initialValue={currentdetail?.sqsj || ''}
            // placeholder="请输入负责部门"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="申 请 人 "
            width="md"
            name="sqr"
            disabled={true}
            initialValue={detailsqr}
            // initialValue={currentdetail?.sqr || ''}
            // placeholder="请输入友好企业名称"
          />
          <ProFormText
            label="联系电话"
            width="md"
            name="lxdh"
            disabled={true}
            initialValue={detaillxdh}
            // initialValue={currentdetail?.lxdh || ''}
            // placeholder="请输入负责部门"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width={500}
            name="xgsx"
            label="修改属性"
            disabled={true}
            initialValue={detailxgsx}
            // initialValue={currentdetail?.xgsx || ''}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            label="申请原因"
            width={800}
            name="sqyy"
            disabled={true}
            initialValue={detailsqyy}
            // initialValue={currentdetail?.sqyy || ''}
            // placeholder="请输入友好企业名称"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProTable
            headerTitle="涉及设备"
            options={false}
            search={false}
            columnEmptyText={false}
            pagination={false}
            dataSource={detaildata}
            columns={tablecolums}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="派出所审核"
            width="sm"
            name="pcssh"
            disabled={true}
            initialValue={detailpcssh}
            // initialValue={currentdetail?.pcssh || ''}
            // placeholder="请输入友好企业名称"
          />
          <ProFormText
            label="审核结果"
            width="sm"
            name="pcsshjg"
            disabled={true}
            initialValue={detailpcsshjg}
            // initialValue={currentdetail?.pcsshjg || ''}
            // placeholder="请输入负责部门"
          />
          <ProFormText
            label="审核日期"
            width="sm"
            name="pcsshrq"
            disabled={true}
            initialValue={detailpcsshrq}
            // initialValue={currentdetail?.pcsshrq || ''}
            // placeholder="请输入负责部门"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="科技科审核"
            width="sm"
            name="kjksh"
            disabled={true}
            initialValue={detailkjksh}
            // initialValue={currentdetail?.kjksh1 || ''}
            // placeholder="请输入友好企业名称"
          />
          <ProFormText
            label="审核结果"
            width="sm"
            name="kjkshjg"
            disabled={true}
            initialValue={detailkjkshjg}
            // initialValue={currentdetail?.kjkshjg1 || ''}
            // placeholder="请输入负责部门"
          />
          <ProFormText
            label="审核日期"
            width="sm"
            name="kjkshrq"
            disabled={true}
            initialValue={detailkjkshrq}
            // initialValue={currentdetail?.kjkshrq1 || ''}
            // placeholder="请输入负责部门"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="操作员审核"
            width="sm"
            name="kjksh1"
            disabled={true}
            initialValue={detailkjksh1}
            // initialValue={currentdetail?.kjksh1 || ''}
            // placeholder="请输入友好企业名称"
          />
          <ProFormText
            label="审核结果"
            width="sm"
            name="kjkshjg1"
            disabled={true}
            initialValue={detailkjkshjg1}
            // initialValue={currentdetail?.kjkshjg1 || ''}
            // placeholder="请输入负责部门"
          />
          <ProFormText
            label="审核日期"
            width="sm"
            name="kjkshrq1"
            disabled={true}
            initialValue={detailkjkshrq1}
            // initialValue={currentdetail?.kjkshrq1 || ''}
            // placeholder="请输入负责部门"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="操作员审核"
            width="sm"
            name="kjksh2"
            disabled={true}
            initialValue={detailkjksh2}
            // initialValue={currentdetail?.kjksh2 || ''}
            // placeholder="请输入友好企业名称"
          />
          <ProFormText
            label="审核结果"
            width="sm"
            name="kjkshjg2"
            disabled={true}
            initialValue={detailkjkshjg2}
            // initialValue={currentdetail?.kjkshjg2 || ''}
            // placeholder="请输入负责部门"
          />
          <ProFormText
            label="审核日期"
            width="sm"
            name="kjkshrq2"
            disabled={true}
            initialValue={detailkjkshrq2}
            // initialValue={currentdetail?.kjkshrq2 || ''}
            // placeholder="请输入负责部门"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            label="海 康 审 核 "
            width="sm"
            name="hksh"
            disabled={true}
            initialValue={detailhksh}
            // initialValue={currentdetail?.hksh || ''}
            // placeholder="请输入友好企业名称"
          />
          <ProFormText
            label="审核结果"
            width="sm"
            name="hkshjg"
            disabled={true}
            initialValue={detailhkshjg}
            // initialValue={currentdetail?.hkshjg || ''}
            // placeholder="请输入负责部门"
          />
          <ProFormText
            label="审核日期"
            width="sm"
            name="hkshrq"
            disabled={true}
            initialValue={detailhkshrq}
            // initialValue={currentdetail?.hkshrq || ''}
            // placeholder="请输入负责部门"
          />
        </ProForm.Group>

      </ModalForm>

      <ModalForm
        title="跟踪详情"
        width="1000px"
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
        }}
        visible={genzongModalVisible}
        onVisibleChange={setGenzongModalVisible}
        onFinish={async () => {
          setGenzongModalVisible(false)
        }}
      >
        <ProForm.Group>
          <ProTable
            headerTitle="跟踪详情"
            options={false}
            search={false}
            columnEmptyText={false}
            pagination={false}
            dataSource={genzongdata}
            // request={genzonginformationrule}
            columns={genzongcolums}
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
