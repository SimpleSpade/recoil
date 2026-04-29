import { atom } from 'recoil';

// 用户信息
export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: {
    username: '张三',
    score: 10
  },
  effects: [
    ({node, onSet}) => {
      // 设置数据时，监控 atom 的变化
      onSet((newValue: any, oldValue: any) => {
        console.debug(`>>> ${node.key}`, 'new:', newValue, 'old:', oldValue);
      });
    },
  ],
  // dangerouslyAllowMutability: true
});



