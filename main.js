var dw = main = {};

dw.tsMain = `
<div class="main-header">
  <div class="main-header-menu"><span class="menu" onclick="main.btnShowNavMenu.doClick()">&#x2630;</span></div>
  <div class="main-header-title">Welcome</div>
  <div class="main-header-logo"><span class="chinese">&#x5C39;</span> Douglas Wan</div>
</div>
<div class="main-body">
  <p>Welcome to my GitHub Pages.</p></div>
</div>
<div class="main-navmenu" id="divNavMenu">
  <div class="main-navmenu-header">
    <div class="main-navmenu-header-menu"><span class="menu" onclick="main.btnHideNavMenu.doClick()">&#x2630;</span></div>
    <div class="main-navmenu-header-title"> &nbsp; </div>
    <div class="main-navmenu-header-logo"><span class="apple">&#x1F34E;</span></div>
  </div>  
  <div class="main-navmenu-body"> Navigation&nbsp;Menu </div>
</div> 
`;

dw.doLoad = function (page) {
    this.doRender(page);
}

dw.doRender = function (page) {
    document.body.innerHTML = dw.tsMain;
}

// btnShowNavMenu ========== ========== ========== 
dw.btnShowNavMenu = {};

dw.btnShowNavMenu.doClick = function () {
  var divNavMenu = document.getElementById("divNavMenu");
  divNavMenu.classList.add("navmenu-open");
}

// btnHideNavMenu ========== ========== ========== 
dw.btnHideNavMenu = {};

dw.btnHideNavMenu.doClick = function () {
  var divNavMenu = document.getElementById("divNavMenu");
  divNavMenu.classList.remove("navmenu-open");
}
