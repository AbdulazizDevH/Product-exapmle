import logo from "../images/icons/footer_logo.png";
import amino from "../images/social-media_amico.png";
import play from "../images/icons/play.png";
import darkmodeicon from "../images/icons/darkmode.png";
import icon_1 from "../images/icons/cursor_icon.png";
import icon_2 from "../images/icons/icon__2.png";
import icon_3 from "../images/icons/icon__3.png";
import icon_4 from "../images/icons/icon__4.png";

const Menu = (props) => {
  return (
    <li className="menu-item">
      <a href={"#"+props.link} className="nav-link">
        {props.link}
      </a>
    </li>
  );
};

const Head = (props) => {
  return (
    <>
      <h1>{props.header}</h1>
      <p>{props.lorem}</p>
    </>
  );
};

const Specifically = (props) => {
  return (
    <div className="card">
      <img src={props.src} />
      <p>{props.head}</p>
      <span>{props.text}</span>
    </div>
  );
};

export default function Header() {
  return (
    <div>
      <nav className="navbar">
        <a id="brand-logo" href="#">
          <img src={logo} />
        </a>
        <ul className="menu">
          <Menu link="Product" />
          <Menu link="Customers" />
          <Menu link="Pricing" />
          <Menu link="Resources" />
          <button>Sign In</button>
          <button>Sign Up</button>
          <img src={darkmodeicon} />
        </ul>
      </nav>

      <div className="head">
        <div className="head-content">
          <Head
            header="Work at the speed of thought"
            lorem="Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience."
          />
          <div className="get-started">
            <button>Get started</button>
            <div className="play-video">
              <img src={play} />
              Watch the Video
            </div>
          </div>
        </div>
        <img src={amino} />
      </div>

      <div className="product-specifically" id="Product">
        <h1>Product was Built Specifically for You</h1>
        <div className="specifically">
          <div className="card-group">
            <Specifically
              src={icon_2}
              head="Design surveys"
              text="Sports betting, lottery and bingo playing for the fun"
            />
            <Specifically
              src={icon_1}
              head="First click tests"
              text="While most people enjoy casino gambling,"
            />
            <Specifically
              src={icon_3}
              head="Preference tests"
              text="The Myspace page defines the individual."
            />
            <Specifically
              src={icon_4}
              head="Five second tests"
              text="Personal choices and the overall personality of the person."
            />
          </div>
          <button>sign up now</button>
        </div>
      </div>
    </div>
  );
}
