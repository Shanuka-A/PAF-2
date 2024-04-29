import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebookSquare, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGoogle, AiOutlineInstagram, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'></div>
      </section>

      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                GymManage
              </h6>
              <p className='text-white'>We are a group of SLIIT students in our third year, currently studying the PAF module. Our group is identified as number 59.</p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Team Members</h6>
              <p className='text-white'><a href='#!' className='text-reset'>Amarasinghe A A S U</a></p>
              <p className='text-white'><a href='#!' className='text-reset'>Fernando T H</a></p>
              <p className='text-white'><a href='#!' className='text-reset'>Keshala G P</a></p>
              <p className='text-white'><a href='#!' className='text-reset'>Tharindi J A S</a></p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p className='text-white'><MDBIcon color='secondary' icon='home' className='me-2' />SLIIT, Malabe</p>
              <p className='text-white'><MDBIcon color='secondary' icon='envelope' className='me-3' />gymmanage@outlook.com</p>
              <p className='text-white'><MDBIcon color='secondary' icon='phone' className='me-3' />+9471 123 45678</p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='text-center'>
              <div className='d-flex justify-content-center justify-content-lg-end'>
                <a href='' className='me-4 text-reset'><FaFacebookSquare size={24} /></a>
                <a href='' className='me-4 text-reset'><FaTwitter size={24} /></a>
                <a href='' className='me-4 text-reset'><AiOutlineGoogle size={24} /></a>
                <a href='' className='me-4 text-reset'><AiOutlineInstagram size={24} /></a>
                <a href='' className='me-4 text-reset'><FaLinkedinIn size={24} /></a>
                <a href='' className='me-4 text-reset'><AiFillGithub size={24} /></a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold text-white' href='https://mdbootstrap.com/'>
          GymManage.lk
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
