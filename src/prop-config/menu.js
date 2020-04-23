export default {
    rule: 'ht.ui.Menu',
    categories: [{
            name: '基本属性',
            extends: [{
                rule: 'ht.ui.View',
                categoryId: 'basic'
            }]
        },
        {
            name: 'Menu',
            properties: [{
                name: 'items',
                type: 'menuItems',
                editorParams: {
                    columns: [
                        {
                            class: 'ht.ui.Column',
                            name: 'icon',
                            editable: true,
                            accessType: 'attr',
                            editorClass: 'ht.ui.editor.StringEditor',
                        },
                        {
                            class: 'ht.ui.EnumColumn',
                            name: 'type',
                            valueField: 'value',
                            displayField: 'label',
                            accessType: 'attr',
                            editable: true,
                            strict: false,
                            datas: [
                                {
                                    value: null,
                                    label: '字符串'
                                },
                                {
                                    value: '-',
                                    label: '分割线'
                                },
                                {
                                    value: 'radio',
                                    label: '单选框'
                                },
                                {
                                    value: 'check',
                                    label: '复选框'
                                },

                            ]
                        },
                        {
                            class: 'ht.ui.Column',
                            name: 'groupId',
                            accessType: 'attr',
                            editable: true,
                            editorClass: 'ht.ui.editor.StringEditor',
                        },
                        {
                            class: 'ht.ui.Column',
                            name: 'disabled',
                            accessType: 'attr',
                            valueType: 'boolean',
                            editable: true
                        }
                    ],
                    hierarchic: true
                }
            },
            {
                name: 'gap',
                type: 'int'
            },
            {
                name: 'labelFont', 
                type: 'font'
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
                name: 'labelColor',
                type: 'color'
            },
            {
                name: 'hoverLabelColor',
                type: 'color'
            },
            {
                name: 'activeLabelColor',
                type: 'color'
            },
            {
                name: 'hoverItemBackground',
                type: 'drawable'
            },
            {
                name: 'activeItemBackground',
                type: 'drawable'
            }
            ]
        }
    ]
}