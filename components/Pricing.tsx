import Image from 'next/image'
import CheckMarkSVG from '@/public/assets/icons/checkmark-outline.svg'

const PricingSection = () => {
    return (
        <section className="w-screen py-20 md:py-48" id="pricing">
            <div className="flex gap-24 justify-center flex-col text-center">
                <h1 className="flex gap-8 flex-col">
                    Choose your plan
                    <p className=" text-2xl text-tertiary-300 font-light">What suits you best</p>
                </h1>
                <div className="grid justify-center xl:grid-cols-3 mx-20 gap-12 px-8"  >
                    <div className="relative flex flex-col gap-12 bg-neutral-1000 text-left px-10 py-16 rounded-3xl">
                        <div className="flex flex-col gap-2">
                            <h2>Standard</h2>
                            <h1 className=" font-semibold">$3367<span className=" text-tertiary-400 text-lg font-thin" >p/month</span>  </h1>
                            <h3 className=" text-tertiary-400">One feature at time, pause or cancel anytime</h3>
                        </div>
                        <div>
                            <a className="btn btn-cta btn-lg py-6 filter rounded-lg  relative items-center" href="https://calendly.com/eulier1/30min?month=2024-07">
                                <span className="text">Get Started</span>
                                <span className="emoji">📅</span>
                            </a>
                        </div>

                        <ul className='text-tertiary-400 text-3xl flex flex-col gap-4'>
                            <li className='flex items-center gap-2'>
                                <Image className="w-8 h-8" width={25} height={25} src={CheckMarkSVG} alt="Checkmark" /> One request at a time
                            </li>
                            <li className='flex items-center gap-2'>
                                <Image className="w-8 h-8" width={25} height={25} src={CheckMarkSVG} alt="Checkmark" /> Average 48-hour delivery
                            </li>
                            <li className='flex items-center gap-2'>
                                <Image className="w-8 h-8" width={25} height={25} src={CheckMarkSVG} alt="Checkmark" /> Turn around in days, not weeks
                            </li>
                            <li className='flex items-center gap-2'>
                                <Image className="w-8 h-8" width={25} height={25} src={CheckMarkSVG} alt="Checkmark" /> Pay with ACH or credit card
                            </li>
                            <li className='flex items-center gap-2'>
                                <Image className="w-8 h-8" width={25} height={25} src={CheckMarkSVG} alt="Checkmark" /> Pause or cancel anytime
                            </li>
                        </ul>

                        <h5  
                        style={{background: "radial-gradient(92.5% 150% at 12.2% 40.5%,#9c98f7 0%,var(--token-539d9f93-5641-4829-b7b5-8524bc5db887, rgb(227, 253, 114)) 100%)"}} 
                        className="absolute px-4 py-2 w-fit text-neutral-1000 rounded-3xl right-5 top-0 rotate-12 "> 
                            <span className='flex gap-2'>
                                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19" id="svg2273816968"><path d="M 18.081 5.534 C 16.89 5.466 14.859 5.625 13.692 5.397 C 12.363 3.884 12.508 -1.802 9.413 0.629 C 7.65 2.191 6.853 5.08 4.351 5.468 C 3.6 5.599 2.795 5.366 2.039 5.33 C 0.404 5.352 -0.494 7.408 0.44 8.682 C 1.356 10.318 3.359 10.762 4.496 12.087 C 4.37 12.53 4.207 12.934 4.023 13.388 C 3.564 14.538 3.021 15.762 3.356 17.07 C 3.596 18.212 4.774 19.276 5.987 18.873 C 7.666 18.376 8.571 16.887 10.053 16.262 C 12.22 16.04 13.462 19.435 15.799 18.841 C 16.9 18.51 17.494 17.211 17.149 16.148 C 17.094 15.973 16.401 14.015 16.323 13.792 L 15.968 12.78 C 15.801 12.375 15.605 11.811 16.044 11.492 C 16.83 10.885 18.248 9.854 19.052 9.255 C 20.728 8.275 20.043 5.529 18.081 5.534 Z" fill="var(--token-539d9f93-5641-4829-b7b5-8524bc5db887, rgb(227, 253, 114)) /* {&quot;name&quot;:&quot;Yellow&quot;} */"></path></svg> 
                                <span>Most Popular</span>
                            </span>
                        </h5>
 
                    </div>


                    <div className="flex flex-col gap-12 bg-neutral-1000 text-left px-10 py-16 rounded-3xl">
                        <div className="flex flex-col gap-2">
                            <h2>Pro</h2>
                            <h1 className=" font-semibold">$4497<span className=" text-tertiary-400 text-lg font-thin" >p/month</span>  </h1>
                            <h3 className=" text-tertiary-400">Architecture. Diagrams. Development. Pause or cancel anytime.</h3>
                        </div>
                        <div>
                            <a className="btn bg-slate-100 btn-lg py-6 filter rounded-lg  relative items-center text-neutral-500" href="https://calendly.com/eulier1/30min?month=2024-07">
                                <span className="text">Get Started</span>
                                <span className="emoji">📅</span>
                            </a>
                        </div>

                        <ul className='text-tertiary-400 text-3xl flex flex-col gap-4'>
                            <li className='flex items-center gap-2'>
                                <Image className="w-8 h-8" width={25} height={25} src={CheckMarkSVG} alt="Checkmark" /> Complete app development
                            </li>
                            <li className='flex items-center gap-2'>
                                <Image className="w-8 h-8" width={25} height={25} src={CheckMarkSVG} alt="Checkmark" /> Average 1-month delivery
                            </li>
                            <li className='flex items-center gap-2'>
                                <Image className="w-8 h-8" width={25} height={25} src={CheckMarkSVG} alt="Checkmark" /> Unlimited features
                            </li>
                            <li className='flex items-center gap-2'>
                                <Image className="w-8 h-8" width={25} height={25} src={CheckMarkSVG} alt="Checkmark" /> Pay with ACH or credit card
                            </li>
                            <li className='flex items-center gap-2'>
                                <Image className="w-8 h-8" width={25} height={25} src={CheckMarkSVG} alt="Checkmark" /> Pause or cancel anytime
                            </li>
                        </ul>
                    </div>


                    <div className="flex flex-col gap-12 bg-neutral-1000 text-left px-10 py-16 rounded-3xl">
                        <div className="flex flex-col gap-2">
                            <h2 style={{visibility: 'hidden'}}>_</h2>
                            <h1 className=" font-semibold">Book a call </h1>
                            <h3 className=" text-tertiary-400">Learn more about how Artidev works and how it can help you.</h3>
                        </div>
                        <div>
                            <a className="btn bg-slate-100 btn-lg py-6 filter rounded-lg  relative items-center text-neutral-500" href="https://calendly.com/eulier1/30min?month=2024-07">
                                <span className="text">Get Started</span>
                                <span className="emoji">📅</span>
                            </a>
                        </div>

                        
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PricingSection