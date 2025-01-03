import adminuser from '../../../../assets/image/adminuser.png'


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

const Completed = () => {
  return (
    <div>
      <div className="overflow-y-scroll mb-36">
        <div className="flex items-center justify-between">
          <h1 className="text-xl">Completed Appointments</h1>
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
                className="flex py-2 justify-between items-center rounded-lg border border-gray-300 my-0 overflow-hidden"
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
                  <span className='text-green-600'>completed</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {appointment.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Completed
