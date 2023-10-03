import React from 'react';
import FooterLinks from './FooterLinks';
import Contact from './Contact';
import CopyRight from './CopyRight';

const Footer: React.FC = () => {
    
    return (
        <div className=" h-[402px] bg-slate-950">
            <div className="flex mt-[43px] ">

                <CopyRight/>

                <FooterLinks/>
              
                <Contact/>

            </div>
        </div>
    );
}

export default Footer;

