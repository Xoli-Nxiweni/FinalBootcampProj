const images = [
    'Assets/Images/client-databiz.svg',
    'Assets/Images/client-audiophile.svg',
    'Assets/Images/client-meet.svg',
    'Assets/Images/client-maker.svg',
]
const information = document.querySelector('.info');
const renderInfo = ()=>{
    const text = "Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar."
    const button = 'Learn More';
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('leftContainer');
    leftContainer.innerHTML = `
    <h1>Make <br> remote work</h1>
    <p>${text}</p>
     <input type="button" value="${button}" class="infoBtn">
     <div class="images">
     ${images.map(img => `<img src="${img}">`).join('')}
     </div>
    `
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('rightContainer');
    information.appendChild(rightContainer);
    information.appendChild(leftContainer);
}
renderInfo();

const attribution = document.querySelector('.attribution');
const attributionRender = ()=>{
    const name = "Xolile";
    const surname = "Nxiweni";
    const href = "https://xoli-nxiweni.github.io/BootcampLesson1/";
    const attr = document.createElement('p');
    attr.innerHTML =`
    <p>Bootcamp 2024 by
    <a href="https://www.mlab.co.za" target="_blank">CodeTribe</a>. Developed
    by  <a href="${href}">${name} ${surname}</a>.</p>
    `
    attribution.appendChild(attr);
}
attributionRender();

// const toggleBtn = document.getElementById('navigationToggle');
// let linksMenu = document.querySelector('.links');

// toggleBtn.addEventListener('click', () => {
//     if (linksMenu.style.display === 'block') {
//         linksMenu.style.display = 'none';
//     } else {
//         linksMenu.style.display = 'block';
//     }
// });

const notification = document.getElementById('navigationToggle');
notification.addEventListener('click', ()=>{
    alert("NAVIGATION UNDER CONSTRUCTION")
});