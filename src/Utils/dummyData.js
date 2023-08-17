import { Avatar, Badge, Box, Chip, Typography } from '@mui/material';
import CustomProgressBar from '../Components/CustomProgressBar/CustomProgressBar';
import CustomChip, { CustomAvatarChip, CustomChipSquare, CustomColouredAvatarChip } from '../Components/CustomChip/CustomChip';
import FolderIcon from '@mui/icons-material/Folder';
import { UtilService } from './util.service';





export const projectData = {
    rows: [
        {
            id: 1,
            Project_ID: 'Fm301930139710',
            Project_name: 'Suplaia',
            Juristic_name: 'Suplaia',
            Project_status: 'Complete',
            Buildings: '3',
            Units: '266',
            Project_sizing: '100-200',
            Juristic_Contact: {name:'Mr Mark welson',phoneNumber1:'0231231312313'},
            Current_Contract: ['fm1212891212', 'Exp.date : 12/4/2022'],
            Juristic_Payment_Details: {bankAccountNumber:'0231231312313',accountName:'Mr. Moncon Kankoon'},
            House_number: 'House_number',
            Building: 'Building/Village',
            Soi: 'Soi',
            Street: 'Street',
            Sub_district: 'Sub_district',
            District: 'District',
            Province: 'Province',
            Postcode: 'Postcode',
            Latitude: 'Latitude',
            Longitude: 'Longitude',
            Connection: '33.66',
            Port_quantity: 'Port_quantity',
            Port_Connected: 'Port_Connected',
            Description: 'Description',
            Building_list: ['Building_list@fffff', 'Building_list@fffff', 'Building_list@fffff'],
            Current_AE: {name: 'Mr . Morcon Kankoon',position: 'Project Manager'},
            Added_Date: 'Added_Date',
            Editor: 'Editor',
        },
        {
            id: 2,
            Project_ID: 'Fm3019301397103',
            Project_name: 'Zara',
            Juristic_name: 'Suplaia',
            Project_status: 'inComplete',
            Buildings: '3',
            Units: '266',
            Project_sizing: '100-200',
            Juristic_Contact: {name:'Mr Mark welson',phoneNumber1:'0231231312313'},
            Current_Contract: ['fm1212891212', 'Exp.date : 12/4/2022'],
            Juristic_Payment_Details: {bankAccountNumber:'0231231312313',accountName:'Mr. Moncon Kankoon'},
            House_number: 'House_number',
            Building: 'Building/Village',
            Soi: 'Soi',
            Street: 'Street',
            Sub_district: 'Sub_district',
            District: 'District',
            Province: 'Province',
            Postcode: 'Postcode',
            Latitude: 'Latitude',
            Longitude: 'Longitude',
            Connection: '33.66',
            Port_quantity: 'Port_quantity',
            Port_Connected: 'Port_Connected',
            Description: 'Description',
            Building_list: ['Building_list@fffff', 'Building_list@fffff', 'Building_list@fffff'],
            Current_AE: {name: 'Mr . Morcon Kankoon',position: 'Project Manager'},
            Added_Date: 'Added_Date',
            Editor: 'Editor',
        },
        {
            id: 3,
            Project_ID: 'Fm3019301397103',
            Project_name: 'Loki',
            Juristic_name: 'Suplaia',
            Project_status: 'Complete',
            Buildings: '3',
            Units: '266',
            Project_sizing: '100-200',
            Juristic_Contact: {name:'Mr Mark welson',phoneNumber1:'0231231312313'},
            Current_Contract: ['fm1212891212', 'Exp.date : 12/4/2022'],
            Juristic_Payment_Details: {bankAccountNumber:'0231231312313',accountName:'Mr. Moncon Kankoon'},
            House_number: 'House_number',
            Building: 'Building/Village',
            Soi: 'Soi',
            Street: 'Street',
            Sub_district: 'Sub_district',
            District: 'District',
            Province: 'Province',
            Postcode: 'Postcode',
            Latitude: 'Latitude',
            Longitude: 'Longitude',
            Connection: '33.66',
            Port_quantity: 'Port_quantity',
            Port_Connected: 'Port_Connected',
            Description: 'Description',
            Building_list: ['Building_list@fffff', 'Building_list@fffff', 'Building_list@fffff'],
            Current_AE: {name: 'Mr . Morcon Kankoon',position: 'Project Manager'},
            Added_Date: 'Added_Date',
            Editor: 'Editor',
        },
        {
            id: 4,
            Project_ID: 'Fm3019301397103',
            Project_name: 'Johi',
            Juristic_name: 'Suplaia',
            Project_status: 'inComplete',
            Buildings: '3',
            Units: '266',
            Project_sizing: '100-200',
            Juristic_Contact: {name:'Mr Mark welson',phoneNumber1:'0231231312313'},
            Current_Contract: ['fm1212891212', 'Exp.date : 12/4/2022'],
            Juristic_Payment_Details: {bankAccountNumber:'0231231312313',accountName:'Mr. Moncon Kankoon'},
            House_number: 'House_number',
            Building: 'Building/Village',
            Soi: 'Soi',
            Street: 'Street',
            Sub_district: 'Sub_district',
            District: 'District',
            Province: 'Province',
            Postcode: 'Postcode',
            Latitude: 'Latitude',
            Longitude: 'Longitude',
            Connection: '33.66',
            Port_quantity: 'Port_quantity',
            Port_Connected: 'Port_Connected',
            Description: 'Description',
            Building_list: ['Building_list@fffff', 'Building_list@fffff', 'Building_list@fffff'],
            Current_AE: {name: 'Mr . Morcon Kankoon',position: 'Project Manager'},
            Added_Date: 'Added_Date',
            Editor: 'Editor',
        },
        {
            id: 5,
            Project_ID: 'Fm3019301397103',
            Project_name: 'tailor',
            Juristic_name: 'Suplaia',
            Project_status: 'Complete',
            Buildings: '3',
            Units: '266',
            Project_sizing: '100-200',
            Juristic_Contact: {name:'Mr Mark welson',phoneNumber1:'0231231312313'},
            Current_Contract: ['fm1212891212', 'Exp.date : 12/4/2022'],
            Juristic_Payment_Details: {bankAccountNumber:'0231231312313',accountName:'Mr. Moncon Kankoon'},
            House_number: 'House_number',
            Building: 'Building/Village',
            Soi: 'Soi',
            Street: 'Street',
            Sub_district: 'Sub_district',
            District: 'District',
            Province: 'Province',
            Postcode: 'Postcode',
            Latitude: 'Latitude',
            Longitude: 'Longitude',
            Connection: '33.66',
            Port_quantity: 'Port_quantity',
            Port_Connected: 'Port_Connected',
            Description: 'Description',
            Building_list: ['Building_list@fffff', 'Building_list@fffff', 'Building_list@fffff'],
            Current_AE: {name: 'Mr . Morcon Kankoon',position: 'Project Manager'},
            Added_Date: 'Added_Date',
            Editor: 'Editor',
        },


    ],
    columns: [
        { field: 'Project_ID', headerName: 'Project ID', width: 150 },
        { field: 'Project_name', headerName: 'Project name', width: 150 },
        { field: 'Juristic_name', headerName: 'Juristic name', width: 150 },
        {
            field: 'Project_status', headerName: 'Project status', width: 150,
            renderCell: (params) => (
                <div
                    style={{
                        color: params.value === 'Complete' ? 'green' : 'red',
                    }}
                >
                    {params.value}
                </div>
            ),
        },
        { field: 'Buildings', headerName: 'Buildings', width: 150 },
        { field: 'Units', headerName: 'Units', width: 150 },
        { field: 'Project_sizing', headerName: 'Project sizing', width: 150 },
        {
            field: 'Juristic_Contact', headerName: 'Juristic Contact', width: 250,
            renderCell: (params) => (
                <CustomAvatarChip value={params.value} modalCardType={'contact'} />
            ),
        },
        {
            field: 'Current_Contract', headerName: 'Current Contract', width: 200,
            renderCell: (params) => (

                <CustomChip value={params.value} />
            ),
        },
        {
            field: 'Juristic_Payment_Details', headerName: 'Juristic Payment Details', width: 250,
            renderCell: (params) => (
                <CustomColouredAvatarChip value={params.value} modalCardType={'payment-card-modal'} chipColor='purple' />
            ),
        },
        { field: 'House_number', headerName: 'House number', width: 150 },
        { field: 'Building', headerName: 'Building/Village', width: 150 },
        { field: 'Soi', headerName: 'Soi', width: 150 },
        { field: 'Street', headerName: 'Street', width: 150 },
        { field: 'Sub_district', headerName: 'Sub-district', width: 150 },
        { field: 'District', headerName: 'District', width: 150 },
        { field: 'Province', headerName: 'Province', width: 150 },
        { field: 'Postcode', headerName: 'Postcode', width: 150 },
        { field: 'Latitude', headerName: 'Latitude', width: 150 },
        { field: 'Longitude', headerName: 'Longitude', width: 150 },
        {
            field: 'Connection', headerName: 'Connection (%)', width: 160,

            renderCell: (params) => (
                <CustomProgressBar value={params.value} />
            ),
        },
        { field: 'Port_quantity', headerName: 'Port quantity', width: 150 },
        { field: 'Port_Connected', headerName: 'Port Connected', width: 150 },
        { field: 'Description', headerName: 'Description', width: 150 },
        {
            field: 'Building_list', headerName: 'Building list', width: 450,
            renderCell: (params) => (
                params.value.map((value) => {
                    return (
                        <CustomChipSquare value={value} />
                    )
                })

            ),
        },
        {
            field: 'Current_AE', headerName: 'Current AE', width: 250,
            renderCell: (params) => (
                <CustomAvatarChip value={params.value} modalCardType={'AECard'} />

            ),
        },
        { field: 'Added_Date', headerName: 'Added Date', width: 150 },
        { field: 'Editor', headerName: 'Editor', width: 150 },
    ]
}


