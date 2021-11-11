import {App} from "vue";
import Table from './c-table'

const components: Array<any> = [
    Table
]

export function install(app: App) {
    components.forEach(CyComponent => {
        CyComponent.install(app)
    })
}


export const CTable = Table
