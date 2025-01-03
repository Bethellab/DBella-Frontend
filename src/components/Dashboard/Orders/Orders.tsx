
import useOrders from "./useOrders";
import { motion } from "framer-motion";
import { Table } from "@/components/core/Table/Table";
import { OrdersHeading } from "@/constants/settings";
import { Fragment } from "react/jsx-runtime";
import { Actions } from "@/components/core/Table/Actions/Actions";
import { useState } from "react";
import award from '../../../assets/image/award.png'


const Orders = () => {
    const { ordersData, getStatusClass, selectedAction, setSelectedAction } = useOrders();
    const [modalStep, setModalStep] = useState("input");

    const handleSubmitReview = () => {
        setModalStep("confirmation");
    };


    const MotionTr = motion.tr;
    return (
        <div className="lg:px-24">
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

                    <div>
                        {selectedAction === "rate-services" && (
                            <div>
                                <div
                                    className="fixed inset-0 bg-black opacity-50 z-40"
                                    onClick={() => setSelectedAction("")}
                                ></div>


                            </div>

                        )}
                        {selectedAction === "rate-services" && (
                            <div>
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="w-[500px] pb-8 px-4 bg-white rounded-lg relative ">
                                        <div className=" mt-4">
                                            {/* Close Button */}
                                            <div
                                                onClick={() => setSelectedAction("")}
                                                className="flex items-end justify-end p-2 cursor-pointer"
                                            >
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.99999 5.58672L11.95 0.636719L13.364 2.05072L8.41399 7.00072L13.364 11.9507L11.949 13.3647L6.99899 8.41472L2.04999 13.3647L0.635986 11.9497L5.58599 6.99972L0.635986 2.04972L2.04999 0.637719L6.99999 5.58672Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </div>


                                            {modalStep === "input" && (
                                                <>
                                                    <div className="flex flex-col justify-center items-center">
                                                        <h2 className="text-center font-['Cormorant_Garamond'] text-xl font-bold text-black mt-2">
                                                            Give Feedback For
                                                        </h2>
                                                        <p className="text-[#93CC25] font-medium">Exfoliating Facial - Facial Treatments</p>
                                                        <div>

                                                        </div>

                                                    </div>
                                                    <div className="px-4 mt-6 flex flex-col gap-8">
                                                        <div className="space-y-2">
                                                            <h1 className="font-medium text-gray-600">How well was the service Rendered?</h1>
                                                            <div className="flex justify-between items-center">
                                                                <svg width="28" height="28" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.7499 24.7083L16.9999 21.5417L22.2499 24.75L20.8749 18.75L25.4999 14.75L19.4166 14.2083L16.9999 8.54167L14.5833 14.1667L8.49992 14.7083L13.1249 18.75L11.7499 24.7083ZM6.70825 31.6667L9.41658 19.9583L0.333252 12.0833L12.3333 11.0417L16.9999 0L21.6666 11.0417L33.6666 12.0833L24.5833 19.9583L27.2916 31.6667L16.9999 25.4583L6.70825 31.6667Z" fill="#797979" />
                                                                </svg>

                                                                <svg width="28" height="28" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.7499 24.7083L16.9999 21.5417L22.2499 24.75L20.8749 18.75L25.4999 14.75L19.4166 14.2083L16.9999 8.54167L14.5833 14.1667L8.49992 14.7083L13.1249 18.75L11.7499 24.7083ZM6.70825 31.6667L9.41658 19.9583L0.333252 12.0833L12.3333 11.0417L16.9999 0L21.6666 11.0417L33.6666 12.0833L24.5833 19.9583L27.2916 31.6667L16.9999 25.4583L6.70825 31.6667Z" fill="#797979" />
                                                                </svg>

                                                                <svg width="28" height="28" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.7499 24.7083L16.9999 21.5417L22.2499 24.75L20.8749 18.75L25.4999 14.75L19.4166 14.2083L16.9999 8.54167L14.5833 14.1667L8.49992 14.7083L13.1249 18.75L11.7499 24.7083ZM6.70825 31.6667L9.41658 19.9583L0.333252 12.0833L12.3333 11.0417L16.9999 0L21.6666 11.0417L33.6666 12.0833L24.5833 19.9583L27.2916 31.6667L16.9999 25.4583L6.70825 31.6667Z" fill="#797979" />
                                                                </svg>

                                                                <svg width="28" height="28" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.7499 24.7083L16.9999 21.5417L22.2499 24.75L20.8749 18.75L25.4999 14.75L19.4166 14.2083L16.9999 8.54167L14.5833 14.1667L8.49992 14.7083L13.1249 18.75L11.7499 24.7083ZM6.70825 31.6667L9.41658 19.9583L0.333252 12.0833L12.3333 11.0417L16.9999 0L21.6666 11.0417L33.6666 12.0833L24.5833 19.9583L27.2916 31.6667L16.9999 25.4583L6.70825 31.6667Z" fill="#797979" />
                                                                </svg>

                                                                <svg width="28" height="28" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.7499 24.7083L16.9999 21.5417L22.2499 24.75L20.8749 18.75L25.4999 14.75L19.4166 14.2083L16.9999 8.54167L14.5833 14.1667L8.49992 14.7083L13.1249 18.75L11.7499 24.7083ZM6.70825 31.6667L9.41658 19.9583L0.333252 12.0833L12.3333 11.0417L16.9999 0L21.6666 11.0417L33.6666 12.0833L24.5833 19.9583L27.2916 31.6667L16.9999 25.4583L6.70825 31.6667Z" fill="#797979" />
                                                                </svg>

                                                            </div>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <h1 className="font-medium text-gray-600">Rate the staff member who assisted you.</h1>
                                                            <div className="flex justify-between items-center">
                                                                <svg width="28" height="28" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.7499 24.7083L16.9999 21.5417L22.2499 24.75L20.8749 18.75L25.4999 14.75L19.4166 14.2083L16.9999 8.54167L14.5833 14.1667L8.49992 14.7083L13.1249 18.75L11.7499 24.7083ZM6.70825 31.6667L9.41658 19.9583L0.333252 12.0833L12.3333 11.0417L16.9999 0L21.6666 11.0417L33.6666 12.0833L24.5833 19.9583L27.2916 31.6667L16.9999 25.4583L6.70825 31.6667Z" fill="#797979" />
                                                                </svg>

                                                                <svg width="28" height="28" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.7499 24.7083L16.9999 21.5417L22.2499 24.75L20.8749 18.75L25.4999 14.75L19.4166 14.2083L16.9999 8.54167L14.5833 14.1667L8.49992 14.7083L13.1249 18.75L11.7499 24.7083ZM6.70825 31.6667L9.41658 19.9583L0.333252 12.0833L12.3333 11.0417L16.9999 0L21.6666 11.0417L33.6666 12.0833L24.5833 19.9583L27.2916 31.6667L16.9999 25.4583L6.70825 31.6667Z" fill="#797979" />
                                                                </svg>

                                                                <svg width="28" height="28" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.7499 24.7083L16.9999 21.5417L22.2499 24.75L20.8749 18.75L25.4999 14.75L19.4166 14.2083L16.9999 8.54167L14.5833 14.1667L8.49992 14.7083L13.1249 18.75L11.7499 24.7083ZM6.70825 31.6667L9.41658 19.9583L0.333252 12.0833L12.3333 11.0417L16.9999 0L21.6666 11.0417L33.6666 12.0833L24.5833 19.9583L27.2916 31.6667L16.9999 25.4583L6.70825 31.6667Z" fill="#797979" />
                                                                </svg>

                                                                <svg width="28" height="28" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.7499 24.7083L16.9999 21.5417L22.2499 24.75L20.8749 18.75L25.4999 14.75L19.4166 14.2083L16.9999 8.54167L14.5833 14.1667L8.49992 14.7083L13.1249 18.75L11.7499 24.7083ZM6.70825 31.6667L9.41658 19.9583L0.333252 12.0833L12.3333 11.0417L16.9999 0L21.6666 11.0417L33.6666 12.0833L24.5833 19.9583L27.2916 31.6667L16.9999 25.4583L6.70825 31.6667Z" fill="#797979" />
                                                                </svg>

                                                                <svg width="28" height="28" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.7499 24.7083L16.9999 21.5417L22.2499 24.75L20.8749 18.75L25.4999 14.75L19.4166 14.2083L16.9999 8.54167L14.5833 14.1667L8.49992 14.7083L13.1249 18.75L11.7499 24.7083ZM6.70825 31.6667L9.41658 19.9583L0.333252 12.0833L12.3333 11.0417L16.9999 0L21.6666 11.0417L33.6666 12.0833L24.5833 19.9583L27.2916 31.6667L16.9999 25.4583L6.70825 31.6667Z" fill="#797979" />
                                                                </svg>

                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h1>Review</h1>
                                                            <div>
                                                                <textarea className="w-full border-2 rounded-lg h-36 border-gray-300 outline-none">

                                                                </textarea>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <button onClick={handleSubmitReview} className="text-center bg-[#5E25CC] text-white w-full p-2 rounded-full">Submit Review</button>
                                                        </div>

                                                    </div>


                                                </>

                                            )}

                                            {modalStep === "confirmation" && (
                                                <div className="flex flex-col items-center justify-center">


                                                    <img src={award} className="flex items-center justify-center" />

                                                    <div className="mt-10">
                                                        {/* Confirmation Title */}
                                                        <h2 className="text-2xl font-bold text-gray-900 text-center font-['Cormorant_Garamond']">
                                                            Thank you for your Feedback!
                                                        </h2>

                                                        {/* Confirmation Message */}
                                                        <p className="text-sm text-gray-600 mt-2 text-center font-['Open_Sans']">
                                                            We truly value your presence and can't wait to see you again! Our goal is to consistently offer you the best service possible. See you soon 💅🏽
                                                        </p>

                                                    </div>



                                                </div>
                                            )}





                                        </div>
                                    </div>
                                </div>



                            </div>

                        )}

                    </div>








                </div>


            </div>




        </div>
    )
}

export default Orders
