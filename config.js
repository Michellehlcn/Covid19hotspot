const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoibWljaGVsbGVobGNuIiwiYSI6ImNrb2tuczRsNjA1c3AycHJ6M25oZ3dwOTkifQ.PwztYmGkX406GWClPKsOyg",
  CSV: "https://docs.google.com/spreadsheets/d/1X1R3EQTR2JdP7kxGO0W0AvHf6fOzn3ZP-TN9HWsPaoc/gviz/tq?tqx=out:csv&sheet=Sheet1",
  center: [106.6957867, 10.78016587],
  zoom: 10,
  title: "Replace with your title",
  description:
    "CÁC ĐIỂM PHONG TỎA TẠI TP.HỒ CHÍ MINH You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
  sideBarInfo: ["Location_Name", "Address", "Phone"],
  popupInfo: ["Location_Name"],
  filters: [
    {
      type: "dropdown",
      title: "Quận: ",
      columnHeader: "District",
      listItems: [
        "Quận 1",
        "Quận 3",
        "Quận 4",
        "Quận 5",
        "Quận 6",
        "Quận 7",
        "Quận 8",
        "Quận 10",
        "Quận 11",
         "Quận 12",
        "Quận Bình Chánh",
        "Quận Bình Tân",
        "Quận Bình Thạnh",
        "Quận Củ Chi",
        "Quận Gò Vấp",
        "Quận Hóc Môn",
        "Quận Nhà Bè",
        "Quận Phú Nhuận",
        "Quận Tân Bình",
         "Quận Tân Phú",
         "Quận Thủ Đức"
      ],
    },
    {
      type: "checkbox",
      title: "Quận: ",
      columnHeader: "District", // Case sensitive - must match spreadsheet entry
      listItems: [
        "Quận 1",
        "Quận 3",
        "Quận 4",
        "Quận 5",
        "Quận 6",
        "Quận 7",
        "Quận 8",
        "Quận 10",
        "Quận 11",
         "Quận 12",
        "Quận Bình Chánh",
        "Quận Bình Tân",
        "Quận Bình Thạnh",
        "Quận Củ Chi",
        "Quận Gò Vấp",
        "Quận Hóc Môn",
        "Quận Nhà Bè",
        "Quận Phú Nhuận",
        "Quận Tân Bình",
         "Quận Tân Phú",
         "Quận Thủ Đức"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      
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
