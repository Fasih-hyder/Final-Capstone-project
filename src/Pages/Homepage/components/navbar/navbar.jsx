import image from "../../../../Assests/images/logo.png";
import troggler from "../../../../Assests/images/Sort.svg";
import sign from "../../../../Assests/images/Item → Link 2.svg";
import appointment from "../../../../Assests/images/Item → Link.svg";
import corp from "../../../../Assests/images/Corporate.png";
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg  ">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img height={40} src={image} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="">
              <img src={troggler} />
            </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto gap-3 mt-2 mx-3 mb-2 mb-lg-0">
              <li class="nav-item dropdown ">
                <Link
                  class="nav-link dropdown-toggle "
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </Link>
                <ul class="dropdown-menu">
                  <Link to="/" class="nav-link px-2 link-body-emphasis">
                    Home
                  </Link>
                  <Link
                    to="/Carporate"
                    class="nav-link px-2 link-body-emphasis"
                  >
                    <img src={corp} className="img-fluid" alt="" />
                  </Link>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  User Account
                </a>
              </li>
              <li class="nav-item">
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <ul class="dropdown-menu">
                    <li>
                      <Link to="#" class="dropdown-item ">
                        Shop
                      </Link>
                      <ul class="submenu ">
                        <li className="dropdown-item">shop-catalog</li>
                        <Link to="/ShopSingle">
                          {" "}
                          <li className="dropdown-item">shop-single</li>
                        </Link>
                        <Link to="/Checkout">
                          {" "}
                          <li className="dropdown-item">Check out</li>
                        </Link>
                      </ul>
                    </li>

                    <Link to="/Aboutus" class="nav-link  link-body-emphasis">
                      About us
                    </Link>
                  </ul>
                </li>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Documentation
                </a>
              </li>
            </ul>
            <Link to="/Signin">
              <img src={sign} />
            </Link>
            <a href="#">
              <img src={appointment} />
            </a>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
