# api-2020

## Overview

It's CRUD API for managed all users.

### [POST] Create user

Allows the creation of single user.

|                             |                  |
| --------------------------- | ---------------- |
| Requires authentification ? | No               |
| Who can use it ?            | Owner            |
| Response formats            | application/JSON |

- HTTP request: POST => user/create

#### Parameters :

```javascript
{
  'first_name': 'Alexandre', //optionnal
  'last_name': 'Houmeau', //optionnal
  'email': 'alexandre@gmail.com', //require
  'password': '123456789', //require
  'gender': 'male', //optionnal
  'height': 1.93, //optionnal
  'weight': 98, //optionnal
  'city': 'Paris', //optionnal
  'cityCode': 75000, //optionnal
  'street_number': 13, //optionnal
  'street_type': 'rue', //optionnal
  'street_name': 'de canobrai', //optionnal
  'phone': '0651448027', //optionnal
  'image_profil': 'https://img.maxisciences.com/article/480/mourir-moins-con/le-plus-rapide-sur-terre-c-est-de-notoriete-publique-le-guepard-est-l-animal-terrestre-le-plus-rapide-au-monde-il-peut-courir-jusqu-a-une-vitesse-de-112-km-h_4b614450da0e0da63cbf951da96d092feb29bcdf.jpg', //optionnal

  }
```

### [GET] Show user

Get an user by id

|                             |                  |
| --------------------------- | ---------------- |
| Requires authentification ? | No               |
| Who can use it ?            | Owner            |
| Response formats            | application/JSON |
|                             |                  |


#### Response :

```javascript
{
  'id'; '12483bh45873j',
  'first_name': 'Alexandre', 
  'last_name': 'Houmeau', 
  'email': 'alexandre@gmail.com',
  'password': '123456789',
  'gender': 'male',
  'height': 1.93,
  'weight': 98,
  'city': 'Paris',
  'cityCode': 75000,
  'street_number': 13,
  'street_type': 'rue',
  'street_name': 'de canobrai',
  'phone': '0651448017',
  'image_profil': 'https://img.maxisciences.com/article/480/mourir-moins-con/le-plus-rapide-sur-terre-c-est-de-notoriete-publique-le-guepard-est-l-animal-terrestre-le-plus-rapide-au-monde-il-peut-courir-jusqu-a-une-vitesse-de-112-km-h_4b614450da0e0da63cbf951da96d092feb29bcdf.jpg',

  }
```