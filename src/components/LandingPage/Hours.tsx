const Hours = () => {
    return (
        <div className="bg-white">
            <div className="py-12 px-4 lg:px-24">
                {/* Header Section */}
                <div className="flex items-center justify-between  lg:text-left">
                    <h1 className="text-2xl lg:text-3xl font-medium mb-6 lg:mb-0 font-['Cormorant_Garamond']">
                        Our Hours of Operation
                    </h1>
                    <button className="bg-black rounded-full py-3 px-4 text-white w-64 font-['Cormorant_Garamond']">
                        Explore Our Services
                    </button>
                </div>

                {/* Hours Section */}
                <div className="bg-[#120728] p-6 lg:p-10 rounded-2xl lg:rounded-full mt-10 flex flex-col items-center justify-center gap-6">
                    {/* Decorative Line */}
                    <svg
                        className="w-full hidden lg:block"
                        width="1065"
                        height="22"
                        viewBox="0 0 1065 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.333333 11C0.333333 16.891 5.10896 21.6667 11 21.6667C16.891 21.6667 21.6667 16.891 21.6667 11C21.6667 5.10896 16.891 0.333334 11 0.333333C5.10896 0.333333 0.333334 5.10896 0.333333 11ZM1043.33 11.0001C1043.33 16.8911 1048.11 21.6668 1054 21.6668C1059.89 21.6668 1064.67 16.8911 1064.67 11.0001C1064.67 5.10905 1059.89 0.333425 1054 0.333424C1048.11 0.333424 1043.33 5.10905 1043.33 11.0001ZM11 13L1054 13.0001L1054 9.00009L11 9L11 13Z"
                            fill="#DED3F4"
                        />
                        <circle cx="220" cy="11" r="11" fill="#DED3F4" />
                        <circle cx="429" cy="11" r="11" fill="#DED3F4" />
                        <circle cx="637" cy="11" r="11" fill="#DED3F4" />
                        <circle cx="846" cy="11" r="11" fill="#DED3F4" />
                    </svg>

                    {/* Days and Hours Section */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-12">
                        {[
                            { day: "Monday", time: "09:00 AM - 08:00 PM" },
                            { day: "Tuesday", time: "09:00 AM - 08:00 PM" },
                            { day: "Wednesday", time: "09:00 AM - 05:00 PM" },
                            { day: "Thursday", time: "09:00 AM - 08:00 PM" },
                            { day: "Friday", time: "09:00 AM - 05:00 PM" },
                            { day: "Saturday", time: "10:30 AM - 10:00 PM" },
                        ].map(({ day, time }, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-2 items-center text-center"
                            >
                                <span className="text-xl lg:text-2xl font-bold text-white font-['Cormorant_Garamond']">
                                    {day}
                                </span>
                                <span className="text-sm lg:text-base font-semibold text-[#93cc25]">
                                    {time}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hours;
