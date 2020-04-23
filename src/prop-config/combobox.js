export default {
    rule: 'ht.ui.ComboBox',
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

            id: 'ComboBox',
            name: 'ComboBox',
            properties: [
                {
                    displayName: 'datas',
                    name: 'datas',
                    type: 'comboBoxDatas'
                },
                {
                    name: 'valueField',
                    type: 'string'
                },
                {
                    name: 'displayField',
                    type: 'string'
                },
                {
                    name: 'iconField',
                    type: 'string'
                },
                {
                    name: 'valueIconWidth',
                    type: 'int'
                },
                {
                    name: 'valueIconHeight',
                    type: 'int'
                }
            ],
            extends: [
                {
                    rule: 'ht.ui.TextField',
                    categoryId: 'TextField',
                    filter: ['value', 'color', 'font', 'placeholder', 'is:readOnly']
                }
            ]
        }
    ]
}