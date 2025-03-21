import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";

export default function SpaceTechnology() {

  const { dark } = useTheme();

  return (
    <>
      <div className={`w-full px-5 py-5 h-screen overflow-y-auto content lg:h-auto ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out flex flex-col justify-start items-center gap-3`}>

        <div className={`w-full md:w-[70%] h-auto py-3 px-4 bg-gradient-to-r from-black via-indigo-600 to-blue-800 rounded-md lg:rounded-lg flex flex-col justify-center items-start gap-2`}>
          <h1 className={`text-white font-Titillium text-4xl md:text-6xl`}>Space Technology</h1>
          <p className={`text-[10px] md:text-sm md:my-4 text-white mt-3`}>Space technology is a vast and fascinating field that encompasses the exploration, development, and utilization of space. It involves the design, development, and operation of spacecraft, satellites, and other space-related systems. Space technology has numerous applications in various fields, including telecommunications, navigation, weather forecasting, and scientific research.</p>
          <p className={`text-[10px] md:text-sm md:my-4 text-white mt-3`}>The universe is full of mysteries waiting to be unraveled. Keep learning, and you'll uncover the secrets of the cosmos.</p>
        </div>

        <div className={`w-full md:w-[70%] h-auto mt-5 rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>The origin of the universe</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>The most widely accepted theory of the universe's origin is the Big Bang Theory. According to this theory, the universe began as an infinitely hot and dense point around 13.8 billion years ago. This singularity expanded rapidly, and as it did, it cooled and formed subatomic particles, atoms, and eventually the stars and galaxies we see today.</p>
        </div>


        <div className={`w-full md:w-[70%] h-auto mt-5 rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>The structure of the universe</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>The universe is composed of various structures, including:</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Stars :</span> Stars are massive, luminous balls of gas that are held together by their own gravity. They are the building blocks of galaxies and come in a variety of sizes and colors. </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Galaxies :</span> Galaxies are massive, gravitationally bound systems consisting of stars, stellar remnants, interstellar gas, dust, and dark matter. Our solar system is located in the Milky Way galaxy.  </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Universes :</span> The universe is the totality of all existence, encompassing all matter, energy, space, and time. It is estimated to contain over 100 billion galaxies.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Multiverses :</span> The multiverse hypothesis proposes that there may be an infinite number of universes beyond our own, each with its own unique laws of physics and properties.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Black Hole :</span> Black holes are regions in space where the gravitational pull is so strong that nothing, including light, can escape. They are formed when a massive star collapses in on itself.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Planets :</span> Planets are large, rocky or gaseous bodies that orbit around stars. Our solar system consists of eight planets: Mercury, Mars, Venus, Earth, Neptune, Uranus, Saturn, and Jupiter.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Asteroids :</span> Asteroids are small, rocky objects that orbit the Sun. They are remnants from the early days of our solar system.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Comets :</span> Comets are icy bodies that release gas and dust as they approach the Sun. They are thought to originate from the outer reaches of our solar system.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Meteoroids :</span> Meteoroids are small rocks or pieces of debris that enter a planet's atmosphere, often burning up and producing a bright streak of light, commonly known as a shooting star.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Kuiper Belt and Oort Cloud :</span> The Kuiper Belt and Oort Cloud are regions of our solar system that contain many small, icy bodies and other celestial objects.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• The Cosmological Principle :</span> The cosmological principle states that the universe is homogeneous and isotropic on large scales, meaning that it looks the same in all directions and has the same properties everywhere.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• The Hubble Constant :</span>The Hubble constant is a measure of the rate at which the universe is expanding.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Dark Matter & Dark Energy :</span> Dark matter and dark energy are mysterious components that make up about 95% of the universe's mass-energy budget, yet their nature remains unknown.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• The Big Bang Theory :</span> The Big Bang Theory is the leading explanation for the origin and evolution of the universe.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• The Steady State Theory :</span>The Steady State Theory proposes that the universe has always existed in its current form, with no beginning or end.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• The Inflationary Theory :</span> The Inflationary Theory suggests that the universe underwent a rapid expansion in the early stages of its evolution.          </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• The String Theory :</span> The String Theory proposes that the fundamental building blocks of the universe are one-dimensional strings rather than point-like particles.          </p>

        </div>

        <hr className={`w-full md:w-[70%] h-[1px] my-5 bg-gray-500`} />

        <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out my-2 md:text-sm text-[12px]`}>Now's we should start our space tech exploration</p>


        <div className={`w-full md:w-[70%] h-auto rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>What exactly is Space Technology</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Space technology is the application of science and engineering to design, build, and operate systems and equipment for exploring, operating, and utilizing outer space. This field encompasses satellites, spacecraft, launch vehicles, space stations, and the technologies that support their operation. Its scope includes research, design, production, mission operations, and even end‑of‑life management.</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out mt-2 text-[12px]`}>Example: The design and operation of satellites for global communications are a direct application of space technology that touches everyday life (e.g., GPS navigation and satellite TV).</p>
        </div>

        <div className={`w-full md:w-[70%] mt-2 h-auto rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>A Brief History</p>

          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Space technology began with early rocketry and evolved dramatically during the mid‑20th century with the launch of Sputnik in 1957 and the Apollo missions that landed humans on the Moon. The “Space Race” spurred rapid innovation and continues today with both governmental and commercial entities driving advancements.</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Space technology has a vast range of applications:</p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Communications :</span> Satellites enable global telephone, television, and Internet services.    </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Navigation :</span>  Global Positioning System (GPS) satellites help in aviation, shipping, and everyday navigation. </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Earth Observation :</span>  Weather forecasting, environmental monitoring, and disaster management are powered by Earth observation satellites.  </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Scientific Exploration :</span> Probes and telescopes (like Hubble and James Webb) expand our understanding of the universe. </p>
          <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Defense & Security :</span> Space-based systems support national security through surveillance and early warning systems. </p>
        </div>

        <div className={`w-full mt-2 md:w-[70%] h-auto rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Rocket Propulsion and Space Launch Systems</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Rocket propulsion is governed by Newton’s Third Law—every action has an equal and opposite reaction. In rockets, the rapid expulsion of mass (propellant) generates thrust to propel the vehicle upward. The Tsiolkovsky rocket equation relates the change in velocity to the mass of fuel and the exhaust velocity.</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Example: The Saturn V rocket, which propelled Apollo missions, demonstrates how high‑energy chemical reactions generate the massive thrust needed to overcome Earth’s gravity.</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Types of Propulsion :</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Chemical Propulsion :</span> Uses combustion of propellants (liquid, solid, or hybrid) to produce thrust. Liquid-fueled rockets (like the SpaceX Falcon 9) allow throttling and engine restart; solid rockets offer simplicity and reliability.  Example: The Falcon 9’s first stage uses liquid oxygen and RP-1 kerosene, achieving high thrust and reusability. </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Electric Propulsion :</span> Uses electrical energy to accelerate ions (ion thrusters, Hall-effect thrusters). They provide high specific impulse (fuel efficiency) but low thrust, making them suitable for long-duration missions. Example: NASA’s Dawn spacecraft used ion propulsion to travel between the asteroids Vesta and Ceres.</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Nuclear Propulsion (Emerging) :</span> Concepts like nuclear thermal or nuclear electric propulsion promise higher efficiency and faster interplanetary travel, though they are still under research.  </p>
        </div>

        <div className={`w-full mt-2 md:w-[70%] h-auto rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Launch Vehicles and System Architecture</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Launch vehicles can be single-stage or multi-stage, expendable or reusable. Multi-stage designs allow shedding weight as fuel is consumed, which improves efficiency. Reusability (as seen in SpaceX’s Falcon 9) dramatically reduces costs.</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Example: The Space Launch System (SLS) is designed to be a heavy-lift vehicle for deep-space exploration, while SpaceX’s Starship aims for full reusability to enable affordable Mars missions. </p>
        </div>

        <div className={`w-full mt-2 md:w-[70%] h-auto rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Satellite Technology</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Satellites are man-made objects placed into orbit to perform specific functions—ranging from communications and navigation to Earth observation and scientific research. Satellite technology covers their design, launch, on-orbit operation, and eventual decommissioning.</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Types of Satellites :</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Communications Satellites :</span> Relay radio signals for TV, internet, and phone services. Example: The Intelsat fleet connects continents via geostationary orbit. </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Navigation Satellites :</span> Provide global positioning data (GPS, Galileo, GLONASS). Example: GPS satellites enable precise location tracking worldwide.</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Earth Observation Satellites :</span>  Monitor weather, environmental changes, and natural disasters. Example: NOAA weather satellites are critical for forecasting storms.</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Scientific/Research Satellites :</span> Study space, the Earth’s atmosphere, or astrophysical phenomena. Example: The Hubble Space Telescope has revolutionized astronomy with its deep-space images. </p>
         
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Subsystems of a Satellites :</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Power Systems :</span> Typically solar panels and batteries. </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Attitude Control Systems :</span> Maintain the satellite’s orientation using gyroscopes, reaction wheels, or thrusters.</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Communication Systems :</span> Transmit and receive data with ground stations. </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Propulsion Systems :</span> Adjust or maintain orbit, especially for satellites in low Earth orbit (LEO). </p>
       
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Orbital Mechanics and Types of Orbits : </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Low Earth Orbit (LEO) :</span> Used for Earth observation and the ISS (International Space Station). </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Medium Earth Orbit (MEO) :</span> Common for navigation satellites.</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Geostationary Orbit (GEO) :</span> Ideal for communications satellites because they remain fixed relative to Earth. </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Polar and Sun-Synchronous Orbits :</span> Useful for environmental monitoring. </p>
       
        </div>

        <div className={`w-full mt-2 md:w-[70%] h-auto rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Space Missions & Exploration</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Manned Missions :</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Human space exploration involves sending astronauts into space. Manned missions have evolved from early suborbital flights (e.g., Mercury’s Freedom 7) to long-duration stays aboard the International Space Station (ISS) and plans for lunar return and Mars colonization (Artemis program). Example: The Apollo missions not only landed humans on the Moon but also demonstrated advanced life support and navigation systems critical for human survival in space.</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Unmanned Missions and Robotic Exploration :</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Uncrewed missions use robotic spacecraft to explore planets, moons, asteroids, and beyond. These missions are generally less costly and can operate in environments that are too hostile for human astronauts. Example: NASA’s Mars rovers (Curiosity, Perseverance) autonomously navigate the Martian surface and conduct scientific experiments. </p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Interplanetary  Missions :</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Deep space probes (Voyager, New Horizons) have ventured beyond the Solar System, providing valuable data about the outer planets and interstellar space.</p>
          
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Mission Design and Challenges :</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Designing a space mission requires integrating scientific goals, engineering constraints, risk management, and cost considerations. Key challenges include: </p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>• Launch vehicle selection </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>• Trajectory optimization and orbital insertion </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>• Communication and navigation over vast distances </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>• Environmental hazards such as radiation and microgravity </p>
          
        </div>

        <div className={`w-full mt-2 md:w-[70%] h-auto rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
         
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}> Space Communication & Navigation Systems </p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Spacecraft rely on robust communication systems to transmit data to and from Earth. These systems typically use radio frequency (RF) communication, though laser (optical) communication is emerging as a high‑bandwidth alternative. Example: NASA’s Deep Space Network (DSN) is a global network of large antennas that communicates with interplanetary spacecraft, managing signals that can take minutes or even hours to traverse the vast distances.</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Navigation Systems :</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Navigation in space is achieved primarily through satellite navigation systems such as GPS (USA), Galileo (EU), GLONASS (Russia), and BeiDou (China). These systems allow precise determination of a spacecraft’s position, velocity, and time, critical for mission operations and orbital maneuvers. </p>
          
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Deep Space Communication Challenges:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Communicating over interplanetary distances involves dealing with significant delays, low signal strength, and interference. Advanced error correction, high-gain antennas, and powerful transmitters are used to overcome these challenges.</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>System Integration and Protocols:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Protocols for data transmission (including modulation, error correction, and encryption) are standardized to ensure interoperability between spacecraft and ground systems. These systems are continuously improved as new technologies emerge.</p>
          
        </div>

        <div className={`w-full mt-2 md:w-[70%] h-auto rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
         
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}> Space Robotics & AI in Space </p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Autonomous Systems and Robotics:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Robotics in space involves using autonomous machines to perform tasks ranging from simple repairs to complex exploration. These systems must operate reliably in an environment where real‑time human control is impossible due to communication delays. Example: The Canadarm2 on the ISS is a highly sophisticated robotic arm used for docking, maintenance, and capturing visiting spacecraft.</p>
          
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>AI in Space Applications:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Artificial intelligence (AI) enhances the autonomy of spacecraft by enabling onboard decision making, fault detection, and dynamic planning. AI is particularly valuable in deep space missions where latency in communication with Earth prohibits real‑time intervention. Example: Mars rovers use AI algorithms to navigate the Martian terrain and avoid hazards without waiting for instructions from Earth.</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Human-Robot Collaboration:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>In many missions, robots work alongside humans to extend mission capabilities. Robots can perform repetitive or dangerous tasks, freeing astronauts to focus on higher‑level decision making and scientific research.</p>
          
        </div>

        <div className={`w-full mt-2 md:w-[70%] h-auto rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
         
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}> Space Debris & Sustainability </p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>The Space Debris Problem:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Decades of space launches have left behind millions of pieces of debris—from spent rocket stages to fragments from collisions—that pose a risk to operational spacecraft. Even small pieces of debris can cause significant damage at orbital speeds. Example: The collision between Iridium 33 and Cosmos 2251 in 2009 generated thousands of debris fragments, emphasizing the need for effective debris management. </p>
          
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Mitigation and Management Strategies: </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Design for Demise :</span>  Building satellites that burn up upon re-entry. </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Active Debris Removal (ADR) :</span> Technologies such as nets, harpoons, or lasers to capture and deorbit debris. </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] mt-2`}> <span className={`font-semibold`}>• Space Traffic Management :</span> International guidelines and regulations to prevent collisions and manage satellite constellations sustainably. </p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Legal and International Policies :</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>International treaties like the Outer Space Treaty and national regulations are evolving to address debris mitigation, liability, and space sustainability. These policies aim to ensure that space remains a usable domain for future generations. </p>
          
        </div>

        <div className={`w-full mt-2 md:w-[70%] h-auto rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
         
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}> Space Colonization & Terraforming</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Human Habitats in Space:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Space colonization explores the possibility of establishing permanent human settlements on other celestial bodies—most notably the Moon and Mars. This requires developing advanced life support systems, sustainable habitats, and resource extraction technologies. Example: NASA’s Artemis program aims to build a lunar base that could serve as a stepping stone for future Mars missions. </p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Terraforming Concepts:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Terraforming involves modifying a planet’s environment to make it more Earth-like. Although still largely theoretical, strategies include releasing greenhouse gases to warm a planet, creating artificial magnetic fields, or introducing engineered life forms to alter the atmosphere. Example: Concepts for terraforming Mars explore how to thicken its atmosphere and increase surface temperatures to support liquid water.</p>
          
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Challenges and Considerations:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Colonization and terraforming present enormous technical, ethical, and financial challenges, including radiation protection, psychological and physiological effects on humans, and international legal considerations. </p>
          
        </div>

        <div className={`w-full mt-2 md:w-[70%] h-auto rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
         
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Space Law & Policies </p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>International Treaties and Agreements:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>The Outer Space Treaty (1967) is the cornerstone of space law, setting out the principles for peaceful use and non-appropriation of outer space. Other treaties and agreements address the use of the Moon, liability for damage, and space resource utilization. </p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>National Regulations and Commercial Policies:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>As private companies increasingly enter the space arena, national governments are updating policies to regulate commercial spaceflight, satellite launches, and space resource mining. These policies cover licensing, liability, insurance, and environmental protection. </p>
          
        </div>

        <div className={`w-full mt-2 md:w-[70%] h-auto rounded-md py-4 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out flex flex-col justify-center items-start gap-3`}>
         
          <p className={`capitalize ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-xl font-semibold`}>Systems Engineering & Integration in Space Technology </p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Systems engineering is a disciplined, holistic approach to designing, integrating, and managing complex space systems throughout their lifecycle. It ensures that all subsystems work together to meet mission objectives while balancing cost, schedule, and performance. Example: NASA’s Systems Engineering Handbook provides guidelines that have been applied successfully in projects ranging from the Apollo missions to the ISS.</p>

          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Lifecycle Management:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>From the conceptual design to decommissioning, every phase of a space mission is managed using rigorous systems engineering practices. This includes risk management, requirements traceability, configuration management, and continuous testing and validation. </p>
        
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px] underline`}>Subsystem Integration:</p>
          <p className={` ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Spacecraft consist of multiple interdependent subsystems (e.g., propulsion, power, thermal control). Systems engineering ensures that these elements are seamlessly integrated, tested, and optimized for the mission environment. </p>
          
        </div>

      </div>
    </>
  )
}
