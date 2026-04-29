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
  ifdanweizichaqr: boolean;
  ifdanweizichadisabled: boolean;
  ifxiangqingdisabled: boolean;
  ifjingzhongfuhedisabled: boolean;
  ifjingzhongfuchatj: boolean;
  iffjdownload: boolean;
  fj: string;
  xzpd: string;
  dwcp: string;
  yfwtyj: string;
  yfwtej: string;
  jtbx: string;
  gzjy: string;
  lsqk: string;
  jjrxm: string;
  jjrjhgh: string;
  jjrdh: string;
  sjdw: string;
  jjrq: string;
  hczt: string;
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
