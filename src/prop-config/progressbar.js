export default {
    rule: 'ht.ui.ProgressBar',
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
            id: 'ProgressBar',
            name: 'ProgressBar',
            properties: [
                {
                    name: 'bar',
                    type: 'drawable',
                    editorParams: {
                        'sliderBarDrawableVisible': true
                    }
                },
                {
                    name: 'selectBar',
                    type: 'drawable',
                    editorParams: {
                        'sliderBarDrawableVisible': true
                    }
                },
                {
                    name: 'value',
                    type: 'number'
                },
                {
                    name: 'min',
                    type: 'number'
                },
                {
                    name: 'max',
                    type: 'number'
                },
                {
                    name: 'is:percentTextVisible',
                    displayName: 'percentTextVisible',
                    type: 'boolean'
                },
                {
                    name: 'percentTextFont',
                    type: 'font'
                }, {
                    name: 'percentTextColor',
                    type: 'color'
                },
                {
                    name: 'is:clipSelectBar',
                    displayName: 'clipSelectBar',
                    type: 'boolean'
                }
            ]
        }
    ]

}