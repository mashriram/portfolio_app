export function getConfig() {
    const config = {
        name: "Shriram Madurantakam",
        hashtags: ["Software Engineer", "Software Developer", "Full Stack"],
        email: "mashriram@gmail.com",
        phone: "9840238874",
        location: "Chennai,TamilNadu,India",
        personalImage: "personalImage",
        social: {
            linkedin: ["linkedInImg", "https://linkedin.com"],
            github: ["githubImg", "https://github.com"],
        },
        aboutMeImage: "image",
        aboutMeText:
            "Hello, I am Pradeep Natarajan, with 13+ years of industry experience specialized in data science and machine learning. I dive deep to analyze the data and derive information from it. Can handle end to end machine learning projects from data extraction , data pre-processing, model development , validation, MLOps & DevOps pipeline to productionize the ML models.",
        aboutMeTags: ["Full Stack", "Data Science"],
        downloadUrl: "/images/shriram_resume.pdf",
        technicalSkills: [
            { title: "OS", skills: [{ name: "linux", rating: 70 }] },
            {
                title: "Stack",
                skills: [
                    { name: "java", rating: 78 },
                    { name: "python", rating: 65 },
                    { name: "sql", rating: 50 },
                ],
            },
        ],
        certifications: { name: "link" },
        education: { name: "year" },
    };
    return config;
}
