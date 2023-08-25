import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='content-footer p-5 '>    
                <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-4'>
                <h5 className='text-center text-primary' >Presta Event</h5>
                <ul>
                            <li className='text-start' ><span>Street :</span> 11 Shoot-Up Hill, London NW2 3QJ</li>
                            <li className='text-start' ><span>Country :</span> Royaume-Uni</li>
                            <li className='text-start' > <span>Phone :</span> 07 987 654 321</li>
                </ul>
                </div>
                <div className='col-4 d-flex flex-column '>
                    <h5 className='text-primary'>Menu</h5>
                    <a href=''>Home</a>
                    <a href=''>Product</a>
                    <a href=''>Service</a>
                    <a href=''>Contact</a>
                </div>
                <div className='col-4 d-flex flex-column '>
                    <h5 className='text-primary' >Follow us ...</h5>
                <div className='icons-social-footer d-flex flex-row justify-content-evenly'>
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
                <hr></hr>
                <p className='d-flex justify-content-center align-items-center '>Copyright &copy; - Legal notice - <a href="mailto:ako.jm.pro@gmail.com">MJ-DEV</a> </p>
            </div>         
        </section>
    );
};

export default Footer;