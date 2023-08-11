import React from "react"
import Headers from "../components/Headers"

function Error404() {
  return (
    <>
      <Headers
        title="Página no encontrada - SOMOS A3 Campaña contra el cáncer infantil"
        description="No se ha encontrado la página a la que estás intentado acceder dentro del dominio web de SOMOS A3. Revisa que estás accediendo a la página deseada o ponte en contacto con nosotros si el error persiste"
      />
      <h1>Error 404</h1>
      <p>Sitio no encontrado</p>
    </>
  )
}

export default Error404
