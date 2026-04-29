export type TableListItem = {
  uuid: string;
  xh: string;
  tsjbh: string;
  tsrxm: string;
  tsrlxfs: string;
  qd: string;
  cj: string;
  wtlb: string;
  bllb: string;
  jz: string;
  dw: string;
  wtms: string;
  dwzc: string;
  jzfh: string;
  tsrq: string;
  jzrq: string;
  cljd: string;
  jrtszl: string;
  zgdw: string;
  hcjzrq: string;
  sjdw: string;
  jjrxm: string;
  jjrdh: string;
  jjrjhgh: string;
  jjrq: string;
  ifbianjidisabled: boolean;
  iffenfadisabled: boolean;
  ifpinggudisabled: boolean;
  ifxiangqingdisabled: boolean;
  ifguidangdisabled: boolean;
  ifbianjibc: boolean;
  iffenfaqr: boolean;
  ifpinggubc: boolean;
  ifpingguff: boolean;
  ifpinggutj: boolean;
  xzpd: any;
  dwcp: any;
  jzcp: any;
  yfwt: any;
  pddisabled: boolean;
  pdrules: boolean;
  yfwtyj: string;
  yfwtej: string;
  jtbx: string;
  gzjy: string;
  lsqk: string;
  ifguidangqr: boolean;
  fj: string;
  iffjdownload: boolean;
  ghjh: string;
};

export type genzongTableListItem = {
  clbz: string;
  sqr: string;
  kssj: string;
  jssj: string;
  jg: string;
};
export type xinzengTableListItem = {
  sqdw: string;
  sqsj: string;
  sqr: string;
  lxdh: string;

};

export type xiangqingTableListItem = {
  xh: string;
  jksbmc: string;
  jpbh: string;
};
export type shejirenyuanTableListItem = {
  xh: string;
  rylx: string;
  ghjh: string;
  xm: string;
};


export type TableListPagination = {
  total: number;
  pageSize: number;
  current: number;
};

export type TableListData = {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
};

export type TableListParams = {
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
};
