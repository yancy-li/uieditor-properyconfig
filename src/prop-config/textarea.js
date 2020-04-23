export default {
    rule: 'ht.ui.TextArea',
    categories: [{
            id: 'basic',
            name: '基本属性',
            extends: [{
                rule: 'ht.ui.TextField',
                categoryId: 'basic'
            }]
        },
        {
            name: 'TextArea',
            extends: [{
                rule: 'ht.ui.TextField',
                categoryId: 'TextField',
                filter: ['value', 'color', 'font', 'placeholder', 'is:readOnly', 'maxLength', 'is:instant', 'maskRe', 'lineHeight']
            }]
        }
    ]
}