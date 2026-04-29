// import {Button} from "antd";
import {useRecoilState} from "recoil";
import {tableState} from '../../store';
import {ProCard} from '@ant-design/pro-components';

function ShowTest() {
  const [tableNum] = useRecoilState(tableState.tablelistNumberAtom);
  const [dataShow] = useRecoilState(tableState.dataAtom)
  return (

    <ProCard bordered>
      {tableNum.num}+{dataShow.data}+{dataShow.id}
    </ProCard>
  )
}

export default ShowTest;
