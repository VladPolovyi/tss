import React from "react"
import Layout from "../layout"
import InnerHero from "../components/InnerHero"
import TmogSection from "../components/TmogSection"
import Seo from "../components/seo"

const OfficialTmog = () => {
  return (
    <Layout>
      <Seo customTitle={'Official tmog | The Scarlet Scourge'} />
      <InnerHero title="Official transmog" />
      <TmogSection />
    </Layout>
  )
}

export default OfficialTmog
