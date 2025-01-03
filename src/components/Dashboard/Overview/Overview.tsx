import adminuser from '../../../assets/image/adminuser.png'
import RecentTransaction from './RecentTransaction';

// Sample appointment data
const appointments = [
  {
    title: "Hand & Leg Massage",
    time: "02:00 PM",
    date: "Nov 30",
    client: "Ethan Johnson",
    service: "Manicure",
    avatar: adminuser,
  },
  {
    title: "Brightening Facial",
    time: "09:30 PM",
    date: "Nov 29",
    client: "Mia Davis",
    service: "Facial Treatments",
    avatar: adminuser,
  },
  {
    title: "Pampering Manicure",
    time: "04:30 PM",
    date: "Nov 29",
    client: "Aiden Brown",
    service: "Manicure",
    avatar: adminuser,
  },
];


const services = [
  {
    title: "Hair Styling & Treatment",
    price: "₦3,000",
    duration: "1hr 30min",
    image: "../assets/images/b63073cc-881b-4c7a-bfed-29e6b433923b.png",
  },
  {
    title: "Facial Treatment",
    price: "₦5,000",
    duration: "1hr",
    image: "../assets/images/example-facial-treatment.png",
  },
  {
    title: "Manicure & Pedicure",
    price: "₦2,500",
    duration: "45min",
    image: "../assets/images/example-manicure-pedicure.png",
  },
];



