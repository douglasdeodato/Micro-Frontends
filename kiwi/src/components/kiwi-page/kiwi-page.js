
import Heading from '../heading/heading.js';
import KiwiImg from '../kiwi-image/kiwi-image.js';


class KiwiPage {
    render() {
        const heading = new Heading();
        heading.render('kiwi');
        const KiwiImg = new KiwiImg();
        KiwiImg.render();
    }
}



export default KiwiPage;
