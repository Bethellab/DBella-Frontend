import { useState } from "react";
import AffiliatesTab from "./AffiliatesTab";
import { useNavigate } from "react-router-dom";

const Affiliates = () => {

    type Tab = {
        label: string;
        content: React.ReactNode;
    };

    const [activeTab, setActiveTab] = useState(0);

    const tabs: Tab[] = [
        { label: "Affiliates", content: <AffiliatesTab /> },
        { label: "Affiliates Signup Form", content: '' },

    ];

    const navigate = useNavigate()

    return (
        <div>
            <div>
                <div className="flex justify-between items-center border-b py-2 px-4">
                    <h2 className="text-md">Affiliates</h2>

                    <div>
                        <button onClick={() => navigate('/onboarding/addnewaffiliate')} className="bg-primary text-white rounded-md px-2 py-2">Add new affiliaties</button>

                    </div>

                </div>


                <div>
                    <div className="flex border-b ">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 text-md font-medium ${activeTab === index
                                    ? "border-b-2 border-blue-500 py-4 font-bold"
                                    : "text-gray-500"
                                    }`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div>
                        {tabs[activeTab].content}
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Affiliates