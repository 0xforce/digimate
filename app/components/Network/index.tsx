import Image from "next/image";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/network/bangladesh.svg",
        country: "Bangladesh",
        paragraph: 'Serving dealerships across Dhaka, Chittagong, and major automotive markets.',
    },
    {
        imgSrc: "/assets/network/america.svg",
        country: "United States",
        paragraph: 'Covering major markets from California to New York with qualified leads.',
    },
    {
        imgSrc: "/assets/network/australia.svg",
        country: "Australia",
        paragraph: 'Supporting dealerships in Sydney, Melbourne, Brisbane, and Perth areas.',
    },
    {
        imgSrc: "/assets/network/china.svg",
        country: "China",
        paragraph: 'Delivering qualified leads to dealerships across major Chinese cities.',
    },
]

const Network = () => {
    return (
        <div className="bg-babyblue" id="coverage">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81">Our coverage areas & <br /> dealership network.</h3>

                <Image src={'/assets/network/map.png'} alt={"map-image"} width={1400} height={800} />

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 shadow-xl'>
                            <div className="flex justify-start items-center gap-2">
                                <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                                <h4 className="text-xl font-medium text-midnightblue">{item.country}</h4>
                            </div>
                            <hr />
                            <h4 className='text-lg font-normal text-bluegrey my-2'>{item.paragraph}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Network;
