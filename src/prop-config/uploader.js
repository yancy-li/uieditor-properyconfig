
export default function(uiEditor) {
    return {
        rule: 'ht.ui.Uploader',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }]
            },
            {
                displayName: uiEditor.getString('toolkit.uploader'),
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.multiple'),
                        name: 'multiple',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.accept'),
                        name: 'accept',
                        type: 'string'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.limit'),
                        name: 'limit',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.suffix'),
                        name: 'suffix',
                        type: 'string',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.filehoverrowbackground'),
                        name: 'fileHoverRowBackground',
                        type: 'drawable',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.filetextcolor'),
                        name: 'fileTextColor',
                        type: 'color',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.filehovertextcolor'),
                        name: 'fileHoverTextColor',
                        type: 'color',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.filetextfont'),
                        name: 'fileTextFont',
                        type: 'font',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.filerowheight'),
                        name: 'fileRowHeight',
                        type: 'int',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.deleteicon'),
                        name: 'deleteIcon',
                        type: 'drawable',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hoverdeleteicon'),
                        name: 'hoverDeleteIcon',
                        type: 'drawable',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activedeleteicon'),
                        name: 'activeDeleteIcon',
                        type: 'drawable',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.righticonheight'),
                        name: 'rightIconHeight',
                        type: 'int',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.trueicon'),
                        name: 'trueIcon',
                        type: 'drawable',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.falseicon'),
                        name: 'falseIcon',
                        type: 'drawable',
                    },
                ]
            }
        ]
    }

}