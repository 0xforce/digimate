'use client'
import Image from "next/image";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/provide/marketing.svg",
        country: "Qualified Lead Generation",
        paragraph: 'Vehicle-specific inquiries with buy-ready intent and geo-targeted searchers.',
    },
    {
        imgSrc: "/assets/provide/graphic.svg",
        country: "VIN-Specific Matching",
        paragraph: 'Connect users with exact models they\'re browsing in your inventory.',
    },
    {
        imgSrc: "/assets/provide/heaking.svg",
        country: "Instant Notifications",
        paragraph: 'Real-time call/message alerts to never miss a hot lead opportunity.',
    },
    {
        imgSrc: "/assets/provide/uidesign.svg",
        country: "SMS Follow-Ups",
        paragraph: 'Automated text flows to keep prospects warm and engaged.',
    },
]

const Provide = () => {
    const handleSmoothScroll = (target: string) => {
        const targetElement = document.getElementById(target);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div id="services">

            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* COLUMN-1 */}
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center p-10">
                            <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">We provide that service.</p>
                            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">Transform your dealership&apos;s lead generation with our specialized automotive marketing services. We deliver qualified, buy-ready prospects directly to your sales team with real-time notifications and automated follow-up systems.</h4>
                            <button className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links" onClick={() => handleSmoothScroll('contact')}>Learn more <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></button>
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    {/* COLUMN-2 */}
                    <div className='col-span-6 lg:col-span-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                    <h4 className="text-2xl font-semibold">{item.country}</h4>
                                    <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Provide;
