// import React, {useState, useEffect} from 'react';
// import {Button} from 'antd';
import {
  StepsForm,
} from '@ant-design/pro-form';
import type {ListItem} from '../data';
import {ProFormGroup} from "@ant-design/pro-components";
import React, {useState} from "react";
import {Modal,List } from "antd";
// import {ModalProps} from "antd";
// import {messageget} from "@/services/ant-design-pro/messageget";

export type FormValueType = {
  old?: any;
  new?: any;
} & Partial<ListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void | true>;
  updateModalVisible: boolean;
  values: Partial<ListItem>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [olddata,setOlddata]=useState<any>([])
  const [newdata,setNewdata]=useState<any>([])
  const [current, setCurrent] = useState(0)

  return (
    <StepsForm
      // submitter={{
      //   setCurrent(0)
      // }}
      onFormFinish={() => {
        setCurrent(0)
      }}
      current={current}
      stepsProps={{
        size: 'small',
      }}
      onCurrentChange={(num) => {
        setCurrent(num)
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={940}
            bodyStyle={{
              padding: '32px 40px 48px',
            }}
            destroyOnClose
            title="信息修改"
            visible={props.updateModalVisible}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
              setCurrent(0)
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}
      // destroyOnClose={true}

    >
      <StepsForm.StepForm
        // initialValues={{
        //   old: props.values.old,
        //   new: props.values.new,
        // }}
        title="详细信息"
      >
        <ProFormGroup>
          <List
            header={'原有数据'}
            dataSource={olddata}
          />
          <List
            header={'带审批数据'}
            dataSource={newdata}
          />

        </ProFormGroup>

      </StepsForm.StepForm>
      <StepsForm.StepForm
        title="确认审批"
      >
        如确认审批无误请提交
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
