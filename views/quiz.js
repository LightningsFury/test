function conditionInfo(condition) {
  $(function() {
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
      .done(console.log)
      .fail(console.error);
  });
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
        console.log(
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

conditionInfo("measles");
