import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basicInfo: {
    projectId: 'John Doe',
    projectName: 30,
    juristicName: 30,
    projectStatus: 30,
    buildings: 30,
    units: 30,
    projectSizing: 30,
    description: 30,
  },
  address:{
    houseNo:30,
    building:30,
    soi:30,
    street:30,
    province:30,
    district:30,
    subDistrict:30,
    postNumber:30,
  },
  juristicContact:[
    {name:'Mr. Moncan Kankoon',position:'Manager',phoneNumber1:'0812354984',phoneNumber2:'0812354984',eMail1:'Supalai@email.com',eMail2:'Supalai@email.com',lineId:'-',agencyId:'-',communicateRating:3},
    {name:'Mr. Moncan Kankoon',position:'Manager',phoneNumber1:'0812354984',phoneNumber2:'0812354984',eMail1:'Supalai@email.com',eMail2:'Supalai@email.com',lineId:'-',agencyId:'-',communicateRating:3}
  ],
  paymentDetail:[
    {bank:'SCB',bankAccountNumber:'0268465213',accountName:'Mr. Moncan Kankoon',note:'-'},
    {bank:'SCB',bankAccountNumber:'0268465213',accountName:'Mr. Moncan Kankoon',note:'-'},
  ],
  responsibleAE:[
   {
    AE:{
        id:3231,
        name:'Mr. Nitikarn N Kalasil',
        position:'Project Manager',
        phoneNumber:231231233,
        eMail:'NK@email.com'
      }, 
   responsibleStatus : 1,responsibleDate:'-',irresponsibleDate:'-'},
   {
    AE:{
    id:3232,
    name:'Mr. Nitikarn N Kalasil',
    position:'Project Manager',
    phoneNumber:231231233,
    eMail:'NK@email.com'
  }, 
  responsibleStatus : 1,responsibleDate:'-',irresponsibleDate:'-'}
  ],
  location:{
    latitude:66.156844,
    longitude:66.156844,
  },
  operatingTime:{
    day:'-',
    time:'-',
    note:'-',
  }

};

const projectInfoSlice = createSlice({
  name: 'projectInfo',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    // Add other reducer functions here if needed
  },
});

export const { updateUser } = projectInfoSlice.actions;

export default projectInfoSlice.reducer;