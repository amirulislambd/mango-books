import React from "react";

const Testimonials = () => {

  const testimonialsData = [
    {
      id: 1,
      name: "Amirul Islam",
      role: "MERN Stack Developer",
      initial: "A",
      review: "The collection of tech books here is amazing. As a developer, I found this library very helpful for my learning journey.",
      gradient: "from-purple-600 to-blue-500"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Content Strategist",
      initial: "S",
      review: "I love the clean UI and the dark mode aesthetics. Navigating through different book categories is seamless and fast.",
      gradient: "from-pink-600 to-purple-500"
    },
    {
      id: 3,
      name: "Robert Fox",
      role: "Computer Science Student",
      initial: "R",
      review: "MangoBooks helped me find all my academic resources in one place. The filtering system is a huge time-saver for students.",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      id: 4,
      name: "Nora Adams",
      role: "Technical Writer",
      initial: "N",
      review: "The platform's performance is top-notch. Adding and managing book collections feels very intuitive and professional.",
      gradient: "from-indigo-600 to-indigo-400"
    }
  ];

  return (
    <div >
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Readers Say
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex gap-1 text-orange-400 mb-4 text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${item.gradient} flex items-center justify-center font-bold text-white shadow-lg`}>
                  {item.initial}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                  <p className="text-gray-500 text-[11px] font-medium uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
