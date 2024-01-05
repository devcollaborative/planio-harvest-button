window.addEventListener("DOMContentLoaded", function() {
  // Get Harvest info for iframe
  const appName = "Planio";

  // Get Planio issue ID and title
  const issueID = document.querySelector('.icon-edit').getAttribute('href').split("/")[2];
  const issueTitle = document.querySelector('.subject h3').innerText;
  const issueName = `#${issueID} ${issueTitle}`;
  const permalink = `${window.location.origin}/issues/${issueID}`;

  // Construct iframe with Harvest params
  const iframeSrc = `https://platform.harvestapp.com/platform/timer?app_name=${encodeURIComponent(appName)}&permalink=${encodeURIComponent(permalink)}&external_item_id=${encodeURIComponent(issueID)}&external_item_name=${encodeURIComponent(issueName)}`;
  const iframe = document.createElement('iframe');

  // Get sidebar element where iframe will be added
  document.getElementById("sidebar").prepend(iframe);

  // Insert iframe, set initial styles, and trigger resize event for frame
  iframe.src = iframeSrc;
  iframe.setAttribute("style","border: 0; width: 100%; height: 400px; padding-top: 1rem;");
  window.dispatchEvent(new Event('frame:resize'));

  // Resize iframe
  window.addEventListener("message", function (event) {
    console.log(event);
    if (event.origin != "https://platform.harvestapp.com") {
      return;
    }

    if (event.data.type == "frame:resize") {
      iframe.style.height = event.data.value + "px";
    }
  });
});
