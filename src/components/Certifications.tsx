import React, { useEffect, useRef, useState } from 'react';
import { Award, Trophy, CheckCircle, Shield, BookOpen, Sparkles, Star, Heart } from 'lucide-react';

const Certifications: React.FC = () => {
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

  const certifications = [
    {
      title: "HTML5 Certification",
      provider: "Infosys Springboard",
      category: "Web Development",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      icon: <Award className="text-white" size={24} />
    },
    {
      title: "CSS & JavaScript Essentials",
      provider: "Udemy",
      category: "Frontend Development",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: <Star className="text-white" size={24} />
    },
    {
      title: "JavaScript Intermediate",
      provider: "SoloLearn",
      category: "Programming",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: <Trophy className="text-white" size={24} />
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      category: "Web Design",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: <Shield className="text-white" size={24} />
    },
    {
      title: "Web Development",
      provider: "Bharat Intern",
      category: "Full Stack",
      gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
      icon: <BookOpen className="text-white" size={24} />
    },
    {
      title: "WordPress Introduction",
      provider: "Simplilearn",
      category: "CMS",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: <Award className="text-white" size={24} />
    },
    {
      title: "AWS Cloud Certification",
      provider: "AICTE Eduskills",
      category: "Cloud Computing",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      icon: <Trophy className="text-white" size={24} />
    },
    {
      title: "Azure AI Fundamentals",
      provider: "Microsoft Global Certified",
      category: "Artificial Intelligence",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: <Star className="text-white" size={24} />
    }
  ];

  return (
    <section id="certifications" className="section-organic relative overflow-hidden" ref={sectionRef} style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full animate-float-gentle" style={{
          background: 'linear-gradient(135deg, rgba(250, 112, 154, 0.2) 0%, rgba(254, 225, 64, 0.1) 100%)',
          filter: 'blur(40px)'
        }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full animate-pulse-soft" style={{
          background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.1) 100%)',
          filter: 'blur(50px)',
          animationDelay: '1s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full animate-pulse-soft" style={{
          background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1) 0%, rgba(245, 87, 108, 0.05) 100%)',
          filter: 'blur(60px)',
          animationDelay: '2s'
        }}></div>
      </div>
      
      <div className="container-organic">
        <div className={`fade-in-natural ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-3 card-dark-organic px-6 py-3 mb-6">
              <Trophy className="text-yellow-300" size={20} />
              <span className="text-white/90 font-medium">Professional Achievements</span>
              <Shield className="text-blue-300" size={20} />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">Certifications</h2>
            <div className="w-32 h-1 mx-auto rounded-full" style={{
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
            }}></div>
            <p className="text-xl text-white/80 mt-8 max-w-4xl mx-auto leading-relaxed font-light">
              My journey of continuous learning through industry-recognized certifications 
              that validate my technical skills and passion for professional growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 relative z-10 mb-20">
            {certifications.map((cert, index) => (
              <div key={index} className="card-dark-organic p-8 transition-bounce hover:scale-105 group">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 rounded-3xl transition-bounce group-hover:scale-110 shadow-organic-lg" style={{
                    background: cert.gradient
                  }}>
                    {cert.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-organic leading-tight">{cert.title}</h3>
                <p className="text-blue-300 font-semibold mb-3 text-lg">{cert.provider}</p>
                <p className="text-white/70 text-sm mb-6 font-medium">{cert.category}</p>
                
                <div className="pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-4 py-2 rounded-2xl flex items-center gap-2 font-medium" style={{
                      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
                      color: '#22c55e',
                      border: '1px solid rgba(34, 197, 94, 0.3)'
                    }}>
                      <CheckCircle size={14} />
                      Certified
                    </span>
                    <div className="text-xs text-white/60 font-medium">
                      2023-2024
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Organic Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 mb-20">
            {[
              { number: "8+", label: "Certifications", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", icon: <BookOpen size={24} /> },
              { number: "5+", label: "Platforms", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", icon: <Shield size={24} /> },
              { number: "100+", label: "Learning Hours", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", icon: <Trophy size={24} /> },
              { number: "2025", label: "Recent Year", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", icon: <Award size={24} /> }
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

          {/* Inspirational Learning Quote */}
          <div className="text-center relative z-10">
            <div className="card-dark-organic p-10 transition-bounce hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl" style={{
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                }}>
                  <Heart className="text-white" size={28} />
                </div>
              </div>
              <blockquote className="text-2xl text-white/90 font-light italic mb-6 leading-relaxed">
                "Learning never exhausts the mind. Every certification is a step forward in my journey."
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <Sparkles className="text-yellow-300" size={20} />
                <span className="text-white/70 font-medium">Lifelong Learning Journey</span>
                <Sparkles className="text-yellow-300" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;