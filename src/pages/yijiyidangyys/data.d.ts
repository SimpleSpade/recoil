export type TableListItem = {
  uuid: string;
  xh: string;
  sbbm: string;
  sbmc: string;
  sbcs: string;
  xzqh: string;
  jkdlx: string;
  sbxh: string;
  dwsc: string;
  ipv4dz: string;
  ipv6dz: string;
  macdz: string;
  sxjlx: string;
  sxjgnlx: string;
  bgsx: string;
  sxjbmgs: string;
  dyccsbip: string;
  dyccsbtd: string;
  azdz: string;
  jd: string;
  wd: string;
  sxjwzlx: string;
  jsfx: string;
  sxjcjyszpurl: string;
  lwsx: string;
  ssxqgajg: string;
  azsj: string;
  gldw: string;
  gldwlxfs: string;
  lxhtpbcts: string;
  sbzt: string;
  ssbmhy: string;
  sptpfbl: string;
  spxhlx: string;
  sfdwgx: string;
  sfjrsjpt: string;
  jpbh: string;
  jsyylb: string;
  azgd: string;
  ksjl: string;
  dwmk: string;
  csbh: string;
  csmc: string;
  bwlx: string;
  crfx: string;
  spzt: string;
  qrzt: string;
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
