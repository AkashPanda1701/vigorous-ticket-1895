function navbar() {
  return `<div id="navbar">
    <div>
      <img id="orange" src="https://i.ibb.co/pXRS2p3/image.png" alt="" />
      <img id="black" src="https://i.ibb.co/qCVbqVB/image.png" alt="" />
      <a href="#">Why Harvest?</a>
      <a href="#">Features</a>
      <a href="#">Customers</a>
    </div>
    <div>
      <a href="#">Sign in</a>
      <button class="signup"><a href="#">Try Harvest free</a></button>
      <button id="menu">
        <img id="openmenu"
          src="http://dce.rocketausgate.com/_images/menu-icon.png"
          alt=""
        />
        <img id="closemenu" src="https://flexitauctions.com/wp-content/uploads/2019/01/white-x-png-2.png" alt="">
        Menu
      </button>
    </div>
  </div>
  <div id="menudiv">
    <div>
      <div><a href="#"> Why Harvest?</a></div>
      <div><a href="#"> Features</a></div>
      <div><a href="#"> Customers</a></div>
    </div>

    <div>
      <button class="menuBtn"><a href="#">Sign in</a></button>
      <button class="menuBtn"><a href="#">Try Harvest free</a></button>
    </div>
  </div>`;
}

function openMenu() {
  document.getElementById("menudiv").style.display = "inherit";
  document.getElementById("openmenu").style.display = "none";
  document.getElementById("closemenu").style.display = "inherit";
}

function closeMenu() {
  document.getElementById("menudiv").style.display = "none";
  document.getElementById("closemenu").style.display = "none";
  document.getElementById("openmenu").style.display = "inherit";
}

export { navbar, openMenu, closeMenu };
