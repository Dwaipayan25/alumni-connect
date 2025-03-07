import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
    
  } from "@iconscout/react-unicons";
  

  
  // Sidebar Data
  export const SideBarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Tasks",
    },
    {
      icon: UilUsersAlt,
      heading: "Prizes",
    },
    {
      icon: UilPackage,
      heading: 'Mentors'
    },
    {
      icon: UilChart,
      heading: 'Analytics'
    },
  ];
  
  // Analytics Cards Data
  export const CardsData = [
    {
      title: "Rewards",
      color: {
        background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Rewards",
      color: {
        background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Rewards",
      color: {
        background:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];

  export const UpdatesData = [
    {
     
      name: "Andrew Thomas",
      noti: "Microsoft Currently Hiring",
      time: "25 seconds ago",
    },
    {
     
      name: "James Bond",
      noti: "Freelancing Project Available",
      time: "30 minutes ago",
    },
    {
     
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];