//Parallax Components
const scene = document.querySelector(".scene");
const parallax = new Parallax(scene);

//Navbar
const NavbarItems = $(".navbar__items");


//Navbar Link Animations
const line = $("<div />").addClass("line");

line.appendTo(NavbarItems);

var active = NavbarItems.find(".navbar__item--active");
let pos = 0;
let wid = 0;
console.log(active);

if (active.length) {
  pos = active.position().left;
  wid = active.width();
  line.css({
    left: pos,
    width: wid,
  });
  console.log(wid);
}

console.log(NavbarItems.find(".navbar__link"));

NavbarItems.find(".navbar__link").click(function (e) {
  e.preventDefault();
  if (
    !$(this).parent().hasClass("active") &&
    !NavbarItems.hasClass("animate")
  ) {
    NavbarItems.addClass(".animate");

    var _this = $(this);
    console.log(NavbarItems.find("li"));
    NavbarItems.find("li").removeClass("navbar__item--active");

    let position = _this.parent().position();
    let width = _this.parent().width();

    if (position.left >= pos) {
      line.animate(
        {
          width: position.left - pos + width,
        },
        300,
        function () {
          line.animate(
            {
              width: width,
              left: position.left,
            },
            150,
            function () {
              NavbarItems.removeClass("animate");
            }
          );
          _this.parent().addClass("navbar__item--active");
        }
      );
    } else {
      line.animate(
        {
          width: pos - position.left + wid,
          left: position.left,
        },
        300,
        function () {
          line.animate(
            {
              width: width,
            },
            150,
            function () {
              NavbarItems.removeClass("animate");
            }
          );
          _this.parent().addClass("navbar__item--active");
        }
      );
    }

    pos = position.left;
    wid = width;
  }
});




