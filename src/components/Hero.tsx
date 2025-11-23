import React, { useEffect, useState } from 'react';
import { Github, Linkedin, FileText, ExternalLink, ChevronDown, Sparkles, Code, Coffee, Heart, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Software Engineer",
    "Web Developer", 
    "Tech Explorer",
    "Problem Solver",
    "Creative Coder"
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Organic Background with Natural Gradients */}
      <div className="absolute inset-0" style={{
        background: `
          linear-gradient(135deg, #667eea 0%, #764ba2 100%),
          linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)
        `
      }}>
        {/* Floating organic shapes */}
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full animate-float-gentle" style={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.1) 100%)',
          filter: 'blur(40px)'
        }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full animate-pulse-soft" style={{
          background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.2) 0%, rgba(245, 87, 108, 0.1) 100%)',
          filter: 'blur(50px)',
          animationDelay: '1s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full animate-pulse-soft" style={{
          background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.1) 100%)',
          filter: 'blur(60px)',
          animationDelay: '2s'
        }}></div>
      </div>

      <div className="relative z-10 container-organic">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Content with Natural Flow */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className={`fade-in-natural ${isLoaded ? 'visible' : ''}`}>
              
              {/* Organic Badge */}
              <div className="inline-flex items-center gap-3 card-dark-organic px-6 py-3 mb-8">
                <div className="w-3 h-3 rounded-full animate-pulse-soft" style={{
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                }}></div>
                <Sparkles className="text-yellow-300" size={18} />
                <span className="text-white/90 font-medium">Available for Opportunities</span>
                <Heart className="text-pink-300" size={16} />
              </div>

              {/* Natural Heading with Gradient */}
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Hi, I'm </span>
                <br />
                <span className="text-gradient-organic animate-gradient-flow" style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Mohammed
                </span>
                <br />
                <span className="text-gradient-organic animate-gradient-flow" style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #f093fb 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animationDelay: '1s'
                }}>
                  Farhan
                </span>
              </h1>

              {/* Animated Role with Natural Transition */}
              <div className="mb-10">
                <div className="text-xl lg:text-2xl text-white/80 mb-3 font-light">Passionate</div>
                <div className="h-16 lg:h-20 flex items-center">
                  <span className="text-3xl lg:text-5xl font-bold transition-organic" style={{
                    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {roles[currentRole]}
                  </span>
                  <div className="w-1 h-10 lg:h-14 ml-3 animate-pulse-soft" style={{
                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                  }}></div>
                </div>
              </div>

              {/* Natural Description */}
              <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl font-light">
                A dedicated computer science student with a genuine passion for{' '}
                <span className="font-semibold text-gradient-organic" style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>full-stack development</span> and{' '}
                <span className="font-semibold text-gradient-organic" style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>innovative problem-solving</span>. 
                Ready to bring fresh ideas and dedication to your team.
              </p>

              {/* Organic Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                {[
                  { number: "8+", label: "Certifications", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
                  { number: "5+", label: "Projects", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
                  { number: "7.61", label: "CGPA", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }
                ].map((stat, index) => (
                  <div key={index} className="text-center card-dark-organic p-4 transition-bounce hover:scale-105">
                    <div className="text-2xl lg:text-3xl font-bold mb-2 text-gradient-organic" style={{
                      background: stat.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {stat.number}
                    </div>
                    <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Natural CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#projects"
                  className="group px-8 py-4 rounded-2xl font-semibold text-center inline-flex items-center justify-center gap-3 transition-bounce hover:scale-105 shadow-organic-lg"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white'
                  }}
                >
                  <ExternalLink size={20} className="group-hover:rotate-12 transition-organic" />
                  Explore My Work
                  <Sparkles size={16} className="group-hover:scale-110 transition-organic" />
                </a>
                <a
                  href="/MohammedFarhan.pdf"
                  className="group card-dark-organic px-8 py-4 rounded-2xl font-semibold text-center inline-flex items-center justify-center gap-3 text-white transition-bounce hover:scale-105"
                >
                  <FileText size={20} className="group-hover:scale-110 transition-organic" />
                  Download Resume
                </a>
              </div>

              {/* Organic Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4">
                {[
                  { 
                    href: "https://linkedin.com/in/mohammed-farhan-1a0169271", 
                    icon: <Linkedin size={24} />, 
                    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    label: "LinkedIn" 
                  },
                  { 
                    href: "https://github.com/farhanmd789", 
                    icon: <Github size={24} />, 
                    gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
                    label: "GitHub" 
                  },
                  { 
                    href: "https://auth.geeksforgeeks.org/user/farhanmohd", 
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116 0 3.691 3.691 0 0 1-1.104-.695 3.226 3.226 0 0 1-.565-.745 2.32 2.32 0 0 1-.096-.85c.024-.28.08-.556.167-.82.087-.265.207-.51.36-.733.153-.223.34-.417.558-.58.218-.163.466-.296.739-.398.273-.102.564-.174.87-.215.306-.041.618-.051.93-.03.312.02.618.08.914.18.296.1.576.24.835.42.26.18.49.403.69.665.2.262.360.556.48.875.12.319.2.655.24.996.04.341.04.687 0 1.028-.04.341-.12.677-.24.996-.12.319-.28.613-.48.875-.2.262-.43.485-.69.665-.26.18-.539.32-.835.42-.296.1-.602.16-.914.18-.312.021-.624.011-.93-.03a4.478 4.478 0 0 1-.87-.215 3.691 3.691 0 0 1-.739-.398 3.226 3.226 0 0 1-.558-.58 2.32 2.32 0 0 1-.36-.733 2.32 2.32 0 0 1-.167-.82 2.32 2.32 0 0 1 .096-.85zm-18.9 0c.143.28.334.532.565.745.231.213.49.4.773.558.283.158.59.286.914.382.324.096.66.16 1.001.191.341.031.687.031 1.028 0 .341-.031.677-.095 1.001-.191.324-.096.631-.224.914-.382.283-.158.542-.345.773-.558.231-.213.422-.465.565-.745.143-.28.239-.588.286-.917.047-.329.047-.664 0-.993-.047-.329-.143-.637-.286-.917-.143-.28-.334-.532-.565-.745a3.691 3.691 0 0 0-.773-.558 4.51 4.51 0 0 0-.914-.382 4.51 4.51 0 0 0-1.001-.191 4.51 4.51 0 0 0-1.028 0 4.51 4.51 0 0 0-1.001.191 4.51 4.51 0 0 0-.914.382 3.691 3.691 0 0 0-.773.558c-.231.213-.422.465-.565.745-.143.28-.239.588-.286.917-.047.329-.047.664 0 .993.047.329.143.637.286.917z"/>
                      </svg>
                    ), 
                    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                    label: "GeeksforGeeks" 
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-dark-organic p-4 rounded-2xl text-white transition-bounce hover:scale-110 shadow-organic"
                    style={{
                      background: social.gradient
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Organic Profile Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className={`fade-in-natural ${isLoaded ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                
                {/* Main Profile Container with Natural Design */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  
                  {/* Organic Rotating Border */}
                  <div className="absolute inset-0 rounded-full animate-gradient-flow" style={{
                    background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 25%, #4facfe 50%, #00f2fe 75%, #f093fb 100%)',
                    backgroundSize: '400% 400%',
                    animationDuration: '8s'
                  }}></div>
                  <div className="absolute inset-2 rounded-full" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}></div>
                  
                  {/* Profile Picture with Natural Frame */}
                  <div className="absolute inset-4 rounded-full overflow-hidden shadow-organic-lg" style={{
                    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
                  }}>
                    <img 
                      src="https://i.postimg.cc/5NvpkgX8/profilepic-1.jpg" 
                      alt="Mohammed Farhan - Profile Picture"
                      className="w-full h-full object-cover rounded-full transition-organic hover:scale-105"
                    />
                  </div>

                  {/* Floating Organic Tech Icons */}
                  {[
                    { icon: <Code size={20} />, position: "-top-4 -right-4", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", delay: "0s" },
                    { icon: <Coffee size={20} />, position: "-bottom-4 -left-4", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", delay: "1s" },
                    { icon: <Sparkles size={16} />, position: "top-1/2 -left-8", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", delay: "0.5s" },
                    { icon: <Star size={16} />, position: "top-1/4 -right-8", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", delay: "1.5s" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`absolute ${item.position} p-3 rounded-2xl shadow-organic animate-float-gentle`}
                      style={{
                        background: item.gradient,
                        animationDelay: item.delay
                      }}
                    >
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Organic Skill Tags */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                  {[
                    { name: "React", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
                    { name: "Python", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
                    { name: "Java", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }
                  ].map((skill, index) => (
                    <span 
                      key={index}
                      className="card-dark-organic px-4 py-2 rounded-full text-sm font-medium text-white transition-bounce hover:scale-105"
                      style={{ background: skill.gradient }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Natural Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-white/70 text-sm mb-3 font-light">Discover my journey</div>
          <div className="animate-float-gentle">
            <ChevronDown className="text-white/70 mx-auto" size={28} />
          </div>
        </div>
      </div>

      {/* Organic Decorative Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full animate-pulse-soft" style={{
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      }}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 rounded-full animate-pulse-soft" style={{
        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        animationDelay: '1s'
      }}></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full animate-pulse-soft" style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        animationDelay: '2s'
      }}></div>
    </section>
  );
};

export default Hero;