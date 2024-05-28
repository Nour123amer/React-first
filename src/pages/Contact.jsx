import React from "react";

export default function Contact(){
<>
<h2>CONATCT SECTION</h2>
<p className="flex justify-between">
            <i class="fa-light fa-minus white"></i>
            <i class="fa-solid fa-star white"></i>
            <i class="fa-light fa-minus white"></i>
            </p>

            <form >
                <input type="text" placeholder="userName" />
                <input type="number" placeholder="userAge"/>
                <input type="email" placeholder="userEmail"/>
                <input type="password" placeholder="userPassword" />

                <button type="button">send Message</button>
            </form>
</>

}