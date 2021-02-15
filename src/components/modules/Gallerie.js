import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";

class Gallerie extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
  ]
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

  return images.map(imageSrc => {
    photoIndex++;
    const privateKey = photoIndex;
    return (
      <MDBCol md="3" key={photoIndex}>
        <figure>
          <img
            src={imageSrc}
            alt="Gallery"
            className="img-fluid z-depth-1"
            onClick={() =>
              this.setState({ photoIndex: privateKey, isOpen: true })
            }
          />
        </figure>
      </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
    <MDBContainer className="mt-5 p-3">
      <h2 class="h1 text-center text-uppercase font-weight-bold mb-3">Menu</h2>
      <p class="text-center text-uppercase font-weight-bold">Découvrez nos plats</p>
      <p class="section-description mt-5 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a
        pariatur accusamus veniam. At ab ea a molestiae corrupti numquam quo beatae minima ratione magni accusantium
        repellat eveniet quia vitae.</p>
      <div className="mdb-lightbox p-3">
        <MDBRow>
          {this.renderImages()}
        </MDBRow>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
          }
        />
      )}
    </MDBContainer>
    );
  }
}

export default Gallerie;