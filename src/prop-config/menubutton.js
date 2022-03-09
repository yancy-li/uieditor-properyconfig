export default function(uiEditor) {
    return {
        rule: 'ht.ui.MenuButton',
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
                name: 'MenuButton',
                displayName: uiEditor.getString('toolkit.menubutton'),
                properties: [
                    {
                        name: 'items',
                        displayName: uiEditor.getString('editor.property.items'),
                        type: 'menuItems'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.expanded'),
                        name: 'is:expanded',
                        type: 'boolean',
                        getValue: function (view, property, checkValueChanged) {
                           return view.isOpened();
                        },
                        setValue: function (view, value, property) {
                            if (value) {
                                view.open()
                            }
                            else {
                                view.close();
                            }
                        },
                    },
                    // {
                    //     displayName: uiEditor.getString('editor.property.expanded'),
                    //     name: 'is:expanded',
                    //     type: 'boolean',
                    //     getValue: function (view, property, checkValueChanged) {
                    //        return view.isOpened();
                    //     },
                    //     setValue: function (view, value, property) {
                    //         if (value) {
                    //             view.open()
                    //         }
                    //         else {
                    //             view.close();
                    //         }
                    //     },
                    // },
                    {
                        name: 'dropDownIcon',
                        displayName: uiEditor.getString('editor.property.dropdownicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverDropDownIcon',
                        displayName: uiEditor.getString('editor.property.hoverdropdownicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeDropDownIcon',
                        displayName: uiEditor.getString('editor.property.activedropdownicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'disabledDropDownIcon',
                        displayName: uiEditor.getString('editor.property.disableddropdownicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'dropDownIconWidth',
                        displayName: uiEditor.getString('editor.property.iconwidth'),
                        type: 'int'
                    },
                    {
                        name: 'dropDownIconHeight',
                        displayName: uiEditor.getString('editor.property.iconheight'),
                        type: 'int'
                    }
                ],
                extends: [
                    {
                        rule: 'ht.ui.Button',
                        categoryId: 'Button'
                    }
                ]
            },
            {
                displayName: uiEditor.getString('editor.property.dropdownmenu'),
                collapse: true,
                getValue: function(view, property) {
                    var dropDownMenu = view.getDropDownMenu();
                    return dropDownMenu[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function(view, value, property) {
                    var name = property.name;
                    var dropDownMenu = view.getDropDownMenu();
                    dropDownMenu[ht.Default.prefixSetter(name)](value);
                },
                extends: [
                    {
                        rule: 'ht.ui.ContextMenu',
                        categoryId: 'contextmenu',
                        filter: [
                            'background',
                            'rowHeight', 'gapLeft', 'gapRight', 'hoverRowBackground', 'separatorColor', 'separatorSize',
                            'prefixWidth', 'prefixGapRight', 'iconWidth', 'iconGapRight', 'labelFont', 'labelColor', 
                            'hoverLabelColor', 'disabledLabelColor', 'labelGapRight', 'suffixGapRight', 'indicatorIcon', 
                            'indicatorWidth', 'indicatorColor', 'hoverIndicatorColor', 'radioOnIcon', 'radioOffIcon', 
                            'checkIcon', 'uncheckIcon', 'shortcutEnabled', 'scrollUpIndicator', 'scrollDownIndicator', 
                            'disabledScrollUpIndicator', 'disabledScrollDownIndicator', 'scrollIndicatorHeight'
                        ]
                    }
                ]
            }
        ]
    }
}