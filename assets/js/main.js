var metajson;
jQuery(document).ready(function ($) {
    $(window).on('load', function () {
        $.getJSON("data/meta.json", function (data) {
            metajson = data;
            getCoverInfo();
            // Loads skills
            getSkills();
            getInterests();
            getLanguages();
            getEducation();
            getContact();
        })
    });
    function getCoverInfo() {
        $("#cover_info").empty().append(metajson.cover_info);
    }
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
        var cList = $(".contact-container ul.contact-list");
        cList.empty(); // Clear Items
        $.each(metajson.contact, function (key, val) {
            var li = $("<li/>")
                     .addClass(val.type)
                     .appendTo(cList)
            var faico = $("<i/>")
                        .addClass('fa ' + val.faclass)
                        .appendTo(li)
            var anchor = $("<a/>")
                         .attr("href", val.href)
                         .attr("data-category", "contacts")
                         .attr("title", val.type)
                         .text(val.title)
            if (val.target)
                anchor.attr("target", val.target);
            anchor.appendTo(li)
        });

        $(".contact-container ul.contact-list li").on("click", function () { TrackEvent(this) })
    }
});