import Image from "next/image";

import Plugstreaming from "@/public/assets/img/plugstreaming.png";
import RecipeKit from "@/public/assets//img/recipekit.png";
import SelvinCo from "@/public/assets//img/selvin.png";
import ToolboxOS from "@/public/assets//img/toolbox.png";

const Partners = () => {

    return (
        <section className="text-white py-8 w-full" id="partners">
            <h3 className="opacity-60 text-center">Trusted by companies</h3>
            <div className="grayscale logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
                <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                    <Image width={90} height={90} className="mx-16 inline" src={Plugstreaming} alt="Transistor" priority />
                    <Image width={256} height={256} className="mx-16 inline"  src={RecipeKit} alt="Reform" priority />
                    <Image width={90} height={90} className="mx-16 inline" src={SelvinCo} alt="Tuple" priority />
                    <Image width={90} height={90} className="mx-16 inline" src={ToolboxOS} alt="Tuple" priority />
                </div>
                <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                    <Image width={90} height={90} className="mx-16 inline" src={Plugstreaming} alt="Transistor" priority />
                    <Image width={256} height={256} className="mx-16 inline"  src={RecipeKit} alt="Reform" priority />
                    <Image width={90} height={90} className="mx-16 inline" src={SelvinCo} alt="Tuple" priority />
                    <Image width={90} height={90} className="mx-16 inline" src={ToolboxOS} alt="Tuple" priority />
                </div>
                <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                    <Image width={90} height={90} className="mx-16 inline" src={Plugstreaming} alt="Transistor" priority />
                    <Image width={256} height={256} className="mx-16 inline"  src={RecipeKit} alt="Reform" priority />
                    <Image width={90} height={90} className="mx-16 inline" src={SelvinCo} alt="Tuple" priority />
                    <Image width={90} height={90} className="mx-16 inline" src={ToolboxOS} alt="Tuple" priority />
                </div>
            </div> 
        </section>
    )
}

export default Partners