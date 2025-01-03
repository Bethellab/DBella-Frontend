import { useState } from "react";
import adminuser from "../../../../assets/image/adminuser.png";
import RescheduleModal from "./RescheduleModal";


const appointments = [
    {
        day: "Wed",
        date: "12",
        time: "09:30 AM",
        title: "Hydrating Facial Section",
        category: "Facial Treatment",
        user: {
            name: "Olivia Main",
            email: "oliviamain123@gmail.com",
            image: adminuser,
        },
    },
    {
        day: "Wed",
        date: "13",
        time: "10:30 AM",
        title: "Makeup Session",
        category: "Makeup Treatment",
        user: {
            name: "Ava Davis",
            email: "avadavis654@gmail.com",
            image: adminuser,
        },
    },
    {
        day: "Wed",
        date: "14",
        time: "11:30 AM",
        title: "Skin Rejuvenation",
        category: "Skin Treatment",
        user: {
            name: "Emma Watson",
            email: "emmawatson456@gmail.com",
            image: adminuser,
        },
    },
];

const Upcoming = () => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [modalData, setModalData] = useState(null);

    const handleDropdownToggle = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const openModal = (appointment: any) => {
        setModalData(appointment);
    };

    const closeModal = () => {
        setModalData(null);
    };

    return (
        <div className="overflow-y-scroll mb-36">
            <div className="flex items-center justify-between">
                <h1 className="text-xl">My Upcoming Appointments</h1>
                <div>
                    <input
                        type="search"
                        placeholder="Search services"
                        className="border border-gray-300 py-1 px-2 rounded-full"
                    />
                </div>
            </div>

            <div className="mt-6">
                <h1 className="text-lg">November, 2024</h1>

                <div className="space-y-2">
                    {appointments.map((appointment, index) => (
                        <div
                            key={index}
                            className="flex py-2 justify-between items-center rounded-lg border border-gray-300 my-0  relative"
                        >
                            <div className="flex gap-6 items-center flex-grow">
                                <div className="flex w-[120px] px-4 py-3 flex-col justify-center items-center border-r border-gray-300">
                                    <span className="text-xl font-semibold text-gray-800 text-center">
                                        {appointment.day}
                                    </span>
                                    <span className="text-4xl font-semibold text-gray-800 text-center tracking-wide">
                                        {appointment.date}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-lg font-semibold text-gray-900">
                                            {appointment.title}
                                        </span>
                                        <span className="text-md font-semibold text-gray-700">
                                            {appointment.category}
                                        </span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <img
                                            src={appointment.user.image}
                                            alt={`${appointment.user.name}'s avatar`}
                                            className="w-10 h-10 rounded-full bg-cover bg-no-repeat"
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-base font-semibold text-gray-900">
                                                {appointment.user.name}
                                            </span>
                                            <span className="text-sm text-indigo-700">
                                                {appointment.user.email}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between gap-8 items-end w-[139px] px-6 py-4">
                                <svg
                                    onClick={() => handleDropdownToggle(index)}
                                    className="cursor-pointer"
                                    width="18"
                                    height="4"
                                    viewBox="0 0 18 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.75 2C3.75 2.22981 3.70474 2.45738 3.61679 2.6697C3.52884 2.88202 3.39994 3.07493 3.23744 3.23744C3.07493 3.39994 2.88202 3.52884 2.6697 3.61679C2.45738 3.70473 2.22981 3.75 2 3.75C1.77019 3.75 1.54262 3.70473 1.3303 3.61679C1.11798 3.52884 0.925066 3.39994 0.762563 3.23744C0.600061 3.07493 0.471157 2.88202 0.383211 2.6697C0.295265 2.45738 0.25 2.22981 0.25 2C0.25 1.53587 0.434375 1.09075 0.762563 0.762563C1.09075 0.434374 1.53587 0.25 2 0.25C2.46413 0.25 2.90925 0.434374 3.23744 0.762563C3.56563 1.09075 3.75 1.53587 3.75 2ZM9 0.25C9.46413 0.25 9.90925 0.434374 10.2374 0.762563C10.5656 1.09075 10.75 1.53587 10.75 2C10.75 2.46413 10.5656 2.90925 10.2374 3.23744C9.90925 3.56563 9.46413 3.75 9 3.75C8.53587 3.75 8.09075 3.56563 7.76256 3.23744C7.43437 2.90925 7.25 2.46413 7.25 2C7.25 1.53587 7.43437 1.09075 7.76256 0.762563C8.09075 0.434374 8.53587 0.25 9 0.25ZM16 0.25C16.4641 0.25 16.9092 0.434374 17.2374 0.762563C17.5656 1.09075 17.75 1.53587 17.75 2C17.75 2.46413 17.5656 2.90925 17.2374 3.23744C16.9092 3.56563 16.4641 3.75 16 3.75C15.5359 3.75 15.0908 3.56563 14.7626 3.23744C14.4344 2.90925 14.25 2.46413 14.25 2C14.25 1.53587 14.4344 1.09075 14.7626 0.762563C15.0908 0.434374 15.5359 0.25 16 0.25Z"
                                        fill="black"
                                    />
                                </svg>
                                <span className="text-lg font-semibold text-gray-900">
                                    {appointment.time}
                                </span>
                                {openDropdown === index && (
                                    <div
                                        className="absolute top-24 right-0 mt-10 bg-white shadow-lg border rounded-lg z-50"
                                        style={{ transform: "translateY(-50%)", minWidth: "150px" }}
                                    >
                                        <ul className="py-2 text-gray-700">
                                            <li onClick={() => {
                                                openModal(appointment);
                                                handleDropdownToggle(index);
                                            }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                Reschedule
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                Change Specialist
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer">
                                                Cancel Booking
                                            </li>
                                        </ul>
                                    </div>
                                )}



                            </div>

                        </div>


                    ))}
                </div>

            </div>

             {/* Overlay */}
             {modalData && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={closeModal}
                ></div>
            )}
            {/* Modal */}
            {modalData && (
               
                    <div className="fixed overflow-y-scroll top-0 right-0 w-full max-w-[570px] h-full bg-white shadow-lg z-50">
                        <div className="flex justify-between items-center border-b py-3 px-4 ">
                            <h2 className="text-lg font-semibold">Reschedule Appointment</h2>

                            {/* Add form fields or details here */}
                            <button

                                onClick={closeModal}
                            >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.99998 7.11562L15.6 0.515625L17.4853 2.40096L10.8853 9.00096L17.4853 15.601L15.5986 17.4863L8.99865 10.8863L2.39998 17.4863L0.514648 15.5996L7.11465 8.99962L0.514648 2.39963L2.39998 0.516958L8.99998 7.11562Z" fill="#191616" />
                                </svg>

                            </button>
                        </div>
                        <div>
                            <RescheduleModal />
                        </div>

                    </div>
                
            )}
        </div>
    );
};

export default Upcoming;