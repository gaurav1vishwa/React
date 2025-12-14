import React from 'react'
import Card from './components/card'




const App = () => {
  const users = [
    {
      profileImg: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Amit Sharma",
      username: "@amit_sharma",
      info: "Frontend developer skilled in React, CSS, and building responsive user interfaces for modern web applications.",
      projects: 12,
      totalTasks: 140,
      projectCompletion: 85,
      taskCompletion: 78,
      ratings: 320
    },
    {
      profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Priya Verma",
      username: "@priya_verma",
      info: "UI UX designer focused on clean layouts, user research, wireframes, and creating visually engaging digital experiences.",
      projects: 9,
      totalTasks: 110,
      projectCompletion: 90,
      taskCompletion: 88,
      ratings: 410
    },
    {
      profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Rahul Mehta",
      username: "@rahul_mehta",
      info: "Full stack developer experienced in MERN stack, REST APIs, database design, and scalable backend systems.",
      projects: 15,
      totalTasks: 200,
      projectCompletion: 75,
      taskCompletion: 70,
      ratings: 290
    },
    {
      profileImg: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Neha Singh",
      username: "@neha_singh",
      info: "Content strategist and writer creating SEO optimized blogs, technical documentation, and engaging digital content.",
      projects: 7,
      totalTasks: 95,
      projectCompletion: 80,
      taskCompletion: 85,
      ratings: 180
    },
    {
      profileImg: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Arjun Patel",
      username: "@arjun_patel",
      info: "Backend engineer specializing in Node.js, authentication systems, cloud deployment, and performance optimization.",
      projects: 11,
      totalTasks: 160,
      projectCompletion: 88,
      taskCompletion: 82,
      ratings: 260
    },
    {
      profileImg: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Kavya Nair",
      username: "@kavya_nair",
      info: "Mobile app developer building Android applications with smooth UI, API integration, and efficient performance.",
      projects: 10,
      totalTasks: 130,
      projectCompletion: 92,
      taskCompletion: 90,
      ratings: 340
    },
    {
      profileImg: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Vikram Rao",
      username: "@vikram_rao",
      info: "DevOps engineer automating deployments, managing cloud infrastructure, and ensuring system reliability and scalability.",
      projects: 8,
      totalTasks: 120,
      projectCompletion: 70,
      taskCompletion: 68,
      ratings: 150
    },
    {
      profileImg: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Ananya Das",
      username: "@ananya_das",
      info: "Data analyst skilled in Python, data visualization, dashboards, and extracting insights from complex datasets.",
      projects: 6,
      totalTasks: 90,
      projectCompletion: 83,
      taskCompletion: 80,
      ratings: 210
    },
    {
      profileImg: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Rohit Kumar",
      username: "@rohit_kumar",
      info: "Cybersecurity enthusiast focused on ethical hacking, vulnerability assessment, and securing web applications.",
      projects: 5,
      totalTasks: 75,
      projectCompletion: 78,
      taskCompletion: 74,
      ratings: 195
    },
    {
      profileImg: "https://randomuser.me/api/portraits/women/10.jpg",
      name: "Sneha Iyer",
      username: "@sneha_iyer",
      info: "Project manager coordinating teams, tracking milestones, ensuring timely delivery, and maintaining project quality.",
      projects: 14,
      totalTasks: 180,
      projectCompletion: 95,
      taskCompletion: 92,
      ratings: 500
    }
  ];

  return (
    <div>
      { /* here i am going to creating a div 
    and inside the div i will create a function and map this and also give unique key to the div because every card is unique itself
       */ }
      {users.map(function (ele, index) {
        return <div key={index}>
          <Card image={ele.profileImg} name={ele.name} username={ele.username} info={ele.info} project={ele.projects} totaltask={ele.totalTasks}
          projectCompletion={ele.projectCompletion} ratings={ele.ratings} /> 
          </div>
          
      })}

    </div>
  )
}

export default App
