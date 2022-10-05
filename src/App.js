import logo from './logo.svg';
import './App.css';
import { Spin } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/all.min.css';
import 'antd/dist/antd.css';
// https://premiumlayers.com/html/maxelectric/index.html

function App() {
  
  return (
    <>
      {/* ----------------------start header sec--------------------- */}
      <section>
        <nav class="navbar navbar-expand-lg" aria-label="Fifth navbar example">
          <div class="container">

            <img src={require('./image/logo.png')} alt="" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
              Menu<span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample05" >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ps-5 main">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                  <ul className='sub'>
                    <li><a href="">Home version 1</a></li>
                    <li><a href="">Home version 2</a></li>
                    <li><a href="">Home version 3</a></li>
                    <li><a href="">Home4 Animated Text</a></li>
                    <li><a href="">Home5 Animated text Overlay</a></li>
                    <li><a href="">Home6 background Video</a></li>
                    <li><a href="">Home7 BG Video Overlay</a></li>
                    <li><a href="">Home8 Boxed</a></li>
                    <li><a href="">Home9 Gradient</a></li>
                    <li><a href="">Home10 Boxed-2</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Elements</a>
                  <ul className='sub'>
                    <li><a href="">Section Title</a></li>
                    <li><a href="">Banner</a></li>
                    <li><a href="">Pagination</a></li>
                    <li><a href="">Brands</a></li>
                    <li><a href="">Newsletter</a></li>
                    <li><a href="">Team</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link ">products</a>
                  <ul className='sub'>
                    <li><a href="">Smart Phone</a></li>
                    <li><a href="">Note Book</a></li>
                    <li><a href="">Tablets</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link ">Pages</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Blog</a>
                  <ul className='sub'>
                    <li><a href="">Dropdown Repeat</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Blog Left Sidebar</a></li>
                    <li><a href="">Blog Style2</a></li>
                    <li><a href="">Blog2 Left Sidebar</a></li>
                    <li><a href="">Blog2 Right Sidebar</a></li>
                    <li><a href="">Blog Details</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link ">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ">Contacts</a>
                </li>

                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>

              </ul>
              <form role="search d-block d-xs-none d-md-none d-lg-block">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search"></input>
              </form>
            </div>
          </div>
        </nav>
      </section>


      {/* ----------------------end header sec--------------------- */}

      {/* ----------------------start img sec-------------------- */}
      <section className='bg'>
        <div className="container">
          <main class="px-3">
            <h6 className='white'>Best price : $866</h6>
            <h1 className='white'>Choose Your Pc And Play!</h1>
            <h2 class="fs-5 mt-4 white">The Altimate Play</h2>
            <button class="mt-4 btn1">
              <span>SHOP NOW</span>
            </button>
          </main>
        </div>
      </section>

      {/* ----------------------end img sec-------------------- */}
      {/* -------------------start new arriaval sec-------------- */}
      <section>
        <div className="container">
          <h3>NEW ARRIVAL</h3>
          <div class="row row-cols-1 row-cols-sm-1 row-cols-lg-2 g-5 mt-3 mb-5">
            <div class="col-lg-6 col-sm-12">
              <div class="card1
               caption_main">
                <div className="new">
                  <div className="trans">
                    <img src={require('./image/speaker.webp')} alt="" />
                  </div>
                  <div className="content d-block d-lg-none d-xl-block d-md-block d-xs-none d-sm-none">
                    <h6>NEW ARRIVAL</h6>
                    <h4 className='mt-3'>BLUTOOTH <br></br>SPEAKER</h4>
                    <a href="">
                      <button className='mt-4'>SHOP NOW</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="card1 caption_main">
                <div className="new">
                  <div className="trans">
                    <img src={require('./image/speaker1.webp')} alt="" />
                  </div>
                  <div className="content d-block d-lg-none d-xl-block d-md-block d-xs-none d-sm-none">
                    <h6>NEW ARRIVAL</h6>
                    <h4 className='mt-3'>BLUTOOTH <br></br>SPEAKER</h4>
                    <a href="">
                      <button className='mt-4'>SHOP NOW</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------end new arriaval sec-------------- */}
      {/* -------------------start shipping sec---------------- */}
      <section className='bg-light'>
        <div class="container">
          <div class="row pt-5">
            <div class="col-lg-3 col-md-6 col-xs-12 col-sm-12 text-sm-center px-5 pb-5">
              <div class="flex">
                <div class="icon1 text-primary align-self-center"><img src={require('./image/ship.webp')} alt="">
                </img>
                </div>
                <div class="cont">
                  <h5 class="title">Free shipping</h5>
                  <p>Free shipping all order</p>
                </div>
              </div>
            </div>
            <div class="col col-lg-3 col-md-6 col-xs-12  col-sm-12 text-sm-center px-5 pb-5">
              <div class="flex">
                <div class="icon1 text-primary align-self-center"><img src={require('./image/support.webp')} alt="">
                </img>
                </div>
                <div class="cont">
                  <h5 class="title">ONLINE SUPPORT</h5>
                  <p>Support 24hours a day</p>
                </div>
              </div>
            </div>
            <div class="col col-lg-3 col-md-6 col-xs-12 col-sm-12 text-sm-center px-5 pb-5">
              <div class="flex">
                <div class="icon1 text-primary align-self-center"><img src={require('./image/back.webp')} alt="">
                </img>
                </div>
                <div class="cont">
                  <h5 class="title">100% MONEY BACK</h5>
                  <p>We Insure Secure Payment</p>
                </div>
              </div>
            </div>
            <div class="col col-lg-3 col-md-6 col-xs-12  col-sm-12 text-sm-center px-5 pb-5">
              <div class="flex">
                <div class="icon1 text-primary align-self-center"><img src={require('./image/return.webp')} alt="">
                </img>
                </div>
                <div class="cont">
                  <h5 class="title">Money Return</h5>
                  <p>30days For Free Return</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* ----------start feature product-------------------- */}
      <section>
        <div className="container">
          <h3 className='mt-5'>SMART PHONES</h3>
          <p>There are many variations of passages of brands available</p>

          <div class="album py-5 bg-light">
            <div class="container">

              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                <div class="col">
                  <div class="card shadow-sm">
                    <img src={require('./image/p1.webp')} alt="" />
                    <div class="card-body">
                      <h6 className='mt-3'>SamsungA12</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 86.00</h3>
                      <div className="flex mb c1">
                        <div className='circle ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <img src={require('./image/p2.webp')} alt="" />
                    <div class="card-body">
                      <h6 className='mt-3'>Motorolla</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 89.00</h3>
                      <div className="flex mb c1">
                        <div className='circle ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <img src={require('./image/p3.webp')} alt="" />

                    <div class="card-body">
                      <h6 className='mt-3'>Nokia 5.4</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 80.00</h3>
                      <div className="flex mb c1">
                        <div className='circle ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col d-block d-xs-none d-md-none d-lg-block">
                  <div class="card shadow-sm">
                    <img src={require('./image/p4.webp')} alt="" />

                    <div class="card-body">
                      <h6 className='mt-3'>Moto e  7i</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 69.00</h3>
                      <div className="flex mb c1">
                        <div className='circle ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>






              </div>
            </div>
          </div>


        </div>
      </section>
      {/* ----------end feature product-------------------- */}
      {/* ----------start brand sec------------------------ */}

      <section>
        <div className="container">
          <div>
            <h3 className='mt-5'>BY BRANDS</h3>
            <p>There are many variations of passages of brands available, </p>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5 mt-3">
            <div class="col-lg-3 col-sm-6">
              <div class="card shadow-sm caption_main">
                <div class="caption_img">
                  <img src={require('./image/lap1.webp')} alt=""></img>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card shadow-sm caption_main">
                <div class="caption_img">
                  <img src={require('./image/tab.webp')} alt=""></img>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card shadow-sm caption_main">
                <div class="caption_img">
                  <img src={require('./image/ipad.webp')} alt=""></img>
                </div>
              </div>
            </div>
            <div class="col-lg-3   col-sm-6">
              <div class="card shadow-sm caption_main">
                <div class="caption_img">
                  <img src={require('./image/tv.webp')} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------end brand sec------------------------ */}

      {/* -------------start upcoming product sec------------------- */}
      <section>
        <div className="container mt-5 pt-5">
          <div>
            <div>
              <div className="row g-3">
                <div className="col-lg-8 col-xs-12">
                  <div className='f-left upc bg-color'>
                    <a href="#">
                      <img src={require('./image/p9.webp')} alt="" />
                    </a>
                  </div>
                  <div className='upc1 f-left bg-color'>
                    <div>
                      <h5 className='mt-4'>
                        <a href="#">Dummy Product Name</a>
                      </h5>
                      <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elitest, sed do eiusmod tempor incididunt ut labore et dolores top magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip ex ea commodo consequat. laborum. </p>
                    </div>
                    <div className="flex mt-5 mx-5">
                      <div className="circle_c ">
                        133
                      </div>
                      <div className="circle_c">
                        12
                      </div>
                      <div className="circle_c">
                        58
                      </div>
                      <div className="circle_c">
                        45
                      </div>
                    </div>
                    <div className="flex mx-5">
                      <p>Days</p>
                      <p>Hour</p>
                      <p>Mint</p>
                      <p>Sec</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className='phone'>
                    <img src={require('./image/p10.webp')} alt="" />
                    <div className="phone_p">
                      <h5>
                        <a href="#">Product Name</a>
                      </h5>
                      <div className='p1'>
                        <p>Lorem inspum dollar</p>
                        <p>amet, consectetur</p>
                        <p>adipisicing elitest,</p>
                        <p>eiusmod tempor</p>
                        <p>labore et dolore.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------end upcoming product sec------------------- */}


      {/* ------------start product list sec------------------------ */}
      <section>
        <div className="container">
          <div className="mt-5 pt-3 pb-5">
            <h3> PRODUCT LIST</h3>
            <p>There are many variations of passages of brands available</p>
          </div>

          <div class="album bg-light">
            <div class="container">

              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
                <div class="col">
                  <div class="card shadow-sm">
                    <img src={require('./image/p14.webp')} alt="" />
                    <div class="card-body">
                      <h6 className='mt-3'>FIRE TV</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 60.00</h3>
                      <div className="flex mb c1">
                        <div className='circle ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <img src={require('./image/p15.webp')} alt="" />
                    <div class="card-body">
                      <h6 className='mt-3'>CAMERAS OPTICS</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 46.00</h3>
                      <div className="flex mb c1">
                        <div className='circle ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <img src={require('./image/6.webp')} alt="" />
                    <div class="card-body">
                      <h6 className='mt-3'>AIR FRAYER</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 69.50</h3>
                      <div className="flex mb c1">
                        <div className='circle ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col d-block d-xs-none d-md-none d-lg-block">
                  <div class="card shadow-sm">
                    <img src={require('./image/p17.webp')} alt="" />
                    <div class="card-body">
                      <h6 className='mt-3'>SPOTSCLEAN CARPET</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 30.00</h3>
                      <div className="flex mb c1">
                        <div className='circle ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="album py-5 bg-light">
            <div class="container">

              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
                <div class="col">
                  <div class="card shadow-sm">
                    <img src={require('./image/WA.webp')} alt="" />
                    <div class="card-body">
                      <h6 className='mt-3'>SMART WATCH</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 35.00</h3>
                      <div className="flex mb c1">
                        <div className='circle ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <img src={require('./image/p18.webp')} alt="" />
                    <div class="card-body">
                      <h6 className='mt-3'>ALEXA-ECHO DEVICES</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 39.00</h3>
                      <div className="flex mb c1">
                        <div className='circle ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <img src={require('./image/p19.webp')} alt="" />
                    <div class="card-body">
                      <h6 className='mt-3'>NESPRESSO PLUS </h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 68.00</h3>
                      <div className="flex mb c1">
                        <div className='circle ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col d-block d-xs-none d-md-none d-lg-block">
                  <div class="card shadow-sm">
                    <img src={require('./image/p20.webp')} alt="" />
                    <div class="card-body">
                      <h6 className='mt-3'>SMART SPEAKER</h6>
                      <div className="icon">
                        <i class="fa-solid fa-star yellow "></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                        <i class="fa-solid fa-star-half-stroke yellow"></i>
                        <i class="fa-solid fa-star yellow"></i>
                      </div>
                      <h3>$ 22.00</h3>
                      <div className="flex mb c1">
                        <div className='circle ml'>
                          <i class="fa-solid fa-heart text-center"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-brands fa-searchengin"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-rotate"></i>
                        </div>
                        <div className='circle'>
                          <i class="fa-solid fa-cart-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------end product list sec------------------------ */}
      {/* -------------start latest blog sec----------------------- */}
      <section>
        <div className="container">
          <h3 class="text-center pb-2 pt-4">LATEST BLOG</h3>
          <h6 class="text-center text-secondary pb-5">There are many variations of passages of brands available</h6>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
            <div class="col-sm-4 col-xs-6">
              <div class="card shadow-sm caption_main">
                <div class="caption_img">
                  <img src={require('./image/p11.webp')} alt=""></img>
                </div>
                <div class="caption_box">
                  <div>
                    <h5 className='mt-4'>
                      <a href="#" className='text'>Dummy Product Name</a>
                    </h5>
                    <p className='lorem text'>There are many variations of passages of psum available, but the majority have suffered alterat on in some form, by injected humour, randomis words which don't look even slightly.</p>
                  </div>
                  <div className='mt-5'>
                    <a href="#" className='text px-5 mx-2'>Read More</a>
                  </div>
                  <div className=" flex blog mt-5">
                    <i class="fa-solid fa-heart"></i>
                    <h6 className='text'>89 likes</h6>
                    <i class="fa-solid fa-message"></i>
                    <h6 className='text'>59 Comments</h6>
                    <i class="fa-solid fa-share-nodes"></i>
                    <h6 className='text'>29 Shares</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col-xs-6 col-sm-4 ">
              <div class="card shadow-sm caption_main">
                <div class="caption_img">
                  <img src={require('./image/p12.webp')} alt=""></img>
                </div>
                <div class="caption_box">
                  <div>
                    <h5 className='mt-4'>
                      <a href="#" className='text'>Dummy Product Name</a>
                    </h5>
                    <p className='lorem text'>There are many variations of passages of psum available, but the majority have suffered alterat on in some form, by injected humour, randomis words which don't look even slightly. </p>
                  </div>
                  <div className='mt-5'>
                    <a href="#" className='text px-5 mx-2'>Read More</a>
                  </div>
                  <div className=" flex blog mt-5">
                    <i class="fa-solid fa-heart"></i>
                    <h6 className='text'>89 likes</h6>
                    <i class="fa-solid fa-message"></i>
                    <h6 className='text'>59 Comments</h6>
                    <i class="fa-solid fa-share-nodes"></i>
                    <h6 className='text'>29 Shares</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-xs-6">
              <div class="card shadow-sm caption_main">
                <div class="caption_img">
                  <img src={require('./image/p13.webp')} alt=""></img>
                </div>
                <div class="caption_box">
                  <div>
                    <h5 className='mt-4'>
                      <a href="#" className='text'>Dummy Product Name</a>
                    </h5>
                    <p className='lorem text'>There are many variations of passages of psum available, but the majority have suffered alterat on in some form, by injected humour, randomis words which don't look even slightly. </p>
                  </div>
                  <div className='mt-5'>
                    <a href="#" className='text px-5 mx-2'>Read More</a>
                  </div>
                  <div className=" flex blog mt-5">
                    <i class="fa-solid fa-heart"></i>
                    <h6 className='text'>89 likes</h6>
                    <i class="fa-solid fa-message"></i>
                    <h6 className='text'>59 Comments</h6>
                    <i class="fa-solid fa-share-nodes"></i>
                    <h6 className='text'>29 Shares</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------end latest blog sec----------------------- */}
      {/* ---------------start footer sec----------------------- */}
      <section>
        <div className="container">
          <div className="footer">
            <div className="padding">
              <div className="row">
                <div class="col-xl-4 col-lg-5 col-md-4">
                  <div>
                    <div className='px-5'>
                      <img src={require('./image/logo.png')} alt=""></img>
                    </div>
                    <div class="pt-5 py-5">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the subas industry's standard dummy text ever since the 1500s,</p>
                      <p>When an unknown printer took a galley of type and If you are going to use a passage of Lorem Ipsum scrambled it to make.</p>
                    </div>
                    <div className="flex1">
                      <div className='circle_f'>
                        <i class="fa-brands fa-facebook-f"></i>
                      </div>
                      <div className='circle_f'>
                        <i class="fa-brands fa-google-plus-g"></i>
                      </div>
                      <div className='circle_f'>
                        <i class="fa-brands fa-twitter"></i>
                      </div>
                      <div className='circle_f'>
                        <i class="fa-solid fa-rss"></i>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="col-xl-2 d-block d-xl-block d-lg-none d-md-none">
                  <div>
                    <h4>SHIPPING</h4>
                    <ul class="footer-menu">
                      <li className='pt-4'>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>New Products</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Discount Products</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Best Sell Products</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Popular Products</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Manufactirers</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Suppliers</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Special Products</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-3">
                  <div class="single-footer">
                    <h4 class="footer-title border-left">MY ACCOUNT</h4>
                    <ul class="footer-menu">
                      <li className='pt-4'>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>My Account</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>My Wishlist</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>My Cart</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Sign In</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Registration</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Check out</span></a>
                      </li>
                      <li>
                        <a href="#"><i class="zmdi zmdi-circle"></i><span>Oder Complete</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4">
                  <div class="single-footer">
                    <h4 class="footer-title border-left">GET IN TOUCH</h4>
                    <div class="footer-message">
                      <form action="">
                        <input type="text" placeholder='Your name here...' className='form mt-4' />
                        <input type="email" placeholder='Your email here...' className='form mt-3' />
                        <input type="text" style={{ height: "100px" }} placeholder='Your message here...' className='form mt-3' />
                      </form>
                      <button className='submit'>
                        <h6>SUBMIT MESSAGE</h6>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <Spin /> */}

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------end footer sec----------------------- */}
      <Spin />  
    </>
  );
}
export default App;
