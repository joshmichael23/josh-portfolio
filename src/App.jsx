import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import emailjs from '@emailjs/browser';
import './App.css'

function App() {

  


  const [feMentorData, setFeMentorData] = useState([]);
  const [count, setCount] = useState(0)

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  const form = useRef();
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [validName, setValidName] = useState(true);
  const [messageSent, setMessageSent] = useState(false);
  const [hideFrontend, setHideFrontent] = useState(false);


  function validateEmailAdd(email){
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  function validateForm(form){
    let isValid = true;

    if(!form.current["from_name"].value){
        setValidName(false);
        isValid = false;
    }else{
        setValidName(true);
    }

    if(!form.current["message"].value){
      setValidMessage(false);
      isValid = false;
    }else{
      setValidMessage(true);
    }

    if(!form.current["from_email"].value){
      setValidEmail(false);
      isValid = false;
    }else if(!validateEmailAdd(form.current["from_email"].value)){
      setValidEmail(false);
      isValid = false;
    }else{
      setValidEmail(true);
    }
    
    return isValid; 

  }
  
  function sendEmail(e){
      e.preventDefault(); 

      const name = form.current['from_name'].value;
      const email = form.current['from_email'].value;
      const message = form.current['message'].value;

      if (validateForm(form)) {
        emailjs
          .sendForm('service_9fgrofd', 'template_yev0a4v', form.current, {
            publicKey: 'sEJ6COwXwgoM3I87T',
          })
          .then(
            () => {
              alert('Sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        setMessageSent(true); 
      }
  }

  const fetchFrontendMentorProjs = async()=>{

    const res = await fetch('./src/data.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })

    const data = await res.json()
    setFeMentorData(data.data);
  }
   
  useEffect(() => {
    // fetch call used to be here
    fetchFrontendMentorProjs();

  }, [])


  function hideFrontendBtn(){
    if(!hideFrontend){
      let elements = document.querySelectorAll('.challenge.hidden');
   

      elements && elements.forEach(element => {
        element.className='challenge shown'
      });

      document.getElementById('viewMoreFrontEnd').innerHTML = 'Show Less';

      document.getElementById("project").scroll(0,0);

    }else{
      let elements = document.querySelectorAll('.challenge.shown');
   

      elements && elements.forEach(element => {
        element.className='challenge hidden'
      });

      document.getElementById('viewMoreFrontEnd').innerHTML = 'Show More';


      document.getElementById("project").scroll(0,0);
    }

    setHideFrontent(!hideFrontend)
  }


  return (
    <>
        <header>
          <div className='logoContainer'>
            josholea
          </div>
          
          <div className='links'>

            <a href="#aboutMe">About</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
            
          </div>
        </header>
        <main className="test">
          
          <div className="wrapper">

            
            <article id="mainContent" className='main-content'>
              <div className='description-content'>
                
              
                
                <h1> Hello There! 👋</h1> 
                <div className='typewriter'>
                  <p>I'm</p><h2>Josh Olea</h2>
                </div>
                <h2>Frontend Developer</h2>
                <div className='links'>
                    <a target="_blank" href="https://www.linkedin.com/in/josh-michael-olea/"><i className='fa-xl fa-brands fa-linkedin' /></a>
                    <a target="_blank" href="https://github.com/joshmichael23"><i className='fa-xl fa-brands fa-github'></i></a>
                    <a target="_blank" href="https://www.frontendmentor.io/profile/joshmichael23"><i className="fa-xl fa-solid fa-code"></i></a>
                </div>
             
              </div>
              <div className='profile-container'>
                <img className="profile-pic" alt="Josh Michael's Picture" src={'/picture.png'} />
              </div>
            </article>

            <section id="aboutMe" className='about-me'>
              <h1>About Me</h1>
              <p className="bio">I'm a web developer from Naga City, Philippines.  I create my projects using HTML, CSS, and JavaScript. I've been studying and learning React.JS, Vue.JS lately to expand my knowledge in front-end development. I try to practice my skills in Frontend Mentor by completing their challenges. </p>
              <section className='skills'>
              <a href="https://www.javascript.com" className="skill js">
                <img src={'./logos/JavaScript-logo.png'} alt="Javascript Logo" />
              </a>

              <a href="https://getbootstrap.com" className="skill bootstrap">
                <img src={'./logos/bootstrap.png'} alt="Bootstrap Logo" />
              </a>
              
              <a href="https://web.dev/learn/css" className="skill css">
                <img src={'./logos/css.png'} alt="CSS Logo" />
              </a>

              <a href="https://react.dev" className="skill react">
                <img src={'./logos/react.png'} alt="React Logo" />
              </a>

              <a href="https://jquery.com" className="skill jquery">
                <img src={'./logos/jquery.png'} alt="Jquery Logo" />
              </a>

              <a href="https://sass-lang.com" className='skill sass'>
                <img src={'./logos/sass.png'} alt="Sass Logo" />
              </a>

              <a href="https://tailwindcss.com" className='skill tailwind'>
                <img src={'./logos/tailwlind.png'} alt="Tailwind Logo" />
              </a>

              <a href="https://vitejs.dev" className='skill vite'>
                <img src={'./logos/vite.png'} alt="Vite Logo" />
              </a>
            </section>
            </section>

            <section id="project" className='project'>
              <h1>Projects</h1>

              <h2 className='subproject'>Frontend Mentor</h2>
              <div className='projects'>
                

                {
                  feMentorData.map((item, index) => (
                    <div key={item.id}  className={'challenge ' + (index > 7 ? 'hidden': '')} >
                      <img src={item.screenshot} alt={item.title}/>
                        <h2>{item.title}</h2>
                        <div className='challenge-links'>
                          <a href={item.liveURL} target='_blank'><i className='fa fa-link'></i></a>
                          <a href={item.repoURL} target='_blank'><i className='fa fa-code'></i></a>
                          
                        </div>
                        <div className='challenge-stats'> 
                          <span><i className='fa fa-thumbs-up'></i>{item.likes.length}</span>
                          <span><i className='fa fa-comment'></i>{item.commentCount}</span>
                        </div>
                    </div>
                  ))
                }

                


 
              </div>

              <button id='viewMoreFrontEnd' onClick={() => hideFrontendBtn()}>Show More</button>
            </section>

             
            </div>
          </main>
          <footer>


          <div className='contactMe' id="contact">
              <div>
                <h2>Contact me</h2>
                <p>Please fill in the form, and I’ll get back to you as soon as possible. </p>
              </div>
              <form ref={form} className="footer-form" autoComplete="off" onSubmit={sendEmail}>
                <div className={validName?"":"err"}>
                  <input type="text" placeholder="NAME" id="formname" name="from_name" />
                    
                </div>
                <div className={validEmail?"":"err"}>
                  <input type="text" placeholder="EMAIL" id="formemail" name="from_email" />
                    
                </div>
                
                
                <textarea placeholder="MESSAGE" name="message" id="formmessage" maxLength="150" className={validMessage?"":"err"}></textarea>
                <button className={messageSent?"sendBtn hide":"sendBtn"}>SEND MESSAGE</button>
                <label className={messageSent?"messageSent show" : "messageSent" }>MESSAGE SENT!</label>
              </form>
          </div>

          <div className="contactdetails">
            <p>josholea</p>
            <div className='links'>
              <a href="#mainContent">Me</a>
              <a href="#aboutMe">About</a>
              <a href="#project">Projects</a>
           
            </div>
          </div>
          </footer>
    </>
  )
}

export default App
