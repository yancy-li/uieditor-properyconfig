export default {
    rule: 'ht.ui.DateTimePicker',
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

            id: 'DateTimePicker',
            name: 'DateTimePicker',
            properties: [
                {
                    name: 'value',
                    type: 'datetime'
                },
                {
                    name: 'format',
                    type: 'string'
                },
                {
                    name: 'icon',
                    type: 'drawable'
                },
                {
                    name: 'hoverIcon',
                    type: 'drawable'
                },
                {
                    name: 'activeIcon',
                    type: 'drawable'
                }
            ]
        }
    ]
}