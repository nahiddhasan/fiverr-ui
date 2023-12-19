import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <hr />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.item}>
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className={styles.item}>
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className={styles.item}>
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Fiverr</span>
            <span>Buying on Fiverr</span>
          </div>
          <div className={styles.item}>
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className={styles.item}>
            <h2>More From Fiverr</h2>
            <span>Fiverr Business</span>
            <span>Fiverr Pro</span>
            <span>Fiverr Logo Maker</span>
            <span>Fiverr Guides</span>
            <span>Get Inspired</span>
            <span>Fiverr Select</span>
            <span>ClearVoice</span>
            <span>Fiverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className={styles.bottom}>
          <div className={styles.left}>
            <Link style={{textDecoration:"none", color:"inherit"}} href="/">
            <h2>fiverr<span>.</span></h2>
            </Link>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className={styles.right}>
            <div className={styles.social}>
            <Image src="/facebook.png" height={16} width={16} alt="" />
            <Image src="/linkedin.png" height={16} width={16} alt="" />
            <Image src="/pinterest.png" height={16} width={16} alt="" />
            <Image src="/twitter.png" height={16} width={16} alt="" />
            </div>
            <div className={styles.link}>
              <Image src="/coin.png" height={16} width={16} alt="" />
              <span>Language</span>
            </div>
            <div className={styles.link}>
            <Image src="/coin.png" height={16} width={16} alt="" />
              <span>USD</span>
            </div>
            <Image src="/accessibility.png" height={16} width={16} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
