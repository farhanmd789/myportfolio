import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Heart, Target, Sparkles, TrendingUp, BookOpen, Coffee } from 'lucide-react';

const About: React.FC = () => {
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

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Sri Vasavi Engineering College, Tadepalligudem",
      period: "2022–2026",
      score: "68%",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      degree: "Intermediate",
      institution: "NRI Junior College",
      period: "2020–2022",
      score: "79%",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      degree: "10th Grade",
      institution: "ZP High School",
      period: "2019–2020",
      score: "96%",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const hobbies = [
    { text: "Exploring new technologies", icon: <Sparkles size={18} />, gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { text: "Reading books and novels", icon: <BookOpen size={18} />, gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { text: "Writing quotes", icon: <Heart size={18} />, gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
    { text: "Enjoying nature", icon: <Coffee size={18} />, gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }
  ];

  return (
    <section id="about" className="section-organic relative overflow-hidden" ref={sectionRef} style={{
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }}>
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full animate-float-gentle" style={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.1) 100%)',
          filter: 'blur(40px)'
        }}></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full animate-pulse-soft" style={{
          background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.15) 0%, rgba(245, 87, 108, 0.1) 100%)',
          filter: 'blur(50px)',
          animationDelay: '1s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full animate-pulse-soft" style={{
          background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.05) 100%)',
          filter: 'blur(60px)',
          animationDelay: '2s'
        }}></div>
      </div>
      
      <div className="container-organic">
        <div className={`fade-in-natural ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-3 card-organic px-6 py-3 mb-6 shadow-organic">
              <Sparkles className="text-purple-600" size={18} />
              <span className="text-gray-800 font-medium">Getting to know me</span>
              <Heart className="text-pink-500" size={16} />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gradient-organic" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>About Me</h2>
            <div className="w-32 h-1 mx-auto rounded-full" style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
            }}></div>
            <p className="text-xl text-gray-700 mt-8 max-w-3xl mx-auto leading-relaxed font-light">
              Passionate about creating meaningful solutions and embracing continuous growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
            {/* Bio Section with Natural Design */}
            <div className="space-y-8">
              <div className="card-organic p-8 shadow-organic-lg transition-bounce hover:scale-105 group">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                  <div className="p-4 rounded-2xl transition-bounce group-hover:scale-110" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}>
                    <Target className="text-white" size={28} />
                  </div>
                  <span className="text-gradient-organic" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>My Journey</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
                  I'm a passionate computer science student who believes in the power of technology 
                  to solve real-world problems. My journey began with curiosity about how things work, 
                  and has evolved into a deep love for creating meaningful digital experiences.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Every line of code I write is driven by the desire to make a positive impact. 
                  I approach challenges with creativity, persistence, and a genuine enthusiasm 
                  for learning new technologies and methodologies.
                </p>
              </div>

              {/* Hobbies with Organic Design */}
              <div className="card-organic p-8 shadow-organic-lg transition-bounce hover:scale-105 group">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                  <div className="p-4 rounded-2xl transition-bounce group-hover:scale-110" style={{
                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                  }}>
                    <Heart className="text-white" size={28} />
                  </div>
                  <span className="text-gradient-organic" style={{
                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>What I Love</span>
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl transition-bounce hover:scale-105 group/hobby" style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}>
                      <div className="p-3 rounded-xl transition-bounce group-hover/hobby:scale-110" style={{
                        background: hobby.gradient
                      }}>
                        <div className="text-white">
                          {hobby.icon}
                        </div>
                      </div>
                      <span className="text-gray-800 font-medium text-lg">{hobby.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Section with Natural Flow */}
            <div>
              <div className="flex items-center gap-6 mb-10">
                <div className="p-5 rounded-3xl shadow-organic-lg" style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                }}>
                  <GraduationCap className="text-white" size={36} />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-gradient-organic" style={{
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Educational Journey</h3>
                  <p className="text-gray-700 text-xl font-light">Building a strong foundation</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="card-organic p-8 shadow-organic-lg transition-bounce hover:scale-105 group">
                    <div className="flex items-start justify-between mb-6">
                      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-organic leading-tight">{edu.degree}</h4>
                      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl shadow-organic" style={{
                        background: edu.gradient
                      }}>
                        <Award className="text-white transition-bounce group-hover:rotate-12" size={20} />
                        <span className="text-white font-bold text-lg">{edu.score}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 font-semibold mb-3 text-lg">{edu.institution}</p>
                    <p className="text-gray-600 flex items-center gap-3 font-medium">
                      <TrendingUp size={18} className="text-blue-600" />
                      <span>{edu.period}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Natural Call to Action */}
          <div className="mt-20 text-center relative z-10">
            <div className="card-organic p-10 shadow-organic-lg transition-bounce hover:scale-105" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              backdropFilter: 'blur(20px)'
            }}>
              <h3 className="text-4xl font-bold mb-6 text-gradient-organic" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Ready to collaborate?</h3>
              <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-xl leading-relaxed font-light">
                I'm always excited to work on meaningful projects and connect with like-minded individuals. 
                Let's create something beautiful and impactful together!
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-white transition-bounce hover:scale-105 shadow-organic-lg"
                style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                }}
              >
                <Sparkles size={22} />
                Let's Connect
                <Heart size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;