export default {
    rule: 'ht.ui.ColorPicker',
    categories: [
        {
            id: 'basic',
            name: '基本属性',
            extends: [{
                rule: 'ht.ui.TextField',
                categoryId: 'basic'
            }]
        },
        {

            id: 'ColorPicker',
            name: 'ColorPicker',
            properties: [
                {
                    name: 'value',
                    type: 'color'
                },
                {
                    name: 'valueMode',
                    type: 'enum',
                    editorParams: {
                        datas: ['text', 'color'],
                        readOnly: true
                    }
                },
                {
                    name: 'previewBackground',
                    type: 'drawable'
                },
            ]
        }
    ]
}