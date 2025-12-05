import { Link } from 'gatsby';
import get from 'lodash/get';
import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useLocation } from '@reach/router';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link: 'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black',
  modal: 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50',
  modalImage: 'max-w-md max-h-screen rounded-full',
};

const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, 'author', false);
  const email = get(metadata, 'email', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  const research = get(metadata, 'research', false);

  // meta
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper} onClick={() => location.pathname === '/' ? setIsModalOpen(true) : undefined}>
        <Link to="/">
          <StaticImage
            className={classes.image}
            src="../../images/andreas.jpg"
            alt={metadata.name}
            placeholder="dominantColor"
            layout="fullWidth"
          />
        </Link>
      </div>

      {isModalOpen && (
        <div className={classes.modal} onClick={() => setIsModalOpen(false)}>
          <StaticImage
            className={classes.modalImage}
            src="../../images/andreas.jpg"
            alt={metadata.name}
            placeholder="dominantColor"
          />
        </div>
      )}

      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <br></br>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                Twitter
              </a>
            </li>
          )}
          {email && (
            <li className={classes.item}>
              <a className={classes.link} href={`mailto:${email}`}>Email</a>
            </li>
          )}
           {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {research && (
            <li className={classes.item}>
              <a className={classes.link} href={research}>
                Research
              </a>
            </li>
          )}
          {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
