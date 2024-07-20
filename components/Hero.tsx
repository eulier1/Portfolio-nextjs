import React from 'react';

const Hero = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20" id="hero">
      <div className="container">
        <div className="row items-center gap-y-12">
          <div className="">
            <h1 className='mb-16'>Scale your business and save 80% in employee costs with 1% offshore talent</h1>
            <p className="leading-relaxed mb-16 text-xl md:text-2xl">
              <span className="text-secondary-600">We help your business to onboard, train and manage</span> your developers
            </p>
            <div className="flex flex-row justify-left">
            <a className="btn btn-cta btn-lg py-6 filter rounded-lg  relative inline-flex items-center" href="https://calendly.com/eulier1/30min?month=2024-07">
                <span className="text">Book a call</span>
                <span className="emoji">📅</span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;