import Image, { StaticImageData } from "next/image";

export type CardType = {
    title?: string,
    description?: string,
    images?: Array<{url: string}>,
    imageDemo?: StaticImageData,
    isCases?: boolean
    isFeaturesTitle?: boolean
    isFeaturesCard?: boolean
}

const Card = ({title = "Lorem Ipsum", description, images, imageDemo, isCases, isFeaturesTitle, isFeaturesCard}: CardType) => {

    if(isFeaturesTitle) {
        return (
            <div className="">
                {imageDemo ? <Image  className="relative w-auto"  alt="demo image" src={imageDemo}/> : null} 
                <h1 className="mb-10" >{title}</h1>
                {description ? <p className="text-2xl text-tertiary-500">{description}</p> : null} 
            </div>
        )
    }

    if (isFeaturesCard) {
        return (
            <div className="bg-neutral-1000 p-8 rounded-2xl">
                {imageDemo ? <Image  className="relative w-auto"  alt="demo image" src={imageDemo}/> : null} 
                <h2 className="mb-10" >{title}</h2>
                {description ? <p className="text-2xl text-tertiary-500">{description}</p> : null} 
            </div>
        )
    }


    if (isCases) {
        return (
            <div  
            className=" flex justify-center relative overflow-hidden" >
                <div className="p-4 md:p-12 max-w-fit text-center bg-neutral-1000 relative rounded-3xl min-h-96 md:min-h-128 ">
                <h2 className="mb-10" >{title}</h2>
                {description ? <p>{description}</p> : null}  
                <div  className="flex justify-center mb-4">
                { images ? images.map( (image, id) => 
                (
                    <div key={id} className="p-4 mx-2 md:p-4 bg-slate-100 rounded-3xl md:mx-4 h-fit -mt-15">
                        <Image  className="" width={70} height={70} alt={image.url} src={image.url}/>
                    </div>
                )) : null }
                </div>
                { imageDemo ? (
                    <div className="relative">
                    <div className="absolute flex justify-center top-0">
                    <div className="relative p-2 md:p-4 bg-neutral-500 rounded-lg fill-tertiary-400 top-20">
                        <Image  className="relative w-auto"  alt="demo image" src={imageDemo}/>
                   </div>
                    </div>
                </div>
                ): null}
                </div>
            </div>
        )
    }
    
}

export default Card