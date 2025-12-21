import React from "react";
import { BookCheck, Users, Shield, Brain, HeartHandshake } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: Users,
      title: "Whole-School Mentorship Day",
      topics: [
        "Discipline",
        "Emotional Resilience",
        "Safeguarding",
        "Future Vision",
      ],
    },
    {
      icon: BookCheck,
      title: "Half-Day Candidate & Leaders Workshop",
      topics: [
        "Exam Stress",
        "Leadership Skills",
        "Goal-Setting",
      ],
    },
    {
      icon: HeartHandshake,
      title: "Leadership Bootcamp",
      topics: [
        "Leadership as Service",
        "Conflict Resolution",
        "Integrity",
        "Peer Influence",
      ],
    },
    {
      icon: Brain,
      title: "Mental Health & Safeguarding Sessions",
      topics: [
        "Stress & Anxiety",
        "Substance Abuse",
        "Peer Relationships",
      ],
    },
  ];

  const mentorshipTopics = [
    "Discipline & Responsible Citizenship",
    "Emotional Intelligence & Stress Management",
    "Leadership & Constructive Student Voice",
    "Mental Health & Wellbeing",
    "Safeguarding & Positive Relationships",
    "Future Focus & Vision Building",
    "Comprehensive Sex Education (CSE)",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-purple-700 text-center mb-12">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-all border-t-4 border-yellow-400"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <Icon size={40} className="text-yellow-400" />
                  <h3 className="text-lg font-semibold text-purple-700">
                    {program.title}
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {program.topics.map((topic, i) => (
                      <li key={i}>• {topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-3xl font-bold text-purple-700 mb-6">
          Schools Mentorship Topics
        </h3>

        <ul className="bg-purple-50 p-6 rounded-lg shadow space-y-3 border-l-4 border-yellow-400 text-gray-700">
          {mentorshipTopics.map((topic, index) => (
            <li key={index} className="text-lg">✔ {topic}</li>
          ))}
        </ul>

        <div className="mt-16 text-center">
          <p className="text-purple-700 font-semibold">
            <span className="font-bold">Together</span> we raise disciplined, resilient, and future-ready leaders.
          </p>
        </div>
      </div>
    </section>
  );
}