export const contractData = {

    rows: [
        {
            id: 1,
            Contract_ID: 'Fm301930139710',
            Project_name: 'Suplaia',
            Juristic_name: 'Suplaia',
            Buildings: '3',
            Units: '266',
            Project_sizing: '100-200',
            Start_date: '100-200',
            Expiration_date: '100-200',
            Contract_period: '100-200',
            Contract_renewal_date: '100-200',
            Contract_payment_condition: '100-200',
            Juristic_Contact: {name:'Mr Mark welson',phoneNumber1:'0231231312313'},
            Juristic_Payment_Details: {bankAccountNumber:'0231231312313',accountName:'Mr. Moncon Kankoon'},
            Scanned_contract:'super@',
            House_number: 'House_number',
            Building: 'Building/Village',
            Soi: 'Soi',
            Street: 'Street',
            Sub_district: 'Sub_district',
            District: 'District',
            Province: 'Province',
            Postcode: 'Postcode',
            Description: 'Description',
            Ae: {name: 'Mr . Morcon Kankoon',position: 'Project Manager'},
            Added_date: 'Added_date',
            Editor: 'Editor',
        },
        {
            id: 2,
            Contract_ID: 'Fm301930139710',
            Project_name: 'Suplaia',
            Juristic_name: 'Suplaia',
            Buildings: '3',
            Units: '266',
            Project_sizing: '100-200',
            Start_date: '100-200',
            Expiration_date: '100-200',
            Contract_period: '100-200',
            Contract_renewal_date: '100-200',
            Contract_payment_condition: '100-200',
            Juristic_Contact: {name:'Mr Mark welson',phoneNumber1:'0231231312313'},
            Juristic_Payment_Details: {bankAccountNumber:'0231231312313',accountName:'Mr. Moncon Kankoon'},
            House_number: 'House_number',
            Building: 'Building/Village',
            Soi: 'Soi',
            Street: 'Street',
            Sub_district: 'Sub_district',
            District: 'District',
            Province: 'Province',
            Postcode: 'Postcode',
            Description: 'Description',
            Ae: {name: 'Mr . Morcon Kankoon',position: 'Project Manager'},
            Added_date: 'Added_date',
            Editor: 'Editor',
        },
        {
            id: 3,
            Contract_ID: 'Fm301930139710',
            Project_name: 'Suplaia',
            Juristic_name: 'Suplaia',
            Buildings: '3',
            Units: '266',
            Project_sizing: '100-200',
            Start_date: '100-200',
            Expiration_date: '100-200',
            Contract_period: '100-200',
            Contract_renewal_date: '100-200',
            Contract_payment_condition: '100-200',
            Juristic_Contact: {name:'Mr Mark welson',phoneNumber1:'0231231312313'},
            Juristic_Payment_Details: {bankAccountNumber:'0231231312313',accountName:'Mr. Moncon Kankoon'},
            House_number: 'House_number',
            Building: 'Building/Village',
            Soi: 'Soi',
            Street: 'Street',
            Sub_district: 'Sub_district',
            District: 'District',
            Province: 'Province',
            Postcode: 'Postcode',
            Description: 'Description',
            Ae: {name: 'Mr . Morcon Kankoon',position: 'Project Manager'},
            Added_date: 'Added_date',
            Editor: 'Editor',
        },
        {
            id: 4,
            Contract_ID: 'Fm301930139710',
            Project_name: 'Suplaia',
            Juristic_name: 'Suplaia',
            Buildings: '3',
            Units: '266',
            Project_sizing: '100-200',
            Start_date: '100-200',
            Expiration_date: '100-200',
            Contract_period: '100-200',
            Contract_renewal_date: '100-200',
            Contract_payment_condition: '100-200',
            Juristic_Contact: {name:'Mr Mark welson',phoneNumber1:'0231231312313'},
            Juristic_Payment_Details: {bankAccountNumber:'0231231312313',accountName:'Mr. Moncon Kankoon'},
            House_number: 'House_number',
            Building: 'Building/Village',
            Soi: 'Soi',
            Street: 'Street',
            Sub_district: 'Sub_district',
            District: 'District',
            Province: 'Province',
            Postcode: 'Postcode',
            Description: 'Description',
            Ae: {name: 'Mr . Morcon Kankoon',position: 'Project Manager'},
            Added_date: 'Added_date',
            Editor: 'Editor',
        },
        {
            id: 5,
            Contract_ID: 'Fm301930139710',
            Project_name: 'Suplaia',
            Juristic_name: 'Suplaia',
            Buildings: '3',
            Units: '266',
            Project_sizing: '100-200',
            Start_date: '100-200',
            Expiration_date: '100-200',
            Contract_period: '100-200',
            Contract_renewal_date: '100-200',
            Contract_payment_condition: '100-200',
            Juristic_Contact: {name:'Mr Mark welson',phoneNumber1:'0231231312313'},
            Juristic_Payment_Details: {bankAccountNumber:'0231231312313',accountName:'Mr. Moncon Kankoon'},
            House_number: 'House_number',
            Building: 'Building/Village',
            Soi: 'Soi',
            Street: 'Street',
            Sub_district: 'Sub_district',
            District: 'District',
            Province: 'Province',
            Postcode: 'Postcode',
            Description: 'Description',
            Ae: {name: 'Mr . Morcon Kankoon',position: 'Project Manager'},
            Added_date: 'Added_date',
            Editor: 'Editor',
        },

    ],
    columns: [
        { field: 'Contract_ID', headerName: 'Contract ID', width: 150 },
        { field: 'Project_name', headerName: 'Project name', width: 150 },
        { field: 'Juristic_name', headerName: 'Juristic name', width: 150 },
        { field: 'Buildings', headerName: 'Buildings', width: 150 },
        { field: 'Units', headerName: 'Units', width: 150 },
        { field: 'Project_sizing', headerName: 'Project sizing', width: 150 },
        { field: 'Start_date', headerName: 'Start Date', width: 150 },
        { field: 'Expiration_date', headerName: 'Expiration Date', width: 150 },
        { field: 'Contract_period', headerName: 'Contract Period (Year)', width: 150 },
        { field: 'Contract_renewal_date', headerName: 'Contract Renewal Date', width: 150 },
        { field: 'Contract_payment_condition', headerName: 'Contract Payment Condition', width: 150 },
        {
            field: 'Juristic_Contact', headerName: 'Juristic Contact', width: 250,
            renderCell: (params) => (
                <CustomAvatarChip value={params.value} modalCardType={'contact'} />
            ),
        },
        {
            field: 'Juristic_Payment_Details', headerName: 'Juristic Payment Details', width: 250,
            renderCell: (params) => (
                <CustomColouredAvatarChip value={params.value} modalCardType={'payment-card-modal'} chipColor='green'/>
            ),
        },
        { field: 'Scanned_contract', headerName: 'Scanned Contract (pdf)', width: 250,
        renderCell: (params) => {
        return (<>
            <FolderIcon></FolderIcon>  {params.value}
        </>)
        },
    },
        { field: 'House_number', headerName: 'House number', width: 150 },
        { field: 'Building', headerName: 'Building/Village', width: 150 },
        { field: 'Soi', headerName: 'Soi', width: 150 },
        { field: 'Street', headerName: 'Street', width: 150 },
        { field: 'Sub_district', headerName: 'Sub-district', width: 150 },
        { field: 'District', headerName: 'District', width: 150 },
        { field: 'Province', headerName: 'Province', width: 150 },
        { field: 'Postcode', headerName: 'Postcode', width: 150 },
        { field: 'Description', headerName: 'Description', width: 150 },
        { field: 'Ae', headerName: 'AE (Caretaker)', width: 250,
        renderCell: (params) => (
            <CustomAvatarChip value={params.value} modalCardType={'AECard'} />

        ), },
        { field: 'Added_date', headerName: 'Added Date', width: 150 },
        { field: 'Editor', headerName: 'Editor', width: 150 }
    ]
}


