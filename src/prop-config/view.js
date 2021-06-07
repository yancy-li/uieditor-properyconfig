export default function (uiEditor) {
    return {
        rule: 'ht.ui.View',
        categories: [{
            id: 'basic',
            name: uiEditor.getString('editor.property.baseproperty'),
            properties: [{
                    name: 'id',
                    displayName: uiEditor.getString('editor.id'),
                    type: 'string',
                    desc: uiEditor.getString('editor.id')
                },
                {
                    name: 'background',
                    type: 'drawable',
                    displayName: uiEditor.getString('editor.property.background'),
                    desc: uiEditor.getString('editor.property.background')
                },
                {
                    name: 'border',
                    displayName: uiEditor.getString('editor.property.border'),
                    type: 'border',
                    desc: uiEditor.getString('editor.property.desc.border'),
                },
                {
                    name: 'Padding',
                    displayName: uiEditor.getString('editor.property.padding'),
                    type: 'padding',
                    desc: uiEditor.getString('editor.property.desc.padding'),
                },
                {
                    name: 'zIndex',
                    displayName: uiEditor.getString('editor.property.zindex'),
                    type: 'int',
                    desc: uiEditor.getString('editor.property.desc.zindex'),
                },
                {
                    name: 'borderRadius',
                    displayName: uiEditor.getString('editor.property.borderradius'),
                    type: 'int'
                },
                {
                    name: 'overflow',
                    displayName: uiEditor.getString('editor.property.overflow'),
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                                text: uiEditor.getString('editor.property.hidden'),
                                value: 'hidden'
                            },
                            {
                                text: uiEditor.getString('editor.property.visible'),
                                value: 'visible'
                            }
                        ]
                    },
                    isVisible: function (views) {
                        var visible = true;
                        for (var i = 0, length = views.length; i < length; i++) {
                            var view = views[i];
                            if (!(view instanceof ht.ui.ViewGroup)) {
                                visible = false;
                                break;
                            }
                        }
                        return visible;
                    }
                },
                {
                    name: 'routerName',
                    displayName: uiEditor.getString('editor.property.routername'),
                    type: 'string',

                    setValue: function(view, value, property) {
                        if (value) {
                            view.a('routerName', value);
                        }
                        else {
                            view.a('routerName', null);
                        }
                    },
                    getValue: function(view, property) {
                        return view.a('routerName');
                    },
                    isVisible: function (views) {
                        var visible = true;
                        for (var i = 0, length = views.length; i < length; i++) {
                            var view = views[i];
                            if (!(view.getClassName() === 'ht.ui.View' && view.a('routerView'))) {
                                visible = false;
                                break;
                            }
                        }
                        return visible;
                    }
                }
            ]
        }]
    }
}