import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Linkedin, Github, MapPin, Send, MessageCircle, Clock, User, Sparkles, Heart, Star } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // EmailJS configuration
    const serviceId = 'service_74sz214';
    const templateId = 'template_wei0p6u';
    const publicKey = 'QR-PFu952XEIXXWGy';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      });
  };

  const contactInfo = [
    {
      icon: <Phone className="text-white" size={24} />,
      label: "Phone",
      value: "8919439778",
      link: "tel:8919439778",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      icon: <Mail className="text-white" size={24} />,
      label: "Email",
      value: "farhanmd789@gmail.com",
      link: "mailto:farhanmd789@gmail.com",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      label: "Location",
      value: "Tadepalligudem, Andhra Pradesh",
      link: null,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/mohammed-farhan-1a0169271",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/farhanmd789",
      gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z"/>
        </svg>
      ),
      label: "GeeksforGeeks",
      url: "https://auth.geeksforgeeks.org/user/farhanmohd",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  return (
    <section id="contact" className="section-organic relative overflow-hidden" ref={sectionRef} style={{
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
              <MessageCircle className="text-blue-300" size={20} />
              <span className="text-white/90 font-medium">Let's Connect</span>
              <Sparkles className="text-yellow-300" size={20} />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="w-32 h-1 mx-auto rounded-full" style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
            }}></div>
            <p className="text-xl text-white/80 mt-8 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to discuss your next project or explore potential opportunities? 
              I'd love to hear from you and collaborate on something meaningful together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            {/* Contact Information with Organic Design */}
            <div className="card-dark-organic p-10 transition-bounce hover:scale-105">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 rounded-3xl" style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                }}>
                  <User className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white">Contact Information</h3>
              </div>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-5 p-6 card-dark-organic rounded-2xl transition-bounce hover:scale-105 group">
                    <div className="p-4 rounded-2xl transition-bounce group-hover:scale-110" style={{
                      background: info.gradient
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-white/70 text-sm font-medium mb-1">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-white font-semibold text-lg hover:text-blue-300 transition-organic">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-lg">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links with Natural Design */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Sparkles className="text-blue-300" size={20} />
                  Connect with me
                  <Heart className="text-pink-300" size={18} />
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl text-white transition-bounce hover:scale-110 shadow-organic-lg"
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

              {/* Availability Status with Organic Design */}
              <div className="p-8 rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.3)'
              }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-4 h-4 rounded-full animate-pulse-soft" style={{
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                  }}></div>
                  <Clock className="text-green-400" size={20} />
                  <span className="text-green-300 font-bold text-lg">Available for opportunities</span>
                </div>
                <p className="text-green-200 leading-relaxed font-light">
                  Currently seeking internship opportunities and exciting projects to work on. 
                  Let's build something amazing together!
                </p>
              </div>
            </div>

            {/* Contact Form with Organic Design */}
            <div className="card-dark-organic p-10 transition-bounce hover:scale-105">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 rounded-3xl" style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                }}>
                  <Send className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white">Send a Message</h3>
              </div>
              
              {/* Status Messages with Natural Design */}
              {submitStatus === 'success' && (
                <div className="mb-8 p-6 rounded-2xl" style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
                  border: '1px solid rgba(34, 197, 94, 0.3)'
                }}>
                  <div className="flex items-center gap-3 text-green-300 mb-2">
                    <Sparkles size={18} />
                    <span className="font-semibold text-lg">Message sent successfully!</span>
                  </div>
                  <p className="text-green-200 font-light">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-8 p-6 rounded-2xl" style={{
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.1) 100%)',
                  border: '1px solid rgba(239, 68, 68, 0.3)'
                }}>
                  <div className="flex items-center gap-3 text-red-300 mb-2">
                    <MessageCircle size={18} />
                    <span className="font-semibold text-lg">Failed to send message</span>
                  </div>
                  <p className="text-red-200 font-light">Please try again or contact me directly via email.</p>
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 card-dark-organic rounded-2xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-organic font-light"
                      placeholder="Your name"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 card-dark-organic rounded-2xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-organic font-light"
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white/90 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 card-dark-organic rounded-2xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-organic font-light"
                    placeholder="What's this about?"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white/90 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-6 py-4 card-dark-organic rounded-2xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-organic resize-vertical font-light"
                    placeholder="Tell me about your project or opportunity..."
                    disabled={isSubmitting}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-4 shadow-organic-lg transition-bounce ${
                    isSubmitting 
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : 'hover:scale-105'
                  }`}
                  style={{
                    background: isSubmitting 
                      ? 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)' 
                      : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: 'white'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={22} />
                      Send Message
                      <Sparkles size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Footer */}
      <footer className="mt-24 pt-12 border-t border-white/20 relative z-10">
        <div className="container-organic">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl" style={{
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
              }}>
                <Heart className="text-white" size={24} />
              </div>
            </div>
            <p className="text-white/70 text-lg font-light leading-relaxed">
              © 2024 Mohammed Farhan. All rights reserved. 
              <br />
              Crafted with <span className="text-pink-300">❤️</span> using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;