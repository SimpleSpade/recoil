// import {PageContainer} from '@ant-design/pro-layout';
import ProCard from "@ant-design/pro-card";
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
    <ProCard layout="center" bodyStyle={{color:"blue",}} style={{backgroundColor: "white",height:"110%"}}>
      <h1 style={{color:"blue",fontSize:'90px'}}>欢迎使用队伍"大监督"管理系统</h1>
    </ProCard>
  );
};
export default Welcome;
