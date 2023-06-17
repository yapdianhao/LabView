import React from 'react';
import {
  FaMicroscope,
  FaCalculator,
  FaPills,
  FaRegCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import {
  MdDataUsage,
  MdManageAccounts,
  MdMobileFriendly,
} from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { AiOutlineAudit } from "react-icons/ai";

export const MainMenuData = [
  {
    itemName: "Assets",
    path: "/assets",
    icon: <FaMicroscope />,
    pageIndex: 0,
  },
  {
    itemName: "Utilization",
    path: "/utilizations",
    icon: <MdDataUsage />,
    pageIndex: 1,
  },
  {
    itemName: "Repairs",
    path: "/repairs",
    icon: <GiAutoRepair />,
    pageIndex: 2,
  },
  {
    itemName: "PM/Cal/OQ",
    path: "/pmcals",
    icon: <FaCalculator />,
    pageIndex: 3,
  },
  {
    itemName: "Consumables",
    path: "/consumables",
    icon: <FaPills />,
    pageIndex: 4,
  },
  {
    itemName: "Schedule",
    path: "/schedule",
    icon: <FaRegCalendarAlt />,
    pageIndex: 5,
  },
  {
    itemName: "Reporting",
    path: "/reporting",
    icon: <HiDocumentReport />,
  },
  {
    itemName: "Vendors",
    path: "/vendors",
    icon: <FaUsers />,
  },
  {
    itemName: "Users",
    path: "/operators",
    icon: <MdManageAccounts />,
  },
  {
    itemName: "Audit Trail",
    path: "/audit",
    icon: <AiOutlineAudit />,
  },
  {
    itemName: "Booking",
    path: "/booking",
    icon: <MdMobileFriendly />,
  },
];
