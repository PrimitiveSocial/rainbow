export default {
    methods: {
        htmlEncode(str) {
            return str.replace(/[\u00A0-\u00FF]/g, function(c) {
                return '&#'+c.charCodeAt(0)+';';
            });
        }
    }
}