export type TableListItem = {
  uuid: string;
  xh: string;
  tsjbh: string;
  hczt: string;
  ghjh: string;
  tsrxm: string;
  tsrlxfs: string;
  qd: string;
  yfwt: string;
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
  hczt: string;
  cljd: string;
  jrtszl: string;
  zgdw: string;
  ifbianjidisabled: boolean;
  iffenfadisabled: boolean;
  ifpinggudisabled: boolean;
  ifluoshidisabled: boolean;
  ifguidangdisabled: boolean;
  ifbianjibc: boolean;
  ifbianjitj: boolean;
  iffenfaqr: boolean;
  ifpinggubc: boolean;
  ifpinggutj: boolean;
  xzpd: any;
  jzcp: any;
  lschakanpd: string;
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
