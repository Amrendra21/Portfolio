import React from "react";
import { User, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate technology enthusiast with a strong foundation in
            computer science and artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-blue-600" size={24} />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Personal Info
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="text-gray-500" size={16} />
                  <span className="text-gray-700">Ghaziabad, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-gray-500" size={16} />
                  <span className="text-gray-700">
                    2nd Year Student (3rd Semester)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-gray-500" size={16} />
                  <span className="text-gray-700">
                    BTech CSE-AI (2024-2028)
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Current Focus
              </h4>
              <p className="text-gray-700">
                Actively learning AI/ML technologies while building projects
                with modern web development frameworks. Passionate about
                creating innovative solutions that bridge technology and
                real-world problems.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Academic Excellence
              </h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-900">
                      Class X (CBSE)
                    </h4>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      95%
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Mount Litera Zee School, Unna
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-900">
                      Class XII (PCM)
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      92%
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Mount Litera Zee School, Unna
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-900">
                      BTech CSE-AI
                    </h4>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Ongoing
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    KIET Group of Institutions, Ghaziabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
