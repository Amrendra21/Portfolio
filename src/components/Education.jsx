import React from "react";
import { GraduationCap, Trophy, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering - Artificial Intelligence",
      institution: "KIET Group of Institutions",
      location: "Ghaziabad",
      duration: "2024 - 2028",
      status: "Ongoing (3rd Semester)",
      description:
        "Specializing in AI and machine learning with a focus on modern software development practices.",
      highlights: [
        "Current 2nd Year Student",
        "AI/ML Specialization",
        "Active in tech communities",
      ],
    },
    {
      degree: "Higher Secondary Education",
      field: "Science (PCM)",
      institution: "Mount Litera Zee School",
      location: "Unna",
      duration: "2022 - 2024",
      grade: "92%",
      description:
        "Completed with Physics, Chemistry, and Mathematics as core subjects.",
      highlights: [
        "CBSE Board",
        "Science Stream",
        "Strong mathematical foundation",
      ],
    },
    {
      degree: "Secondary Education",
      field: "All Subjects",
      institution: "Mount Litera Zee School",
      location: "Unna",
      duration: "2020 - 2022",
      grade: "95%",
      description:
        "Excellent academic performance across all subjects with focus on mathematics and science.",
      highlights: [
        "CBSE Board",
        "Academic Excellence",
        "Well-rounded education",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic path has been marked by consistent excellence and a
            passion for learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } md:w-1/2`}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-600 p-3 rounded-lg">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-2">
                          {edu.field}
                        </p>
                      </div>
                      {edu.grade && (
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center gap-1">
                          <Trophy size={16} />
                          <span className="font-semibold">{edu.grade}</span>
                        </div>
                      )}
                      {edu.status && (
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          <span className="font-semibold">{edu.status}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span>
                          {edu.institution}, {edu.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{edu.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Looking Forward</h3>
            <p className="text-blue-100 leading-relaxed">
              As I continue my journey in Computer Science with AI
              specialization, I'm excited to dive deeper into emerging
              technologies and contribute to innovative projects that make a
              real impact. My goal is to become a skilled AI engineer who can
              bridge the gap between cutting-edge research and practical
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
