
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function useOrders()  {

    const [selectedData, setSelectedData] = useState<any>([]);
    const [selectedAction, setSelectedAction] = useState("");


    const ordersData = [
        {
            ID: "#12345",
            type: "Brightening Facial",
            desc: "Facial Treatments",
            date: "Nov 24, 2024",
            time: "03:30 PM",
            status: "Completed",
            total: "₦70,000",
            actions: []
        },
        {
            ID: "#12345",
            type: "Brightening Facial",
            desc: "Facial Treatments",
            date: "Nov 24, 2024",
            time: "03:30 PM",
            status: "Completed",
            total: "₦70,000",
            actions: []
        },
        {
            ID: "#12345",
            type: "Brightening Facial",
            desc: "Facial Treatments",
            date: "Nov 24, 2024",
            time: "03:30 PM",
            status: "Completed",
            total: "₦70,000",
            actions: []
        },
        {
            ID: "#12345",
            type: "Brightening Facial",
            desc: "Facial Treatments",
            date: "Nov 24, 2024",
            time: "03:30 PM",
            status: "Completed",
            total: "₦70,000",
            actions: []
        },
        {
            ID: "#12345",
            type: "Brightening Facial",
            desc: "Facial Treatments",
            date: "Nov 24, 2024",
            time: "03:30 PM",
            status: "Completed",
            total: "₦70,000",
            actions: []
        },
        {
            ID: "#12345",
            type: "Brightening Facial",
            desc: "Facial Treatments",
            date: "Nov 24, 2024",
            time: "03:30 PM",
            status: "Completed",
            total: "₦70,000",
            actions: []
        },
        {
            ID: "#12345",
            type: "Brightening Facial",
            desc: "Facial Treatments",
            date: "Nov 24, 2024",
            time: "03:30 PM",
            status: "Cancelled",
            total: "₦70,000",
            actions: []
        },
        {
            ID: "#12345",
            type: "Brightening Facial",
            desc: "Facial Treatments",
            date: "Nov 24, 2024",
            time: "03:30 PM",
            status: "Completed",
            total: "₦70,000",
            actions: []
        },
        {
            ID: "#12345",
            type: "Brightening Facial",
            desc: "Facial Treatments",
            date: "Nov 24, 2024",
            time: "03:30 PM",
            status: "Completed",
            total: "₦70,000",
            actions: []
        },
       
        
    ];

    const getStatusClass = (status: string) => {
        switch (status) {
          case "Completed":
            return " text-green-600 text-md text-center";
          case "Cancelled":
            return " text-red-600 text-md text-center";
          case "Cancelled":
        return " text-gray-900  text-center";
          default:
            return " text-gray-800";
        }
      };

      const getActions = () => {
        {
           
             return [
               {
                 name: <p className="text-body">Rate Service</p>,
                 icon: (
                   <Icon
                     icon="ph:lock-simple"
                     className="w-[18px] h-[18px] mr-[10px]"
                   />
                 ),
                 method: (item: any) => {
                   setSelectedData(item);
                   setSelectedAction("rate-services");
                 },
               },


 
               {
                 name: <p className="text-body">Rebook Order</p>,
                 icon: (
                   <Icon
                     icon="ph:lock-simple"
                     className="w-[18px] h-[18px] mr-[10px]"
                   />
                 ),
                 method: (item: any) => {
                   setSelectedData(item);
                   setSelectedAction("rebook-order");
                 },
               },
              
             ];
           
            
          
         }
       };
     

       const getTableData = () => {
        return ordersData.map((item) => ({
          ...item,
          actions: getActions(),
        }));
      };

    
    return {
        ordersData: getTableData(),
        selectedAction,
        selectedData,
        setSelectedAction,
        setSelectedData,
        getStatusClass

      };

}