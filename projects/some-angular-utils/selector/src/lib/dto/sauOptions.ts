/**
 * {
 * value: string,
 * label: string
 * }
 */
export interface SauOption {
    value: string,
    label: string
}

/**
 * [
 * {
 * value: string,
 * label: string
 * }
 * ]
 */
export interface SauOptions extends Array<SauOption> {} 
