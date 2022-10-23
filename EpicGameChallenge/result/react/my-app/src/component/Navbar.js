import logo from "../assets/epic-logo.png"
import logoWorld from "../assets/icons/world.png"
import logoUser from "../assets/icons/user.png"
export default function Navbar(){
 return (
   <nav class="navbar navbar-expand-lg bg-grey text-light-grey p-0">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#"><img src={logo} alt="" className="logo"/></a>
      <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item under-line h-55">
            <a class="nav-link text-light-grey " aria-current="page" href="#">STORE</a>
          </li>
          <li class="nav-item navbar-button">
            <a class="nav-link text-light-grey" aria-current="page" href="#">FAQ</a>
          </li>
          <li class="nav-item navbar-button">
            <a class="nav-link text-light-grey " aria-current="page" href="#">HELP</a>
          </li>
          <li class="nav-item navbar-button">
            <a class="nav-link text-light-grey" aria-current="page" href="#">UNREAL ENGINE</a>
          </li>
        </ul>
        <div className="d-flex justify-ontent-center align-items-center navbar-button ">
         <div className="px-4 navlogocenter height-100">
          <img src={logoWorld} alt="" className="worlLogo"/>
         </div>
         <div className="px-4 navlogocenter gap-2">
          <img src={logoUser} alt="" />
          <span className="h7">SIGN IN</span>
         </div>
         <div className="px-4 navlogocenter h-100">
         <span className="h7 ">DOWNLOAD</span>
         </div>
        </div>
      </div>
    </div>
  </nav>
 );
}