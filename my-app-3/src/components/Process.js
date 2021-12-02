import user_1 from "../images/icons/user_1.png";
import user_2 from "../images/icons/user_2.png";
import user_3 from "../images/icons/user_3.png";
import user_4 from "../images/icons/user_4.png";

const Client = (props) => {
  return (
    <div className="process" >
      <h2>{props.text_h2}</h2>
      <span>{props.text_span}</span>
      <div className="user-group">
        <div className="user-card">
          <img src={user_1} />
          <span>
            {props.text_1} <b></b> <b></b>{" "}
          </span>
        </div>
        <div className="user-card">
          <span>
            {props.text_1} <b></b> <b></b>{" "}
          </span>
          <img src={user_4} />
        </div>
        <div className="user-card">
          <span>
            {props.text_1} <b></b> <b></b>{" "}
          </span>
          <img src={user_2} />
        </div>
        <div className="user-card">
          <img src={user_3} />
          <span>
            {props.text_1} <b></b> <b></b>{" "}
          </span>
        </div>
      </div>
      <button>{props.btn_text}</button>
    </div>
  );
};

export default function Process() {
  return (
    <>
      <Client
        text_h2="Quick & Easy Process"
        text_span="Do you require some help for your project: Conception workshop,
                          prototyping, marketing strategy, landing page, Ux/UI?"
        text_1="I can take care of your pitch"
        text_2="I can prototype your app"
        text_3="I can design you website"
        text_4="I can help marketing strategy"
        btn_text="Contact our expert"
      />
    </>
  );
}
