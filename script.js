$(document).ready((e) => {
  const mainIcon =
    "images/avatar.png";
  const username = "mithesh_14_";
  const profileDescription = "CSE Junior | MIT India | Web Designer | Music Composer";
  const profileLink = "https://github.com/Mithesh14";

  $("#profile").show();
  $(".profile-icon").attr("src", mainIcon);
  $(".usernameText").text(username);
  $(".descriptionText").text(profileDescription);
  $(".profileLink").attr("href", profileLink);
  $(".profileLink").text(profileLink);

  $("[target]").click((a) => {
    const target = $(a.currentTarget).attr("target");
    $(".page-hidden").hide();
    $("#" + target).toggle();

    if (target.includes("story")) $("#top-menu-bar").hide();
    else $("#top-menu-bar").show();
  });
});
