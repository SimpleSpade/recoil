export type TableListItem = {
  uuid: string;
  xh: string;
  eventCatelogDesc: string;
  eventCreateTime: string;
  eventDesc: string;
  eventAllTagName: string;
  responsibilityResult: string;
  eventSolutionDesc: string;
  eventRectificationMeasures: string;
  complainantStaffName: string;
  eventVerifyResult: string;
  complainantStaffNationality: string;
  complainantStaffIdType: string;
  complainantStaffId: string;
  eventPoliceCategory: string;
  eventAttributionAnalysis: string;
  complainantStaffPhoneNum: string;
  eventCatelogType: string;
  eventSolutionTime: string;
  staffPoliceUnit: string;
  eventChannelDesc: string;
  setSheshiminjingDetaildata: any;
  setShijianbiaoqianDetaildata: any;
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
export type shenherizhiTableListItem = {
  eventVerifyIdea: string;
  eventVerifyResult: string;
  eventVerifyTime: string;
};

export type sheshiminjingTableListItem = {
  id: number;
  policeId: string;
  policeName: string;
  staffPoliceid: string;
  staffPoliceUnit: string;
  policeSolutionDesc: string;
  responsibilityResult: string;
};

export type shijianbiaoqianTableListItem = {
  id: number;
  eventTagType: string;
  eventTagName: string;
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
