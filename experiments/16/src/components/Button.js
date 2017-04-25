// Button.js
import styled from 'styled-components'

const Button = styled.button`
  /* Adjust the Button styling based on the theme */
  background: ${(props) => props.theme.background || 'lightblue'}
  border: 2px solid ${(props) => props.theme.background || 'lightblue'}
  color: ${(props) => props.theme.button.color || 'white'}
  font-family: ${(props) => props.theme.font || 'sans-serif'}

  border-radius: 4px
  padding: 0.5em 1em
  text-decoration: none
  font-size: 1em
  margin: 0 1em
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);

  &:hover { 
      box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
      background: #014464; 
      background: -moz-linear-gradient(top, #0c5f85, #0b5273 50%, #024869 51%, #003853); 
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0c5f85), color-stop(.5, #0b5273), color-stop(.51, #024869), to(#003853)); 
    }

  &:active { 
          -moz-box-shadow: 0 2px 6px black; 
          -webkit-box-shadow: 0 2px 6px black; 
      }
`
export default Button

export const Crazy = styled.button`

  display: inline-block;
  height: 50px;
  line-height: 50px;
  padding-right: 30px;
  padding-left: 70px;
  position: relative;
  background-color:rgb(41,127,184);
  color:rgb(255,255,255);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  
  
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  text-shadow:0px 1px 0px rgba(0,0,0,0.5);
-ms-filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#ff123852,Positive=true)";zoom:1;
filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#ff123852,Positive=true);

  -moz-box-shadow:0px 2px 2px rgba(0,0,0,0.2);
  -webkit-box-shadow:0px 2px 2px rgba(0,0,0,0.2);
  box-shadow:0px 2px 2px rgba(0,0,0,0.2);
  -ms-filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=2,Color=#33000000,Positive=true)";
filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=2,Color=#33000000,Positive=true);
}

.button span {
  position: absolute;
  left: 0;
  width: 50px;
  background-color:rgba(0,0,0,0.5);
  
  -webkit-border-top-left-radius: 5px;
-webkit-border-bottom-left-radius: 5px;
-moz-border-radius-topleft: 5px;
-moz-border-radius-bottomleft: 5px;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
border-right: 1px solid  rgba(0,0,0,0.15);
}

.button:hover span, .button.active span {
  background-color:rgb(0,102,26);
  border-right: 1px solid  rgba(0,0,0,0.3);
}

.button:active {
  margin-top: 2px;
  margin-bottom: 13px;

  -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.5);
-webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.5);
box-shadow:0px 1px 0px rgba(255,255,255,0.5);
-ms-filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#ccffffff,Positive=true)";
filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#ccffffff,Positive=true);
`