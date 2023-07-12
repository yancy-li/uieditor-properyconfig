export default function(uiEditor) {
    return {
        rule: 'ht.ui.RadioButton',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.Button',
                        categoryId: 'buttonBasic'
                    },
                    {
                        rule: 'ht.ui.ToggleButton',
                        categoryId: 'togglebutton',
                        filter: ['hoverBorder', 'activeBorder', 'selectBorder']
                    }
                ]
            },
            
            {
                displayName: uiEditor.getString('toolkit.radiobutton'),
                extends: [
                    {
                        rule: 'ht.ui.CheckBox',
                        categoryId: 'CheckBox',
                    }
                ]
            }
        ]
    }
}