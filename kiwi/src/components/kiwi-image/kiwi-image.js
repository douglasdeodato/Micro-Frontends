import Kiwi from './potato.jpg';
import './kiwi.scss';

class KiwiImg {
    render() {
        const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = 'potato alt';
        img.classList.add('potato-img');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
        
    }
}


export default KiwiImg;



