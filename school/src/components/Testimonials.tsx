import React, { useState, useEffect } from 'react';
import '../css/Testimonials.scss';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const delay = 10000; // 


  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Mauris dictumst egestas vulputate nullam laoreet tincidunt.",
      name: "Mr Obochi Josiah",
      job: "Accountant",
    },
    {
      text: "Hendrerit pellentesque penatibus sed egestas. Viverra adipiscing imperdiet facilisi in magnis ultrices.",
      name: "Mr Truelife Adewale",
      job: "Engineer",
    },
    {
      text: "Adipiscing imperdiet facilisi in magnis ultrices tempus nibh ullamcorper. Mauris dictumst egestas vulputate.",
      name: "Ms Johnson Akintunde",
      job: "Teacher",
    },
    {
      text: "Sed egestas. Viverra adipiscing imperdiet facilisi in magnis ultrices tempus nibh ullamcorper.",
      name: "Mr Kolawole Badmus",
      job: "Doctor",
    },
    {
      text: "Hendrerit pellentesque penatibus sed egestas. Viverra adipiscing imperdiet facilisi.",
      name: "Mrs Fola Ayaobami",
      job: "Lawyer",
    },
    {
      text: "Mauris dictumst egestas vulputate nullam laoreet tincidunt. Hendrerit pellentesque penatibus.",
      name: "Ms Grace Vivian",
      job: "Designer",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === Math.ceil(testimonials.length / 3) - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => clearInterval(interval); 
  }, [index, testimonials.length]);

  return (
    <div className="testimonial-section page-width">
      <header className="testimonial-section-header">Testimonials</header>
      <div className="testimonial-container">
        <div
          className="testimonial-slider"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          {testimonials.map((testimonial, idx) => (
            <div className="testimonial" key={idx}>
              <div className="parent-info">
                <div className="parent-image"></div> {/* Placeholder for image */}
                <div className="parent-details">
                  <p className="parent-name">{testimonial.name}</p>
                  <p className="parent-job">{testimonial.job}</p>
                </div>
              </div>
              <p className="parent-feedback">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
