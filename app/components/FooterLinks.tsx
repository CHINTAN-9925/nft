import React from 'react';
const FooterSection: React.FC = () => {
    const navigationData = [
        { label: 'Home', font: 'Poppins', color: 'white', x: 0, y: 0 },
        { label: 'Company', font: 'Poppins', color: 'white', x: 162, y: 0 },
        { label: 'Contact', font: 'Poppins', color: 'white', x: 311, y: 0 },
        { label: 'Features', font: 'Poppins', color: 'sky-500', x: 0, y: 43 },
        { label: 'Pricing', font: 'Poppins', color: 'sky-500', x: 0, y: 79 },
        { label: 'Case studies', font: 'Poppins', color: 'sky-500', x: 0, y: 115 },
        { label: 'Reviews', font: 'Poppins', color: 'sky-500', x: 0, y: 151 },
        { label: 'Updates', font: 'Poppins', color: 'sky-500', x: 0, y: 187 },
        { label: 'About', font: 'Poppins', color: 'sky-500', x: 162, y: 43 },
        { label: 'Contact us', font: 'DM Sans', color: 'sky-500', x: 162, y: 79 },
        { label: 'Careers', font: 'DM Sans', color: 'sky-500', x: 162, y: 115 },
        { label: 'Culture', font: 'DM Sans', color: 'sky-500', x: 162, y: 151 },
        { label: 'Blog', font: 'DM Sans', color: 'sky-500', x: 162, y: 187 },
        { label: 'Getting started', font: 'Poppins', color: 'sky-500', x: 311, y: 43 },
        { label: 'Help center', font: 'DM Sans', color: 'sky-500', x: 311, y: 79 },
        { label: 'Server status', font: 'Poppins', color: 'sky-500', x: 311, y: 115 },
        { label: 'Report a bug', font: 'Poppins', color: 'sky-500', x: 311, y: 151 },
        { label: 'Chat support', font: 'Poppins', color: 'sky-500', x: 311, y: 187 },
    ];

    return (
        
        <div className="w-full md:w-[417px] h-[205px] relative mt-[43px] ml-[48px] md:ml-12 md:order-2">
            {navigationData.map((navItem, index) => (
                <div
                    key={index}
                    style={{
                        top: `calc(${navItem.y / 205 * 100}% - 0.5rem)`,
                        left: `calc(${navItem.x / 417 * 100}% - 0.5rem)`
                    }}
                    className="absolute text-center text-base font-medium leading-[18px] whitespace-nowrap"
                >
                    <span
                        className={`text-${navItem.color} font-${navItem.font}`}
                    >
                        {navItem.label}
                    </span>
                </div>
            ))}
        </div>

    );
};

export default FooterSection;
