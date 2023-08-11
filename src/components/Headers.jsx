import React from "react"
import { Helmet } from "react-helmet"
export default function Headers({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta alternate hreflang="es" />
    </Helmet>
  )
}
Headers.defaultProps = {
  title: "Titutlo",
  description: "Descripcion",
}
