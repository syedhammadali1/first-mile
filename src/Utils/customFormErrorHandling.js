import * as Yup from 'yup';
import dayjs from "dayjs";
import moment from 'moment';
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)
export const JCVS = Yup.object({
    name: Yup.string(),//.required('Name is required'),
    position: Yup.string(),//.required('position is required'),
    phoneNo1: Yup.string(),
    phoneNo2: Yup.string(),
    eMail1: Yup.string().email('Invalid email'),
    eMail2: Yup.string().email('Invalid email'),
    lineId: Yup.string(),//.required('lineId is required'),
    agency: Yup.string(),//.required('agency is required'),
    communicateRating: Yup.string()//.required('communicateRating is required'),
});

export const JCIV = {
    name: '',
    position: '',
    phoneNo1: '',
    phoneNo2: '',
    eMail1: '',
    eMail2: '',
    lineId: '',
    agency: '',
    communicateRating: '',
};


export const PIVS = Yup.object({
    bank: Yup.string(),//.required('Name is required'),
    bankAccountName: Yup.string(),//.required('position is required'),
    accountName: Yup.string(),//.required('lineId is required'),
    note: Yup.string(),//.required('agency is required'),
});


export const PIIV = {
    bank: '',
    bankAccountName: '',
    accountName: '',
    note: '',
};


export const RAEVS = Yup.object({
    selectAe: Yup.string(),//.required('Name is required'),
    responsibleStatus: Yup.string(),//.required('position is required'),
    responsibleDate: Yup.date(),//.required('position is required'),
    irresponsibleDate: Yup.date(),//.required('position is required'),

});

export const RAEIV = {
    selectAe: '',
    responsibleStatus: '',
    responsibleDate: moment().format("DD-MM-YYYY"),
    irresponsibleDate: moment().format("DD-MM-YYYY"),
};



export const AEVS = Yup.object({
    id: Yup.string(),//.required('Name is required'),
    name: Yup.string(),//.required('Name is required'),
    position: Yup.string(),//.required('Name is required'),
    phoneNumber: Yup.string(),//.required('Name is required'),
    email: Yup.string().email('Invalid email'),//.required('Name is required'),
});

export const AEIV = {
    id: '',
    name: '',
    position: '',
    phoneNumber: '',
    email: '',
};



export const projectInfoVS = Yup.object({
    projectName: Yup.string(),//.required('Name is required'),
    juristicName: Yup.string(),//.required('Name is required'),
    projectStatus: Yup.string(),//.required('Name is required'),
    buildings: Yup.string(),//.required('Name is required'),
    units: Yup.string(),//.required('Name is required'),
    projectSizing: Yup.string(),//.required('Name is required'),
    description: Yup.string(),//.required('Name is required'),
    // address
    houseNo: Yup.string(),//.required('Name is required'),
    building: Yup.string(),//.required('Name is required'),
    soi: Yup.string(),//.required('Name is required'),
    street: Yup.string(),//.required('Name is required'),
    province: Yup.string(),//.required('Name is required'),
    district: Yup.string(),//.required('Name is required'),
    subDistrict: Yup.string(),//.required('Name is required'),
    postNumber: Yup.string(),//.required('Name is required'),

    // 

    longitude: Yup.string(),//.required('Name is required'),
    latitude: Yup.string(),//.required('Name is required'),

    // 

    day: Yup.date(),//.required('Name is required'),
    time: Yup.string(),//.required('Name is required'),
    note: Yup.string(),//.required('Name is required'),
});


export const projectInfoIV = {
    projectName: '',
    juristicName: '',
    projectStatus: '',
    buildings: '',
    units: '',
    projectSizing: '',
    description: '',

    // address

    houseNo: '',
    building: '',
    soi: '',
    street: '',
    province: '',
    district: '',
    subDistrict: '',
    postNumber: '',

    // 

    longitude: '',
    latitude: '',

    // 

    day: moment().format("DD-MM-YYYY"),
    time: '',
    note: '',


};


//  export const addressVS = Yup.object({
//     houseNo: Yup.string() ,//.required('Name is required'),
//     building: Yup.string() ,//.required('Name is required'),
//     soi: Yup.string() ,//.required('Name is required'),
//     street: Yup.string() ,//.required('Name is required'),
//     province: Yup.string() ,//.required('Name is required'),
//     district: Yup.string() ,//.required('Name is required'),
//     subDistrict: Yup.string() ,//.required('Name is required'),
//     postNumber: Yup.string() ,//.required('Name is required'),
// });

// export const addressIV = {  
//     houseNo: '',
//     building: '',
//     soi: '',
//     street: '',
//     province: '',
//     district: '',
//     subDistrict: '',
//     postNumber: '',
//  };

//  export const locationVS = Yup.object({
//     longitude: Yup.string() ,//.required('Name is required'),
//     latitude: Yup.string() ,//.required('Name is required'),
// });


// export const locationIV = {  
//     longitude: '',
//     latitude: '',
//  };



//  export const operatingTimeVS = Yup.object({
//     day: Yup.string() ,//.required('Name is required'),
//     time: Yup.string() ,//.required('Name is required'),
//     note: Yup.string() ,//.required('Name is required'),
// });


// export const operatingTimeIV = {  
//     day: '',
//     time: '',
//     note: '',
//  };







// 

