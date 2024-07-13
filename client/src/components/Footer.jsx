import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsWhatsapp, BsTwitterX, BsInstagram} from 'react-icons/bs'
 
export default function FooterCom() {
  return (
    <Footer container className='border'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justifty-between sm:flex md:grid-cols-1 mx-auto p-4'>
                <div className='mt-5'>
                    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-black'>
                        <span className='px-2 py-1 bg-gradient-to-r from-black rounded-lg text-white dark:text-black  dark:from-white'>Sterkspruit</span>Blog
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='About'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='https://iamsihlegqeza.github.io/portfolio/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Sihle Gqeza
                        </Footer.Link>
                        <Footer.Link
                            href='/about'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Sterkspruit Blog
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow Us'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Facebook
                            </Footer.Link>
                            <Footer.Link
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                WhatsApp
                            </Footer.Link>
                            <Footer.Link
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Instagram
                            </Footer.Link>
                            <Footer.Link
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                X
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Terms &amp; Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright 
                    href='#' 
                    by='Sterkspruit blog' 
                    year={new Date().getFullYear()}/>
                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon href='#' icon={BsFacebook}/>
                        <Footer.Icon href='#' icon={BsWhatsapp}/>
                        <Footer.Icon href='#' icon={BsInstagram}/>
                        <Footer.Icon href='#' icon={BsTwitterX}/>
                    </div>
                </div>
        </div>
    </Footer> 
  );
}
