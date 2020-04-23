export default {
    rule: 'ht.ui.FlowLayout',
    categories: [
        {
            name: '基本属性',
            extends: [
                {
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }
            ]
        },
        {
            name: 'FlowLayout',
            properties: [
                {
                    name: 'direction',
                    type: 'enum',
                    editorParams: {
                        datas: ['leftToRight', 'rightToLeft'],
                        readOnly: true
                    }
                }
            ]
        }
    ]
}