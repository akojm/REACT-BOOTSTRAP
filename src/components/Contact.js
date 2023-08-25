import React from 'react';
import '../styles/contact.css'

const Contact = () => {
    return (
        <section className='contact'>
            <h2 className='text-center pt-5 pb-5'>contact</h2> 
           <div className='container content-contact'>
            <div className='row '>
            <div className='col-6'>
                    <div className='address'>
                        <h5 className='text-center p-3' > 
                        <span class="material-symbols-outlined text-primary">home </span> Presta Event</h5>
                        <ul>
                            <li className='text-start' ><span>Street :</span> 11 Shoot-Up Hill, London NW2 3QJ</li>
                            <li className='text-start' ><span>Country :</span> Royaume-Uni</li>
                            <li className='text-start' > <span>Phone :</span> 07 987 654 321</li>
                        </ul>
                        <div className='row'>
                            <div className='col-6'>
                               <h6 className='text-center p-2'>s.a.v</h6>
                               <ul>
                                <li className='text-start' ><span>Street :</span> 56 Shoot-Up Hill, London NW2 3QJ</li>
                                <li className='text-start' ><span>Country :</span> Royaume-Uni</li>
                                <li className='text-start' > <span>Phone :</span> 07 987 654 322</li>
                              </ul>
                                </div>
                            <div className='col-6'>
                            <h6 className='text-center p-2'>Installation</h6>
                               <ul>
                                <li className='text-start' ><span>Street :</span> 56 Shoot-Up Hill, London NW2 3QJ</li>
                                <li className='text-start' ><span>Country :</span> Royaume-Uni</li>
                                <li className='text-start' > <span>Phone :</span> 07 987 654 323</li>
                              </ul>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='col-6'>
                    <div className='map'>
                    <h5 className='text-center p-3' > <span class="material-symbols-outlined text-primary">
where_to_vote
                    </span> Localisation</h5>
                    <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2481.0987239009187!2d-0.2049124!3d51.5480887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761065c5ab881f%3A0x6d9c800809142839!2s11%20Shoot-Up%20Hill%2C%20London%20NW2%203QJ%2C%20Royaume-Uni!5e0!3m2!1sfr!2sfr!4v1692849492395!5m2!1sfr!2sfr"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
           </div>
        </section>
    );
};

export default Contact;