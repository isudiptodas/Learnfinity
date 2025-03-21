import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';

function DigitalMarketing() {

  const { dark } = useTheme();

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const { isSideBarVisible, toggleSidebar } = useSidebar(false);


  return (
    <>
      <div className={`h-screen px-5 ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out flex flex-col justify-start items-center gap-2 overflow-y-auto content lg:h-auto py-5`}>
        <div className={`w-full md:w-[90%] border-2 rounded-xl pl-4 pr-3 mb-5 py-4 ${dark ? "border-black" : "border-white"} duration-200 ease-in-out h-auto`}>
          <h1 className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-5xl leading-[60px] w-full md:w-[90%] md:text-6xl md:mt-10 text-start font-Josefin`}>Elevate your skills in <span className='bg-gradient-to-r from-emerald-300 via-emerald-800 to-emerald-500 bg-clip-text text-transparent duration-200 ease-in-out'>digital marketing</span> with <span className={`bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent`}>learnfinity</span></h1>
        </div>
        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm w-full md:w-[90%] text-start`}>Learning a new skill or subject requires a lot of patiece and dedication and yet digital marketing is one of them. In this domain there are a lot of important topics to cover but as a beginner you may be stuck or feel confused and that's why we are making this journey easy for you. </p> <br />
        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm w-full md:w-[90%] text-start`}>This entire page is a step by step ladder for your digital marketing career and covers all the essential topics that are necessary for you to start a career in this trending domain.</p> <br />

        <hr className={`w-full h-[1px] bg-gray-600 my-5`} />

        <h1 className={`font-bold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl text-center`}>Okk, so let's start from the beginning.</h1>
        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-center`}>Not very beginning but from a little less back in time.</p>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>
          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>What exactly is digital marketing ?</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}>Digital marketing encompasses all marketing efforts that utilize electronic devices or the internet. Businesses leverage digital channels such as search engines, social media, email, and websites to connect with current and prospective customers. Unlike traditional marketing methods, digital marketing allows for more targeted, measurable, and interactive approaches.</p>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Why is digital marketing important ?</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}>1. Global Reach: Digital marketing enables businesses to reach a global audience in a cost-effective and measurable way.  <br />
            2. Targeted Advertising: Marketers can target specific demographics, interests, and behaviors, ensuring that marketing efforts reach the most relevant audience.  <br />
            3. Measurable Results: Tools like Google Analytics provide detailed insights into how campaigns are performing, allowing for data-driven decisions.  <br />
            4. Enhanced Engagement: Digital platforms facilitate direct interaction with consumers, fostering relationships and building brand loyalty.</p>
        </div>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Digital Marketing Strategy Planning</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> A well-structured digital marketing strategy is crucial for achieving business goals. Here's a step-by-step guide:  <br /> <br />

            1. Define Your Objectives: Determine what you aim to achieve, such as increasing brand awareness, generating leads, or boosting sales. <br />
            2. Understand Your Target Audience: Research demographics, interests, and online behaviors to tailor your marketing efforts effectively. <br />
            3. Choose Appropriate Digital Channels: Select platforms that align with your audience's preferences, such as social media, email, or search engines.<br />
            4. Develop a Content Strategy: Create valuable and relevant content that resonates with your audience and supports your objectives.  <br />
            5. Implement and Monitor Campaigns: Launch your campaigns and use analytics tools to monitor performance, making adjustments as needed.
          </p>
        </div>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>SEO (Search Engine Optimization)</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> SEO involves optimizing your website to rank higher in search engine results pages (SERPs), thereby increasing organic (non-paid) traffic. <br />

            Key Components of SEO : <br />

            1. On-Page SEO: Optimizing individual pages, including content, meta tags, and images.<br />
            2. Off-Page SEO: Building backlinks from reputable sites to enhance authority. <br />
            3. Technical SEO: Improving site speed, mobile-friendliness, and ensuring proper indexing. <br />

          </p>
          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Black Hat SEO</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}>These are unethical practices aimed at manipulating search engine algorithms to achieve higher rankings. Techniques include keyword stuffing, cloaking, and using private link networks. While they may offer short-term gains, they can lead to severe penalties from search engines.
          </p>
          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>White Hat SEO</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> This approach adheres to search engine guidelines and focuses on providing value to users. Techniques include creating high-quality content, optimizing for user experience, and earning legitimate backlinks. This method ensures sustainable, long-term growth.
          </p>
        </div>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>E-Commerce SEO</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> Ecommerce SEO involves optimizing an online store to ensure products appear prominently in search engine results. Key strategies include:​ <br />

            1. Keyword Research: Identifying terms potential customers use to search for products.<br />
            2. Product Page Optimization: Crafting unique product descriptions, optimizing images, and using clear calls-to-action.<br />
            3. Site Architecture: Ensuring a logical structure that enhances user experience and crawlability. <br />
            4. Technical SEO: Improving site speed, mobile responsiveness, and securing the site with HTTPS.<br />
          </p>
        </div>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>ORM (Online Reputation Management)</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> ORM focuses on influencing and controlling an individual's or brand's reputation online. It involves monitoring mentions, addressing negative feedback, and promoting positive content. Effective ORM helps build trust and credibility with your audience. <br /> Key strategies : <br />

            1. Monitor Online Mentions: Use tools to track brand mentions across the web.<br />
            2. Engage with Your Audience: Respond promptly to reviews and comments, addressing concerns professionally. <br />
            3. Promote Positive Content: Encourage satisfied customers to leave positive reviews and share testimonials. <br />
          </p>
        </div>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Search Engine Marketing (SEM)</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> SEM involves paid advertising strategies to increase visibility on search engines. Google Ads is a popular platform where advertisers bid on keywords to display ads to users searching for those terms.<br /> Key components : <br />

            1. Keyword Research: Identifying relevant keywords with high search volume and low competition. <br />
            2. Ad Creation: Crafting compelling ad copy that encourages clicks. <br />
            3. Bidding Strategy: Determining how much you're willing to pay for each click or impression.  <br />
            4. Landing Page Optimization: Ensuring the page users land on after clicking an ad is relevant and encourages conversions. <br />
          </p>
        </div>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Video ADS</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> Video advertising is a form of digital marketing where businesses use video content to promote their products or services. Video ads can be placed on platforms like YouTube, Facebook, Instagram, and TikTok.<br /> Types of Video Ads : <br />

            1. In-Stream Ads: Play before, during, or after another video (YouTube ads). <br />
            2. Out-Stream Ads: Appear outside video content, such as on news websites. <br />
            3. Social Media Video Ads: Short promotional videos used on platforms like Facebook, Instagram, or TikTok. <br />
            4. Shoppable Video Ads: Users can click and purchase products directly from the video. <br />
          </p>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Why Video Ads Work ?</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}>
            1. More engaging than static images. <br />
            2. Increases brand awareness and recall.<br />
            3. Improves conversion rates, especially for eCommerce businesses. <br />
          </p>
        </div>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Web Analytics</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> Web analytics refers to collecting, analyzing, and interpreting website data to optimize marketing efforts.<br /> Tools for Web Analytics : <br />

            1. Google Analytics – Tracks website visitors, conversions, and user behavior. <br />
            2. Facebook Pixel – Helps in tracking Facebook ad performance. <br />
            3. Hotjar – Provides heatmaps and session recordings to analyze user interaction. <br />
          </p>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Why Web Analytics Matter ?</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}>
            1. Helps in understanding audience demographics. <br />
            2. Identifies which marketing channels bring the most traffic.<br />
            3. Helps improve conversion rates by analyzing user behavior. <br />
          </p>
        </div>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Inbound Marketing</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> Inbound marketing focuses on attracting customers organically rather than using paid advertising.<br /> Methods of Inbound Marketing : <br />

            1. Blogging & SEO <br />
            2. Email marketing <br />
            3. Social media engagement <br />
            4. Webinars & live events <br />
          </p>
        </div>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Conversion Rate Optimization (CRO)</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> CRO involves improving a website to increase the percentage of visitors who take the desired action (purchase, sign up, etc.). <br />Ways to Improve CRO : <br />

            1. Optimize landing pages.<br />
            2. Use clear calls-to-action (CTAs). <br />
            3. Reduce page load time. <br />
            4. A/B test different designs. <br />
          </p>
        </div>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Lead Generation</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> Lead generation is the process of attracting and converting potential customers. <br />Ways to Generate Leads : <br />

            1. Offer free content (ebooks, webinars) in exchange for emails.<br />
            2. Run paid ads with lead forms.<br />
            3. Use social media engagement. <br />
            4. Optimize website for lead capture (pop-ups, chatbots). <br />
          </p>
        </div>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Affiliate Marketing</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> Affiliate marketing involves promoting products and earning a commission for sales generated through referral links. <br />How It Works ? <br />

            1. Join an affiliate program (Amazon, ClickBank, etc.). <br />
            2. Promote products through blogs, YouTube, or social media.<br />
            3. Earn commissions for every successful referral. <br />
          </p>
        </div>

        <div className={`w-full lg:w-[70%] rounded-md h-auto py-3 px-5 flex flex-col justify-start items-start gap-2 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out mt-4`}>

          <h1 className={`w-full text-xl font-semibold ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-start`}>Media Planning and Buying</h1>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] text-start`}> Media planning involves choosing the best media channels for advertising (TV, digital, print, etc.).<br />Key steps : <br />

            1. Define campaign goals. <br />
            2. Choose platforms based on audience preferences. <br />
            3. Allocate budget effectively. <br />
            4. Track ad performance and optimize. <br />
          </p>
        </div>

        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm my-5 text-start`}> More content to be added soon.</p>

      </div>
    </>
  )
}

export default DigitalMarketing
