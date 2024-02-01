import React from 'react'
import Card from './Card'

function FullstackCard() {

    let fullstack =[
        {
          img:'https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp',
          name:"Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
          description:"As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
          name:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
          description:"When you’re hiring a full-stack developer, what are the most important things you look for?"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
          name:"Top Differences: Full Stack Developer vs Software Engineer 2024",
          description:"A Full Stack Developer is a tech all-rounder. They work on both the front and"
        },
        {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
          name:"Horizontal vs Vertical Scaling for Efficient System Design",
          description:'In the world of system design, envision a digital skyscraper – a multifaceted structure built'
        },
        {
          img:'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp',
          name:"Best Books to Learn Full-Stack Development",
          description:"Are you interested in becoming a full-stack developer but not sure where to start? In"
        },
        {
          img:" https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
          name:"Top 10 Product-Based Companies for Full-Stack Developers [2024]",
          description:"In the dynamic landscape of technology, full-stack developers are the architects of the digital world,"
        }
      ]

  return (
    <div className="fullstack-container p-3 ">
      <div className="row d-flex flex-warp justify-content-center">
        {fullstack.map((data)=>{
          return <Card key={fullstack.indexOf(data)} card={data}></Card>
        })}
      </div>
    </div>
  )
}

export default FullstackCard
