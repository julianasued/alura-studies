import React from "react";
import style from './MyButton.module.scss';

class MyButton extends React.Component<{ children: any }> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default MyButton;