export default {
    rule: 'ht.ui.Button',
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
            id: 'Button',
            name: 'Button',
            properties: [
                {
                    name: 'text',
                    type: 'string',
                    desc: '按钮显示的文字'
                },
                {
                    name: 'textColor',
                    type: 'color',
                    desc: '按钮文字的颜色'
                },
                {
                    name: 'hoverTextColor',
                    type: 'color'
                },
                {
                    name: 'activeTextColor',
                    type: 'color'
                },
                {
                    name: 'textFont',
                    type: 'font'
                },
                {
                    name: 'hoverBackground',
                    type: 'drawable'
                },
                {
                    name: 'activeBackground',
                    type: 'drawable'
                },
                {
                    name: 'hTextPosition',
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                            text: 'left',
                            value: 'left'
                        },
                        {
                            text: 'center',
                            value: 'center'
                        },
                        {
                            text: 'right',
                            value: 'right'
                        }]
                    }
                },
                {
                    name: 'vTextPosition',
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                            text: 'top',
                            value: 'top'
                        },
                        {
                            text: 'middle',
                            value: 'middle'
                        },
                        {
                            text: 'bottom',
                            value: 'bottom'
                        }]
                    }
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
                    name: 'iconStretch',
                    type: 'enum',
                    editorParams: {
                        datas: ['fill', 'uniform', 'centerUniform', 'center', null],
                        readOnly: true
                    }
                },
                {
                    name: 'toolTip',
                    type: 'string'
                },
                {
                    name: 'toolTipEnabled',
                    type: 'boolean'
                },
                {
                    displayName: '像素精确',
                    name: 'is:pixelPerfect',
                    type: 'boolean'
                },
                {
                    name: 'align',
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                            text: 'left',
                            value: 'left'
                        },
                        {
                            text: 'center',
                            value: 'center'
                        },
                        {
                            text: 'right',
                            value: 'right'
                        }],
                    }
                },
                {
                    name: 'vAlign',
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                            text: 'top',
                            value: 'top'
                        },
                        {
                            text: 'middle',
                            value: 'middle'
                        },
                        {
                            text: 'bottom',
                            value: 'bottom'
                        }],
                    }
                }
            ]
        }
    ]
}