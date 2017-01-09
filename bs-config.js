/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
var PORT = 3000;

module.exports = {
    files: "public/**/*(.*|!(sitemap.xml))",
    server: "public",
    port: PORT,
    logLevel: "info",
    open: false,
    notify: false
};
