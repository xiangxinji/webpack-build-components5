import Table from './main.vue'
import {App} from "vue";

import {
    Table as VxeTable,
    Column as VxeColumn,
    Header,
} from 'vxe-table'

Table.componentName = 'CTable'

Table.install = function (app: App) {
    app.component(Table.componentName, Table)
    app.component(VxeTable.name, VxeTable)
    app.component(VxeColumn.name, VxeColumn)
    app.component(Header.name, Header)
}

export default Table
