export type TableListItem = {
  zcxtbh: string;
  zcmc: string;
  xh: string;
  gg: string;
  sl: string;
  sb: string;
  dw: string;
  qsuw: string;
  zyuw: string;
  glsb: string;
  cwhdkh: string;
  xmbh: string;
  xmmc: string;
  czsm: string;
  czr: string;
  czsj: string;
  bz: string;
  zcbm: string
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
