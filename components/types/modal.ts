import {ReactNode} from "react";

export interface ICustomModal {
    active: boolean
    setActive: (event: boolean) => void
}

export interface IModal {
    children?: ReactNode,
    active: boolean
    setActive: (event: boolean) => void
    title?: string
    status?: string
}