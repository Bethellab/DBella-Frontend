import profileimg from '../../../../assets/image/profileimg.png'

const UserDetails = () => {
    return (
        <div>
            <div>
                <h1 className="text-xl font-['Cormorant_Garamond']">Update Profile Picture</h1>
                <div className='py-4 flex items-center gap-6'>
                    <img src={profileimg} />
                    <div>
                        <button className='border-2 border-gray-300 p-1'>Change Image</button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-lg font-['Cormorant_Garamond'] py-2">Basic Information</h1>
                <div className="grid grid-cols-2 gap-6">
                    {/* Title Field */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Title</label>
                        <div className="relative">
                            <select
                                className="block w-full bg-white border border-gray-300 rounded-full p-2 appearance-none focus:outline-none "
                            >
                                <option className="text-gray-300">Select an option...</option>
                                <option>Mr.</option>
                                <option>Mrs.</option>
                                <option>Ms.</option>
                            </select>
                            <span className="absolute right-4 top-3 pointer-events-none">
                                ▼
                            </span>
                        </div>
                    </div>

                    {/* Full Name Field */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="block w-full bg-white border border-gray-300 rounded-full p-2 "
                        />
                    </div>

                    {/* Email Address Field */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="block w-full bg-white border border-gray-300 rounded-full p-2"
                        />
                    </div>

                    {/* Phone Number Field */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Phone Number</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 bg-gray-100 border border-gray-300 rounded-l-full text-gray-600">
                                +234
                            </span>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="block w-full bg-white border border-gray-300 rounded-r-full p-2 focus:outline-none "
                            />
                        </div>
                    </div>

                    {/* Date of Birth Field */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Date of Birth</label>
                        <input
                            type="date"
                            className="block w-full bg-white border border-gray-300 rounded-full p-2 focus:outline-none "
                        />
                    </div>

                    {/* Gender Field */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Gender</label>
                        <div className="relative">
                            <select
                                className="block w-full bg-white border border-gray-300 rounded-full p-2 appearance-none"
                            >
                                <option>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                            <span className="absolute right-4 top-3 pointer-events-none">
                                ▼
                            </span>
                        </div>
                    </div>
                </div>
                <div className="py-6">
                    <label className="block text-sm font-semibold mb-2">Location / Address</label>
                    <input
                        type="email"
                        placeholder="9b Cresnety Street, Ajah, Lagos"
                        className="block w-full bg-white border border-gray-300 px-4 rounded-full p-2"
                    />
                </div>
            </div>

            <button className="bg-[#5E25CC] text-white p-2 mt-6 rounded-full font-['Cormorant_Garamond'] text-sm w-64">Update Details</button>

        </div>
    )
}

export default UserDetails
