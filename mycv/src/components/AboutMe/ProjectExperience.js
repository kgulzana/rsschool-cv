import React from "react";
import { projectExperience } from "../../data";
import { Link } from "react-router-dom";
import piramids from "../../profile-images/piramids.jpg";

function ProjectExperience() {
 return (
   <div>
     <div className="profile-img">
       <img src={piramids} alt="piramids" />
       <div className="pers-info">
         <Link to="/about" className="back-to">
           back to page AboutMe
         </Link>
         <p>
           Priorities will guide me in life's decisions and keep me on track.
           <br />
           Most importantly, priorities will give me the confidence to say "no."
           <br />
           They help me identify what's truly needed in my life, versus <br />{" "}
           what someone else feels is important.
         </p>
         <h3 className="title">My life priorities:</h3>
         <ul>
           {projectExperience.map((item) => {
             console.log(projectExperience);
             return <li>{item}</li>;
           })}
         </ul>
       </div>
     </div>
   </div>
 );
}


export default ProjectExperience