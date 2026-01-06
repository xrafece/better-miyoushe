// 虚拟模块类型声明
declare module 'virtual:blob-html' {
    /** 是否为开发模式 */
    export const isDev: boolean
    /** 开发模式下的 URL，生产模式为 null */
    export const devUrl: string | null
    /** 开发模式返回 URL，生产模式返回 HTML 内容 */
    const content: string
    export default content
}

