import logo from "./logo.svg";
import "./App.css";
import { Button, Layout } from "antd";
import { Cascader } from "antd";
import { Avatar } from "antd";
import { Image } from "antd";
import { Row, Col } from "antd";
import { Typography, Divider } from "antd";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Title, Paragraph, Text, Link } = Typography;

function App() {
  return (
    <div className="App">
      <header className="header">

        <Title className="header-logo" level={2}>
          Logo
        </Title>

        <div className="header-right">

          <ul className="header-ul">
            <li>Home</li>
            <li>Discovery</li>
            <li>Photo</li>
            <li>Contact</li>
            <span>

              <Avatar size="small" icon={<UserOutlined />} />
            </span>
          </ul>
        </div>
      </header>

      <div className="home">
        <div className="container">
          <div className="home-icon">

            <Title className="title-home">
              <div className="status-1">      <i class="fa fa-arrow-left" aria-hidden="true"></i> </div>
              <span className="status">  <i class="fa fa-home" aria-hidden="true"></i></span>

              <span className="story"> STORY /</span>
              <span className="world">WORLD NEW</span>
            </Title>


            <label for="nav-mobile-input" className="slider-icon">
              {" "}
              <i class="fa fa-sliders" aria-hidden="true"></i>
            </label>
            <input className="input-moblie" type="checkbox" id="nav-mobile-input" />


            <label for="nav-mobile-input" className="nav-overlay"></label>
            <div className="nav-list">
              <Title level={2} className="nav-logo">Logo</Title>
              <nav className="nav-mobile">
                <ul className="nav__mobile-list">
                  <li className="nav__moblie-link"><i class="fa fa-home" aria-hidden="true"></i>Home</li>
                  <li className="nav__moblie-link" > <i class="fa fa-safari" aria-hidden="true"></i>Discovery</li>
                  <li className="nav__moblie-link"> <i class="fa fa-picture-o" aria-hidden="true"></i>Photo</li>
                  <li className="nav__moblie-link"><i class="fa fa-envelope-o" aria-hidden="true"></i>Contact</li>
                  <li className="nav__moblie-link"><i class="fa fa-user" aria-hidden="true"></i>Folile</li>
                </ul>
              </nav>
              <div className="nav-footer">
                <ul className="nav-footer__list">
                  <li>Home</li>
                  <li>Discovery</li>
                  <li>Photo</li>
                  <li>Contact</li>
                  <li>Home</li>
                  <li>Discovery</li>
                  <li>Photo</li>
                  <li>Contact</li>
                </ul>
                <div className="nav-footer__icon">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                  <i class="fa fa-globe" aria-hidden="true"></i>
                </div>
              </div>
            </div>


          </div>
          <div class="row no-gutter">
            <div class="col n-g-r">

              <div className="img-home">
                < img img src="https://i.ibb.co/8NBTQfm/mountain.png" alt="mountain" className="img-one" />

                <div className="img-content">
                  <Title className="title-img" level={2}>
                    WORLD NEWS
                  </Title>
                  <p>Lorem ipsum dolor sit amet, in eam odio amet,</p>
                  <Avatar
                    size="small"
                    icon={<UserOutlined />}
                    src=".//img/avatar.png"
                  />
                </div>
              </div>
            </div>
            <div class="col n-g-l">
              <div className="info">
                <div className="info-content">
                  <div className="input-info">
                    <Title className="title-info" level={2}>
                      Select a date
                    </Title>
                    <select id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="vw">VW</option>
                      <option value="audi" selected>
                        seclect
                      </option>
                    </select>
                  </div>

                  <div className="input-info m-t">
                    <Title className="title-info" level={2}>
                      Enter the first keywords
                    </Title>
                    <Input id="input" placeholder="" />
                  </div>
                  <Button className="btn-input m-t">SEARCH</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <hr />
          <div class="row ">

            <div class="col-sm respon">
              <div className="content-left">
                {" "}
                <Avatar
                  size="small"
                  icon={<UserOutlined />}
                  src=".//img/avatar.png"
                />
                <p>Phasellus eu nulla malesuada, luctus diam.</p>
              </div>
            </div>
            <div class="col-sm ">
              <div className="content-mid">
                <p>
                  Lorem ipsum dolor sit amet, consectetur opikhfkseo adipisifwcing elit, sed do eiusmod temporeop iodkjnl incididunt ut labore et dolore roipi magnaropi aliquia.Ut enim ad minim veeniam, quiswepo nostruklad uio exercitation ullamco laboris nisi ut aliquip ex eawiopl commodo consequat.Duis ropil aute irure dolor inop reprehenderit in tufpoyiopy voluptate velit esse plijxn cillum dolore eu fugiatupi nulla parieratur.Excepteuri sint.
                </p>
              </div>

            </div>
            <div class="col-sm">
              <div className="content-right">
                <p>
                  Culpa qui officia deserunt mollit anim id estio ropiluyl laborum.Sed ut perspiciatis unde omnis iste natuswi error sit voluptartem accusantium polu doloremquep laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis etl quasi ropeior architecto opil beatae vitae dictaeol sunt explicabo.
                </p>
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <span>2 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content1">
        <div className="container">
          <div className="content-img">
            <img src="https://i.ibb.co/jL0gLmd/voi.png" alt="voi" />
          </div>
          <div class="row row-content">

            <div class="col-8 c-t-l content">

              <div className=" content1-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sodales
                  primis, mollis viverra conubia ligula inceptos laoreet libero
                  tortor, nascetur non habitasse iaculis tempor nec egestas
                  fames augue, platea porta integer nostra curae sed arcu. Nec
                  ut diam vulputate ante scelerisque ridiculus lobortis orci mi
                  curae himenaeos quis, senectus curabitur ullamcorper a
                  porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium
                  vestibulum dui gravida in potenti interdum, class rhoncus
                  neque eget magna at
                </p>
                <p>
                  Ullamcorper porttitor non pharetra cursus nisl mollis
                  pellentesque primis penatibus platea, dictum himenaeos eget mi
                  bibendum ad molestie aliquet curae quis quisque, nunc duis ac
                  at elementum dui integer viverra tempus. Lacinia bibendum diam
                  senectus egestas nec molestie convallis aenean hac tempus,
                  vivamus purus congue euismod fringilla cursus donec est eu
                  blandit platea, feugiat vitae netus orci habitant accumsan
                  placerat morbi nostra.
                </p>
              </div>
            </div>
            <div class="col-4 c-t-r">
              <div className="content1-right">
                <p>
                  In hac habitasse platea dictumst. Sed nec
                  venenatis odio. Nulla faucibus ipsum sed faucibus accumsan.
                  Donec rhoncus luctus.
                </p>
              </div>

            </div>
          </div>
          <div className="pagination"><nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item"><a class="page-link" href="#">6</a></li>

              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav></div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div class="row">
            <div class="col-lg-1 col-md-6 m-b p-l">
              <Title className="title-logo" level={2}>
                Logo
              </Title>
            </div>
            <div class="col-lg-4 col-md-6">
              <div className="footer-menu">
                <ul className="footer-ul">
                  <li>Home</li>
                  <li>Discovery</li>
                  <li>Photos</li>
                  <li>Contact</li>
                </ul>{" "}
                <ul className="footer-ul">
                  <li>About</li>
                  <li>Help</li>
                  <li>Teams</li>
                  <li>Guidlines</li>
                </ul>
                <ul className="footer-ul">
                  <li>Testimonials</li>
                  <li>Advertise</li>
                  <li>Integrations</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 p-l">
              <div className="footer-email">
                <form className="footer-form">
                  <input
                    type="text"
                    placeholder="Email"
                    id="fname"
                    name="name"
                  ></input>
                  <button className="form-btn">
                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                  </button>
                </form>
                <p>Stay in touch with us for the freshest products!</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              {" "}
              <div className="footer-icon">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-globe" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
