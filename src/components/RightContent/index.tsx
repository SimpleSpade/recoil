// import { QuestionCircleOutlined } from '@ant-design/icons';
import {Button, Space} from 'antd';
import React, {useEffect, useState} from 'react';
import {useModel} from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';
import {Access} from 'umi';

export type SiderTheme = 'light' | 'dark';
// import { FloatButton } from 'antd';

const GlobalHeaderRight: React.FC = () => {
  const {initialState} = useModel('@@initialState');
  // @ts-ignore
  const {currentUser} = initialState;
  const [dapingdisplay, setDapingdisplay] = useState<boolean>(false)
  useEffect(() => {
    if (!initialState) {
      setDapingdisplay(false)
    } else {
      setDapingdisplay((currentUser.ifgotodaping))
    }
  }, []);


  if (!initialState || !initialState.settings) {
    return null;
  }

  const {navTheme, layout} = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  // if (currentUser){
  //   setDapingdisplay("none");
  // }

  return (
    <Space className={className}>
      <Access accessible={dapingdisplay}>
        <Button
          style={{marginRight: '100px'}}
          type="primary"
          ghost
          onClick={() => {
            window.open(`http://38.152.4.23:20032/#/?jwt=${localStorage.getItem('setAuthorization')}`)
          }}
        >
          大屏
        </Button>
      </Access>

      {/*<Button*/}
      {/*  style={{marginRight:'100px'}}*/}
      {/*  type="dashed"*/}
      {/*  ghost*/}
      {/*  onClick={()=>{*/}
      {/*    window.open('http://38.152.2.185:10004')*/}
      {/*  }}*/}
      {/*>*/}
      {/*  公安网大屏*/}
      {/*</Button>*/}
      {/*<HeaderSearch*/}
      {/*  className={`${styles.action} ${styles.search}`}*/}
      {/*  placeholder="站内搜索"*/}
      {/*  defaultValue="umi ui"*/}
      {/*  options={[*/}
      {/*    {*/}
      {/*      label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,*/}
      {/*      value: 'umi ui',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      label: <a href="next.ant.design">Ant Design</a>,*/}
      {/*      value: 'Ant Design',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      label: <a href="https://protable.ant.design/">Pro Table</a>,*/}
      {/*      value: 'Pro Table',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      label: <a href="https://prolayout.ant.design/">Pro Layout</a>,*/}
      {/*      value: 'Pro Layout',*/}
      {/*    },*/}
      {/*  ]} // onSearch={value => {*/}
      {/*  //   console.log('input', value);*/}
      {/*  // }}*/}
      {/*/>*/}
      {/*<span*/}
      {/*  className={styles.action}*/}
      {/*  onClick={() => {*/}
      {/*    window.open('https://pro.ant.design/docs/getting-started');*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <QuestionCircleOutlined />*/}
      {/*</span>*/}
      <Avatar/>
    </Space>
  );
};

export default GlobalHeaderRight;
