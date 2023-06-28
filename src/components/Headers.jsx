import React from "react"
import { Helmet } from "react-helmet"
export default function Headers({ title, description, keyWords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyWords} />
    </Helmet>
  )
}
Headers.defaultProps = {
  title: "Titutlo",
  description: "Descripcion",
}
