




import logo from '../../../assets/image/bellas-logo.png';

const Footer = () => {
    return (
        <footer className="bg-white px-8 lg:px-24 py-8 mx-2 lg:mt-10">
            <div className="flex flex-col lg:flex-row text-sm gap-10 lg:gap-16">
                {/*** Left Side */}
                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:w-1/4">
                    <img className="mb-5 w-16" src={logo} alt="Logo" />
                    <p className="text-gray-600 leading-6">
                    D'Bellas Glow is your ultimate destination for beauty and wellness,
                        offering personalized spa and salon services designed to help you relax,
                          rejuvenate, and rediscover your glow.
                    </p>

                    <div className="flex gap-6 mt-6">
                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" fill="#414246" />
                             </svg>
                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11.0276 0C12.1526 0.003 12.7236 0.009 13.2166 0.023L13.4106 0.03C13.6346 0.038 13.8556 0.0479999 14.1226 0.0599999C15.1866 0.11 15.9126 0.278 16.5496 0.525C17.2096 0.779 17.7656 1.123 18.3216 1.678C18.8303 2.17773 19.2238 2.78247 19.4746 3.45C19.7216 4.087 19.8896 4.813 19.9396 5.878C19.9516 6.144 19.9616 6.365 19.9696 6.59L19.9756 6.784C19.9906 7.276 19.9966 7.847 19.9986 8.972L19.9996 9.718V11.028C20.002 11.7574 19.9944 12.4868 19.9766 13.216L19.9706 13.41C19.9626 13.635 19.9526 13.856 19.9406 14.122C19.8906 15.187 19.7206 15.912 19.4746 16.55C19.2238 17.2175 18.8303 17.8223 18.3216 18.322C17.8219 18.8307 17.2171 19.2242 16.5496 19.475C15.9126 19.722 15.1866 19.89 14.1226 19.94L13.4106 19.97L13.2166 19.976C12.7236 19.99 12.1526 19.997 11.0276 19.999L10.2816 20H8.97259C8.24285 20.0026 7.51312 19.9949 6.78359 19.977L6.58959 19.971C6.3522 19.962 6.11487 19.9517 5.87759 19.94C4.81359 19.89 4.08759 19.722 3.44959 19.475C2.78242 19.2241 2.17804 18.8306 1.67859 18.322C1.16954 17.8224 0.775701 17.2176 0.524592 16.55C0.277592 15.913 0.109592 15.187 0.0595922 14.122L0.0295922 13.41L0.0245923 13.216C0.00615837 12.4868 -0.00217586 11.7574 -0.000407766 11.028V8.972C-0.00317566 8.2426 0.00415845 7.5132 0.0215923 6.784L0.0285923 6.59C0.0365923 6.365 0.0465923 6.144 0.0585922 5.878C0.108592 4.813 0.276592 4.088 0.523592 3.45C0.775287 2.7822 1.16982 2.17744 1.67959 1.678C2.17875 1.16955 2.78278 0.776074 3.44959 0.525C4.08759 0.278 4.81259 0.11 5.87759 0.0599999C6.14359 0.0479999 6.36559 0.038 6.58959 0.03L6.78359 0.0239999C7.51278 0.00623271 8.24219 -0.0014347 8.97159 0.000999928L11.0276 0ZM9.99959 5C8.67351 5 7.40174 5.52678 6.46406 6.46447C5.52638 7.40215 4.99959 8.67392 4.99959 10C4.99959 11.3261 5.52638 12.5979 6.46406 13.5355C7.40174 14.4732 8.67351 15 9.99959 15C11.3257 15 12.5974 14.4732 13.5351 13.5355C14.4728 12.5979 14.9996 11.3261 14.9996 10C14.9996 8.67392 14.4728 7.40215 13.5351 6.46447C12.5974 5.52678 11.3257 5 9.99959 5ZM9.99959 7C10.3936 6.99993 10.7837 7.07747 11.1477 7.22817C11.5117 7.37887 11.8424 7.5998 12.1211 7.87833C12.3997 8.15686 12.6207 8.48754 12.7715 8.85149C12.9224 9.21544 13 9.60553 13.0001 9.9995C13.0002 10.3935 12.9226 10.7836 12.7719 11.1476C12.6212 11.5116 12.4003 11.8423 12.1218 12.121C11.8432 12.3996 11.5126 12.6206 11.1486 12.7714C10.7847 12.9223 10.3946 12.9999 10.0006 13C9.20494 13 8.44188 12.6839 7.87927 12.1213C7.31666 11.5587 7.00059 10.7956 7.00059 10C7.00059 9.20435 7.31666 8.44129 7.87927 7.87868C8.44188 7.31607 9.20494 7 10.0006 7M15.2506 3.5C14.9191 3.5 14.6011 3.6317 14.3667 3.86612C14.1323 4.10054 14.0006 4.41848 14.0006 4.75C14.0006 5.08152 14.1323 5.39946 14.3667 5.63388C14.6011 5.8683 14.9191 6 15.2506 6C15.5821 6 15.9001 5.8683 16.1345 5.63388C16.3689 5.39946 16.5006 5.08152 16.5006 4.75C16.5006 4.41848 16.3689 4.10054 16.1345 3.86612C15.9001 3.6317 15.5821 3.5 15.2506 3.5Z" fill="#414246" />
                             </svg>

                             <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.28004 5.09 4.11004 3.38 2.00004 0.79C1.63004 1.42 1.42004 2.16 1.42004 2.94C1.42004 4.43 2.17004 5.75 3.33004 6.5C2.62004 6.5 1.96004 6.3 1.38004 6V6.03C1.38004 8.11 2.86004 9.85 4.82004 10.24C4.19088 10.4129 3.53008 10.4369 2.89004 10.31C3.16165 11.1625 3.69358 11.9084 4.41106 12.4429C5.12854 12.9775 5.99549 13.2737 6.89004 13.29C5.37371 14.4905 3.49405 15.1394 1.56004 15.13C1.22004 15.13 0.880039 15.11 0.540039 15.07C2.44004 16.29 4.70004 17 7.12004 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z" fill="#414246" />
                             </svg>

                             <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10C0 11.89 0.525 13.66 1.438 15.168L0.546 18.2C0.494785 18.3741 0.491415 18.5587 0.536244 18.7346C0.581074 18.9104 0.672448 19.0709 0.800759 19.1992C0.929071 19.3276 1.08958 19.4189 1.26542 19.4638C1.44125 19.5086 1.62592 19.5052 1.8 19.454L4.832 18.562C6.39074 19.5049 8.17824 20.0023 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM7.738 12.263C9.761 14.285 11.692 14.552 12.374 14.577C13.411 14.615 14.421 13.823 14.814 12.904C14.8632 12.7896 14.881 12.6641 14.8655 12.5405C14.85 12.417 14.8019 12.2998 14.726 12.201C14.178 11.501 13.437 10.998 12.713 10.498C12.5619 10.3932 12.3761 10.3512 12.1946 10.3806C12.0131 10.4101 11.8502 10.5088 11.74 10.656L11.14 11.571C11.1083 11.62 11.0591 11.6551 11.0025 11.6692C10.9459 11.6833 10.886 11.6754 10.835 11.647C10.428 11.414 9.835 11.018 9.409 10.592C8.983 10.166 8.611 9.6 8.402 9.219C8.37672 9.17046 8.36957 9.11449 8.38185 9.06115C8.39413 9.00781 8.42503 8.9606 8.469 8.928L9.393 8.242C9.52525 8.12759 9.61063 7.96841 9.63277 7.79495C9.65491 7.62149 9.61226 7.44596 9.513 7.302C9.065 6.646 8.543 5.812 7.786 5.259C7.6881 5.18866 7.57369 5.14479 7.45385 5.13165C7.33402 5.11851 7.21282 5.13654 7.102 5.184C6.182 5.578 5.386 6.588 5.424 7.627C5.449 8.309 5.716 10.24 7.738 12.263Z" fill="#414246" />                            </svg>

                         </div>
                </div>

                {/*** Center and Right Sections */}
                <div className="grid grid-cols-2 lg:grid-cols-3 w-full lg:w-2/3 gap-8 lg:gap-48">
                    {/*** Center Section 1 */}
                    <div>
                       {/* Quick Links Section */}
                           <div className="flex flex-col gap-4">
                                 <div className="flex flex-col gap-2 items-start">
                                     <span className="font-bold text-sm text-black">QUICK LINKS</span>
                                     <div className="w-6 h-[3px] bg-[#93CC25]" />
                                 </div>
                                 <span className="text-base text-gray-600">Home</span>
                                 <span className="text-base text-gray-600">About</span>
                                 <span className="text-base text-gray-600">Services</span>
                                 <span className="text-base text-gray-600">Contact Us</span>
                             </div>
                    </div>

                    {/*** Center Section 2 */}
                    <div>
                      {/* Services Section */}
                             <div className="flex flex-col gap-4">
                                 <div className="flex flex-col gap-2 items-start">
                                     <span className="font-bold text-sm text-black">SERVICES</span>
                                     <div className="w-6 h-[3px] bg-[#93CC25]" />
                                 </div>
                                 <span className="text-base text-gray-600 lg:whitespace-nowrap">Hair Styling & Treatment</span>
                                 <span className="text-base text-gray-600  lg:whitespace-nowrap">Manicure & Pedicure</span>
                                 <span className="text-base text-gray-600 lg:whitespace-nowrap">Facial Treatments</span>
                                 <span className="text-base text-gray-600 lg:whitespace-nowrap">Makeup Services</span>
                                 <span className="text-base text-gray-600 lg:whitespace-nowrap">Waxing & Hair Removal</span>
                                 <span className="text-base text-gray-600 lg:whitespace-nowrap">Massage Therapy</span>
                             </div>

                    </div>

                    {/*** Right Section */}
                    <div>
                        {/* Get in Touch Section */}
                             <div className="flex flex-col gap-4">
                                 <div className="flex flex-col gap-2 items-start">
                                     <span className="font-bold text-sm text-black">GET IN TOUCH</span>
                                     <div className="w-6 h-[3px] bg-[#93CC25]" />
                                 </div>
                                 <span className="text-base text-gray-600">09032517291</span>
                                 <span className="text-base text-gray-600">contact@dbellas.com</span>
                                 <span className="text-base text-gray-600 lg:whitespace-nowrap">No 283, Bamitale Street, Ikeja Lagos</span>
                             </div>
                    </div>
                </div>
            </div>

            {/*** Footer Bottom */}
            <div className="mt-8 border-t border-gray-200 pt-5">
                <span className="block text-base text-gray-600 text-center">
                    &copy; 2024 D'Bellas Glow. All rights reserved.
                </span>

            </div>
        </footer>
    );
};

export default Footer;
