import { graphql } from 'gatsby';
import React, { useState, useEffect, useMemo } from 'react';

import BlogPosts from '../components/blog-posts';
import CategoryNav from '../components/category-nav';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../pages/404';

const Index = ({ data }) => {
  // Parse hash on initial load, default to 'personal'
  const getInitialCategory = () => {
    if (typeof window === 'undefined') return 'personal';
    const hash = window.location.hash.slice(1); // Remove '#'
    const validCategories = ['personal', 'tech', 'readings'];
    return validCategories.includes(hash) ? hash : 'personal';
  };

  const [activeCategory, setActiveCategory] = useState(getInitialCategory);

  // Handle browser back/forward button
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const validCategories = ['personal', 'tech', 'readings'];
      if (validCategories.includes(hash)) {
        setActiveCategory(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    window.history.pushState(null, '', `#${category}`);
  };

  // Filter posts by active category (client-side)
  const filteredPosts = useMemo(() => {
    return data.allMarkdownRemark.edges.filter(
      (edge) => edge.node.fields.category === activeCategory
    );
  }, [data.allMarkdownRemark.edges, activeCategory]);

  const noBlog = !data.allMarkdownRemark.edges || !data.allMarkdownRemark.edges.length;

  if (noBlog) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="Blog" />
      <Header metadata={data.site.siteMetadata} />
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      {filteredPosts.length > 0 ? (
        <BlogPosts posts={filteredPosts} />
      ) : (
        <div className="text-gray-600 text-center py-12">
          No posts in this category yet.
        </div>
      )}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        email
        github
        linkedin
        research
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            category
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
