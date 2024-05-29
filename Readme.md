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
## Preview

<img width="250" alt="Screenshot 2024-05-29 at 9 52 37 PM" src="https://github.com/bilions-org/thailand-address/assets/42437544/6e032423-9400-4f3f-84ec-575d6b266c4d">
<img width="250" alt="Screenshot 2024-05-29 at 9 52 48 PM" src="https://github.com/bilions-org/thailand-address/assets/42437544/3e234d91-f10a-4cd0-93f5-76ab1cdfee30">
<img width="250" alt="Screenshot 2024-05-29 at 9 52 51 PM" src="https://github.com/bilions-org/thailand-address/assets/42437544/b9dada73-ff60-4a97-919e-4e42a25e2f76">
