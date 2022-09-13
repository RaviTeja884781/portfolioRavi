let React = require("react");
let ReactDOM = require("react-dom");
let Carousel = require("react-responsive-carousel").Carousel;

let ProjectImg = React.createClass({
  render() {
    return (
      <Carousel
      // showArrows={true}
      // onChange={onChange}
      // onClickItem={onClickItem}
      // onClickThumb={onClickThumb}
      >
        <div>
          <img src="../../images/project/mern/1.png" alt="pic1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../../images/project/mern/2.png" alt="pic2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="../../images/project/mern/3.png" alt="pic3" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="../../images/project/mern/4.png" alt="pic4" />
          <p className="legend">Legend 4</p>
        </div>
      </Carousel>
    );
  },
});
ReactDOM.render(<ProjectImg />, document.querySelector(".demo-carousel"));

export default ProjectImg;
