import React from "react"
import "../styles/quienes_somos.css"
import Headers from "../components/Headers"

function Nosotros() {
  return (
    <div className="content">
      <Headers
        title="Nosotros - SOMOS A3 Campaña contra el cáncer infantil"
        description="Descubre nuestra esencia: Conócenos en profundidad. Explora nuestra historia y valores. Un vistazo interior a quiénes SOMOS y cómo dedicamos nuestro compromiso a hacer la diferencia."
      />
      <h1 className="tituloQuienesSomos">SOMOS A3</h1>
      <p>
        <i>
          <b>Somos</b>
        </i>{" "}
        una empresa que realizamos actividades comerciales realizando campañas
        de ayuda para asociaciones necesitadas ofertando los productos que
        realmente creemos que le pueden ir bien a su empresa para así poder
        ayudar. En estos momentos nos encontramos trabajando con la Fundación
        Oncológica Ícaro Infantil,
        <b>
          <i>
            {" "}
            el día 15 de febrero se realiza el día internacional del cáncer
            infantil
          </i>
        </b>{" "}
        y recurrimos a usted para que con su ayuda podamos hacer que los niños
        con un diagnóstico de cáncer reciban el tratamiento y terapias que
        necesitan.{" "}
      </p>
      <div className="logo-cover3">
        <img
          className="logoCampaña"
          src={"/LOGO-SOMOS-A3.png"}
          alt="Logo de la campaña"
        />
      </div>
      <p>
        La campaña se llama <b>"LO CONSEGUIMOS CON TU AYUDA"</b>, dirigida a la
        Atención integral al menor y a sus familias: sensibilización y
        prevención, con el objetivo y la necesidad de seguir ayudando a los
        niños que sufren esta enfermedad para que puedan seguir realizando
        gracias a vuestra colaboración en el proceso de su recuperación,
        actividades psicosociales y educativas que son tan necesarias e
        importantes para ellos. Este tipo de ayudas son fundamentales para que
        podamos seguir prestando soporte psicosocial a los pequeños y familias
        afectadas, sigamos brindando apoyo y poniendo un rayito de luz y
        esperanza cuando más lo necesitan.
      </p>
    </div>
  )
}

export default Nosotros
