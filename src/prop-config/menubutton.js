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
            }
        ]
    }
}