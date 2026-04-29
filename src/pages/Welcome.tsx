import {PageContainer, ProCard} from '@ant-design/pro-components';
import {Alert, Card} from 'antd';
import React from 'react';
// import styles from './Welcome.less';

// const CodePreview: React.FC = ({ children }) => (
//   <pre className={styles.pre}>
//     <code>
//       <Typography.Text copyable>{children}</Typography.Text>
//     </code>
//   </pre>
// );


const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'目前该模板无错误，拥有完善的登录、退出与user的mock数据，所有接口添加项目名，去掉用户图标、logo，保留用户名称。'}
          type="success"
          showIcon
          // banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <ProCard bordered>
            <ProCard style={{maxWidth: 150, marginRight: 50, backgroundColor: "blue"}} hoverable bordered
            tooltip="队伍大监督管理系统"
            >
              跳转至tablelist
            </ProCard>
        </ProCard>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
