const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Smith",
      role: "High School Student",
      initials: "JS",
      rating: 5,
      testimonial: "JD Tutoring helped me improve my math grade from a C to an A- in just two months. The tutors explain concepts in ways that make them easy to understand.",
      bgColor: "bg-blue-100",
      textColor: "text-primary"
    },
    {
      id: 2,
      name: "Lisa Parker",
      role: "College Freshman",
      initials: "LP",
      rating: 4.5,
      testimonial: "Physics was always challenging for me, but after joining JD Tutoring, I finally understand the core concepts. Their online sessions are convenient and effective.",
      bgColor: "bg-green-100",
      textColor: "text-green-500"
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Exam Aspirant",
      initials: "RJ",
      rating: 5,
      testimonial: "Thanks to JD Tutoring, I cleared my competitive exam with flying colors. Their specialized coaching and problem-solving techniques were game-changers!",
      bgColor: "bg-violet-100",
      textColor: "text-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            <i className="fas fa-quote-left text-primary mr-2"></i>Student Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Hear what our students have to say about their experience with JD Tutoring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center`}>
                    <span className={`${testimonial.textColor} font-bold`}>{testimonial.initials}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex text-amber-400 mb-3">
                {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
                {testimonial.rating % 1 === 0.5 && (
                  <i className="fas fa-star-half-alt"></i>
                )}
              </div>
              <p className="text-gray-600 italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div> 
    </section>
  );
};

export default Testimonials;
