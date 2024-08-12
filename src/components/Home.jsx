import img from "../img/Sakura.Haruka.600.4079008-removebg-preview (1).png";
import cv from "../img/frontend.pdf";
export default function Home() {
  return (
    <div
      className="container d-flex align-items-center m-auto"
      id="divContainer"
    >
      <div className="bg-dark rounded-5" id="divBlock">
        <div className="col-md-7 col-sm-12">
          <div className="d-flex">
            <div>
              <h4 id="h4">Hello, I Am</h4>
              <h1 id="h1">Soy Zen</h1>
              <h4 id="h4">
                And I'm a <span>Frontend Developer.</span>
              </h4>
            </div>
            <div className="img-res">
              <div className="hexagon-res">
                <img
                  src={img}
                  alt="Profile Image"
                  className="hexagon-img-res"
                ></img>
              </div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            hic pariatur numquam est alias. Omnis numquam fugiat a dolores
            voluptatibus, dignissimos delectus aut velit ipsam quis nam iste,
            quas quia!
          </p>
          <div className="d-flex gap-3">
            <div className="circle">
              <a href="" className="fa-brands fa-facebook-f"></a>
            </div>
            <div className="circle">
              <a href="" className="fa-brands fa-twitter"></a>
            </div>
            <div className="circle">
              <a href="" className="fa-brands fa-youtube"></a>
            </div>
          </div>
          <a
            href={cv}
            className="btn rounded-pill mt-3"
            id="btn-download"
            download
          >
            Dowload CV
          </a>
        </div>
        <div className="col-sm-5" id="divImg">
          <div className="hexagon">
            <img src={img} alt="Profile Image" className="hexagon-img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
