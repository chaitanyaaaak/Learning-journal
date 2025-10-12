const blogData = [
    {
    id: 'hero',
    date: "OCT 10, 2025",
    title: "My Tech Journey: From Cybersecurity to Full Stack and Beyond",
    image: "./Images/hero.jpg",
    alt: "A modern desk with multiple screens showing code.",
    content: "After completing IBM Cybersecurity, Full Stack, Frontend, and AI learning paths, I’m now reflecting on the skills I’ve built and the projects I’ve created, including this very Learning Journal.",
    longContent: `
        <p>Over the past months, I’ve explored multiple facets of tech. Starting with Cybersecurity gave me a strong foundation in thinking like a defender. Diving into Frontend and Full Stack paths taught me how to build interactive, scalable applications. AI opened my mind to the future possibilities of machine learning and intelligent systems.</p>
        <p>This Learning Journal is both a project and a reflection — a place to document experiments, solo projects like Unit Converter, Basketball Scoreboard, Password Generator, and everything I’ve learned along the way. It captures my growth, challenges, and excitement for what’s next.</p>
    `
    },
    {
        id: 1,
        date: "OCT 5, 2025",
        title: "Becoming IBM Certified in Cybersecurity",
        image: "./Images/id_1.jpg",
        alt: "A dark tech background showing a shield made of glowing binary code.",
        content: "Earning my IBM Cybersecurity Analyst Certificate was my first major milestone in tech. It gave me a solid foundation in protecting systems, detecting threats, and understanding how real-world security works.",
        longContent: `
            <p>Cybersecurity opened my eyes to how every digital interaction depends on trust and vigilance. From learning about firewalls and encryption to hands-on labs with incident response, I developed a deep respect for security engineering.</p>
            <p>This certification also taught me the mindset of a defender — to always question assumptions and think a few steps ahead. It still shapes how I approach coding and architecture today.</p>
        `
    },
    {
        id: 2,
        date: "OCT 1, 2025",
        title: "Mastering the Frontend Developer Path",
        image: "./Images/id_2.jpg",
        alt: "A creative workspace with HTML, CSS, and JavaScript symbols floating around a laptop screen.",
        content: "The Frontend Developer Path was where everything started to click. I learned how to bring designs to life using HTML, CSS, and JavaScript — and how to make them responsive and accessible.",
        longContent: `
            <p>Building from scratch gave me a real sense of ownership. I learned to break down layouts, debug tricky flexbox issues, and make every element accessible to all users. My solo projects like the 'Hometown Homepage' and 'Basketball Scoreboard' taught me how design meets logic in the browser.</p>
            <p>Looking back, those small wins built the foundation I now rely on for every bigger project.</p>
        `
    },
    {
        id: 3,
        date: "SEP 25, 2025",
        title: "Building Full Stack Confidence",
        image: "./Images/id_3.png",
        alt: "A dual-screen setup showing both frontend and backend code, symbolizing full stack development.",
        content: "Jumping into the Full Stack Developer Path helped me understand how everything connects — from frontend interfaces to backend APIs and databases.",
        longContent: `
            <p>This was a big leap. Learning Node.js, Express.js, and MySQL gave me the power to build apps that don’t just look good but *do* things. Understanding how the server, routes, and database talk to each other was like unlocking the full picture of the web.</p>
            <p>By the end, I could deploy a complete application on my own. That confidence is something I’ll carry into every future project.</p>
        `
    },
    {
        id: 4,
        date: "SEP 15, 2025",
        title: "Exploring Next.js and Tailwind CSS",
        image: "./Images/id_4.png",
        alt: "A clean modern web dashboard glowing on a laptop screen, styled with Tailwind CSS and Next.js icons.",
        content: "Next.js felt like the future of frontend. Paired with Tailwind CSS, I learned how to build fast, scalable, and elegant interfaces without overcomplicating things.",
        longContent: `
            <p>Next.js taught me how to think about performance, routing, and SEO while Tailwind CSS made styling effortless and consistent. Combining both gave me the confidence to prototype ideas quickly and make them production-ready.</p>
            <p>I used these tools in projects like my Learning Journal and Password Generator, turning designs into clean, interactive experiences.</p>
        `
    },
    {
        id: 5,
        date: "SEP 10, 2025",
        title: "Leveling Up with TypeScript",
        image: "./Images/id_5.png",
        alt: "A minimalistic coding setup with snippets of TypeScript code glowing in blue tones.",
        content: "TypeScript challenged me to code smarter. Understanding types made my projects cleaner, more reliable, and easier to maintain.",
        longContent: `
            <p>At first, I resisted TypeScript — it felt strict and complex. But soon I realized how much time it saves in debugging and refactoring. Learning it taught me the discipline of designing data structures clearly from the start.</p>
            <p>It’s like having a helpful reviewer always watching your back. Now, I rarely start a serious project without it.</p>
        `
    },
    {
        id: 6,
        date: "SEP 5, 2025",
        title: "Creating My Solo Projects",
        image: "./Images/id_6.png",
        alt: "A flat lay of different devices showing small web projects: a calculator, a scoreboard, and a password generator.",
        content: "From a Unit Converter to this Learning Journal itself, my solo projects have been my favorite part of the journey — small experiments that taught me real lessons.",
        longContent: `
            <p>Each project forced me to combine everything I’d learned. The Unit Converter refined my logic, the Basketball Scoreboard tested event handling, and the Password Generator helped me focus on user experience. And this Learning Journal? It’s where I document it all.</p>
            <p>Solo projects are where you stop following tutorials and start creating your own voice as a developer. That’s the real learning curve.</p>
        `
    },
    {
    id: 7,
    date: "AUG 30, 2025",
    title: "Deepening Accessibility and Responsive Design",
    image: "./Images/id_7.png",
    alt: "A web page displayed on multiple devices (phone, tablet, desktop) showing accessible design features.",
    content: "Learning accessibility and responsive design transformed the way I build websites. It's no longer just about making things work; it's about making them work for everyone.",
    longContent: `
        <p>Focusing on accessibility taught me to think about users with different needs — screen readers, color contrast, keyboard navigation. Responsive design forced me to consider how my layouts adapt to any screen size.</p>
        <p>Projects like the Hometown Homepage became not just functional but truly usable by anyone, anywhere. These skills have become non-negotiable for every project I tackle now.</p>
    `
    },
    {
        id: 8,
        date: "AUG 15, 2025",
        title: "Integrating Backend APIs with Node.js & Express",
        image: "./Images/id_8.png",
        alt: "A terminal with server logs and code, representing Node.js and Express API integration.",
        content: "Backend integration added a new layer of depth. Connecting databases, handling routes, and creating APIs made my apps truly dynamic.",
        longContent: `
            <p>Node.js and Express allowed me to turn static pages into full-featured applications. I experimented with CRUD operations, user authentication, and data persistence in MySQL.</p>
            <p>This stage was tough but rewarding — finally seeing frontend interactions trigger backend logic gave me a huge confidence boost.</p>
        `
    },
    {
        id: 9,
        date: "AUG 10, 2025",
        title: "Reflecting on My Learning Journey",
        image: "./Images/id_9.png",
        alt: "A journal open on a desk with sketches, notes, and a laptop showing code, symbolizing reflection and growth.",
        content: "Looking back, the journey from Cybersecurity to Full Stack, Frontend, and AI has been intense but rewarding. Every step has shaped how I approach problem-solving and creativity.",
        longContent: `
            <p>From solo projects to structured paths, I’ve learned not just technologies, but how to learn itself. React, Next.js, Tailwind, TypeScript, Node.js — each skill built on the last, forming a cohesive toolkit.</p>
            <p>This journal itself is a testament to the progress and persistence it took. It reminds me that learning is continuous and reflection is key to mastery.</p>
        `
    }



];

export default blogData;