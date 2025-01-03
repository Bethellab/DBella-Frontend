
const AccountSettings = () => {
    return (
        <div>
          
            <div>
                <h1 className="text-xl font-['Cormorant_Garamond'] py-2  text-gray-600">Change Password</h1>
                <div className="grid grid-cols-2 gap-6 mt-6">
                   
                    
                    <div>
                        <label className="block text-sm font-semibold mb-2  text-gray-600">Old Password</label>
                        <input
                            type="password"
                            placeholder="Old Password"
                            className="block w-full bg-white border border-gray-300 rounded-full p-2 "
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-600">New Password</label>
                        <input
                            type="password"
                            placeholder="New Password"
                            className="block w-full bg-white border border-gray-300 rounded-full p-2 "
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2  text-gray-600">Comfirm Password</label>
                        <input
                            type="password"
                            placeholder="Comfirm Password"
                            className="block w-full bg-white border border-gray-300 rounded-full p-2 "
                        />
                    </div>

             

                   
                </div>
                
            </div>

            <button className="bg-[#5E25CC] text-white p-2 mt-6 rounded-full font-['Cormorant_Garamond'] text-sm w-64">Update Details</button>

        </div>
    )
}

export default AccountSettings
