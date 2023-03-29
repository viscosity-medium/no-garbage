export interface ITableRow {
    tableRowInfo: {
        id: string,
        document?: any,
        description?: string
        status?: string
        community?: string
        created?: any
        modified?: any
        announcement?: string
        location?: {
            lon: number,
            lat: number
        },
        photos?: string[]
    }
}

export interface DateOptions {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}