import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { East, North, South, West } from '../imports/ui/hand.jsx';
import { bm } from '../imports/custom/myJsLib.js'
import { Button } from '../imports/ui/button.jsx'
import { BidBox } from '../imports/ui/bidBox.jsx'
import { Layout } from '../imports/ui/layout.jsx'

bm.shuffle();

$('body').css( "margin", "0" );
$('body').css( "padding", "0" );

Meteor.startup(() => {
    console.log('Meteor.startup');

    // const onWindowResize = function() {
    //     console.log('onWindowResize');
    //     const vw = $(window).width();
    //     const vh = $(window).height();
    //     render(<Layout vh={window.innerHeight} vw={window.innerWidth}/>, document.getElementById('app'));
    // };




    var x = ["ks51", "ts48", "8s46", "2s40", "qh37", "7h32", "3h28", "kc12", "jc10", "5c04", "3c02", "6d18", "3d15"]

    // render(<North hand={ bm.north } cardheight={200} meta={bm.handSummary(bm.north)} faceup={true} vulnerable={false}/>, document.getElementById('north'));
    // render(<South hand={ bm.south } cardheight={200} meta={bm.handSummary(bm.south)} faceup={true} vulnerable={false}/>, document.getElementById('south'));
    // render(<West hand={ bm.west } cardheight={200}  meta={bm.handSummary(bm.west)} faceup={true}  vulnerable={true}/>, document.getElementById('west'));
    // render(<East hand={ bm.east } cardheight={200}  meta={bm.handSummary(bm.east)} faceup={true}  vulnerable={true}/>, document.getElementById('east'));
    // render(<BidBox containerHeight={180} lastBid={'1d'}/>, document.getElementById('bid-box'))
    // render(<Container heightPercent={0.2} widthPercent={0.334}
    //        viewportHeight={window.innerHeight} viewportWidth={window.innerWidth}/>,
    //        document.getElementById('app'));
    // render(<Button size={45} value={'value'} label={'label'} style={{}} />, document.getElementById('app'));

    // render(<BidBox size={140} lastBid={'1h'}/>, document.getElementById('app'));
    // render(<Button size={30} />, document.getElementById('appA'));

    render(<Layout vh={window.innerHeight} vw={window.innerWidth}/>, document.getElementById('app'));

    console.log('render');

});
