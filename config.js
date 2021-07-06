const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoibWljaGVsbGVobGNuIiwiYSI6ImNrb2tuczRsNjA1c3AycHJ6M25oZ3dwOTkifQ.PwztYmGkX406GWClPKsOyg",
  CSV: "https://docs.google.com/spreadsheets/d/1X1R3EQTR2JdP7kxGO0W0AvHf6fOzn3ZP-TN9HWsPaoc/gviz/tq?tqx=out:csv&sheet=Sheet1",
  center: [106.6957867, 10.78016587],
  zoom: 14,
  title: "Replace with your title",
  description:
    "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
  sideBarInfo: ["Location_Name", "Address", "Phone"],
  popupInfo: ["Location_Name"],
  filters: [
    {
      type: "dropdown",
      title: "Languages supported: ",
      columnHeader: "Languages",
      listItems: [
        "Amharic",
        "ASL",
        "Cambodian",
        "Chinese",
        "Danish",
        "English",
        "French",
        "German",
        "Greek",
        "Hindi",
        "Italian",
        "Japanese",
        "Korean",
        "Language Line Services",
        "Norwegian",
        "Oriya",
        "Portuguese",
        "Punjabi",
        "Russian",
        "Somali",
        "Spanish",
        "Swedish",
        "Tagalog",
        "Thai",
        "Tigrinya",
        "Tongan",
        "Vietnamese",
        "Ukranian",
      ],
    },
    {
      type: "checkbox",
      title: "Devices available: ",
      columnHeader: "Devices_available", // Case sensitive - must match spreadsheet entry
      listItems: ["Computer", "Wi-Fi", "Adaptive Laptops"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "Clients: ",
      columnHeader: "Clients",
      listItems: [
        "Adults",
        "Disabled",
        "Homeless",
        "Immigrants/Refugees",
        "Low Income",
        "Seniors",
        "Youth: Pre-teen",
        "Youth: Teen",
      ],
    },
  ],
};
document
.getElementById('buttons')
.addEventListener('click', function (event) {
var language = event.target.id.substr('button-'.length);
// Use setLayoutProperty to set the value of a layout property in a style layer.
// The three arguments are the id of the layer, the name of the layout property,
// and the new property value.
map.setLayoutProperty('country-label', 'text-field', [
'get',
'name_' + language
]);
});
