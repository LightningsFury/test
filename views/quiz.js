$(function() {
  let conditions = [];
  let conditionNames = [];
  function conditionInfo(condition) {
    $.ajax({
      url: "https://api.nhs.uk/conditions/" + condition,
      beforeSend: function(xhrObj) {
        xhrObj.setRequestHeader(
          "subscription-key",
          "ab8469f0df524f2bab0f756beeb44a43"
        );
      },
      type: "GET",
      data: "{body}"
    })
      .done(function(c) {
        conditions.push(c);
      })
      .fail(console.error);
  }

  function getConditions(page) {
    if (!page) page = 1;
    var res = $(function() {
      var tres;
      $.ajax({
        url: "https://api.nhs.uk/conditions/?page=" + page,
        beforeSend: function(xhrObj) {
          xhrObj.setRequestHeader(
            "subscription-key",
            "ab8469f0df524f2bab0f756beeb44a43"
          );
        },
        type: "GET",
        data: "{body}"
      })
        .done(function(data) {
          conditionNames.push(
            data.significantLink.map(function(a) {
              return {
                name: a.name,
                description: a.description,
                url: a.url
              };
            })
          );
        })
        .fail(error);
      return;
    });
    return res;
  }

  function error() {
    document.getElementById("content").innerHTML =
      "<b>Unfortunately there has been an error, please refresh the page. Sorry for any inconvenience caused.</b>";
  }
  getConditions(Math.floor(Math.random() * 40));
  /*conditionInfo(
    conditionNames[Math.floor(Math.random() * conditionNames.length)]
  );*/
  console.log(
    conditionNames[Math.floor(Math.random() * conditionNames.length)]
  );
});