export const generalDetails = {
    keys: ['Project ID', 'Project name', 'Juristic name', 'Project status', 'Buildings', 'Units', 'Project sizing', 'Description'],
    values: ['FM2005006', 'Supalai @ thonglor', 'Supalai', 'Complete', '3', '288', '200-300', '-']
}

export const address = {
    keys: ['House number', 'Building/Village', 'Soi', 'Street', 'Sub-district', 'District', 'Province', 'Post number'],
    values: ['152', 'Asher @ Asoke', '-', 'Asoke-patchburi', 'tub-yao', 'Ladkrabang', 'bangkok', '10100']
}

export const contractDetails = {
    keys: ['Contract ID', 'Start Date', 'Expiration Date', 'Period (Year)', 'Payment Condition', 'Renewal Date'],
    values: ['FM2005006', '30/11/2020', '30/11/2023', '3', 'Send slip by email', '30/11/2023 15:30']
}

export const editor = {
    keys: ['Editor', 'Added Date'],
    values: ['DJ Koon', '12/09/2019']
}


export const contactCard = {
    keys: ['Name', 'Position', 'Phone number 1', 'Phone number 2', 'E-mail 1', 'E-mail 2', 'Line ID', 'Agency'],
    values: ['Mr. Moncan Kankoon', 'Manager', '0812354984', '-', 'Supalai@email.com', '-', '-', 'Supalai @ thonglor']
}

