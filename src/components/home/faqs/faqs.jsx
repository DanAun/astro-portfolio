import React, { useState } from "react";

const CategoryIcons = {

  "What do I specialize in?": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M12 2l4 4h4v4l-4 4 4 4v4h-4l-4 4-4-4H4v-4l4-4-4-4V6h4l4-4z" />
    </svg>
  ),

  "My professional experience": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M4 7h16v13H4V7zm2-4h12v2H6V3zm4 8h4v2h-4v-2z" />
    </svg>
  ),

  "Tools & technologies I use": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M14.7 6.3a1 1 0 010 1.4l-1.6 1.6 2 2 1.6-1.6a1 1 0 011.4 0l1.3 1.3a1 1 0 010 1.4l-1.6 1.6-2 2 1.6 1.6a1 1 0 010 1.4l-1.3 1.3a1 1 0 01-1.4 0l-1.6-1.6-2 2 1.6 1.6a1 1 0 010 1.4l-1.3 1.3a1 1 0 01-1.4 0L6.3 14.7a1 1 0 010-1.4l8.4-8.4a1 1 0 011.4 0z" />
    </svg>
  ),

  "OT & critical infrastructure security": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M12 1l9 4v6c0 5-3.8 9.7-9 11-5.2-1.3-9-6-9-11V5l9-4z" />
    </svg>
  ),

  "How I approach security work": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm1 12h-2v-2h2v2zm0-4h-2V8h2v4z" />
    </svg>
  ),

  "Learning & research mindset": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M12 3l10 5-10 5L2 8l10-5zm0 13l6-3v4l-6 3-6-3v-4l6 3z" />
    </svg>
  ),

  "Working with others": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary h-6 w-6 opacity-70"
    >
      <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

const skills = {

  "What do I specialize in?": [
    "My main focus areas are penetration testing, network and OT security, and practical security engineering. I enjoy working close to real systems — understanding how things actually work, where they break, and how attackers think — especially in high-impact environments like aviation and industrial systems."
  ],

  "My professional experience": [
    "I’ve worked in diverse environments ranging from aviation cybersecurity at EUROCONTROL (EATM-CERT), to OT network operations at Intility, and software development at AutoStore. This mix allows me to bridge development, operations, and security rather than treating them as isolated disciplines."
  ],

  "Tools & technologies I use": [
    "I regularly work with tools such as Nmap, Burp Suite, Wireshark, and various cloud and container security tools. I’m comfortable scripting in Python and Bash, and I have experience with Java and C. On the infrastructure side, I have a strong networking background and Cisco CCNA certification."
  ],

  "OT & critical infrastructure security": [
    "I’m part of a newly founded OT team where I contribute to building secure platforms for operational technology. My work involves monitoring, incident response, network operations, and applying security best practices to environments where availability and safety are critical."
  ],

  "How I approach security work": [
    "I approach security from both an attacker and defender perspective. I enjoy threat modeling, hands-on testing, and turning findings into practical mitigations. I value clear communication — especially when explaining risks and solutions to non-security stakeholders."
  ],

  "Learning & research mindset": [
    "I continuously learn through hands-on projects, CTFs, research, and real-world problem solving. My academic research includes work on malicious container images and supply-chain attacks in Kubernetes environments, and I actively keep up with emerging threats and techniques."
  ],

  "Working with others": [
    "I’m comfortable working in multidisciplinary and international teams. I’ve collaborated with engineers, operators, and security professionals across Europe, and I value clear documentation, structured workflows, and knowledge sharing as much as technical skill."
  ],
};


  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col items-center px-4 text-left">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-white text-center text-4xl font-bold drop-shadow-[2px_2px_0_#7836cf]">
          FAQs
        </h2>
        <ul className="mt-8 space-y-4 text-lg drop-shadow-[2px_2px_0_#7836cf]">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="bg-gray-900 hover:bg-opacity-80 w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all"
              >
                <div className="flex items-center gap-3 p-4">
                  {CategoryIcons[category]}
                  <div className="flex grow items-center justify-between gap-2">
                    <div className="max-w-[200px] min-w-0 overflow-hidden md:max-w-none">
                      <span className="block truncate text-lg text-white drop-shadow-[1px_1px_0_#7836cf] font-bold">
                        {category}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-6 w-6 shrink-0 transform text-[#6a2cbb] transition-transform ${
                        openItem === category ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={`px-4 transition-all duration-300 ${
                    openItem === category
                      ? "max-h-[500px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[0.8em] text-white text-semibold ">
                    {skills[category]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SkillsList;
