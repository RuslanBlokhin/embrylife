import Glide from '@glidejs/glide'

const glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 2
}).mount()

new Glide('.main__request-gallery', {
    // type: 'slider',
    // focusAt: 'center',
    // peek: {
    //     after: '100'
    // },
    gap: 30,
    perView: 4,
    breakpoints: {
        1599: {
            gap: 10,
            perView: 1
        }
    }
}).mount()