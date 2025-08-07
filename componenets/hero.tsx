
import Image from "next/image";
import React from 'react';
import { Calendar, Phone, Mail, MapPin, Globe, Smartphone, Target, Camera, Search, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with menu button */}
        <div className="flex justify-end mb-8">
          <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Profile */}
          <div className="space-y-8">
            {/* Profile Image and Social Links */}
            <div className="relative">
              <div className="w-80 h-96 mx-auto lg:mx-0 relative">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
                  <Image 
                    width={320}
                    height={400}
                    src="/me.jpg" 
                    alt="Yousuf hussain" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Social Media Links */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 flex justify-center space-x-6">
                    <span className="text-sm font-medium text-white/80">Fb.</span>
                    <span className="text-sm font-medium text-white/80">Tw.</span>
                    <span className="text-sm font-medium text-white/80">Ins.</span>
                    <span className="text-sm font-medium text-white/80">Drb.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-yellow-400 text-sm mb-2">Hello Everyone 👋</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  I'm yousuf hussain
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  I am a <span className="text-yellow-400">|</span>
                </h2>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-yellow-400" />
                  <span>19.03.2006</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span>8074364081</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <span>hussainsyed@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>hyderabad india</span>
              </div>

              <p className="text-gray-300 leading-relaxed">
                I'm a Creative Developer for interactive projects that usually are apps, VR and Creative websites. I spend most of time coding outstanding projects or studying new technologies, to improve my development stack I develop compelling designs that spring to life using transition and animations that suit my clients, using the most sophisticated technologies available today for fully interactive and responsive websites and apps.
              </p>
            </div>
          </div>

          {/* Right Column - What I Do */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 underline decoration-yellow-400 decoration-2 underline-offset-8">
                What I do
              </h3>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Web Sites and Platforms */}
              <div className="group cursor-pointer">
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full hover:border-yellow-400/50 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/10 transition-colors duration-300">
                      <Globe className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Web Sites and</h4>
                      <h4 className="text-lg font-semibold text-white">Platforms</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Applications */}
              <div className="group cursor-pointer">
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full hover:border-yellow-400/50 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/10 transition-colors duration-300">
                      <Smartphone className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Mobile</h4>
                      <h4 className="text-lg font-semibold text-white">Applications</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategy and Branding */}
              <div className="group cursor-pointer">
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full hover:border-yellow-400/50 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/10 transition-colors duration-300">
                      <Target className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Strategy</h4>
                      <h4 className="text-lg font-semibold text-white">and Branding</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Photography */}
              <div className="group cursor-pointer">
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full hover:border-yellow-400/50 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/10 transition-colors duration-300">
                      <Camera className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Product</h4>
                      <h4 className="text-lg font-semibold text-white">Photography</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO Optimization */}
              <div className="group cursor-pointer">
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full hover:border-yellow-400/50 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/10 transition-colors duration-300">
                      <Search className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Seo</h4>
                      <h4 className="text-lg font-semibold text-white">Optimization</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Management */}
              <div className="group cursor-pointer">
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full hover:border-yellow-400/50 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/10 transition-colors duration-300">
                      <Users className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Social Media</h4>
                      <h4 className="text-lg font-semibold text-white">Management</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;