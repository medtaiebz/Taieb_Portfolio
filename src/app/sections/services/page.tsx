"use client";

import React from "react";
import { Server, Cpu, Zap, Database, Cloud } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Embedded Systems",
      description: "Development of embedded solutions for IoT devices and industrial applications.",
      features: ["Firmware Development", "Hardware Integration", "Real-time Systems"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "IoT Solutions",
      description: "End-to-end IoT implementations from sensor integration to cloud connectivity.",
      features: ["Sensor Networks", "Data Collection", "Remote Monitoring"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Power Electronics",
      description: "Design and implementation of power electronic systems and control solutions.",
      features: ["Circuit Design", "Power Management", "Energy Efficiency"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "System Architecture",
      description: "Design of scalable and maintainable system architectures for complex applications.",
      features: ["Microservices", "Distributed Systems", "High Availability"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Implementation of efficient database solutions for various application needs.",
      features: ["Data Modeling", "Query Optimization", "Data Migration"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-700"
        >
          <div className="p-8">
            <div className="w-16 h-16 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400 mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-4">{service.title}</h3>
            <p className="text-gray-400 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}