export const bankDetails = {
    scbBank: {
        bankName: 'SCB Bank',
        slug: 'scb-bank',
        acNumber: '0268465213',
        holderName: 'Mr. Moncan Kankoon',
        note: 'ส่งสลิปไปทาง E-mail',
        bgColor: '#9844FF',
        bgColorForLarge:'#E1BEE7',
        image:'/images/bank/purple-avatar.png'
    },
    KTB: {
        bankName: 'KTB',
        slug: 'ktb',
        acNumber: '0268465213',
        holderName: 'Mr. Moncan Kankoon',
        note: 'ส่งสลิปไปทาง E-mail',
        bgColor: '#40B9DF',
        bgColorForLarge:'#BBDEFB',
        image:'/images/bank/blue-avatar.png'
    },
    KBank: {
        bankName: 'K-Bank',
        slug: 'k-bank',
        acNumber: '0268465213',
        holderName: 'Mr. Moncan Kankoon',
        note: 'ส่งสลิปไปทาง E-mail',
        bgColor: '#17A925',
        bgColorForLarge:'#C8E6C9',
        image:'/images/bank/green-avatar.png'


    }
}


export const contractListUnderProject = {
    rows: [
        {
            id: 1,
            Status: 'complete',
            Contract_ID: 'FM2005006',
            Start_date: '30/11/2020',
            Expiration_date: '30/11/2020',
            Contract_period: '3',
            Contract_renewal_date: '30/11/2023 03:30 PM',
            Contract_payment_condition: 'Send slip by email',
            Scanned_contract: 'Supalai @ thonglor',
            Ae: {name: 'Mr . Morcon',position: 'Project Manager'},
        },
        // {
        //     id: 2,
        //     Status: 'complete',
        //     Contract_ID: 'FM2005006',
        //     Start_date: '30/11/2020',
        //     Expiration_date: '30/11/2020',
        //     Contract_period: '3',
        //     Contract_renewal_date: '30/11/2023 03:30 PM',
        //     Contract_payment_condition: 'Send slip by email',
        //     Scanned_contract: 'Supalai @ thonglor',
        //     Ae: 'Ae',
        // },
        // {
        //     id: 3,
        //     Status: 'complete',
        //     Contract_ID: 'FM2005006',
        //     Start_date: '30/11/2020',
        //     Expiration_date: '30/11/2020',
        //     Contract_period: '3',
        //     Contract_renewal_date: '30/11/2023 03:30 PM',
        //     Contract_payment_condition: 'Send slip by email',
        //     Scanned_contract: 'Supalai @ thonglor',
        //     Ae: 'Ae',
        // },
        // {
        //     id: 4,
        //     Status: 'complete',
        //     Contract_ID: 'FM2005006',
        //     Start_date: '30/11/2020',
        //     Expiration_date: '30/11/2020',
        //     Contract_period: '3',
        //     Contract_renewal_date: '30/11/2023 03:30 PM',
        //     Contract_payment_condition: 'Send slip by email',
        //     Scanned_contract: 'Supalai @ thonglor',
        //     Ae: 'Ae',
        // },
    ],

    columns: [
        {
            field: 'Status', headerName: 'Status',
            renderCell: (params) => (
                <Box sx={{ height: '13px', width: '13px', borderRadius: '7px', backgroundColor: `${params.value == 'complete' ? 'green' : 'red'} ` }}></Box>
            ), width: 80
        },
        { field: 'Contract_ID', headerName: 'Contract ID' },
        { field: 'Start_date', headerName: 'Start Date' },
        { field: 'Expiration_date', headerName: 'Expiration Date', width: 110 },
        { field: 'Contract_period', headerName: 'Contract Period (Year)', width: 160 },
        { field: 'Contract_renewal_date', headerName: 'Contract Renewal Date', width: 170 },
        { field: 'Contract_payment_condition', headerName: 'Contract Payment Condition', width: 200 },
        {
            field: 'Scanned_contract', headerName: 'Scanned Contract (pdf)', width: 200,
            renderCell: (params) => (
                <>
                    <FolderIcon></FolderIcon>
                    <Typography>{params.value}</Typography>
                </>
            )
        },
        { field: 'Ae', headerName: 'AE (Caretaker)', width: 160 ,
        renderCell: (params) => (
            <CustomAvatarChip value={params.value} chipStyle={'bg-lightGrey'} modalCardType={'AECard'} />
        ),
    },
    ]


}


