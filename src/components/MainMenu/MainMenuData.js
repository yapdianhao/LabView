import { FaMicroscope, FaCalculator, FaPills, FaRegCalendarAlt, FaUsers } from 'react-icons/fa';
import { GiAutoRepair } from 'react-icons/gi';
import { MdDataUsage, MdManageAccounts, MdMobileFriendly } from 'react-icons/md';
import { HiDocumentReport } from 'react-icons/hi';
import { AiOutlineAudit } from 'react-icons/ai';


export const MainMenuData = [{
        itemName: 'Assets',
        path: '/assets',
        icon: <FaMicroscope />,
    }, 
    {
        itemName: 'Utilization',
        path: '/utilizations',
        icon: <MdDataUsage />,
    }, {
        itemName: 'Repairs',
        path: '/repairs',
        icon: <GiAutoRepair />
    }, {
        itemName: 'PM/Cal/OQ',
        path: '/pmcals',
        icon: <FaCalculator />,
    }, {
        itemName: 'Consumables',
        path: '/consumables',
        icon: <FaPills />
    }, {
        itemName: 'Schedule',
        path: '/schedule',
        icon: <FaRegCalendarAlt />,
    }, {
        itemName: 'Reporting',
        path: '/reporting',
        icon: <HiDocumentReport />,
    }, {
        itemName: 'Vendors',
        path: '/vendors',
        icon: <FaUsers />,
    }, {
        itemName: 'Users',
        path: '/operators',
        icon: <MdManageAccounts />,
    }, {
        itemName: 'Audit Trail',
        path: '/audit',
        icon: <AiOutlineAudit />,
    }, {
        itemName: 'Booking',
        path: '/booking',
        icon: <MdMobileFriendly />,
    }
];