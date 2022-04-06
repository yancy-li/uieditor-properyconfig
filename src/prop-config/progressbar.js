export default function(uiEditor) {
    return {
        rule: 'ht.ui.ProgressBar',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic'
                    }
                ]
            },
            {
                id: 'ProgressBar',
                displayName: uiEditor.getString('toolkit.progressbar'),
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.value'),
                        name: 'value',
                        type: 'number'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.min'),
                        name: 'min',
                        type: 'number'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.max'),
                        name: 'max',
                        type: 'number'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.percenttextvisible'),
                        name: 'is:percentTextVisible',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.textfont'),
                        name: 'percentTextFont',
                        type: 'font'
                    }, {
                        displayName: uiEditor.getString('editor.property.textcolor'),
                        name: 'percentTextColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.bar'),
                        name: 'bar',
                        type: 'drawable',
                        editorParams: {
                            'sliderBarDrawableVisible': true
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectbar'),
                        name: 'selectBar',
                        type: 'drawable',
                        editorParams: {
                            'sliderBarDrawableVisible': true
                        }
                    },
                    {
                        name: 'is:clipSelectBar',
                        displayName: uiEditor.getString('editor.property.clipselectbar'),
                        type: 'boolean'
                    }
                ]
            }
        ]
    
    }

}