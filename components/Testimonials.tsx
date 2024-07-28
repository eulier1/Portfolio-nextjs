import Card from "./Card"

const testimonials = [
    {
        name: "Nathaniel Brown",
        description: "I enjoyed working with Eulier. He is passionate about sustainable development and is a good communicator as well",
        title: "CEO at Dray Dog",
        url: "https://www.upwork.com/profile-portraits/c1sbkR2w_79Rb1oZV2A5oonZyi2l4eaTqS7-bIvXXNbQufiSzqBBk4bseabWIcJjlk",
        constractUrl: "https://www.upwork.com/freelancers/~0110fe9b7a20bb647f"
    },
    {
        name: "Patrick Bollenbach",
        description: "Eulier is a fantastic freelancer (and human), he learned my complicated tech stack and app structure and worked with a new platform (Shopify) that he hadn't used before. He completed all the tasks and I am super happy with the work he has done.",
        title: "CEO at RecipeKit (Shopify App)",
        url: "https://www.upwork.com/profile-portraits/c1-132DLjYLm7Q3BnogqkLJ12GVkSDje2HwGNYbELexktubfgVIkbwJ8XcDC1MBIFU",
        constractUrl: "https://www.upwork.com/freelancers/~0110fe9b7a20bb647f"
    }
]

const TestimonialSection = () => {
    return (
        <section className="bg-neutral-100 w-screen py-20 md:py-48">
            <div className="grid gap-24">
                <h2 className="text-neutral-700 opacity-60 text-center">As a result, we got testimonials like this</h2>
                <div className="flex flex-wrap gap-10 lg:gap-0 px-8 justify-center"  >

                        {testimonials.map( (testimonial) => (
                            <div key={testimonial.url}className="lg:w-1/3 px-4">
                                <Card isTestimonial key={testimonial.url} testimonial={testimonial}/>
                            </div>
                        ))}

                </div>
            </div>

        </section>
    )
}

export default TestimonialSection