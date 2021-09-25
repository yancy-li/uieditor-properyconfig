export default function (uiEditor) {
    return {
        rule: 'ht.ui.Divider',
        categories: [{
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }]
            },
            {
                displayName: uiEditor.getString('toolkit.divider'),
                properties: [{
                        name: 'orientation',
                        displayName: uiEditor.getString('editor.property.orientation'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                    text: uiEditor.getString('editor.horizontal'),
                                    value: 'horizontal'
                                },
                                {
                                    text: uiEditor.getString('editor.vertical'),
                                    value: 'vertical'
                                }
                            ]
                        }
                    },
                    
                    {
                        displayName: uiEditor.getString('editor.property.linewidth'),
                        name: 'lineWidth',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.linecolor'),
                        name: 'lineColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.linedash'),
                        name: 'lineDash',
                        type: 'string',
                        setValue: function (view, value, property) {
                            if (value == null || value.trim() == '') {
                                view.setLineDash(undefined);
                            } else {
                                value = value.split(',');
                                if (Array.isArray(value)) {
                                    for (var i = 0; i < value.length; i++) {
                                        value[i] = parseInt(value[i]);
                                    }
                                    view.setLineDash(value);
                                }
                            }
                        },
                        getValue: function (view, property) {
                            var lineDash = view.getLineDash();
                            if (lineDash) {
                                return lineDash.join(',');
                            }
                        }
                    }
                ]
            }
        ]
    }
}