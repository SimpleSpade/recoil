import {Button} from "antd";
import {useRecoilState} from "recoil";
import {produce} from 'immer';
import {tableState} from "@/store";
import {ProCard} from "@ant-design/pro-components";
import {useEffect} from "react";

function ButtonTest() {
  const [tableNum, setTableNum] = useRecoilState(tableState.tablelistNumberAtom)
  const [dataShow, setDataShow] = useRecoilState(tableState.dataAtom)
  const changeaddNum = () => {
    const newAddNum = produce(tableNum, draft => {
      // eslint-disable-next-line no-param-reassign
      draft.num += 1;
    });
    setTableNum(newAddNum);
  };
  const changeNum = () => {
    const newNum = produce(tableNum, draft => {
      // eslint-disable-next-line no-param-reassign
      draft.num -= 1;
    });
    setTableNum(newNum);
  };
  useEffect(()=>{

    const newData = produce(dataShow, draft => {
      // eslint-disable-next-line no-param-reassign
      draft.data = '57575757';
      draft.id = '新id';
    });
    setDataShow(newData);

  },[])


  return (
    <ProCard>
      <Button
        onClick={changeaddNum}
      >
        测试加按钮
      </Button>
      <Button
        onClick={changeNum}
      >
        测试减按钮
      </Button>
    </ProCard>

  )
}

export default ButtonTest;