export const contractInfoVS = Yup.object({
    contractId: Yup.string(),//.required('Name is required'),
    projectId: Yup.string(),//.required('Name is required'),
    project: Yup.string(),//.required('Name is required'),
    juristicName: Yup.string(),//.required('Name is required'),
    buildings: Yup.string(),//.required('Name is required'),
    units: Yup.string(),//.required('Name is required'),
    projectSizing: Yup.string(),//.required('Name is required'),
    description: Yup.string(),//.required('Name is required'),


    // specific detail
    startDate: Yup.date(),//.required('Name is required'),
    expirationDate: Yup.date(),//.required('Name is required'),
    period: Yup.string(),//.required('Name is required'),
    renewalDate: Yup.date(),//.required('Name is required'),
    paymentCondition: Yup.string(),//.required('Name is required'),

    // address
    houseNo: Yup.string(),//.required('Name is required'),
    building: Yup.string(),//.required('Name is required'),
    soi: Yup.string(),//.required('Name is required'),
    street: Yup.string(),//.required('Name is required'),
    province: Yup.string(),//.required('Name is required'),
    district: Yup.string(),//.required('Name is required'),
    subDistrict: Yup.string(),//.required('Name is required'),
    postNumber: Yup.string(),//.required('Name is required'),

});


export const contractInfoIV = {
    contractId: '',
    projectId: '',
    project: '',
    juristicName: '',
    buildings: '',
    units: '',
    projectSizing: '',
    description: '',

    // specific detail
    startDate: moment().format("DD-MM-YYYY"),
    expirationDate: moment().format("DD-MM-YYYY"),
    period: '',
    renewalDate: moment().format("DD-MM-YYYY"),
    paymentCondition: '',

    // address

    houseNo: '',
    building: '',
    soi: '',
    street: '',
    province: '',
    district: '',
    subDistrict: '',
    postNumber: '',



};

export const addBuildingByProjectVS = Yup.object({
    projectId: Yup.string(),//.required('Name is required'),
    projectName: Yup.string(),//.required('Name is required'),
    juristicName: Yup.string(),//.required('Name is required'),
    buildingId: Yup.string(),//.required('Name is required'),
    buildingName: Yup.string(),//.required('Name is required'),
    floors: Yup.string(),//.required('Name is required'),
    units: Yup.string(),//.required('Name is required'),
    sizing: Yup.string(),//.required('Name is required'),


    // specific detail
    buildingStatus: Yup.string(),//.required('Name is required'),
    specialRequirement: Yup.string(),//.required('Name is required'),
    requireSpecificTeam: Yup.string(),//.required('Name is required'),

    // address
    houseNo: Yup.string(),//.required('Name is required'),
    building: Yup.string(),//.required('Name is required'),
    soi: Yup.string(),//.required('Name is required'),
    street: Yup.string(),//.required('Name is required'),
    province: Yup.string(),//.required('Name is required'),
    district: Yup.string(),//.required('Name is required'),
    subDistrict: Yup.string(),//.required('Name is required'),
    postNumber: Yup.string(),//.required('Name is required'),

    // // 

    longitude: Yup.string(),//.required('Name is required'),
    latitude: Yup.string(),//.required('Name is required'),

    // // 
});


export const addBuildingByProjectIV = {
    projectId: '',
    projectName: '',
    juristicName: '',
    buildingId: '',
    buildingName: '',
    floors: '',
    units: '',
    sizing: '',


    // specific detail
    buildingStatus: '',
    specialRequirement: '',
    requireSpecificTeam: '',

    // address
    houseNo: '',
    building: '',
    soi: '',
    street: '',
    province: '',
    district: '',
    subDistrict: '',
    postNumber: '',

    // 

    longitude: '',
    latitude: '',

    // // 
};



export const addContractByProjectVS = Yup.object({
    contractId: Yup.string(),//.required('Name is required'),
    projectId: Yup.string(),//.required('Name is required'),
    project: Yup.string(),//.required('Name is required'),
    juristicName: Yup.string(),//.required('Name is required'),
    buildings: Yup.string(),//.required('Name is required'),
    units: Yup.string(),//.required('Name is required'),
    projectSizing: Yup.string(),//.required('Name is required'),
    description: Yup.string(),//.required('Name is required'),


    // specific detail
    startDate: Yup.date(),//.required('Name is required'),
    expirationDate: Yup.date(),//.required('Name is required'),
    period: Yup.string(),//.required('Name is required'),
    renewalDate: Yup.date(),//.required('Name is required'),
    paymentCondition: Yup.string(),//.required('Name is required'),

    // address
    houseNo: Yup.string(),//.required('Name is required'),
    building: Yup.string(),//.required('Name is required'),
    soi: Yup.string(),//.required('Name is required'),
    street: Yup.string(),//.required('Name is required'),
    province: Yup.string(),//.required('Name is required'),
    district: Yup.string(),//.required('Name is required'),
    subDistrict: Yup.string(),//.required('Name is required'),
    postNumber: Yup.string(),//.required('Name is required'),

    // 

    // longitude: Yup.string(),//.required('Name is required'),
    // latitude: Yup.string(),//.required('Name is required'),

    // // 
});


export const addContractByProjectIV = {
    contractId: '',
    projectId: '',
    project: '',
    juristicName: '',
    buildings: '',
    units: '',
    projectSizing: '',
    description: '',


    // specific detail
    startDate: moment().format("DD-MM-YYYY"),
    expirationDate: moment().format("DD-MM-YYYY"),
    period: '',
    renewalDate: moment().format("DD-MM-YYYY"),
    paymentCondition: '',

    // address
    houseNo: '',
    building: '',
    soi: '',
    street: '',
    province: '',
    district: '',
    subDistrict: '',
    postNumber: '',

    // 

    // longitude: '',
    // latitude: '',

    // // 
};