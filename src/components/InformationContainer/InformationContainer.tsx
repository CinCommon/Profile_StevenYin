import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "./informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telephone</h3>
          <p>(86) 15751837892</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>yinzifancn@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Location</h3>
          <p>Nanjing, China</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
