import React from 'react'
import Head from 'next/head'
import {Layout} from '../../components/templates/Layout'
import {PageTitle} from '../../components/atoms/PageTitle'
import {ProjectItem} from '../../components/molecules/ProjectItem'
import './style.scss'

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects - rmoral</title>
      </Head>
      <Layout>
        <section>
          <PageTitle>Proyectos</PageTitle>
          <div className="rm-Projects-list">
            <ProjectItem
              title={`Twin&Chic`}
              text="Firma de moda infantil sostenible."
              url="https://twinandchic.com/es/"
              icon="icon-web"
            />
            <ProjectItem
              title="easy-svg-sprite"
              text="Herramienta para generar librerías de iconos en SVG."
              url="https://github.com/rmoralp/easy-svg-sprite"
              icon="icon-github"
            />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default ProjectsPage
