// import { ReactiveVar } from 'meteor/reactive-var';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { East, North, South, West } from '../imports/ui/hand.jsx';
import { bm } from '../imports/custom/myJsLib.js'

bm.shuffle();

Meteor.startup(() => {
    var x = ["ks51", "ts48", "8s46", "2s40", "qh37", "7h32", "3h28", "kc12", "jc10", "5c04", "3c02", "6d18", "3d15"]
    console.log(window.innerHeight);
    console.log(window.innerWidth);

    render(<North hand={ bm.north } cardheight={200} meta={bm.handSummary(bm.north)} faceup={true} vulnerable={false}/>, document.getElementById('north'));
    render(<South hand={ bm.south } cardheight={200} meta={bm.handSummary(bm.south)} faceup={true} vulnerable={false}/>, document.getElementById('south'));
    render(<West hand={ bm.west } cardheight={200}  meta={bm.handSummary(bm.west)} faceup={true}  vulnerable={true}/>, document.getElementById('west'));
    render(<East hand={ bm.east } cardheight={200}  meta={bm.handSummary(bm.east)} faceup={true}  vulnerable={true}/>, document.getElementById('east'));
});
