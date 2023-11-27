import "./carousel.sass";

export const baseUrl = "../assets/projects";

const projects: any[] = [];
// [
//   {
//     title: "",
//     image: project01,
//     github: "Vivace",
//   },
//   {
//     title: "Imobiliária BZ",
//     image: project02,
//     github: "BZ_Imobiliaria",
//   },
//   {
//     title: "Habits",
//     image: project03,
//     github: "NLW_Setup",
//   },
//   {
//     title: "Formulário Multi-Etapas",
//     image: project04,
//     github: "MultiForms",
//   },
//   {
//     title: "Toledo Sports",
//     image: project05,
//     github: "eCommerce_React",
//   },
//   {
//     title: "Encontre seu Duo",
//     image: project06,
//     github: "NLW_eSports",
//   },
//   {
//     title: "Dev Weather",
//     image: project07,
//     github: "DevWeather",
//   },
//   {
//     title: "Dashboard Angular",
//     image: project08,
//     github: "DashboardAngular",
//   },
// ];

const Carousel = () => {
  return (
    <div className="carousel-container">
      {projects.map((project) => {
        const { title, image, github } = project;
        return (
          <div
            className="carousel-item"
            key={title}
            style={{
              background: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="info-item">
              <h3>{title}</h3>
              <a
                href={`https://github.com/DanielAlmeidaToledo/${github}`}
                className="btn btnProject"
                target={"_blank"}
              >
                Acessar
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
