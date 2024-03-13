
interface Experience {
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
}

interface Education {
  institutionName: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface ResumeData {
  experience: Experience[];
  education: Education[];
}

const resumeData: ResumeData = {
  experience: [
    {
      companyName: "ARCOS LLC",
      role: "Software Engineer",
      startDate: "August 2022",
      endDate: "September 2023",
      responsibilities: " Worked extensively with the Java Spring Framework, PostgreSQL, and React.js. Helped scale and incorporate multi-tenancy into ARCOS LLC's core platform APIs. Took ownership of core internal features and drove the entire SDLC"
    }
    // Add more experiences as needed
  ],
  education: [
    {
      institutionName: "San Jose State University",
      degree: "B.S: Software Engineering",
      startDate: "August 2017",
      endDate: "May 2021",
    },
    {
      institutionName: "San Jose State University",
      degree: "Minor-Economics",
      startDate: "August 2017",
      endDate: "May 2021",
    }
    // Add more education as needed
  ]
};


export const Resume = () => {
  return(<div>
    <h2>Experience</h2>
    {resumeData.experience.map((exp, index) => (
      <div key={index}>
        <h3>{exp.companyName}</h3>
        <p>{exp.role}</p>
        <p>{exp.startDate} - {exp.endDate}</p>
        <p>{exp.responsibilities}</p>
      </div>
    ))}

    <h2>Education</h2>
    {resumeData.education.map((edu, index) => (
      <div key={index}>
        <h3>{edu.institutionName}</h3>
        <p>{edu.degree}</p>
        <p>{edu.startDate} - {edu.endDate}</p>
      </div>
    ))}

  
    {/* Add other sections as needed */}
  </div>)
};

export default Resume;