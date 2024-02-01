import React from 'react'
import Card from './Card'

const Allcards =[{
    img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Selenium-Alternatives-for-Test-Automation.webp",
    name:"Top 8 Selenium Alternatives for Test Automation",
    description:"Test automation plays a crucial role in the development and deployment of software applications. Selenium,"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-AWS-Services.webp",
    name:"List of Top 30 AWS Services",
    description:"Companies (like Netflix, Pinterest, Instagram, Walmart, Microsoft, Oracle, etc.) have been shifting to AWS Services"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-The-Gestalt-Principles-of-Design-with-Examples.webp",
    name:"The 11 Gestalt Principles of Design with Examples",
    description:"Design is much more than just aesthetics; it’s about how we perceive and interpret visual"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Machine-Learning-Project-Ideas-For-All-Levels-with-Source-Code.webp",
    name:"Top 9 Machine Learning Project Ideas For All Levels [with Source Code]",
    description:"Machine learning is a dynamic field that continues to shape the future of technology and"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-What-is-Color-Symbolism-Color-Meanings-and-Uses-Explained.webp",
    name:"What is Color Symbolism: Color Meanings and Uses Explained",
    description:"Do you know why all sustainable brands have green as their primary brand color? Or"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Design-Thinking-and-Prototyping-in-UIUX-A-Comprehensive-Guide.webp",
    name:"Design Thinking and Prototyping in UI/UX: A Comprehensive Guide",
    description:"Design thinking is a user-centric approach to problem-solving that emphasizes empathy and experimentation. It is"
  }
]

function All() {
  return (
    <div className="All-container p-3 ">
      <div className="row d-flex flex-warp justify-content-center">
        {Allcards.map((data)=>{
          return <Card key={Allcards.indexOf(data)} card={data}></Card>
        })}
      </div>
    </div>
  )
}

export default All
