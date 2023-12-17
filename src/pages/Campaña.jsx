import React from "react"
import "../styles/campaña.css"
import Headers from "../components/Headers"

export default function Plan() {
  return (
    <div className="content md:!mr-40 md:!ml-20 !ml-6 !mr-6 ">
      <Headers
        title="Campaña - SOMOS A3 Campaña contra el cáncer infantil"
        description="Nuestra misión es llevar a cabo cualquier actuación tendente a mejorar la calidad de vida de los niños y niñas con cáncer infantil, así como colaborar en el conocimiento de estas enfermedades y sus tratamientos. Gracias a tu ayuda conseguimos que esta misión se lleve a cabo día tras día"
      />
      <h1 className="tituloCampaña !mt-12 text-4xl mb-10">🎗️ Campaña contra el cáncer infantil 🎗️</h1>
      <h2 className="subtituloCampaña text-2xl ml-4">NUESTRA MISION:</h2>
      <p className="parrafoCampaña">
        En estas especiales circunstancias, el desarrollo afectivo y educativo
        de los niños y adolescentes debe ser el adecuado, y por ello{" "}
        <strong>
          nuestra misión es la de llevar a cabo cualquier actuación tendente a
          mejorar su calidad de vida, así como colaborar en el conocimiento de
          estas enfermedades y sus tratamientos.
        </strong>{" "}
        El cáncer infantil se ha convertido en una enfermedad que afecta a entre
        1% y 3% de la población infantil de nuestro país; por lo que resulta
        relevante que existan entidades que se dediquen por completo a luchar
        para conseguir mejoras en el tratamiento, en la estancia hospitalaria o
        en el ámbito educativo de estos niños y niñas afectados por la
        enfermedad.
      </p>
      <div className="logo-cover">
        <img
          className="logoCampaña"
          src="/plan-images/mision.avif"
          alt="Logo de la campaña"
        />
      </div>
      <h2 className="subtituloCampaña text-2xl mt-10 md:!ml-8 mr-6 ml-6">OBJETIVOS DE NUESTRAS ACTIVIDADES:</h2>
      <ul className="text-justify p-0 mr-6 ml-6">
        <li>
          Realizar actividades dirigidas a sensibilizar a la población,
          especialmente a los niños y niñas, con el cáncer infantil y sobre todo
          hacia los menores y familias que lo sufren, pretendiendo así, ofrecer
          una visión realista y alejada de los tópicos y de las ideas
          preconcebidas sobre la enfermedad y las personas que la padecen.
        </li>
        <li>
          Actividades tendentes a potenciar un ocio y tiempo libre saludables en
          los menores enfermos y en sus familias.
        </li>
        <li>
          Campañas de sensibilización-prevención sobre dicha enfermedad dirigida
          tanto a la población infantil como a la población pre-adolescente y a
          la población en general.
        </li>
        <li>
          Charlas informativas sobre la donación de sangre del cordón umbilical
          es uno de nuestros pilares de actuación.
        </li>
        <li>
          Jornadas sobre el cáncer infantil tanto para los asistentes, como para
          nuestra Entidad.
        </li>
      </ul>
      <div className="logo-cover2">
        <img
          className="logoCampaña"
          src="/plan-images/mision.jpg"
          alt="Logo de la campaña"
        />
        <img
          className="logoCampaña"
          src="/plan-images/plan.jpg"
          alt="Logo de la campaña"
        />
      </div>
      <p className="textoAgradecimiento">
        <b>
          <i>¡GRACIAS POR SU CONFIANZA!</i>
        </b>
      </p>
    </div>
  )
}
