

Template.blogShowBody.rendered = function () {
    var buttonsContainer = $('.shariff');
    new Shariff(buttonsContainer, {
        lang: TAPi18n.getLanguage(),
        services: ["twitter", "facebook","googleplus", "info"]
    });
};