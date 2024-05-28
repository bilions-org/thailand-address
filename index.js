let provinces = require('./address/provinces.json')
let districts = require('./address/districts.json')
let subDistricts = require('./address/sub_districts.json')

const app = {}

app.getProvinces = () => {
  return provinces
}

app.getDistricts = (provinceId) => {
  return districts.filter((data) => {
    return data.province_id == provinceId
  })
}

app.getSubDistricts = (districtId) => {
  return subDistricts.filter((data) => {
    return data.district_id == districtId
  })
}

module.exports = app
