/** 
 * @typedef {Object} Job
 * @property {number} id
 * @property {string} title
 * @property {string} company
 * @property {string} location
 * @property {string} type
 * @property {string} salary
 * @property {string} posted
 * @property {string} description
 * @property {string[]} requirements
 * @property {string} logoUrl
 */

/** @type {Job[]} */
export const sampleJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      posted: "2025-03-01",
      description: "We're looking for a skilled Frontend Developer to join our team. You'll be responsible for building user interfaces and implementing features using modern web technologies.",
      requirements: [
        "3+ years of experience with JavaScript, HTML, and CSS",
        "Experience with modern frontend frameworks (React, Vue, or Angular)",
        "Strong understanding of responsive design principles",
        "Bachelor's degree in Computer Science or related field preferred"
      ],
      logoUrl: "/images/techcorp-logo.png"
    },
    {
      id: 2,
      title: "UX Designer",
      company: "DesignHub",
      location: "Remote",
      type: "Full-time",
      salary: "$85,000 - $105,000",
      posted: "2025-03-03",
      description: "DesignHub is seeking a talented UX Designer to create intuitive and engaging user experiences for our digital products. You'll work closely with product managers and developers to bring designs to life.",
      requirements: [
        "4+ years of UX/UI design experience",
        "Proficiency with design tools such as Figma or Sketch",
        "Experience conducting user research and usability testing",
        "Strong portfolio demonstrating your design process"
      ],
      logoUrl: "/images/designhub-logo.png"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataInsights",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      posted: "2025-03-05",
      description: "Join our growing data science team to develop and implement advanced machine learning models. You'll analyze complex data sets and help drive business decisions through data-driven insights.",
      requirements: [
        "Master's degree or PhD in Computer Science, Statistics, or related field",
        "Experience with Python, R, and SQL",
        "Knowledge of machine learning frameworks like TensorFlow or PyTorch",
        "Strong analytical and problem-solving abilities"
      ],
      logoUrl: "/images/datainsights-logo.png"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudSystems",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$95,000 - $125,000",
      posted: "2025-03-06",
      description: "CloudSystems is looking for a DevOps Engineer to build and maintain our cloud infrastructure. You'll work on automating deployment pipelines and ensuring system reliability.",
      requirements: [
        "3+ years of experience in a DevOps role",
        "Familiarity with AWS, Azure, or GCP",
        "Experience with containerization technologies (Docker, Kubernetes)",
        "Knowledge of infrastructure as code tools like Terraform or CloudFormation"
      ],
      logoUrl: "/images/cloudsystems-logo.png"
    },
    {
      id: 5,
      title: "Marketing Manager",
      company: "GrowthMarketing",
      location: "New York, NY",
      type: "Full-time",
      salary: "$80,000 - $100,000",
      posted: "2025-03-07",
      description: "We're seeking a Marketing Manager to develop and execute marketing strategies that drive growth. You'll oversee digital marketing campaigns and collaborate with cross-functional teams.",
      requirements: [
        "5+ years of marketing experience",
        "Experience with digital marketing channels (social media, email, SEO)",
        "Strong analytical skills and data-driven approach",
        "Excellent communication and project management abilities"
      ],
      logoUrl: "/images/growthmarketing-logo.png"
    },
    {
      id: 6,
      title: "Backend Developer",
      company: "ServerTech",
      location: "Austin, TX",
      type: "Contract",
      salary: "$70 - $90 per hour",
      posted: "2025-03-08",
      description: "ServerTech is hiring a Backend Developer to build robust APIs and services. You'll design and implement scalable solutions using modern technologies.",
      requirements: [
        "4+ years of experience in backend development",
        "Proficiency in Node.js, Python, or Java",
        "Experience with SQL and NoSQL databases",
        "Knowledge of RESTful API design principles"
      ],
      logoUrl: "/images/servertech-logo.png"
    }
  ];