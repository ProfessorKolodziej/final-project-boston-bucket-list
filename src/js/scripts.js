/* source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown */
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}
document.querySelector('#hamburger').addEventListener('click', myFunction);
window.onclick = (event) => {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) { //eslint-disable-line
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
