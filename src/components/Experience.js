import React from "react";
import ExperienceItem from "./ExperienceItem";
import GA4GH_logo from "./../images/GA4GH_logo.png";
import Unthinkable_logo from "./../images/unthinkable_logo.png";
import ITD_logo from "./../images/ITD_logo.png";

const payload = [
  {
    role: "Software Engineer (Intern)",
    organization: "Global Alliance for Genomics and Health",
    logo:
      "https://media-exp1.licdn.com/dms/image/C510BAQHod1NplyUZew/company-logo_200_200/0?e=1602115200&v=beta&t=d0RExRHoqu3R4OXDX3_tr5FkZ9yQUjEjolMgG_bvrVU",
    from: "Mar 2020",
    to: "Aug 2020",
    description:
      "Got selected as a Google Summer of Code applicant and worked on a tool to resolve aliases between various nomenclatures of genomic sequences.",
    icon: GA4GH_logo,
  },
  {
    role: "Java Developer (Intern)",
    organization: "Unthinkable Solutions",
    logo:
      "https://media-exp1.licdn.com/dms/image/C560BAQE2wfymHMzGuQ/company-logo_100_100/0?e=1602115200&v=beta&t=1e5_-EHkdJi623TfYfTQ1rrWqLQg7ze-064h1stfAfc",
    from: "Dec 2019",
    to: "Feb 2020",
    description:
      "Developed REST APIs using Java SpringBoot and Postgres as backend with accompanying Android app.",
    icon: Unthinkable_logo,
  },
  {
    role: "Cybersecurity Intern",
    organization: "Income Tax Department",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Logo_of_Income_Tax_Department_India.png",
    from: "July 2019",
    to: "Aug 2020",
    description:
      "Learnt about various cybersecurity protocols and techniques used to prevent cybercrime against CPC (TDS) services such as filing Income Tax Returns.",
    icon: ITD_logo,
  },
];

const Experience = () => {
  return (
    <div className="container-fluid" id="experience-section">
      <h3>Experience</h3>
      <div className="row">
        {payload.map((item, index) => (
          <ExperienceItem key={index} content={payload[index]} />
        ))}
      </div>
    </div>
  );
};
export default Experience;
