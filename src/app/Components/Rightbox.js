import React from 'react';
import Styles from '../../../Styles/rightbox.module.css';

function Rightbox() {
  return (
    <div className={Styles.right_container}>
      <div className={Styles.form_container}>
        <form action="">
          <div id='textwithlikid'>
            <span>Already have an IKEA for Business account and want to join the Network?</span>
            <a href="#" className={Styles.link} aria-disabled="false">Log in here</a>
          </div>
          <div className={Styles.space}></div>
          <div className={Styles.info_title}><h4>Business Information</h4></div>
          <div className={Styles.form_field}>
            <div className={Styles.input_field}>
              <label htmlFor="">Legal Business name</label>
              <input type="text" />
            </div>
          </div>
          <div className={Styles.space}></div>
          <div className={Styles.form_field}>
            <div className={Styles.input_field}>
              <label htmlFor="">GSTIN</label>
              <input type="text" />
            </div>
          </div>
          <div className={Styles.space}></div>
          <div className={Styles.form_field}>
            <div className={Styles.input_field}>
              <label htmlFor="">Industry segment (Optional)</label>
              <input type="text" />
            </div>
          </div>
          <div className={Styles.space}></div>
          <div className={Styles.form_field}>
            <div className={Styles.input_field}>
              <label htmlFor="">Post code</label>
              <input type="text" />
            </div>
          </div>
          <div className={Styles.space}></div>
          <div className={Styles.info_title}><h4>Personal Information</h4></div>
          <div className={Styles.form_field}>
            <div className={Styles.input_field}>
              <label htmlFor="">First name</label>
              <input type="text" />
            </div>
          </div>
          <div className={Styles.space}></div>
          <div className={Styles.form_field}>
            <div className={Styles.input_field}>
              <label htmlFor="">Surname</label>
              <input type="text" />
            </div>
          </div>
          <div className={Styles.space}></div>
          <div className={Styles.form_field}>
            <div className={Styles.input_field}>
              <label htmlFor="">Email (username)</label>
              <input type="text" />
            </div>
          </div>
          <div className={Styles.space}></div>
          <div className={Styles.form_field}>
            <div className={Styles.input_field}>
              <label htmlFor="">Password</label>
              <input type="text" />
            </div>
          </div>
          <div className={Styles.space}></div>
          <div className={Styles.checkbox_container}>
            <input type="checkbox" />
            <label htmlFor="">
              I want to receive relevant communications via email based on purchases, interactions and profile. I can unsubscribe anytime.
              <a href="#"> Read more about marketing communications</a>
            </label>
          </div>
          <div className={Styles.space}></div>
          <div className={Styles.checkbox_container}>
            <input type="checkbox" />
            <label htmlFor="">
              I confirm, on behalf of the company I represent, the acceptance of the
              <a href="#"> Terms & Conditions and Privacy Policy.</a>
            </label>
          </div>
          <div className={Styles.space}></div>
          <button className={Styles.btn}>Complete Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Rightbox;
