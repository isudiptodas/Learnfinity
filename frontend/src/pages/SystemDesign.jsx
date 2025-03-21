import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { LuSparkles } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

function SystemDesign() {

    const { dark } = useTheme();

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);
    const [chatVisible, setChatVisible] = useState(false);
    const [asking, setAsking] = useState(false);
    const [text, setText] = useState('');
    const [output, setOutput] = useState('');

    const openLink = (link) => {
        if(!link){
            return;
        }

        window.open(link, '_blank');
    }

    const askAI = async () => {

        if (!text) {
            toast.error("Please ask a question");
            return;
        }

        const api = import.meta.env.VITE_GEMINI_API_KEY;

        const newText = `${text}. Give me only answer and no italic, no bullet points, no underline, no heading, only give next line or enter if needed otherwise just simple text`;

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`;

        const data = {
            contents: [
                {
                    parts: [
                        {
                            text: newText,
                        },
                    ],
                },
            ],
        };

        const headers = {
            'Content-Type': 'application/json',
        }

        try {
            setAsking(true);
            const res = await axios.post(url, data, { headers });
            //console.log(res.data.candidates[0]?.content.parts[0]?.text);
            setOutput(res.data.candidates[0]?.content.parts[0]?.text);
        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setAsking(false);
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(output);
        toast.success("Answer copied");
    }


    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-10 content overflow-auto flex flex-col justify-start items-center relative gap-5 lg:gap-2`}>
                    <Toaster />

                    <span className={`fixed ${chatVisible ? "hidden" : "block"} bottom-20 right-14 p-5 active:scale-95 duration-200 ease-in-out hover:scale-110 cursor-pointer rounded-full bg-gradient-to-br from-emerald-300 via-purple-500 to-pink-600 text-white text-2xl `} onClick={() => setChatVisible(true)} ><LuSparkles /></span>

                    <div className={`w-[90%] z-50 md:w-[80%] px-10 lg:w-[50%] ${chatVisible ? "block" : "hidden"} ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out fixed h-[80vh] sm:h-[60vh] lg:h-[80vh] shadow-lg rounded-md bottom-5 sm:bottom-20 py-3 flex flex-col justify-start items-center gap-2`}>
                        <span onClick={() => setChatVisible(false)} className={`py-3 px-2 flex justify-center items-center gap-2 text-red-500 duration-200 ease-in-out cursor-pointer`}><RxCross2 /> Close</span>

                        <h1 className={`w-full text-center ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl font-bold`}>Ask your system design doubts to <span className={`bg-gradient-to-br from-emerald-300 via-purple-400 to-pink-400 bg-clip-text text-transparent`}>AI</span> </h1>

                        <input type="text" className={`w-[80%] lg:w-full ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out mt-3 py-2 px-3 rounded-md outline-none`} placeholder='Enter your question' onChange={(e) => setText(e.target.value)} />
                        <p className='w-[80%] lg:w-full rounded-md py-2 bg-gradient-to-r  from-cyan-400 via-purple-500 to-pink-500 text-white flex justify-center items-center gap-2 cursor-pointer active:scale-95 duration-200 ease-in-out text-center text-[10px] md:text-sm' onClick={askAI}>{asking ? "Getting your answers...Please wait" : "Ask AI"} <LuSparkles /></p>

                        <pre className={`w-[80%] ${output !== '' ? "block" : "hidden"} h-[65%] lg:w-full mt-10 lg:mt-4 py-3 px-4 rounded-md overflow-x-auto overflow-y-auto content ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} font-sans duration-200 ease-in-out`}>
                            {output}
                        </pre>

                        <p className={`w-[80%] ${output !== '' ? "block" : "hidden"} lg:w-full rounded-md py-2 bg-cyan-500 text-white flex justify-center items-center gap-2 cursor-pointer active:scale-95 duration-200 ease-in-out text-center text-[10px] md:text-sm`} onClick={copyToClipboard}>Copy To Clipboard</p>
                    </div>

                    <h1 className={`w-full ${dark ? "text-black" : "text-white"} text-center font-Titillium text-2xl sm:text-4xl sm:w-[80%] font-semibold`}>Welcome to the system design course for beginners</h1>
                    <p className={`w-full text-[10px] sm:text-sm sm:w-[70%] ${dark ? "text-black" : "text-white"} text-center mt-4 duration-200 ease-in-out`}>This is the only course that you will need to get familiar with system design principles and concepts</p>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>What is System Design ?</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>System Design is the process of defining the architecture, components, modules, interfaces, and data flow of a system to meet specific requirements. It involves breaking down complex systems into smaller, manageable parts, ensuring scalability, reliability, and efficiency. <br /><br /> In simpler terms, system design is like planning and designing the blueprint of a large-scale software system before actual coding begins. It covers both high-level (architectural design) and low-level (detailed component design) aspects.</p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Why is System Design important ?</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            System design plays a crucial role in software development for several reasons: <br /><br />

                            1. Scalability → Ensures the system can handle an increasing number of users and data efficiently.<br />
                            2. Reliability → Helps in designing fault-tolerant systems that can recover from failures.<br />
                            3. Efficiency → Optimizes performance in terms of response time and resource usage.<br />
                            4. Maintainability → Makes it easier to update, debug, and expand the system in the future.<br />
                            5. Security → Ensures data protection and prevents unauthorized access.<br />
                            6. Cost Optimization → Helps in resource planning and reducing unnecessary infrastructure costs.<br />
                            7. Collaboration → Provides a clear structure for teams working on different parts of the system.<br />
                        </p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Why makes up a good System Design ?</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1.   Scalability → The system should handle increasing load efficiently, whether it's more users, data, or requests. This includes designing for both horizontal scaling (adding more servers) and vertical scaling (upgrading existing servers). <br />
                            2.   Reliability & Fault Tolerance → The system should continue working even if some components fail. It should have mechanisms like replication, redundancy, and failover strategies to ensure minimal downtime and quick recovery from failures. <br />
                            3.  Maintainability & Modularity → A well-structured system should be easy to update, debug, and expand. This includes clean code, modular components, and well-documented APIs, making it easier for developers to maintain and improve over time. <br />
                            4.  Performance & Latency Optimization → The system should respond quickly and efficiently, even under high load. Techniques like caching, database indexing, optimized queries, and load distribution help improve overall performance. <br />
                            5.  Security → The system must protect sensitive data and prevent attacks. This includes authentication, authorization, encryption, and protection against threats like SQL Injection, XSS, and CSRF. <br />
                            6.  Database Design → A well-structured database ensures efficient data retrieval and storage. Choosing between SQL (relational) and NoSQL (non-relational) databases based on use case, along with techniques like normalization, denormalization, partitioning, and replication, is crucial. <br />
                            7.  Load Balancing & Traffic Distribution → A system should distribute traffic efficiently across multiple servers to prevent overload. Load balancers, CDNs, and traffic routing mechanisms help achieve even load distribution and better availability. <br />
                            8.  API Design & Communication → The system should have well-designed APIs that allow seamless interaction between different services. REST, GraphQL, WebSockets, and message queues (Kafka, RabbitMQ) ensure smooth and efficient communication. <br />
                            9.   Logging & Monitoring → To detect and troubleshoot issues quickly, the system should have real-time monitoring, logging mechanisms, and alert systems using tools like Prometheus, Grafana, ELK stack, or Sentry. <br />
                            10.   Cost Efficiency → A well-designed system should optimize resources and costs. This includes choosing the right cloud services, using auto-scaling, and optimizing storage solutions to reduce unnecessary expenses. <br />
                        </p>

                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>DNS :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>DNS (Domain Name System) is a hierarchical system that translates human-readable domain names (e.g., www.google.com) into machine-readable IP addresses (e.g., 142.250.183.78). It enables users to access websites without remembering complex IP addresses.</p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Key Points : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1. Works like the internet’s phonebook by mapping domain names to IP addresses. <br />
                            2. Uses a hierarchical structure with root servers, TLD (Top-Level Domain) servers, and authoritative DNS servers. <br />
                            3. DNS caching improves speed by storing previously resolved domain names. <br />
                            4. Supports Load Balancing and Failover, directing users to the closest or least busy server. <br />
                        </p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Load Balancers :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>A Load Balancer distributes incoming network traffic across multiple backend servers to ensure no single server gets overloaded. It improves system reliability, availability, and performance.</p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Key Points : </p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>API Gateway :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>An API Gateway acts as an entry point for multiple backend services. It handles authentication, request routing, load balancing, and caching while providing a single access point for APIs.</p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Key Points : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1. Centralizes authentication and authorization for APIs.  <br />
                            2. Implements rate limiting to prevent abuse (e.g., too many requests from a single user).  <br />
                            3. Transforms API requests and responses, converting formats if needed.  <br />
                            4. Common API gateways: Kong, AWS API Gateway, NGINX, Apigee.  <br />
                        </p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>CDN (Content Delivery Network) :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>A CDN is a globally distributed network of servers that delivers content (e.g., images, videos, web pages) from the nearest data center to the user, reducing latency and improving performance.</p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Key Points : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1. Caches static content to reduce server load.  <br />
                            2. Improves website speed by serving content from the closest server.  <br />
                            3. Reduces bandwidth costs by offloading traffic from origin servers.  <br />
                            4. Popular CDNs: Cloudflare, Akamai, AWS CloudFront, Fastly.  <br />
                        </p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Proxy :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>A proxy server acts as an intermediary between a client and a server, managing requests and responses.</p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Types : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1. Forward Proxy → Sits between a client and the internet, used for security, caching, and anonymity.  <br />
                            2. Reverse Proxy → Sits between clients and backend servers, used for load balancing, security, and caching.  <br />
                        </p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Key Points : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1. Forward Proxy helps users access restricted content and hide their IP addresses.  <br />
                            2. Reverse Proxy improves security by hiding backend servers from the internet.  <br />
                            3. Examples: Squid, NGINX, HAProxy.  <br />
                        </p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Caching :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Caching stores frequently accessed data temporarily to speed up future requests and reduce load on servers.</p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Types : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1. Browser Caching → Stores web assets in the user’s browser. <br />
                            2. CDN Caching → Stores static content on distributed servers. <br />
                            3. Database Caching → Uses tools like Redis and Memcached to speed up queries. <br />
                            4. Application Caching → Stores frequently used data in memory. <br />
                        </p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Key Points : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1.  Improves Performance → Reduces response time by storing frequently accessed data. <br />
                            2.  Reduces Server Load → Minimizes database queries and backend processing. <br />
                            3. Increases Scalability → Helps systems handle high traffic efficiently. <br />
                            4. Data Expiry & Invalidation → Uses TTL (Time-To-Live) to remove outdated data. <br />
                            5. Write-Through vs. Write-Back → Controls how data updates are handled. <br />
                            6. Cache Consistency Issues → Requires strategies like cache invalidation to keep data fresh. <br />
                            7. Common Caching Tools: Redis, Memcached, Cloudflare, Varnish. <br />
                        </p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Data Partitioning :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Data Partitioning (or sharding) is the process of splitting large databases into smaller, more manageable parts for better performance and scalability.</p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Key Points : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1. Horizontal Partitioning (Sharding): Divides data across multiple databases based on criteria like user ID.  <br />
                            2. Vertical Partitioning: Splits data into different tables based on column usage.  <br />
                            3. Used to handle large-scale data efficiently.  <br />
                        </p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Data Replication :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Data Replication is the process of copying and synchronizing data across multiple databases to improve availability and reliability.</p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Key Points : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1. Primary-Replica Model: One database is primary (writes), and others are replicas (read-only). <br />
                            2. Multi-Master Replication: Multiple databases can handle writes and sync data. <br />
                            3. Helps in disaster recovery and load distribution. <br />
                        </p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Distributed Messaging System :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>A Distributed Messaging System enables communication between different parts of a distributed system using asynchronous messages.</p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Key Points : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1. Ensures scalable and fault-tolerant communication. <br />
                            2. Uses message brokers like Kafka, RabbitMQ, and Apache Pulsar. <br />
                            3. Supports Pub/Sub (Publish-Subscribe) and Message Queues. <br />
                        </p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Microservices :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Microservices architecture breaks a large application into smaller, independent services that communicate via APIs.</p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Key Points : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1. Improves scalability and maintainability.  <br />
                            2. Each service is independently deployable.  <br />
                            3. Common in cloud-native applications.  <br />
                        </p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>CAP Theorem :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>CAP Theorem states that in a distributed system, you can only achieve two out of three guarantees:  <br />  <br />

                            1. Consistency → All nodes have the same data at the same time.  <br />
                            2. Availability → The system remains operational even if some nodes fail.  <br />
                            3. Partition Tolerance → The system works despite network failures.</p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Key Points : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1. Consistency (C) → Every read receives the most recent write or an error (no stale data). <br />
                            2. Availability (A) → Every request receives a response, even if the data is outdated. <br />
                            3. Partition Tolerance (P) → The system continues to function despite network failures. <br />
                            4. Trade-offs → A distributed system must choose between CA, CP, or AP; achieving all three is impossible. <br />
                            5. CA Systems → Prioritize Consistency & Availability but fail under network partitions (e.g., relational databases before sharding). <br />
                            6. CP Systems → Ensure Consistency & Partition Tolerance but may sacrifice availability (e.g., databases like MongoDB in strict consistency mode). <br />
                            7. AP Systems → Guarantee Availability & Partition Tolerance but may serve stale data (e.g., DNS, NoSQL databases like Cassandra, DynamoDB). <br />
                            8. Real-world Impact → Different use cases require different CAP trade-offs; financial transactions need CP, while social media feeds favor AP. <br />
                            9. Modern Adaptations → Many systems use eventual consistency to balance trade-offs while maintaining good performance.  <br />
                        </p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Messaging Queues :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>A Message Queue is a system that stores and processes messages asynchronously to decouple services and improve performance. </p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Key Points : </p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>

                            1. Messages are stored temporarily before being processed. <br />
                            2. Helps in scaling microservices. <br />
                            3. Examples: Kafka, RabbitMQ, ActiveMQ. <br />
                        </p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Sharding :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Sharding is a type of data partitioning where a database is split across multiple servers to improve scalability.</p>
                    </div>

                    <div className={`py-4 px-4 ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full md:w-[80%] md:mt-5 flex flex-col justify-start items-start gap-2`}>
                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Scaling :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Scaling refers to the process of handling increased system load by upgrading the existing infrastructure. It ensures that an application can serve more users, process more data, and handle higher traffic efficiently.<br />
                            There are two main types of scaling: <br />

                            1. Vertical Scaling (Scaling Up) <br />
                            2. Horizontal Scaling (Scaling Out) <br />
                        </p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>• Verical Scaling :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Vertical scaling involves increasing the capacity of a single machine by upgrading its hardware resources, such as CPU, RAM, or storage.<br />
                            How it works : <br />

                            1. If a server struggles with high traffic, you replace it with a more powerful one. <br />
                            2. Example: Upgrading a database server from 16GB RAM to 64GB RAM. <br />
                        </p>

                        <p className={`w-full text-sm font-bold sm:w-[70%] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>• Horizontal Scaling :</p>
                        <p className={`w-full text-[12px] ${dark ? "text-black" : "text-white"} text-start duration-200 ease-in-out`}>Horizontal scaling involves adding more machines (servers) to distribute the load instead of upgrading a single machine.<br />
                            How it works : <br />

                            1.Instead of upgrading a single server, you add multiple smaller servers and distribute the workload using a load balancer. <br />
                            2.Example: Instead of running a website on one powerful server, you run it on multiple servers and direct traffic to them based on availability. <br />
                        </p>
                    </div>

                    <p className={`w-full text-[12px] sm:text-sm md:text-lg sm:w-[70%] ${dark ? "text-black" : "text-white"} text-center mt-4 duration-200 ease-in-out`}>In case you want to explore more : </p>

                    <div className={`w-full sm:w-[70%] ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out rounded-md flex flex-col py-5 justify-start items-center gap-2`}>
                        <p className={`w-full text-[12px] sm:text-sm md:text-lg sm:w-[70%] text-blue-600 text-center duration-200 ease-in-out cursor-pointer`} onClick={() => openLink('https://youtube.com/playlist?list=PLLhBy6YSIT0ANaihpjwDBSBju0qUZ82SK&si=AGdnFrdEJxmkvSx0')}>System Design Complete Playlist Reference</p>
                        <p className={`w-full text-[12px] sm:text-sm md:text-lg sm:w-[70%] text-blue-600 text-center duration-200 ease-in-out cursor-pointer`} onClick={() => openLink('https://youtu.be/m8Icp_Cid5o?si=ta0sGeKsi2eAV-P8')}>System Design Beginners Guide</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SystemDesign
