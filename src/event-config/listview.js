export default function(uiEditor) {
    return {
        rule: 'ht.ui.ListView',
        events: ['checkData', 'uncheckData', 'invalidateModel', 'beginEdit', 'endEdit', 'rendererInit']
    }
}