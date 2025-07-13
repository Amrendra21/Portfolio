import React from "react";
import { Code, Database, Palette, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 75 },
      ],
    },
    {
      title: "Backend & Database",
      icon: <Database className="text-green-600" size={24} />,
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 75 },
        { name: "Python", level: 80 },
        { name: "C", level: 85 },
        { name: "C++", level: 80 },
      ],
    },
    {
      title: "Tools & Design",
      icon: <Palette className="text-purple-600" size={24} />,
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 90 },
        { name: "Canva", level: 80 },
      ],
    },
    {
      title: "Learning",
      icon: <Brain className="text-orange-600" size={24} />,
      skills: [
        { name: "AI/ML", level: 60 },
        { name: "Machine Learning", level: 55 },
        { name: "Data Science", level: 50 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My technical expertise spans across various domains of software
            development and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with
              the latest technologies. Currently diving deep into AI/ML concepts
              and working on projects that combine my web development skills
              with artificial intelligence to create innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
