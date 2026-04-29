// import React, {useState, useEffect} from 'react';
// import {Button} from 'antd';
import {
  ProFormText,
  ProFormSelect,
  StepsForm,
} from '@ant-design/pro-form';
import type {TableListItem} from '../data';
import {ProFormGroup} from "@ant-design/pro-components";
import React, {useState} from "react";
import {Modal} from "antd";
// import {ModalProps} from "antd";
// import {messageget} from "@/services/ant-design-pro/messageget";

export type FormValueType = {
  sbbm?: string;
  sbmc?: string;
  sbcs?: string;
  xzqh?: string;
  jkdlx?: string;
  sbxh?: string;
  dwsc?: string;
  ipv4dz?: string;
  ipv6dz?: string;
  macdz?: string;
  sxjlx?: string;
  sxjgnlx?: string;
  bgsx?: string;
  sxjbmgs?: string;
  dyccsbip?: string;
  dyccsbtd?: string;
  azdz?: string;
  jd?: string;
  wd?: string;
  sxjwzlx?: string;
  jsfx?: string;
  sxjcjyszpurl?: string;
  lwsx?: string;
  ssxqgajg?: string;
  azsj?: string;
  gldw?: string;
  gldwlxfs?: string;
  lxhtpbcts?: string;
  sbzt?: string;
  ssbmhy?: string;
  sptpfbl?: string;
  spxhlx?: string;
  sfdwgx?: string;
  sfjrsjpt?: string;
  jpbh?: string;
  jsyylb?: string;
  azgd?: string;
  ksjl?: string;
  dwmk?: string;
  csbh?: string;
  csmc?: string;
  bwlx?: string;
  crfx?: string;
} & Partial<TableListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void | true>;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  // const [csmcdisabled,setCsmcdisabled]=useState<boolean>(true)
  // const [csmcdisabled,setCsmcdisabled]=useState<boolean>(true)
  const [sbbmdisabled, setSbbmdisableddisabled] = useState<boolean>(true)
  const [sbmcxdisabled, setSbmcdisableddisabled] = useState<boolean>(true)
  const [sbcsdisabled, setSbcsdisableddisabled] = useState<boolean>(true)
  const [xzqhdisabled, setXzqhdisableddisabled] = useState<boolean>(true)
  const [jkdlxdisabled, setJkdlxdisableddisabled] = useState<boolean>(true)
  const [sbxhdisabled, setSbxhdisableddisabled] = useState<boolean>(true)
  const [dwscdisabled, setDwscdisableddisabled] = useState<boolean>(true)
  const [ipv4dzdisabled, setIpv4dzdisableddisabled] = useState<boolean>(true)
  const [ipv6dzdisabled, setIpv6dzdisableddisabled] = useState<boolean>(true)
  const [macdzdisabled, setMacdzdisableddisabled] = useState<boolean>(true)
  const [sxjlxdisabled, setSxjlxdisableddisabled] = useState<boolean>(true)
  const [sxjgnlxdisabled, setSxjgnlxdisableddisabled] = useState<boolean>(true)
  const [bgsxdisabled, setBgsxdisableddisabled] = useState<boolean>(true)
  const [sxjbmgsdisabled, setSxjbmgsdisableddisabled] = useState<boolean>(true)
  const [dyccsbipdisabled, setDdyccsbipdisableddisabled] = useState<boolean>(true)
  const [dyccsbtddisabled, setDyccsbtddisableddisabled] = useState<boolean>(true)
  const [azdzdisabled, setAzdzdisableddisabled] = useState<boolean>(true)
  const [jddisabled, setJddisableddisabled] = useState<boolean>(true)
  const [wddisabled, setWddisableddisabled] = useState<boolean>(true)
  const [sxjwzlxdisabled, setSxjwzlxdisableddisabled] = useState<boolean>(true)
  const [jsfxdisabled, setJsfxdisableddisabled] = useState<boolean>(true)
  const [sxjcjyszpurldisabled, setSxjcjyszpurldisableddisabled] = useState<boolean>(true)
  const [lwsxdisabled, setLwsxdisableddisabled] = useState<boolean>(true)
  const [ssxqgajgdisabled, setSsxqgajgdisableddisabled] = useState<boolean>(true)
  const [azsjdisabled, setAzsjdisableddisabled] = useState<boolean>(true)
  const [gldwdisabled, setGldwdisableddisabled] = useState<boolean>(true)
  const [gldwlxfsdisabled, setGldwlxfsdisableddisabled] = useState<boolean>(true)
  const [lxhtpbctsdisabled, setLxhtpbctsdisableddisabled] = useState<boolean>(true)
  const [sbztdisabled, setSbztdisabled] = useState<boolean>(true)
  const [ssbmhydisabled, setSsbmhydisabled] = useState<boolean>(true)
  const [sptpfbldisabled, setSptpfbldisabled] = useState<boolean>(true)
  const [spxhlxdisabled, setSpxhlxdisabled] = useState<boolean>(true)
  const [sfdwgxdisabled, setSfdwgxdisabled] = useState<boolean>(true)
  const [sfjrsjptdisabled, setSfjrsjptdisabled] = useState<boolean>(true)
  const [jpbhdisabled, setJpbhdisabled] = useState<boolean>(true)
  const [jsyylbdisabled, setJsyylbdisabled] = useState<boolean>(true)
  const [azgddisabled, setAzgddisabled] = useState<boolean>(true)
  const [ksjldisabled, setKsjldisabled] = useState<boolean>(true)
  const [dwmkdisabled, setDwmkdisabled] = useState<boolean>(true)
  const [csbhdisabled, setCsbhdisabled] = useState<boolean>(true)
  const [csmcdisabled, setCsmcdisabled] = useState<boolean>(true)
  const [bwlxdisabled, setBwlxdisabled] = useState<boolean>(true)
  const [crfxdisabled, setCrfxdisabled] = useState<boolean>(true)
  const [current, setCurrent] = useState(0)

  return (
    <StepsForm
      // submitter={{
      //   setCurrent(0)
      // }}
      onFormFinish={() => {
        setCurrent(0)
        setSbbmdisableddisabled(true);
        setSbmcdisableddisabled(true);
        setSbcsdisableddisabled(true);
        setXzqhdisableddisabled(true);
        setJkdlxdisableddisabled(true);
        setSbxhdisableddisabled(true);
        setDwscdisableddisabled(true);
        setIpv4dzdisableddisabled(true);
        setIpv6dzdisableddisabled(true);
        setMacdzdisableddisabled(true);
        setSxjlxdisableddisabled(true);
        setSxjgnlxdisableddisabled(true);
        setBgsxdisableddisabled(true);
        setSxjbmgsdisableddisabled(true);
        setDdyccsbipdisableddisabled(true);
        setDyccsbtddisableddisabled(true);
        setAzdzdisableddisabled(true);
        setJddisableddisabled(true);
        setWddisableddisabled(true);
        setSxjwzlxdisableddisabled(true);
        setJsfxdisableddisabled(true);
        setSxjcjyszpurldisableddisabled(true);
        setLwsxdisableddisabled(true);
        setSsxqgajgdisableddisabled(true);
        setAzsjdisableddisabled(true);
        setGldwdisableddisabled(true);
        setGldwlxfsdisableddisabled(true);
        setLxhtpbctsdisableddisabled(true);
        setSbztdisabled(true);
        setSsbmhydisabled(true);
        setSptpfbldisabled(true);
        setSpxhlxdisabled(true);
        setSfdwgxdisabled(true);
        setSfjrsjptdisabled(true);
        setJpbhdisabled(true);
        setJsyylbdisabled(true);
        setAzgddisabled(true);
        setKsjldisabled(true);
        setDwmkdisabled(true);
        setCsbhdisabled(true);
        setCsmcdisabled(true);
        setBwlxdisabled(true);
        setCrfxdisabled(true);

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
              setCurrent(0);
              setSbbmdisableddisabled(true);
              setSbmcdisableddisabled(true);
              setSbcsdisableddisabled(true);
              setXzqhdisableddisabled(true);
              setJkdlxdisableddisabled(true);
              setSbxhdisableddisabled(true);
              setDwscdisableddisabled(true);
              setIpv4dzdisableddisabled(true);
              setIpv6dzdisableddisabled(true);
              setMacdzdisableddisabled(true);
              setSxjlxdisableddisabled(true);
              setSxjgnlxdisableddisabled(true);
              setBgsxdisableddisabled(true);
              setSxjbmgsdisableddisabled(true);
              setDdyccsbipdisableddisabled(true);
              setDyccsbtddisableddisabled(true);
              setAzdzdisableddisabled(true);
              setJddisableddisabled(true);
              setWddisableddisabled(true);
              setSxjwzlxdisableddisabled(true);
              setJsfxdisableddisabled(true);
              setSxjcjyszpurldisableddisabled(true);
              setLwsxdisableddisabled(true);
              setSsxqgajgdisableddisabled(true);
              setAzsjdisableddisabled(true);
              setGldwdisableddisabled(true);
              setGldwlxfsdisableddisabled(true);
              setLxhtpbctsdisableddisabled(true);
              setSbztdisabled(true);
              setSsbmhydisabled(true);
              setSptpfbldisabled(true);
              setSpxhlxdisabled(true);
              setSfdwgxdisabled(true);
              setSfjrsjptdisabled(true);
              setJpbhdisabled(true);
              setJsyylbdisabled(true);
              setAzgddisabled(true);
              setKsjldisabled(true);
              setDwmkdisabled(true);
              setCsbhdisabled(true);
              setCsmcdisabled(true);
              setBwlxdisabled(true);
              setCrfxdisabled(true);
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
        initialValues={{
          sbbm: props.values.sbbm,
          sbmc: props.values.sbmc,
          sbcs: props.values.sbcs,
          xzqh: props.values.xzqh,
          jkdlx: props.values.jkdlx,
          sbxh: props.values.sbxh,
          dwsc: props.values.dwsc,
          ipv4dz: props.values.ipv4dz,
          ipv6dz: props.values.ipv6dz,
          macdz: props.values.macdz,
          sxjlx: props.values.sxjlx,
          sxjgnlx: props.values.sxjgnlx,
          bgsx: props.values.bgsx,
          sxjbmgs: props.values.sxjbmgs,
          dyccsbip: props.values.dyccsbip,
          dyccsbtd: props.values.dyccsbtd,
          azdz: props.values.azdz,
          jd: props.values.jd,
          wd: props.values.wd,
          sxjwzlx: props.values.sxjwzlx,
          jsfx: props.values.jsfx,
          sxjcjyszpurl: props.values.sxjcjyszpurl,
          lwsx: props.values.lwsx,
          ssxqgajg: props.values.ssxqgajg,
          azsj: props.values.azsj,
          gldw: props.values.gldw,
          gldwlxfs: props.values.gldwlxfs,
          lxhtpbcts: props.values.lxhtpbcts,
          sbzt: props.values.sbzt,
          ssbmhy: props.values.ssbmhy,
          sptpfbl: props.values.sptpfbl,
          spxhlx: props.values.spxhlx,
          sfdwgx: props.values.sfdwgx,
          sfjrsjpt: props.values.sfjrsjpt,
          jpbh: props.values.jpbh,
          jsyylb: props.values.jsyylb,
          azgd: props.values.azgd,
          ksjl: props.values.ksjl,
          dwmk: props.values.dwmk,
          csbh: props.values.csbh,
          csmc: props.values.csmc,
          bwlx: props.values.bwlx,
          crfx: props.values.crfx,
        }}
        title="详细信息"
      >
        <ProFormGroup>
          <ProFormText
            label="请输入设备编码（20位）"
            rules={[
              {
                required: true,
                message: '请输入设备编码（20位）',
              },
            ]}
            width="sm"
            name="sbbm"
            placeholder="请输入设备编码（20位）"
            disabled={sbbmdisabled}
            addonAfter={<a
              onClick={() => {
                if (sbbmdisabled === false) {
                  setSbbmdisableddisabled(true)
                } else if (sbbmdisabled === true) {
                  setSbbmdisableddisabled(false)
                }
              }}
            >
              {sbbmdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入设备名称"
            rules={[
              {
                required: true,
                message: '请输入设备名称！',
              },
            ]}
            width="sm"
            name="sbmc"
            placeholder="请输入设备名称"
            disabled={sbmcxdisabled}
            addonAfter={<a
              onClick={() => {
                if (sbmcxdisabled === false) {
                  setSbmcdisableddisabled(true)
                } else if (sbmcxdisabled === true) {
                  setSbmcdisableddisabled(false)
                }
              }}
            >
              {sbmcxdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormSelect
            label="请选择设备厂商"
            rules={[
              {
                required: true,
                message: '请选择设备厂商！',
              },
            ]}
            width="sm"
            name="sbcs"
            placeholder="请选择设备厂商"
            options={[
              {
                value: '海康威视',
                label: '海康威视',
              },
              {
                value: '大华',
                label: '大华',
              },
              {
                value: '天地伟业',
                label: '天地伟业',
              },
              {
                value: '科达',
                label: '科达',
              },
              {
                value: '安讯士',
                label: '安讯士',
              },
              {
                value: '博世',
                label: '博世',
              },
              {
                value: '亚安',
                label: '亚安',
              },
              {
                value: '英飞拓',
                label: '英飞拓',
              },
              {
                value: '宇视',
                label: '宇视',
              },
              {
                value: '海信',
                label: '海信',
              },
              {
                value: '明景',
                label: '明景',
              },
              {
                value: '联想',
                label: '联想',
              },
              {
                value: '中兴',
                label: '中兴',
              },
              {
                value: '派尔高',
                label: '派尔高',
              },
              {
                value: 'SECUBEST',
                label: 'SECUBEST',
              },
              {
                value: '索尼',
                label: '索尼',
              },
              {
                value: '松下',
                label: '松下',
              },
              {
                value: '艾立克',
                label: '艾立克',
              },
              {
                value: '博康智能',
                label: '博康智能',
              },
              {
                value: '华为',
                label: '华为',
              },
              {
                value: '杰迈',
                label: '杰迈',
              },
              {
                value: '巴斯勒',
                label: '巴斯勒',
              },
              {
                value: '依图',
                label: '依图',
              },
              {
                value: '其他',
                label: '其他',
              },
              {
                value: '中星电子',
                label: '中星电子',
              },
              {
                value: '宝康',
                label: '宝康',
              },
              {
                value: '动力盈科',
                label: '动力盈科',
              },
            ]}
            disabled={sbcsdisabled}
            addonAfter={<a
              onClick={() => {
                if (sbcsdisabled === false) {
                  setSbcsdisableddisabled(true)
                } else if (sbcsdisabled === true) {
                  setSbcsdisableddisabled(false)
                }
              }}
            >
              {sbcsdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormText
            label="请输入行政区划"
            rules={[
              {
                required: true,
                message: '请输入行政区划！',
              },
            ]}
            width="sm"
            name="xzqh"
            placeholder="请输入行政区划"
            disabled={xzqhdisabled}
            addonAfter={<a
              onClick={() => {
                if (xzqhdisabled === false) {
                  setXzqhdisableddisabled(true)
                } else if (xzqhdisabled === true) {
                  setXzqhdisableddisabled(false)
                }
              }}
            >
              {xzqhdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormSelect
            label="请选择监控点类型"
            rules={[
              {
                required: true,
                message: '请选择监控点类型！',
              },
            ]}
            width="sm"
            name="jkdlx"
            placeholder="请选择监控点类型"
            options={[
              {
                value: '一类视频',
                label: '一类视频',
              },
              {
                value: '二类视频',
                label: '二类视频',
              },
              {
                value: '三类视频',
                label: '三类视频',
              },
              {
                value: '公安内部',
                label: '公安内部',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
            disabled={jkdlxdisabled}
            addonAfter={<a
              onClick={() => {
                if (jkdlxdisabled === false) {
                  setJkdlxdisableddisabled(true)
                } else if (jkdlxdisabled === true) {
                  setJkdlxdisableddisabled(false)
                }
              }}
            >
              {jkdlxdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入设备型号"
            rules={[
              {
                required: true,
                message: '请输入设备型号！',
              },
            ]}
            width="sm"
            name="sbxh"
            placeholder="请输入设备型号"
            disabled={sbxhdisabled}
            addonAfter={<a
              onClick={() => {
                if (sbxhdisabled === false) {
                  setSbxhdisableddisabled(true)
                } else if (sbxhdisabled === true) {
                  setSbxhdisableddisabled(false)
                }
              }}
            >
              {sbxhdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormText
            label="请输入点位俗称"
            rules={[
              {
                required: true,
                message: '请输入点位俗称！',
              },
            ]}
            width="sm"
            name="dwsc"
            placeholder="请输入点位俗称"
            disabled={dwscdisabled}
            addonAfter={<a
              onClick={() => {
                if (dwscdisabled === false) {
                  setDwscdisableddisabled(true)
                } else if (dwscdisabled === true) {
                  setDwscdisableddisabled(false)
                }
              }}
            >
              {dwscdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入IPV4地址"
            width="sm"
            name="ipv4dz"
            placeholder="请输入IPV4地址"
            disabled={ipv4dzdisabled}
            addonAfter={<a
              onClick={() => {
                if (ipv4dzdisabled === false) {
                  setIpv4dzdisableddisabled(true)
                } else if (ipv4dzdisabled === true) {
                  setIpv4dzdisableddisabled(false)
                }
              }}
            >
              {ipv4dzdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入IPV6地址"
            width="sm"
            name="ipv6dz"
            placeholder="请输入IPV6地址"
            disabled={ipv6dzdisabled}
            addonAfter={<a
              onClick={() => {
                if (ipv6dzdisabled === false) {
                  setIpv6dzdisableddisabled(true)
                } else if (ipv6dzdisabled === true) {
                  setIpv6dzdisableddisabled(false)
                }
              }}
            >
              {ipv6dzdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormText
            label="请输入MAC地址"
            width="sm"
            name="macdz"
            placeholder="请输入MAC地址"
            disabled={macdzdisabled}
            addonAfter={<a
              onClick={() => {
                if (macdzdisabled === false) {
                  setMacdzdisableddisabled(true)
                } else if (macdzdisabled === true) {
                  setMacdzdisableddisabled(false)
                }
              }}
            >
              {macdzdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormSelect
            label="请选择摄像机类型"
            rules={[
              {
                required: true,
                message: '请选择摄像机类型！',
              },
            ]}
            width="sm"
            name="sxjlx"
            placeholder="请选择摄像机类型"
            options={[
              {
                value: '球机',
                label: '球机',
              },
              {
                value: '半球',
                label: '半球',
              },
              {
                value: '固定枪机',
                label: '固定枪机',
              },
              {
                value: '遥控枪机',
                label: '遥控枪机',
              },
              {
                value: '卡口枪机',
                label: '卡口枪机',
              },
              {
                value: '图片抓拍机(无视频)',
                label: '图片抓拍机(无视频)',
              },
              {
                value: '门禁',
                label: '门禁',
              },
              {
                value: '移动终端',
                label: '移动终端',
              },
              {
                value: '全景摄像机',
                label: '全景摄像机',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
            disabled={sxjlxdisabled}
            addonAfter={<a
              onClick={() => {
                if (sxjlxdisabled === false) {
                  setSxjlxdisableddisabled(true)
                } else if (sxjlxdisabled === true) {
                  setSxjlxdisableddisabled(false)
                }
              }}
            >
              {sxjlxdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormSelect
            label="请选择摄像机功能类型"
            width="sm"
            name="sxjgnlx"
            placeholder="请选择摄像机功能类型"
            options={[
              {
                value: '车辆识别',
                label: '车辆识别',
              },
              {
                value: '人脸识别',
                label: '人脸识别',
              },
              {
                value: '普通监控',
                label: '普通监控',
              },
              {
                value: '门禁',
                label: '门禁',
              },
              {
                value: '电子警察',
                label: '电子警察',
              },
              {
                value: '违停抓拍机',
                label: '违停抓拍机',
              },
              {
                value: '执法记录仪',
                label: '执法记录仪',
              },
              {
                value: '人体识别',
                label: '人体识别',
              },
              {
                value: '事件检测',
                label: '事件检测',
              },
              {
                value: '非机动车识别',
                label: '非机动车识别',
              },
              {
                value: '无人机',
                label: '无人机',
              },
              {
                value: '无线图传车',
                label: '无线图传车',
              },
              {
                value: '智能头盔',
                label: '智能头盔',
              },
              {
                value: '人证核验',
                label: '人证核验',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
            disabled={sxjgnlxdisabled}
            addonAfter={<a
              onClick={() => {
                if (sxjgnlxdisabled === false) {
                  setSxjgnlxdisableddisabled(true)
                } else if (sxjgnlxdisabled === true) {
                  setSxjgnlxdisableddisabled(false)
                }
              }}
            >
              {sxjgnlxdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormSelect
            label="请选择补光属性"
            width="sm"
            name="bgsx"
            placeholder="请选择补光属性"
            options={[
              {
                value: '无补光',
                label: '无补光',
              },
              {
                value: '红外补光',
                label: '红外补光',
              },
              {
                value: '白光补光',
                label: '白光补光',
              },
              {
                value: '其它补光',
                label: '其它补光',
              },
            ]}
            disabled={bgsxdisabled}
            addonAfter={<a
              onClick={() => {
                if (bgsxdisabled === false) {
                  setBgsxdisableddisabled(true)
                } else if (bgsxdisabled === true) {
                  setBgsxdisableddisabled(false)
                }
              }}
            >
              {bgsxdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormSelect
            label="请选择摄像机编码格式"
            rules={[
              {
                required: true,
                message: '请选择摄像机编码格式！',
              },
            ]}
            width="sm"
            name="sxjbmgs"
            placeholder="请选择摄像机编码格式"
            options={[
              {
                value: 'MPEG-4',
                label: 'MPEG-4',
              },
              {
                value: 'H.264',
                label: 'H.264',
              },
              {
                value: 'SVAC',
                label: 'SVAC',
              },
              {
                value: 'H.265',
                label: 'H.265',
              },
              {
                value: 'JPEG',
                label: 'JPEG',
              },
            ]}
            disabled={sxjbmgsdisabled}
            addonAfter={<a
              onClick={() => {
                if (sxjbmgsdisabled === false) {
                  setSxjbmgsdisableddisabled(true)
                } else if (sxjbmgsdisabled === true) {
                  setSxjbmgsdisableddisabled(false)
                }
              }}
            >
              {sxjbmgsdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入对应存储设备IP"
            width="sm"
            name="dyccsbip"
            placeholder="请输入对应存储设备IP"
            disabled={dyccsbipdisabled}
            addonAfter={<a
              onClick={() => {
                if (dyccsbipdisabled === false) {
                  setDdyccsbipdisableddisabled(true)
                } else if (dyccsbipdisabled === true) {
                  setDdyccsbipdisableddisabled(false)
                }
              }}
            >
              {dyccsbipdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormText
            label="请输入对应存储设备通道"
            width="sm"
            name="dyccsbtd"
            placeholder="请输入对应存储设备通道"
            disabled={dyccsbtddisabled}
            addonAfter={<a
              onClick={() => {
                if (dyccsbtddisabled === false) {
                  setDyccsbtddisableddisabled(true)
                } else if (dyccsbtddisabled === true) {
                  setDyccsbtddisableddisabled(false)
                }
              }}
            >
              {dyccsbtddisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入安装地址"
            rules={[
              {
                required: true,
                message: '请输入安装地址！',
              },
            ]}
            width="sm"
            name="azdz"
            placeholder="请输入安装地址"
            disabled={azdzdisabled}
            addonAfter={<a
              onClick={() => {
                if (azdzdisabled === false) {
                  setAzdzdisableddisabled(true)
                } else if (azdzdisabled === true) {
                  setAzdzdisableddisabled(false)
                }
              }}
            >
              {azdzdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入经度"
            rules={[
              {
                required: true,
                message: '请输入经度！',
              },
            ]}
            width="sm"
            name="jd"
            placeholder="请输入经度"
            disabled={jddisabled}
            addonAfter={<a
              onClick={() => {
                if (jddisabled === false) {
                  setJddisableddisabled(true)
                } else if (jddisabled === true) {
                  setJddisableddisabled(false)
                }
              }}
            >
              {jddisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormText
            label="请输入纬度"
            rules={[
              {
                required: true,
                message: '请输入纬度！',
              },
            ]}
            width="sm"
            name="wd"
            placeholder="请输入纬度"
            disabled={wddisabled}
            addonAfter={<a
              onClick={() => {
                if (wddisabled === false) {
                  setWddisableddisabled(true)
                } else if (wddisabled === true) {
                  setWddisableddisabled(false)
                }
              }}
            >
              {wddisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormSelect
            label="请选择摄像机位置类型"
            rules={[
              {
                required: true,
                message: '请选择摄像机位置类型！',
              },
            ]}
            width="sm"
            name="sxjwzlx"
            placeholder="请选择摄像机位置类型"
            options={[
              {
                value: '省市际道口及检查站',
                label: '省市际道口及检查站',
              },
              {
                value: '党政机关',
                label: '党政机关',
              },
              {
                value: '车站码头',
                label: '车站码头',
              },
              {
                value: '中心广场',
                label: '中心广场',
              },
              {
                value: '体育场馆',
                label: '体育场馆',
              },
              {
                value: '商业中心',
                label: '商业中心',
              },
              {
                value: '校园周边',
                label: '宗教场所',
              },
              {
                value: '校园周边',
                label: '校园周边',
              },
              {
                value: '治安复杂区域',
                label: '治安复杂区域',
              },
              {
                value: '交通干线',
                label: '交通干线',
              },
              {
                value: '医院周边',
                label: '医院周边',
              },
              {
                value: '金融机构周边',
                label: '金融机构周边',
              },
              {
                value: '危险物品场所周边',
                label: '危险物品场所周边',
              },
              {
                value: '博物馆展览馆',
                label: '博物馆展览馆',
              },
              {
                value: '重点水域、航道',
                label: '重点水域、航道',
              },
              {
                value: '停车场',
                label: '停车场',
              },
              {
                value: '治安卡口断面',
                label: '治安卡口断面',
              },
              {
                value: '封闭式住宅小区',
                label: '封闭式住宅小区',
              },
              {
                value: '开放式旧式里弄',
                label: '开放式住宅小区',
              },
              {
                value: '开放式旧式里弄',
                label: '开放式旧式里弄',
              },
              {
                value: '开放式农村民宅',
                label: '开放式农村民宅',
              },
              {
                value: '楼宇(单位)',
                label: '楼宇(单位)',
              },
              {
                value: '机场',
                label: '机场',
              },
              {
                value: '火车站',
                label: '火车站',
              },
              {
                value: '港口',
                label: '港口',
              },
              {
                value: '涉外场所',
                label: '涉外场所',
              },
              {
                value: '边境沿线',
                label: '边境沿线',
              },
              {
                value: '旅游景区',
                label: '旅游景区',
              },
              {
                value: '信访场所',
                label: '信访场所',
              },
              {
                value: '进博会核心区',
                label: '进博会核心区',
              },
              {
                value: '进博会警戒区',
                label: '进博会警戒区',
              },
              {
                value: '进博会控制区',
                label: '进博会控制区',
              },
              {
                value: '进博会疏导区',
                label: '进博会疏导区',
              },
            ]}
            disabled={sxjwzlxdisabled}
            addonAfter={<a
              onClick={() => {
                if (sxjwzlxdisabled === false) {
                  setSxjwzlxdisableddisabled(true)
                } else if (sxjwzlxdisabled === true) {
                  setSxjwzlxdisableddisabled(false)
                }
              }}
            >
              {sxjwzlxdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入监视方向"
            rules={[
              {
                required: true,
                message: '请输入监视方向！',
              },
            ]}
            width="sm"
            name="jsfx"
            placeholder="请输入监视方向"
            disabled={jsfxdisabled}
            addonAfter={<a
              onClick={() => {
                if (jsfxdisabled === false) {
                  setJsfxdisableddisabled(true)
                } else if (jsfxdisabled === true) {
                  setJsfxdisableddisabled(false)
                }
              }}
            >
              {jsfxdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormText
            label="请输入摄像机场景预设照片URL"
            width="sm"
            name="sxjcjyszpurl"
            placeholder="请输入摄像机场景预设照片URL"
            disabled={sxjcjyszpurldisabled}
            addonAfter={<a
              onClick={() => {
                if (sxjcjyszpurldisabled === false) {
                  setSxjcjyszpurldisableddisabled(true)
                } else if (sxjcjyszpurldisabled === true) {
                  setSxjcjyszpurldisableddisabled(false)
                }
              }}
            >
              {sxjcjyszpurldisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入联网属性"
            width="sm"
            name="lwsx"
            placeholder="请输入联网属性"
            disabled={lwsxdisabled}
            addonAfter={<a
              onClick={() => {
                if (lwsxdisabled === false) {
                  setLwsxdisableddisabled(true)
                } else if (lwsxdisabled === true) {
                  setLwsxdisableddisabled(false)
                }
              }}
            >
              {lwsxdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入所属辖区公安机关"
            rules={[
              {
                required: true,
                message: '请输入所属辖区公安机关！',
              },
            ]}
            width="sm"
            name="ssxqgajg"
            placeholder="请输入所属辖区公安机关"
            disabled={ssxqgajgdisabled}
            addonAfter={<a
              onClick={() => {
                if (ssxqgajgdisabled === false) {
                  setSsxqgajgdisableddisabled(true)
                } else if (ssxqgajgdisabled === true) {
                  setSsxqgajgdisableddisabled(false)
                }
              }}
            >
              {ssxqgajgdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormText
            label="请输入安装时间"
            rules={[
              {
                required: true,
                message: '请输入安装时间！',
              },
            ]}
            width="sm"
            name="azsj"
            placeholder="请输入安装时间"
            disabled={azsjdisabled}
            addonAfter={<a
              onClick={() => {
                if (azsjdisabled === false) {
                  setAzsjdisableddisabled(true)
                } else if (azsjdisabled === true) {
                  setAzsjdisableddisabled(false)
                }
              }}
            >
              {azsjdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入管理单位"
            rules={[
              {
                required: true,
                message: '请输入管理单位！',
              },
            ]}
            width="sm"
            name="gldw"
            placeholder="请输入管理单位"
            disabled={gldwdisabled}
            addonAfter={<a
              onClick={() => {
                if (gldwdisabled === false) {
                  setGldwdisableddisabled(true)
                } else if (gldwdisabled === true) {
                  setGldwdisableddisabled(false)
                }
              }}
            >
              {gldwdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入管理单位联系方式"
            rules={[
              {
                required: true,
                message: '请输入管理单位联系方式！',
              },
            ]}
            width="sm"
            name="gldwlxfs"
            placeholder="请输入管理单位联系方式"
            disabled={gldwlxfsdisabled}
            addonAfter={<a
              onClick={() => {
                if (gldwlxfsdisabled === false) {
                  setGldwlxfsdisableddisabled(true)
                } else if (gldwlxfsdisabled === true) {
                  setGldwlxfsdisableddisabled(false)
                }
              }}
            >
              {gldwlxfsdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormText
            label="请输入录像或图片保存天数"
            rules={[
              {
                required: true,
                message: '请输入录像或图片保存天数！',
              },
            ]}
            width="sm"
            name="lxhtpbcts"
            placeholder="请输入录像或图片保存天数"
            disabled={lxhtpbctsdisabled}
            addonAfter={<a
              onClick={() => {
                if (lxhtpbctsdisabled === false) {
                  setLxhtpbctsdisableddisabled(true)
                } else if (lxhtpbctsdisabled === true) {
                  setLxhtpbctsdisableddisabled(false)
                }
              }}
            >
              {lxhtpbctsdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入设备状态"
            rules={[
              {
                required: true,
                message: '请输入设备状态！',
              },
            ]}
            width="sm"
            name="sbzt"
            placeholder="请输入设备状态"
            disabled={sbztdisabled}
            addonAfter={<a
              onClick={() => {
                if (sbztdisabled === false) {
                  setSbztdisabled(true)
                } else if (sbztdisabled === true) {
                  setSbztdisabled(false)
                }
              }}
            >
              {sbztdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormSelect
            label="请选择所属部门/行业"
            width="sm"
            name="ssbmhy"
            placeholder="请选择所属部门/行业"
            options={[
              {
                value: '公安机关',
                label: '公安机关',
              },
              {
                value: '环保部门',
                label: '环保部门',
              },
              {
                value: '文博部门',
                label: '文博部门',
              },
              {
                value: '医疗部门',
                label: '医疗部门',
              },
              {
                value: '旅游管理',
                label: '旅游管理',
              },
              {
                value: '新闻广电',
                label: '新闻广电',
              },
              {
                value: '食品医药监督管理部门',
                label: '食品医药监督管理部门',
              },
              {
                value: '教育管理部门',
                label: '教育管理部门',
              },
              {
                value: '检察院',
                label: '检察院',
              },
              {
                value: '法院',
                label: '法院',
              },
              {
                value: '金融部门',
                label: '金融部门',
              },
              {
                value: '交通部门',
                label: '交通部门',
              },
              {
                value: '住房和城乡建设部门',
                label: '住房和城乡建设部门',
              },
              {
                value: '水利部门',
                label: '水利部门',
              },
              {
                value: '林业部门',
                label: '林业部门',
              },
              {
                value: '安全生产监督部门',
                label: '安全生产监督部门',
              },
              {
                value: '市政市容委',
                label: '市政市容委',
              },
              {
                value: '国土局',
                label: '国土局',
              },
              {
                value: '综治办',
                label: '综治办',
              },
              {
                value: '公安机关-交警支队',
                label: '公安机关-交警总队',
              },
              {
                value: '公安机关-交警支队',
                label: '公安机关-交警支队',
              },
              {
                value: '公安机关-治安总队',
                label: '公安机关-治安总队',
              },
            ]}
            disabled={ssbmhydisabled}
            addonAfter={<a
              onClick={() => {
                if (ssbmhydisabled === false) {
                  setSsbmhydisabled(true)
                } else if (ssbmhydisabled === true) {
                  setSsbmhydisabled(false)
                }
              }}
            >
              {ssbmhydisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormText
            label="请输入视频/图片分辨率"
            rules={[
              {
                required: true,
                message: '请输入视频/图片分辨率！',
              },
            ]}
            width="sm"
            name="sptpfbl"
            placeholder="请输入视频/图片分辨率"
            disabled={sptpfbldisabled}
            addonAfter={<a
              onClick={() => {
                if (sptpfbldisabled === false) {
                  setSptpfbldisabled(true)
                } else if (sptpfbldisabled === true) {
                  setSptpfbldisabled(false)
                }
              }}
            >
              {sptpfbldisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入视频信号类型"
            rules={[
              {
                required: true,
                message: '请输入视频信号类型！',
              },
            ]}
            width="sm"
            name="spxhlx"
            placeholder="请输入视频信号类型"
            disabled={spxhlxdisabled}
            addonAfter={<a
              onClick={() => {
                if (spxhlxdisabled === false) {
                  setSpxhlxdisabled(true)
                } else if (spxhlxdisabled === true) {
                  setSpxhlxdisabled(false)
                }
              }}
            >
              {spxhlxdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入是否对外共享"
            rules={[
              {
                required: true,
                message: '请输入是否对外共享！',
              },
            ]}
            width="sm"
            name="sfdwgx"
            placeholder="请输入是否对外共享"
            disabled={sfdwgxdisabled}
            addonAfter={<a
              onClick={() => {
                if (sfdwgxdisabled === false) {
                  setSfdwgxdisabled(true)
                } else if (sfdwgxdisabled === true) {
                  setSfdwgxdisabled(false)
                }
              }}
            >
              {sfdwgxdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormText
            label="请输入是否接入三级平台"
            rules={[
              {
                required: true,
                message: '请输入是否接入三级平台！',
              },
            ]}
            width="sm"
            name="sfjrsjpt"
            placeholder="请输入是否接入三级平台"
            disabled={sfjrsjptdisabled}
            addonAfter={<a
              onClick={() => {
                if (sfjrsjptdisabled === false) {
                  setSfjrsjptdisabled(true)
                } else if (sfjrsjptdisabled === true) {
                  setSfjrsjptdisabled(false)
                }
              }}
            >
              {sfjrsjptdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入键盘编号"
            width="sm"
            name="jpbh"
            placeholder="请输入键盘编号"
            disabled={jpbhdisabled}
            addonAfter={<a
              onClick={() => {
                if (jpbhdisabled === false) {
                  setJpbhdisabled(true)
                } else if (jpbhdisabled === true) {
                  setJpbhdisabled(false)
                }
              }}
            >
              {jpbhdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormSelect
            label="请选择建设应用类别"
            rules={[
              {
                required: true,
                message: '请选择建设应用类别！',
              },
            ]}
            width="sm"
            name="jsyylb"
            placeholder="请选择建设应用类别"
            options={[
              {
                value: '公安出资建设',
                label: '公安出资建设',
              },
              {
                value: '社会单位出资建设公安租赁',
                label: '社会单位出资建设公安租赁',
              },
              {
                value: '区县街镇出资建设公安使用',
                label: '区县街镇出资建设公安使用',
              },
              {
                value: '复接公安其他图像',
                label: '复接公安其他图像',
              },
              {
                value: '社会单位复接',
                label: '社会单位复接',
              },
              {
                value: '社会单位联网',
                label: '社会单位联网',
              },
              {
                value: '移动监控',
                label: '移动监控',
              },
              {
                value: '指挥室、会议室、监控室内部',
                label: '指挥室、会议室、监控室内部',
              },
              {
                value: '实验用',
                label: '实验用',
              },
              {
                value: '智能交通',
                label: '智能交通',
              },
            ]}
            disabled={jsyylbdisabled}
            addonAfter={<a
              onClick={() => {
                if (jsyylbdisabled === false) {
                  setJsyylbdisabled(true)
                } else if (jsyylbdisabled === true) {
                  setJsyylbdisabled(false)
                }
              }}
            >
              {jsyylbdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormText
            label="请输入安装高度（单位米）"
            width="sm"
            name="azgd"
            disabled={azgddisabled}
            placeholder="请输入安装高度（单位米）"
            rules={[
              {
                required: true,
                message: '请输入安装高度（单位米）！',
              },
            ]}
            addonAfter={<a
              onClick={() => {
                if (azgddisabled === false) {
                  setAzgddisabled(true)
                } else if (azgddisabled === true) {
                  setAzgddisabled(false)
                }
              }}
            >
              {azgddisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入可视距离（单位米）"
            width="sm"
            name="ksjl"
            disabled={ksjldisabled}
            placeholder="请输入可视距离（单位米）"
            addonAfter={<a
              onClick={() => {
                if (ksjldisabled === false) {
                  setKsjldisabled(true)
                } else if (ksjldisabled === true) {
                  setKsjldisabled(false)
                }
              }}
            >
              {ksjldisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormSelect
            label="请选择定位模块"
            rules={[
              {
                required: true,
                message: '请选择定位模块！',
              },
            ]}
            width="sm"
            name="dwmk"
            disabled={dwmkdisabled}
            placeholder="请选择定位模块"
            options={[
              {
                value: '无',
                label: '无',
              },
              {
                value: 'GPS',
                label: 'GPS',
              },
              {
                value: 'BDS',
                label: 'BDS',
              },
            ]}
            addonAfter={<a
              onClick={() => {
                if (dwmkdisabled === false) {
                  setDwmkdisabled(true)
                } else if (dwmkdisabled === true) {
                  setDwmkdisabled(false)
                }
              }}
            >
              {dwmkdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormText
            label="请输入场所编号"
            width="sm"
            name="csbh"
            disabled={csbhdisabled}
            placeholder="请输入场所编号"
            addonAfter={<a
              onClick={() => {
                if (csbhdisabled === false) {
                  setCsbhdisabled(true)
                } else if (csbhdisabled === true) {
                  setCsbhdisabled(false)
                }
              }}
            >
              {csbhdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormText
            label="请输入场所名称"
            width="sm"
            name="csmc"
            disabled={csmcdisabled}
            placeholder="请输入场所名称"
            addonAfter={<a
              onClick={() => {
                if (csmcdisabled === false) {
                  setCsmcdisabled(true)
                } else if (csmcdisabled === true) {
                  setCsmcdisabled(false)
                }
              }}
            >
              {csmcdisabled === true ? '修改' : '保存'}
            </a>}
          />
          <ProFormSelect
            label="请选择部位类型"
            width="sm"
            name="bwlx"
            disabled={bwlxdisabled}
            placeholder="请选择部位类型"
            options={[
              {
                value: '小区',
                label: '小区',
              },
              {
                value: '楼宇',
                label: '楼宇',
              },
              {
                value: '机动车库',
                label: '机动车库',
              },
              {
                value: '非机动车库',
                label: '非机动车库',
              },
              {
                value: '公共(基础)设施',
                label: '公共(基础)设施',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
            addonAfter={<a
              onClick={() => {
                if (bwlxdisabled === false) {
                  setBwlxdisabled(true)
                } else if (bwlxdisabled === true) {
                  setBwlxdisabled(false)
                }
              }}
            >
              {bwlxdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>
        <ProFormGroup>
          <ProFormSelect
            label="请选择出入方向"
            width="sm"
            name="crfx"
            placeholder="请选择出入方向"
            options={[
              {
                value: '进',
                label: '进',
              },
              {
                value: '出',
                label: '出',
              },
              {
                value: '其他',
                label: '其他',
              },
            ]}
            disabled={crfxdisabled}
            addonAfter={<a
              onClick={() => {
                if (crfxdisabled === false) {
                  setCrfxdisabled(true)
                } else if (crfxdisabled === true) {
                  setCrfxdisabled(false)
                }
              }}
            >
              {crfxdisabled === true ? '修改' : '保存'}
            </a>}
          />
        </ProFormGroup>

      </StepsForm.StepForm>
      <StepsForm.StepForm
        title="确认修改"
      >

      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
