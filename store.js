import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 4,
  pages: 4,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 2,
      header: "Featured Project",
      image: "/images/calculator.png",
      aspect: 1.8,
      text: "An e-commerce platform built for local tackle supply company. Built with Django and React."
    },
    { 
      offset: 2,
      factor: 2.25,
      header: "Hard skills",
      image: "/langicons.png",
      aspect: 1.5,
      text:
        ""
    },
    {
      offset: 3 ,
      factor: 2.5,
      header: "Get in touch",
      image: "/images/calculator.png",
      aspect: 1.5037,
      text:
        ""
    },

  ],
  stripes: [
    { offset: 0, color: "#a1a1a1", height: 5 },
    { offset: 3, color: "white", height: 20 }
  ],
  diamonds: [
    // { x: 0, offset: 0.15, pos: new Vector3(), scale: 14, factor: 4 },
    { x: 2, offset: 2, pos: new Vector3(), scale: 6, factor: 2.25},
    // { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
  ],
  top: createRef()
}

export default state
