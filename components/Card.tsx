import Image, { StaticImageData } from "next/image";

export type CardType = {
    title?: string,
    description?: string,
    images?: Array<{url: string}>,
    testimonial?: {name: string, description: string, title: string, url: string, constractUrl: string}
    imageDemo?: StaticImageData,
    isCases?: boolean
    isFeaturesTitle?: boolean
    isFeaturesCard?: boolean
    isTestimonial?: boolean
}

const stars = [1,2,3,4,5]

const Card = ({title = "Lorem Ipsum", description, images, imageDemo, isCases, isFeaturesTitle, isFeaturesCard, isTestimonial, testimonial}: CardType) => {

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

    if(isTestimonial && testimonial) {
        return(
            <a href={testimonial.constractUrl} target="_blank" className="bg-neutral-1000 p-8 md:p-20 grid gap-8 rounded-3xl text-secondary-100">
                <div className="flex w-20 gap-1">
                    {
                        stars.map( (num) =>
                            <svg key={num} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19" id="svg2273816968"><path d="M 18.081 5.534 C 16.89 5.466 14.859 5.625 13.692 5.397 C 12.363 3.884 12.508 -1.802 9.413 0.629 C 7.65 2.191 6.853 5.08 4.351 5.468 C 3.6 5.599 2.795 5.366 2.039 5.33 C 0.404 5.352 -0.494 7.408 0.44 8.682 C 1.356 10.318 3.359 10.762 4.496 12.087 C 4.37 12.53 4.207 12.934 4.023 13.388 C 3.564 14.538 3.021 15.762 3.356 17.07 C 3.596 18.212 4.774 19.276 5.987 18.873 C 7.666 18.376 8.571 16.887 10.053 16.262 C 12.22 16.04 13.462 19.435 15.799 18.841 C 16.9 18.51 17.494 17.211 17.149 16.148 C 17.094 15.973 16.401 14.015 16.323 13.792 L 15.968 12.78 C 15.801 12.375 15.605 11.811 16.044 11.492 C 16.83 10.885 18.248 9.854 19.052 9.255 C 20.728 8.275 20.043 5.529 18.081 5.534 Z" fill="var(--token-539d9f93-5641-4829-b7b5-8524bc5db887, rgb(227, 253, 114)) /* {&quot;name&quot;:&quot;Yellow&quot;} */"></path></svg>
                        )
                    }
                </div>
                <p>{testimonial.description}</p>
                <div className="flex gap-4 sm:items-center flex-col sm:flex-row">
                    <div>
                        <Image  width={90} height={90} className="w-12 h-12 object-cover rounded-full" src={testimonial.url} alt="Portrait of a client" />
                    </div>
                    <div>
                        <p className="mb-0 text-xl">{testimonial.name}</p>
                        <p className="mb-0 opacity-60">{testimonial.title}</p>
                    </div>
                </div>
            </a>
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