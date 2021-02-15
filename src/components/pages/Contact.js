import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const Contact = () => {
  return (
    <section className="contact-section my-5">
      <MDBCard>
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form">
              <h3 className="mt-4">
                <MDBIcon icon="envelope" className="pr-2" />
                Write to us:
              </h3>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-name"
                      label="Your name"
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-email"
                      label="Your email"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-phone"
                      label="Your phone"
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-company"
                      label="Your company"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="form-contact-message"
                      label="Your message"
                    />
                    <MDBBtn rounded color="blue">
                      <MDBIcon icon="paper-plane" />
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4">
            <MDBCardBody className="contact text-center h-100 white-text">
              <h3 className="my-4 pb-2">Nous Contacter:</h3>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <p>
                    <MDBIcon icon="map-marker-alt" className="pr-2" />
                    17130 Montendre, France
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="phone" className="pr-2" />+ 33 634 567 89
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="envelope" className="pr-2" />
                    contact@example.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <i className="fa fa-twitter-square fa-2x" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <i className="fa fa-linkedin-square fa-2x" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <i className="fa fa-instagram-square fa-2x" />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </section>
  );
}

export default Contact;