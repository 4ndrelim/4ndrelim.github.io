module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://4ndrelim.github.io/`,
    // Your Name
    name: 'Andre Lin',
    // Main Site Title
    title: `Andre Lin | Computer Science & Mathematics Undergraduate`,
    // Description that goes under your name in main bio
    description: `If you're seeking to bridge the gap between software development and ML deployment, I could be the person you are looking for.`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/4ndrelim`,
    // Optional: LinkedIn account URL
    linkedin: `www.linkedin.com/in/andre-linhk`,
    // Content of the About Me section
    about: `Hey! My name is Andre. I'm a third year undergraduate studying Computer Science with a 2nd Major in Mathematics at the National University of Singapore.
      I like reading about research on AI and advancements in ML, Explainable AI in particular has caught my attention, and spend a fair portion of my time doing so. ML is also a field where I can put what i've learnt in brutal math courses (well, at least some of it..) to use. I believe there's plenty of research done in the ML landscape, yet very few are being adopted and deployed to use. Perhaps it is due to a general lack of expertise, or inherent doubts. Still, it is unfortunate. I strive to become a proficient ML engineer and bridge the gap between software development and ML deployment.
      Deep learning networks, Natural Language Processing, AI decision making - are some sub-fields that excite me. Naturally, there remains many aspects of Computer Science to explore and familiarity with them would complement my work in ML. School has exposed me to the basics of Databases, Networks, Operating Systems, Parallel & Distributed systems and I hope to further hone my knowledge in my remaining semesters.
      Outside of academia, I am an avid climber and belong to the school's Mountaineering club. Together with a couple of wonderful, fun-loving, and free-spritied friends, we scaled a mountain in the Himalayas and it was well, simply fantastic.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'ExplainableAI Research',
        description:
          'Here, I design synthetic datasets and network architectures to evaluate existing attribution methods (e.g. methods in Captum that offer model interpretability) which aimed at identifying key features used by convolution layers. Currently, working towards publication for AAAI Conference.',
      },
      {
        name: 'ML Research on Identification of DNA-Binding Proteins',
        description:
          'Here, I work alongside 3 others to evaluate ML techniques proposed in published papers to identify DNA-Binding proteins. We have made some notable discoveries regarding inflated performance and hope to share our findings in our publication to one of the more renown bioinformatics journal.',
      },
      {
        name: 'Data Structures & Algorithms Teaching Resource',
        description:
          'My stint as a CS2040S (a course offered by NUS on data structures & algorithms) has convinced several capable and passionate ex-students of mine to join me in developing an open-source teaching material for future cohorts.',
        link: 'https://github.com/4ndrelim/data-structures-and-algorithms/tree/main/src/dataStructures/heap',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'National University of Singapore, AI Lab',
        description: 'AI Researcher, June 2023 - Present',
        link: 'https://ai.nus.edu.sg/',
      },
      {
        name: 'National University of Singapore, School of Computing',
        description: 'Machine Learning Researcher, June 2023 - Present',
        link: 'https://www.comp.nus.edu.sg/',
      },
      {
        name: 'VFlowTech',
        description: 'Software Engineer, December 2022 - March 2023',
        link: 'https://vflowtech.com/',
      },
      {
        name: 'National University of Singapore, School of Computing',
        description: 'Teaching Assistant, August 2022 - August 2023',
        link: 'https://www.comp.nus.edu.sg/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, Java, C, C++, JavaScript, HTML/CSS/SASS, Dart',
      },
      {
        name: 'Frameworks',
        description: 'Spring Boot, Express, Flutter, Bootstrap, JUnit, PyTest',
      },
      {
        name: 'Dev/Environment',
        description: 'Docker, Nodejs',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL',
      },
      {
        name: 'Notable Libraries',
        description:
          'TensorFlow, Keras, Scikit-Learn, PyTorch, pandas, NumPy, React',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
