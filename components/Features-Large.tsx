
import AutomationImage from "@/public/assets/img/automation_speed.jpg";
import AvatarImage from "@/public/assets/img/avatar.png";
import ReduceCostImage from "@/public/assets/img/reduce_cost.jpg"
import Image from 'next/image';

const FeaturesLargeSection = () => {
    return (
        <section className="bg-neutral-100 w-screen py-20 md:py-48 text-neutral-1000">
            <div className="grid gap-8 md:grid-cols-2">
                <div className="w-full m-auto">
                    <div className="p-8 md:p-36">
                        <p className=" bg-cyan-50 px-4 py-2 w-fit text-cyan-600 rounded-3xl">Subscription-based development</p>
                        <h1 className="font-normal">
                            Spend a fraction. Boost your margins.
                        </h1>
                        <p>Pay only as you need for your feature with a subscription-based modela</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center"  >
                    <div className="w-1/2 relative">
                    <h2 className="absolute -top-10 bg-white bg-opacity-45 px-4 py-2 rounded-xl" >Decrease <strong>60%</strong> of cost</h2>
                        <Image className="p-12 bg-white"  style={{borderRadius: "4.5rem"}} src={ReduceCostImage} alt="" />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center"  >
                    <div className="w-1/2 relative">
                    <h2 className="absolute -top-10 bg-white bg-opacity-45 px-4 py-2 rounded-xl" ><strong>8+</strong> years of experience</h2>
                        <Image className="p-12 bg-white"  style={{borderRadius: "4.5rem"}} src={AvatarImage} alt="" />
                    </div>
                </div>

                <div className="w-full m-auto">
                    <div className="p-8 md:p-36">
                        <p className=" bg-cyan-50 px-4 py-2 w-fit text-cyan-600 rounded-3xl">Guaranteed Quality</p>
                        <h1 className="font-normal">
                            Hard & soft skill 
                        </h1>
                        <p>Is the foundation to build long-term business relationships</p>
                    </div>
                </div>

                <div className="w-full m-auto">
                    <div className="p-8 md:p-36">
                        <p className=" bg-cyan-50 px-4 py-2 w-fit text-cyan-600 rounded-3xl">Delivery at Speed</p>
                        <h1 className="font-normal">
                            Frameworks, best practices & automation.
                        </h1>
                        <p>Leverage low-cost outsourcing powered by AI Tools</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center"  >
                    <div className="w-1/2 relative">
                    <h2 className="absolute -top-10 bg-white bg-opacity-45 px-4 py-2 rounded-xl" > <strong>6</strong> daily hours of focus</h2>
                        <Image className="p-12 bg-white"  style={{borderRadius: "4.5rem"}} src={AutomationImage} alt="" />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default FeaturesLargeSection