// import {Button} from "antd";
import {useRecoilState} from "recoil";
import {tableState} from '../../store';
import {ProCard} from '@ant-design/pro-components';

function ShowTest() {
  const [tableNum] = useRecoilState(tableState.tablelistNumberAtom)
  return (

    <ProCard bordered>
      {tableNum.num}
    </ProCard>
  )
}

export default ShowTest;
