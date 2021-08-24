export default function(uiEditor) {
    return {
        rule: 'ht.ui.Slider',
        categories:[
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }]
            },
            {
                displayName: uiEditor.getString('toolkit.slider'),
                properties: [
                    {
                        name: 'bar',
                        displayName: uiEditor.getString('editor.property.bar'),
                        type: 'drawable',
                        editorParams: {
                            'sliderBarDrawableVisible': true
                        }
                    },
                    {
                        name: 'selectBar',
                        displayName: uiEditor.getString('editor.property.selectbar'),
                        type: 'drawable',
                        editorParams: {
                            'sliderBarDrawableVisible': true
                        }
                    },
                    {
                        name: 'barThickness',
                        displayName: uiEditor.getString('editor.property.barthickness'),
                        type: 'int'
                    },
                    {
                        name: 'value',
                        displayName: uiEditor.getString('editor.property.value'),
                        type: 'number'
                    },
                    {
                        name: 'min',
                        displayName: uiEditor.getString('editor.property.min'),
                        type: 'number'
                    },
                    {
                        name: 'max',
                        displayName: uiEditor.getString('editor.property.max'),
                        type: 'number'
                    },
                    {
                        name: 'step',
                        displayName: uiEditor.getString('editor.property.step'),
                        type: 'number'
                    },
                    {
                        name: 'orientation',
                        displayName: uiEditor.getString('editor.property.orientation'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.horizontal'),
                                value: 'h'
                            },
                            {
                                text: uiEditor.getString('editor.vertical'),
                                value: 'v'
                            }],
                            // readOnly: true
                        }
                    },
                    {
                        name: 'thumb',
                        displayName: uiEditor.getString('editor.property.thumb'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverThumb',
                        displayName: uiEditor.getString('editor.property.hoverthumb'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeThumb',
                        displayName: uiEditor.getString('editor.property.activethumb'),
                        type: 'drawable'
                    },
                    {
                        name: 'thumbWidth',
                        displayName: uiEditor.getString('editor.property.thumbwidth'),
                        type: 'int'
                    },
                    {
                        name: 'thumbHeight',
                        displayName: uiEditor.getString('editor.property.thumbheight'),
                        type: 'int'
                    },
                    {
                        name: 'is:instant',
                        displayName: uiEditor.getString('editor.property.instant'),
                        type: 'boolean'
                    }
                    
                ]
            }
        ]
    }

}