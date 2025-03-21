import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';

function SoftSkill() {

  const { dark } = useTheme();

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const { isSideBarVisible, toggleSidebar } = useSidebar(false);


  return (
    <>
      <div className={`h-screen px-5 ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out flex flex-col justify-start items-center gap-2 overflow-y-auto content lg:h-auto lg:px-12 py-5`}>

        <h1 className={`w-full text-2xl ${dark ? "text-black" : "text-white"} font-semibold text-center duration-200 ease-in-out sm:py-5 md:text-3xl lg:text-4xl capitalize`}>Welcome to <span className={`bg-gradient-to-r from-blue-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent`}>Soft Skill Development</span> mini course</h1>
        <p className={`w-full md:w-[70%] text-[12px] md:text-sm text-center ${dark ? "text-black" : "text-white"} mt-4 px-7 duration-200 ease-in-out`}>Throughout the course you will get the knowledge and understanding of various soft skills that are essential in our day to day life and also very much useful for a professional place. </p>

        <hr className={`w-full h-[1px] my-5 bg-gray-600 md:w-[70%]`} />

        <div className={`w-full md:w-[70%] rounded-md py-3 lg:px-5 lg:py-5 px-3 ${dark ? "bg-gray-200" : "bg-zinc-800"} flex flex-col justify-center items-start gap-3`}>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-semibold text-xl`}>What is a soft skill ?</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Soft skills are personal attributes, social abilities, and communication skills that influence how well a person interacts with others. These skills are not job-specific but are essential for workplace success and personal growth. Examples include communication, teamwork, adaptability, leadership, problem-solving, and emotional intelligence.</p>
        </div>

        <div className={`w-full md:w-[70%] mt-3 lg:px-5 lg:py-5 rounded-md py-3 px-3 ${dark ? "bg-gray-200" : "bg-zinc-800"} flex flex-col justify-center items-start gap-3`}>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-semibold text-xl`}>Importance of Soft Skills in Personal & Professional Life</p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm font-semibold underline`}>In Personal Life: </p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> •  Better Relationships</span> – Helps in understanding and connecting with people effectively. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Emotional Intelligence</span>  – Improves self-awareness and empathy.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Conflict Resolution</span>  – Helps in managing disagreements smoothly.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Time Management </span>  – Aids in balancing work and personal life.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Confidence & Self-Motivation</span>  – Encourages personal development and self-improvement.</p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm font-semibold underline`}>In Professional Life: </p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> •  Effective Communication</span> –Essential for teamwork, leadership, and client interactions. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Career Growth</span>  –  Employers prioritize candidates with strong interpersonal skills. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Teamwork & Collaboration</span>  –Helps in working effectively in diverse teams. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Leadership & Decision Making </span>  –Necessary for taking initiative and managing teams. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Adaptability</span>  – Helps in adjusting to new challenges and technologies. </p>

        </div>

        <div className={`w-full md:w-[70%] mt-3 rounded-md py-3 lg:py-5 lg:px-10 px-3 ${dark ? "bg-gray-200" : "bg-zinc-800"} flex flex-col justify-center items-start gap-3`}>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Difference Between Hard Skills and Soft Skills</p>

          <div className={`w-full mt-4 h-auto grid grid-cols-2 justify-items-center`}>
            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-semibold text-sm lg:text-lg`}>Hard Skills</p>
            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-semibold text-sm lg:text-lg`}>Soft Skills</p>
          </div>

          <div className={` duration-200 ease-in-out rounded-md lg:rounded-lg w-full grid grid-cols-2 justify-items-center gap-3`}>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Technical knowledge or expertise
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Personal traits and interpersonal abilities
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Formal education, training, courses
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Experience, social interactions, and practice
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Certifications, tests, degrees
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Observations, feedback, real-life situations
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Programming, data analysis, accounting
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Communication, teamwork, leadership
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Specific to a job or profession
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Applicable in all fields and roles
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Can become outdated with technology
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Remains relevant throughout life
            </div>
          </div>

        </div>

        <div className={`w-full md:w-[70%] mt-3 rounded-md py-3 lg:py-5 lg:px-10 px-3 ${dark ? "bg-gray-200" : "bg-zinc-800"} flex flex-col justify-center items-start gap-3`}>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Verbal & Non-Verbal Communication</p>

          <div className={`w-full h-auto mt-4 grid grid-cols-2 justify-items-center`}>
            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-semibold text-sm lg:text-lg`}>Verbal</p>
            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-semibold text-sm lg:text-lg`}>Non-Verbal</p>
          </div>

          <div className={` duration-200 ease-in-out rounded-md lg:rounded-lg w-full grid grid-cols-2 justify-items-center gap-3`}>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Communication using words, spoken or written
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Communication without words, using body language, facial expressions, gestures, etc.
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Speech, writing, conversations, presentations
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Facial expressions, posture, gestures, tone of voice, eye contact
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Explicit and direct
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Can be implicit and open to interpretation
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Strongly depends on choice of words and tone
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Enhances or contradicts verbal messages
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              Meetings, phone calls, emails, public speaking
            </div>
            <div className={`border-[1.2px] flex text-center justify-center items-center ${dark ? " border-black text-black" : " border-white text-white"} text-[10px] px-4 md:text-sm duration-200 ease-in-out w-full h-24`}>
              miling, nodding, handshakes, crossed arms, eye contact
            </div>
          </div>

        </div>

        <div className={`w-full md:w-[70%] mt-3 rounded-md py-3 px-3 lg:px-5 lg:py-5 ${dark ? "bg-gray-200" : "bg-zinc-800"} flex flex-col justify-center items-start gap-3`}>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Active Listening Techniques</p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Active listening is the ability to fully concentrate on the speaker, understand their message, respond thoughtfully, and remember what was said. Here are some key techniques:</p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Maintain Eye Contact </span> – Shows attentiveness and engagement </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Use Non-Verbal Cues </span>  – Nodding, leaning in, and facial expressions indicate active participation.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Avoid Interrupting </span>  –  Let the speaker finish before responding. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Ask Clarifying Questions  </span>  – Helps ensure understanding (e.g., "Can you explain that further?"). </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Provide Feedback </span>  – Use phrases like “I see what you mean” to show understanding. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Eliminate Distractions </span>  – Avoid checking your phone or looking away while someone is speaking. </p>

        </div>

        <div className={`w-full md:w-[70%] mt-3 rounded-md py-3 px-3 lg:px-5 lg:py-5 ${dark ? "bg-gray-200" : "bg-zinc-800"} flex flex-col justify-center items-start gap-3`}>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Public Speaking Tips</p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Public speaking can be nerve-wracking, but with practice and the right techniques, anyone can improve.</p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Know Your Audience </span> – Tailor your speech to their interests and understanding level. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Structure Your Speech </span>  – Have a clear introduction, body, and conclusion. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Practice, Practice, Practice </span>  –  Rehearse in front of a mirror or record yourself. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Use Confident Body Language </span>  – Stand tall, use gestures, and maintain eye contact. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Speak Clearly & at a Steady Pace </span>  – Avoid rushing; use pauses for emphasis. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Engage the Audience </span>  – Ask questions, share stories, and use humor if appropriate.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Manage Nervousness  </span>  –  Take deep breaths, focus on your message, and visualize success.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Handle Q&A Gracefully </span>  – Be prepared for questions and answer confidently. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • End Strongly </span>  –  Leave a lasting impression with a powerful closing statement.</p>

        </div>

        <div className={`w-full md:w-[70%] mt-3 rounded-md py-3 px-3 lg:px-5 lg:py-5 ${dark ? "bg-gray-200" : "bg-zinc-800"} flex flex-col justify-center items-start gap-3`}>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Body Language and Its Impact</p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Body language plays a crucial role in communication, often conveying more than words. It affects how people perceive confidence, trustworthiness, and engagement.</p>
        </div>

        <div className={`w-full md:w-[70%] mt-3 rounded-md py-3 px-3 lg:px-5 lg:py-5 ${dark ? "bg-gray-200" : "bg-zinc-800"} flex flex-col justify-center items-start gap-3`}>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Do’s and Don’ts of Body Language While Speaking in Public</p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Public speaking can be nerve-wracking, but with practice and the right techniques, anyone can improve.</p>

          <p className={`${dark ? "text-black" : "text-white"} mt-5 duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ✅ Maintain Eye Contact </span> – Connect with your audience by looking at different sections of the room.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ✅ Stand with Confidence </span>  – Keep a straight posture with shoulders relaxed.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ✅ Use Natural Hand Gestures </span>  –  Move your hands to emphasize points but keep it natural. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ✅ Smile When Appropriate </span>  – A friendly expression makes you more approachable and engaging.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ✅ Use Open Gestures </span>  –  Keep arms open to appear welcoming and confident.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ✅ Move with Purpose </span>  – Walk a little to engage the audience, but don’t pace aimlessly. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ✅ Face the Audience   </span>  –  Keep your body directed towards them instead of turning away.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ✅ Use Pauses Effectively </span>  – A brief pause after important points adds emphasis. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ✅ Match Your Expressions to Your Words </span>  –  If talking about something exciting, look enthusiastic! </p>

          <p className={`${dark ? "text-black" : "text-white"} mt-6 duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ❌ Avoid Crossing Your Arms </span> – It can make you look closed off or defensive. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ❌ Don’t Fidget  </span>  – Avoid playing with your hair, pen, or clothing, as it distracts the audience.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ❌ Don’t Slouch </span>  –  Stand tall to project confidence and authority. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ❌ Avoid Looking at the Floor or Ceiling </span>  – It makes you seem disengaged or unprepared.  </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ❌ Don’t Keep Hands in Your Pockets </span>  – This can make you look nervous or uninterested. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ❌ Avoid Overusing Hand Gestures </span>  – Excessive movement can be distracting. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ❌ Don’t Lean on the Podium or Wall  </span>  –   It gives an impression of laziness or nervousness. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ❌ Avoid Sudden or Jerky Movements  </span>  –Move smoothly to maintain composure.  </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ❌ Don’t Turn Your Back on the Audience  </span>  – Always face them to keep engagement. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> ❌ Don’t Ignore Facial Expressions  </span>  –   A blank or tense face makes you seem uninterested.  </p>

        </div>

        <div className={`w-full md:w-[70%] mt-3 rounded-md py-3 px-3 lg:px-5 lg:py-5 ${dark ? "bg-gray-200" : "bg-zinc-800"} flex flex-col justify-center items-start gap-3`}>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Developing a Positive Attitude </p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Think of your attitude like the way you see the world through a pair of glasses. If your glasses are dirty and scratched, everything will look dull, frustrating, and negative. But if you clean them, suddenly the world appears brighter, clearer, and more inviting. A positive attitude is like keeping your glasses clean—it helps you see opportunities instead of obstacles.</p><br />
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>In real life, imagine two people stuck in traffic. One is honking, frustrated, and complaining about how late they will be. The other takes a deep breath, puts on their favorite music, and thinks, At least I have some time to relax before reaching work. Both are in the same situation, but their attitudes change their experience completely. </p><br />
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Developing a positive attitude doesn’t mean ignoring problems or pretending everything is perfect. It means choosing to respond in a way that helps you move forward instead of feeling stuck. It’s about training your mind to focus on solutions, learning from failures, and surrounding yourself with things that uplift you. Just like a muscle, the more you practice positivity, the stronger it becomes. </p><br />
        </div>

        <div className={`w-full md:w-[70%] mt-3 rounded-md py-3 px-3 lg:px-5 lg:py-5 ${dark ? "bg-gray-200" : "bg-zinc-800"} flex flex-col justify-center items-start gap-3`}>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Emotional Intelligence & Self-Awareness </p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Emotional intelligence (EQ) is like driving a car smoothly. If you’re not aware of how the car responds—when to brake, when to accelerate—you might crash or get stuck. Similarly, if you don’t understand your emotions, they can control you instead of the other way around. </p><br />
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Self-awareness is the foundation of emotional intelligence. It means recognizing your feelings, understanding what triggers them, and managing your reactions. Imagine you had a tough day, and a friend makes a small joke. If you’re not self-aware, you might snap at them, damaging your relationship. But if you pause and recognize, I’m feeling frustrated, and it’s not their fault, you can respond more calmly.  </p><br />
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Emotional intelligence helps in handling conflicts, staying calm under pressure, and connecting with people better. The more you understand yourself, the better you can navigate life’s ups and downs.  </p><br />
        </div>

        <div className={`w-full md:w-[70%] mt-3 rounded-md py-3 px-3 lg:px-5 lg:py-5 ${dark ? "bg-gray-200" : "bg-zinc-800"} flex flex-col justify-center items-start gap-3`}>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>The Art of Storytelling & Influence </p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Storytelling isn’t just for books and movies—it’s how we connect, inspire, and persuade. Think about the most engaging teachers, leaders, or even friends. They don’t just give facts; they tell stories that make you feel something. </p><br />
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Imagine you’re trying to convince your friend to start exercising. If you just list facts—"It’s good for your health, it prevents diseases"—they might not care. But if you say, "Last year, I could barely walk up the stairs without getting tired. I started working out just a little every day, and now I feel stronger and more confident than ever!"—that’s a story. It makes them feel inspired.  </p><br />
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}>Great storytelling has three key elements:  </p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Emotion </span> – People remember feelings, not just words. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • Relatability  </span> –  A good story feels personal and real. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] md:text-sm`}> <span> • A Clear Message </span> – The takeaway should be easy to understand. </p>

        </div>

        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out w-full md:w-[70%] text-sm lg:text-lg text-center mt-10`}>More content to be added soon. </p><br />

      </div>
    </>
  )
}

export default SoftSkill
