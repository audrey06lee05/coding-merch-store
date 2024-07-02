import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../Img/Profile_Pic.JPG";
import "./About.css";

const AboutPage = () => {
  return (
    <div>
      <header>
        <h3>Discover My Story</h3>
        <h1>Hubble In Orbit</h1>
        <p>
          Join my coding journey to become a full-stack developer by summer
          2025! <br />
          <br />
          If I can do it, you can do it.
        </p>
      </header>
      <section>
        <div className="who-am-i">
          <h1>Who Am I?</h1>
          <div className="profile-pic-container">
            <img src={ProfilePic} alt="Profile" className="profile-pic" />
          </div>
          <p>
            Hello! I'm Hubble, and I'm currently a student at University of
            Bristol studying aerospace engineering (not computer science).{" "}
            <br />
            <br />
            I've started coding since October 2023, and I'm very passionate to
            obtain a software engineer graduate role by summer 2025. During the
            past few months, I've been attending a coding online course and
            doing projects every single day. I believe my hard work will pay off
            in the near future. So let's not give up and keep coding!!!
            <br />
            <br />
            Fun fact: I can fly a plane.
          </p>
        </div>
        <div className="why-mecrh">
          <h1>Why did I start this Merch Store</h1>
          <p>
            This might sound funny but I get super motivated when I imagine
            myself as a software engineer. So I started searching for some
            coding merch to immerse myself into the coding world with everything
            related to coding. However, I couldn't find any merch like T-shirts
            or hoodies that I like, so I decided to make them myself. <br />{" "}
            <br />
            The products I designed are minimalistic as I prefer a clean look
            with eye-catching messages. I spent so much time choosing the
            font-family I like and deciding the size and position of the words.
            I hope you all like the designs and products! Please feel free to
            drop my a dm or an email if you want to share with me your new
            ideas.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
