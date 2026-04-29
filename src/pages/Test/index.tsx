import {ProCard} from "@ant-design/pro-components";
import {RecoilRoot} from "recoil";
import ButtonTest from "@/pages/TableList/ButtonTest";
import ShowTest from "@/pages/TableList/ShowTest";

function Test() {
  return (
    <ProCard>
      <RecoilRoot>
        <ShowTest/>
        <RecoilRoot>
          <ButtonTest/>
          <ShowTest/>
          <RecoilRoot>
            <ButtonTest/>
            <ShowTest/>
          </RecoilRoot>
          <RecoilRoot>
            <ButtonTest/>
            <ShowTest/>
          </RecoilRoot>
        </RecoilRoot>
      </RecoilRoot>
    </ProCard>
  )
}

export default Test