export const operatingTime = {
    keys: ['Days', 'Time periots', 'Note'],
    values: ['จันทร์ - ศุกร์', '08:00 - 17:00 น.', 'วันเสาร์เข้าได้ แต่ห้ามใช้ เสียง']
}


export const connection1 = {
    keys: [
        'Connection (%)', 'Port quantity', 'Port Connected', 'Port Available', 'Operator ODF', 'firstMile POI', 'firstMile ODF'
    ],
    values: [
        '89.77%', '1320', '1185', '165', '9', '1', '3'
    ]
}


export const connection2 = {
    keys: [
        ' AIS Connect', 'TRUE Connect', '3BB Connect', 'NT Connect', 'FiberNet Connect', 'SYM Connect', 'TXRX Connect'
    ],
    values: [
        '738', '550', '12', '-', '-', '-', '-'
    ]
}


export const buildingList = {
    rows: [
        {
            id: 1,
            Picture: '1',
            Building_id: 'FM1005006',
            Building_name: 'Tower A',
            Building_status: 'Done',
            Zone_responsibility: 'Zone1',
            Team_responsibility: 'Team A',
            Juristic_contact: {name:'Mr Mark welson',phoneNumber1:'0231231312313'},
            Special_requirement: '-',
            Require_specific_team: '-',
        },
    ],
    columns: [
        { field: 'Picture', headerName: 'Picture', width: 60,
        renderCell: (params) => (
           <img src={ UtilService.addBaseUrl('/images/small-building.png')}/>
        ),
    },
        { field: 'Building_id', headerName: 'Building ID', width: 150 },
        { field: 'Building_name', headerName: 'Building name', width: 150 },
        { field: 'Building_status', headerName: 'Building status', width: 120 },
        { field: 'Zone_responsibility', headerName: 'Zone responsibility', width: 150 },
        { field: 'Team_responsibility', headerName: 'Team responsibility', width: 150 },
        {
            field: 'Juristic_contact', headerName: 'Juristic Contact', width: 200,
            renderCell: (params) => (
                <CustomAvatarChip value={params.value} chipStyle={'bg-lightGrey'} modalCardType={'contact'} />
            ),
        },
        { field: 'Special_requirement ', headerName: 'Special requirement ', width: 150 },
        { field: 'Require_specific_team', headerName: 'Require specific team ', width: 150 },
    ]
}


