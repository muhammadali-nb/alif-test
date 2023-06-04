export interface IDialog {
    active: boolean
    setActive: (e: boolean) => void
    title: string
    description?: string
    setConfirm: () => void
}