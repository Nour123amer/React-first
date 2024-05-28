import React from "react";

export default function Footer(){
    return(
        <>
        <div className="container bg-sky-500/10 flex justify-between">
          <div className="location">
             <h3>LOCATION</h3>
             <p>2215 John Daniel Drive</p>
             <p>Clark, MO 65243</p>
          </div>

          <div className="web">
          <h3>AROUND THE WEB</h3>
           <ul>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-linkedin-in"></i></li>
                <li><i class="fa-solid fa-globe"></i></li>
               
           </ul>
          </div>

          <div className="about">
          <h3>ABOUT FREELANCER</h3>
             <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            
          </div>
        </div>
        </>
    )
}