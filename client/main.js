import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';
import { East, North, South, West } from '../imports/ui/hand.jsx';
import { bm } from '../imports/custom/myJsLib.js'
import { Button } from '../imports/ui/button.jsx'
import { BidBox } from '../imports/ui/bidBox.jsx'
import { Layout, styles } from '../imports/ui/layout.jsx'
import { Deal } from '../imports/ui/deal.jsx'

Meteor.startup(() => {
    console.log('Meteor.startup');
    // window.addEventListener('resize',
    //     _.debounce(function windowResize(){
    //         console.log('Window resize event');
    //         render(<Layout vh={$(window).height()} vw={$(window).width()}/>, document.getElementById('app'));
    //         render(<North cardheight={styles.cn.height} hand={ bm.north } hpos={'center'} meta={bm.handSummary(bm.north)} faceup={true} vulnerable={false}/>, document.getElementById('cn'));
    //         render(<South cardheight={styles.cn.height} hand={ bm.south } hpos={'center'} meta={bm.handSummary(bm.south)} faceup={true} vulnerable={false}/>, document.getElementById('cs'));
    //         render(<East cardheight={styles.cn.height} hand={ bm.east } hpos={'center'} meta={bm.handSummary(bm.east)} faceup={false} vulnerable={false}/>, document.getElementById('rc'));
    //         render(<West cardheight={styles.cn.height} hand={ bm.west } hpos={'center'} meta={bm.handSummary(bm.west)} faceup={false} vulnerable={false}/>, document.getElementById('lc'));
    //         render(<BidBox size={globalDimensions.rhss.height*0.95} parentDim={globalDimensions.rhss} lastBid={'1h'}/>, document.getElementById('rhss'));
    //     }, 200)
    // );
    //



    // var x = ["ks51", "ts48", "8s46", "2s40", "qh37", "7h32", "3h28", "kc12", "jc10", "5c04", "3c02", "6d18", "3d15"]
    bm.shuffle();
    Session.set('dealToggle', 'a')
    render(<Layout vh={$(window).height()} vw={$(window).width()}/>, document.getElementById('app'));
    // render(<North cardheight={styles.cn.height} hand={ bm.north } hpos={'center'} meta={bm.handSummary(bm.north)} faceup={true} vulnerable={false}/>, document.getElementById('cn'));
    render(<NorthContainer />, document.getElementById('cn'));
    render(<SouthContainer />, document.getElementById('cs'));
    render(<WestContainer />, document.getElementById('lc'));
    render(<EastContainer />, document.getElementById('rc'));
    render(<Deal hpos='center'/>, document.getElementById('cc'));
    // render(<BidBox size={globalDimensions.rhss.height*0.95} parentDim={globalDimensions.rhss} lastBid={'1h'}/>, document.getElementById('rhss'));

});

var NorthContainer = createContainer(() => {
    Session.get('dealToggle');
    return {
        cardheight: styles.cn.height,
        hand: bm.north ,
        hpos: 'center',
        meta: bm.handSummary(bm.north),
        faceup: true,
        vulnerable: bm.north.vulnerability
    };
}, North);

var EastContainer = createContainer(() => {
    Session.get('dealToggle');
    return {
        cardheight: styles.cn.height,
        hand: bm.east ,
        hpos: 'center',
        meta: bm.handSummary(bm.east),
        faceup: true,
        vulnerable: bm.east.vulnerability
    };
}, East);

var SouthContainer = createContainer(() => {
    Session.get('dealToggle');
    return {
        cardheight: styles.cn.height,
        hand: bm.south ,
        hpos: 'center',
        meta: bm.handSummary(bm.south),
        faceup: true,
        vulnerable: bm.south.vulnerability
    };
}, South);

var WestContainer = createContainer(() => {
    Session.get('dealToggle');
    return {
        cardheight: styles.cn.height,
        hand: bm.west ,
        hpos: 'center',
        meta: bm.handSummary(bm.west),
        faceup: true,
        vulnerable: bm.west.vulnerability
    };
}, West);
