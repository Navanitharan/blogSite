import React from 'react'
import Card from './Card'
let cyberSecurityCard=[
    {
      img:"https://github.com/Navanitharan/blogSite/assets/102136576/8cd37bfd-e43c-4187-a246-db6e1940c7a1",
      name:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      description:"Look around today, you will witness that we are more reliant on technology and devices"
    },
    {
      img:"https://github.com/Navanitharan/blogSite/assets/102136576/6c6f376f-5182-4f8c-bf14-7ec1f2dbebdc",
      name:"8 Different Types of Cybersecurity and Threats Involved",
      description:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from"
    },
    {
      img:"https://github.com/Navanitharan/blogSite/assets/102136576/4e4366da-aa58-4615-ab27-398ece080b6a",
      name:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      description:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,"
    },
    {
      img:"https://github.com/Navanitharan/blogSite/assets/102136576/6c6f376f-5182-4f8c-bf14-7ec1f2dbebdc",
      name:"8 Different Types of Cybersecurity and Threats Involved",
      description:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from"
    },
    {
      img:"https://github.com/Navanitharan/blogSite/assets/102136576/4e4366da-aa58-4615-ab27-398ece080b6a",
      name:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      description:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,"
    },
    {
      img:"https://github.com/Navanitharan/blogSite/assets/102136576/8cd37bfd-e43c-4187-a246-db6e1940c7a1",
      name:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      description:"Look around today, you will witness that we are more reliant on technology and devices"
    }
  ]

function Cybersecurity() {
  return (
    <div className="card-container p-3 ">
    <div className="row d-flex flex-warp justify-content-center">
      {cyberSecurityCard.map((data)=>{
        return <Card key={cyberSecurityCard.indexOf(data)} card={data}></Card>
      })}
    </div>
  </div>
  )
}

export default Cybersecurity
