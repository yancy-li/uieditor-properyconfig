export default function(uiEditor) {
    return {
        rule: 'ht.ui.Carousel',
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
                id: 'Carousel',
                displayName: uiEditor.getString('toolkit.carousel'),
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.autoplay'),
                        name: 'autoplay',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.carouselinterval'),
                        name: 'interval',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.loop'),
                        name: 'is:loop',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.vertical'),
                        name: 'is:vertical',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.currentindex'),
                        name: 'currentIndex',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.indicator'),
                        name: 'indicator',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activeindicator'),
                        name: 'activeIndicator',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.indicatorvisible'),
                        name: 'indicatorVisible',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.indicatorgap'),
                        name: 'indicatorGap',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.indicatorwidth'),
                        name: 'indicatorWidth',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.indicatorheight'),
                        name: 'indicatorHeight',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.controllervisible'),
                        name: 'controllerVisible',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.autohidecontroller'),
                        name: 'is:autoHideController',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.controller'),
                        name: 'controller',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hovercontroller'),
                        name: 'hoverController',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activecontroller'),
                        name: 'activeController',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.controllerwidth'),
                        name: 'controllerWidth',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.controllerheight'),
                        name: 'controllerHeight',
                        type: 'int'
                    },
                ]
            }
        ]
    
    }

}