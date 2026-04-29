export type TableListItem = {
  uuid: string;
  xh: string;
  sqdw: string;
  sqr: string;
  lxdh: string;
  xgsx: string;
  sqyy: string;
  dqbz: string;
  shjg: string;
  sqsj: string;
  pcssh: string;
  pcsshjg: string;
  pcsshrq: string;
  kjksh: string;
  kjkshjg: string;
  kjkshrq: string;
  kjksh1: string;
  kjkshjg1: string;
  kjkshrq1: string;
  kjksh2: string;
  kjkshjg2: string;
  kjkshrq2: string;
  hksh: string;
  hkshjg: string;
  hkshrq: string;
  pcsshbz: boolean;
  kjkshbz: boolean;
  czyshbz1: boolean;
  czyshbz2: boolean;
  hkshbz: boolean;
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
  xgsx: string;
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
