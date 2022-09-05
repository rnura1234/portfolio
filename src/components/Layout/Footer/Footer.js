import React from 'react';
import facebook from '../../../assets/images/facebook_white.png';
import instagram from '../../../assets/images/instagram_white.png';
import github from '../../../assets/images/github_white.png';
import twitter from '../../../assets/images/twitter_white.png';
import mail from '../../../assets/images/mail_white.png';
import linkdin from '../../../assets/images/linkdin_white.png';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
function Footer() {
  const imageIcon = [
    {
      src: github,
      url: 'https://github.com/rnura1234',
      title: 'Github',
    },
    {
      src: linkdin,
      url: 'https://www.linkedin.com/in/sanjeev-kumar-sahani-39078713b/',
      title: 'Linkdin',
    },
    {
      src: mail,
      url: 'mailto:ssahani@entiovi.com?Subject=Say Hello',
      title: 'Email',
    },
    {
      src: twitter,
      url: 'https://twitter.com/Sanjeev72678981',
      title: 'Twitter',
    },
    {
      src: instagram,
      url: 'https://www.instagram.com/sanjeev_kr_sahani12/',
      title: 'Instragm',
    },
    {
      src: facebook,
      url: 'https://www.facebook.com/profile.php?id=100010760381380',
      title: 'Facebook',
    },
  ];
  return (
    <footer className={classes.footer}>
      <div className={classes['footer_wrapper']}>
        <div className={classes['footer_heading']}>
          <h1>Follow Me</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, sed?</p>
        </div>
        <div className={classes['footer_content']}>
          {imageIcon.map((icon, index) => {
            return (
              <div className={classes.icon} key={index} title={icon.title}>
                <a href={icon.url} target='_self'>
                  <img className='icon_image' src={icon.src} alt={`${icon}-image`} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
