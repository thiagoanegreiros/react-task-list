import React from 'react'
import button from './button.module.scss'

class Button extends React.Component<{
    type?: 'button' | 'submit' | 'reset' | undefined
    children: string
}> {
    render() {
        const { children, type = 'button' } = this.props
        return (
            <button type={type} className={button.botao}>
                { children }
            </button>
        )
    }
}

export default Button;
