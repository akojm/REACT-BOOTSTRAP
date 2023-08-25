import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    return (
    <section className='container product'>
        <h2 className='text-center  pt-5 pb-5' id='product' >Our product</h2>
        <div className='row pt-3'>
          <div className='col-3'>
          <Card >
          <Card.Img  variant="top" src="./assets/img/Pioneer-CDJ2000.webp" />
          <Card.Body>
            <Card.Title>Platines</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">More info +</Button>
          </Card.Body>
        </Card>
          </div>
          <div className='col-3'>
          <Card >
          <Card.Img  variant="top" src="./assets/img/hk-audio.jpeg" />
          <Card.Body>
            <Card.Title>Enceintes</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">More info +</Button>
          </Card.Body>
        </Card>
          </div>
          <div className='col-3'>
          <Card >
          <Card.Img variant="top" src="./assets/img/pioneer-dj-DJM.jpeg" />
          <Card.Body>
            <Card.Title>Mixages</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">More info +</Button>
          </Card.Body>
        </Card>
          </div>
          <div className='col-3'>
          <Card >
          <Card.Img variant="top" src="./assets/img/lyres.jpeg" />
          <Card.Body>
            <Card.Title>Lumieres</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">More info +</Button>
          </Card.Body>
        </Card>
          </div>
          
        </div>
        <div className='row pt-3 '>
          <div className='col-3'>
          <Card >
          <Card.Img  variant="top" src="./assets/img/casques.jpeg" />
          <Card.Body>
            <Card.Title>Casques</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">GMore info +</Button>
          </Card.Body>
        </Card>
          </div>
          <div className='col-3'>
          <Card >
          <Card.Img  variant="top" src="./assets/img/sampler.jpeg" />
          <Card.Body>
            <Card.Title>Samplers</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">More info +</Button>
          </Card.Body>
        </Card>
          </div>
          <div className='col-3'>
          <Card >
          <Card.Img variant="top" src="./assets/img/pioneer-rev7.jpeg" />
          <Card.Body>
            <Card.Title>Controllers</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">More info +</Button>
          </Card.Body>
        </Card>
          </div>
          <div className='col-3'>
          <Card >
          <Card.Img variant="top" src="./assets/img/micro-hf.jpeg" />
          <Card.Body>
            <Card.Title>Micros</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">More info +</Button>
          </Card.Body>
        </Card>
          </div>
          
        </div>
    </section>
 
      );
};

export default Product;