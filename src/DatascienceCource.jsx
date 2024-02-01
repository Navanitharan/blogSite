import React from 'react'
import Card from './Card'

let dataScience =[
    {img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    name:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024 ",
    description:"Are you someone who’s not interested in coding, but wants to get placed in tech"},
    {img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1.webp",
    name:"Impact of Certification Programs on Hiring Data Scientists ",
    description:"Data scientists are the creators behind transforming the raw data into edible data insights. These"},
    {img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
    name:"Top Product-Based Companies for Data Science Freshers ",
    description:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing"},
    {img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
    name:"What is the Difference between Data Science and Data Engineering?",
    description:"India has been making some serious waves in the world of data. Just like the"},
    {img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1.png",
    name:"Top 10 Data Science Tools in 2024 ",
    description:"Data Science is an in-demand profession and will continue growing in the coming years. From"},
    {img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
    name:"Best Data Science Books to Learn in 2024",
    description:"Today, we’re going to talk about something really cool: data science. It’s all about using"}
  ]

function Datascience() {
  return (
    <div className="card-container p-3 ">
      <div className="row d-flex flex-warp justify-content-center">
        {dataScience.map((data)=>{
          return <Card key={dataScience.indexOf(data)} card={data}></Card>
        })}
      </div>
    </div>
  )
}

export default Datascience
