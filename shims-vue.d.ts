declare module '*.vue' {
    import type {DefineComponent} from 'vue'
    const component: DefineComponent<{}, {}, any> & {
        componentName  ?: string
    }
    export default component
}
