import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code, Sparkles, Heart, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution crafted with love, featuring seamless user authentication, secure payment integration, and an intuitive admin dashboard for complete store management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      featured: true,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Task Management App",
      description: "A beautifully designed collaborative workspace that brings teams together with real-time updates, intuitive drag-and-drop functionality, and seamless team collaboration features.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      featured: true,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "Weather Dashboard",
      description: "An elegant and responsive weather application that provides current conditions, detailed forecasts, and interactive maps using the OpenWeather API with a focus on user experience.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      featured: false,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website that showcases creativity and technical skills with smooth animations, optimized performance, and thoughtful user interactions.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      featured: false,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "Hotel Booking System",
      description: "A robust and scalable backend system for hotel reservations featuring comprehensive RESTful APIs, secure user authentication, efficient room management, and seamless booking functionality.",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API"],
      featured: false,
      gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-organic relative overflow-hidden" ref={sectionRef} style={{
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }}>
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full animate-float-gentle" style={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.1) 100%)',
          filter: 'blur(40px)'
        }}></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full animate-pulse-soft" style={{
          background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1) 0%, rgba(245, 87, 108, 0.05) 100%)',
          filter: 'blur(50px)',
          animationDelay: '1s'
        }}></div>
      </div>

      <div className="container-organic">
        <div className={`fade-in-natural ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-3 card-organic px-6 py-3 mb-6 shadow-organic">
              <Code className="text-purple-600" size={20} />
              <span className="text-gray-800 font-medium">My Creative Work</span>
              <Sparkles className="text-pink-500" size={18} />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gradient-organic" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Featured Projects</h2>
            <div className="w-32 h-1 mx-auto rounded-full" style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
            }}></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mt-8 leading-relaxed font-light">
              Here's a collection of projects I've crafted with passion, showcasing my journey 
              in web development and the solutions I've built to solve real-world problems.
            </p>
          </div>

          {/* Featured Projects with Organic Design */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 relative z-10">
            {featuredProjects.map((project, index) => (
              <div key={index} className="card-organic shadow-organic-lg transition-bounce hover:scale-105 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-organic group-hover:scale-110"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-organic" style={{
                    background: `${project.gradient}99`
                  }}></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-organic">
                    <div className="p-3 rounded-2xl shadow-organic" style={{
                      background: project.gradient
                    }}>
                      <Star className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-organic">{project.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-light">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 rounded-2xl text-sm font-medium text-white shadow-organic transition-bounce hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${project.gradient.match(/rgba?\([^)]+\)/g)?.[0] || '#667eea'} 0%, ${project.gradient.match(/rgba?\([^)]+\)/g)?.[1] || '#764ba2'} 100%)`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Section */}
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-4xl font-bold text-gradient-organic" style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>More Projects</h3>
            <p className="text-gray-700 mt-4 text-lg font-light">Additional projects that showcase my diverse skills</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {otherProjects.map((project, index) => (
              <div key={index} className="card-organic shadow-organic transition-bounce hover:scale-105 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-organic group-hover:scale-110"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-organic" style={{
                    background: `${project.gradient}99`
                  }}></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-organic">{project.title}</h4>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed font-light">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 rounded-xl text-xs font-medium text-white shadow-organic"
                        style={{
                          background: project.gradient
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center relative z-10">
            <div className="card-organic p-10 shadow-organic-lg transition-bounce hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}>
                  <Heart className="text-white" size={28} />
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-6 text-gradient-organic" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Have a project in mind?</h3>
              <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-xl leading-relaxed font-light">
                I'm always excited to work on new challenges and bring creative ideas to life. 
                Let's collaborate and build something amazing together!
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-white transition-bounce hover:scale-105 shadow-organic-lg"
                style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                }}
              >
                <Sparkles size={22} />
                Let's Create Together
                <Heart size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;