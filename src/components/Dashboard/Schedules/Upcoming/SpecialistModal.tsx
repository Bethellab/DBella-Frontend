
import gallery_three from '../../../../assets/image/gallery_three.png'

const profiles = [
    {
        name: "Mia Rose",
        role: "Makeup Artist",
        rating: "4.8",
        image: gallery_three,
    },
    {
        name: "Mia Rose",
        role: "Makeup Artist",
        rating: "4.8",
        image: gallery_three,
    },
    {
        name: "Mia Rose",
        role: "Makeup Artist",
        rating: "4.8",
        image: gallery_three,
    },
    {
        name: "Mia Rose",
        role: "Makeup Artist",
        rating: "4.8",
        image: gallery_three,
    },
    {
        name: "Mia Rose",
        role: "Makeup Artist",
        rating: "4.8",
        image: gallery_three,
    },
    {
        name: "Mia Rose",
        role: "Makeup Artist",
        rating: "4.8",
        image: gallery_three,
    },
    {
        name: "Mia Rose",
        role: "Makeup Artist",
        rating: "4.8",
        image: gallery_three,
    },
    {
        name: "Mia Rose",
        role: "Makeup Artist",
        rating: "4.8",
        image: gallery_three,
    },
    {
        name: "Mia Rose",
        role: "Makeup Artist",
        rating: "4.8",
        image: gallery_three,
    },
]// Add more profiles as needed

const SpecialistModal = () => {

    return (
        <div>{/* Select a Specialist */}
            <div className="py-6 px-6">
                <h1 className="text-lg font-medium text-gray-800">Select a Specialist</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {profiles.map((profile, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-gray-50 rounded-md border border-gray-200 p-4 transition"
                        >
                            <img
                                src={profile.image}
                                alt={profile.name}
                                className="w-16 h-16 rounded-full"
                            />
                            <span className="block text-lg font-bold text-gray-800 mt-3">
                                {profile.name}
                            </span>
                            <span className="block text-sm text-gray-600 mt-1">
                                {profile.role}
                            </span>
                            <div className="flex items-center gap-1 mt-4">
                                <svg
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.00016 10.5134L11.1202 13L10.0268 8.31337L13.6668 5.16004L8.8735 4.75337L7.00016 0.333374L5.12683 4.75337L0.333496 5.16004L3.9735 8.31337L2.88016 13L7.00016 10.5134Z"
                                        fill="#93CC25"
                                    />
                                </svg>
                                <span className="text-sm font-bold text-gray-700">
                                    {profile.rating}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-10 px-6">
                <button className="bg-[#5e25cc] w-full  rounded-full py-2 text-white">
                Change Specialist
                </button>
            </div>


        </div>
    )
}

export default SpecialistModal
