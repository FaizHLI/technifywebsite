// selectHandler.js

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.getElementById('years');
  const teamContainer = document.getElementById('2024-2025teamContainer');

  // Function to show/hide based on selected value
  const toggleTeamContainer = () => {
    if (selectElement.value === '2024') {
      teamContainer.innerHTML = `
            <div class="grid-item">
                <div class="role">
                    <h3>PRESIDENT</h3>
                    <div class="nameSocial">
                        <h2>Aayushi Patel</h2>
                        <div class="socials-about">
                            <a href="mailto:aayushi.patel@duke.edu" target="_blank"><img src="images/gmail.webp"></a>
                            <a href="https://www.linkedin.com/in/aayushikpatel/" target="_blank"><img src="images/linkedin.png"></a>
                        </div>
                    </div>
                </div>
                <p>Aayushi is a senior from Bangalore, India, majoring in Computer Science with a minor in Literature. 
                    As the president, she is passionate about bringing a social impact focus to pre-professional clubs at Duke, 
                    highlighting how we can simultaneously dedicate our time to helping others around the world while gaining a 
                    strong network, community, and interview-relevant skills. She loves traveling, books, learning languages, 
                    photography, art history, and relaxing in nature.
                </p>
            </div>

            <div class="internal-grid">
                <div>
                <img src="images/ayushi.png" class="gridimg">
                </div>
            </div>
            <div class="internal-grid">
                <div>
                <img src="images/hannah.png" class="gridimg">
                </div>
            </div>

            <div class="grid-item">
                <div class="role">
                    <h3>SENIOR LIASON</h3>
                    <div class="nameSocial">
                        <h2>Hannah Lawry</h2>
                        <div class="socials-about">
                            <a href="mailto:hannah.lawry@duke.edu" target="_blank"><img src="images/gmail.webp"></a>
                            <a href="https://www.linkedin.com/in/hannah-lawry-379782219/" target="_blank"><img src="images/linkedin.png"></a>
                        </div>
                    </div>
                    
                </div>
                <p>Hannah is a senior from Boston, MA, majoring in Computer Science with a minor in Economics, and a certificate 
                    in Decision Sciences. She joined Technify in the spring of 2023 as the Product Lead, and now takes the role 
                    of Senior Liaison and Assistant to President. In her free time, she loves to run, travel, spend time with 
                    friends and family, and try new foods. She is also involved with CS Sidekicks at Duke, and does part time 
                    front-end development for a start-up called Daydream. She is starting a full time role as a Software Engineer 
                    at JP Morgan following her graduation in December 2024.
                </p>
            </div>
            
            <div class="grid-item">
                <div class="role">
                    <h3>TECHNOLOGY</h3>
                    <div class="nameSocial">
                        <h2>Ayush Jain</h2>
                        <div class="socials-about">
                            <a href="mailto:ayush.jain@duke.edu" target="_blank"><img src="images/gmail.webp"></a>
                            <a href="https://www.linkedin.com/in/ayush-jain22/" target="_blank"><img src="images/linkedin.png"></a>
                        </div>
                    </div>
                </div>
                <p>Ayush is a senior from Mumbai, India, majoring in Computer Science and Statistics with a minor in Finance. 
                    He got involved with Technify in his senior year and is currently Head of Technology. In his free time, 
                    you’ll find him playing/watching soccer, working out, traveling, reading, watching movies (horror/thrillers!) 
                    or exploring new restaurants and bars.
                </p>   
            </div>

            <div class="internal-grid">
                <div>
                <img src="images/ayush.png" class="gridimg">
                </div>
            </div>
            <div class="internal-grid">
                <div>
                <img src="images/doreen.png" class="gridimg">
                </div>
            </div>

            <div class="grid-item">
                <div class="role">
                    <h3>PROJECT MANAGEMENT</h3>
                    <div class="nameSocial">
                        <h2>Doreen Echeverri</h2>
                        <div class="socials-about">
                            <a href="mailto:doreen.echeverri@duke.edu" target="_blank"><img src="images/gmail.webp"></a>
                            <a href="https://www.linkedin.com/in/doreen-echeverri-513630bb/" target="_blank"><img src="images/linkedin.png"></a>
                        </div>
                    </div>
                    
                </div>
                <p>
                    Doreen is a senior from Caracas, Venezuela studying CS and Neuroscience. She is passionate about leveraging 
                    technology to optimize healthcare in underdeveloped countries and wants to work within the Neurotech industry 
                    after graduation (fingers crossed). On a personal note, she loves making pasta from scratch, her two perfect 
                    dogs and going to the beach.
                </p>
    
            </div>
            
            <div class="grid-item">
                <div class="role">
                    <h3>OUTREACH</h3>
                    <div class="nameSocial">
                        <h2>Shaun Loh</h2>
                        <div class="socials-about">
                            <a href="mailto:shaun.loh@duke.edu" target="_blank"><img src="images/gmail.webp"></a>
                            <a href="https://www.linkedin.com/in/shaunlohjx/" target="_blank"><img src="images/linkedin.png"></a>
                        </div>
                    </div>
                </div>
                <p>
                    Shaun Loh is a sophomore from Singapore studying Financial Economics and Political Science. He joined Technify 
                    in the fall of his freshman year as a Product Manager, and is now a Co-Director of Student Outreach. He enjoys 
                    spin cycling and reading Substack articles in his free time.
                </p> 
            </div>

            <div class="internal-grid">
                <div>
                <img src="images/shaun.png" class="gridimg">
                </div>
            </div>
            <div class="internal-grid">
                <div>
                <img src="images/katherine.png" class="gridimg">
                </div>
            </div>

            <div class="grid-item">
                <div class="role">
                    <h3>OUTREACH</h3>
                    <div class="nameSocial">
                        <h2>Katherine Yu</h2>
                        <div class="socials-about">
                            <a href="mailto:katherine.l.yu@duke.edu" target="_blank"><img src="images/gmail.webp"></a>
                            <a href="https://www.linkedin.com/in/katherine-yuuu/" target="_blank"><img src="images/linkedin.png"></a>
                        </div>
                    </div>
                </div>
                <p>
                    Katherine is a sophomore from Belmont, CA (which is in the Bay Area), majoring in Computer Science and 
                    minoring in Finance. She joined Technify this year and is currently the Co-Director of Outreach. Some of 
                    her hobbies are reading, crocheting, running, creating Spotify playlists, and journaling!
                </p>
            </div>
      `
    } else {
         teamContainer.innerHTML = `
            <div class="grid-item">
                <div class="role">
                    <h3>PRESIDENT</h3>
                    <div class="nameSocial">
                        <h2>Amanda Nemshin</h2>
                        <div class="socials-about">
                            <a href="mailto:amanda.nemshin@duke.edu" target="_blank"><img src="images/gmail.webp"></a>
                            <a href="https://www.linkedin.com/in/amanda-nemshin-6580a2289/" target="_blank"><img src="images/linkedin.png"></a>
                        </div>
                    </div>
                </div>
                <p>Amanda is a junior from Long Island, New York, double majoring in Electrical and Computer Engineering and Computer Science, with a Certificate in Innovation and Entrepreneurship. As president of Technify, she is passionate about using technology as a force for good, connecting students with nonprofits to build real-world solutions that create meaningful impact. Amanda is driven by collaboration, learning, and helping others. In her free time she enjoys running, traveling, golfing, exploring entrepreneurial ideas, and finding new ways to bring creativity into the world of engineering.
                </p>
            </div>

            <div class="internal-grid">
                <div>
                <img src="images/amanda.png" class="gridimg">
                </div>
            </div>
            <div class="internal-grid">
                <div>
                <img src="images/amogh.png" class="gridimg">
                </div>
            </div>

            <div class="grid-item">
                <div class="role">
                    <h3>TECHNOLOGY</h3>
                    <div class="nameSocial">
                        <h2>Amogh Manral</h2>
                        <div class="socials-about">
                            <a href="mailto:amogh.manral@duke.edu" target="_blank"><img src="images/gmail.webp"></a>
                            <a href="https://www.linkedin.com/in/amogh-manral-688736248/" target="_blank"><img src="images/linkedin.png"></a>
                        </div>
                    </div>
                    
                </div>
                <p>
                Amogh is a sophomore from Norway double majoring in Computer Science and Economics. He first joined Technify as a software engineer, and now serves as VP of technology, with his primarily interests lying in full-stack development and AI/ML. At Duke, Amogh is also involved in the DIIG Data Division and Bass Connections research program. In his free time, he loves rock climbing playing in Duke’s Marching and Pep Band.
                </p>
            </div>
            
            <div class="grid-item">
                <div class="role">
                    <h3>PROJECT MANAGEMENT</h3>
                    <div class="nameSocial">
                        <h2>Soojin Lee</h2>
                        <div class="socials-about">
                            <a href="mailto:soojin.lee@duke.edu" target="_blank"><img src="images/gmail.webp"></a>
                            <a href="https://www.linkedin.com/in/soojin-lee-74325b284/" target="_blank"><img src="images/linkedin.png"></a>
                        </div>
                    </div>
                    
                </div>
                <p>
                    Soojin is a junior from San Jose, California, double majoring in Statistics and Neuroscience with a Certificate in Decision Sciences. With a strong interest in biotech and product management, she is passionate about using data-driven solutions to create tangible products that improve lives. In her free time, she enjoys watching movies, practicing taekwondo, reading, and searching for free food on campus.
                </p>
    
            </div>

            <div class="internal-grid">
                <div>
                <img src="images/soojin.png" class="gridimg">
                </div>
            </div>
            <div class="internal-grid">
                <div>
                <img src="images/shravan.png" class="gridimg">
                </div>
            </div>
            
            
            <div class="grid-item">
                <div class="role">
                    <h3>RECRUITMENT</h3>
                    <div class="nameSocial">
                        <h2>Shravan Selvavel</h2>
                        <div class="socials-about">
                            <a href="mailto:shravan.selvavel@duke.edu" target="_blank"><img src="images/gmail.webp"></a>
                            <a href="https://www.linkedin.com/in/shravan-selvavel/" target="_blank"><img src="images/linkedin.png"></a>
                        </div>
                    </div>
                </div>
                <p>
                    Shravan is a sophomore from Charlotte, NC studying Computer Science and Statistics. He joined Technify 
                    in the fall of his freshman year as a Software Engineer, and is now the VP of Recruitment. Shravan's professional interests lie within Machine Learning and Data Science, and he's also involved in DIIG Data. In his free time, he enjoys photography, video editing, and sports. 
                </p> 
            </div>


            <div class="grid-item">
                <div class="role">
                    <h3>OUTREACH</h3>
                    <div class="nameSocial">
                        <h2>Arnav Meduri</h2>
                        <div class="socials-about">
                            <a href="mailto:arnav.meduri@duke.edu" target="_blank"><img src="images/gmail.webp"></a>
                            <a href="https://www.linkedin.com/in/arnavmeduri05/" target="_blank"><img src="images/linkedin.png"></a>
                        </div>
                    </div>
                </div>
                <p>
                    Arnav is a sophomore from Raleigh, NC studying Computer Science and Statistics. He joined Technify as a member of the Client Outreach team. Arnav's professional interests include Software Engineering, Healthtech, and Data+, and at Duke they are involved in DIIG, DAML, and Bioinformatics research. In his free time, Arnav enjoys playing soccer, watching horror/thriller movies, 3D printing, and traveling.
                </p>
            </div>


            <div class="internal-grid">
                <div>
                <img src="images/arnav.png" class="gridimg">
                </div>
            </div>
      `
    }
  };

  // Run once on page load to set initial state
  toggleTeamContainer();

  // Run when user changes selection
  selectElement.addEventListener('change', toggleTeamContainer);
});
