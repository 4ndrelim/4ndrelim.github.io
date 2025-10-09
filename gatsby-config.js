module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://4ndrelim.github.io/`,
    // Your Name
    name: 'Andre Lin',
    // Main Site Title
    title: `Andre Lin | My Simple Site`,
    // Description that goes under your name in main bio
    description: `Aspiring software engineer and machine learning hobbyist, turning paper to pipeline.`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Email address
    email: `andre_lin@u.nus.edu`,
    // Optional: Github account URL
    github: `https://github.com/4ndrelim`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/andre-linhk/`,
    // Content of the About Me section
    about: `Hey! My name is Andre. I'm a final year studying Mathematics & Computer Science at the National University of Singapore (NUS).
      Machine learning is an exciting field at the intersection of mathematical theory (brutal math courses finally paying off.. *_*) and software engineering. There's no shortage of groundbreaking research in the ML landscape, and I aspire to be among those who bring these innovations into real-world applications.
      I am now particularly interested in the intricacies of parallelism in optimizing training code. My goal is to become capable of bridging the gap between software development and ML deployment.
      Beyond academia, I am a casual climber (an occasional diver, and avid backpacker) and am part of the school's Mountaineering club and Climbing club. Together with a couple of 𝘸𝘰𝘯𝘥𝘦𝘳𝘧𝘶𝘭, 𝘧𝘶𝘯-𝘭𝘰𝘷𝘪𝘯𝘨 𝘤𝘶𝘤𝘬𝘰𝘰𝘴, we scaled the Himalayas and it was simply fantastic!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Machine Learning Research @ NUS',
        description:
          'Part of Prof He Bing Sheng\'s research group, focusing on adaptations of the transformer architecture.',
        link: 'https://dblp.org/pid/393/8428.html',
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
        name: 'Software Engineer Intern @ QuantEdge (Singapore), May 2025 - June 2025',
        description: 'Software Engineering meets Quantitative Trading - Learnt how to support the trading team.',
        link: 'https://www.quantedge.com.sg/',
      },
      {
        name: 'Backend Engineer Intern @ Apple (Singapore), January 2025 - May 2025',
        description: 'Gained practical knowledge on system design and was taught what simplicity, reliability, and sustainability looks like.',
        link: 'https://www.apple.com/',
      },
      {
        name: 'Machine Learning Engineer Intern @ Pints.ai (Singapore), August 2024 - December 2024',
        description: 'Worked on finetuning LLMs using data and model parallelism techniques to achieve comparable performance to larger models.',
        link: 'https://www.pints.ai/',
      },
      {
        name: 'Machine Learning Engineer Intern @ ASTRI (Hong Kong, SAR), June 2024 - August 2024',
        description: 'Learnt ML production and deployment lifecycle, and worked on Quant Research projects affiliated with QRT.',
        link: 'https://www.astri.org/',
      },
      {
        name: 'School of Computing (NUS), August 2022 - August 2024',
        description: 'Teaching Assistant for CS1010s (Programming Methodology in Python) and CS2040s (Data Structures and Algorithms) - Won an award!',
        link: 'https://www.comp.nus.edu.sg/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages (Ordered by proficiency)',
        description:
          'Python, Java, C++, TypeScript',
      },
      {
        name: 'Libraries',
        description: 'TensorFlow, PyTorch, Scikit-learn, OpenCV, pandas, NumPy',
      },
      {
        name: 'Notable LLM Frameworks',
        description: 'vLLM, llama.cpp, DeepSpeed, Lightning AI, LitGPT, LangChain',
      },
      {
        name: 'Data Processing/Databases',
        description: 'PostgreSQL, Spark, Flink',
      },
      {
        name: 'Backend',
        description:
          'Docker, Django, FastAPI, Spring Boot, Express, Nodejs',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
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
