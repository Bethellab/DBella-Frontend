
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function useTransactions() {

  const [selectedData, setSelectedData] = useState<any>([]);
  const [selectedAction, setSelectedAction] = useState("");


  const transactionsData = [
    {
      ID: "TXN123456",
      type: "Brightening Facial",
      desc: "Facial Treatments",
      date: "Nov 24, 2024",
      time: "03:30 PM",
      card: "Credit card",
      online: "Pay online",
      status: "Completed",
      total: "₦70,000",
      actions: []
    },
    {
      ID: "TXN123456",
      type: "Brightening Facial",
      desc: "Facial Treatments",
      date: "Nov 24, 2024",
      time: "03:30 PM",
      card: "Credit card",
      online: "Pay online",
      status: "Completed",
      total: "₦70,000",
      actions: []
    },

    {
      ID: "TXN123456",
      type: "Brightening Facial",
      desc: "Facial Treatments",
      date: "Nov 24, 2024",
      time: "03:30 PM",
      card: "Credit card",
      online: "Pay online",
      status: "Failed",
      total: "₦70,000",
      actions: []
    },

    {
      ID: "TXN123456",
      type: "Brightening Facial",
      desc: "Facial Treatments",
      date: "Nov 24, 2024",
      time: "03:30 PM",
      card: "Credit card",
      online: "Pay online",
      status: "Completed",
      total: "₦70,000",
      actions: []
    },

    {
      ID: "TXN123456",
      type: "Brightening Facial",
      desc: "Facial Treatments",
      date: "Nov 24, 2024",
      time: "03:30 PM",
      card: "Credit card",
      online: "Pay online",
      status: "Completed",
      total: "₦70,000",
      actions: []
    },

    {
      ID: "TXN123456",
      type: "Brightening Facial",
      desc: "Facial Treatments",
      date: "Nov 24, 2024",
      time: "03:30 PM",
      card: "Credit card",
      online: "Pay online",
      status: "Completed",
      total: "₦70,000",
      actions: []
    },

    {
      ID: "TXN123456",
      type: "Brightening Facial",
      desc: "Facial Treatments",
      date: "Nov 24, 2024",
      time: "03:30 PM",
      card: "Credit card",
      online: "Pay online",
      status: "Completed",
      total: "₦70,000",
      actions: []
    },

    {
      ID: "TXN123456",
      type: "Brightening Facial",
      desc: "Facial Treatments",
      date: "Nov 24, 2024",
      time: "03:30 PM",
      card: "Credit card",
      online: "Pay online",
      status: "Completed",
      total: "₦70,000",
      actions: []
    },

    {
      ID: "TXN123456",
      type: "Brightening Facial",
      desc: "Facial Treatments",
      date: "Nov 24, 2024",
      time: "03:30 PM",
      card: "Credit card",
      online: "Pay online",
      status: "Completed",
      total: "₦70,000",
      actions: []
    },




  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return " text-green-600 text-md text-center bg-gray-100 p-2 rounded-full";
      case "Failed":
        return " text-red-600 text-md text-center  p-2 rounded-full";
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
    return transactionsData.map((item) => ({
      ...item,
      actions: getActions(),
    }));
  };


  return {
    transactionsData: getTableData(),
    selectedAction,
    selectedData,
    setSelectedAction,
    setSelectedData,
    getStatusClass

  };

}