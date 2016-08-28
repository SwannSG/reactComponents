// Typographic Scale
// Viewports are divided by width
    // xs   extra small         < 544px
    // sm   small               544px to 767px
    // md   medium              768px to 991px
    // lg   large               992px to 1199px
    // xl   extra large         >= 1200px

var s = {}      // base style object

s.body = {
    fontFamily: "'Ubuntu', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: '16px',
    color: '#050505',
}

// small vp
s.sm = {
    body: {lineHeight: '1.25'},
    h1: {fontSize: '200%', lineHeight: '1.25'},
    h2: {fontSize: '162.5%', lineHeight: '1.154'},
    h3: {fontSize: '137.5%', lineHeight: '1.1364'},
    h4: {fontSize: '112.5%', lineHeight: '1.111'},
    blockquote: {fontSize: '125%', lineHeight: '1.25'},
}
// end small vp

// medium vp
s.md = {
    body: {lineHeight: '1.25'},
    h1: {fontSize: '200%', lineHeight: '1.25'},
    h2: {fontSize: '162.5%', lineHeight: '1.154'},
    h3: {fontSize: '137.5%', lineHeight: '1.1364'},
    h4: {fontSize: '112.5%', lineHeight: '1.111'},
    blockquote: {fontSize: '125%', lineHeight: '1.25'},
}
// end medium vp

// large vp
s.lg = {
    body: {lineHeight: '1.375'},
    h1: {fontSize: '250%', lineHeight: '1.125'},
    h2: {fontSize: '200%', lineHeight: '1.25'},
    h3: {fontSize: '150%', lineHeight: '1.25'},
    h4: {fontSize: '112.5%', lineHeight: '1.222'},
    blockquote: {fontSize: '150%', lineHeight: '1.458'},
}
// end large vp

// extra large vp
s.xl = {
    body: {lineHeight: '1.375'},
    h1: {fontSize: '300%', lineHeight: '1.05'},
    h2: {fontSize: '225%', lineHeight: '1.25'},
    h3: {fontSize: '175%', lineHeight: '1.25'},
    h4: {fontSize: '112.5%', lineHeight: '1.222'},
    blockquote: {fontSize: '150%', lineHeight: '1.458'},
}
// end extra large vp

function setTypographicScale(vw) {
    for (each in s.body) {
        document.body.style[each] = s.body[each];
    }
    if (vw < 544) {
        // small, sm
        for (each in s.sm) {
            console.log('-------------------');
            console.log(each);
            for (item in s.sm[each]) {
                console.log(item);
                console.log('***************');
                console.log(document[each].style[item]);
                console.log(s.sm[each][item]);
                console.log('eeeeeeeeeeeeeee');
                // document[each].style[item] = s.sm[each][item];
            }
        }
    }
}
