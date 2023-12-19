"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentuser = {
    name: "John Doe",
    isSeller: true,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  // const currentuser = false;

  return (
    <div
      className={
        active || pathname !== "/"
          ? `${styles.navbar} ${styles.active}`
          : styles.navbar
      }
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link className="link" href="/">
            <span>fiverr</span>
            <span className={styles.dot}>.</span>
          </Link>
        </div>
        {
        active   && (
          <div className={styles.inputWrapper}>
            <input placeholder="What service are you locking for today?" type="text"/>
            
            <div className={styles.srcicon}><SearchIcon   /></div>
            
          </div>
        )
      }
        <div className={styles.links}>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          
          {currentuser?.isSeller ? (<span>Switch to Buying</span>) : (<span>Switch to Selling</span>) }
          {currentuser ? (
            <div className={styles.user} onClick={() => setOpen(!open)}>
              <Image
                className={styles.img}
                width={35}
                height={35}
                src={currentuser.img}
                alt="profile"
              />
              <span>{currentuser.name}</span>
              {open && (
                <>
                  <div className={styles.overlay}></div>
                  <div className={styles.options}>
                    {currentuser.isSeller && (
                      <>
                        <Link href="/mygig" className="link">
                          <span>My Gig</span>
                        </Link>
                        <Link href="/add" className="link">
                          <span>Add</span>
                        </Link>
                      </>
                    )}
                    <Link href="#" className="link">
                      <span>Order</span>
                    </Link>
                    <Link href="#" className="link">
                      <span>Messege</span>
                    </Link>
                    <span>Logout</span>
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="link">
                <span>Sign in</span>
              </Link>
              <Link href="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>

        
      </div>
      {
        active  && (
         <>
          <hr className={styles.hr} />
          <div className={styles.menu}>
            <span>Graphics & Design</span>
            <span>Video & Animation</span>
            <span>Writing & Translation</span>
            <span>AI Services</span>
            <span>Digital Marketing</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Business</span>
            <span>Lifestyle</span>
          </div>
         </>
        )
      }

      
      
    </div>
  );
};

export default Navbar;
