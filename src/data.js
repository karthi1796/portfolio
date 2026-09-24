export const profile = {
  name: "Selvarajan Karthigan",
  title: "Quality Assurance Engineer",
  tagline:
    "Delivering robust manual & automated testing across Web, Android, and iOS — with 4+ years turning complex user flows into reliable, high-quality releases.",
  email: "karthigan1796@gmail.com",
  phone: "+94 77 749 0151",
  phoneHref: "+94777490151",
  github: "https://github.com/Karthigan17",
  githubHandle: "Karthigan17",
  linkedin: "https://www.linkedin.com/in/Selvarajan-Karthigan",
  linkedinHandle: "Selvarajan-Karthigan",
  cv: "/Selvarajan_Karthigan_CV.pdf",
  headshot: "/headshot.jpg",
};

export const about = {
  summary:
    "Detail-oriented Quality Assurance Engineer with over 4 years of experience delivering robust manual and automated testing strategies across Web, Android, and iOS environments. Proven expertise in testing end-to-end user features (loyalty rewards, NFC/QR flows, bookings, and API layers) using modern tools like Cypress, Selenium, Postman, and Appium. Adept at database validation, user behavior event tracking, and leveraging AI-driven productivity systems to maximize software release quality.",
  stats: [
    { value: "4+", label: "Years in QA" },
    { value: "3", label: "Platforms — Web / Android / iOS" },
    { value: "E2E", label: "Manual & Automated Testing" },
  ],
};

export const skills = [
  {
    title: "Automation Testing",
    items: ["Cypress (Web)", "Selenium", "Appium (Mobile)", "Postman (API)", "JMeter", "JUnit"],
  },
  {
    title: "Mobile & Cross-Platform",
    items: ["Android Studio", "ADB", "Xcode", "TestFlight", "BrowserStack"],
  },
  {
    title: "Test Management & Diagnostics",
    items: ["TestRail", "Azure DevOps", "Jira", "Chrome DevTools", "PostHog (Event Tracking)"],
  },
  {
    title: "Databases & Environments",
    items: ["SQL", "Supabase", "Git", "GitHub", "Unix Shell", "VS Code", "IntelliJ IDEA"],
  },
  {
    title: "AI Automation (Second Brain)",
    items: ["Craft Agent", "Pencil", "Claude", "Minimax", "Notion", "AI Scrap Testing"],
  },
  {
    title: "Programming Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C", "C++", "HTML", "CSS", "PHP"],
  },
];

export const experience = [
  {
    company: "Unicom SD (Pvt) Ltd",
    location: "Jaffna, Sri Lanka",
    roles: [
      { title: "Software Quality Assurance Engineer", period: "March 2024 – Present" },
      { title: "Associate Software Quality Assurance Engineer", period: "June 2022 – March 2024" },
    ],
    points: [
      "Projects: Poddle & Bubltown — conducted full-cycle manual and automated validation for customer and business applications across Web, Android, and iOS channels.",
      "Tested specialized transactional vectors including loyalty rewards, NFC/QR flows, referrals, reviews, offers, bookings, and delivery features.",
      "Engineered reliable web automation scripts with Cypress and functional tests with Selenium.",
      "Maintained clear test cases and reported execution runs; tracked bugs inside Azure DevOps.",
      "Performed programmatic API tests via Postman and database validation via SQL / Supabase.",
      "Isolated platform exceptions across simulated layouts using Android Studio (ADB), Xcode (TestFlight), and BrowserStack.",
      "Utilized Chrome DevTools to analyze real-time network interactions, inspect UI elements, and trace runtime bugs.",
    ],
  },
  {
    company: "Samuvel Gnanam IT Centre",
    location: "Jaffna, Sri Lanka",
    roles: [{ title: "Intern Software Quality Assurance Engineer", period: "February 2022 – May 2022" }],
    points: [
      "Project — Defect Tracker System: formulated structured user story parameters and tracked defect life cycles inside Jira.",
    ],
  },
];

export const projects = [
  {
    name: "Fivelio.com",
    tag: "E2E Web & Admin Testing",
    description:
      "Led end-to-end testing for the Fivelio websites and admin panels using both automation and manual testing — validating full user journeys, admin workflows, and data integrity across releases.",
    tech: ["Cypress", "Selenium", "Postman", "Manual QA"],
  },
  {
    name: "Poddle",
    tag: "Loyalty & Rewards Platform",
    description:
      "Full-cycle QA for a customer loyalty platform spanning Web, Android, and iOS — testing loyalty rewards, NFC/QR flows, referrals, bookings, and delivery features.",
    tech: ["Cypress", "Appium", "SQL / Supabase", "BrowserStack"],
  },
  {
    name: "Bubltown",
    tag: "Business App — Multi-Platform",
    description:
      "Validated business-facing software across channels, covering transactional flows, offers, reviews, and cross-platform layout consistency using ADB, Xcode/TestFlight, and BrowserStack.",
    tech: ["Selenium", "Postman", "Android Studio", "Xcode"],
  },
];

export const education = [
  {
    school: "University of Moratuwa",
    degree: "M.Sc. in Artificial Intelligence (Reading)",
    period: "July 2025 – Present",
  },
  {
    school: "Uva Wellassa University of Sri Lanka",
    degree: "B.Sc. (Hons) in Computer Science and Technology",
    period: "January 2018 – December 2022",
  },
  {
    school: "Jaffna Hindu College",
    degree: "GCE Advanced Level (Mathematics, Physics, Chemistry)",
    period: "2007 – 2015",
  },
];

export const research = {
  title: "Diet Recommendation with Machine Learning",
  tech: "Python, MySQL, CNN",
  description:
    "Engineered an ML system to monitor dietary profiles, dynamic target metrics, and custom menu calculations optimized for diabetic health requirements.",
};

// Replace with your Formspree form ID (https://formspree.io) to enable the live form.
export const FORMSPREE_ID = "";
