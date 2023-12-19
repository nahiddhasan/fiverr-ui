"use client";
import React, { useRef, useState } from "react";
import styles from "./gigsMenu.module.scss";
import Image from "next/image";
const GigsMenu = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };
  return (
    <div className={styles.gigsmenu}>
      <div className={styles.left}>
        <span>Budget:</span>
        <input ref={minRef} type="text" placeholder="min" />
        <input ref={maxRef} type="text" placeholder="max" />
        <button>Apply</button>
      </div>
      <div className={styles.right}>
        <span>Sort By:</span>
        <span onClick={() => setOpen(!open)}>
          {sort === "sales" ? "Best Selling" : "Newest"}
        </span>
        <Image
          src="/down.png"
          height={20}
          width={20}
          alt=""
          onClick={() => setOpen(!open)}
        />
        {open && (
          <div className={styles.rightmenu}>
            {sort === "sales" ? (
              <span onClick={() => reSort("createdAt")}>Newest</span>
            ) : (
              <span onClick={() => reSort("sales")}>Best Selling </span>
            )}

            <span onClick={() => reSort("sales")}>Popular</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GigsMenu;
