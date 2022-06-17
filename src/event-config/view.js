export default function(uiEditor) {
    return {
        rule: '*',
        events: ['invalidate', 'beforeValidate', 'endValidate', 'mounted', 'unmounted']
    }
}