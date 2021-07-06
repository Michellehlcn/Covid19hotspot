const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoibWljaGVsbGVobGNuIiwiYSI6ImNrb2tuczRsNjA1c3AycHJ6M25oZ3dwOTkifQ.PwztYmGkX406GWClPKsOyg",
  CSV: "https://docs.google.com/spreadsheets/d/1X1R3EQTR2JdP7kxGO0W0AvHf6fOzn3ZP-TN9HWsPaoc/gviz/tq?tqx=out:csv&sheet=Sheet1",
  center: [106.6957867, 10.78016587],
  zoom: 14,
  title: "CÁC ĐIỂM PHONG TỎA ",
  description:
    "Những người mắc bệnh COVID-19 đã có một loạt các triệu chứng được báo cáo - từ các triệu chứng nhẹ đến bệnh nghiêm trọng. Các triệu chứng có thể xuất hiện 2-14 ngày sau khi phơi nhiễm với vi-rút. Bất cứ ai cũng có thể có các triệu chứng từ nhẹ đến nghiêm trọng. Gọi HOTLINE COVID-19 08 6957 7133 hoặc cho cơ sở cấp cứu địa phương. Danh sach cập nhật ngày 05/7/2021 (hcdc.vn)",
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
      title: "Địa điểm: ",
      columnHeader: "City", // Case sensitive - must match spreadsheet entry
      listItems: ["Hồ Chí Minh"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      
    },
  ],
};

