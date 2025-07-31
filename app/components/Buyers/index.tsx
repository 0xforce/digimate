import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/ourbuyers.svg',
        percent: '500+',
        heading: "Qualified Leads",
        subheading: "High-intent prospects delivered to dealerships monthly.",
    },
    {
        imgSrc: '/assets/buyers/projectcompleted.svg',
        percent: '95%',
        heading: "Success Rate",
        subheading: "Dealerships that achieve sales targets with our leads.",
    },
    {
        imgSrc: '/assets/buyers/happybuyers.svg',
        percent: '98%',
        heading: "Client Satisfaction",
        subheading: "Dealerships who renew our marketing services.",
    },
    {
        imgSrc: '/assets/buyers/teammembers.svg',
        percent: '25+',
        heading: "Years Experience",
        subheading: "Combined automotive marketing expertise.",
    }
]

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <div className='flex flex-col justify-center items-center' key={i}>
                        <div className='flex justify-center border border-border  p-2 w-10 rounded-lg'>
                            <Image src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
                        </div>
                        <h2 className='text-4xl lg:text-6xl text-black font-semibold text-center mt-5'>{items.percent}</h2>
                        <h3 className='text-2xl text-black font-semibold text-center lg:mt-6'>{items.heading}</h3>
                        <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buyers;
