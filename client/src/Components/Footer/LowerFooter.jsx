import React from 'react'

const footerContents = [
  {
    title: 'Amazon Music',
    caption: 'Stream millions of songs'
  },
  {
    title: 'Amazon Advertising',
    caption: 'Find, attract, and engage customers'
  },
  {
    title: 'Amazon Drive',
    caption: 'Cloud storage from Amazon'
  },
  {
    title: '6pm',
    caption: 'Score deals on fashion brands'
  },
  {
    title: 'AbeBooks',
    caption: 'Books, art & collectibles'
  },
  {
    title: 'ACX',
    caption: 'Audiobook Publishing Made Easy'
  },
  {
    title: 'Sell on Amazon',
    caption: 'Start a Selling Account'
  },
  {
    title: 'Amazon Business',
    caption: 'Everything For Your Business'
  },
  {
    title: 'AmazonGlobal',
    caption: 'Ship Orders Internationally'
  },
  {
    title: 'Home Services',
    caption: 'Experienced Pros appiness Guarantee'
  },
  {
    title: 'Amazon Ignite',
    caption: 'Sell your original Digital Educational Resources'
  },
  {
    title: 'Amazon Web Services',
    caption: 'Scalable Cloud Computing Services'
  },
  {
    title: 'Audible',
    caption: 'Listen to Books & Original Audio Performances'
  },
  {
    title: 'Book Depository',
    caption: 'Books With Free Delivery Worldwide'
  },
  {
    title: 'Box Office Mojo',
    caption: 'Find Movie Box Office Data'
  },
  {
    title: 'ComiXology',
    caption: 'Thousands of Digital Comics'
  },
  {
    title: 'DPReview',
    caption: 'Digital Photography'
  },
  {
    title: 'Fabric',
    caption: 'Sewing, Quilting & Knitting'
  },
  {
    title: 'Goodreads',
    caption: 'Book reviews & recommendations'
  },
  {
    title: 'IMDb',
    caption: 'Movies, TV & Celebrities'
  },
  {
    title: 'IMDbPro',
    caption: 'Get Info Entertainment Professionals Need'
  },
  {
    title: 'Kindle Direct Publishing',
    caption: 'Indie Digital & Print Publishing Made Easy'
  },
  {
    title: 'Prime Video Direct',
    caption: 'Video Distribution Made Easy'
  },
  {
    title: 'Shopbop',
    caption: 'Designer Fashion Brands'
  },
  {
    title: 'Woot!',
    caption: 'Deals and Shenanigans'
  },
  {
    title: 'Zappos',
    caption: 'Shoes & Clothing'
  },
  {
    title: 'Ring',
    caption: 'Smart Home Security Systems'
  },
  {
    title: 'eero WiFi',
    caption: 'Stream 4K Video in Every Room'
  },
  {
    title: 'Blink',
    caption: 'Smart Security for Every Home'
  },
  {
    title: 'Neighbors App',
    caption: 'Real-Time Crime & Safety Alerts'
  },
  {
    title: 'Amazon Subscription Boxes',
    caption: 'Top subscription boxes - right to your doo'
  },
  {
    title: 'PillPack',
    caption: 'Pharmacy Simplified'
  },
]

const LowerFooter = () => {
  return (
    <>
      <div className="w-full h-[4rem] bg-amazonLight border-t border-slate-500 hover:opacity-90 text-white text-sm hidden min-[768px]:flex justify-center items-center py-4">
        <img className="w-[5rem] h-[2rem]" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
        <h4 className='border border-slate-300 px-2 text-base ml-3'>English</h4>
        <div className="border border-slate-300 px-2 text-base ml-3">🇮🇳 India</div>
      </div>

      <div className="w-full bg-amazonBlue py-6 hidden md:block">
        <div className="max-w-4xl mx-auto">
          <div className=" grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:grid-cols-4 mt-8">
            {footerContents.map((content, id) => (
              <div className="flex flex-col justify-center items-start hover:underline decoration-white cursor-pointer" key={id}>
                <h5 className="text-white text-sm">{content.title}</h5>
                <span className="text-lightText text-sm">{content.caption}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="w-full h-[4rem] bg-amazonBlue text-white text-sm flex justify-center items-center px-6 text-center">
        <div className="text-sm text-lightText">
          <div>
            <span>Conditions of Use</span>
            <span className="ml-3">Privacy Notice</span>
            <span className="ml-3">Your Ads Privacy Choices</span>
          </div>
          <div className=" text-center">
            © 1996-2022, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </>
  )
}

export default LowerFooter;