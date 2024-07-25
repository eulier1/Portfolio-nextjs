import Image, { StaticImageData } from "next/image";

export type CardType = {
    title: string,
    description: string,
    images: Array<{url: string}>,
    imageDemo: StaticImageData
}

const Card = ({title, description, images, imageDemo}: CardType) => {
    return (
        <div  
        className=" flex justify-center relative overflow-hidden" >
            <div className="p-4 md:p-12 max-w-fit text-center bg-neutral-1000 relative rounded-3xl min-h-96 md:min-h-128 ">
            <h2 className="text-lg md:text-xl lg:text-2xl  mb-10" >{title}</h2>
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
                    <img  className="relative w-auto"  alt="demo image" src={imageDemo.src}/>
               </div>
                </div>
            </div>
            ): null}
            </div>
        </div>
    )
}

export default Card