import image from "../../../../Assests/images/logo.png";
import troggler from "../../../../Assests/images/Sort.svg";
import sign from "../../../../Assests/images/Item → Link 2.svg";
import appointment from "../../../../Assests/images//kart.png";
import corp from "../../../../Assests/images/Corporate.png";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../../../functins/functins";
const Navbar = () => {
  const { items } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  console.log(items);

  const removItemHandler = (date) => {
    dispatch(removeItem(date));
  };

  const increaseIQuantityHandler = (date) => {
    dispatch(increaseQuantity(date));
  };

  const decreaseIQuantityHandler = (date) => {
    dispatch(decreaseQuantity(date));
  };

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
                  <Link to="/" className="dropdown-item px-2 ">
                    shop-catalog
                  </Link>

                  <Link to="/Carporate" class="nav-link  link-body-emphasis">
                    <img src={corp} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/Homepage" class="nav-link px-2 link-body-emphasis">
                    Hospital
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
                        <Link to="/ShopSingle" className="dropdown-item">
                          shop-single
                        </Link>
                        <Link to="/Checkout" className="dropdown-item">
                          Check out
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
              <img src={sign} alt="" />
            </Link>

            <span
              class="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <img
                style={{ height: 40 }}
                src={appointment}
                class="img-fluid"
                alt="..."
              />
            </span>
            {/* off Canvass */}
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            Your Cart
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        {/* content area */}
        <div class="offcanvas-body">
          {items?.map((product) => {
            return (
              <>
                <div className="text-black">
                  <h6>{product?.heading}</h6>

                  <div className="">
                    <img
                      src={product?.immageUrl}
                      style={{ height: 100 }}
                      className="img-fluid"
                      alt="pic"
                    />
                  </div>
                
                  <div className="d-flex">
                    <button
                      className="bg-primary p-2 m-2  text-white bg-opacity-75 border-0 rounded-2"
                      onClick={() => decreaseIQuantityHandler(product)}
                    >
                      -
                    </button>
                    <span className="mt-3">{product?.Quantity}</span>
                    <button
                      className="bg-primary p-2 m-2  text-white bg-opacity-75 border-0 rounded-2"
                      onClick={() => increaseIQuantityHandler(product)}
                    >
                      +
                    </button>
                  </div>
                  {/* <div className="d-flex ">
                    <span className="px-3">
                    {product?.OldPrice}
                      </span>
                      <span>
                    {product?.NewPrice}
                      </span>
                  </div> */}
                  
                  <button
                    className="bg-primary p-2 m-2 text-white bg-opacity-75 border-0 rounded-3"
                    onClick={() => removItemHandler(product)}
                  >
                    Remove
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <Link to="/Checkout">
          <button className="mx-5 bg-success p-2 px-3  m-2 text-white bg-opacity-75 border-0 rounded-3">
            Checkout
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
