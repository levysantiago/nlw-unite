import {prisma} from "../src/lib/prisma"

async function seed(){
  await prisma.event.create({
    data:{
      id: "018ea50b-d7a6-721f-8040-f990fc1a7ff4",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento para devs apaixonados(as) por tecnologia.",
      maximumAttendees: 120,
    }
  })
}

seed().then(()=>{
  console.log("Database seeded!")
  prisma.$disconnect()
})