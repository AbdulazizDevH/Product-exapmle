import srt_img_1 from '../images/icons/contents_img_1.png';
import srt_img_2 from '../images/icons/contents_img_2.png';
import srt_img_3 from '../images/icons/contents_img_3.png';

const Content = (props) => {
  return (
    <div className="strategies">
      <h2>{props.text_h2}</h2>
      <span>{props.text_span}</span>
      <div className="card-group">
        <div className="card">
          <img src={srt_img_1} />
          <div className="card-content">
            <p>By <span>Wahid Ari</span> | 03 March 2019</p>
            <h2>{props.card_text}</h2>
          </div>
        </div>
        <div className="card">
          <img src={srt_img_2} />
          <div className="card-content">
            <p>By <span>Wahid Ari</span> | 03 March 2019</p>
            <h2 className="green-text">{props.card_text}</h2>
          </div>
        </div>
        <div className="card">
          <img src={srt_img_3} />
          <div className="card-content">
            <p>By <span>Wahid Ari</span> | 03 March 2019</p>
            <h2>{props.card_text}</h2>
          </div>
        </div>
      </div>

      <div className="carousel-navigation">
        <span className=""></span>
        <span className="green"></span>
        <span className=""></span>
      </div>
    </div>
  )
}

export default function Strategies() {
  return (
    <>
      <Content text_h2="Contents Strategies"
               text_span="We focus on ergonomics and meeting you where you work. It's only a keystroke away." 
               card_text="Increasing Prosperity With Positive Thinking" />
    </>
  )
}