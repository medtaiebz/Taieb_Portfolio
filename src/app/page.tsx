import Image from 'next/image';
import profilePhoto from '@/public/images/profile.jpg';
import Services from "./sections/services/page";
import ContactPage from "./sections/contact/page";
import { Linkedin, Github, FileText } from 'lucide-react';
import About from './sections/about/page';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden pt-24 pb-16 px-4 md:px-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Profile Photo with Animation */}
            <div className="w-48 h-48 md:w-72 md:h-72 relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10"></div>
              <Image
                src={profilePhoto}
                alt="Mohamed Taieb Zorgati - Professional Photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 288px"
                priority
              />
            </div>

            {/* Introduction Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="space-y-4">
                <h2 className="text-lg md:text-xl font-medium text-blue-400">Welcome to my portfolio</h2>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-100 leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mohamed Taieb Zorgati</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  A passionate software engineer specializing in full-stack development and embedded systems. 
                  With expertise in IoT and power electronics, I create innovative solutions that bridge hardware and software.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="/documents/Mohamed-Taieb-Zorgati-Resume.pdf"
                  download="Mohamed-Taieb-Zorgati-Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                >
                  <FileText className="w-5 h-5" />
                  Download CV
                </a>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/tayeb-zorgati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </a>

                  <a
                    href="https://github.com/medtaiebz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <Github className="w-6 h-6 text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">About Me</h2>
          <About/>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">Services</h2>
          <Services />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">Get in Touch</h2>
          <ContactPage />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Mohamed Taieb Zorgati. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}