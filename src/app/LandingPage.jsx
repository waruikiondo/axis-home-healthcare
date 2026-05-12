"use client";

import React, { useState, useEffect } from "react";
import { 
  HeartPulse, Home, Users, MapPin, Phone, Mail, 
  CheckCircle2, ArrowRight, Clock, Activity,
  ShieldCheck, HeartHandshake, FileText, UserPlus, Star, Award, Heart, Navigation
} from "lucide-react";

export default function LandingPage() {
  // Carousel Data and State
  const carouselImages = [
    {
      url: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1000",
      title: "Holistic Care Approach",
      subtitle: "Bringing professional, loving care right to your doorstep."
    },
    {
      url: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1000",
      title: "Compassionate Support",
      subtitle: "Building trust and fostering meaningful daily connections."
    },
    {
      url: "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=1000",
      title: "Empowered Independence",
      subtitle: "Helping you maintain your lifestyle with dignity."
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play effect for the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Changes image every 5 seconds
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-gray-900 selection:bg-teal-200 selection:text-teal-900 scroll-smooth">
      
      {/* Top Contact Bar */}
      <div className="bg-[#1E3A8A] text-white py-2 hidden md:block text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-teal-400" /> Serving All Areas in Minnesota</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-teal-400" /> Admin@axishealthmn.com</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-bold"><Phone className="h-4 w-4 text-teal-400" /> 612-472-5589</span>
            <a href="#contact" className="hover:text-teal-300 transition-colors">Client Portal</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 w-full bg-white z-50 shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-teal-50 p-2.5 rounded-xl border border-teal-100">
              <HeartPulse className="h-7 w-7 text-teal-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl text-[#1E3A8A] tracking-tight leading-none">Axis</span>
              <span className="text-[10px] font-bold text-teal-600 tracking-widest uppercase mt-1">Home Healthcare LLC</span>
            </div>
          </div>
          <div className="hidden lg:flex gap-8 items-center">
            <a href="#about" className="text-sm font-bold text-gray-600 hover:text-teal-600 transition">About Us</a>
            <a href="#services" className="text-sm font-bold text-gray-600 hover:text-teal-600 transition">Services</a>
            <a href="#office" className="text-sm font-bold text-gray-600 hover:text-teal-600 transition">Our Office</a>
            <a href="#referrals" className="text-sm font-bold text-gray-600 hover:text-teal-600 transition">Send a Referral</a>
            <a href="#contact" className="bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-teal-700 transition-all shadow-md">
              Set an Appointment
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 bg-gray-900 flex items-center justify-center text-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            alt="Healthcare professional caring for senior"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A] via-[#1E3A8A]/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 border border-teal-400/50 text-teal-300 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              Your Trusted Care Partner in Minnesota
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.15] mb-6 text-white tracking-tight">
              Where Your <span className="text-teal-400">Welfare</span> Comes First.
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
              You can count on Axis Home Healthcare to guide you on the right path towards a sustainable, secure, and independent future right in the comfort of your own home and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="bg-teal-500 text-[#1E3A8A] px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-400 transition-all shadow-lg flex items-center justify-center gap-2 group">
                Explore Our Services <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="bg-white/10 border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center backdrop-blur-md">
                Send a Referral Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 hidden md:block mb-12">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-5 hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
            <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Eligibility for Care</h3>
              <p className="text-sm text-gray-500 mt-1">Is your older loved one eligible?</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-5 hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
            <div className="bg-teal-50 p-4 rounded-full group-hover:bg-teal-600 group-hover:text-white transition-colors text-teal-600">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Meet Our Staff</h3>
              <p className="text-sm text-gray-500 mt-1">Professionals trained for the best care.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-5 hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
            <div className="bg-amber-50 p-4 rounded-full group-hover:bg-amber-500 group-hover:text-white transition-colors text-amber-600">
              <UserPlus className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Send Referrals</h3>
              <p className="text-sm text-gray-500 mt-1">Help someone in need today.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us / Mission Section */}
      <section id="about" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-bold tracking-wide uppercase mb-6 border border-teal-100">
                <Heart className="h-4 w-4" /> Introducing Axis Home Healthcare
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A] mb-6 leading-tight">
                Dedicated Support for Your Peace of Mind
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                There is a multitude of challenges that prevent senior adults and those with physical or mental disabilities from being able to acquire the things they need to live sustainably. These include sustainable housing, employment, financial stability, care assistance, treatment, and more.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                That is why at <strong>Axis Home Healthcare LLC</strong>, we work closely with our clients to provide them the means and support they will need. We make it our mission to be a competent and highly-relied provider of care and support. We are committed to ensuring that every one of our clients can address their needs in a compassionate, dignified manner.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="h-6 w-6 text-teal-500 mr-3 shrink-0" /> Thoroughly trained and background-checked staff.
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="h-6 w-6 text-teal-500 mr-3 shrink-0" /> Customized care plans tailored to individual needs.
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="h-6 w-6 text-teal-500 mr-3 shrink-0" /> Licensed by the state of Minnesota (MDH & DHS).
                </li>
              </ul>
            </div>
            
            {/* Dynamic Image Carousel */}
            <div className="relative">
              <div className="absolute inset-0 bg-teal-600 rounded-3xl transform translate-x-6 translate-y-6"></div>
              <div className="relative bg-gray-200 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                {carouselImages.map((img, idx) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className={`w-full h-full object-cover transition-transform duration-[10000ms] ${
                        idx === currentImageIndex ? "scale-105" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                      <div className="text-white relative w-full">
                        <h3 className="text-2xl font-bold mb-2 drop-shadow-md">{img.title}</h3>
                        <p className="text-gray-200 drop-shadow-sm">{img.subtitle}</p>
                        
                        {/* Carousel Indicators */}
                        <div className="flex gap-2 mt-6">
                          {carouselImages.map((_, dotIdx) => (
                            <button 
                              key={dotIdx}
                              onClick={() => setCurrentImageIndex(dotIdx)}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                dotIdx === currentImageIndex ? "w-6 bg-teal-400" : "w-2 bg-white/40 hover:bg-white/80"
                              }`}
                              aria-label={`Go to slide ${dotIdx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 text-blue-600">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-500 text-sm">Treating every client with the utmost empathy, kindness, and understanding.</p>
            </div>
            <div className="p-6">
              <div className="bg-teal-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 text-teal-600">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-500 text-sm">Maintaining the highest ethical standards and transparency in all we do.</p>
            </div>
            <div className="p-6">
              <div className="bg-amber-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 text-amber-600">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Respect</h3>
              <p className="text-gray-500 text-sm">Honoring the independence, privacy, and personal choices of our clients.</p>
            </div>
            <div className="p-6">
              <div className="bg-indigo-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 text-indigo-600">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-500 text-sm">Committing to continuous improvement and top-tier service delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <span className="text-teal-600 font-bold uppercase tracking-wider mb-2 block">How We Meet Your Needs</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A] mb-6">Services We Provide</h2>
            <p className="text-lg text-gray-700 leading-relaxed bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              Our agency offers <strong>Basic Home Care services</strong> (licensed by the Minnesota Department of Health) and <strong>Home and Community-Based Services (HCBS)</strong> through the Minnesota Department of Human Services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
                <Home className="text-blue-700 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Home Care</h3>
              <p className="text-sm font-bold text-blue-600 mb-6 uppercase tracking-wider flex items-center gap-1 border-b border-gray-100 pb-4">
                <ShieldCheck className="h-4 w-4" /> MDH Licensed
              </p>
              
              <ul className="space-y-4">
                {[
                  "Homemaking", 
                  "Companion Services (socialization and supervision)", 
                  "Home Health Aide Services", 
                  "Assistance of Activities of Daily Living (ADLs)", 
                  "Medication Reminders", 
                  "Meal Preparation", 
                  "Vital Signs Monitoring (if applicable)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700 leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 shrink-0 mt-0.5" /> 
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col">
              <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-teal-100">
                <Users className="text-teal-700 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">HCBS Services</h3>
              <p className="text-sm font-bold text-teal-600 mb-6 uppercase tracking-wider flex items-center gap-1 border-b border-gray-100 pb-4">
                <ShieldCheck className="h-4 w-4" /> DHS Licensed
              </p>
              
              <ul className="space-y-4 flex-grow">
                {[
                  "Individualized Home Supports (IHS) without training", 
                  "Companion Support (provided under IHS)", 
                  "Night Supervision", 
                  "24 Hour Emergency Assistance", 
                  "Respite Care"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700 leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-3 shrink-0 mt-0.5" /> 
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1E3A8A] rounded-[2rem] p-8 shadow-xl text-white transition-all duration-300">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <Activity className="text-teal-300 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 leading-tight">Community First Services and Supports (CFSS)</h3>
              <p className="text-sm font-bold text-teal-300 mb-6 uppercase tracking-wider flex items-center gap-1 border-b border-white/20 pb-4">
                <ShieldCheck className="h-4 w-4" /> Through Minnesota DHS
              </p>
              
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                CFSS helps individuals live independently at home and in the community. CFSS services include <strong className="text-white">Activities of Daily Living (ADLs)</strong>:
              </p>

              <ul className="space-y-3">
                {[
                  "Bathing", 
                  "Dressing", 
                  "Grooming", 
                  "Toileting", 
                  "Eating", 
                  "Mobility / Transfers"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="h-5 w-5 text-teal-400 mr-3 shrink-0" /> 
                    <span className="font-semibold tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold uppercase tracking-wider mb-2 block">Client Reviews</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A]">Hear From Our Families</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#F8FAFC] p-8 rounded-3xl border border-gray-200 shadow-sm relative">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-white p-2 rounded-full border border-gray-100 shadow-sm">
                  <Star className="text-amber-400 fill-amber-400 h-6 w-6" />
                </div>
                <div className="flex text-amber-400 mb-4 gap-1">
                  <Star className="fill-current h-4 w-4" /><Star className="fill-current h-4 w-4" /><Star className="fill-current h-4 w-4" /><Star className="fill-current h-4 w-4" /><Star className="fill-current h-4 w-4" />
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "We're proud to make a difference in the lives of many clients. Read their testimonials soon. Check back next time for updates in this section."
                </p>
                <div className="font-bold text-[#1E3A8A]">- Client Family Member</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Photos & GPS Directions */}
      <section id="office" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold uppercase tracking-wider mb-2 block">Our Location</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A]">Visit Our Office</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
            <div className="flex flex-col gap-4">
              <img 
                src="/images/office-exterior.jpeg" 
                alt="Axis Home Healthcare Building Exterior" 
                className="rounded-2xl w-full h-64 object-cover shadow-md hover:opacity-95 transition-opacity"
              />
              
              <div className="grid grid-cols-3 gap-4">
                <img 
                  src="/images/office-exterior-2.jpeg" 
                  alt="Axis Home Healthcare Parking" 
                  className="rounded-2xl w-full h-32 object-cover shadow-sm hover:opacity-95 transition-opacity"
                />
                <img 
                  src="/images/office-interior.jpeg" 
                  alt="Axis Home Healthcare Office Interior" 
                  className="rounded-2xl w-full h-32 object-cover shadow-sm hover:opacity-95 transition-opacity"
                />
                <img 
                  src="/images/office-conference.jpeg" 
                  alt="Axis Home Healthcare Conference Room" 
                  className="rounded-2xl w-full h-32 object-cover shadow-sm hover:opacity-95 transition-opacity"
                />
              </div>
            </div>

            <div className="flex flex-col h-full justify-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Axis Home Healthcare LLC</h3>
                <div className="flex items-start gap-4 mb-4 text-gray-600 text-lg">
                  <MapPin className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                  <p>7101 York Ave S, Suite 252<br/>Edina, MN 55435</p>
                </div>
                <div className="flex items-center gap-4 text-gray-600 text-lg">
                  <Clock className="h-6 w-6 text-teal-600 shrink-0" />
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="w-full h-64 rounded-2xl overflow-hidden shadow-inner mb-8 border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.996165243166!2d-93.3228946!3d44.8724128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f626600c9dc8ab%3A0xc301211e2f754fc3!2s7101%20York%20Ave%20S%2C%20Edina%2C%20MN%2055435!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=7101+York+Ave+S,+Suite+252,+Edina,+MN+55435"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all shadow-lg flex items-center justify-center gap-3 group"
              >
                <Navigation className="h-6 w-6 group-hover:-translate-y-1 transition-transform" /> 
                Get GPS Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-teal-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-2">Ready to start your home care journey?</h2>
            <p className="text-teal-100 text-lg">Contact our team today to discuss eligibility and personalized care plans.</p>
          </div>
          <a href="#contact" className="bg-[#1E3A8A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition-all shadow-lg whitespace-nowrap">
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Contact & Referrals Section */}
      <section id="contact" className="py-24 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-teal-400 font-bold uppercase tracking-wider mb-2 block">Reach Out To Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Get In Touch</h2>
              <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                Questions? Inquiries? Referrals? Kindly fill out the form, and our dedicated care coordinators will get back to you promptly to discuss your needs.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-4 rounded-2xl"><MapPin className="text-teal-400 h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Office Location</h4>
                    <p className="text-blue-200">7101 York Ave S, Suite 252<br/>Edina, MN 55435</p>
                    <p className="text-sm text-teal-300 mt-2 font-semibold">Service Areas: All areas in Minnesota</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="bg-white/10 p-4 rounded-2xl"><Phone className="text-teal-400 h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Phone Number</h4>
                    <p className="text-blue-200">612-472-5589</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="bg-white/10 p-4 rounded-2xl"><Mail className="text-teal-400 h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Email Address</h4>
                    <p className="text-blue-200">Admin@axishealthmn.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-white/10 p-4 rounded-2xl"><Clock className="text-teal-400 h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Office Hours</h4>
                    <p className="text-blue-200">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="referrals" className="bg-white rounded-[2rem] p-10 shadow-2xl text-gray-900 border-t-8 border-teal-500">
              <h3 className="text-2xl font-extrabold mb-2">Send Us a Message</h3>
              <p className="text-gray-500 mb-8">Fill out the form below to get started with our services or refer someone.</p>
              
              <form action="https://formsubmit.co/Admin@axishealthmn.com" method="POST" className="space-y-5">
                <input type="hidden" name="_subject" value="New Inquiry from Axis Healthcare Website!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://axishealthmn.com" />

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input type="text" name="First_Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors" placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input type="text" name="Last_Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors" placeholder="Doe" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" name="Email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" name="Phone" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors" placeholder="(612) 472-5589" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Purpose of Inquiry</label>
                  <select name="Purpose" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-gray-700">
                    <option>I am inquiring for myself</option>
                    <option>I am referring a client / family member</option>
                    <option>I have a general question</option>
                    <option>I am interested in employment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea name="Message" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none" placeholder="How can we help you today?" required></textarea>
                </div>
                <button type="submit" className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg mt-2">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-800">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <HeartPulse className="h-6 w-6 text-teal-500" />
                <span className="font-extrabold text-xl text-white tracking-tight">Axis Home Healthcare LLC</span>
              </div>
              <p className="max-w-sm text-gray-500 leading-relaxed">
                Dedicated to providing excellent, holistic, and state-licensed care to individuals across Minnesota. 
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition-colors">Our Services</a></li>
                <li><a href="#referrals" className="hover:text-teal-400 transition-colors">Send a Referral</a></li>
                <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Compliance</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-400 transition-colors">MDH Guidelines</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">DHS Standards</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
            <p>© Copyright {new Date().getFullYear()} Axis Home Healthcare LLC. All Rights Reserved.</p>
            <p>Designed for Website Accessibility.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}