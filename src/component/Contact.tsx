import React from "react";
import { GitHub } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const Contact = () => {
  return (
    <div className="">
      <div className="contact text-slate-100 relative">
        <div className="infor relative">
          <div className="avatar animate__animated animate__backInLeft">
            <img src={require("../assets/images/ảnh thẻ.jpg")} alt="..." />
            <p className="text-5xl">LÊ ANH SINH</p>
            <p className="text-green-400 text-3xl">Front End - Developer</p>
          </div>
          <div className="inforContact animate__animated animate__backInRight text-xl max-w-xl">
            <p><PhoneIcon />: 0982631993</p>
            <p><EmailIcon />: sinhla213@gmail.com</p>
            <p>
              <HomeIcon />: 537 Nguyễn Duy Trinh, P. Bình Trưng Đông, Quận 2 - Tp Thủ
              Đức, TpHCM
            </p>
            <a
              href="https://github.com/TheFlash2022"
              target={"_blank"}
              rel="noreferrer"
            >
              <GitHub /> Github
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/sinhla213"
              target={"_blank"}
              rel="noreferrer"
            >
              <LinkedInIcon /> Linkedin
            </a>
          </div>
        </div>
        <a
          href="#about"
          className="iconArrow absolute bottom-5 left-1/2 border-solid border-2 rounded-full border-white w-8 h-12"
        >
          <KeyboardDoubleArrowDownIcon />
        </a>
      </div>
    </div>
  );
};

export default Contact;
