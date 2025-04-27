import { GraduationCap, School, Building2, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: "National Engineering School of Sfax (ENIS)",
      degree: "Electrical Engineering",
      specialization: "Embedded Systems",
      period: "2020 - 2023",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Specialized in embedded systems development with a focus on hardware-software integration and real-time systems.",
      color: "from-blue-500 to-purple-600"
    },
    {
      institution: "Preparatory Institute for Engineering Studies of Kairouan (IPEIK)",
      degree: "Pre-engineering Diploma",
      specialization: "Mathematics and Physics",
      period: "2018 - 2020",
      icon: <School className="w-6 h-6" />,
      description: "Intensive study program focusing on mathematics, physics, and fundamentals of mechanical and automated systems.",
      color: "from-purple-500 to-pink-600"
    },
    {
      institution: "High School of Ali Bourguiba (Sousse)",
      degree: "General Education",
      specialization: "Mechanical and Electrical Sciences",
      period: "2014 - 2018",
      icon: <Building2 className="w-6 h-6" />,
      description: "Foundational education with specialization in mechanical and electrical sciences, building a strong technical background.",
      color: "from-pink-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Academic Journey</h1>
          <p className="text-gray-300 text-lg">
            My educational path in engineering and technical sciences
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          {/* Education Items */}
          <div className="space-y-20">
            {education.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-full border-4 border-gray-700 flex items-center justify-center z-10">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-gray-100">{item.institution}</h3>
                        <p className="text-blue-400 font-medium">{item.degree}</p>
                        <p className="text-purple-400">{item.specialization}</p>
                        <p className="text-gray-400 text-sm">{item.period}</p>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
  