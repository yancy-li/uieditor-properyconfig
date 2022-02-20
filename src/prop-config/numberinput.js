export default function(uiEditor) {
    return {
        rule: 'ht.ui.NumberInput',
        categories: [
            {
                id: 'basic',
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.TextField',
                    categoryId: 'basic'
                }
                ]
            },
            {
    
                id: 'NumberInput',
                displayName: uiEditor.getString('toolkit.numberinput'),
                extends: [
                    {
                        rule: 'ht.ui.TextField',
                        categoryId: 'TextField',
                        filter: [
                            'value', 'color', 'font', 'placeholder', 'is:readOnly', 'is:instant', 'iconWidth', 'iconHeight']
                    }
                ],
                properties: [
                    {
                        name: 'pageFunc',
                        displayName: uiEditor.getString('editor.property.isgotopagevalue'),
                        type: 'boolean',
                        getValue: function (view) {
                            return view.a('pageFunc') === 'gotoPageValue';
                        },
                        setValue: function (view, value) {
                            view.a('pageFunc', value ? 'gotoPageValue': null);
                        },
                        isVisible: function (views) {
                            var visible = true;
                            for (var i = 0, length = views.length; i < length; i++) {
                                var view = views[i];
                                if (view instanceof ht.ui.RefViewGroup) {
                                    var child = view.getChildren().get(0);
                                    if (!(child instanceof ht.ui.NumberInput)) {
                                        visible = false;
                                        break;
                                    };
                                }

                                var parent = view.getParent();
                                if (!(parent instanceof ht.ui.Pagination)) {
                                    visible = false;
                                    break;
                                }
                            }
                            return visible;
                        }
                    },
                    {
                        name: 'step',
                        displayName: uiEditor.getString('editor.property.step'),
                        type: 'int'
                    },
                    {
                        name: 'max',
                        displayName: uiEditor.getString('editor.property.max'),
                        type: 'int'
                    },
                    {
                        name: 'min',
                        displayName: uiEditor.getString('editor.property.min'),
                        type: 'int'
                    },
                    {
                        name: 'increaseIcon',
                        displayName: uiEditor.getString('editor.property.increaseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverIncreaseIcon',
                        displayName: uiEditor.getString('editor.property.hoverincreaseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeIncreaseIcon',
                        displayName: uiEditor.getString('editor.property.activeincreaseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'decreaseIcon',
                        displayName: uiEditor.getString('editor.property.decreaseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverDecreaseIcon',
                        displayName: uiEditor.getString('editor.property.hoverdecreaseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeDecreaseIcon',
                        displayName: uiEditor.getString('editor.property.activedecreaseicon'),
                        type: 'drawable'
                    }
                ]
            }
        ]
    }
}