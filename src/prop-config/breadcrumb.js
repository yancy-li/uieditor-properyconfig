export default function(uiEditor) {
    return {
        rule: 'ht.ui.Breadcrumb',
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
                displayName: uiEditor.getString('toolkit.breadcrumb'),
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.breadcrumbitems'),
                        name: 'items',
                        type: 'breadcrumbItems'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.breadcrumbitembackground'),
                        name: 'itemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hoverbreadcrumbitembackground'),
                        name: 'hoverItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activebreadcrumbitembackground'),
                        name: 'activeItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectbreadcrumbitembackground'),
                        name: 'selectItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.textcolor'),
                        name: 'itemTextColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hovertextcolor'),
                        name: 'hoverItemTextColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activetextcolor'),
                        name: 'activeItemTextColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selecttextcolor'),
                        name: 'selectItemTextColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.textfont'),
                        name: 'itemTextFont',
                        type: 'font'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.iconwidth'),
                        name: 'itemIconWidth',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.iconheight'),
                        name: 'itemIconHeight',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.icontextgap'),
                        name: 'itemIconTextGap',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.breadcrumbpadding'),
                        name: 'itemPadding',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.breadcrumbitemgap'),
                        name: 'itemGap',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.separator'),
                        name: 'separator',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.separatorwidth'),
                        name: 'separatorWidth',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.separatorheight'),
                        name: 'separatorHeight',
                        type: 'int'
                    },
                ]
            }
        ]
    }
}