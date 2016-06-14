var metajson;
jQuery(document).ready(function ($) {
    $(window).on('load', function () {
        $.getJSON("data/meta.json", function (data) {
            metajson = data;
            // Loads skills
            getSkills();
            getInterests();
            getLanguages();
            getEducation();
            getContact();
        })
    });



    function getSkills() {
        var items = [];
        $.each(metajson.skills, function (key, val) {
            var skill_item = '';
            if (val.reason)
                skill_item += '<div class="item"><h3 class="level-title">' + val.title + '&nbsp<i class="fa fa-info-circle" title="' + val.reason + '""></i></h3>';
            else
                skill_item += '<div class="item"><h3 class="level-title">' + val.title + '</h3>';
            skill_item += '<div class="level-bar" title="' + val.proficiency + '"><div class="level-bar-inner" data-level="' + val.proficiency + '%"></div></div></div>';
            items.push(skill_item);
        });
        $(".skillset").empty().append(items)
        $('.level-bar-inner').css('width', '0');
        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    }
    function getInterests() {
        $(".interests-container ul").empty();
        $.each(metajson.interests, function (key, val) {
            $(".interests-container ul").append("<li>" + val + "</li>");
        });
    }
    function getLanguages() {
        $(".languages-container ul").empty();
        $.each(metajson.languages, function (key, val) {
            $(".languages-container ul").append("<li>" + val.title + "<span class=\"lang-desc\"> (" + val.type + ")</span></li>");
        });
    }
    function getEducation() {
        $.each(metajson.education, function (key, val) {
            var skill_item = '';
            skill_item += '<div class="item"><h4 class="degree">' + val.degree + '</h4>';
            for (var i = 0; i < val.meta.length ; i++) { skill_item += '<h5 class="meta">' + val.meta[i] + '</h5>' }
            skill_item += '<div class="time">' + val.time + '</div>';
            $(".education-container").append(skill_item);
        });
    }
    function getContact() {
        $(".contact-container ul.contact-list").empty();
        $.each(metajson.contact, function (key, val) {
            if (val.target)
                $(".contact-container ul.contact-list").append("<li class='" + val.type + "'><i class='fa " + val.faclass + "'></i><a href='" + val.href + "' title='" + val.type + "' target='" + val.target + "'>" + val.title + "</a></li>");
            else
                $(".contact-container ul.contact-list").append("<li class='" + val.type + "'><i class='fa " + val.faclass + "'></i><a href='" + val.href + "' title='" + val.type + "'>" + val.title + "</a></li>");
        });
    }
});