# Thailand Address

## Installation

`npm install @bilions/thailand-address`

## Usage

```ts
import { thailandAddress, IDistrict, IProvince, ISubDistrict } from '@bilions/thailand-address'`

const provinces : IProvince[] = thailandAddress.getProvinces()
const districts : IDistrict[] = thailandAddress.getDistricts(1 /* Province ID */)
const subDistricts : ISubDistrict[] = thailandAddress.getSubDistricts(1 /* District ID */)
```
