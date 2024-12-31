const ContactForm = () => {
    return (
      <div>
        <div className="flex w-full px-4 sm:px-[120px] py-8 sm:py-[120px] flex-col gap-8 justify-center items-center bg-[#ded3f4]">
          <div className="flex w-full max-w-[1010px] px-8 py-8 flex-col gap-10 items-center bg-white rounded-[20px] shadow-md">
            <div className="flex gap-6 sm:gap-10 justify-center items-start w-full flex-wrap">
              {/* Full Name Input */}
              <div className="flex flex-col gap-2 items-start w-full sm:max-w-[405px]">
                <label className="text-sm font-semibold text-gray-500">Full Name</label>
                <div className="flex items-center w-full bg-white rounded-full border border-gray-300 px-4 py-2">
                  <input
                    className="w-full text-gray-400 text-base bg-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
              </div>
  
              {/* Phone Number Input */}
              <div className="flex flex-col gap-2 items-start w-full sm:max-w-[405px]">
                <label className="text-sm font-semibold text-gray-500">Phone Number</label>
                <div className="flex items-center w-full bg-white rounded-full border border-gray-300 px-4 py-2">
                  <input
                    className="w-full text-gray-400 text-base bg-transparent outline-none"
                    placeholder="080-0000-000-000"
                  />
                </div>
              </div>
  
              {/* Email Address Input */}
              <div className="flex flex-col gap-2 items-start w-full sm:max-w-[405px]">
                <label className="text-sm font-semibold text-gray-500">Email Address</label>
                <div className="flex items-center w-full bg-white rounded-full border border-gray-300 px-4 py-2">
                  <input
                    className="w-full text-gray-400 text-base bg-transparent outline-none"
                    placeholder="Johnndoe@gmail.com"
                  />
                </div>
              </div>
  
              {/* Service Needed Input */}
              <div className="flex flex-col gap-2 items-start w-full sm:max-w-[405px]">
                <label className="text-sm font-semibold text-gray-500">Service you need</label>
                <div className="flex items-center w-full bg-white rounded-full border border-gray-300 px-4 py-2">
                  <input
                    className="w-full text-gray-400 text-base bg-transparent outline-none"
                    placeholder="Type here.."
                  />
                </div>
              </div>
  
              {/* Message/Extra Note */}
              <div className="flex flex-col gap-2 items-start w-full sm:max-w-[850px]">
                <label className="text-sm font-semibold text-gray-500">Message/Extra Note</label>
                <div className="flex items-start w-full bg-white rounded-lg border border-gray-300 px-4 py-2">
                  <textarea
                    className="w-full h-52 text-gray-400 text-base bg-transparent outline-none resize-none"
                    placeholder="Additional note for us..."
                  />
                </div>
              </div>
            </div>
  
            {/* Submit Button */}
            <button className="w-full sm:max-w-[405px] py-2 mt-8 sm:mt-10 bg-[#5e25cc] text-white text-base font-semibold rounded-full">
              Submit Form
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactForm;
  