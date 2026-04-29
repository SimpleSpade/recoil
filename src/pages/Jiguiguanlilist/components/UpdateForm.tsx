import React, {useState, useEffect} from 'react';
import {Modal} from 'antd';
import {
  ProFormText,
  ProFormSelect,
  StepsForm,
} from '@ant-design/pro-form';
import type {TableListItem} from '../data';
import {messageget} from "@/services/ant-design-pro/messageget";

export type FormValueType = {
  username?: string;
  longitudeandlatitude?: string;
  hiddenpeople?: string;
  hiddenthings?: string;
  operator?: string;
} & Partial<TableListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void|true>;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [xlk, setXlk] = useState([{value: 1, label: '自己'},{value: 2, label: '不是自己'},{value: 3, label: '未知'}])
    const [current,setCurrent]=useState(0)

  // const onCurrentChange = jest.fn();
  useEffect(() => {
    messageget({}).then(res => {
      //@ts-ignore
      if (res.sfzq === '正确数据') {
        //@ts-ignore
        const getcompany = res.data.company;
        setXlk(getcompany);
      }
    })
  }, [])
  useEffect(()=>{
    setCurrent(0)
  },[props.updateModalVisible])
  return (
    <StepsForm
      current={current}
      stepsProps={{
        size: 'small',
      }}
      onCurrentChange={(num)=>{
        setCurrent(num)
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{
              padding: '32px 40px 48px',
            }}
            destroyOnClose
            title="信息修改"
            visible={props.updateModalVisible}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}

    >
      <StepsForm.StepForm
        initialValues={{
          username: props.values.username,
        }}
        title="用户姓名"
      >
        <ProFormText
          name="username"
          label="用户姓名"
          width="md"
          rules={[
            {
              required: true,
              message: '请输入用户姓名！',
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          longitudeandlatitude: props.values.longitudeandlatitude,
        }}
        title="经纬度"
      >
        <ProFormText
          name="longitudeandlatitude"
          label="经纬度"
          width="md"
          rules={[
            {
              required: true,
              message: '请填写经纬度！',
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          hiddenpeople: props.values.hiddenpeople,
          hiddenthings: props.values.hiddenthings,
        }}
        title="隐藏信息"
      >
        <ProFormText
          name="hiddenpeople"
          width="md"
          label="被隐藏的人"
        />
        <ProFormText
          name="hiddenthings"
          width="md"
          label="被隐藏的事"
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          operator: props.values.operator,
        }}
        title="操作人"
      >
        <ProFormSelect
          name="operator"
          label="操作人"
          width="md"
          options={xlk}
          rules={[
            {
              required: true,
              message: '请填写经纬度！',
            },
          ]}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
