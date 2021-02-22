/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
export default function(KEY) {
    return {
        load() {
            JSON.parse(window.localStorage.getItem(KEY) || 'null')
        },
        // eslint-disable-next-line space-before-function-paren
        save(data) {
            window.localStorage.setItem(KEY, JSON.stringify(data))
        }
    }
    // eslint-disable-next-line eol-last
}