
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const RescheduleModal = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };
    return (
        <div>
            <div className="py-6 px-2 space-y-2 border-b w-ful  ">
                <div className='flex items-center justify-between px-4'>
                    <h1 className='font-medium'>Change your current appointment</h1>
                    <span className='text-sm flex items-center gap-2'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" transform="rotate(180 6 6)" fill="#93CC25" />
                        </svg>

                        Current Schedule
                    </span>

                </div>

                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    className="react-calendar !border-none rounded-md  !text-gray-600  !w-[800px]"
                />

            </div>
            <div className="py-6 px-2 space-y-4 border-b  ">
                <h1 className='font-medium px-3' >Appointment Time</h1>
                <div className="flex gap-[22px] items-center flex-wrap ">
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">09:30 AM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">10:00 AM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">10:30 AM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#eaeaea] opacity-50 rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">11:00 AM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">11:30 AM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">12:00 PM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#ded3f4] rounded-[40px] border-none">
                        <span className="text-sm text-[#5e25cc]">12:30 PM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#eaeaea] opacity-50 rounded-[40px] border-none">
                        <span className="text-[16px] font-semibold text-[#797979]">01:00 PM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">01:30 PM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">02:00 PM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#eaeaea] opacity-50 rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">02:30 PM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">03:00 PM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#eaeaea] opacity-50 rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">03:30 PM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">04:00 PM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">04:30 PM</span>
                    </button>
                    <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                        <span className="text-sm text-[#404245]">05:00 PM</span>
                    </button>
                </div>


            </div>

            <div className='px-3 flex flex-col items-center gap-3'>
                <button className='w-full text-center bg-[#5E25CC] text-white rounded-full p-2 mt-16'>Reschedule </button>
                <span className='text-center'>You can only reschedule once. Thank You 💖</span>
            </div>


        </div>
    )
}

export default RescheduleModal
