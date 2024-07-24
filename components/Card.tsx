import Image, { StaticImageData } from "next/image";

export type CardType = {
    title: string,
    description: string,
    images: Array<{url: string}>,
    imageDemo: StaticImageData
}

const Card = ({title, description, images, imageDemo}: CardType) => {
    return (
        <div style={{"height": "560px"}} 
        className="p-4 md:grid-template-row-1 md:grid-temaple-cols-1 md:grid md:grid-template-rows-4 md:gap-12 text-center bg-neutral-1000 md:p-8 rounded-3xl relative overflow-hidden" >
            <h2 >{title}</h2>
            {description ? <p>{description}</p> : null}  
            <div  className="flex justify-center mb-16">
            { images ? images.map( (image, id) => 
            (
                <div key={id} className="p-4 mx-2 md:p-4 bg-slate-100 rounded-3xl md:mx-4 h-fit -mt-15">
                    <Image  className="" width={70} height={70} alt="React" src={image.url}/>
                </div>
            )) : null }
            </div>
            {/* { imageDemo ? (
                <div className="absolute flex justify-center -bottom-60 left-0 right-0">
                    <Image className="relative w-1/2" width={80} height={250} alt="React" src={imageDemo}/>
                </div>
            ): null} */}
        </div>
    )
}

export default Card