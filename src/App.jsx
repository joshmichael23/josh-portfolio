import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import emailjs from '@emailjs/browser';
import './App.css'

function App() {


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
              <h1>Frontend Mentor Projects</h1>
              <div className='projects'>
                
                <a href="https://ecomm-psi-seven.vercel.app" className="challenge">
                <img src={'./screenshots/ecommerce.png'} alt="Project's Screenshot"/>
                  <h2>E-commerce</h2>
                </a>

                <a href="https://comments-brown-five.vercel.app" className='challenge'>
                  <img src={'./screenshots/interactive-comments.png'} alt="Project's Screenshot"/>
                  <h2>Interactive Comments</h2>
                </a>

                <a href="https://roomhomepage-jade.vercel.app" className='challenge'>
                  <img src={'./screenshots/room-homepage.png'} alt="Project's Screenshot"/>
                  <h2>Room Landing Page</h2>
                </a>

                <a href="https://calculator-hazel-rho.vercel.app" className='challenge'>
                  <img src={'./screenshots/calculator.png'} alt="Project's Screenshot"/>
                  <h2>Calculator</h2>
                </a>

                <a href="https://advice-generator-app-main-seven-theta.vercel.app" className='challenge'><img src={'./screenshots/advice-generator.png'} alt="Project's Screenshot"/>
                  <h2>Advice Generator</h2>
                </a>

                <a href="https://age-calculator-app-weld.vercel.app" className="challenge">
                  <img src={'./screenshots/age-calculator.png'} alt="Project's Screenshot"/>
                  <h2>Age Calculator</h2>
                </a>

                <a href="https://expenses-chart-component-main-opal.vercel.app" 
                className="challenge">
                  <img src={'./screenshots/expenses-chart.png'} alt="Project's Screenshot"/>
                  <h2>Expenses Chart</h2>
                </a>

                <a href="https://interactive-rating-component-main-ten-livid.vercel.app" className="challenge">
                <img src={'./screenshots/interactive rating.png'} alt="Project's Screenshot"/>
                  <h2>Interactive Rating</h2>
                  
                </a>

                <a href="https://loopstudios-flame-phi.vercel.app" className="challenge">
                <img src={'./screenshots/loopstudios.png'} alt="Project's Screenshot"/>
                  <h2>Loopstudios</h2>
                </a>

                <a href="https://order-summary-component-main.vercel.app" className="challenge">
                <img src={'./screenshots/order-summary.png'} alt="Project's Screenshot"/>
                  <h2>Order Summary</h2>
                </a>

                <a href="https://pricing-component-omega-eight.vercel.app" className="challenge">
                <img src={'./screenshots/pricing-component.png'} alt="Project's Screenshot"/>
                  <h2>Pricing Component</h2>
                </a>

                <a href="https://social-media-switcher-alpha.vercel.app" className="challenge">
                <img src={'./screenshots/social-dark-mode.png'} alt="Project's Screenshot"/>
                  <h2>Dashboard w/ Dark Mode</h2>
                </a>

                <a href="https://time-tracking-teal.vercel.app" className="challenge">
                <img src={'./screenshots/time-tracking.png'} alt="Project's Screenshot"/>
                  <h2>Time Tracking App</h2>
                </a>

                <a href="https://tip-calculator-app-main-umber-alpha.vercel.app" className="challenge">
                <img src={'./screenshots/tip-calculator.png'} alt="Project's Screenshot"/>
                  <h2>Tip Calculator</h2>
                </a>
              </div>
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
