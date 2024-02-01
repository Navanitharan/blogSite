import React from 'react'
import Card from './Card'

let careerCard=[{
    img:"  https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
    name:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
    description:"If your New Year resolution consists of building a successful tech career in 2024, then"
  },
  {
    img:"https://github.com/Navanitharan/blogSite/assets/102136576/89e95835-e817-4b33-9970-8de96dac4250",
    name:"UI/UX Designer Job Description and Roles & Responsibilities",
    description:"UI UX is the abbreviated word that’s been rocking the trend over the years, especially"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
    name:"Top 5 IT Jobs for Economics Students",
    description:"In today’s digital age, the intersection of economics and technology offers exciting career opportunities for"
  }
  ]

function Career() {

  return (
    <div className="card-container p-3 ">
      <div className="row d-flex flex-warp justify-content-center">
        {careerCard.map((data)=>{
          return <Card key={careerCard.indexOf(data)} card={data}></Card>
        })}
      </div>
    </div>
  )
}

export default Career
