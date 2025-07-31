'use client'

import Image from "next/image";

const Banner = () => {
    const handleSmoothScroll = (target: string) => {
        const targetElement = document.getElementById(target);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image flex flex-col items-center">
                    <div className="text-center">
                        <h1 className="text-4xl max-w-3xl mx-auto font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                            Drive More Sales with Qualified Auto Leads
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-bluegray">
                            We deliver ready-to-buy auto leads to dealerships, sales agents, and independent sellers. Boost your test drives and close more deals.
                        </p>
                    </div>


                    <div className="text-center mt-5">
                        <button type="button" className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton' onClick={() => handleSmoothScroll('contact')}>
                            Get Started
                        </button>
                        
                    </div>

                    <Image src={'/assets/banner/dashboard.png'} alt="banner-image" width={612} height={408} className="mt-10" />
                </div>
            </div>
        </main>
    )
}

export default Banner;
