import img from "../img/Sakura.Haruka.600.4079008-removebg-preview (1).png";

export default function About() {
  return (
    <div
      className="container d-flex align-items-center m-auto"
      id="divContainer"
    >
      <div className="bg-dark rounded-5" id="divBlock">
        <div className="col-sm-5" id="divImg">
          <div className="hexagon1">
            <img src={img} alt="Profile Image" className="hexagon-img"></img>
          </div>
        </div>
        <div className="col-md-7 col-sm-12">
          <div className="d-flex">
            <div className="img-res p-1">
              <div className="hexagon-res">
                <img
                  src={img}
                  alt="Profile Image"
                  className="hexagon-img-res"
                ></img>
              </div>
            </div>
            <div>
              <h1 id="h1">
                About <span>Me</span>
              </h1>
              <h4 id="h4">Frontend Developer!</h4>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            hic pariatur numquam est alias. Omnis numquam fugiat a dolores
            voluptatibus, dignissimos delectus aut velit ipsam quis nam iste,
            quas quia!
          </p>
          <a href="" className="btn rounded-pill" id="btn-more">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
