/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
/*function animateIn() {
  console.log(this);
  const toAnimate = document.querySelector('#part2');
  toAnimate.classList.add( 'box2-show' );
}

const ourButton = document.querySelector('#chkspot1'); 

ourButton.addEventListener( "change", animateIn );*/



/*------  function animateIn() {
  console.log(this);
  const toAnimate = document.querySelector('.box2');
  toAnimate.classList.add('box2-show');
}
const ourButton = document.querySelector('.chkspot1');
ourButton.addEventListener('change', animateIn); */



function Redirect1(){
               window.location.href = "friends.html"
            } 
              
function Redirect2(){        
               window.location = "family.html";
            }
function Redirect3(){        
               window.location = "couples.html";
            }
function Redirect4(){        
               window.location = "solo.html";
            }


/* source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}