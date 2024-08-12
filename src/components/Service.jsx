export default function Service() {
  return (
    <div
      className="container d-flex align-items-center m-auto"
      id="divContainer"
    >
      <div className="bg-dark rounded-5" id="divBlock">
        <div>
          <h1 id="h1" className="text-center">
            Our <span>Services</span>
          </h1>
          <div className="d-flex gap-3 mt-5" id="divService">
            <div className="col-sm rounded-3 d-flex justify-content-center align-items-center">
              <div className="text-center p-3 pt-5 pb-5">
                <i class="fa-solid fa-code"></i>
                <h4>Web Development</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorum porro necessitatibus quia numquam blanditiis officiis
                  autem incidunt, mollitia vel, voluptatibus veritatis maiores
                  perspiciatis iste alias. Voluptas adipisci nisi delectus
                  doloremque.
                </p>
                <a href="" className="btn rounded-pill" id="btn-more">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-sm rounded-3 d-flex justify-content-center align-items-center">
              <div className="text-center p-3">
                <i class="fa-solid fa-pen-ruler"></i>
                <h4>UX/UI</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorum porro necessitatibus quia numquam blanditiis officiis
                  autem incidunt, mollitia vel, voluptatibus veritatis maiores
                  perspiciatis iste alias. Voluptas adipisci nisi delectus
                  doloremque.
                </p>
                <a href="" className="btn rounded-pill" id="btn-more">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-sm rounded-3 d-flex justify-content-center align-items-center">
              <div className="text-center p-3">
                <i class="fa-solid fa-paintbrush"></i>
                <h4>Graphic Design</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorum porro necessitatibus quia numquam blanditiis officiis
                  autem incidunt, mollitia vel, voluptatibus veritatis maiores
                  perspiciatis iste alias. Voluptas adipisci nisi delectus
                  doloremque.
                </p>
                <a href="" className="btn rounded-pill" id="btn-more">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
