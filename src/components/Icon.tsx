import React from 'react'
import { IconProp } from '../interfaces/IconProps.interface'

export const Icon: React.FC<IconProp> = ({ name }) => {
    return (
        <span className="material-symbols-outlined">
            {name}
        </span>
    )
}