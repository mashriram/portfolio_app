import {
    faGitSquare,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function getConfig() {
    const config = {
        name: "Shriram Madurantakam",
        hashtags: ["Full Stack Developer", "Data Analyst", "Cloud Developer"],
        email: "mashriram@gmail.com",
        phone: "9840238874",
        location: "Chennai, TamilNadu, India",
        personalImage: "personalImage",
        social: {
            linkedin: ["linkedInImg", "https://linkedin.com", faLinkedin],
            github: ["githubImg", "https://github.com", faGithub],
        },
        aboutMeImage: "image",
        aboutMeText:
            "Aspiring AI/ML Engineer with strong problem solving skills, coding skills and a lot of curiosity. Completed Coursera's Python for Everybody course. I have 175 days streak in Leet Code, demonstrating problem-solving and coding skills. Completed Azure AI Applied Skills. Currently a 2nd year Computer Science student focusing on AI/ML, seeking opportunities to contribute and grow in the field of AI / ML.",
        aboutMeTags: ["Front end", "Back end", "Data Science"],
        downloadUrl: "/images/shriram_resume.pdf",
        technicalSkills: [
            { title: "OS", skills: [{ name: "linux", rating: 70 }] },
            {
                title: "Cloud",
                skills: [
                    { name: "AWS", rating: 40 },
                    { name: "Azure", rating: 40 },
                ],
            },
            {
                title: "Programming Languages",
                skills: [
                    { name: "java", rating: 70 },
                    { name: "python", rating: 65 },
                    { name: "javascript", rating: 65 },
                    { name: "go", rating: 30 },
                    { name: "c/c++", rating: 35 },
                    { name: "html/css", rating: 80 },
                ],
            },
            {
                title: "Frameworks",
                skills: [
                    { name: "React", rating: 50 },
                    { name: "Spring Boot", rating: 40 },
                ],
            },
            {
                title: "Databases",
                skills: [
                    { name: "mySQL", rating: 70 },
                    { name: "postgreSQL", rating: 65 },
                ],
            },
        ],
        certifications: [
            {
                name: "LeetCode 50 days ",
                resource: "/images/lg50.png",
                link: "https://leetcode.com/mashriram",
            },
            {
                name: "Leetcode 100 days",
                resource: "/images/lg100.png",
                link: "https://leetcode.com/mashriram",
            },
            {
                name: "December 2023 Badge",
                resource: "/images/dcc-2023-12.png",
                link: "https://leetcode.com/mashriram",
            },
            {
                name: "January 2024 Badge",
                resource: "/images/dcc-2024-1.png",
                link: "https://leetcode.com/mashriram",
            },
            {
                name: "Azure AI - Doc Intelligence",
                resource: "/images/microsoftAIDI.png",
                link: "https://learn.microsoft.com/api/credentials/share/en-in/mashriram/9D2D23B0F11DF276?sharingId=89043A7A9828958F",
            },
            {
                name: "Azure AI - NLP",
                resource: "/images/microsoftAIL.png",
                link: "https://learn.microsoft.com/api/credentials/share/en-in/mashriram/D657DE9B346C00C2?sharingId=89043A7A9828958F",
            },
            {
                name: "Java Object Oriented Programming",
                resource: "/images/PennJavaOODP.png",
                link: "https://www.coursera.org/account/accomplishments/verify/35HF5SRHHXLH",
            },

            {
                name: "Python For Everybody Python",
                resource: "/images/PEPostgres.png",
                link: "https://www.coursera.org/account/accomplishments/verify/T5SMGULAMAS9",
            },
            {
                name: "Python For Everybody Postgres Intermediate",
                resource: "/images/PEPostgres.png",
                link: "https://www.coursera.org/account/accomplishments/verify/3H64C5WEK8F8",
            },
            {
                name: "Python For Everybody Python Web Data",
                resource: "/images/PEPostgres.png",
                link: "https://www.coursera.org/account/accomplishments/verify/5S7LHQQLA2DB",
            },
            {
                name: "Python For Everybody Basic DB",
                resource: "/images/PEPostgres.png",
                link: "https://www.coursera.org/account/accomplishments/verify/TVA3H65EHDYP",
            },
            {
                name: "Python For Everybody Python DSA",
                resource: "/images/PEPostgres.png",
                link: "https://www.coursera.org/account/accomplishments/verify/76NHXPMHRW23",
            },
        ],
        education: { name: "year" },
    };
    return config;
}
