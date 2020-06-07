import React from "react"

import SEO from "../components/seo"
import Image from "../components/image"
const IndexPage = () => (
  <main>
    <SEO
      title="The Bear in Mind"
      lang="EN"
      description="Sustainable living is real and doable!
      Join the duo @ningalme @daniellekeller bearing in mind the stories behind our products and lifestyle 🐻"
      meta="Bear in mind presents sustainable issues through a positive visual lens directing our audience to shift their purchases in order to make a change, just to change the way we do it. Enlarge our audience awareness, make more conscious decisions that are not harmful in the bigger picture of the world. Highlight the power that each person around the world has on issues like climate change, biodiversity loss, etc... This is when we will be responsible for a better future for us and future generations. 
      "
    />
    <a href="https://www.instagram.com/the.bear.in.mind/">
      {/* <image src="/static/images/bear.jpg"  /> */}
      <Image alt="The Bear in Mind Logo" />
    </a>
  </main>
)

export default IndexPage
