import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Cloud, Users, Zap, Star, Cpu, Globe, Heart, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
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

  const skillCategories = [
    {
      title: "Web Development",
      icon: <Globe className="text-white" size={32} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      skills: [
        { name: "HTML5 & CSS", level: 90, gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
        { name: "JavaScript", level: 85, gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
        { name: "ReactJS", level: 80, gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
        { name: "Node.js", level: 75, gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
        { name: "WordPress", level: 85, gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)" }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="text-white" size={32} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      skills: [
        { name: "C++", level: 85, gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
        { name: "Java", level: 75, gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
        { name: "Python", level: 80, gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="text-white" size={32} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      skills: [
        { name: "MySQL", level: 80, gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
        { name: "MongoDB", level: 70, gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)" },
        { name: "AWS", level: 60, gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
        { name: "Azure", level: 55, gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }
      ]
    },
    {
      title: "Tools & Soft Skills",
      icon: <Users className="text-white" size={32} />,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      skills: [
        { name: "Git & GitHub", level: 85, gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)" },
        { name: "Visual Studio", level: 90, gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
        { name: "Teamwork", level: 95, gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
        { name: "Critical Thinking", level: 90, gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
        { name: "Time Management", level: 88, gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-organic relative overflow-hidden" ref={sectionRef} style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full animate-float-gentle" style={{
          background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.2) 0%, rgba(245, 87, 108, 0.1) 100%)',
          filter: 'blur(40px)'
        }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full animate-pulse-soft" style={{
          background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.1) 100%)',
          filter: 'blur(50px)',
          animationDelay: '1s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full animate-pulse-soft" style={{
          background: 'linear-gradient(135deg, rgba(250, 112, 154, 0.1) 0%, rgba(254, 225, 64, 0.05) 100%)',
          filter: 'blur(60px)',
          animationDelay: '2s'
        }}></div>
      </div>
      
      <div className="container-organic">
        <div className={`fade-in-natural ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-3 card-dark-organic px-6 py-3 mb-6">
              <Zap className="text-yellow-300" size={20} />
              <span className="text-white/90 font-medium">Technical Expertise</span>
              <Cpu className="text-blue-300" size={20} />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">Skills & Expertise</h2>
            <div className="w-32 h-1 mx-auto rounded-full" style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
            }}></div>
            <p className="text-xl text-white/80 mt-8 max-w-4xl mx-auto leading-relaxed font-light">
              A passionate collection of technical and soft skills developed through dedication, 
              continuous learning, and hands-on experience in real-world projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 relative z-10">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card-dark-organic p-8 transition-bounce hover:scale-105 group">
                <div className="flex items-center gap-5 mb-10">
                  <div className="p-5 rounded-3xl transition-bounce group-hover:scale-110 shadow-organic-lg" style={{
                    background: category.gradient
                  }}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-blue-300 transition-organic">{category.title}</h3>
                    <div className="w-20 h-1 mt-3 rounded-full transition-organic group-hover:w-32" style={{
                      background: category.gradient
                    }}></div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-white/90 font-semibold text-lg group-hover/skill:text-white transition-organic">{skill.name}</span>
                        <div className="flex items-center gap-3 card-dark-organic px-4 py-2 rounded-2xl">
                          <Star className="text-yellow-300 transition-bounce group-hover/skill:scale-110" size={16} />
                          <span className="text-blue-300 font-bold">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="skill-bar-organic">
                        <div 
                          className="skill-progress-organic rounded-2xl h-full relative overflow-hidden"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            background: skill.gradient,
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 150}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse-soft"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Organic Skills Summary */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {[
              { number: "15+", label: "Technologies", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", icon: <Code size={24} /> },
              { number: "3+", label: "Languages", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", icon: <Globe size={24} /> },
              { number: "4+", label: "Frameworks", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", icon: <Zap size={24} /> },
              { number: "2+", label: "Cloud Platforms", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", icon: <Cloud size={24} /> }
            ].map((stat, index) => (
              <div key={index} className="text-center card-dark-organic p-8 transition-bounce hover:scale-105 group">
                <div className="p-4 rounded-2xl mx-auto w-fit mb-4 transition-bounce group-hover:scale-110" style={{
                  background: stat.gradient
                }}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2 text-gradient-organic" style={{
                  background: stat.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>{stat.number}</div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Inspirational Quote */}
          <div className="mt-20 text-center relative z-10">
            <div className="card-dark-organic p-10 transition-bounce hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl" style={{
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                }}>
                  <Heart className="text-white" size={28} />
                </div>
              </div>
              <blockquote className="text-2xl text-white/90 font-light italic mb-6 leading-relaxed">
                "The beautiful thing about learning is that no one can take it away from you."
              </blockquote>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="text-yellow-300" size={20} />
                <span className="text-white/70 font-medium">Continuous Growth Mindset</span>
                <Sparkles className="text-yellow-300" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;