import React from 'react';
import styles from '../../../Styles/leftbox.module.css';

function Leftbox() {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.xtc}>
        <div className={styles.imgBox}>
          <img className={styles.boxImg} src="https://in.accounts.ikea.com/resources/static/logo.png" alt="" />
        </div>

        <div className={styles.infoBox}>
          <h1>Create an IKEA Business Network account for free and get:</h1>
          <div className={styles.infoBoxSpace}></div>
          <ul>
            <li>Online access to your invoices and purchase history</li>
            <li>Access to IKEA Family offers</li>
            <li>Interior design advice</li>
            <li>Perks for you and your colleagues</li>
            <li>Free online training</li>
          </ul>
          <p>... and a whole lot more!</p>
          <div className={styles.imgBox1}>
            <div className={styles.vertical}>
              <img src="https://in.accounts.ikea.com/resources/static/BUSINESS_SIGNUP_IMAGE_1.jpg" alt="" />
              <img src="https://in.accounts.ikea.com/resources/static/BUSINESS_SIGNUP_IMAGE_3.jpg" alt="" />
            </div>
            <div className={styles.vertical}>
              <img src="https://in.accounts.ikea.com/resources/static/BUSINESS_SIGNUP_IMAGE_2.jpg" alt="" />
              <img src="https://in.accounts.ikea.com/resources/static/BUSINESS_SIGNUP_IMAGE_4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbox;
