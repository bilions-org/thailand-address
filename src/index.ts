import { districts, IDistrict } from "./address/districts"
import { provinces, IProvince } from "./address/provinces"
import { subDistricts, ISubDistrict } from "./address/sub_districts"

class App {
  getProvinces(): IProvince[] {
    return provinces
  }

  getDistricts(provinceId: number): IDistrict[] {
    return districts.filter((data: any) => {
      return data.province_id == provinceId
    })
  }

  getSubDistricts(districtId: number): ISubDistrict[] {
    return subDistricts.filter((data: any) => {
      return data.district_id == districtId
    })
  }
}

const thailandAddress = new App()

export {
  thailandAddress,
  districts,
  provinces,
  subDistricts,
  IDistrict,
  IProvince,
  ISubDistrict
}