export const BuildingListData = ['Building ID : FM1005006 ', 'Building name : Asher at asoke ', 'Building status : Done ', 'Zone responsibility : Zone A ', 'Team responsibility : Team A ', 'Special requirement : -'];


export const projectInfoFormCardData = {
    inputs: [
        { label: 'Project ID', variant: 'standard', disabled: true, type: 'text', defaultValue: 'Auto generate', size: 'small', name: 'project-id' },
        { label: 'Project name', variant: 'standard', type: 'text', size: 'small', name: 'projectName' },
        { label: 'Juristic name', variant: 'standard', type: 'text', size: 'small', name: 'juristicName' },
        {
            label: 'Project status', type: 'select', variant: 'standard', name: 'projectStatus', menuItems: [
                { label: 'pending', value: 0 },
                { label: 'complete', value: 1 }
            ]
        },
        { label: 'Buildings', variant: 'standard', type: 'text', size: 'small', name: 'buildings' },
        { label: 'Units', variant: 'standard', type: 'text', size: 'small', name: 'units' },
        { label: 'Project sizing', variant: 'standard', disabled: true, type: 'text', size: 'small', name: 'projectSizing' },
        { label: 'Description', variant: 'standard', type: 'text', size: 'small', name: 'description' },
    ]
}

export const addressFormCardData = {
    inputs: [
        { label: 'House number', variant: 'standard', type: 'text', size: 'small', name: 'houseNo' },
        { label: 'Building/Village', variant: 'standard', type: 'text', size: 'small', name: 'building' },
        { label: 'Soi', variant: 'standard', type: 'text', size: 'small', name: 'soi' },
        { label: 'Street', variant: 'standard', type: 'text', size: 'small', name: 'street' },
        {
            label: 'Province', type: 'select', variant: 'standard', name: 'province', menuItems: [
                { label: 'dd', value: 0 },
                { label: 'cc', value: 1 }
            ]
        },
        {
            label: 'District', type: 'select', variant: 'standard', name: 'district', menuItems: [
                { label: 'dd', value: 0 },
                { label: 'cc', value: 1 }
            ]
        },
        {
            label: 'Sub-district', type: 'select', variant: 'standard', name: 'subDistrict', menuItems: [
                { label: 'dd', value: 0 },
                { label: 'cc', value: 1 }
            ]
        },
        {
            label: 'Post number', type: 'select', variant: 'standard', name: 'postNumber', menuItems: [
                { label: 'dd', value: 0 },
                { label: 'cc', value: 1 }
            ]
        },
    ]
}


