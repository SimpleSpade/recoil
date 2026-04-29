export type TableListItem = {
  uuid: string;
  xh: string;
  eventCatelogDesc: string;
  eventCreateTime: string;
  eventDesc: string;
  eventAllTagName: string;
  eventPoliceCategory: string;
  eventAttributionAnalysis: string;
  responsibilityResult: string;
  eventSolutionDesc: string;
  eventRectificationMeasures: string;
  eventSectionChiefName: string;
  eventSectionChiefPoliceid: string;
  eventSupervisingLeaderName: string;
  eventSupervisingLeaderPoliceid: string;
  eventTagName: any;
  complainantStaffName: string;
  eventVerifyResult: string;
  complainantStaffNationality: string;
  complainantStaffIdType: string;
  complainantStaffId: string;
  complainantStaffPhoneNum: string;
  eventCatelogType: string;
  eventSolutionTime: string;
  // solutionDesc: string;
  eventChannelDesc: string;
  setSheshiminjingDetaildata: any;
  setYewuchangjingDetaildata: any;
  setWentileixingDetaildata: any;
  bianjishijianbutton: boolean;
  tijiaoshenpibutton: boolean;
  shanchubutton: boolean;
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
  staffPeopleType: string;
  staffPoliceUnit: string;
  policeSolutionDesc: string;
  responsibilityResult: string;
  staffPoliceProcessResult: string;
  staffSectionChiefName: string;
  staffSectionChiefPoliceid: string;
  staffSupervisingLeaderName: string;
  staffSupervisingLeaderPoliceid: string;
  staffSupervisingOfficerName: string;
  staffSupervisingOfficerPoliceid: string;
};

export type chaxunjieguoTableListItem = {
  id: string;
  policeId: string;
  policeName: string;
  staffPoliceUnit: string;
  staffPoliceid: string;
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
