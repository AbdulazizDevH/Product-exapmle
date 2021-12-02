import main_amino from "../images/icons/document_amino.png";
import search_engines from '../images/icons/search_engines.png';
import image_folder from '../images/icons/image_folder.png';
import check_icon_1 from '../images/icons/check_icon_1.png';
import check_icon_2 from '../images/icons/check_icon_2.png';
import check_icon_3 from '../images/icons/check_icon_3.png';

const Management = (props) => {
  return (
    <div className="main-content">
      <div className="main-content-text">
        <p>{props.text_1}</p>
        <h2>{props.text_2}</h2>
        <span>{props.text_3}</span>
        <p>{props.text_4}</p>
        <span>{props.text_5}</span>
        <p>{props.text_6}</p>
        <span>{props.text_7}</span>
      </div>
      <img src={main_amino} />
    </div>
  )
}

const Support = (props) => {
  return (
    <div className="main-content">
      <img src={search_engines} />
      <div className="main-content-text">
        <p>{props.text_1}</p>
        <h2>{props.text_2}</h2>
        <span>{props.text_3}</span>
        <div className="check">
          <img src={check_icon_1} />
          <span>{props.text_4}</span>
        </div>
        <div className="check">
          <img src={check_icon_2} />
          <span>{props.text_5}</span>
        </div>
        <div className="check">
          <img src={check_icon_3} />
          <span>{props.text_6}</span>
        </div>
      </div>
    </div>
  )
}

const Collaborative = (props) => {
  return (
    <div className="main-content">
      <div className="main-content-text">
        <p>{props.text_1}</p>
        <h2>{props.text_2}</h2>
        <span>{props.text_3}</span>
        <p>{props.text_4}</p>
        <span>{props.text_5}</span>
        <p>{props.text_6}</p>
        <span>{props.text_7}</span>
      </div>
      <img src={image_folder} />
    </div>
  )
}

export default function Main() {
  return (
    <div className="main" id="Customers">
      <Management 
              text_1="Effortless Validation for" 
              text_2="Management" 
              text_3="The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person." 
              text_4="Accessory makers" 
              text_5="While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun" 
              text_6="Alterationists" 
              text_7="If you are looking for a new way to promote your business that won’t cost you more money," />
      <Support 
              text_1="Easier decision making for"
              text_2="Customer Support" 
              text_3="The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person." 
              text_4="Never worry about overpaying for your energy again." 
              text_5="We will only switch you to energy companies that we trust and will treat you right" 
              text_6="We track the markets daily and know where the savings are." />
      <Collaborative
              text_1="Effortless Validation for" 
              text_2="Management" 
              text_3="The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person." 
              text_4="Accessory makers" 
              text_5="While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun" 
              text_6="Alterationists" 
              text_7="If you are looking for a new way to promote your business that won’t cost you more money," />       
    </div>
  )
}