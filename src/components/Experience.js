import React from "react";
import ExperienceItem from "./ExperienceItem";

const payload = [
  {
    role: "Software Engineer (Intern)",
    organization: "Global Alliance for Genomics and Health",
    from: "Mar 2020",
    to: "Aug 2020",
    description:
      "Got selected as a Google Summer of Code applicant and worked on a tool to resolve aliases between various nomenclatures of genomic sequences.",
  },
  {
    role: "Java Developer (Intern)",
    organization: "Unthinkable Solutions",
    from: "Dec 2019",
    to: "Feb 2020",
    description:
      "Developed REST APIs using Java SpringBoot and Postgres as backend with accompanying Android app.",
  },
  {
    role: "Cybersecurity Intern",
    organization: "Income Tax Department",
    from: "July 2019",
    to: "Aug 2020",
    description:
      "Learnt about various cybersecurity protocols and techniques used to prevent cybercrime against CPC (TDS) services such as filing Income Tax Returns.",
  },
];

const Experience = () => {
  return (
    <div>
      <h3>Experience</h3>
      {payload.map((item, index) => (
        <ExperienceItem key={index} content={payload[index]} />
      ))}
    </div>
  );
};
export default Experience;
