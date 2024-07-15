/* eslint-disable react/prop-types */
import "./Work.css";
import image1 from "../../assets/workimage1.jpg"
import image2 from "../../assets/workimage2.jpg"
import image3 from "../../assets/workimage3.jpg"
import image4 from "../../assets/workimage4.jpg"
const card = [
  {
    image: image1,
    title: "Designing Dashboards",
    year: "2020",
    name: "Dashboard",
    text: "Eirmod sanctus gubergren consetetur dolor sit. Dolore vero sed diam ea. Diam at dolor sed dolor. Ipsum nonumy aliquyam accusam.",
  },
  {
    image: image2,
    title: "Vibrant Portraits Of 2020",
    year: "2018",
    name: "ilustration",
    text: "Erat eos et voluptua eos eirmod tempor. No consetetur sit tempor consetetur eos takimata. Labore sit elitr tempor magna ut.",
  },
  {
    image: image3,
    title: "36 Days of Malayalam type",
    year: "2018",
    name: "Typography",
    text: "Ea sed diam diam elitr no elitr et eirmod. Labore elitr clita justo et duo, sanctus sit lorem dolore duo.",
  },
  {
    image: image4,
    title: "Components",
    year: "2018",
    name: "Components,Design",
    text: "Consetetur lorem ipsum consetetur invidunt sed et. Et vero eirmod duo aliquyam accusam rebum. Est duo eirmod dolores lorem et.",
  },
];
const WorkCard = (props) => {
  return (
    <>
    <div className="card-section">
      <div className="work-image">
        <img src={props.image} alt="" className="work-image" />
      </div>
      <div className="card-body">
        <div className="card-title">
          <h2 className="card-title">{props.title}</h2>
        </div>
        <div className="card-year-name">
          <p className="card-year">{props.year}</p>
          <p className="card-name">{props.name}</p>
        </div>
        <div className="card-text">
          <p className="card-text">{props.text}</p>
        </div>
      </div>
      
    </div>
    <hr/>
    </>
  );
};
function Work() {
  return (
    <div className="cards-section">
      <h1 className="work">Work</h1>
      {card.map((item, index) => (
        <WorkCard
          key={index}
          image={item.image}
          title={item.title}
          year={item.year}
          name={item.name}
          text={item.text}
        />
      ))}
      
    </div>
  );
}
export default Work

