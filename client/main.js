import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Session } from 'meteor/session';

import { East, North, South, West } from '../imports/ui/hand.jsx';
import { bm } from '../imports/custom/myJsLib.js'
import { Button } from '../imports/ui/button.jsx'
import { BidBox } from '../imports/ui/bidBox.jsx'
import { Layout } from '../imports/ui/layout.jsx'
import { Deal } from '../imports/ui/deal.jsx'

globalDimensions = {};

Meteor.startup(() => {
    console.log('Meteor.startup');
    // window.addEventListener('resize',
    //     _.debounce(function windowResize(){
    //         console.log('Window resize event');
    //         render(<Layout vh={$(window).height()} vw={$(window).width()}/>, document.getElementById('app'));
    //         render(<North cardheight={globalDimensions.cn.height} hand={ bm.north } hpos={'center'} meta={bm.handSummary(bm.north)} faceup={true} vulnerable={false}/>, document.getElementById('cn'));
    //         render(<South cardheight={globalDimensions.cn.height} hand={ bm.south } hpos={'center'} meta={bm.handSummary(bm.south)} faceup={true} vulnerable={false}/>, document.getElementById('cs'));
    //         render(<East cardheight={globalDimensions.cn.height} hand={ bm.east } hpos={'center'} meta={bm.handSummary(bm.east)} faceup={false} vulnerable={false}/>, document.getElementById('rc'));
    //         render(<West cardheight={globalDimensions.cn.height} hand={ bm.west } hpos={'center'} meta={bm.handSummary(bm.west)} faceup={false} vulnerable={false}/>, document.getElementById('lc'));
    //         render(<BidBox size={globalDimensions.rhss.height*0.95} parentDim={globalDimensions.rhss} lastBid={'1h'}/>, document.getElementById('rhss'));
    //     }, 200)
    // );
    //



    // var x = ["ks51", "ts48", "8s46", "2s40", "qh37", "7h32", "3h28", "kc12", "jc10", "5c04", "3c02", "6d18", "3d15"]
    bm.shuffle();
    Session.set('dealToggle', 'a')
    render(<Layout vh={$(window).height()} vw={$(window).width()}/>, document.getElementById('app'));
    // render(<North cardheight={globalDimensions.cn.height} hand={ bm.north } hpos={'center'} meta={bm.handSummary(bm.north)} faceup={true} vulnerable={false}/>, document.getElementById('cn'));
    render(<NorthContainer />, document.getElementById('cn'));
    render(<South cardheight={globalDimensions.cn.height} hand={ bm.south } hpos={'center'} meta={bm.handSummary(bm.south)} faceup={true} vulnerable={false}/>, document.getElementById('cs'));
    render(<East cardheight={globalDimensions.cn.height} hand={ bm.east } hpos={'center'} meta={bm.handSummary(bm.east)} faceup={false} vulnerable={false}/>, document.getElementById('rc'));
    render(<West cardheight={globalDimensions.cn.height} hand={ bm.west } hpos={'center'} meta={bm.handSummary(bm.west)} faceup={false} vulnerable={false}/>, document.getElementById('lc'));
    render(<Deal hpos={'center'}/>, document.getElementById('cc'));
    // render(<BidBox size={globalDimensions.rhss.height*0.95} parentDim={globalDimensions.rhss} lastBid={'1h'}/>, document.getElementById('rhss'));

});

import { createContainer } from 'meteor/react-meteor-data';
var NorthContainer = createContainer(() => {
    console.log('NorthContainer');
    Session.get('dealToggle');
    return {
        cardheight: globalDimensions.cn.height,
        hand: bm.north ,
        hpos: 'center',
        meta: bm.handSummary(bm.north),
        faceup: true,
        vulnerable: false
    };
}, North);

// render(<NorthContainer />, document.getElementById('cn'));
