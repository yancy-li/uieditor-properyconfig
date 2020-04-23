export default {
    rule: 'ht.ui.VBoxLayout',
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
            name: 'VBoxLayout',
            properties: [
                {
                    name: 'vAlign',
                    type: 'enum',
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
                    name: 'align',
                    type: 'enum',
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
                    name: 'gap',
                    type: 'int'
                },
                {
                    name: 'equalMode',
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [
                            {
                                text: '无',
                                value: ''
                            },
                            {
                            text: 'between',
                            value: 'space-between'
                        },
                        {
                            text: 'around',
                            value: 'space-around'
                        },
                        {
                            text: 'evenly',
                            value: 'space-evenly'
                        }]
                    }
                }
            ]
        }
    ]
}