export const jCInfoFormCardData = {
    inputs: [
        { label: 'Name', variant: 'standard', type: 'text', size: 'small',name:'name' },
        { label: 'Position', variant: 'standard', type: 'text', size: 'small',name:'position' },
        { label: 'Phone number 1', variant: 'standard', type: 'phoneNumber', size: 'small',name:'phoneNo1' },
        { label: 'Phone number 2', variant: 'standard', type: 'phoneNumber', size: 'small',name:'phoneNo2' },
        { label: 'E-mail 1', variant: 'standard', type: 'text', size: 'small',name:'eMail1' },
        { label: 'E-mail 2', variant: 'standard', type: 'text', size: 'small',name:'eMail2' },
        { label: 'Line ID', variant: 'standard', type: 'text', size: 'small',name:'lineId' },
        { label: 'Agency', variant: 'standard', type: 'text', size: 'small',name:'agency' },
        { label: 'Communicate Rating', variant: 'standard', type: 'rating', size: 'large',name:'communicateRating' },

    ]
}


export const paymentInfoFormCardData = {
    inputs: [
        {
            label: 'Bank', type: 'select', variant: 'standard', name: 'bank', menuItems: [
                { label: 'dd', value: 0 },
                { label: 'cc', value: 1 }
            ]
        },
        { label: 'Bank account number', variant: 'standard', type: 'text', size: 'small', name: 'bankAccountName' },
        { label: 'Account name', variant: 'standard', type: 'text', size: 'small', name: 'accountName' },
        { label: 'Note', variant: 'standard', type: 'text', size: 'small', name: 'note' },
    ]
}

export const responsibleAEInfoFormCardData = {
    inputs: [
        {
            label: 'Select AE', type: 'select', variant: 'standard', name: 'selectAe', menuItems: [
                { label: 'dd', value: 0 },
                { label: 'cc', value: 1 }
            ] 
        },
        {
            label: '', type: 'component', variant: 'standard', name: 'component',
        },
        {
            label: 'Responsible status', type: 'select', variant: 'standard', name: 'responsibleStatus', menuItems: [
                { label: 'dd', value: 0 },
                { label: 'cc', value: 1 }
            ] 
        },
        { label: 'Responsible date', variant: 'standard', type: 'date', size: 'small', name: 'responsibleDate' },
        { label: 'Irresponsible date', variant: 'standard', type: 'date', size: 'small', name: 'irresponsibleDate' },
    ]
}


