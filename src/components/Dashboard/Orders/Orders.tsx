
import useOrders from "./useOrders";
import { motion } from "framer-motion";
import { Table } from "@/components/core/Table/Table";
import { OrdersHeading } from "@/constants/settings";
import { Fragment } from "react/jsx-runtime";
import { Actions } from "@/components/core/Table/Actions/Actions";


const Orders = () => {
    const { ordersData, getStatusClass } = useOrders();

    const MotionTr = motion.tr;
    return (
        <div className="px-24">
            <div className="flex items-center justify-between">
                <h1 className="text-lg">My Orders</h1>
                <div>
                    <input type="search" placeholder="Search services or date" className="border border-gray-300 py-1 px-2 rounded-full " />
                </div>

            </div>

            <div>
                <div>
                    <Table headers={OrdersHeading} data={ordersData}>
                        <>
                            {ordersData
                                ? ordersData?.map((item: any) => (
                                    <Fragment>
                                        <MotionTr
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="cc-custom-table-data-row"
                                            data-testid={item?.id}
                                        >
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap font-semibold">{item.ID}</p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <div className="flex items-center">

                                                    <div>
                                                        <p className="text-gray-900 whitespace-no-wrap font-semibold text-lg">
                                                            {item.type}
                                                        </p>
                                                        <p className="text-gray-600">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap font-semibold">{item.date}</p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap font-semibold">{item.time}</p>
                                            </td>
                                            <td
                                                className={`px-5 py-5 text-sm border-b border-gray-200 font-semibold }`}
                                            >
                                                <span className={`${getStatusClass(item.status)}`}>  {item.status}</span>

                                            </td>

                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap font-semibold">{item.total}</p>
                                            </td>

                                            <td>
                                                <Actions
                                                    actions={item?.actions}
                                                    id={item?.ID}
                                                    item={item}
                                                />
                                            </td>
                                        </MotionTr>


                                    </Fragment>

                                )) : null}

                        </>

                    </Table>







                </div>

            </div>


        </div>
    )
}

export default Orders
