export default {
    rule: 'ht.ui.NumberInput',
    categories: [
        {
            id: 'basic',
            name: '基本属性',
            extends: [{
                rule: 'ht.ui.View',
                categoryId: 'basic',
                replace: [
                    {
                        name: 'border',
                        type: 'border',
                        editorParams: {
                            'focusLineBorderVisible': true
                        }
                    }
                ]
            }]
        },
        {

            id: 'NumberInput',
            name: 'NumberInput',
            extends: [
                {
                    rule: 'ht.ui.TextField',
                    categoryId: 'TextField',
                    filter: ['value', 'color', 'font', 'placeholder', 'is:readOnly', 'is:instant']
                }
            ],
            properties: [
                {
                    name: 'step',
                    type: 'int'
                },
                {
                    name: 'max',
                    type: 'int'
                },
                {
                    name: 'min',
                    type: 'int'
                },
                {
                    name: 'increaseIcon',
                    type: 'drawable'
                },
                {
                    name: 'hoverIncreaseIcon',
                    type: 'drawable'
                },
                {
                    name: 'activeIncreaseIcon',
                    type: 'drawable'
                },
                {
                    name: 'decreaseIcon',
                    type: 'drawable'
                },
                {
                    name: 'hoverDecreaseIcon',
                    type: 'drawable'
                },
                {
                    name: 'activeDecreaseIcon',
                    type: 'drawable'
                },
                {
                    name: 'iconPosition',
                    type: 'enum', 
                    editorParams: {
                        datas: ['left', 'right'],
                        readOnly: true
                    }
                }
            ]
        }
    ]
}