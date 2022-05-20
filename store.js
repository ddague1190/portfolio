import { createRef } from "react"
import { Vector3 } from "three"


const state = {
  boldColor:'#43bdff',
  sections: 5,
  pages: 5,
  zoom: 75,
  paragraphs: [

    // video paragraph 
    {
      offset: 2.1,
      factor: 1,
      header: "",
      image: "",
      aspect: 1.8,
    },
    //hardskills
    {
      offset: 3,
      factor: 1,
      header: "featured project",
      image: "",
      aspect: 1.8,
      text: "An e-commerce platform.",
      text2: "Built with Django and React."
    },

    // hardskillsnext
    { 
      offset: 3,
      factor: 1,
      header: "",
      image: "/langicons.png",
      aspect: 1,
      text:
        ""
    },
    // contact
    {
      offset: 4,
      factor: 1,
      header: "Get in touch",
      image: "",
      aspect: 1.5037,
      text:
        ""
    },

  ],
  stripes: [
    // { offset: 0, color: "white", height: .5 },
    // { offset: 3, color: "#cccccc", height: 1 }
  ],
  diamonds: [
    { x: 0, offset: 0.08, pos: new Vector3(), scale: 4, factor: 2 },

    // { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
  ],
  top: createRef()
}

export default state
