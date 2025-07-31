import Image from "next/image";

const Newsletter = () => {
    return (
        <div id="contact" className='-mt-32 relative z-3'>
            <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div className='hidden lg:block'>
                        <div className='float-right pt-20 relative'>
                            <Image src={'/assets/newsletter/bgImage.png'} alt="bgimg" width={588} height={334} />
                            <div className="absolute top-10 right-0">
                                <Image src={'/assets/newsletter/leaf.svg'} alt="leafimg" width={81} height={81}/>
                            </div>
                            <div className="absolute bottom-8 left-2">
                                <Image src={'/assets/newsletter/circel.svg'} alt="circleimg" width={30} height={30}/>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div className="p-10 flex flex-col justify-center">
                        <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">Get in touch with us.</h3>
                        <h4 className="text-base font-normal mb-7 text-offwhite">Ready to transform your dealership&apos;s lead generation? Contact us today for a free consultation.</h4>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                    <Image src={'/assets/footer/telephone.svg'} alt="phone" width={20} height={20} />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Phone</p>
                                    <p className="text-offwhite text-sm">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                    <Image src={'/assets/footer/email.svg'} alt="email" width={20} height={20} />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Email</p>
                                    <p className="text-offwhite text-sm">digimate32@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                    <Image src={'/assets/footer/mask.svg'} alt="address" width={20} height={20} />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Address</p>
                                    <p className="text-offwhite text-sm">150 South Pine Island Road, Suite 300<br />Plantation, FL 33324</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter;