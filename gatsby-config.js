module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://4ndrelim.github.io/`,
    // Your Name
    name: 'Andre Lin',
    // Main Site Title
    title: `Andre Lin | Computer Science & Mathematics Undergraduate`,
    // Description that goes under your name in main bio
    description: `Computer Science & Mathematics undergraduate. If you're seeking to bridge the gap between software development and ML deployment, I could be the person you're looking for.`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Email address
    email: `andre_lin@u.nus.edu`,
    // Optional: Github account URL
    github: `https://github.com/4ndrelim`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/andre-linhk/`,
    // Content of the About Me section
    about: `Hey! My name is Andre. I'm a third year undergraduate studying at the National University of Singapore.
      I like reading about research on AI and advancements in ML, and spend a fair portion of my time doing so. Explainable AI in particular has caught my attention in recent months. ML is also a field where I can put what i've learnt in brutal math courses (at least some of it.. *_*) to use. I believe there's plenty of research done in the ML landscape, yet few are being adopted and deployed to use. Perhaps it is due to a general lack of expertise, or inherent doubts. Regardless, it is unfortunate.
      Deep learning, Natural Language Processing, AI decision making - are some sub-fields that excite me. But i've some exposure in the basics of other fields - Databases, Networks, Operating Systems, Parallel & Distributed systems to name a few. I hope to hone my knowledge in my remaining semesters and become a proficient ML engineer able to bridge the gap between software development and ML deployment.
      Beyond academia, I am an avid climber and belong to the school's Mountaineering club. Together with a couple of wonderful, fun-loving, and free-spirited friends, we scaled a mountain in the Himalayas and it was, well, simply fantastic.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'ExplainableAI Research',
        description:
          `Here, I design synthetic datasets and network architectures to evaluate existing feature attribution methods (methods that offer model interpretability). Currently, working towards publication to AAAI Conference.`,
          link: '',
      },
      {
        name: 'ML Research on Identification of DNA-Binding Proteins',
        description:
          'Here, I work alongside 3 others and we have made some notable discoveries contributing to unexpected inflationary performance. We hope to share our findings in our publication to a renown bioinformatics journal.',
          link: '',
      },
      {
        name: 'Data Structures & Algorithms Teaching Resource',
        description:
          'My stint as a CS2040S (a course offered in NUS on DSA) has convinced several capable and passionate ex-students of mine to join me in developing an open-source teaching material for future cohorts. Lovely!',
        link: 'https://github.com/4ndrelim/data-structures-and-algorithms/tree/main/src/dataStructures/heap',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'AI Lab @ National University of Singapore',
        description: 'AI/ML Researcher, June 2023 - Present',
        link: 'https://ai.nus.edu.sg/',
      },
      {
        name: 'School of Computing @ National University of Singapore',
        description: 'ML Researcher, June 2023 - Present',
        link: 'https://www.comp.nus.edu.sg/',
      },
      {
        name: 'VFlowTech',
        description: 'Software Engineer, December 2022 - March 2023',
        link: 'https://vflowtech.com/',
      },
      {
        name: 'School of Computing @ National University of Singapore',
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
        description: 'Docker, Gradle, Nodejs',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL',
      },
      {
        name: 'Notable Libraries',
        description:
          'TensorFlow, Keras, Scikit-Learn, PyTorch, pandas, NumPy, React, React Redux',
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
