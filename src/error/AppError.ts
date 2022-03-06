export class AppError extends Error {

    public readonly status: number

    constructor (message: string, status: number) {
        super()
        this.message = message
        this.status = status
    }
}