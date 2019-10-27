/**
 * aof.vps - Application for VMs management
 * @version v1.0.0
 * @link https://vps.apponfly.com
 * @author Pavel Novotny - DevIT s.r.o.
 */
var scripts = document.getElementsByTagName('script');
var index = scripts.length - 1;
var myScript = scripts[index];
var queryString = myScript.src.replace(/^[^\?]+\??/, '') + "3";
require.config({
    baseUrl: "/scripts",
    paths: {
        "jquery": "../lib/jquery/dist/jquery",
        "moment": "../lib/moment"
    },
    urlArgs: queryString,
    shim: {
        'jquery': {
            exports: '$'
        }
    }
});
