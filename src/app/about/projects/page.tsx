"use client";
import { MonitorSmartphone, Car, Radio, Droplets, Sun } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Indoor Air Quality Monitoring System",
      company: "Hydatis",
      period: "February 2024 – June 2024",
      role: "Embedded Systems Intern",
      techStack: ["STM32", "Embedded C", "Python", "RTOS", "Kafka", "Wi-Fi", "Next.js"],
      description: "Developed a comprehensive air quality monitoring system leveraging the STM32L475 microcontroller. Integrated multiple environmental sensors to gather real-time data, which was transmitted wirelessly to a remote server using Wi-Fi and Kafka for efficient message queuing. Designed and deployed a web-based dashboard using Next.js for intuitive data visualization. Enhanced the system with a machine learning model for predictive analysis of air quality trends, ensuring timely health and safety interventions.",
      features: [
        "Real-time environmental data transmission and visualization",
        "Machine learning for predictive analytics",
        "RTOS-based architecture for reliable sensor data processing",
        "Kafka integration for low-latency data streaming"
      ],
      icon: <MonitorSmartphone className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Low-Cost Vehicle Telemetry System",
      company: "Dräxlmaier",
      period: "August 2023",
      role: "Embedded Systems Intern",
      techStack: ["ESP32", "C++", "Arduino", "Firebase", "LoRa"],
      description: "Engineered a low-cost telemetry system to monitor vehicle parameters including speed, acceleration, and temperature in real time. Deployed LoRa-based point-to-point communication for long-range data transmission, later integrating cloud functionality through Firebase for real-time remote access and logging. Focused on system reliability and scalability, aiming to enhance vehicle diagnostics and tracking in budget-constrained environments.",
      features: [
        "Real-time vehicle data acquisition",
        "Long-range communication using LoRa",
        "Firebase cloud integration for mobile access",
        "Energy-efficient ESP32 microcontroller"
      ],
      icon: <Car className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: "Application Taghtia (Telecom Asset Mapping)",
      company: "Tunisie Télécom",
      period: "July 2022 – August 2022",
      role: "Engineering Intern",
      techStack: ["ArcGIS Workforce"],
      description: "Contributed to the optimization of the Taghtia application by collecting, validating, and organizing geolocation data of telecom poles across the network. Gained hands-on experience with telecommunications infrastructure and spatial data management tools, streamlining data workflows within the ArcGIS ecosystem.",
      features: [
        "Enhanced positional accuracy of telecom infrastructure",
        "Improved application efficiency through structured data input",
        "Learned cable layout strategies and network topologies"
      ],
      icon: <Radio className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Automatic Watering System",
      company: "University Project",
      period: "Sep 2023 – Jan 2024",
      role: "Student Developer",
      techStack: ["STM32", "ESP8266", "Embedded C", "IoT", "Cloud Integration"],
      description: "Designed and built an intelligent irrigation system with real-time monitoring, cloud data logging, and remote control capabilities. Utilized environmental sensors to dynamically manage water distribution based on soil moisture and weather data. Achieved efficient water usage while enabling full remote system control via an IoT platform.",
      features: [
        "Cloud-integrated smart irrigation",
        "Real-time soil and weather-based decision logic",
        "Wireless access and system management"
      ],
      icon: <Droplets className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Twilight Switch System",
      company: "University Project",
      period: "Nov 2023 – Jan 2024",
      role: "Student Developer",
      techStack: ["Kicad", "PCB Design", "Analog Sensors"],
      description: "Created an automated twilight switch for adaptive lighting control based on ambient light conditions. Designed and fabricated a custom PCB tailored to the system's specific sensor requirements. Successfully tested the prototype in varying light environments, demonstrating reliable and energy-efficient lighting control.",
      features: [
        "Automatic ambient-light detection and control",
        "Custom PCB design using Kicad",
        "Energy-efficient lighting solution"
      ],
      icon: <Sun className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">My Projects</h1>
          <p className="text-gray-300 text-lg">
            A showcase of my technical projects and professional experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${project.color} p-1 rounded-xl`}>
                <div className="bg-gray-900 p-6 rounded-xl">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        {project.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-100">{project.title}</h2>
                        <p className="text-blue-400">{project.company} — {project.period}</p>
                        <p className="text-purple-400">{project.role}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-100">Key Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 