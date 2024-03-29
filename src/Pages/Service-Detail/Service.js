import React, { useEffect, useRef } from "react";
import ScrollReveal from 'scrollreveal';
import { PiCheck, PiEnvelope, PiMapPin, PiPhoneCall, PiBank } from "react-icons/pi";
import { AiOutlineAudit } from "react-icons/ai";
import { TbReceiptTax } from "react-icons/tb";
import { GrCompliance } from "react-icons/gr";
import { MdMiscellaneousServices, MdOutlineManageAccounts } from "react-icons/md";
import { SiCrowdsource } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import emailjs from '@emailjs/browser';

export default function Service() {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_0x63t57', 'template_zi0kwwp', form.current, 'VoGsm1xhQrw3MWjnt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      e.target.reset();
  }

  useEffect(() => {
    const config = {
      delay: 300,
      distance: '100px',
      origin: 'bottom',
      opacity: 0,
      duration: 1000,
      easing: 'ease-in-out',
      reset: false
    };
    ScrollReveal().reveal('.scroll-bottom-to-top2', config)
  }, []);
  useEffect(() => {
    document.title = 'Our Services';
  }, []);
  return (
    <>
      <div id="content" className="mt-[74px]">
      <div key={'solution'}>
                    <div className="section-solution bg-linear pt-80 pb-80">
                        <div className="container text-center">
                            <div className="text-label text-blue text-center pt-4 pb-4 pl-12 pr-12 bg-grey bora-2 display-inline-block">How we do</div>
                            <div className="heading3 text-center mt-12">Our Services</div>
                            <div className="row row-gap-40 mt-40 sub-nav-solution">
                            <div key={`solution_1`} className="col-12 col-xl-4 col-sm-6">
                                                    <div className="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Solutions" data-item="solution1"><a className="main-item flex-column-item-center" href="/service-detail"><i className={`icon-phone-sync fs-60 text-blue`}></i>
                                                        <div className="service-name heading5 text-center mt-24">Income Tax Return</div>
                                                        <div className="service-desc text-on-surface-variant1 text-center mt-12">As per the income tax laws, the return must be filed every year by an individual or business that earns any income during a financial year.</div></a>
                                                    </div>
                                                </div>
                            <div key={`solution_2`} className="col-12 col-xl-4 col-sm-6">
                                                    <div className="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Solutions" data-item="solution1"><a className="main-item flex-column-item-center" href="/service-detail"><i className={`icon-user-sync fs-60 text-blue`}></i>
                                                        <div className="service-name heading5 text-center mt-24">Statutory Audit</div>
                                                        <div className="service-desc text-on-surface-variant1 text-center mt-12">A statutory audit is a legally required review of the accuracy of a company`s or government`s financial statements and records.</div></a>
                                                    </div>
                                                </div>
                            <div key={`solution_3`} className="col-12 col-xl-4 col-sm-6">
                                                    <div className="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Solutions" data-item="solution1"><a className="main-item flex-column-item-center" href="/service-detail"><i className={`icon-device-cloud fs-60 text-blue`}></i>
                                                        <div className="service-name heading5 text-center mt-24">GST Return Filing</div>
                                                        <div className="service-desc text-on-surface-variant1 text-center mt-12">Comprehensive GST accounting platform that takes care of your business finance end-to-end. Create tax reports and file GST returns. Stay on top of tax compliance with us.</div></a>
                                                    </div>
                                                </div>
                            <div key={`solution_4`} className="col-12 col-xl-4 col-sm-6">
                                                    <div className="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Solutions" data-item="solution1"><a className="main-item flex-column-item-center" href="/service-detail"><i className={`icon-cloud-dots fs-60 text-blue`}></i>
                                                        <div className="service-name heading5 text-center mt-24">Project Finance</div>
                                                        <div className="service-desc text-on-surface-variant1 text-center mt-12">Financial Structuring is an important part of business planning. Locating cost effective and best suited sources of finance for your project is our strength.</div></a>
                                                    </div>
                                                </div>
                            <div key={`solution_5`} className="col-12 col-xl-4 col-sm-6">
                                                    <div className="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Solutions" data-item="solution1"><a className="main-item flex-column-item-center" href="/service-detail"><i className={`icon-phone-cloud fs-60 text-blue`}></i>
                                                        <div className="service-name heading5 text-center mt-24">Accounting</div>
                                                        <div className="service-desc text-on-surface-variant1 text-center mt-12">Accounting is the process of measuring, processing, and sharing financial and other information about businesses and corporations.</div></a>
                                                    </div>
                                                </div>
                            <div key={`solution_6`} className="col-12 col-xl-4 col-sm-6">
                                                    <div className="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Solutions" data-item="solution1"><a className="main-item flex-column-item-center" href="/service-detail"><i className={`icon-device-sync fs-60 text-blue`}></i>
                                                        <div className="service-name heading5 text-center mt-24">Business Consultancy</div>
                                                        <div className="service-desc text-on-surface-variant1 text-center mt-12">We have been working with startups for the past several years. During this time we have developed a wealth of knowledge.</div></a>
                                                    </div>
                                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div key={'services'} className="scroll-bottom-to-top2">
                    <div className="section-service mt-80 mb-[80px]">
                        <div className="container">
                            <div className="row gy-2 flex-between">
                                <div key="col1" className="col-xl-8 col-md-9 col-12">
                                    <div className="text-label text-blue pt-4 pb-4 pl-12 pr-12 bg-grey bora-2 display-inline-block">What we do</div>
                                    <div className="heading3 mt-12">Solve Accounting problems in every industry that customers need.</div>
                                </div>
                            </div>
                            <div className="row mt-40 row-gap-12 sub-nav-solution">
                            <div key={`service_1`} className="col-sm-6 col-12"> 
                                <a className="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="/service-detail" data-cate="Finance Consulting" data-item="">
                                    <i className={`fs-24`}><PiBank /></i>
                                    <div className="service-name heading6 pl-12">Finance & Banking</div>
                                </a>
                            </div>
                            <div key={`service_2`} className="col-sm-6 col-12"> 
                                <a className="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="/service-detail" data-cate="Finance Consulting" data-item="">
                                    <i className={`fs-24`}><AiOutlineAudit /></i>
                                    <div className="service-name heading6 pl-12">Audit and Assurance</div>
                                </a>
                            </div>
                            <div key={`service_3`} className="col-sm-6 col-12"> 
                                <a className="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="/service-detail" data-cate="Finance Consulting" data-item="">
                                    <i className={`fs-24`}><TbReceiptTax /></i>
                                    <div className="service-name heading6 pl-12">Tax Advisory and Compliances</div>
                                </a>
                            </div>
                            <div key={`service_4`} className="col-sm-6 col-12"> 
                                <a className="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="/service-detail" data-cate="Finance Consulting" data-item="">
                                    <i className={`fs-24`}><GrCompliance /></i>
                                    <div className="service-name heading6 pl-12">Corporate and Secreterial Compliances</div>
                                </a>
                            </div>
                            <div key={`service_5`} className="col-sm-6 col-12"> 
                                <a className="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="/service-detail" data-cate="Finance Consulting" data-item="">
                                    <i className={`fs-24`}><MdMiscellaneousServices /></i>
                                    <div className="service-name heading6 pl-12">Corporate Advisory Services</div>
                                </a>
                            </div>
                            <div key={`service_6`} className="col-sm-6 col-12"> 
                                <a className="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="/service-detail" data-cate="Finance Consulting" data-item="">
                                    <i className={`fs-24`}><SiCrowdsource /></i>
                                    <div className="service-name heading6 pl-12">Business Process Outsourcing</div>
                                </a>
                            </div>
                            <div key={`service_7`} className="col-sm-6 col-12"> 
                                <a className="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="/service-detail" data-cate="Finance Consulting" data-item="">
                                    <i className={`fs-24`}><MdOutlineManageAccounts /></i>
                                    <div className="service-name heading6 pl-12">Management Consultancy</div>
                                </a>
                            </div>
                            <div key={`service_8`} className="col-sm-6 col-12"> 
                                <a className="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="/service-detail" data-cate="Finance Consulting" data-item="">
                                    <i className={`fs-24`}><RiCustomerService2Line /></i>
                                    <div className="service-name heading6 pl-12">Start up Advisory</div>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div key={'contactus'} className="scroll-bottom-to-top2">
                    <div className="section-contact bg-linear-grey pt-60 pb-60">
                        <div className="container">
                            <div className="row flex-between row-gap-40">
                                <div key={'detail'} className="col-12 col-xl-7 text-white">
                                    <div className="text-label text-white pt-4 pb-4 pl-12 pr-12 bg-blue bora-2 display-inline-block">Contact us</div>
                                    <div className="heading3 text-white mt-12">Free consultation - discover Accounting solutions for your business</div>
                                    <div className="list-features gy-2 mt-16">
                                        <div key={`contact_1`} className="item flex-item-center">
                                            <i className="fs-20"><PiCheck /></i>
                                            <div className="body2 pl-12">Confirmation of appointment details</div>
                                        </div>
                                        <div key={`contact_2`} className="item flex-item-center">
                                            <i className="fs-20"><PiCheck /></i>
                                            <div className="body2 pl-12">Consultation to discuss accounting solutions</div>
                                        </div>
                                        <div key={`contact_3`} className="item flex-item-center">
                                            <i className="fs-20"><PiCheck /></i>
                                            <div className="body2 pl-12">Needs assessment for tailored solutions</div>
                                        </div>
                                        <div key={`contact_4`} className="item flex-item-center">
                                            <i className="fs-20"><PiCheck /></i>
                                            <div className="body2 pl-12">Presentation of proposed solutions</div>
                                        </div>
                                        <div key={`contact_5`} className="item flex-item-center">
                                            <i className="fs-20"><PiCheck /></i>
                                            <div className="body2 pl-12">Project execution and ongoing support</div>
                                        </div>
                                        <div key={`contact_6`} className="item flex-item-center">
                                            <i className="fs-20"><PiCheck /></i>
                                            <div className="body2 pl-12">Follow-up to evaluate effectiveness and satisfaction</div>
                                        </div>
                                    </div>
                                    <div className="line mt-24"></div>
                                    <div className="flex-item-center mt-24"><i className="fs-20"><PiEnvelope /></i>
                                        <div className="body2 pl-12">info@ndbhakhar.in</div>
                                    </div>
                                    <div className="flex-item-center mt-8"><i className="fs-20"><PiPhoneCall /></i>
                                        <div className="body2 pl-12">90546 84292</div>
                                    </div>
                                    <div className="flex-item-center mt-8"><i className="fs-20"><PiMapPin /></i>
                                        <div className="body2 pl-12">109, Apple square, near Yogi chowk, Surat</div>
                                    </div>
                                </div>
                                <div key={'form'} className="col-12 col-xl-4">
                                    <form className="form-block bora-16 bg-white pt-24 pb-24 pl-28 pr-28 d-flex flex-column gap-20" ref={form} onSubmit={sendEmail}>
                                        <div className="heading5">Schedule a free consultation</div>
                                        <div className="row gy-2">
                                            <div key={'f_name'} className="col-12 col-sm-6">
                                                <label className="caption1 text-on-surface-variant1 pb-8" htmlFor="firstName">First Name *</label>
                                                <input className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="text" id="firstName" placeholder="" name="user_name" required />
                                            </div>
                                            <div key={'s_name'} className="col-12 col-sm-6">
                                                <label className="caption1 text-on-surface-variant1 pb-8" htmlFor="lastName">Last Name</label>
                                                <input className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="text" id="lastName" placeholder="" />
                                            </div>
                                            <div key={'sub'} className="col-12">
                                                <label className="caption1 text-on-surface-variant1 pb-8" htmlFor="phone">Subject *</label>
                                                <input className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="text" id="phone" placeholder="" name="subject" required />
                                            </div>
                                            <div key={'email'} className="col-12">
                                                <label className="caption1 text-on-surface-variant1 pb-8" htmlFor="companyEmail">Email *</label>
                                                <input className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="email" id="companyEmail" placeholder="" name="user_email" required />
                                            </div>
                                            <div key={'msg'} className="col-12">
                                                <label className="caption1 text-on-surface-variant1 pb-8" htmlFor="message">Your message *</label>
                                                <textarea className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline display-block" name="message" rows="3" id="message" placeholder="" required></textarea>
                                            </div>
                                        </div>
                                        <div className="block-button">
                                            <button className="button-blue button-blue-hover w-100" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    </>
  );
}
