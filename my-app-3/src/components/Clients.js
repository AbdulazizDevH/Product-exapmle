import client_1 from '../images/icons/client_1.png';
import client_2 from '../images/icons/client_2.png';
import client_3 from '../images/icons/client_3.png';
import star from '../images/icons/stars.png';
import screen_img from '../images/icons/screen.png';

const ClientCard = (props) => {
  return (
    <div className="client-card">
      <div className="star">
        <img src={star} />
      </div>
      <span>{props.text_span}</span>
      <div className="client-user">
        <img src={props.img} />
        <div className="job">
          <b>Wahid Are</b>
          <p>Designer</p>
        </div>
      </div>
    </div>
  )
}

const JoinComp = (props) => {
  return (
    <div className="join-comp">
      <div className="boost">
        <h2>{props.text_h2_join}</h2>
        <button>Get This</button>
      </div>
      <img src={props.screen_img} />
    </div>
  )
}

const ClientSay = (props) => {
  return (
    <div className="client">
      <h1>{props.text_head}</h1>
      <p>{props.p_1}</p>
      <div className="client-card-group">
        <ClientCard text_span="Product helps you see how many more days you 
                              need to work to reach your financial goal."
                    img={client_1} />
        <ClientCard text_span="Product helps you see how many more days you 
                              need to work to reach your financial goal."
                    img={client_2} />
        <ClientCard text_span="Product helps you see how many more days you 
                              need to work to reach your financial goal."
                    img={client_3} />
      </div>
        <JoinComp text_h2_join="Join 100 Compannies who boost their business with Product"
                  screen_img={screen_img}  />
    </div>
  )
}

export default function Clients() {
  return (
    <>
      <ClientSay text_head="What Clients Say"
                 p_1="Problems trying to resolve the conflict between 
                      the two major realms of Classical physics: Newtonian mechanics" />
    </>
  )
}