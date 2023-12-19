import React from "react";
import styles from "./gig.module.scss";
import Image from "next/image";
import SingleGigSlide from "@/components/singleGigSlide/SingleGigSlide";
import Reviews from "@/components/reviews/Reviews";
const SingleGig = () => {
  return (
    <div className={styles.gig}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.breadcrumbs}>
            Fiverr {">"} Graphics & Design {">"}
          </div>
          <h1>I will create ai generated art for you</h1>
          <div className={styles.user}>
            <Image src="/noavatar.jpg" height={32} width={32} alt="" />
            <span>John doe</span>
            <div className={styles.stars}>
              <Image src="/star.png" height={14} width={14} alt="" />
              <Image src="/star.png" height={14} width={14} alt="" />
              <Image src="/star.png" height={14} width={14} alt="" />
              <Image src="/star.png" height={14} width={14} alt="" />
              <Image src="/star.png" height={14} width={14} alt="" />
              <span>5</span>
            </div>
          </div>
          <div className={styles.slides}>
            <SingleGigSlide slidesPerView={1} />
          </div>
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates,Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, vitae.
          </p>
          <div className={styles.seller}>
            <h2>About this Sellar</h2>
            <div className={styles.user}>
              <Image src="/noavatar.jpg" height={100} width={100} alt="" />
              <div className={styles.info}>
                <span>John doe</span>
                <div className={styles.stars}>
                  <Image src="/star.png" height={14} width={14} alt="" />
                  <Image src="/star.png" height={14} width={14} alt="" />
                  <Image src="/star.png" height={14} width={14} alt="" />
                  <Image src="/star.png" height={14} width={14} alt="" />
                  <Image src="/star.png" height={14} width={14} alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.items}>
              <div className={styles.item}>
                <span className={styles.title}>From</span>
                <span className={styles.desc}>USA</span>
              </div>
              <div className={styles.item}>
                <span className={styles.title}>Member since</span>
                <span className={styles.desc}>Aug 2022</span>
              </div>
              <div className={styles.item}>
                <span className={styles.title}>Avg. response time</span>
                <span className={styles.desc}>4 hours</span>
              </div>
              <div className={styles.item}>
                <span className={styles.title}>Last delivery</span>
                <span className={styles.desc}>1 day</span>
              </div>
              <div className={styles.item}>
                <span className={styles.title}>Languages</span>
                <span className={styles.desc}>English</span>
              </div>
            </div>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              esse maiores debitis placeat ipsum amet nobis dolorem excepturi ex
              deserunt.
            </p>
          </div>

          <Reviews />

          <div className={styles.addReview}>
            <input type="text" placeholder="Share your opinion" />
            <button>Submit</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.price}>
            <h3>1 Ai Generated Image</h3>
            <h2>$49.99</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            distinctio?
          </p>
          <div className={styles.details}>
            <div className={styles.item}>
              <Image src="/clock.png" height={16} width={16} alt="" />
              <span>2 Days Delevery</span>
            </div>
            <div className={styles.item}>
              <Image src="/recycle.png" height={14} width={14} alt="" />
              <span>3 Revision</span>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.item}>
              <Image src="/greencheck.png" height={14} width={14} alt=""  />
              <span>Promt Writing</span>
            </div>
            <div className={styles.item}>
              <Image src="/greencheck.png" height={14} width={14} alt=""  />
              <span>Artwork Delevery</span>
            </div>
            <div className={styles.item}>
              <Image src="/greencheck.png" height={14} width={14} alt=""  />
              <span>Image Upscaling</span>
            </div>
            <div className={styles.item}>
              <Image src="/greencheck.png" height={14} width={14} alt=""  />
              <span>Additional Design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default SingleGig;
