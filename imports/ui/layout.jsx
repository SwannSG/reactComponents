import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import Radium from 'radium'

export { Layout, styles }

const styles = {}
styles.base = {
    margin: '0',
    paddding: '0',
    boxSizing: 'border-box',
}

const dim = {
    navHeightFactor: 0.15,              // height of 'nav'
    rhsWidthFactor: 0.275,              // width of 'rhs'
    cardHeightFactor: 0.15              // height of cards as a percentage of vh
    rhsnHeightFactor: 0.7,
    topFootFactor: 0.01,
    topHeightFactor: 0.01,
    handAspectRatio: 2.3                // hand width/height
}

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    dynamicStyles() {
        // this.props.vh            vertical heigh of viewport
        // this.props.vw            vertical width of viewport
        // we explcitily provide height and width for each layout container

        // nav panel
        styles.nav = {
            height: dim.navHeightFactor * this.props.vh,
            width: this.props.vh,
            backgroundColor: 'blue'
        }
        // end nav panel

        // end right panel
        // top divider
        styles.top = {
            height: dim.topHeightFactor * this.props.vh,
            width: this.props.vh,
            backgroundColor: 'white',
        }
        // end top divider

        // right panel
        styles.rhs = {
            float: 'right',
            height: styles.main.height
            width: dim.rhsWidthFactor * this.props.vw,
            backgroundColor: 'red'
        }

        styles.foot = {
            height: topHeight,
            backgroundColor: 'white',
        }

        // main panel
        styles.main = {
            float: 'left',
            height: this.props.vh - styles.nav.height - styles.top.height - styles.top.foot,
            width: this.props.vw - styles.rhs.width,
            backgroundColor: 'gray'
        }
        // end main panel


        // main.left
        styles.left = {
            float: 'left',
            height: styles.main.height,
            width: dim.cardHeightFactor * this.props.vh,
            backgroundColor: 'gray'
        }
        // end main.left

        // main.center
        styles.center = {
            float: 'left',
            height: styles.main.height,
            width: this.props.vw - 2 * styles.left.width,
            backgroundColor: 'white',
        }
        // end main.center

        // main.right
        styles.right = {
            float: 'left',
            height: styles.main.height,
            width: styles.left.width,
            backgroundColor: 'gray'
        }
        // end main.right

        // main.left column
        styles.lc = {
            height: dim.handAspectRatio * styles.left.width,
            width: styles.left.width,
            backgroundColor: 'black',
        }
        styles.ln = {
            height: (styles.left.height - styles.lc.height)/2,
            width: styles.left.width,
            backgroundColor: 'green'
        }
        styles.ls = {
            height: styles.ln.height,
            width: styles.left.width,
            backgroundColor: 'green',
        }
        // end main-left-column block

        // main.center column
        styles.cn = {
            height: styles.left.width,
            width: styles.center.width,
            backgroundColor: 'red'
        }

        styles.cc = {
            height: styles.main.height - 2 * styles.cn.height,
            width: styles.main.width,
            backgroundColor: 'blue',
        }

        styles.cs = {
            height: styles.cn.height,
            width: styles.main.width,
            backgroundColor: 'red'
        }

        // end main.center column

        // main.right column
        styles.rn = {
            height: styles.ln.height,
            width: styles.left.width,
            backgroundColor: 'black'
        }
        styles.rc = {
            height: styles.lc.height,
            width: styles.left.width,
            backgroundColor: 'green',
        }
        styles.rs = {
            height: styles.ls.height,
            width: styles.left.width,
            backgroundColor: 'black',
        }
        // end main.right column

        // rhs column
        styles.rhsn = {
            height: dim.rhsnHeightFactor * styles.rhs.height,
            width: styles.rhs.width,
            backgroundColor: 'yellow',

        }
        styles.rhss = {
            height: styles.rhs.height - styles.rhsn.height
            width: styles.rhs.width,
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
                    <div id="left" style={[styles.base, styles.left]}>
                        <div id="ln" style={[styles.base, styles.ln]}>
                        </div>
                        <div id="lc" style={[styles.base, styles.lc, styles.centerAll]}>
                        </div>
                        <div id="ls" style={[styles.base, styles.ls]}>
                        </div>
                    </div>
                    <div id="center" style={[styles.base, styles.center]}>
                        <div id="cn" style={[styles.base, styles.cn, styles.centerAll]}>
                        </div>
                        <div id="cc" style={[styles.base, styles.cc, styles.centerAll]}>
                        </div>
                        <div id="cs" style={[styles.base, styles.cs, styles.centerAll]}>
                        </div>
                    </div>
                    <div id="right" style={[styles.base, styles.right]}>
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
