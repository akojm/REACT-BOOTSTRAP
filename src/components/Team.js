import React from 'react';
import  "../styles/team.css";

const Team = () => {
    return (
<section className='container team'>
            <h2 className='text-center pt-5 pb-5'>Our team</h2> 
<div className='content-team'>
 <div className='row mb-5'> 
        <div className='col-4 p-2'>
                <h3 className='text-center p-3'> <span class="material-symbols-outlined me-1 text-primary">
graphic_eq
</span> Sound manager</h3>
                <img src="./assets/img/dj_640.jpg" alt="sound-manager"  />
                <h5 className='name text-center text-success p-3'>Klyde John's</h5> 
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi distinctio officiis ipsum 
                    explicabo illo! Obcaecati amet praesentium debitis maxime. Consequatur delectus ratione ut maxime perspiciatis ea?</p>
    
                <div className='icons-social text-center'>
                    <a href='https://www.facebook.com/' rel="noreferrer" target='_blank' >
                    <i class="fa-brands fa-square-facebook" ></i>
                    </a>
                    <a href='https://twitter.com/' rel="noreferrer" target='_blank'>
                    <i class="fa-brands fa-square-twitter"></i>
                    </a>
                    <a href='https://www.instagram.com/' rel="noreferrer" target='_blank'>
                    <i class="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href='https://www.youtube.com/' rel="noreferrer" target='_blank'>
                    <i class="fa-brands fa-square-youtube"></i>
                    </a>
                    <a href='https://fr.linkedin.com/' rel="noreferrer" target='_blank'>
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>  
        </div>
        <div className='col-4 p-2' >
                <h3 className='text-center p-3'>
                    <span class="material-symbols-outlined me-1 text-primary">
graphic_eq
</span> Light manager</h3>
                <img src="./assets/img/man_640.jpg" alt="light-manager"  />
                <h5 className='name text-center text-success p-3'>Jack kerning</h5> 
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi distinctio officiis ipsum 
                    explicabo illo! Obcaecati amet praesentium debitis maxime. Consequatur delectus ratione ut maxime perspiciatis ea?</p>
                <div className='icons-social text-center'>
                    <a href='https://www.facebook.com/' rel="noreferrer" target='_blank' >
                    <i class="fa-brands fa-square-facebook" ></i>
                    </a>
                    <a href='https://twitter.com/' rel="noreferrer" target='_blank'>
                    <i class="fa-brands fa-square-twitter"></i>
                    </a>
                    <a href='https://www.instagram.com/' rel="noreferrer" target='_blank'>
                    <i class="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href='https://www.youtube.com/' rel="noreferrer" target='_blank'>
                    <i class="fa-brands fa-square-youtube"></i>
                    </a>
                    <a href='https://fr.linkedin.com/' rel="noreferrer" target='_blank'>
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>          
        </div>
        <div className='col-4 p-2' >
                <h3 className='text-center p-3 '><span class="material-symbols-outlined me-1 text-primary">
graphic_eq
</span>Sale manager</h3>
                <img src="./assets/img/woman_640.jpg" alt="sound-manager"  />
                <h5 className='name text-center text-success p-3'>Sherlayne Morris</h5> 
                <p className='text-start '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi distinctio officiis ipsum 
                    explicabo illo! Obcaecati amet praesentium debitis maxime. Consequatur delectus ratione ut maxime perspiciatis ea?</p>
                <div className='icons-social text-center'>
                    <a href='https://www.facebook.com/' rel="noreferrer" target='_blank' >
                    <i class="fa-brands fa-square-facebook" ></i>
                    </a>
                    <a href='https://twitter.com/' rel="noreferrer" target='_blank'>
                    <i class="fa-brands fa-square-twitter"></i>
                    </a>
                    <a href='https://www.instagram.com/' rel="noreferrer" target='_blank'>
                    <i class="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href='https://www.youtube.com/' rel="noreferrer" target='_blank'>
                    <i class="fa-brands fa-square-youtube"></i>
                    </a>
                    <a href='https://fr.linkedin.com/' rel="noreferrer" target='_blank'>
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>  
            
        </div>
  </div>

</div>        
</section>
    );
};

export default Team;