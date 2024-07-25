import Image, { StaticImageData } from "next/image";

export type CardType = {
    title: string,
    description: string,
    images: Array<{url: string}>,
    imageDemo: StaticImageData
}

const Card = ({title, description, images, imageDemo}: CardType) => {
    return (
        <div style={{"height": "480px"}} 
        className="p-4 text-center bg-neutral-1000 md:p-8 rounded-3xl relative overflow-hidden" >
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
                
                <div className="absolute flex justify-center -bottom-24 left-0 right-0 ">
                    <div className="relative p-2 md:p-4 bg-neutral-500 rounded-lg">
                        <Image className="relative object-none w-auto"  alt="demo image" src={imageDemo}/>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default Card