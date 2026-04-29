
import {Button} from "antd";
import {useRecoilState} from "recoil";
import { produce } from 'immer';
import {tableState} from "@/store";

function ButtonTest(){
  const [tableNum,setTableNum]=useRecoilState(tableState.tablelistNumberAtom)
  const changeNum = () => {
  const newUserNum = produce(tableNum, draft => {
      // eslint-disable-next-line no-param-reassign
      draft.num += 1;
    });
    setTableNum(newUserNum);
  };

  return(
    <Button
      onClick={changeNum}
    >
      测试按钮
    </Button>
  )
}
export default ButtonTest;
