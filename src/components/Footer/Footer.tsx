import React from "react";
import st from '../../style.module.scss';
import cx from './Footer.module.scss';


const Footer = () => {
  return (
    <>
      <footer className={cx.mainFooter}>
        Copyright © 2022 Dot Apps. All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
