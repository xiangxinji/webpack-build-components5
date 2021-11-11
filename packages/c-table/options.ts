import {PropType} from 'vue'
import 'xe-utils'

import {Column} from "./types";



export const props = {
    data: {
        type: Array,
        required: true,
    },
    columns: {
        type: Array as PropType<Array<Column>>,
        required: true,
    },
}

