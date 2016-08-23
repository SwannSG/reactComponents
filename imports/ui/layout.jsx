import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import Radium from 'radium'

export { Layout }

const styles = {}
styles.base = {
    margin: '0',
    paddding: '0',
    boxSizing: 'border-box',
}

const dimensions = {
    navHeightFactor: 0.15,              // height of 'nav'
    rhsWidthFactor: 0.275,              // width of 'rhs'
    ccWidthFactor: 0.55,                // bigger makes card height smaller
    rhsnHeightFactor: 0.7,
    topFootFactor: 0.01,
    topHeightFactor: 0.01,
}

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    dynamicStyles() {
        var navHeight = dimensions.navHeightFactor * this.props.vh;
        var rhsWidth = dimensions.rhsWidthFactor * this.props.vw;
        var topHeight = dimensions.topHeightFactor * this.props.vh
        var footHeight = dimensions.topFootFactor * this.props.vh
        var mainWidth = this.props.vw - rhsWidth;
        var mainHeight = this.props.vh - navHeight - footHeight - topHeight;

        if (dimensions.ccWidthFactor >= mainHeight/mainWidth) {
            console.log('dimensions.ccWidthFactor is wrong');
        }
        var leftMainWidth = mainWidth * (1 - dimensions.ccWidthFactor)/2; // height of cards
        if (leftMainWidth/this.props.vh > 0.275) {
            // limit max height of cards
            leftMainWidth = 0.275 * this.props.vh;
            // make lcHeight smaller
            var lcHeight = 2.5 * leftMainWidth
            // make ln height larger
            var lnHeight = (mainHeight - lcHeight)/2
        }
        else {
            var lnHeight = (mainHeight - dimensions.ccWidthFactor * mainWidth)/2
            var centerMainWidth = mainWidth - 2 * leftMainWidth;
            var lcHeight = centerMainWidth
        }



        // var lnHeight = (mainHeight - dimensions.ccWidthFactor * mainWidth)/2
        // var centerMainWidth = mainWidth - 2 * leftMainWidth;
        var ccHeight = mainHeight - 2 * leftMainWidth;
        var rhsnHeight = dimensions.rhsnHeightFactor * mainHeight;
        var rhssHeight = mainHeight - rhsnHeight;

        // nav panel
        styles.nav = {
            height: navHeight,
            backgroundColor: 'blue'
        }

        styles.top = {
            height: topHeight,
            backgroundColor: 'white',
        }

        styles.foot = {
            height: topHeight,
            backgroundColor: 'white',
        }

        // main panel
        styles.main = {
            float: 'left',
            height: mainHeight,
            width: mainWidth,
            backgroundColor: 'gray'
        }
        // right panel
        styles.rhs = {
            float: 'right',
            height: mainHeight,
            width: rhsWidth,
            backgroundColor: 'red'
        }
        // main-left-column
        styles.leftMain = {
            float: 'left',
            height: mainHeight,
            width: leftMainWidth,
            backgroundColor: 'gray'
        }
        // main-center-column
        styles.centerMain = {
            float: 'left',
            height: mainHeight,
            width: centerMainWidth,
            backgroundColor: 'white',
        }
        // main-right-column
        styles.rightMain = {
            float: 'left',
            height: mainHeight,
            width: leftMainWidth,
            backgroundColor: 'gray'
        }

        // main-left-column block
        styles.ln = {
            height: lnHeight,
            backgroundColor: 'green'
        }
        styles.lc = {
            height: lcHeight,
            backgroundColor: 'black',
        }
        styles.ls = {
            height: lnHeight,
            backgroundColor: 'green',
        }
        // end main-left-column block

        // main-center-column block
        styles.cn = {
            height: leftMainWidth,
            backgroundColor: 'red'
        }
        styles.cc = {
            height: ccHeight,
            backgroundColor: 'blue',
        }
        styles.cs = {
            height: leftMainWidth,
            backgroundColor: 'yellow',
        }
        // end main-center-column block

        // main-right-column block
        styles.rn = {
            height: lnHeight,
            backgroundColor: 'black'
        }
        styles.rc = {
            height: lcHeight,
            backgroundColor: 'green',
        }
        styles.rs = {
            height: lnHeight,
            backgroundColor: 'black',
        }
        // end main-right-column block

        // rhs column
        styles.rhsn = {
            height:rhsnHeight,
            backgroundColor: 'yellow',

        }
        styles.rhss = {
            height:rhssHeight,
            backgroundColor: 'purple',

        }
        // end rhs column

        // how to place component in a container
        styles.centerAll = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        // end how to place component in a container

    }

    updateGlobalDimensions() {
        // updates a global variable with layout sizes that can then be passed on to components
        // components will then automatically resize correctly
        globalDimensions.cn =  {height: styles.cn.height ,
                                width:  styles.main.width};
        globalDimensions.rhss =   {height: styles.rhss.height ,
                                   width:  styles.rhs.width};
    }

    render() {
        console.log('Layout');
        this.dynamicStyles();
        this.updateGlobalDimensions();
        return (
            <div style={[styles.base]}>
                <div id="nav" style={[styles.base, styles.nav]}>
                    <p>{this.props.vw}</p>
                    <p>{this.props.vh}</p>
                </div>
                <div id="top" style={[styles.base, styles.top]}></div>
                <div id="main" style={[styles.base, styles.main]}>
                    <div id="mainleft" style={[styles.base, styles.leftMain]}>
                        <div id="ln" style={[styles.base, styles.ln]}>
                        </div>
                        <div id="lc" style={[styles.base, styles.lc, styles.centerAll]}>
                        </div>
                        <div id="ls" style={[styles.base, styles.ls]}>
                        </div>
                    </div>
                    <div id="maincenter" style={[styles.base, styles.centerMain]}>
                        <div id="cn" style={[styles.base, styles.cn, styles.centerAll]}>
                            {console.log('styles.cn.height: ' + styles.cn.height)}
                        </div>
                        <div id="cc" style={[styles.base, styles.cc, styles.centerAll]}>
                        </div>
                        <div id="cs" style={[styles.base, styles.cs, styles.centerAll]}>
                        </div>
                    </div>
                    <div id="mainright" style={[styles.base, styles.rightMain]}>
                        <div id="rn" style={[styles.base, styles.rn]}>
                        </div>
                        <div id="rc" style={[styles.base, styles.rc, styles.centerAll]}>
                        </div>
                        <div id="rs" style={[styles.base, styles.rs, styles.centerAll]}>
                        </div>
                        </div>
                </div>
                <div id="rhs" style={[styles.base, styles.rhs]}>
                    <div id="rhsn" style={[styles.base, styles.rhsn]}></div>
                    <div id="rhss" style={[styles.base, styles.rhss, styles.centerAll]}></div>
                </div>
                <div id="foot" style={[styles.base, styles.foot]}></div>
            </div>
        );
    }
}

Layout = Radium(Layout);
Layout.propTypes = {
    vh: PropTypes.number.isRequired,      // viewport height
    vw: PropTypes.number.isRequired,      // viewport width
};
