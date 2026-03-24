declare module '@reown/appkit/react' {
    export const modal: {
        getUniversalProvider: () => Promise<{
            request: (payload: unknown, targetChainId?: string) => Promise<unknown>
            session?: unknown
        }>
    } | null

    export function useAppKitAccount(): {
        address?: string
        isConnected: boolean
    }
}

declare module 'wagmi' {
    export function useAccount(): {
        address?: string
        isConnected: boolean
    }

    export function useChainId(): number | undefined

    export function usePublicClient(): any

    export function useWalletClient(): {
        data?: any
    }
}

declare module 'viem' {
    export type Address = `0x${string}` | string
}

declare module '@stacks/connect' {
    export function connect(): Promise<{
        addresses: Array<{
            address: string
            symbol: string
        }>
    }>
    export function request(method?: unknown, params?: unknown): Promise<any>
    export function isConnected(): boolean
    export function disconnect(): void
    export function getLocalStorage(): any
}

declare module '@stacks/transactions' {
    export function principalCV(value: string): any
    export function stringUtf8CV(value: string): any
    export function uintCV(value: number): any
}
