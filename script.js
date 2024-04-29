const images = [
    'Assets/Images/client-databiz.svg',
    'Assets/Images/client-audiophile.svg',
    'Assets/Images/client-meet.svg',
    'Assets/Images/client-maker.svg',
]

const information = document.querySelector('.info');
const renderInfo = ()=>{
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('leftContainer');
    leftContainer.innerHTML = `
    <h1>Make <br> remote work</h1>
    <p>Get your team in sync, no matter your location. Streamline processes, 
     create team rituals, and watch productivity soar.</p>
     <input type="button" value="Learn More" class="infoBtn">
     <div class="images">
     ${images.map(img => `<img src="${img}">`).join('')}
     </div>
    `
    information.appendChild(leftContainer);
}
renderInfo();