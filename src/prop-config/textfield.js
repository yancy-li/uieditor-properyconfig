export default {
    rule: 'ht.ui.TextField',
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
            id: 'TextField',
            name: 'TextField',
            properties: [
                {
                    name: 'value',
                    type: 'string'
                },
                {
                    name: 'color',
                    type: 'color',
                },
                {
                    name: 'font',
                    type: 'font',
                },
                {
                    name: 'placeholder',
                    type: 'string',
                },
                {
                    name: 'is:readOnly',
                    type: 'boolean',
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
                },
                {
                    name: 'iconWidth',
                    type: 'int'
                },
                {
                    name: 'iconHeight',
                    type: 'int'
                },
                {
                    name: 'iconTextGap',
                    type: 'int'
                },
                {
                    name: 'iconPosition',
                    type: 'enum', 
                    editorParams: {
                        datas: ['left', 'right'],
                        readOnly: true
                    }
                },
                {
                    name: 'maxLength',
                    type: 'int'
                },
                {
                    name: 'is:instant',
                    type: 'boolean'
                },
                {
                    name: 'password',
                    type: 'boolean',
                    getValue: function (view) {
                        return view.getType() === 'password'
                    },
                    setValue: function (view, value) {
                        if (value) {
                            view.setType('password');
                        }
                        else {
                            view.setType('text');
                        }
                    }
                },
                {
                    name: 'maskRe',
                    type: 'string'
                }
            ]
        }
    ]
}