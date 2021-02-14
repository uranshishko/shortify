'use strict';

new Vue({
    el: '#app',
    data: {
        urlIsShortified: false,
        url: null,
        message: null,
    },
    methods: {
        shortifyUrl: function () {
            var instance = this;
            fetch('/api/v1/shortify', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    url: instance.url,
                }),
            })
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    if (data.message) {
                        throw new Error(data.message);
                    }
                    instance.url = data.url;
                    instance.urlIsShortified = true;
                })
                .catch(function (e) {
                    instance.url = 'Please enter a valid URL';
                });
        },
        resetProcess: function () {
            this.urlIsShortified = false;
            this.url = null;
            this.message = null;
        },
        copyUrlToClipboard: function () {
            var copyUrl = document.getElementById('url_container');

            copyUrl.select();
            copyUrl.setSelectionRange(0, 99999);

            document.execCommand('copy');

            this.message = 'URL copied to clipboard :)!';

            var instance = this;

            setTimeout(function (message) {
                instance.message = null;
            }, 3000);
        },
        goToURL: function () {
            window.location = 'http://' + this.url;
        },
    },
});
