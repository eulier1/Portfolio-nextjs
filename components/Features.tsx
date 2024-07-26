import Card from "./Card"

const FeaturesSection = () => {
    return (
        <section className="grid grid-template-rows-1 grid-template-cols-1 gap-8 md:grid-cols-2 py-8 md:py-32 w-full px-32">
            <div className="flex relative md:h-screen justify-center" >
                <div className="sticky top-40 h-min pr-20">
                    <Card isFeaturesTitle title="Adapt to the new era of building apps" 
                    description="Trust and business grow only when we offer a top-quality service."/>
                </div>
            </div>
            <div className="flex flex-col flex-wrap w-full md:flex-col justify-between gap-12">
                <div className="flex justify-center w-fit"> 
                    <Card isFeaturesCard title="Quality" description="Elite developers ready to ship bug-free code, to build long-term business relationship"></Card>
                </div>
                <div className="flex justify-center w-fit">
                    <Card isFeaturesCard title="Flexibility" description="Request on-demand for subscription, as many features as you need"></Card>
                </div>
                <div className="flex justify-center w-fit">
                    <Card isFeaturesCard title="Speed" description="Order and receive a feature within a few business days on average."></Card>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection