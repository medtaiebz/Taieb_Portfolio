"use client";
import Link from "next/link";
import { GraduationCap, Rocket, Terminal } from 'lucide-react';

export default function About() {
  const skills = [
    { name: "Embedded Systems", icon: <Terminal className="w-6 h-6" /> },
    { name: "IoT Solutions", icon: <Rocket className="w-6 h-6" /> },
    { name: "Power Electronics", icon: <GraduationCap className="w-6 h-6" /> },
  ];

  return (
    <div className="space-y-16">
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          With a background in Electrical Engineering and a passion for software development,
          I bridge the gap between hardware and software to create innovative solutions.
          My expertise spans from embedded systems to full-stack web development.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-200">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Education & Projects Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <Link href="/about/education">
          <div className="group bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-xl">
            <div className="bg-gray-900 p-6 rounded-lg h-full hover:bg-gray-800 transition-colors">
              <div className="flex flex-col items-center text-center space-y-4">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-100">Education</h3>
                <p className="text-gray-400">
                  Discover my academic journey and qualifications in Electrical Engineering
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/about/projects">
          <div className="group bg-gradient-to-br from-purple-500 to-pink-600 p-1 rounded-xl">
            <div className="bg-gray-900 p-6 rounded-lg h-full hover:bg-gray-800 transition-colors">
              <div className="flex flex-col items-center text-center space-y-4">
                <Rocket className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-gray-100">Projects</h3>
                <p className="text-gray-400">
                  Explore my portfolio of innovative projects and technical achievements
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
