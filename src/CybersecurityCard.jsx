import React from 'react'
import Card from './Card'
let cyberSecurityCard=[
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      name:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      description:"Look around today, you will witness that we are more reliant on technology and devices"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1.png",
      name:"8 Different Types of Cybersecurity and Threats Involved",
      description:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      name:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      description:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1.png",
      name:"8 Different Types of Cybersecurity and Threats Involved",
      description:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      name:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      description:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
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