export const aeInfoFormCardData = {
    inputs: [
        { label: 'ID', variant: 'standard', type: 'text', size: 'small', name: 'id' },
        { label: 'Name', variant: 'standard', type: 'text', size: 'small', name: 'name' },
        { label: 'Position', variant: 'standard', type: 'text', size: 'small', name: 'position' },
        { label: 'Phone number', variant: 'standard', type: 'phoneNumber', size: 'small', name: 'phoneNumber' },
        { label: 'E-mail', variant: 'standard', type: 'text', size: 'small', name: 'email' },
    ]
}


export const operatingTimeFormCardData = {
    inputs: [
        { label: 'Day', variant: 'standard', type: 'date', size: 'small', name: 'day' },
        { label: 'Time', variant: 'standard', type: 'time', size: 'small', name: 'time' },
        { label: 'Note', variant: 'standard', type: 'text', size: 'small', name: 'note' },
    ]
}


export const locationFormCardData = {
    inputs: [
        { label: 'Latitude', variant: 'standard', type: 'text', size: 'small', name: 'latitude' },
        { label: 'Longitude', variant: 'standard', type: 'text', size: 'small', name: 'longitude' },
    ]
}



// contract info

export const contractInfoFormCardData = {
    inputs: [
        { label: 'Contract ID', variant: 'standard', disabled: true, type: 'text', defaultValue: 'Auto generate', size: 'small', name: 'contractId' },
        { label: 'Project ID', variant: 'standard', type: 'text', size: 'small', name: 'projectId' },
        {
            label: 'select-project', type: 'select', variant: 'standard', name: 'project', menuItems: [
                { label: 'pending', value: 0 },
                { label: 'complete', value: 1 }
            ]
        },
        { label: 'Juristic name', variant: 'standard', type: 'text', size: 'small', name: 'juristicName' },
        { label: 'Buildings', variant: 'standard', type: 'text', size: 'small', name: 'buildings' },
        { label: 'Units', variant: 'standard', type: 'text', size: 'small', name: 'units' },
        { label: 'Project sizing', variant: 'standard', disabled: true, type: 'text', size: 'small', name: 'projectSizing' },
        { label: 'Description', variant: 'standard', type: 'text', size: 'small', name: 'description' },
    ]
}


export const specificDetailFormCardData = {
    inputs: [
        { label: 'Start Date', variant: 'standard', type: 'date', size: 'small', name: 'startDate' },
        { label: 'Expiration Date', variant: 'standard', type: 'date', size: 'small', name: 'expirationDate' },

        { label: 'Period (Year)', variant: 'standard',  type: 'text',  size: 'small', name: 'period' },
        { label: 'Renewal Date', variant: 'standard', type: 'date', size: 'small', name: 'renewalDate' },
        { label: 'Payment Condition', variant: 'standard', type: 'text', size: 'small', name: 'paymentCondition' },

    ]
}

 
export const buildingInfoFormCardData = {
    inputs:[
        { label: 'Project ID', variant: 'standard', type: 'text', size: 'small', name: 'projectId' },
        { label: 'Project name', variant: 'standard', type: 'text', size: 'small', name: 'projectName' },
        { label: 'Juristic name', variant: 'standard', type: 'text', size: 'small', name: 'juristicName' },
        { label: 'Building ID', variant: 'standard', type: 'text', size: 'small', name: 'buildingId' },
        { label: 'Building name*', variant: 'standard', type: 'text', size: 'small', name: 'buildingName' },
        { label: 'Floors*', variant: 'standard', type: 'text', size: 'small', name: 'floors'},
        { label: 'Units*', variant: 'standard', type: 'text', size: 'small', name: 'units' },
        {
            label: 'Building sizing', type: 'select', variant: 'standard', name: 'sizing', menuItems: [
                { label: 'pending', value: 0 },
                { label: 'complete', value: 1 }
            ]
        },
    ]
}

export const buildingSpecificDetailFormCardData = {
    inputs: [

        {
            label: 'Building status', type: 'select', variant: 'standard', name: 'buildingStatus', menuItems: [
                { label: 'pending', value: 0 },
                { label: 'complete', value: 1 }
            ]
        },
        { label: 'Special Requirement', variant: 'standard', type: 'text', size: 'small', name: 'specialRequirement' },
        { label: 'Require specific team', variant: 'standard', type: 'text', size: 'small', name: 'requireSpecificTeam' },

    ]
    
    
}