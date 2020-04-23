export default {
    rule: 'ht.ui.Slider',
    categories:[
        {
            name: '基本属性',
            extends: [{
                rule: 'ht.ui.View',
                categoryId: 'basic'
            }]
        },
        {
            name: 'Slider', 
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
                    name: 'barThickness',
                    type: 'int'
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
                    name: 'step',
                    type: 'number'
                },
                {
                    name: 'orientation',
                    type: 'enum',
                    editorParams: {
                        datas: ['horizontal', 'vertical'],
                        readOnly: true
                    }
                },
                {
                    name: 'thumb',
                    type: 'drawable'
                },
                {
                    name: 'hoverThumb',
                    type: 'drawable'
                },
                {
                    name: 'activeThumb',
                    type: 'drawable'
                },
                {
                    name: 'thumbWidth',
                    type: 'int'
                },
                {
                    name: 'thumbHeight',
                    type: 'int'
                },
                {
                    name: 'is:instant',
                    displayName: 'instant',
                    type: 'boolean'
                }
                
            ]
        }
    ]
}