const Overview = () => {
  return (
    <div className="px-24 mb-4">
      <div className='flex items-start gap-6'>
        <div className="space-y-4">
          <div className=" w-[478px] h-[422px] bg-white rounded-lg border-2 border-gray-200 overflow-y-scroll ">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <span className="text-lg font-bold text-gray-900 font-['Cormorant_Garamond']">Upcoming Appointments</span>
              <div className="flex items-center gap-2 border-b border-gray-400">
                <span className="text-sm font-semibold text-gray-600">See All Schedules</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.96203 0.1782V1.98839C6.96203 2.09119 7.00647 2.18952 7.08425 2.2588L12.6907 7.15078L0.177832 7.15078C0.0800581 7.15078 6.10309e-05 7.23123 6.10352e-05 7.32956L6.10938e-05 8.67044C6.10981e-05 8.76877 0.0800582 8.84922 0.177832 8.84922H12.6907L7.08425 13.7412C7.00647 13.8082 6.96203 13.9066 6.96203 14.0116V15.8218C6.96203 15.9738 7.14202 16.0565 7.25535 15.9559L15.755 8.53859C15.832 8.47154 15.8936 8.38865 15.9359 8.29553C15.9782 8.20241 16.0001 8.10125 16.0001 7.99888C16.0001 7.89652 15.9782 7.79535 15.9359 7.70223C15.8936 7.60912 15.832 7.52623 15.755 7.45918L7.25535 0.0441121C7.1398 -0.0564539 6.96203 0.0262337 6.96203 0.1782Z" fill="#414246" />
                </svg>

              </div>
            </div>

            {/* Greeting */}
            <div className="px-6 py-4">
              <h2 className="text-2xl font-bold font-['Cormorant_Garamond']">
                Hey <span className="text-green-500">Martha</span> 👋🏽,
              </h2>
            </div>

            {/* Appointment List */}
            <div className="space-y-4 px-6 pb-4">
              {appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-50 rounded-lg border border-purple-200 p-4"
                >
                  <div className='flex flex-col gap-4'>
                    <h3 className="text-lg font-bold font-['Cormorant_Garamond']">{appointment.title}</h3>

                    <div>
                      <div className='flex items-center gap-4' >
                        <div className="w-8 h-8 rounded-full bg-cover bg-no-repeat" style={{ backgroundImage: `url(${appointment.avatar})` }}></div>
                        <div>
                          <p className="text-sm text-gray-600">{appointment.client}</p>
                          <p className="text-xs text-gray-500 capitalize">{appointment.service}</p>

                        </div>


                      </div>


                    </div>
                  </div>
                  <div className="text-right space-y-8">
                    <p className="text-md font-bold text-gray-900 font-['Cormorant_Garamond']">{appointment.date}</p>
                    <p className="text-sm font-semibold text-gray-900 ">{appointment.time}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" w-[478px] h-[368px] bg-white rounded-lg border-2 border-[#eaeaea] relative  overflow-y-scroll">
            {/* Header Section */}
            <div className="flex w-full px-6 pt-4 pb-2 justify-between items-start border border-[#eaeaea]">
              <span className="text-[18px]  leading-[24px] text-[#191515] font-[Cormorant_Garamond]">
                Popular Services
              </span>
              <div className="flex gap-2 items-center border-b border-b-[#5e25cc]">
                <span className="text-[16px]  text-[#5e25cc] capitalize font-[Cormorant_Garamond]">
                  Explore All Services
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.96203 0.1782V1.98839C6.96203 2.09119 7.00647 2.18952 7.08425 2.2588L12.6907 7.15078L0.177832 7.15078C0.0800581 7.15078 6.10309e-05 7.23123 6.10352e-05 7.32956L6.10938e-05 8.67044C6.10981e-05 8.76877 0.0800582 8.84922 0.177832 8.84922H12.6907L7.08425 13.7412C7.00647 13.8082 6.96203 13.9066 6.96203 14.0116V15.8218C6.96203 15.9738 7.14202 16.0565 7.25535 15.9559L15.755 8.53859C15.832 8.47154 15.8936 8.38865 15.9359 8.29553C15.9782 8.20241 16.0001 8.10125 16.0001 7.99888C16.0001 7.89652 15.9782 7.79535 15.9359 7.70223C15.8936 7.60912 15.832 7.52623 15.755 7.45918L7.25535 0.0441121C7.1398 -0.0564539 6.96203 0.0262337 6.96203 0.1782Z" fill="#5E25CC" />
                </svg>

              </div>
            </div>

            <div>
              {services.map((service, index) => (
                <div key={index} className=" w-[430px] p-4 justify-between items-start border-b border-[#ded3f4] mx-auto">



                  <div className='flex justify-between'>
                    {/* Service Details */}
                    <div className='flex flex-col gap-4'>

                      {/* Service Title */}
                      <span className="text-xl font-bold text-[#191515] font-['Cormorant_Garamond']">
                        {service.title}
                      </span>

                      {/* Service Info */}
                      <div className="flex gap-6 items-center">
                        {/* Price */}
                        <div className="flex items-center gap-2">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.95663 0.0410166H9.04338C9.79223 0.040992 10.4165 0.0409716 10.9121 0.107639C11.4353 0.178024 11.9074 0.332853 12.2869 0.712409C12.6665 1.09197 12.8213 1.56407 12.8917 2.08727C12.941 2.45357 12.9538 2.89019 12.9572 3.39546C13.4976 3.41282 13.9793 3.44443 14.4075 3.50201C15.3845 3.63342 16.1754 3.9103 16.7988 4.53427C17.422 5.15796 17.6988 5.9485 17.8304 6.92544C17.9584 7.87623 17.9583 9.0914 17.9583 10.6263V10.7131C17.9584 12.2444 17.9584 13.4575 17.8307 14.4068C17.6993 15.3839 17.4224 16.1747 16.7984 16.7981C16.1747 17.4213 15.3842 17.6982 14.4072 17.8297C13.4565 17.9577 12.2413 17.9577 10.7064 17.9577H7.2863C5.75495 17.9577 4.54188 17.9577 3.59253 17.83C2.61551 17.6986 1.82464 17.4217 1.20121 16.7978C0.578045 16.1741 0.301178 15.3835 0.169656 14.4066C0.0416552 13.4558 0.0416627 12.2406 0.0416721 10.7057L0.041672 10.619C0.0416588 9.08763 0.0416483 7.87456 0.169333 6.92521C0.300739 5.94819 0.577619 5.15732 1.20159 4.53389C1.82528 3.91072 2.61582 3.63386 3.59276 3.50234C4.02084 3.4447 4.50251 3.41302 5.04284 3.39561C5.04617 2.89028 5.05901 2.45361 5.10829 2.08727C5.17868 1.56407 5.33351 1.09197 5.71306 0.712409C6.09262 0.332853 6.56472 0.178024 7.08793 0.107639C7.5835 0.0409716 8.20778 0.040992 8.95663 0.0410166ZM6.29317 3.37586C6.61048 3.37435 6.94375 3.37435 7.29364 3.37435L10.7137 3.37435C11.0609 3.37435 11.3917 3.37434 11.7068 3.37583C11.7033 2.9005 11.6916 2.54206 11.6529 2.25393C11.6012 1.86963 11.5118 1.70507 11.4031 1.59629C11.2943 1.48752 11.1297 1.39818 10.7454 1.34648C10.343 1.29235 9.80352 1.29102 9.00001 1.29102C8.19649 1.29102 7.65698 1.29235 7.25458 1.34648C6.87029 1.39818 6.70572 1.48752 6.59695 1.59629C6.48817 1.70507 6.39883 1.86963 6.34713 2.25393C6.30837 2.54207 6.29668 2.90052 6.29317 3.37586ZM14.2409 4.74086C13.3845 4.62568 12.2556 4.62435 10.6667 4.62435H7.33334C5.74451 4.62435 4.61578 4.62589 3.75954 4.74116C2.92127 4.85401 2.43806 5.06548 2.08509 5.41815C1.73239 5.77055 1.52094 6.25343 1.40818 7.09183C1.293 7.94819 1.29167 9.07709 1.29167 10.666C1.29167 12.2548 1.29321 13.3836 1.40848 14.2398C1.52133 15.0781 1.7328 15.5613 2.08547 15.9143C2.43787 16.267 2.92076 16.4784 3.75915 16.5912C4.61551 16.7064 5.74441 16.7077 7.33334 16.7077H10.6667C12.2555 16.7077 13.3842 16.7062 14.2405 16.5909C15.0787 16.478 15.5619 16.2666 15.9149 15.9139C16.2676 15.5615 16.4791 15.0786 16.5918 14.2402C16.707 13.3838 16.7083 12.2549 16.7083 10.666C16.7083 9.07719 16.7068 7.94846 16.5915 7.09222C16.4787 6.25395 16.2672 5.77074 15.9145 5.41777C15.5621 5.06507 15.0793 4.85362 14.2409 4.74086Z" fill="#797979" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00001 6.70768C9.34518 6.70768 9.62501 6.98751 9.62501 7.33268V7.34144C10.5324 7.56993 11.2917 8.28511 11.2917 9.27685C11.2917 9.62203 11.0119 9.90185 10.6667 9.90185C10.3215 9.90185 10.0417 9.62203 10.0417 9.27685C10.0417 8.95733 9.68733 8.51352 9.00001 8.51352C8.31268 8.51352 7.95834 8.95733 7.95834 9.27685C7.95834 9.59743 8.31294 10.041 9.00001 10.041C10.1549 10.041 11.2917 10.8418 11.2917 12.0552C11.2917 13.0469 10.5324 13.7621 9.62501 13.9906V13.9994C9.62501 14.3445 9.34518 14.6244 9.00001 14.6244C8.65483 14.6244 8.37501 14.3445 8.37501 13.9994V13.9906C7.46758 13.7621 6.70834 13.0469 6.70834 12.0552C6.70834 11.71 6.98816 11.4302 7.33334 11.4302C7.67852 11.4302 7.95834 11.71 7.95834 12.0552C7.95834 12.3747 8.31268 12.8185 9.00001 12.8185C9.68733 12.8185 10.0417 12.3747 10.0417 12.0552C10.0417 11.7352 9.68681 11.291 9.00001 11.291C7.8454 11.291 6.70834 10.4913 6.70834 9.27685C6.70834 8.28511 7.46758 7.56993 8.37501 7.34144V7.33268C8.37501 6.98751 8.65483 6.70768 9.00001 6.70768Z" fill="#797979" />
                          </svg>

                          <span className="text-sm font-bold text-[#120728]">
                            {service.price}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-5 bg-gray-300" />

                        {/* Duration */}
                        <div className="flex items-center gap-1">
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 14.6666C9.76812 14.6666 11.4638 13.9642 12.7141 12.714C13.9643 11.4638 14.6667 9.76806 14.6667 7.99995C14.6667 6.23184 13.9643 4.53615 12.7141 3.2859C11.4638 2.03566 9.76812 1.33328 8.00001 1.33328C6.2319 1.33328 4.53621 2.03566 3.28596 3.2859C2.03572 4.53615 1.33334 6.23184 1.33334 7.99995C1.33334 9.76806 2.03572 11.4638 3.28596 12.714C4.53621 13.9642 6.2319 14.6666 8.00001 14.6666ZM8.83334 4.66662C8.83334 4.4456 8.74555 4.23364 8.58926 4.07736C8.43298 3.92108 8.22102 3.83328 8.00001 3.83328C7.779 3.83328 7.56703 3.92108 7.41075 4.07736C7.25447 4.23364 7.16668 4.4456 7.16668 4.66662V7.79162C7.16668 8.36662 7.63334 8.83328 8.20834 8.83328H10.5C10.721 8.83328 10.933 8.74548 11.0893 8.5892C11.2455 8.43292 11.3333 8.22096 11.3333 7.99995C11.3333 7.77893 11.2455 7.56697 11.0893 7.41069C10.933 7.25441 10.721 7.16662 10.5 7.16662H8.83334V4.66662Z" fill="#797979" />
                          </svg>

                          <span className="text-sm font-bold text-[#120728]">
                            {service.duration}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-5 bg-gray-300" />

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99999 13.391L14.15 16.4994L12.7833 10.641L17.3333 6.69935L11.3417 6.19102L8.99999 0.666016L6.65832 6.19102L0.666656 6.69935L5.21666 10.641L3.84999 16.4994L8.99999 13.391Z" fill="#93CC25" />
                          </svg>

                          <span className="text-sm font-bold text-[#120728]">
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.96203 0.1782V1.98839C6.96203 2.09119 7.00647 2.18952 7.08425 2.2588L12.6907 7.15078L0.177832 7.15078C0.0800581 7.15078 6.10309e-05 7.23123 6.10352e-05 7.32956L6.10938e-05 8.67044C6.10981e-05 8.76877 0.0800582 8.84922 0.177832 8.84922H12.6907L7.08425 13.7412C7.00647 13.8082 6.96203 13.9066 6.96203 14.0116V15.8218C6.96203 15.9738 7.14202 16.0565 7.25535 15.9559L15.755 8.53859C15.832 8.47154 15.8936 8.38865 15.9359 8.29553C15.9782 8.20241 16.0001 8.10125 16.0001 7.99888C16.0001 7.89652 15.9782 7.79535 15.9359 7.70223C15.8936 7.60912 15.832 7.52623 15.755 7.45918L7.25535 0.0441121C7.1398 -0.0564539 6.96203 0.0262337 6.96203 0.1782Z" fill="black" />
                    </svg>
                  </div>




                </div>
              ))}


            </div>





          </div>

        </div>

        <div>
          <div>
            <div className='flex w-full gap-6'>
              <div className=" w-[220px] h-[178px] bg-white rounded-md border border-gray-200 ">
                <div className="flex flex-col gap-1 items-start p-4 border-b border-gray-200">
                  <span className="text-lg font-bold font-['Cormorant_Garamond'] text-gray-800">Order Count</span>

                </div>
                <span className="block text-4xl font-semibold font-['Cormorant_Garamond'] text-black mt-8 ml-6">402</span>
                <div className="flex items-center justify-center w-full py-2 bg-gray-50 border border-gray-200 mt-7">
                  <span className="text-sm font-normal text-gray-600">You are in our top 1% user!</span>
                </div>
              </div>

              <div className=" w-[560px] py-2  bg-white rounded-md border border-gray-200 ">
                <div className="flex flex-col p-3 gap-1 items-start border-b border-gray-200">
                  <span className="text-lg font-bold font-['Cormorant_Garamond'] text-gray-900">Last 2 Orders</span>
                </div>
                <div className="flex justify-between items-center px-6 mt-3">
                  {/* Order 1 */}
                  <div className="flex flex-col gap-3 w-[210px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-lg font-semibold font-['Cormorant_Garamond'] text-gray-900">Hydrating Facial Section</span>
                      <span className="text-base font-semibold font-['Cormorant_Garamond'] text-gray-600">Facial Treatment</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src={adminuser}
                        className="w-10 h-10 bg-cover bg-center rounded-full"

                      />
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-gray-900 font-open-sans">Olivia Main</span>
                        <div className="flex items-center gap-1 border-b-2 border-[#93CC25] pt-1">
                          <span className="text-[#93CC25] font-semibold text-base font-['Cormorant_Garamond']  capitalize whitespace-nowrap">Leave Your Feedback</span>
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99996 13.392L14.15 16.5003L12.7833 10.642L17.3333 6.70033L11.3416 6.19199L8.99996 0.666992L6.65829 6.19199L0.666626 6.70033L5.21663 10.642L3.84996 16.5003L8.99996 13.392Z" fill="#93CC25" />
                          </svg>

                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Order 2 */}
                  <div className="flex flex-col gap-4 w-[177px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-lg font-semibold font-['Cormorant_Garamond'] text-gray-900">Acne Treatment</span>
                      <span className="text-base font-semibold font-['Cormorant_Garamond'] text-gray-600">Facial Treatment</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src={adminuser}
                        className="w-10 h-10 bg-cover bg-center rounded-full"

                      />
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-gray-900 font-open-sans">Mia Davis</span>
                        <div className="flex items-center gap-1">
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99996 13.392L14.15 16.5003L12.7833 10.642L17.3333 6.70033L11.3416 6.19199L8.99996 0.666992L6.65829 6.19199L0.666626 6.70033L5.21663 10.642L3.84996 16.5003L8.99996 13.392Z" fill="#120728" />
                          </svg>

                          <span className="text-base font-semibold text-gray-800 font-['Cormorant_Garamond'] capitalize whitespace-nowrap">Feedback Given</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div>
              <RecentTransaction />

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Overview
