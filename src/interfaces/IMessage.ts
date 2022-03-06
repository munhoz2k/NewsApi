export interface IMessage {
    to: {
        name: string
        address: string
    }

    from: {
        name: string
        address: string
    }

    subject: string
    html: string
}