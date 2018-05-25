import React from 'react';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "20px",
    width: "100%",
    opacity: 0.8
}

var phantom = {
  display: 'block',
  padding: '10px',
  height: '18px',
  width: '100%',
}

const Footer = () => (
    <div id="footer">
        <div style={phantom} />
        <div style={style}>
            Happy <i class="material-icons" style={{color: 'red'}}>favorite</i> Coding!
        </div>
    </div>
)

export default Footer;