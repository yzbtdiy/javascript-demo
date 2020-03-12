// 导入 express，用于创建路由
// express 
const express = require("express");
// 导入数据文件 cities.json
const cities = require("./cities");
// 创建 express 实例
const app = new express();
// 向 /address 请求数据返回 address.html 页面
app.get("/address", (request, response) => {
  response.sendFile(__dirname + "/address.html");
});
// 向 /get_provinces 请求返回省信息
app.get("/get_provinces", (request, response) => {
  let provincesData = [];
  for (let i in cities) {
    provincesData.push(i);
  }
  response.send(JSON.stringify(provincesData));
});
// 向 /get_cites 请求返回市信息
app.get("/get_cities", (request, response) => {
  let selectProvince = request.query.provinces;
  let theCities = cities[selectProvince];
  let citiesData = [];
  for (let i in theCities) {
    citiesData.push(i);
  }
  response.send(JSON.stringify(citiesData));
});
// 向 /get_counties 请求返回县信息
app.get("/get_counties", (request, response) => {
  let selectProvince = request.query.selectProvince;
  let selectCity = request.query.selectCity;
  let countiesData = cities[selectProvince][selectCity];
  response.send(JSON.stringify(countiesData));
});
// 监听端口
app.listen(8080, () => {
  console.log("server is running on port 8080");
});
