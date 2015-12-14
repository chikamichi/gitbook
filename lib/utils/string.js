var _ = require("lodash");

function escapeShellArg(arg) {
    var ret = "";

    ret = arg.replace(/"/g, '\\"');

    return "\"" + ret + "\"";
}

function optionsToShellArgs(options) {
    return _.chain(options)
    .map(function(value, key) {
        if (value === null || value === undefined || value === false) return null;
        if (value === true) return key;
        return key+"="+escapeShellArg(value);
    })
    .compact()
    .value()
    .join(" ");
}

// Escape spaces within string. Useful for paths containing spaces.
function escapeSpaces(arg) {
    return arg.replace(/ /g, '\\ ');
}

module.exports = {
    escapeShellArg: escapeShellArg,
    optionsToShellArgs: optionsToShellArgs,
    escapeSpaces: escapeSpaces,
    toLowerCase: String.prototype.toLowerCase.call.bind(String.prototype.toLowerCase)
};
