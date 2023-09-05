window.addEventListener("DOMContentLoaded", function() {
  // Get Planio issue ID and title
  let issueID = document.querySelector('.icon-edit').getAttribute('href').split("/")[2];
  let issueTitle = document.querySelector('.subject h3').innerText;

  // Add Harvest Button placeholder
  let copyButton = document.querySelector('.icon-copy');
  copyButton.insertAdjacentHTML('afterend', `<a class="harvest-timer" style="min-height: 16px; margin-left: 3px;" data-item='{"id": ${issueID}, "name": "#${issueID} ${issueTitle}"}'></div>`);

  // Inject Harvest Button script
  let harvestButtonScript = document.createElement("script");
  harvestButtonScript.setAttribute("src", "https://platform.harvestapp.com/assets/platform.js");
  harvestButtonScript.setAttribute("data-platform-config", `{ "applicationName": "Planio", "permalink": "${window.location.origin}/issues/%ITEM_ID%" }`);
  document.body.appendChild(harvestButtonScript);
});
