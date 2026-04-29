import {atom} from "recoil";


export const tablelistNumberAtom = atom({
  key:'tablelistNumberAtom',
  default:{
    num:1,
  },
})

export const dataAtom = atom({
  key:'dataAtom',
  default:{
    data: '757575',
    id:'旧id',
  },
})
