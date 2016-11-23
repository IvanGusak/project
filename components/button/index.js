import React from "react";

import styles from "./button.scss";

const propsTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    disabled: React.PropTypes.bool,
    handleClick: React.PropTypes.func,
    href: React.PropTypes.string,
    ripple: React.PropTypes.bool,
    theme: React.PropTypes.string,
    type: React.PropTypes.string,
    wave: React.PropTypes.bool
}
const defaultProps = {
    className: "",
    disabled: false,
    handleClick: () => {},
    ripple: true,
    theme: "light",
    type: "raised",
    wave: true
}

class Button extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.onClick = this.onClick.bind(this);
    }
    onClick(event) {
        !this.props.disabled ? this.props.handleClick() : event.preventDefault() ;
    }
    render() {
        return(
            <div className= { `${ this.props.className } ${ styles.inline }` }>
                <a 
                    href= { this.props.href } 
                    className= { `${ styles[this.props.theme] } ${ styles[this.props.type] }` } 
                    disabled= { this.props.disabled } 
                    data-ripple= { this.props.ripple }
                    data-wave= { this.props.wave }
                    onClick= { this.onClick }      
                > 
                    { this.props.children }
                </a> 
            </div>          
        )
    }
} 

Button.propTypes = propsTypes;
Button.defaultProps = defaultProps;

export default Button;
