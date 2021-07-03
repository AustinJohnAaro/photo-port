import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
import proFileImage from '../../assets/cover/proFileImage-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Austin John Aaro</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <img src={proFileImage} className="my-2" style={{ width: "100%" }} alt="proFileImage" />
      <div className="my-2">
        <p>
        I am highly motivated, I am very passionate to learn, I am very eager to learn, I am very hard working, I can talk to anybody, I am very friendly, I work well in any situation. I follow through on commitments. I keep a good sense of humor. I make the best of a difficult situation. I put people at ease. I communicate well verbally. I communicate well on paper. I solve problems creatively. I juggle many responsibilities at once. I make efficient use of time. I am very persuasive and convincing. Work well with the public. I follow procedures accurately. I provide follow-through on an idea or project. I provide clarity and perspective.  I take care of equipment and property. I perform well in emergencies. I analyze complex problems. I concentrate in spite of distractions. I plan and strategize. I show compassion and understanding. 
        👋 Hi, I’m @AustinJohnAaro

👀 I’m interested in Computer Engineering.

🌱 I’m currently learning Full Stack Computer Programming.

💞️ I’m looking to collaborate on electric Trucks.

📫 How to reach me = github = AustinJohnAaro = email = austin1472a@gmail.com = Linkedin = https://www.linkedin.com/in/austin-aaro/
        </p>
      </div>
    </section>
  );
}

export default About; 
