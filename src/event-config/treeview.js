export default function(uiEditor) {
    return {
        rule: 'ht.ui.TreeView',
        events: ['checkData', 'uncheckData', 'expanded', 'collapsed', 'expandAll', 'collapseAll', 'invalidateModel', 'beginEdit', 'endEdit', 'rendererInit']
    }
}