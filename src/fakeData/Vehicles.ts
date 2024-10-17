export interface Address {
    lat: number;
    lng: number;
    tilt: number;
  }
  export interface Speed {
    value: string;
    unit: string;
  }
  export interface Vehicle {
    id: number;
    unique_id: string;
    instance_type: string;
    uid: number;
    plate: string;
    vehicle_plate_color: string;
    vtype_id: number;
    vtype_name: string;
    vehicle_num: string;
    name: string;
    year: number;
    make: string;
    image: string;
    driving_status: number;
    idling_status: number;
    color: string;
    location: Address;
    ignition: number;
    speed: Speed;
    
  }

  export const vehicles: Vehicle[] = 
  [
    {
      //"_id": "65dc798f07ec75b6d67c5bd7",
      unique_id: "8IXQE4EOM54",
      instance_type: "ACTIVITY",
      id: 378,
      uid: 378,
      plate: "AD-4-91098", 
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000048",
      "name": "Unicorn",
      "year": 2018,
      "make": "Honda",
      "image": "",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.1409066,
        "lng": 55.839985,
        "tilt": 347
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e5752715303df623be6226",
      unique_id: "LGTVRXV78UN",
      instance_type: "ACTIVITY",
      id: 447,
      uid: 447,
      plate: "AD-T-2882",
      vehicle_plate_color: "#FF9446FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000388",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/155152-1709536509393.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3441116,
        "lng": 54.5194933,
        "tilt": 12
      },
      "ignition": 1,
      "speed": {
        "value": "20.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc29c407ec75b6d6fe5966",
      unique_id: "4FWN188HHYM",
      instance_type: "ACTIVITY",
      id: 317,
      uid: 317,
      plate: "AD-T-1385",
      vehicle_plate_color: "#FF8D5BFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000130",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/382061-1708927366949.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3447949,
        "lng": 54.5215116,
        "tilt": 10
      },
      "ignition": 1,
      "speed": {
        "value": "5.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc7c6007ec75b6d67f6446",
      unique_id: "UAXGI2514ZO",
      instance_type: "ACTIVITY",
      id: 382,
      uid: 382,
      plate: "AD-4-92058",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000043",
      "name": "Unicorn",
      "year": 2018,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/110334-1708948480940.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3420916,
        "lng": 54.5210066,
        "tilt": 12
      },
      "ignition": 1,
      "speed": {
        "value": "6.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e575df15303df623bfeded",
      unique_id: "FXF2OPLRPK6",
      instance_type: "ACTIVITY",
      id: 450,
      uid: 450,
      plate: "AD-T-3566",
      vehicle_plate_color: "#FF9049FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000393",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/303764-1709536690016.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3426383,
        "lng": 54.5206683,
        "tilt": 31
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86f8607ec75b6d6e4f570",
      unique_id: "YUL99AMJ7Q3",
      instance_type: "ACTIVITY",
      id: 254,
      uid: 254,
      plate: "AD-T-2710",
      vehicle_plate_color: "#FF8844FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000257",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/42721-1708683097794.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.342025,
        "lng": 54.521485,
        "tilt": 15
      },
      "ignition": 1,
      "speed": {
        "value": "2.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc4b2707ec75b6d6411b79",
      unique_id: "LBCUJOBGUWU",
      instance_type: "ACTIVITY",
      id: 361,
      uid: 361,
      plate: "AD-T-1480",
      vehicle_plate_color: "#FF8E28FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-1",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/175739-1708935882866.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1387633,
        "lng": 55.8401883,
        "tilt": 350
      },
      "ignition": 1,
      "speed": {
        "value": "4.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d866fd07ec75b6d6cfeb76",
      unique_id: "231SVUX35U0",
      instance_type: "ACTIVITY",
      id: 221,
      uid: 221,
      plate: "AD-T-3122",
      vehicle_plate_color: "#FF9F5AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000224",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/40261-1708680853388.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3449116,
        "lng": 54.519215,
        "tilt": 11
      },
      "ignition": 1,
      "speed": {
        "value": "3.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d73f3f07ec75b6d68ba8bf",
      unique_id: "WN8QYPXIUS8",
      instance_type: "ACTIVITY",
      id: 153,
      uid: 153,
      plate: "AD-T-1510",
      vehicle_plate_color: "#FF5117FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000126",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/214995-1708605170474.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3441783,
        "lng": 54.5196466,
        "tilt": 13
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d6217607ec75b6d68e8bb5",
      unique_id: "SU1HNN3EONL",
      instance_type: "ACTIVITY",
      id: 121,
      uid: 121,
      plate: "AD-T-2145",
      vehicle_plate_color: "#FF8F00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000071",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/383218-1708531972627.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3414933,
        "lng": 54.5194433,
        "tilt": 8
      },
      "ignition": 1,
      "speed": {
        "value": "5.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d748bb07ec75b6d69fc51b",
      unique_id: "C5GZBFRWS75",
      instance_type: "ACTIVITY",
      id: 179,
      uid: 179,
      plate: "AD-T-1172",
      vehicle_plate_color: "#FF8D19FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000169",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/10541-1708607624690.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3432366,
        "lng": 54.5218499,
        "tilt": 14
      },
      "ignition": 1,
      "speed": {
        "value": "17.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e573e915303df623bc126f",
      unique_id: "X9R0AV6RV3Y",
      instance_type: "ACTIVITY",
      id: 442,
      uid: 442,
      plate: "AD-T-2588",
      vehicle_plate_color: "#FF792DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000381",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/163145-1709536139893.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3447433,
        "lng": 54.520815,
        "tilt": 15
      },
      "ignition": 1,
      "speed": {
        "value": "8.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d879e507ec75b6d6fde647",
      unique_id: "BMB5W4Z37NY",
      instance_type: "ACTIVITY",
      id: 291,
      uid: 291,
      plate: "AD-T-1213",
      vehicle_plate_color: "#FFA237FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000313",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/57247-1708685739179.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34285,
        "lng": 54.5212266,
        "tilt": 14
      },
      "ignition": 1,
      "speed": {
        "value": "2.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "6608351068c839c5edde125d",
      unique_id: "8CLEVVAZE63",
      instance_type: "ACTIVITY",
      id: 483,
      uid: 483,
      plate: "AD-4-51836",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "51836",
      "name": "Coaster",
      "year": 2023,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/71673-1711813779114.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.344565,
        "lng": 54.522085,
        "tilt": 17
      },
      "ignition": 1,
      "speed": {
        "value": "27.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d5f74c07ec75b6d6389e8c",
      unique_id: "UW7JMWEO4NJ",
      instance_type: "ACTIVITY",
      id: 108,
      uid: 108,
      plate: "AD-T-1879",
      vehicle_plate_color: "#FFA018FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000052",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/104480-1708521193210.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3441516,
        "lng": 54.5207533,
        "tilt": 10
      },
      "ignition": 1,
      "speed": {
        "value": "10.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc4c5907ec75b6d6435644",
      unique_id: "BJGD7S9EK4T",
      instance_type: "ACTIVITY",
      id: 364,
      uid: 364,
      plate: "AD-T-1534",
      vehicle_plate_color: "#FF7B39FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-17",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/146195-1708936196349.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3403216,
        "lng": 54.5202183,
        "tilt": 19
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc7d0707ec75b6d67fdc0e",
      unique_id: "CS4G2OWBXP0",
      instance_type: "ACTIVITY",
      id: 384,
      uid: 384,
      plate: "AD-4-93056",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000037",
      "name": "Unicorn",
      "year": 2018,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/136911-1708948695328.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3417383,
        "lng": 54.520675,
        "tilt": 29
      },
      "ignition": 1,
      "speed": {
        "value": "7.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d5f60707ec75b6d6360178",
      unique_id: "L7OMTQR2WJ2",
      instance_type: "ACTIVITY",
      id: 106,
      uid: 106,
      plate: "AD-T-1183",
      vehicle_plate_color: "#FF983BFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000056",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/170052-1708520874239.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.344905,
        "lng": 54.519145,
        "tilt": 13
      },
      "ignition": 1,
      "speed": {
        "value": "5.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e5756715303df623beec60",
      unique_id: "YXQMT1R1WLI",
      instance_type: "ACTIVITY",
      id: 448,
      uid: 448,
      plate: "AD-T-2883",
      vehicle_plate_color: "#FFB168FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000385",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/444400-1709536570792.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3416333,
        "lng": 54.5205366,
        "tilt": 0
      },
      "ignition": 1,
      "speed": {
        "value": "19.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc7fe907ec75b6d682dfd1",
      unique_id: "I6ZNDIH7WTM",
      instance_type: "ACTIVITY",
      id: 391,
      uid: 391,
      plate: "AD-4-87326",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000119",
      "name": "Unicorn",
      "year": 2020,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/111488-1708949428603.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3420883,
        "lng": 54.520735,
        "tilt": 11
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86ecc07ec75b6d6e3261c",
      unique_id: "B3CVGMXB3AH",
      instance_type: "ACTIVITY",
      id: 251,
      uid: 251,
      plate: "AD-T-4128",
      vehicle_plate_color: "#FFA767FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000265",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/350754-1708682912587.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3421866,
        "lng": 54.5199716,
        "tilt": 16
      },
      "ignition": 1,
      "speed": {
        "value": "7.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7381607ec75b6d6803d4b",
      unique_id: "NKVRQK9XW0F",
      instance_type: "ACTIVITY",
      id: 142,
      uid: 142,
      plate: "AD-T-3451",
      vehicle_plate_color: "#FF6F1DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000095",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/391596-1708603342923.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3419516,
        "lng": 54.52147,
        "tilt": 8
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e01cd3c76f439a6683e301",
      unique_id: "ZDQFRTXHP4W",
      instance_type: "ACTIVITY",
      id: 415,
      uid: 415,
      plate: "AD-T-1336",
      vehicle_plate_color: "#FF8618FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000338",
      "name": "Corolla",
      "year": 2023,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/170736-1709186059242.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34187,
        "lng": 54.5205866,
        "tilt": 15
      },
      "ignition": 1,
      "speed": {
        "value": "8.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc847207ec75b6d688f8c9",
      unique_id: "7RTPYFFWG7W",
      instance_type: "ACTIVITY",
      id: 398,
      uid: 398,
      plate: "AD-4-80646",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000220",
      "name": "Unicorn",
      "year": 2021,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/54282-1708950592418.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3420033,
        "lng": 54.5208749,
        "tilt": 17
      },
      "ignition": 1,
      "speed": {
        "value": "7.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d871ab07ec75b6d6eadd02",
      unique_id: "2CT79VNZO7J",
      instance_type: "ACTIVITY",
      id: 259,
      uid: 259,
      plate: "AD-T-2310",
      vehicle_plate_color: "#FF8D5BFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000262",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/277141-1708683650593.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3425533,
        "lng": 54.520915,
        "tilt": 21
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc4df607ec75b6d645f96d",
      unique_id: "RKOZ817S7GY",
      instance_type: "ACTIVITY",
      id: 367,
      uid: 367,
      plate: "AD-T-1560",
      vehicle_plate_color: "#FF8D24FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-2",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/324596-1708936639719.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3405466,
        "lng": 54.5215933,
        "tilt": 17
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d5f7e907ec75b6d639d189",
      unique_id: "AVU5XY8GU7Y",
      instance_type: "ACTIVITY",
      id: 109,
      uid: 109,
      plate: "AD-T-1885",
      vehicle_plate_color: "#FFA91FFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000050",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/120073-1708521357347.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3440883,
        "lng": 54.5199983,
        "tilt": 9
      },
      "ignition": 1,
      "speed": {
        "value": "10.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7376b07ec75b6d67f2a44",
      unique_id: "H6YZR08FXEV",
      instance_type: "ACTIVITY",
      id: 140,
      uid: 140,
      plate: "AD-T-3453",
      vehicle_plate_color: "#FF6C3AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000092",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/388344-1708603174919.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3420883,
        "lng": 54.52142,
        "tilt": 13
      },
      "ignition": 1,
      "speed": {
        "value": "1.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e574b915303df623bd75b2",
      unique_id: "SX0FRXAHAOV",
      instance_type: "ACTIVITY",
      id: 445,
      uid: 445,
      plate: "AD-T-2880",
      vehicle_plate_color: "#FF9652FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000387",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/330393-1709536394785.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3442616,
        "lng": 54.5191516,
        "tilt": 11
      },
      "ignition": 1,
      "speed": {
        "value": "24.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d5f49f07ec75b6d6324930",
      unique_id: "G6EWD5FHWOG",
      instance_type: "ACTIVITY",
      id: 104,
      uid: 104,
      plate: "AD-T-1157",
      vehicle_plate_color: "#FF8E26FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000070",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/399362-1708520387346.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3443533,
        "lng": 54.5191216,
        "tilt": 13
      },
      "ignition": 1,
      "speed": {
        "value": "9.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8695507ec75b6d6d65cad",
      unique_id: "A1TCUR8NGON",
      instance_type: "ACTIVITY",
      id: 229,
      uid: 229,
      plate: "AD-T-2127",
      vehicle_plate_color: "#FF8A47FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000232",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/24093-1708681457187.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3420116,
        "lng": 54.5196166,
        "tilt": 0
      },
      "ignition": 1,
      "speed": {
        "value": "1.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d5f6cc07ec75b6d637a6b4",
      unique_id: "COWCF4U9ANV",
      instance_type: "ACTIVITY",
      id: 107,
      uid: 107,
      plate: "AD-T-1450",
      vehicle_plate_color: "#FF901EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000063",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/184934-1708521070527.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3415133,
        "lng": 54.5194033,
        "tilt": 12
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d868a207ec75b6d6d4711a",
      unique_id: "BC9GPYWNYXU",
      instance_type: "ACTIVITY",
      id: 227,
      uid: 227,
      plate: "AD-T-1205",
      vehicle_plate_color: "#FF9845FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000230",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/68303-1708681334734.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.34293,
        "lng": 54.5212283,
        "tilt": 19
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "6658ae106ea38693d11cc857",
      unique_id: "WEAS2S0VPE0",
      instance_type: "ACTIVITY",
      id: 507,
      uid: 507,
      plate: "AD-L-1902",
      vehicle_plate_color: "#FFA553FF",
      "vtype_id": 2392,
      "vtype_name": "Heavy Machinery",
      "vehicle_num": "HVMach-000000006",
      "name": "Chain Excavator",
      "year": 2018,
      "make": "Caterpillar",
      "image": "https://wiot-fleet-prod.wiot360.com/298987-1717087536045.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3386583,
        "lng": 54.5207533,
        "tilt": 12
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e01da2c76f439a668532f7",
      unique_id: "QW2AK3A5KLN",
      instance_type: "ACTIVITY",
      id: 417,
      uid: 417,
      plate: "AD-T-1386",
      vehicle_plate_color: "#FF6B00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000350",
      "name": "Corolla",
      "year": 2023,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/275408-1709186395073.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3442666,
        "lng": 54.5210249,
        "tilt": 14
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d6226707ec75b6d68ff434",
      unique_id: "8JBAOY1YYH3",
      instance_type: "ACTIVITY",
      id: 123,
      uid: 123,
      plate: "AD-T-2454",
      vehicle_plate_color: "#FF902AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000058",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/264275-1708532264586.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.34423,
        "lng": 54.5211233,
        "tilt": 7
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d740d707ec75b6d68e2ef7",
      unique_id: "W671NPPAHJJ",
      instance_type: "ACTIVITY",
      id: 158,
      uid: 158,
      plate: "AD-T-1594",
      vehicle_plate_color: "#FF9600FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000142",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/204840-1708605565458.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3425649,
        "lng": 54.5210516,
        "tilt": 18
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86ca607ec75b6d6de9357",
      unique_id: "LKOBAUHL6C0",
      instance_type: "ACTIVITY",
      id: 242,
      uid: 242,
      plate: "AD-T-2109",
      vehicle_plate_color: "#FF8B07FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000246",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/331157-1708682355980.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3425866,
        "lng": 54.5210916,
        "tilt": 15
      },
      "ignition": 1,
      "speed": {
        "value": "1.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d873be07ec75b6d6f0926f",
      unique_id: "FKYLTE28VW2",
      instance_type: "ACTIVITY",
      id: 267,
      uid: 267,
      plate: "AD-T-3105",
      vehicle_plate_color: "#FF7F3FFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000270",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/168450-1708684152529.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3367899,
        "lng": 54.5023883,
        "tilt": 15
      },
      "ignition": 1,
      "speed": {
        "value": "6.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc477007ec75b6d63b70cb",
      unique_id: "KGSO0PS948X",
      instance_type: "ACTIVITY",
      id: 358,
      uid: 358,
      plate: "AD-T-1397",
      vehicle_plate_color: "#FF841FFF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-9",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/21277-1708934933833.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.1395766,
        "lng": 55.8394066,
        "tilt": 344
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74a8f07ec75b6d6a2ea96",
      unique_id: "8PD0HH2QUYK",
      instance_type: "ACTIVITY",
      id: 187,
      uid: 187,
      plate: "AD-T-1176",
      vehicle_plate_color: "#FF924CFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000187",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/198399-1708608103241.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3421333,
        "lng": 54.5216066,
        "tilt": 14
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e56d5e15303df623b0a28d",
      unique_id: "LAMVTNLNATO",
      instance_type: "ACTIVITY",
      id: 441,
      uid: 441,
      plate: "AD-T-2488",
      vehicle_plate_color: "#FF8555FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000382",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/203629-1709532675133.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.34391,
        "lng": 54.5219566,
        "tilt": 17
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74bae07ec75b6d6a4d92a",
      unique_id: "AHXSCMZLMJE",
      instance_type: "ACTIVITY",
      id: 192,
      uid: 192,
      plate: "AD-T-1275",
      vehicle_plate_color: "#FFA447FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000183",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/239268-1708608388326.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3446066,
        "lng": 54.5190916,
        "tilt": 6
      },
      "ignition": 1,
      "speed": {
        "value": "19.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86d1c07ec75b6d6df8e8e",
      unique_id: "831P1K62M1V",
      instance_type: "ACTIVITY",
      id: 244,
      uid: 244,
      plate: "AD-T-1071",
      vehicle_plate_color: "#FFA34FFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000248",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/214661-1708682479036.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.341675,
        "lng": 54.5214383,
        "tilt": 5
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e02bd1c76f439a66a0fc6c",
      unique_id: "QBDJJ8RLG3I",
      instance_type: "ACTIVITY",
      id: 429,
      uid: 429,
      plate: "AD-4-16909",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000334",
      "name": "Apache",
      "year": 2022,
      "make": "TVS",
      "image": "https://wiot-fleet-prod.wiot360.com/286348-1709190041194.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.342225,
        "lng": 54.5201633,
        "tilt": 17
      },
      "ignition": 1,
      "speed": {
        "value": "11.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74a1407ec75b6d6a215d1",
      unique_id: "5Z9UQW8UFQ5",
      instance_type: "ACTIVITY",
      id: 185,
      uid: 185,
      plate: "AD-T-1185",
      vehicle_plate_color: "#FF985CFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000173",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/357804-1708607984203.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3443466,
        "lng": 54.521845,
        "tilt": 1
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86d9c07ec75b6d6e0a206",
      unique_id: "EOTZRKMFUKS",
      instance_type: "ACTIVITY",
      id: 246,
      uid: 246,
      plate: "AD-T-4124",
      vehicle_plate_color: "#FF9B4AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000250",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/180944-1708682602377.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3447266,
        "lng": 54.5217983,
        "tilt": 8
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "665768476ea38693d19343fc",
      unique_id: "S1UC2NQ2MSJ",
      instance_type: "ACTIVITY",
      id: 502,
      uid: 502,
      plate: "AD-L-1901",
      vehicle_plate_color: "#FF8B37FF",
      "vtype_id": 2392,
      "vtype_name": "Heavy Machinery",
      "vehicle_num": "HVMach-000000008",
      "name": "Wheel loader",
      "year": 2018,
      "make": "Caterpillar",
      "image": "https://wiot-fleet-prod.wiot360.com/216108-1717004172348.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.33898,
        "lng": 54.5213833,
        "tilt": 36
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8774607ec75b6d6f81e7f",
      unique_id: "G6HCMCIH542",
      instance_type: "ACTIVITY",
      id: 280,
      uid: 280,
      plate: "AD-T-4108",
      vehicle_plate_color: "#FF964BFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000291",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/439944-1708685082633.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3428466,
        "lng": 54.5213433,
        "tilt": 11
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "665769996ea38693d197ef9a",
      unique_id: "MLVF7BC4U5W",
      instance_type: "ACTIVITY",
      id: 503,
      uid: 503,
      plate: "AD-L-1745",
      vehicle_plate_color: "#FFA027FF",
      "vtype_id": 2392,
      "vtype_name": "Heavy Machinery",
      "vehicle_num": "HVMach-000000005",
      "name": "road roller",
      "year": 2016,
      "make": "Caterpillar",
      "image": "https://wiot-fleet-prod.wiot360.com/178564-1717004420418.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3393766,
        "lng": 54.5215716,
        "tilt": 14
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7361807ec75b6d67d0dba",
      unique_id: "893Z7FEILSO",
      instance_type: "ACTIVITY",
      id: 136,
      uid: 136,
      plate: "AD-T-3145",
      vehicle_plate_color: "#FF7D3AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000082",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/341789-1708602805579.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3449399,
        "lng": 54.5196833,
        "tilt": 5
      },
      "ignition": 1,
      "speed": {
        "value": "7.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e5761515303df623c06eea",
      unique_id: "EW9K71L5AGR",
      instance_type: "ACTIVITY",
      id: 451,
      uid: 451,
      plate: "AD-T-2884",
      vehicle_plate_color: "#FF9457FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000392",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/390301-1709536748159.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.344395,
        "lng": 54.5213099,
        "tilt": 16
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "663b2f2eba2b02aa3ea5cad8",
      unique_id: "FM0T0TK1N09",
      instance_type: "ACTIVITY",
      id: 494,
      uid: 494,
      plate: "AD-T-47108",
      vehicle_plate_color: "#FF660EFF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "VEHC-284",
      "name": "Civillian",
      "year": 2010,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/344181-1715154643826.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.340985,
        "lng": 54.5191866,
        "tilt": 12
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8713507ec75b6d6e99391",
      unique_id: "TGKJKGL3RPO",
      instance_type: "ACTIVITY",
      id: 257,
      uid: 257,
      plate: "AD-T-2610",
      vehicle_plate_color: "#FF834CFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000260",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/224797-1708683527876.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.342525,
        "lng": 54.52088,
        "tilt": 28
      },
      "ignition": 1,
      "speed": {
        "value": "1.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7390a07ec75b6d681c6ef",
      unique_id: "1LTVK9BJVCJ",
      instance_type: "ACTIVITY",
      id: 145,
      uid: 145,
      plate: "AD-T-3454",
      vehicle_plate_color: "#FF842AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000101",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/378669-1708603582349.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3445483,
        "lng": 54.521875,
        "tilt": 21
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8789707ec75b6d6faf770",
      unique_id: "FGXJVRQCQIR",
      instance_type: "ACTIVITY",
      id: 286,
      uid: 286,
      plate: "AD-T-4109",
      vehicle_plate_color: "#FF9057FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000301",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/334199-1708685414495.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3415616,
        "lng": 54.5218216,
        "tilt": 21
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d739e407ec75b6d68324f0",
      unique_id: "DE3FTXJ36YW",
      instance_type: "ACTIVITY",
      id: 148,
      uid: 148,
      plate: "AD-T-3045",
      vehicle_plate_color: "#FF9814FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000107",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/413688-1708603818362.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3422116,
        "lng": 54.5196066,
        "tilt": 16
      },
      "ignition": 1,
      "speed": {
        "value": "5.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc4d1207ec75b6d6445923",
      unique_id: "1OIVIN86RP1",
      instance_type: "ACTIVITY",
      id: 365,
      uid: 365,
      plate: "AD-T-1557",
      vehicle_plate_color: "#FF7F36FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-12",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/319279-1708936347290.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3410116,
        "lng": 54.52159,
        "tilt": 21
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7394d07ec75b6d68230f5",
      unique_id: "ANB5469G4MA",
      instance_type: "ACTIVITY",
      id: 146,
      uid: 146,
      plate: "AD-T-2945",
      vehicle_plate_color: "#FF5D00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000103",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/313355-1708603679066.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.34226,
        "lng": 54.5216433,
        "tilt": 17
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d868e107ec75b6d6d51b2f",
      unique_id: "6WSMAGG1UOC",
      instance_type: "ACTIVITY",
      id: 228,
      uid: 228,
      plate: "AD-T-2126",
      vehicle_plate_color: "#FF9C1EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000231",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/140322-1708681390779.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3420716,
        "lng": 54.5212016,
        "tilt": 8
      },
      "ignition": 1,
      "speed": {
        "value": "1.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e5747b15303df623bd0acb",
      unique_id: "Q05TVBFDDAY",
      instance_type: "ACTIVITY",
      id: 444,
      uid: 444,
      plate: "AD-L-2788",
      vehicle_plate_color: "#FF8446FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000379",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/27580-1709536329352.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.3437316,
        "lng": 54.5212633,
        "tilt": 14
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e017cdc76f439a6679e143",
      unique_id: "B1OUW6VGBGA",
      instance_type: "ACTIVITY",
      id: 414,
      uid: 414,
      plate: "AD-T-1360",
      vehicle_plate_color: "#FF7424FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000346",
      "name": "Corolla",
      "year": 2023,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/43298-1709184814972.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34396,
        "lng": 54.5218216,
        "tilt": 8
      },
      "ignition": 1,
      "speed": {
        "value": "5.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8717007ec75b6d6ea380f",
      unique_id: "19TMLVQCU5Q",
      instance_type: "ACTIVITY",
      id: 258,
      uid: 258,
      plate: "AD-T-2106",
      vehicle_plate_color: "#FF974BFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000261",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/28152-1708683587738.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.137645,
        "lng": 55.838085,
        "tilt": 337
      },
      "ignition": 1,
      "speed": {
        "value": "22.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e5659d15303df623a32818",
      unique_id: "78G9S9IVML1",
      instance_type: "ACTIVITY",
      id: 439,
      uid: 439,
      plate: "AD-T-2188",
      vehicle_plate_color: "#FF7628FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000377",
      "name": "Corolla",
      "year": 2023,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/92144-1709532462157.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3419083,
        "lng": 54.5219266,
        "tilt": 11
      },
      "ignition": 1,
      "speed": {
        "value": "4.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7522d07ec75b6d6b3d28f",
      unique_id: "JYCE5DPK33S",
      instance_type: "ACTIVITY",
      id: 217,
      uid: 217,
      plate: "AD-T-1654",
      vehicle_plate_color: "#FFA256FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000211",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/258927-1708610039583.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.13808,
        "lng": 55.8381183,
        "tilt": 338
      },
      "ignition": 1,
      "speed": {
        "value": "12.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e5778315303df623c445ec",
      unique_id: "Y3Y95DRUQLY",
      instance_type: "ACTIVITY",
      id: 457,
      uid: 457,
      plate: "AD-T-3660",
      vehicle_plate_color: "#FFA24EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000396",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/218586-1709537115745.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3432533,
        "lng": 54.5198266,
        "tilt": 11
      },
      "ignition": 1,
      "speed": {
        "value": "17.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8756207ec75b6d6f418a9",
      unique_id: "FAXVMC3YHL2",
      instance_type: "ACTIVITY",
      id: 274,
      uid: 274,
      plate: "AD-T-3710",
      vehicle_plate_color: "#FFA350FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000272",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/144255-1708684602469.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3430433,
        "lng": 54.5196416,
        "tilt": 2
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d737c107ec75b6d67fb4d8",
      unique_id: "SAIXU882ERQ",
      instance_type: "ACTIVITY",
      id: 141,
      uid: 141,
      plate: "AD-T-2745",
      vehicle_plate_color: "#FF6B32FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000094",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/275299-1708603254064.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3445366,
        "lng": 54.5219866,
        "tilt": 9
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc7e9f07ec75b6d6814c9d",
      unique_id: "LF5HIE1WAMQ",
      instance_type: "ACTIVITY",
      id: 387,
      uid: 387,
      plate: "AD-4-94106",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000001",
      "name": "Unicorn",
      "year": 2017,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/282264-1708949090438.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34208,
        "lng": 54.520455,
        "tilt": 11
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e5743315303df623bc90dc",
      unique_id: "0LT3UHZD63T",
      instance_type: "ACTIVITY",
      id: 443,
      uid: 443,
      plate: "AD-T-2688",
      vehicle_plate_color: "#FF7E44FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000380",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/391167-1709536249136.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3439133,
        "lng": 54.5219216,
        "tilt": 21
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dac6f507ec75b6d600a69d",
      unique_id: "3GBY4VKQ3Y1",
      instance_type: "ACTIVITY",
      id: 299,
      uid: 299,
      plate: "AD-T-1242",
      vehicle_plate_color: "#FFA04AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000137",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/435114-1708836536043.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3433916,
        "lng": 54.5205183,
        "tilt": 11
      },
      "ignition": 1,
      "speed": {
        "value": "30.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc4e7807ec75b6d646b030",
      unique_id: "S4MGWKF11Y0",
      instance_type: "ACTIVITY",
      id: 369,
      uid: 369,
      plate: "AD-T-1573",
      vehicle_plate_color: "#FF8D26FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-10",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/206382-1708936777891.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.33992,
        "lng": 54.5209816,
        "tilt": 15
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc4d9f07ec75b6d645796b",
      unique_id: "852IIZIDPPG",
      instance_type: "ACTIVITY",
      id: 366,
      uid: 366,
      plate: "AD-T-1559",
      vehicle_plate_color: "#FF8231FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-14",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/193969-1708936485818.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.13897,
        "lng": 55.8407766,
        "tilt": 346
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d5f86f07ec75b6d63ac274",
      unique_id: "83BYLWBHY7Z",
      instance_type: "ACTIVITY",
      id: 110,
      uid: 110,
      plate: "AD-T-1886",
      vehicle_plate_color: "#FF9720FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000051",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/423532-1708521491951.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34154,
        "lng": 54.5193416,
        "tilt": 10
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "669a15b86ea38693d125b66a",
      unique_id: "GVROJTN61WR",
      instance_type: "ACTIVITY",
      id: 514,
      uid: 514,
      plate: "AD-T-1572",
      vehicle_plate_color: "#FF6D0EFF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "VEHC-696",
      "name": "Civillian",
      "year": 2016,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/74006-1721374025521.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1402533,
        "lng": 55.8390833,
        "tilt": 355
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc770307ec75b6d679ffe2",
      unique_id: "5J9B4LUPDYD",
      instance_type: "ACTIVITY",
      id: 377,
      uid: 377,
      plate: "AD-4-90715",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000054",
      "name": "Unicorn",
      "year": 2019,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/88650-1708947127097.png",
      "driving_status": 1,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.341825,
        "lng": 54.52021,
        "tilt": 20
      },
      "ignition": 1,
      "speed": {
        "value": "17.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8743107ec75b6d6f196e6",
      unique_id: "3N1NBZF4DTF",
      instance_type: "ACTIVITY",
      id: 269,
      uid: 269,
      plate: "AD-T-3310",
      vehicle_plate_color: "#FF9003FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000281",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/130150-1708684291782.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3426816,
        "lng": 54.5198233,
        "tilt": 10
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "663899f0ba2b02aa3e0825b6",
      unique_id: "64CXI9VJTLQ",
      instance_type: "ACTIVITY",
      id: 492,
      uid: 492,
      plate: "AD-14-60814",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-591",
      "name": "Sunny",
      "year": 2016,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/71581-1714985360719.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3739983,
        "lng": 54.5065516,
        "tilt": 35
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc258e07ec75b6d6fd0179",
      unique_id: "ZV5ZB6TO32F",
      instance_type: "ACTIVITY",
      id: 305,
      uid: 305,
      plate: "AD-T-3545",
      vehicle_plate_color: "#FF9659FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000090",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/390066-1708926293051.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1374049,
        "lng": 55.8375983,
        "tilt": 343
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc267f07ec75b6d6fd7fca",
      unique_id: "M00SR1DCTY6",
      instance_type: "ACTIVITY",
      id: 308,
      uid: 308,
      plate: "AD-T-3845",
      vehicle_plate_color: "#FF934EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000080",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/48791-1708926545536.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.137265,
        "lng": 55.837845,
        "tilt": 337
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7532e07ec75b6d6b64563",
      unique_id: "KERKXUM3DYE",
      instance_type: "ACTIVITY",
      id: 220,
      uid: 220,
      plate: "AD-T-1660",
      vehicle_plate_color: "#FFA135FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000215",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/85520-1708610293225.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3427666,
        "lng": 54.519605,
        "tilt": 17
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc27e207ec75b6d6fdf8dd",
      unique_id: "TTPRNKJ5O16",
      instance_type: "ACTIVITY",
      id: 314,
      uid: 314,
      plate: "AD-T-4450",
      vehicle_plate_color: "#FF8843FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000077",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/107019-1708926892793.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.137345,
        "lng": 55.8375349,
        "tilt": 340
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc367207ec75b6d6162c09",
      unique_id: "1CFBFAS0719",
      instance_type: "ACTIVITY",
      id: 332,
      uid: 332,
      plate: "AD-T-1102",
      vehicle_plate_color: "#FF953EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000306",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/332933-1708930626712.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.137345,
        "lng": 55.8375533,
        "tilt": 339
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74b4407ec75b6d6a41cbb",
      unique_id: "ZGLIP1OI5O3",
      instance_type: "ACTIVITY",
      id: 190,
      uid: 190,
      plate: "AD-T-1610",
      vehicle_plate_color: "#FFA052FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000181",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/404732-1708608282094.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3429566,
        "lng": 54.5193916,
        "tilt": 1
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d6095f07ec75b6d65e1f0c",
      unique_id: "D4GYBUC5CGX",
      instance_type: "ACTIVITY",
      id: 114,
      uid: 114,
      plate: "AD-T-1897",
      vehicle_plate_color: "#FF9E00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000057",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/15782-1708525842308.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3417866,
        "lng": 54.5215533,
        "tilt": 3
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d874f907ec75b6d6f33a82",
      unique_id: "VXPX2KYWFE4",
      instance_type: "ACTIVITY",
      id: 272,
      uid: 272,
      plate: "AD-T-3610",
      vehicle_plate_color: "#FF7945FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000274",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/190823-1708684497588.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3430566,
        "lng": 54.519785,
        "tilt": 65532
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7402807ec75b6d68d1b53",
      unique_id: "YU9IWYPIFOJ",
      instance_type: "ACTIVITY",
      id: 156,
      uid: 156,
      plate: "AD-T-1506",
      vehicle_plate_color: "#FF5D00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000123",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/370740-1708605434658.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3422683,
        "lng": 54.5220483,
        "tilt": 12
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7456807ec75b6d6991153",
      unique_id: "5972IP9P5SQ",
      instance_type: "ACTIVITY",
      id: 177,
      uid: 177,
      plate: "AD-T-1643",
      vehicle_plate_color: "#FF6400FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000163",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/8714-1708606781445.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3427966,
        "lng": 54.5194933,
        "tilt": 10
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8767f07ec75b6d6f67e52",
      unique_id: "H6VF5SPLBS2",
      instance_type: "ACTIVITY",
      id: 277,
      uid: 277,
      plate: "AD-T-3107",
      vehicle_plate_color: "#FF8843FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000284",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/389686-1708684883162.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.342965,
        "lng": 54.5212333,
        "tilt": 11
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7386507ec75b6d680bb75",
      unique_id: "O7WTIOPPSTP",
      instance_type: "ACTIVITY",
      id: 143,
      uid: 143,
      plate: "AD-T-2457",
      vehicle_plate_color: "#FF8B40FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000097",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/115083-1708603436037.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3416183,
        "lng": 54.519435,
        "tilt": 12
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7441607ec75b6d695da52",
      unique_id: "PEEECBLGEKP",
      instance_type: "ACTIVITY",
      id: 171,
      uid: 171,
      plate: "AD-T-1598",
      vehicle_plate_color: "#FF9B1CFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000161",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/185890-1708606445003.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3428066,
        "lng": 54.5195483,
        "tilt": 12
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8764107ec75b6d6f5f7ab",
      unique_id: "VWW9YV25BUR",
      instance_type: "ACTIVITY",
      id: 276,
      uid: 276,
      plate: "AD-T-3410",
      vehicle_plate_color: "#FF9D00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000271",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/89106-1708684817906.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3430483,
        "lng": 54.51972,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86c2f07ec75b6d6dd955d",
      unique_id: "1VANMMDESCO",
      instance_type: "ACTIVITY",
      id: 240,
      uid: 240,
      plate: "AD-T-4129",
      vehicle_plate_color: "#FF9A60FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000244",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/352231-1708682239960.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.342635,
        "lng": 54.5218766,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e57f7715303df623d8e06c",
      unique_id: "XLR9UGXVAP5",
      instance_type: "ACTIVITY",
      id: 460,
      uid: 460,
      plate: "AD-T-1788",
      vehicle_plate_color: "#FF650DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000367",
      "name": "LS350",
      "year": 2023,
      "make": "Lexus",
      "image": "https://wiot-fleet-prod.wiot360.com/123441-1709538972029.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3413549,
        "lng": 54.519705,
        "tilt": 9
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86d5c07ec75b6d6e01979",
      unique_id: "C2KNLOV2PMW",
      instance_type: "ACTIVITY",
      id: 245,
      uid: 245,
      plate: "AD-T-1075",
      vehicle_plate_color: "#FF9E67FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000249",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/125792-1708682537157.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.33773,
        "lng": 54.5172983,
        "tilt": 19
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "6658abdc6ea38693d114dcac",
      unique_id: "BX8SP329XBZ",
      instance_type: "ACTIVITY",
      id: 506,
      uid: 506,
      plate: "AD-L-1140",
      vehicle_plate_color: "#FF9057FF",
      "vtype_id": 2392,
      "vtype_name": "Heavy Machinery",
      "vehicle_num": "HVMach-000000002",
      "name": "fork lift",
      "year": 2020,
      "make": "Caterpillar",
      "image": "https://wiot-fleet-prod.wiot360.com/429138-1717087114433.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3385883,
        "lng": 54.5207983,
        "tilt": 31
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "6658ab746ea38693d113623e",
      unique_id: "FL4TWKONBVF",
      instance_type: "ACTIVITY",
      id: 505,
      uid: 505,
      plate: "AD-L-1141",
      vehicle_plate_color: "#FF8547FF",
      "vtype_id": 2392,
      "vtype_name": "Heavy Machinery",
      "vehicle_num": "HVMach-000000001",
      "name": "fork lift",
      "year": 2020,
      "make": "Caterpillar",
      "image": "https://wiot-fleet-prod.wiot360.com/185372-1717086990631.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3384466,
        "lng": 54.520985,
        "tilt": 8
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d73ee507ec75b6d68b1938",
      unique_id: "WI39ATPOXFR",
      instance_type: "ACTIVITY",
      id: 152,
      uid: 152,
      plate: "AD-T-1520",
      vehicle_plate_color: "#FF6518FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000122",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/383875-1708605090584.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3443266,
        "lng": 54.519645,
        "tilt": 24
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8770907ec75b6d6f79e54",
      unique_id: "JPKHLQUQV55",
      instance_type: "ACTIVITY",
      id: 279,
      uid: 279,
      plate: "AD-T-3210",
      vehicle_plate_color: "#FF9141FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000280",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/92155-1708685016760.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3430833,
        "lng": 54.5196366,
        "tilt": 3
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d87a2807ec75b6d6fe8279",
      unique_id: "A8KN38PGDQF",
      instance_type: "ACTIVITY",
      id: 292,
      uid: 292,
      plate: "AD-T-1269",
      vehicle_plate_color: "#FF6E1AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": " VEHC-000000318",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/440821-1708685821090.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3440149,
        "lng": 54.52182,
        "tilt": 8
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc2a7b07ec75b6d6ff2d1b",
      unique_id: "7V9NK2WM02J",
      instance_type: "ACTIVITY",
      id: 318,
      uid: 318,
      plate: "AD-T-1373",
      vehicle_plate_color: "#FF7833FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000131",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/401621-1708927565889.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3428716,
        "lng": 54.5218966,
        "tilt": 10
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dac60207ec75b6d600032e",
      unique_id: "KXXG20Z6IYS",
      instance_type: "ACTIVITY",
      id: 298,
      uid: 298,
      plate: "AD-T-1350",
      vehicle_plate_color: "#FFA868FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000128",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/201535-1708836263023.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3446549,
        "lng": 54.521725,
        "tilt": 13
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc56ac07ec75b6d6524d1a",
      unique_id: "QANN589Z7AG",
      instance_type: "ACTIVITY",
      id: 375,
      uid: 375,
      plate: "AD-T-1582",
      vehicle_plate_color: "#FF8D43FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-20",
      "name": "Shangrao Bus",
      "year": 2015,
      "make": "Shangrao",
      "image": "https://wiot-fleet-prod.wiot360.com/157339-1708938852658.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3397666,
        "lng": 54.5213633,
        "tilt": 29
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e957d015303df623bb27d2",
      unique_id: "478DJFGN6NX",
      instance_type: "ACTIVITY",
      id: 471,
      uid: 471,
      plate: "AD-7-99721",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-638",
      "name": "Sunny",
      "year": 2016,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/172822-1709791093481.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3457016,
        "lng": 54.5231983,
        "tilt": 9
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d867e507ec75b6d6d2683b",
      unique_id: "EIG7HBLNW5N",
      instance_type: "ACTIVITY",
      id: 224,
      uid: 224,
      plate: "AD-T-2124",
      vehicle_plate_color: "#FF9659FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000227",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/359979-1708681120661.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3450316,
        "lng": 54.5223166,
        "tilt": 19
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "66576a856ea38693d19a7df4",
      unique_id: "BQPV50H7WIX",
      instance_type: "ACTIVITY",
      id: 504,
      uid: 504,
      plate: "AD-L-4172",
      vehicle_plate_color: "#FF8638FF",
      "vtype_id": 2392,
      "vtype_name": "Heavy Machinery",
      "vehicle_num": "HVMach-000000009",
      "name": "fork lift",
      "year": 2016,
      "make": "Caterpillar",
      "image": "https://wiot-fleet-prod.wiot360.com/38777-1717004740356.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3386283,
        "lng": 54.5213833,
        "tilt": 6
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e01eb6c76f439a6686d677",
      unique_id: "4T4RVKIPZVZ",
      instance_type: "ACTIVITY",
      id: 420,
      uid: 420,
      plate: "AD-T-1430",
      vehicle_plate_color: "#FF7817FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000344",
      "name": "Corolla",
      "year": 2023,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/402749-1709186679394.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.344695,
        "lng": 54.5219866,
        "tilt": 13
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e5768f15303df623c1a659",
      unique_id: "AUZDWFIT4YO",
      instance_type: "ACTIVITY",
      id: 453,
      uid: 453,
      plate: "AD-T-3166",
      vehicle_plate_color: "#FF9A67FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000394",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/399681-1709536866027.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3438733,
        "lng": 54.52195,
        "tilt": 11
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e5774b15303df623c3a815",
      unique_id: "DKCTWJ2VI1T",
      instance_type: "ACTIVITY",
      id: 456,
      uid: 456,
      plate: "AD-T-3661",
      vehicle_plate_color: "#FFA679FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000397",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/218751-1709537060094.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34389,
        "lng": 54.521955,
        "tilt": 20
      },
      "ignition": 0,
      "speed": {
        "value": "22.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e576c715303df623c236d6",
      unique_id: "WPNLYI4ZR06",
      instance_type: "ACTIVITY",
      id: 454,
      uid: 454,
      plate: "AD-T-2887",
      vehicle_plate_color: "#FF8E46FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000390",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/222688-1709536926447.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.343815,
        "lng": 54.5220266,
        "tilt": 12
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "664636226ea38693d1c4b0e3",
      unique_id: "9794Z4OLNWR",
      instance_type: "ACTIVITY",
      id: 500,
      uid: 500,
      plate: "AD-14-54126",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2390,
      "vtype_name": "Compact pickup truck",
      "vehicle_num": "VEHC-85",
      "name": "Pickup",
      "year": 2008,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/31885-1715877326906.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3409233,
        "lng": 54.5190416,
        "tilt": 1
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e574ef15303df623bde406",
      unique_id: "755FK14SSS6",
      instance_type: "ACTIVITY",
      id: 446,
      uid: 446,
      plate: "AD-T-2881",
      vehicle_plate_color: "#FF984EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000386",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/346928-1709536456599.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.343935,
        "lng": 54.52183,
        "tilt": 13
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc553407ec75b6d6508309",
      unique_id: "J7O6Q9667V7",
      instance_type: "ACTIVITY",
      id: 371,
      uid: 371,
      plate: "AD-T-1490",
      vehicle_plate_color: "#FF7200FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-22",
      "name": "Shangrao Bus",
      "year": 2015,
      "make": "Shangrao",
      "image": "https://wiot-fleet-prod.wiot360.com/114485-1708938439569.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.339785,
        "lng": 54.5212433,
        "tilt": 16
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d61b7907ec75b6d6881374",
      unique_id: "LF3AF9BS26B",
      instance_type: "ACTIVITY",
      id: 119,
      uid: 119,
      plate: "AD-T-1882",
      vehicle_plate_color: "#FFAC26FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000046",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/120488-1708530472041.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3455916,
        "lng": 54.5229066,
        "tilt": 65516
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d60b9107ec75b6d662c69c",
      unique_id: "OJOP2B67R4B",
      instance_type: "ACTIVITY",
      id: 117,
      uid: 117,
      plate: "AD-T-1883",
      vehicle_plate_color: "#FF9932FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000053",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/73085-1708526412464.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34178,
        "lng": 54.5217916,
        "tilt": 15
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7355907ec75b6d67be1db",
      unique_id: "ZRGHFQFEWX3",
      instance_type: "ACTIVITY",
      id: 134,
      uid: 134,
      plate: "AD-T-2645",
      vehicle_plate_color: "#FF7627FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000068",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/249041-1708602637876.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.343075,
        "lng": 54.5193816,
        "tilt": 65535
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e575a215303df623bf6496",
      unique_id: "ZD3YIY3UDHX",
      instance_type: "ACTIVITY",
      id: 449,
      uid: 449,
      plate: "AD-T-2288",
      vehicle_plate_color: "#FF965AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000389",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/92514-1709536636527.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.343975,
        "lng": 54.5220433,
        "tilt": 14
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7399407ec75b6d6829e97",
      unique_id: "MU59KW6P7I8",
      instance_type: "ACTIVITY",
      id: 147,
      uid: 147,
      plate: "AD-T-3450",
      vehicle_plate_color: "#FF5600FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000104",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/38124-1708603735808.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34525,
        "lng": 54.52325,
        "tilt": 2
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d751ea07ec75b6d6b330f2",
      unique_id: "20M8UR88IBZ",
      instance_type: "ACTIVITY",
      id: 216,
      uid: 216,
      plate: "AD-T-1652",
      vehicle_plate_color: "#FF7918FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000210",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/181156-1708609982455.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3426183,
        "lng": 54.5212666,
        "tilt": 15
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3c6307ec75b6d622629d",
      unique_id: "QW4B05RZOQL",
      instance_type: "ACTIVITY",
      id: 346,
      uid: 346,
      plate: "AD-T-1579",
      vehicle_plate_color: "#FF9971FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-1",
      "name": "Man Truck",
      "year": 2011,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/32759-1708932139680.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3397149,
        "lng": 54.5216049,
        "tilt": 43
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e9587115303df623bb969f",
      unique_id: "WJWKEDIMQFF",
      instance_type: "ACTIVITY",
      id: 472,
      uid: 472,
      plate: "AD-14-60596",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-593",
      "name": "Sunny",
      "year": 2016,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/155223-1709791203687.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3409349,
        "lng": 54.5189383,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "663c76e2ba2b02aa3e2b97d9",
      unique_id: "M0O60F2WJOV",
      instance_type: "ACTIVITY",
      id: 496,
      uid: 496,
      plate: "AD-8-93548",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2390,
      "vtype_name": "Compact pickup truck",
      "vehicle_num": "VEHC-285",
      "name": "Pickup",
      "year": 2010,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/379952-1715238259474.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1402866,
        "lng": 55.8392633,
        "tilt": 348
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e5765415303df623c1093a",
      unique_id: "53IDX3JNSBH",
      instance_type: "ACTIVITY",
      id: 452,
      uid: 452,
      plate: "AD-T-2885",
      vehicle_plate_color: "#FF8764FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000391",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/302162-1709536807243.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3421433,
        "lng": 54.5220283,
        "tilt": 34
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d871f207ec75b6d6eba36e",
      unique_id: "2E72X2BNSMO",
      instance_type: "ACTIVITY",
      id: 260,
      uid: 260,
      plate: "AD-T-2108",
      vehicle_plate_color: "#FF9223FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000263",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/385778-1708683704795.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3423316,
        "lng": 54.5210383,
        "tilt": 28
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dac7de07ec75b6d601451a",
      unique_id: "WOJJKPUX849",
      instance_type: "ACTIVITY",
      id: 301,
      uid: 301,
      plate: "AD-T-1368",
      vehicle_plate_color: "#FFA21EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000129",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/406765-1708836766036.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.343065,
        "lng": 54.5192566,
        "tilt": 27
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74dff07ec75b6d6a98aea",
      unique_id: "8JRMNUOH9GZ",
      instance_type: "ACTIVITY",
      id: 201,
      uid: 201,
      plate: "AD-T-1599",
      vehicle_plate_color: "#FF793DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000155",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/154305-1708608978790.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3428383,
        "lng": 54.5197283,
        "tilt": 15
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc4b7807ec75b6d641a39c",
      unique_id: "2KP6Z7U7DS9",
      instance_type: "ACTIVITY",
      id: 362,
      uid: 362,
      plate: "AD-T-1492",
      vehicle_plate_color: "#FF8945FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-13",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/28142-1708935991469.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3398283,
        "lng": 54.521485,
        "tilt": 46
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e577bf15303df623c4e308",
      unique_id: "8974FGAPP4E",
      instance_type: "ACTIVITY",
      id: 458,
      uid: 458,
      plate: "AD-T-3466",
      vehicle_plate_color: "#FF975BFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000395",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/436661-1709537172871.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.343685,
        "lng": 54.521875,
        "tilt": 19
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "665ae1ca6ea38693d13588e1",
      unique_id: "USAHQ5DIVOI",
      instance_type: "ACTIVITY",
      id: 512,
      uid: 512,
      plate: "AD-L-1456",
      vehicle_plate_color: "#FF8734FF",
      "vtype_id": 2392,
      "vtype_name": "Heavy Machinery",
      "vehicle_num": "HVMach-000000004",
      "name": "road roller",
      "year": 2016,
      "make": "Caterpillar",
      "image": "https://wiot-fleet-prod.wiot360.com/208042-1717231951177.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1376316,
        "lng": 55.8368316,
        "tilt": 348
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e577f815303df623c5714b",
      unique_id: "MEO5TC6TAT6",
      instance_type: "ACTIVITY",
      id: 459,
      uid: 459,
      plate: "AD-T-3662",
      vehicle_plate_color: "#FF8E4DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000398",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/82617-1709537228618.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3429633,
        "lng": 54.5218499,
        "tilt": 15
      },
      "ignition": 0,
      "speed": {
        "value": "17.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d5f55f07ec75b6d6344f08",
      unique_id: "IZ5NZVP20OY",
      instance_type: "ACTIVITY",
      id: 105,
      uid: 105,
      plate: "AD-T-1165",
      vehicle_plate_color: "#FF8F00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000061",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/350173-1708520695563.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3428683,
        "lng": 54.5213033,
        "tilt": 12
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "665adec66ea38693d1207bd5",
      unique_id: "AM5IAW0Z6CO",
      instance_type: "ACTIVITY",
      id: 508,
      uid: 508,
      plate: "AD-14-32634",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2390,
      "vtype_name": "Compact pickup truck",
      "vehicle_num": "VEHC-456",
      "name": "Pickup",
      "year": 2013,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/341465-1717231181371.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1403016,
        "lng": 55.8393483,
        "tilt": 360
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dac77d07ec75b6d6010200",
      unique_id: "CI4BUTYZTI6",
      instance_type: "ACTIVITY",
      id: 300,
      uid: 300,
      plate: "AD-T-1493",
      vehicle_plate_color: "#FF9548FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000138",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/183597-1708836668687.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3444516,
        "lng": 54.5211566,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dac33607ec75b6d6fe210f",
      unique_id: "0V96BRFUQXG",
      instance_type: "ACTIVITY",
      id: 293,
      uid: 293,
      plate: "AD-T-1380",
      vehicle_plate_color: "#FFA54AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000136",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/373667-1708835518278.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3396933,
        "lng": 54.521195,
        "tilt": 17
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d873f707ec75b6d6f11bf6",
      unique_id: "3T31M063RS1",
      instance_type: "ACTIVITY",
      id: 268,
      uid: 268,
      plate: "AD-T-3510",
      vehicle_plate_color: "#FF860AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000278",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/272315-1708684234691.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.343095,
        "lng": 54.5196033,
        "tilt": 65530
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d743cf07ec75b6d69535c6",
      unique_id: "PPVHH2QFH7P",
      instance_type: "ACTIVITY",
      id: 170,
      uid: 170,
      plate: "AD-T-1648",
      vehicle_plate_color: "#FF8413FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000160",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/331837-1708606425799.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.342655,
        "lng": 54.5194833,
        "tilt": 65520
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d749a907ec75b6d6a15ee9",
      unique_id: "BMUNRYQW1HX",
      instance_type: "ACTIVITY",
      id: 183,
      uid: 183,
      plate: "AD-T-1198",
      vehicle_plate_color: "#FF8535FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000176",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/299334-1708607868038.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3427116,
        "lng": 54.5194716,
        "tilt": 4
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7505907ec75b6d6af4e63",
      unique_id: "W4T5H323HH6",
      instance_type: "ACTIVITY",
      id: 209,
      uid: 209,
      plate: "AD-T-1294",
      vehicle_plate_color: "#FF8B40FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000197",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/208590-1708609566494.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6776333,
        "lng": 53.715995,
        "tilt": 129
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d6e62807ec75b6d6dc1380",
      unique_id: "0AY3I68B8FD",
      instance_type: "ACTIVITY",
      id: 127,
      uid: 127,
      plate: "AD-17-73865",
      vehicle_plate_color: "#FF1111FF",
      "vtype_id": 2169,
      "vtype_name": "Jeep",
      "vehicle_num": "VEHC-466",
      "name": "Wrangler",
      "year": 2012,
      "make": "Jeep",
      "image": "https://wiot-fleet-prod.wiot360.com/255893-1708582339135.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3434366,
        "lng": 54.5218216,
        "tilt": 28
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d6e75907ec75b6d6dde3c5",
      unique_id: "PHMTFT1P0V6",
      instance_type: "ACTIVITY",
      id: 130,
      uid: 130,
      plate: "AD-17-85751",
      vehicle_plate_color: "#FF2424FF",
      "vtype_id": 2169,
      "vtype_name": "Jeep",
      "vehicle_num": "VEHC-453",
      "name": "Wrangler",
      "year": 2012,
      "make": "Jeep",
      "image": "https://wiot-fleet-prod.wiot360.com/148472-1708582683584.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3433533,
        "lng": 54.5218499,
        "tilt": 17
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3a7b07ec75b6d61edcf0",
      unique_id: "0NHKJGFUSF5",
      instance_type: "ACTIVITY",
      id: 340,
      uid: 340,
      plate: "AD-T-1182",
      vehicle_plate_color: "#FF9B62FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-22",
      "name": "Man Truck",
      "year": 2014,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/152952-1708931654504.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3456633,
        "lng": 54.52337,
        "tilt": 4
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8727007ec75b6d6ecfe11",
      unique_id: "UL1M91SCZU2",
      instance_type: "ACTIVITY",
      id: 262,
      uid: 262,
      plate: "AD-T-2910",
      vehicle_plate_color: "#FF9C6AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000268 ",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/100366-1708683843546.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34262,
        "lng": 54.52187,
        "tilt": 19
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e02e7dc76f439a66a77ed9",
      unique_id: "FJ3K6T31LLB",
      instance_type: "ACTIVITY",
      id: 433,
      uid: 433,
      plate: "AD-4-88479",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000076",
      "name": "MC",
      "year": 2019,
      "make": "Bajaj",
      "image": "https://wiot-fleet-prod.wiot360.com/234274-1709190568454.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3420066,
        "lng": 54.52051,
        "tilt": 19
      },
      "ignition": 0,
      "speed": {
        "value": "9.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d877b107ec75b6d6f90819",
      unique_id: "FNJOESV7MPE",
      instance_type: "ACTIVITY",
      id: 282,
      uid: 282,
      plate: "AD-T-1267",
      vehicle_plate_color: "#FFB56AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000294",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/344601-1708685190782.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1376283,
        "lng": 55.8404733,
        "tilt": 355
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e9568c15303df623ba43eb",
      unique_id: "3ILW02JD89P",
      instance_type: "ACTIVITY",
      id: 468,
      uid: 468,
      plate: "AD-14-60728",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-592",
      "name": "Sunny",
      "year": 2016,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/429187-1709790598186.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3452616,
        "lng": 54.5232566,
        "tilt": 9
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "665ae04a6ea38693d12b3764",
      unique_id: "26KF10SULYK",
      instance_type: "ACTIVITY",
      id: 510,
      uid: 510,
      plate: "AD-L-1903",
      vehicle_plate_color: "#FF940BFF",
      "vtype_id": 2392,
      "vtype_name": "Heavy Machinery",
      "vehicle_num": "HVMach-000000003",
      "name": "fork lift",
      "year": 2020,
      "make": "Caterpillar",
      "image": "https://wiot-fleet-prod.wiot360.com/57757-1717231559070.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.13708,
        "lng": 55.83715,
        "tilt": 334
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d6084207ec75b6d65ccb65",
      unique_id: "MVDJOWJGLY0",
      instance_type: "ACTIVITY",
      id: 111,
      uid: 111,
      plate: "AD-T-1887",
      vehicle_plate_color: "#FB954BFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000047",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/188616-1708525552211.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3427433,
        "lng": 54.5218766,
        "tilt": 65535
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e9570015303df623ba9871",
      unique_id: "06KTNRBGSA5",
      instance_type: "ACTIVITY",
      id: 469,
      uid: 469,
      plate: "AD-14-61821",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-606",
      "name": "Sunny",
      "year": 2016,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/338680-1709790879908.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3452933,
        "lng": 54.5230183,
        "tilt": 13
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86ce407ec75b6d6df19a9",
      unique_id: "B8UXFL72I0O",
      instance_type: "ACTIVITY",
      id: 243,
      uid: 243,
      plate: "AD-T-3256",
      vehicle_plate_color: "#FFA480FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000247",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/13544-1708682420379.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3608999,
        "lng": 54.4983,
        "tilt": 23
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d738b307ec75b6d6813ae9",
      unique_id: "NWFMTR7PRSW",
      instance_type: "ACTIVITY",
      id: 144,
      uid: 144,
      plate: "AD-T-3245",
      vehicle_plate_color: "#FF891EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000099",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/106615-1708603508146.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3443866,
        "lng": 54.5219816,
        "tilt": 11
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc4bd807ec75b6d64233c2",
      unique_id: "7RWW2TL5V9E",
      instance_type: "ACTIVITY",
      id: 363,
      uid: 363,
      plate: "AD-T-1508",
      vehicle_plate_color: "#FF9A3EFF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-16",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/46876-1708936064490.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3452083,
        "lng": 54.5235283,
        "tilt": 25
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc470b07ec75b6d63ab652",
      unique_id: "RST7THFIVZI",
      instance_type: "ACTIVITY",
      id: 357,
      uid: 357,
      plate: "AD-T-1396",
      vehicle_plate_color: "#FF953FFF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-4",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/121844-1708934622330.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1374716,
        "lng": 55.8399,
        "tilt": 347
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "6608348468c839c5eddd1858",
      unique_id: "HAZDL249TDG",
      instance_type: "ACTIVITY",
      id: 482,
      uid: 482,
      plate: "AD-4-51870",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "51870",
      "name": "Coaster",
      "year": 2023,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/319155-1711813574996.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6768166,
        "lng": 53.7168149,
        "tilt": 119
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc47cb07ec75b6d63be915",
      unique_id: "MLTG1X8X4BV",
      instance_type: "ACTIVITY",
      id: 359,
      uid: 359,
      plate: "AD-T-1401",
      vehicle_plate_color: "#FF8D4BFF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-5",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/251688-1708935033091.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3536216,
        "lng": 54.496115,
        "tilt": 32
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc4ed307ec75b6d6471f49",
      unique_id: "DZHK1A0NLQJ",
      instance_type: "ACTIVITY",
      id: 370,
      uid: 370,
      plate: "AD-T-1575",
      vehicle_plate_color: "#FF834BFF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-15",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/142519-1708936836726.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3397016,
        "lng": 54.5213133,
        "tilt": 5
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8792007ec75b6d6fc1ea5",
      unique_id: "S70QK6XSA8N",
      instance_type: "ACTIVITY",
      id: 288,
      uid: 288,
      plate: "AD-T-4106",
      vehicle_plate_color: "#FF8E33FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000298",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/116278-1708685545116.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.345485,
        "lng": 54.523195,
        "tilt": 7
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc974107ec75b6d6af8542",
      unique_id: "IGKVYISFYUG",
      instance_type: "ACTIVITY",
      id: 408,
      uid: 408,
      plate: "AD-4-64478",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000341",
      "name": "Pulsar",
      "year": 2022,
      "make": "Bajaj",
      "image": "https://wiot-fleet-prod.wiot360.com/204773-1708955152533.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3424516,
        "lng": 54.5197783,
        "tilt": 6
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc9a3e07ec75b6d6b2ba5e",
      unique_id: "301DKJVQ94U",
      instance_type: "ACTIVITY",
      id: 410,
      uid: 410,
      plate: "AD-4-64479",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000339",
      "name": "Pulsar",
      "year": 2022,
      "make": "Bajaj",
      "image": "https://wiot-fleet-prod.wiot360.com/263620-1708956143836.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3426283,
        "lng": 54.5197916,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "665ae12a6ea38693d1314419",
      unique_id: "CCP2OMEICMG",
      instance_type: "ACTIVITY",
      id: 511,
      uid: 511,
      plate: "AD-L-2456",
      vehicle_plate_color: "#FF8A55FF",
      "vtype_id": 2392,
      "vtype_name": "Heavy Machinery",
      "vehicle_num": "HVMach-000000007",
      "name": "Wheel loader",
      "year": 2018,
      "make": "Caterpillar",
      "image": "https://wiot-fleet-prod.wiot360.com/265783-1717231813537.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1371016,
        "lng": 55.8368366,
        "tilt": 331
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc9a8707ec75b6d6b3116e",
      unique_id: "458B973AWOY",
      instance_type: "ACTIVITY",
      id: 411,
      uid: 411,
      plate: "AD-4-64475",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000340",
      "name": "Pulsar",
      "year": 2022,
      "make": "Bajaj",
      "image": "https://wiot-fleet-prod.wiot360.com/305053-1708956236723.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6776516,
        "lng": 53.716505,
        "tilt": 110
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "663b3351ba2b02aa3ec1f19e",
      unique_id: "YY371W6SWHI",
      instance_type: "ACTIVITY",
      id: 495,
      uid: 495,
      plate: "AD-T-47107",
      vehicle_plate_color: "#FF8E27FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "VEHC-283",
      "name": "Civillian",
      "year": 2010,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/427252-1715155695839.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1376483,
        "lng": 55.8405016,
        "tilt": 314
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8698c07ec75b6d6d6f17c",
      unique_id: "I17V9WSXQ64",
      instance_type: "ACTIVITY",
      id: 230,
      uid: 230,
      plate: "AD-T-2125",
      vehicle_plate_color: "#FF8D44FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000233",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/405740-1708681570450.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3423866,
        "lng": 54.52172,
        "tilt": 3
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc565107ec75b6d651c338",
      unique_id: "0JFYOBVXG1S",
      instance_type: "ACTIVITY",
      id: 374,
      uid: 374,
      plate: "AD-T-1581",
      vehicle_plate_color: "#FF8831FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-21",
      "name": "Shangrao Bus",
      "year": 2015,
      "make": "Shangrao",
      "image": "https://wiot-fleet-prod.wiot360.com/382837-1708938763312.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.339765,
        "lng": 54.5215166,
        "tilt": 11
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e01d49c76f439a6684b056",
      unique_id: "SUDTB36ZH9P",
      instance_type: "ACTIVITY",
      id: 416,
      uid: 416,
      plate: "AD-T-1399",
      vehicle_plate_color: "#FF7B2FFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000345",
      "name": "Corolla",
      "year": 2023,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/437308-1709186273341.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3426633,
        "lng": 54.5210533,
        "tilt": 4
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "663b2eb0ba2b02aa3ea2804b",
      unique_id: "9MVM9QPJMGU",
      instance_type: "ACTIVITY",
      id: 493,
      uid: 493,
      plate: "AD-T-1571",
      vehicle_plate_color: "#FF4F00FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "VEHC-495",
      "name": "Civillian",
      "year": 2015,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/91158-1715154489465.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3397366,
        "lng": 54.5212433,
        "tilt": 15
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e6ce0a15303df623dfd35e",
      unique_id: "SRZEL4CQ4TB",
      instance_type: "ACTIVITY",
      id: 467,
      uid: 467,
      plate: "AD-4-94468",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2181,
      "vtype_name": "Sports Motorcycle",
      "vehicle_num": "VEHC-695",
      "name": "Gold Wing-MC",
      "year": 2016,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/343463-1709624668636.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3436683,
        "lng": 54.5218683,
        "tilt": 10
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e6ca9b15303df623dab1e7",
      unique_id: "88W2Z3RCM64",
      instance_type: "ACTIVITY",
      id: 464,
      uid: 464,
      plate: "AD-4-93015",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2180,
      "vtype_name": "Harley",
      "vehicle_num": "VEHC-000000040",
      "name": "Davidson",
      "year": 2018,
      "make": "Harley",
      "image": "https://wiot-fleet-prod.wiot360.com/60390-1709623446225.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34365,
        "lng": 54.521885,
        "tilt": 31
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e6cb0215303df623db49eb",
      unique_id: "5EOMG8IN1FI",
      instance_type: "ACTIVITY",
      id: 465,
      uid: 465,
      plate: "AD-4-93016",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2180,
      "vtype_name": "Harley",
      "vehicle_num": "VEHC-000000041",
      "name": "Davidson",
      "year": 2018,
      "make": "Harley",
      "image": "https://wiot-fleet-prod.wiot360.com/198649-1709623993987.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3436549,
        "lng": 54.5217583,
        "tilt": 65486
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e6cb5c15303df623dbcf7a",
      unique_id: "FUIMZWJ2TEP",
      instance_type: "ACTIVITY",
      id: 466,
      uid: 466,
      plate: "AD-4-94465",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2180,
      "vtype_name": "Harley",
      "vehicle_num": "VEHC-694",
      "name": "Davidson",
      "year": 2016,
      "make": "Harley",
      "image": "https://wiot-fleet-prod.wiot360.com/93597-1709624090790.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3435983,
        "lng": 54.521885,
        "tilt": 40
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc7bed07ec75b6d67f204e",
      unique_id: "3XYZPYFI1AE",
      instance_type: "ACTIVITY",
      id: 381,
      uid: 381,
      plate: "AD-4-91152",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000044",
      "name": "Unicorn",
      "year": 2018,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/154774-1708948404729.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3727916,
        "lng": 54.5172366,
        "tilt": 65532
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d6e69f07ec75b6d6dccb2a",
      unique_id: "N8NO3PUX2L6",
      instance_type: "ACTIVITY",
      id: 128,
      uid: 128,
      plate: "AD-17-73866",
      vehicle_plate_color: "#FF2929FF",
      "vtype_id": 2169,
      "vtype_name": "Jeep",
      "vehicle_num": "VEHC-459",
      "name": "Wrangler",
      "year": 2012,
      "make": "Jeep",
      "image": "https://wiot-fleet-prod.wiot360.com/373726-1708582477128.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3401033,
        "lng": 54.5184166,
        "tilt": 9
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d6e51107ec75b6d6db01b9",
      unique_id: "LV0NY35U2JA",
      instance_type: "ACTIVITY",
      id: 125,
      uid: 125,
      plate: "AD-17-73863",
      vehicle_plate_color: "#FF0A0AFF",
      "vtype_id": 2169,
      "vtype_name": "Jeep",
      "vehicle_num": "VEHC-454",
      "name": "Wrangler",
      "year": 2012,
      "make": "Jeep",
      "image": "https://wiot-fleet-prod.wiot360.com/192824-1708582021686.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3404266,
        "lng": 54.5184166,
        "tilt": 9
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d6e70a07ec75b6d6dd6d5c",
      unique_id: "VUY7V72OZW3",
      instance_type: "ACTIVITY",
      id: 129,
      uid: 129,
      plate: "AD-17-85750",
      vehicle_plate_color: "#FF3838FF",
      "vtype_id": 2169,
      "vtype_name": "Jeep",
      "vehicle_num": "VEHC-455",
      "name": "Wrangler",
      "year": 2012,
      "make": "Jeep",
      "image": "https://wiot-fleet-prod.wiot360.com/51117-1708582582401.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3434483,
        "lng": 54.5218866,
        "tilt": 9
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d6e44107ec75b6d6da4e42",
      unique_id: "2IODQ1ZM3DO",
      instance_type: "ACTIVITY",
      id: 124,
      uid: 124,
      plate: "AD-17-73862",
      vehicle_plate_color: "#FF0303FF",
      "vtype_id": 2169,
      "vtype_name": "Jeep",
      "vehicle_num": "VEHC-457",
      "name": "Wrangler",
      "year": 2012,
      "make": "Jeep",
      "image": "https://wiot-fleet-prod.wiot360.com/232966-1708581560014.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3434366,
        "lng": 54.5219099,
        "tilt": 10
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d6e5aa07ec75b6d6db8675",
      unique_id: "TDTVKO5PTEU",
      instance_type: "ACTIVITY",
      id: 126,
      uid: 126,
      plate: "AD-17-73864",
      vehicle_plate_color: "#FF1F1FFF",
      "vtype_id": 2169,
      "vtype_name": "Jeep",
      "vehicle_num": "VEHC-458",
      "name": "Wrangler",
      "year": 2012,
      "make": "Jeep",
      "image": "https://wiot-fleet-prod.wiot360.com/303103-1708582184404.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3434083,
        "lng": 54.5219183,
        "tilt": 9
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8732e07ec75b6d6ef01b6",
      unique_id: "YT6P6JO4L9D",
      instance_type: "ACTIVITY",
      id: 265,
      uid: 265,
      plate: "AD-T-3108",
      vehicle_plate_color: "#FF7C28FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000275",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/348593-1708684031423.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34554,
        "lng": 54.523165,
        "tilt": 31
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e565ee15303df623a3a2b0",
      unique_id: "1NSGT3DQBP4",
      instance_type: "ACTIVITY",
      id: 440,
      uid: 440,
      plate: "AD-T-2388",
      vehicle_plate_color: "#FF7639FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000378",
      "name": "Corolla",
      "year": 2023,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/69418-1709532591234.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.340995,
        "lng": 54.5250016,
        "tilt": 70
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc26f407ec75b6d6fdbc48",
      unique_id: "TEDLNIAWYW0",
      instance_type: "ACTIVITY",
      id: 310,
      uid: 310,
      plate: "AD-T-4045",
      vehicle_plate_color: "#FF9224FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000098",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/330618-1708926660067.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3458383,
        "lng": 54.5234666,
        "tilt": 2
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e5770d15303df623c2fbfe",
      unique_id: "8DGKFSMTGVG",
      instance_type: "ACTIVITY",
      id: 455,
      uid: 455,
      plate: "AD-T-3266",
      vehicle_plate_color: "#FF9368FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000399",
      "name": "Corolla",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/273816-1709536980216.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3446483,
        "lng": 54.5214516,
        "tilt": 9
      },
      "ignition": 0,
      "speed": {
        "value": "5.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc9acd07ec75b6d6b368a6",
      unique_id: "8PU143WBYRM",
      instance_type: "ACTIVITY",
      id: 412,
      uid: 412,
      plate: "AD-4-64473",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000342",
      "name": "Pulsar",
      "year": 2022,
      "make": "Bajaj",
      "image": "https://wiot-fleet-prod.wiot360.com/446549-1708956303835.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.677405,
        "lng": 53.7162533,
        "tilt": 110
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dac8b207ec75b6d601d188",
      unique_id: "O5RHPIKSJA0",
      instance_type: "ACTIVITY",
      id: 303,
      uid: 303,
      plate: "AD-T-1429",
      vehicle_plate_color: "#FF8047FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000132",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/189436-1708836981597.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.345175,
        "lng": 54.5232083,
        "tilt": 11
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dac84807ec75b6d6018c46",
      unique_id: "CQNFIMRIZJ5",
      instance_type: "ACTIVITY",
      id: 302,
      uid: 302,
      plate: "AD-T-1309",
      vehicle_plate_color: "#FF9A59FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000134",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/67966-1708836873059.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.345475,
        "lng": 54.5232516,
        "tilt": 19
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d608af07ec75b6d65d462d",
      unique_id: "BDS3BIQS6E9",
      instance_type: "ACTIVITY",
      id: 112,
      uid: 112,
      plate: "AD-T-1892",
      vehicle_plate_color: "#FF8800FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000062",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/346232-1708525653082.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3455366,
        "lng": 54.523195,
        "tilt": 65530
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8747107ec75b6d6f21c66",
      unique_id: "NV9D70U4H0U",
      instance_type: "ACTIVITY",
      id: 270,
      uid: 270,
      plate: "AD-T-3106",
      vehicle_plate_color: "#FF8D18FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000282",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/217865-1708684350480.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3454116,
        "lng": 54.5231466,
        "tilt": 1
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d6090407ec75b6d65db8be",
      unique_id: "56SDY9I4CJ9",
      instance_type: "ACTIVITY",
      id: 113,
      uid: 113,
      plate: "AD-T-1894",
      vehicle_plate_color: "#FF8F34FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000059",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/13776-1708525772488.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3455383,
        "lng": 54.5230183,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e02c97c76f439a66a2da22",
      unique_id: "QU5NKCYUHBW",
      instance_type: "",
      id: 432,
      uid: 432,
      plate: "AD-4-16913",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000337",
      "name": "Apache",
      "year": 2022,
      "make": "TVS",
      "image": "https://wiot-fleet-prod.wiot360.com/264610-1709190242707.png",
      "driving_status": 0,
      "idling_status": 1,
      "color": "red",
      "location": {
        "lat": 24.34214,
        "lng": 54.5207316,
        "tilt": 25
      },
      "ignition": 1,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc55f907ec75b6d651682b",
      unique_id: "EQWUNSVSXXD",
      instance_type: "ACTIVITY",
      id: 373,
      uid: 373,
      plate: "AD-T-1563",
      vehicle_plate_color: "#FF8130FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-18",
      "name": "Shangrao Bus",
      "year": 2015,
      "make": "Shangrao",
      "image": "https://wiot-fleet-prod.wiot360.com/134285-1708938670158.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1393083,
        "lng": 55.84071,
        "tilt": 357
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d60c9f07ec75b6d6653374",
      unique_id: "LMQHR8OGIC0",
      instance_type: "ACTIVITY",
      id: 118,
      uid: 118,
      plate: "AD-18-87479",
      vehicle_plate_color: "#EC4036FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-724",
      "name": "Sentra",
      "year": 2016,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/2826-1708526682885.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3455383,
        "lng": 54.523,
        "tilt": 65524
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d73e9107ec75b6d68a8fe3",
      unique_id: "B5QAQYYNBQG",
      instance_type: "ACTIVITY",
      id: 151,
      uid: 151,
      plate: "AD-T-1530",
      vehicle_plate_color: "#FF8F01FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000121",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/337679-1708604962809.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3452083,
        "lng": 54.5230316,
        "tilt": 6
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86bee07ec75b6d6dd09da",
      unique_id: "H5PGIELCWIR",
      instance_type: "ACTIVITY",
      id: 239,
      uid: 239,
      plate: "AD-T-2104",
      vehicle_plate_color: "#FFB788FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000242",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/438406-1708682176105.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3618833,
        "lng": 54.4980316,
        "tilt": 36
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dac47007ec75b6d6fef4db",
      unique_id: "1ODMTGCMGSU",
      instance_type: "ACTIVITY",
      id: 295,
      uid: 295,
      plate: "AD-T-1333",
      vehicle_plate_color: "#FF9721FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000127",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/12068-1708835831237.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3427366,
        "lng": 54.52134,
        "tilt": 11
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7407307ec75b6d68d8f60",
      unique_id: "PBVQJDPUBB9",
      instance_type: "ACTIVITY",
      id: 157,
      uid: 157,
      plate: "AD-T-1595",
      vehicle_plate_color: "#FF6C01FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000141",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/130698-1708605504178.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3618099,
        "lng": 54.49833,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74b7807ec75b6d6a47ec1",
      unique_id: "MTAC2Q5ODLT",
      instance_type: "ACTIVITY",
      id: 191,
      uid: 191,
      plate: "AD-T-1272",
      vehicle_plate_color: "#FF9159FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000182",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/406791-1708608336639.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3449166,
        "lng": 54.5208416,
        "tilt": 4
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d742a107ec75b6d6925b82",
      unique_id: "UR5OOPGH4GI",
      instance_type: "ACTIVITY",
      id: 165,
      uid: 165,
      plate: "AD-T-1274",
      vehicle_plate_color: "#FF9600FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000158",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/130467-1708606068141.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3440683,
        "lng": 54.521705,
        "tilt": 7
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7368507ec75b6d67dba97",
      unique_id: "2T0SIMN6MTZ",
      instance_type: "ACTIVITY",
      id: 137,
      uid: 137,
      plate: "AD-T-3452",
      vehicle_plate_color: "#FF6E45FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000084",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/442405-1708602953591.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34423,
        "lng": 54.5204016,
        "tilt": 5
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc99e607ec75b6d6b2326a",
      unique_id: "RJPM2TJ1YON",
      instance_type: "ACTIVITY",
      id: 409,
      uid: 409,
      plate: "AD-4-64531",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000343",
      "name": "Pulsar",
      "year": 2022,
      "make": "Bajaj",
      "image": "https://wiot-fleet-prod.wiot360.com/154218-1708956041375.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6774333,
        "lng": 53.71636,
        "tilt": 131
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7371407ec75b6d67e9ea4",
      unique_id: "C4AADX8RP6K",
      instance_type: "ACTIVITY",
      id: 139,
      uid: 139,
      plate: "AD-T-2845",
      vehicle_plate_color: "#FF612CFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000089",
      "name": "Sentra",
      "year": 2018,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/294166-1708603097175.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3426233,
        "lng": 54.5219933,
        "tilt": 5
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "6609ddeb68c839c5ed7020d8",
      unique_id: "O3VN4Q75WB2",
      instance_type: "ACTIVITY",
      id: 485,
      uid: 485,
      plate: "AD-14-1570",
      vehicle_plate_color: "#FF8902FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "VEHC-496",
      "name": "Civillian",
      "year": 2015,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/175070-1711922534815.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.33964,
        "lng": 54.521265,
        "tilt": 65535
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc559807ec75b6d650fc9f",
      unique_id: "WALL54QJF3K",
      instance_type: "ACTIVITY",
      id: 372,
      uid: 372,
      plate: "AD-T-1521",
      vehicle_plate_color: "#FF9318FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-24",
      "name": "Shangrao Bus",
      "year": 2015,
      "make": "Shangrao",
      "image": "https://wiot-fleet-prod.wiot360.com/266268-1708938559589.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3397616,
        "lng": 54.5213216,
        "tilt": 17
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc823d07ec75b6d6866782",
      unique_id: "234NIO8N5UM",
      instance_type: "ACTIVITY",
      id: 394,
      uid: 394,
      plate: "AD-4-83049",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000191",
      "name": "Unicorn",
      "year": 2021,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/144406-1708949924306.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34197,
        "lng": 54.520665,
        "tilt": 5
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3c9b07ec75b6d622b406",
      unique_id: "LCYSHU02HIM",
      instance_type: "ACTIVITY",
      id: 347,
      uid: 347,
      plate: "AD-T-1580",
      vehicle_plate_color: "#FF9344FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-8",
      "name": "Man Truck",
      "year": 2011,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/112208-1708932204294.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1389416,
        "lng": 55.8405083,
        "tilt": 336
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc4e3f07ec75b6d6465d41",
      unique_id: "Y8NE4Z4I0SK",
      instance_type: "ACTIVITY",
      id: 368,
      uid: 368,
      plate: "AD-T-1561",
      vehicle_plate_color: "#FB8F21FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-8",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/77233-1708936708514.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3409566,
        "lng": 54.5215716,
        "tilt": 1
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e0171ac76f439a6678759e",
      unique_id: "CDL9ZMKDRT9",
      instance_type: "ACTIVITY",
      id: 413,
      uid: 413,
      plate: "AD-T-1349",
      vehicle_plate_color: "#FF7C12FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000347",
      "name": "Corolla",
      "year": 2023,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/426736-1709184586986.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6773849,
        "lng": 53.7162466,
        "tilt": 109
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d745a407ec75b6d699a80a",
      unique_id: "E6SEORNDL7Q",
      instance_type: "ACTIVITY",
      id: 178,
      uid: 178,
      plate: "AD-T-1142",
      vehicle_plate_color: "#FF9600FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000159",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/439541-1708606836322.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1392733,
        "lng": 55.8384916,
        "tilt": 333
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc38c707ec75b6d61bd036",
      unique_id: "KQOKJXVBAFL",
      instance_type: "ACTIVITY",
      id: 335,
      uid: 335,
      plate: "AD-T-1133",
      vehicle_plate_color: "#FF8B40FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-24",
      "name": "Man Truck",
      "year": 2014,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/308534-1708931195504.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.340895,
        "lng": 54.5218916,
        "tilt": 6
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74fcc07ec75b6d6adf0f0",
      unique_id: "YKUULI8W06L",
      instance_type: "ACTIVITY",
      id: 207,
      uid: 207,
      plate: "AD-T-1206",
      vehicle_plate_color: "#FF8232FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000205",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/44328-1708609418042.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1400533,
        "lng": 55.8375283,
        "tilt": 325
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86bb407ec75b6d6dc8dda",
      unique_id: "S11OQQHP1BN",
      instance_type: "ACTIVITY",
      id: 238,
      uid: 238,
      plate: "AD-T-4122",
      vehicle_plate_color: "#FF8859FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000241",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/382085-1708682120280.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.140015,
        "lng": 55.838215,
        "tilt": 331
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d749e507ec75b6d6a1c1fa",
      unique_id: "09Y4OEZAF3W",
      instance_type: "ACTIVITY",
      id: 184,
      uid: 184,
      plate: "AD-T-1109",
      vehicle_plate_color: "#FF9152FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000177",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/84455-1708607924735.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1389766,
        "lng": 55.8376183,
        "tilt": 339
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74afe07ec75b6d6a3a7d6",
      unique_id: "JBD322XTHP9",
      instance_type: "ACTIVITY",
      id: 189,
      uid: 189,
      plate: "AD-T-1098",
      vehicle_plate_color: "#FF8D44FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000185",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/323380-1708608207134.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1388383,
        "lng": 55.8379383,
        "tilt": 347
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3e9407ec75b6d626d070",
      unique_id: "TZ0EDDPAFOX",
      instance_type: "ACTIVITY",
      id: 353,
      uid: 353,
      plate: "AD-T-1790",
      vehicle_plate_color: "#FF944FFF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-29",
      "name": "Man Truck",
      "year": 2016,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/11911-1708932708977.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34004,
        "lng": 54.52076,
        "tilt": 19
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc387207ec75b6d61abb3c",
      unique_id: "WJ6QN5DDRIS",
      instance_type: "ACTIVITY",
      id: 334,
      uid: 334,
      plate: "AD-T-1125",
      vehicle_plate_color: "#FF8933FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-21",
      "name": "Man Truck",
      "year": 2014,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/358831-1708931107557.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.339965,
        "lng": 54.521125,
        "tilt": 1
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86f4807ec75b6d6e447bd",
      unique_id: "ZJ6V685GEQZ",
      instance_type: "ACTIVITY",
      id: 253,
      uid: 253,
      plate: "AD-T-2103",
      vehicle_plate_color: "#FFA743FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000256",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/432864-1708683027648.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1383816,
        "lng": 55.8372633,
        "tilt": 334
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc381b07ec75b6d619ec5d",
      unique_id: "1OXEZUTRAZO",
      instance_type: "ACTIVITY",
      id: 333,
      uid: 333,
      plate: "AD-T-1117",
      vehicle_plate_color: "#FF8C51FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-25",
      "name": "Man Truck",
      "year": 2014,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/63329-1708930742679.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3401116,
        "lng": 54.5210033,
        "tilt": 9
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8799a07ec75b6d6fd2e24",
      unique_id: "CT65ALGA0EE",
      instance_type: "ACTIVITY",
      id: 290,
      uid: 290,
      plate: "AD-T-4104",
      vehicle_plate_color: "#FF8547FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000287",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/83059-1708685675536.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6773133,
        "lng": 53.7165583,
        "tilt": 114
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3b2b07ec75b6d6203bd7",
      unique_id: "8S4YYCUNV4B",
      instance_type: "ACTIVITY",
      id: 342,
      uid: 342,
      plate: "AD-T-1574",
      vehicle_plate_color: "#FF944FFF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-2",
      "name": "Man Truck",
      "year": 2011,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/422460-1708931805213.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3401333,
        "lng": 54.521005,
        "tilt": 3
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d736c507ec75b6d67e19c2",
      unique_id: "AHUDJ598V35",
      instance_type: "ACTIVITY",
      id: 138,
      uid: 138,
      plate: "AD-T-3345",
      vehicle_plate_color: "#FF6E3DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000086",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/381301-1708603026735.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3444683,
        "lng": 54.5191233,
        "tilt": 8
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3bdd07ec75b6d621470d",
      unique_id: "VSSBN6PEYKD",
      instance_type: "ACTIVITY",
      id: 344,
      uid: 344,
      plate: "AD-T-1577",
      vehicle_plate_color: "#FF8150FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-10",
      "name": "Man Truck",
      "year": 2011,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/107359-1708932010285.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3399683,
        "lng": 54.5210366,
        "tilt": 3
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8723207ec75b6d6ec5582",
      unique_id: "UIJPSPMCZYO",
      instance_type: "ACTIVITY",
      id: 261,
      uid: 261,
      plate: "AD-T-1710",
      vehicle_plate_color: "#FF7641FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000264",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/414993-1708683776090.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3426266,
        "lng": 54.5212483,
        "tilt": 13
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74dc407ec75b6d6a8e9e6",
      unique_id: "NKV60AF9GQD",
      instance_type: "ACTIVITY",
      id: 200,
      uid: 200,
      plate: "AD-T-1641",
      vehicle_plate_color: "#FF9C42FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000148",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/228875-1708608912817.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6775483,
        "lng": 53.7154233,
        "tilt": 118
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc33c107ec75b6d610292c",
      unique_id: "GLZ12ACTJDZ",
      instance_type: "ACTIVITY",
      id: 321,
      uid: 321,
      plate: "AD-T-4510",
      vehicle_plate_color: "#FF7A00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000292",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/53133-1708929915134.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.13786,
        "lng": 55.839065,
        "tilt": 340
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d60a2907ec75b6d66019e6",
      unique_id: "DVDYCVFP0NX",
      instance_type: "ACTIVITY",
      id: 116,
      uid: 116,
      plate: "AD-18-66089",
      vehicle_plate_color: "#FB2D2DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-707",
      "name": "Sentra",
      "year": 2016,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/52175-1708526040985.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34335,
        "lng": 54.7634233,
        "tilt": 38
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7444e07ec75b6d69664bc",
      unique_id: "ACOGQ039BID",
      instance_type: "ACTIVITY",
      id: 172,
      uid: 172,
      plate: "AD-T-1566",
      vehicle_plate_color: "#FF7C31FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000162",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/79854-1708606497525.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6773666,
        "lng": 53.7164033,
        "tilt": 134
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d73a2a07ec75b6d68391e2",
      unique_id: "D1SV138M789",
      instance_type: "ACTIVITY",
      id: 149,
      uid: 149,
      plate: "AD-T-3456",
      vehicle_plate_color: "#FF8407FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000078",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/376810-1708603895758.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3453883,
        "lng": 54.5227616,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86e6007ec75b6d6e2447f",
      unique_id: "I6PD2AGW9AT",
      instance_type: "ACTIVITY",
      id: 249,
      uid: 249,
      plate: "AD-T-4126",
      vehicle_plate_color: "#FF8962FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000253",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/99005-1708682797981.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3436183,
        "lng": 54.520115,
        "tilt": 65528
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3e4907ec75b6d62645ca",
      unique_id: "USR7VM7STB3",
      instance_type: "ACTIVITY",
      id: 352,
      uid: 352,
      plate: "AD-T-1590",
      vehicle_plate_color: "#FF7C28FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-5",
      "name": "Man Truck",
      "year": 2011,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/64081-1708932631684.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6767666,
        "lng": 53.7158533,
        "tilt": 128
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3e0d07ec75b6d625d784",
      unique_id: "OSGV92FSC8G",
      instance_type: "ACTIVITY",
      id: 351,
      uid: 351,
      plate: "AD-T-1588",
      vehicle_plate_color: "#FF9254FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-4",
      "name": "Man Truck",
      "year": 2011,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/230893-1708932562966.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1494666,
        "lng": 55.81301,
        "tilt": 328
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7345307ec75b6d67a450b",
      unique_id: "JVXCWPX0WQ3",
      instance_type: "ACTIVITY",
      id: 131,
      uid: 131,
      plate: "AD-T-2459",
      vehicle_plate_color: "#FF7200FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000060",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/246403-1708602365585.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.341525,
        "lng": 54.5195083,
        "tilt": 4
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86a3c07ec75b6d6d8cf5e",
      unique_id: "GHF0ZC5A9ZQ",
      instance_type: "ACTIVITY",
      id: 232,
      uid: 232,
      plate: "AD-T-3127",
      vehicle_plate_color: "#FF9659FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000235",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/359329-1708681702902.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1373783,
        "lng": 55.8375383,
        "tilt": 332
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86a7707ec75b6d6d9712f",
      unique_id: "SPJDX6SOGFU",
      instance_type: "ACTIVITY",
      id: 233,
      uid: 233,
      plate: "AD-T-3126",
      vehicle_plate_color: "#FF9B53FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000236",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/300501-1708681802415.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1392616,
        "lng": 55.8384866,
        "tilt": 361
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3c2407ec75b6d62203a3",
      unique_id: "OD5CONO6LLA",
      instance_type: "ACTIVITY",
      id: 345,
      uid: 345,
      plate: "AD-T-1578",
      vehicle_plate_color: "#FF9057FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-3",
      "name": "Man Truck",
      "year": 2011,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/431282-1708932069757.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1391383,
        "lng": 55.8404866,
        "tilt": 332
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3b7f07ec75b6d620b13e",
      unique_id: "OHZ1LRB8JS1",
      instance_type: "ACTIVITY",
      id: 343,
      uid: 343,
      plate: "AD-T-1576",
      vehicle_plate_color: "#FF8C59FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-6",
      "name": "Man Truck",
      "year": 2011,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/443994-1708931897046.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3399966,
        "lng": 54.521045,
        "tilt": 5
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3dc907ec75b6d62569db",
      unique_id: "GZSDF4EXU7Y",
      instance_type: "ACTIVITY",
      id: 350,
      uid: 350,
      plate: "AD-T-1587",
      vehicle_plate_color: "#FF8843FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-9",
      "name": "Man Truck",
      "year": 2011,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/146330-1708932500131.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.13804,
        "lng": 55.8398916,
        "tilt": 341
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8785707ec75b6d6fa66af",
      unique_id: "MPQ6LH89ACJ",
      instance_type: "ACTIVITY",
      id: 285,
      uid: 285,
      plate: "AD-T-4310",
      vehicle_plate_color: "#FF8454FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000299",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/403040-1708685352472.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1393466,
        "lng": 55.8389083,
        "tilt": 334
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d752af07ec75b6d6b516cf",
      unique_id: "UOJIFT49TJM",
      instance_type: "ACTIVITY",
      id: 218,
      uid: 218,
      plate: "AD-T-1656",
      vehicle_plate_color: "#FF7424FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000212",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/202403-1708610169452.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1373083,
        "lng": 55.8376116,
        "tilt": 332
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7514207ec75b6d6b18fbc",
      unique_id: "RFZFMAL0EYF",
      instance_type: "ACTIVITY",
      id: 213,
      uid: 213,
      plate: "AD-T-1264",
      vehicle_plate_color: "#FF7A00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000201",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/71677-1708609825181.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1372233,
        "lng": 55.8376316,
        "tilt": 334
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc26b807ec75b6d6fda05c",
      unique_id: "G480HFVL5AQ",
      instance_type: "ACTIVITY",
      id: 309,
      uid: 309,
      plate: "AD-T-3945",
      vehicle_plate_color: "#FF9B29FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000093",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/328838-1708926602482.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1373383,
        "lng": 55.8378883,
        "tilt": 336
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d872a407ec75b6d6ed8dce",
      unique_id: "GI3K5VFGM0E",
      instance_type: "ACTIVITY",
      id: 263,
      uid: 263,
      plate: "AD-T-3104",
      vehicle_plate_color: "#FF7E35FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000302 ",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/392902-1708683900215.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.137475,
        "lng": 55.83786,
        "tilt": 334
      },
      "ignition": 0,
      "speed": {
        "value": "2.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d869da07ec75b6d6d7c411",
      unique_id: "OMVFJOCXLN6",
      instance_type: "ACTIVITY",
      id: 231,
      uid: 231,
      plate: "AD-T-3128",
      vehicle_plate_color: "#FF8E46FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000234",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/391630-1708681630537.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.13737,
        "lng": 55.837865,
        "tilt": 332
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc25d507ec75b6d6fd2096",
      unique_id: "9DX8TA5ZM7S",
      instance_type: "ACTIVITY",
      id: 306,
      uid: 306,
      plate: "AD-T-3645",
      vehicle_plate_color: "#FF905FFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000083",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/252439-1708926362016.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1373583,
        "lng": 55.8379266,
        "tilt": 335
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc273107ec75b6d6fdd5b5",
      unique_id: "OHTIOARHY0K",
      instance_type: "ACTIVITY",
      id: 311,
      uid: 311,
      plate: "AD-T-4245",
      vehicle_plate_color: "#FF945DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000096",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/220592-1708926719864.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1373066,
        "lng": 55.8374983,
        "tilt": 333
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8686507ec75b6d6d3c456",
      unique_id: "NU18HPYKBRN",
      instance_type: "ACTIVITY",
      id: 226,
      uid: 226,
      plate: "AD-T-2129",
      vehicle_plate_color: "#FF7F3EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000229",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/346628-1708681267741.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.13949,
        "lng": 55.8375733,
        "tilt": 333
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74bf607ec75b6d6a551e9",
      unique_id: "FXS1YF4LINT",
      instance_type: "ACTIVITY",
      id: 193,
      uid: 193,
      plate: "AD-T-1159",
      vehicle_plate_color: "#FF8933FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000180",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/335945-1708608448086.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1393233,
        "lng": 55.8386,
        "tilt": 340
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7452f07ec75b6d6988291",
      unique_id: "LXZ3BZVBBOG",
      instance_type: "ACTIVITY",
      id: 176,
      uid: 176,
      plate: "AD-T-1162",
      vehicle_plate_color: "#FF951DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000167",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/140544-1708606722895.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1391616,
        "lng": 55.838325,
        "tilt": 332
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc276607ec75b6d6fde021",
      unique_id: "TQ1164ZEREL",
      instance_type: "ACTIVITY",
      id: 312,
      uid: 312,
      plate: "AD-T-4345",
      vehicle_plate_color: "#FF8844FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000100",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/428851-1708926778762.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1371766,
        "lng": 55.83732,
        "tilt": 342
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7426607ec75b6d691d254",
      unique_id: "RNKE5ZNK4K5",
      instance_type: "ACTIVITY",
      id: 164,
      uid: 164,
      plate: "AD-T-1158",
      vehicle_plate_color: "#FF5600FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000149",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/304130-1708606006583.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1392816,
        "lng": 55.8374133,
        "tilt": 335
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74a5b07ec75b6d6a28e4e",
      unique_id: "HDAZK3HYPDR",
      instance_type: "ACTIVITY",
      id: 186,
      uid: 186,
      plate: "AD-T-1097",
      vehicle_plate_color: "#FFA027FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000186",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/218890-1708608034771.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1391383,
        "lng": 55.8385783,
        "tilt": 351
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86b3807ec75b6d6db8867",
      unique_id: "E6UR2GL3HMJ",
      instance_type: "ACTIVITY",
      id: 236,
      uid: 236,
      plate: "AD-T-3129",
      vehicle_plate_color: "#FF9879FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000239",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/195249-1708681987052.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1373233,
        "lng": 55.8376866,
        "tilt": 334
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d741e907ec75b6d6909f91",
      unique_id: "Q82VF9CBP91",
      instance_type: "ACTIVITY",
      id: 162,
      uid: 162,
      plate: "AD-T-1136",
      vehicle_plate_color: "#FF6400FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000146",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/242071-1708605886271.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1391033,
        "lng": 55.8383683,
        "tilt": 337
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86b7807ec75b6d6dc12f8",
      unique_id: "Y60YFW0Y3D8",
      instance_type: "ACTIVITY",
      id: 237,
      uid: 237,
      plate: "AD-T-2128",
      vehicle_plate_color: "#FF9976FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000240",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/340771-1708682055638.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1372433,
        "lng": 55.8376333,
        "tilt": 327
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc283c07ec75b6d6fe0a9f",
      unique_id: "PUFRJZVVDTW",
      instance_type: "ACTIVITY",
      id: 315,
      uid: 315,
      plate: "AD-T-4451",
      vehicle_plate_color: "#FF986AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000091",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/290593-1708926988922.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1373366,
        "lng": 55.8375066,
        "tilt": 336
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc331d07ec75b6d60ee654",
      unique_id: "GK0PEHVHOCE",
      instance_type: "ACTIVITY",
      id: 319,
      uid: 319,
      plate: "AD-T-4710",
      vehicle_plate_color: "#FF9535FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000289",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/367113-1708929729819.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1394749,
        "lng": 55.837395,
        "tilt": 332
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86de207ec75b6d6e13661",
      unique_id: "EZ4MW5H90VA",
      instance_type: "ACTIVITY",
      id: 247,
      uid: 247,
      plate: "AD-T-2102",
      vehicle_plate_color: "#FFA34EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000251",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/69970-1708682674711.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1374033,
        "lng": 55.8376716,
        "tilt": 338
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d744f707ec75b6d697fbcb",
      unique_id: "JRTB9V1TYPU",
      instance_type: "ACTIVITY",
      id: 175,
      uid: 175,
      plate: "AD-T-1163",
      vehicle_plate_color: "#FF9600FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000166",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/29815-1708606659017.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1393683,
        "lng": 55.83742,
        "tilt": 337
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7493b07ec75b6d6a0a270",
      unique_id: "9GSH3IW2A9G",
      instance_type: "ACTIVITY",
      id: 181,
      uid: 181,
      plate: "AD-T-1123",
      vehicle_plate_color: "#FF7F3EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000178",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/173941-1708607756671.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.139375,
        "lng": 55.8376316,
        "tilt": 340
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d620ed07ec75b6d68dac41",
      unique_id: "AR09BZO45DW",
      instance_type: "ACTIVITY",
      id: 120,
      uid: 120,
      plate: "AD-T-1945",
      vehicle_plate_color: "#FFA531FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000064",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/306660-1708531842594.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3437966,
        "lng": 54.51998,
        "tilt": 7
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74e8407ec75b6d6aad8dd",
      unique_id: "GIGS31E23NG",
      instance_type: "ACTIVITY",
      id: 203,
      uid: 203,
      plate: "AD-T-1602",
      vehicle_plate_color: "#FF8024FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000156",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/201443-1708609103284.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6772683,
        "lng": 53.7162966,
        "tilt": 117
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e01e60c76f439a66865350",
      unique_id: "6AO5T78SL47",
      instance_type: "ACTIVITY",
      id: 419,
      uid: 419,
      plate: "AD-T-1428",
      vehicle_plate_color: "#FF662AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000348",
      "name": "Corolla",
      "year": 2023,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/225455-1709186584092.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6775183,
        "lng": 53.7173583,
        "tilt": 122
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e9696c15303df623cf7882",
      unique_id: "6VLGA4DPQBT",
      instance_type: "ACTIVITY",
      id: 474,
      uid: 474,
      plate: "AD-14-61824",
      vehicle_plate_color: "#FF1A1AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-595",
      "name": "Sunny",
      "year": 2016,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/177085-1709795603861.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3408599,
        "lng": 54.5189766,
        "tilt": 11
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc254307ec75b6d6fcdbe5",
      unique_id: "MV769K9PU3O",
      instance_type: "ACTIVITY",
      id: 304,
      uid: 304,
      plate: "AD-T-3459",
      vehicle_plate_color: "#FF8B40FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000102",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/222071-1708926208165.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1373833,
        "lng": 55.8376633,
        "tilt": 335
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc34d407ec75b6d612bdef",
      unique_id: "YV4VX9ZJMPT",
      instance_type: "ACTIVITY",
      id: 325,
      uid: 325,
      plate: "AD-T-4910",
      vehicle_plate_color: "#FF8446FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000308",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/336755-1708930218806.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1766933,
        "lng": 55.7542999,
        "tilt": 228
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e582d315303df623e12664",
      unique_id: "RV0MMKIPK3A",
      instance_type: "ACTIVITY",
      id: 462,
      uid: 462,
      plate: "AD-6-26406",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2390,
      "vtype_name": "Compact pickup truck",
      "vehicle_num": "VEHC-000000403",
      "name": "Hilux",
      "year": 2024,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/275507-1709539902208.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34108,
        "lng": 54.51873,
        "tilt": 19
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc346307ec75b6d611e90d",
      unique_id: "5IWN1GT7QH5",
      instance_type: "ACTIVITY",
      id: 323,
      uid: 323,
      plate: "AD-T-1246",
      vehicle_plate_color: "#FF8852FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000295",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/208058-1708930102372.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1394933,
        "lng": 55.837365,
        "tilt": 338
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dac3c307ec75b6d6fe7f00",
      unique_id: "BQVTSLED9H1",
      instance_type: "ACTIVITY",
      id: 294,
      uid: 294,
      plate: "AD-T-41503",
      vehicle_plate_color: "#FF8A2BFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000085",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/381954-1708835682610.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34102,
        "lng": 54.5182783,
        "tilt": 30
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc27a307ec75b6d6fdecf6",
      unique_id: "P42LBO0RTUY",
      instance_type: "ACTIVITY",
      id: 313,
      uid: 313,
      plate: "AD-T-4445",
      vehicle_plate_color: "#FF9051FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000079",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/188501-1708926838920.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1373933,
        "lng": 55.8378683,
        "tilt": 344
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86fc007ec75b6d6e59429",
      unique_id: "BGI1MX9VK2Y",
      instance_type: "ACTIVITY",
      id: 255,
      uid: 255,
      plate: "AD-T-2105",
      vehicle_plate_color: "#FF9362FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000258",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/314879-1708683154357.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.137715,
        "lng": 55.8403316,
        "tilt": 332
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc264807ec75b6d6fd63cc",
      unique_id: "NJDCVTO9XF2",
      instance_type: "ACTIVITY",
      id: 307,
      uid: 307,
      plate: "AD-T-3745",
      vehicle_plate_color: "#FF906AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000105",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/427955-1708926488654.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1377283,
        "lng": 55.8403366,
        "tilt": 359
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e01e09c76f439a6685d01d",
      unique_id: "NHADIQLKJQK",
      instance_type: "ACTIVITY",
      id: 418,
      uid: 418,
      plate: "AD-T-1688",
      vehicle_plate_color: "#FF6E35FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000349",
      "name": "Corolla",
      "year": 2023,
      "make": "Toyota",
      "image": "https://wiot-fleet-prod.wiot360.com/298445-1709186491083.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6776283,
        "lng": 53.7164233,
        "tilt": 126
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d877e907ec75b6d6f97d41",
      unique_id: "M03AIJQCL8W",
      instance_type: "ACTIVITY",
      id: 283,
      uid: 283,
      plate: "AD-T-4107",
      vehicle_plate_color: "#FF950EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000286",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/195174-1708685248712.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6772733,
        "lng": 53.7162149,
        "tilt": 112
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7439407ec75b6d694a913",
      unique_id: "RSH3L2LNO9P",
      instance_type: "ACTIVITY",
      id: 169,
      uid: 169,
      plate: "AD-T-1231",
      vehicle_plate_color: "#FF8100FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000150",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/265928-1708606313223.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.141045,
        "lng": 55.8396616,
        "tilt": 361
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d750dc07ec75b6d6b08cdc",
      unique_id: "JR60FFPDMT2",
      instance_type: "ACTIVITY",
      id: 211,
      uid: 211,
      plate: "AD-T-1280",
      vehicle_plate_color: "#FF810DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000199",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/78609-1708609719239.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6774083,
        "lng": 53.71672,
        "tilt": 109
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65fd456f7aaed8205c5fe30b",
      unique_id: "1H5GGIKJVO6",
      instance_type: "ACTIVITY",
      id: 480,
      uid: 480,
      plate: "AD-14-60739",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-590",
      "name": "Sunny",
      "year": 2016,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/338239-1711097098362.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.140265,
        "lng": 55.8392216,
        "tilt": 330
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e9576315303df623bade9b",
      unique_id: "HK2BMFCYWHC",
      instance_type: "ACTIVITY",
      id: 470,
      uid: 470,
      plate: "AD-14-61873",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-594",
      "name": "Sunny",
      "year": 2016,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/315123-1709790984106.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.340865,
        "lng": 54.5188633,
        "tilt": 7
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc358507ec75b6d6140dd4",
      unique_id: "7NCQFTGKIB9",
      instance_type: "ACTIVITY",
      id: 328,
      uid: 328,
      plate: "AD-T-1209",
      vehicle_plate_color: "#FF8A4EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000311",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/147185-1708930390006.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1409333,
        "lng": 55.8398,
        "tilt": 351
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74d7f07ec75b6d6a83e77",
      unique_id: "SDRHD4NVQ94",
      instance_type: "ACTIVITY",
      id: 199,
      uid: 199,
      plate: "AD-T-1143",
      vehicle_plate_color: "#FF7F4DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000184",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/6268-1708608841026.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.17635,
        "lng": 55.7532916,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc349907ec75b6d612538d",
      unique_id: "IG9JGPNJC0Z",
      instance_type: "ACTIVITY",
      id: 324,
      uid: 324,
      plate: "AD-T-1250",
      vehicle_plate_color: "#FF792DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000307",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/146986-1708930164251.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.14112,
        "lng": 55.8400133,
        "tilt": 341
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d750a807ec75b6d6b010b3",
      unique_id: "0LIXECHS8IW",
      instance_type: "ACTIVITY",
      id: 210,
      uid: 210,
      plate: "AD-T-1601",
      vehicle_plate_color: "#FF7B1CFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000198",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/192883-1708609642561.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.13726,
        "lng": 55.83771,
        "tilt": 342
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3a3b07ec75b6d61e804d",
      unique_id: "8UX1CX2M0AA",
      instance_type: "ACTIVITY",
      id: 339,
      uid: 339,
      plate: "AD-T-1147",
      vehicle_plate_color: "#FF9855FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-11",
      "name": "Man Truck",
      "year": 2014,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/337740-1708931589713.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1388966,
        "lng": 55.840875,
        "tilt": 328
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc294907ec75b6d6fe420b",
      unique_id: "QFV91KTX7QP",
      instance_type: "ACTIVITY",
      id: 316,
      uid: 316,
      plate: "AD-T-1564",
      vehicle_plate_color: "#FF8242FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000139",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/224933-1708927086569.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1372983,
        "lng": 55.8375333,
        "tilt": 329
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3d8c07ec75b6d62506b3",
      unique_id: "SPFUDC6EEWC",
      instance_type: "ACTIVITY",
      id: 349,
      uid: 349,
      plate: "AD-T-1584",
      vehicle_plate_color: "#FF8637FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-12",
      "name": "Man Truck",
      "year": 2011,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/159065-1708932317767.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1393916,
        "lng": 55.8406033,
        "tilt": 351
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc336807ec75b6d60f7a89",
      unique_id: "3UL9WET9QYE",
      instance_type: "ACTIVITY",
      id: 320,
      uid: 320,
      plate: "AD-T-4610",
      vehicle_plate_color: "#FF9946FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000300",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/184871-1708929838185.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1409466,
        "lng": 55.839905,
        "tilt": 317
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d734b307ec75b6d67ad923",
      unique_id: "MEEUVA77QKS",
      instance_type: "ACTIVITY",
      id: 132,
      uid: 132,
      plate: "AD-T-2458",
      vehicle_plate_color: "#FF6724FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000065",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/417199-1708602469739.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3434883,
        "lng": 54.521965,
        "tilt": 26
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3f6107ec75b6d628c45f",
      unique_id: "AIXENUYQQ8S",
      instance_type: "ACTIVITY",
      id: 356,
      uid: 356,
      plate: "AD-T-1804",
      vehicle_plate_color: "#FF854FFF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-27",
      "name": "Man Truck",
      "year": 2016,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/98341-1708932910294.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3399266,
        "lng": 54.52105,
        "tilt": 6
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3ec907ec75b6d627877c",
      unique_id: "Z9UY28MVZDA",
      instance_type: "ACTIVITY",
      id: 354,
      uid: 354,
      plate: "AD-T-1795",
      vehicle_plate_color: "#FF914BFF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-30",
      "name": "Man Truck",
      "year": 2016,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/228804-1708932765292.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3399416,
        "lng": 54.5212083,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7517a07ec75b6d6b21577",
      unique_id: "XB37SXPOLGT",
      instance_type: "ACTIVITY",
      id: 214,
      uid: 214,
      plate: "AD-T-1649",
      vehicle_plate_color: "#FF8D2FFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000208",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/263367-1708609870639.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.141275,
        "lng": 55.8404266,
        "tilt": 329
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d876bf07ec75b6d6f70271",
      unique_id: "J5JKJEMGRT9",
      instance_type: "ACTIVITY",
      id: 278,
      uid: 278,
      plate: "AD-T-3910",
      vehicle_plate_color: "#FFA15DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000279",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/141816-1708684938495.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1409966,
        "lng": 55.840155,
        "tilt": 329
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7422807ec75b6d6913d06",
      unique_id: "VTSUTTPYPQ9",
      instance_type: "ACTIVITY",
      id: 163,
      uid: 163,
      plate: "AD-T-1174",
      vehicle_plate_color: "#FF8B36FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000147",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/288842-1708605944588.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.14125,
        "lng": 55.8405466,
        "tilt": 327
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d742e107ec75b6d692f7a6",
      unique_id: "MPTP2CHFVAA",
      instance_type: "ACTIVITY",
      id: 166,
      uid: 166,
      plate: "AD-T-1187",
      vehicle_plate_color: "#FF7200FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000151",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/296691-1708606128469.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.141215,
        "lng": 55.840355,
        "tilt": 332
      },
      "ignition": 0,
      "speed": {
        "value": "1.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8777b07ec75b6d6f89630",
      unique_id: "YFRTRL1A7RP",
      instance_type: "ACTIVITY",
      id: 281,
      uid: 281,
      plate: "AD-T-4110",
      vehicle_plate_color: "#FF854EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000293",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/430381-1708685140168.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1410683,
        "lng": 55.8406033,
        "tilt": 307
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d744b907ec75b6d697677a",
      unique_id: "KHPVQZUB8IJ",
      instance_type: "ACTIVITY",
      id: 174,
      uid: 174,
      plate: "AD-T-1186",
      vehicle_plate_color: "#FF8D19FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000165",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/225273-1708606611669.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1413133,
        "lng": 55.8401633,
        "tilt": 317
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8795907ec75b6d6fc9b49",
      unique_id: "4D9UB8439IK",
      instance_type: "ACTIVITY",
      id: 289,
      uid: 289,
      plate: "AD-T-4210",
      vehicle_plate_color: "#FF9B29FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000288",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/58755-1708685614876.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1411833,
        "lng": 55.8406533,
        "tilt": 307
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dac4e307ec75b6d6ff42ee",
      unique_id: "GY03FAS6A0G",
      instance_type: "ACTIVITY",
      id: 296,
      uid: 296,
      plate: "AD-7-41496",
      vehicle_plate_color: "#FF3C3CFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000081",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/235601-1708835984944.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6772466,
        "lng": 53.7177683,
        "tilt": 107
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc350f07ec75b6d61337b0",
      unique_id: "9AE6ULKP2KD",
      instance_type: "ACTIVITY",
      id: 326,
      uid: 326,
      plate: "AD-T-1222",
      vehicle_plate_color: "#FF8F3DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000309",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/317828-1708930276579.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.137265,
        "lng": 55.837525,
        "tilt": 329
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74ed907ec75b6d6aba066",
      unique_id: "9KGWK3C4AZ1",
      instance_type: "ACTIVITY",
      id: 204,
      uid: 204,
      plate: "AD-T-1225",
      vehicle_plate_color: "#FFA141FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000202",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/33519-1708609166775.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6770083,
        "lng": 53.7168016,
        "tilt": 86
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74f7f07ec75b6d6ad363b",
      unique_id: "2EPBH1KFR8N",
      instance_type: "ACTIVITY",
      id: 206,
      uid: 206,
      plate: "AD-T-1278",
      vehicle_plate_color: "#FF8E54FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000204",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/256432-1708609365410.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6769333,
        "lng": 53.7167433,
        "tilt": 140
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3f2507ec75b6d6285046",
      unique_id: "4L46M96CPUW",
      instance_type: "ACTIVITY",
      id: 355,
      uid: 355,
      plate: "AD-T-1796",
      vehicle_plate_color: "#FF874AFF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-28",
      "name": "Man Truck",
      "year": 2016,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/24660-1708932817238.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3397233,
        "lng": 54.5213033,
        "tilt": 25
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3ab907ec75b6d61f813e",
      unique_id: "0M6HYKH8J8X",
      instance_type: "ACTIVITY",
      id: 341,
      uid: 341,
      plate: "AD-T-1268",
      vehicle_plate_color: "#FF9253FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-13",
      "name": "Man Truck",
      "year": 2011,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/229858-1708931716864.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1374666,
        "lng": 55.8404516,
        "tilt": 341
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8682507ec75b6d6d31994",
      unique_id: "BWK5IGJPAMG",
      instance_type: "ACTIVITY",
      id: 225,
      uid: 225,
      plate: "AD-T-3125",
      vehicle_plate_color: "#FF8555FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000228",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/168636-1708681203377.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6770066,
        "lng": 53.7166516,
        "tilt": 124
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8674607ec75b6d6d0b76b",
      unique_id: "XM7ZWTLUF5Y",
      instance_type: "ACTIVITY",
      id: 222,
      uid: 222,
      plate: "AD-T-3124",
      vehicle_plate_color: "#FF913FFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000225",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/341658-1708680966949.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.67716,
        "lng": 53.7166933,
        "tilt": 118
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d748fc07ec75b6d6a03614",
      unique_id: "PD3P1H0PR3R",
      instance_type: "ACTIVITY",
      id: 180,
      uid: 180,
      plate: "AD-T-1154",
      vehicle_plate_color: "#FF8A4EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000172",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/182907-1708607684566.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1761033,
        "lng": 55.7536883,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74ac307ec75b6d6a3425e",
      unique_id: "R9RUEPQ84CE",
      instance_type: "ACTIVITY",
      id: 188,
      uid: 188,
      plate: "AD-T-1135",
      vehicle_plate_color: "#FFAB40FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000179",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/94068-1708608154795.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1763233,
        "lng": 55.7536383,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d47f5f07ec75b6d6eddfa4",
      unique_id: "GUSG4USKYOB",
      instance_type: "ACTIVITY",
      id: 93,
      uid: 93,
      plate: "AD-7-41508",
      vehicle_plate_color: "#FB4040FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "1",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/155344-1708424948067.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34092,
        "lng": 54.5188299,
        "tilt": 65533
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc3cd507ec75b6d623167b",
      unique_id: "F3AYZH0T23I",
      instance_type: "ACTIVITY",
      id: 348,
      uid: 348,
      plate: "AD-T-1583",
      vehicle_plate_color: "#FF812FFF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-7",
      "name": "Man Truck",
      "year": 2011,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/319020-1708932259788.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1394549,
        "lng": 55.8408366,
        "tilt": 337
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc392607ec75b6d61cb79a",
      unique_id: "DWA8TXIFBHA",
      instance_type: "ACTIVITY",
      id: 336,
      uid: 336,
      plate: "AD-T-1144",
      vehicle_plate_color: "#FF8A46FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-23",
      "name": "Man Truck",
      "year": 2014,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/226025-1708931289951.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.33988,
        "lng": 54.5210833,
        "tilt": 65533
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dac58a07ec75b6d6ffb499",
      unique_id: "F711Q0E6WO0",
      instance_type: "ACTIVITY",
      id: 297,
      uid: 297,
      plate: "AD-T-1469",
      vehicle_plate_color: "#FF9040FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000133",
      "name": "Sentra",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/249380-1708836174192.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3452666,
        "lng": 54.523285,
        "tilt": 65532
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc39fb07ec75b6d61e28f5",
      unique_id: "UJCRTDOYRR0",
      instance_type: "ACTIVITY",
      id: 338,
      uid: 338,
      plate: "AD-T-1146",
      vehicle_plate_color: "#FF8730FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-14",
      "name": "Man Truck",
      "year": 2014,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/34741-1708931477129.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1394383,
        "lng": 55.840975,
        "tilt": 311
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc398b07ec75b6d61d8e51",
      unique_id: "A8EGDVG5ZBX",
      instance_type: "ACTIVITY",
      id: 337,
      uid: 337,
      plate: "AD-T-1145",
      vehicle_plate_color: "#FFA859FF",
      "vtype_id": 2080,
      "vtype_name": "Transporter",
      "vehicle_num": "HVTR-15",
      "name": "Man Truck",
      "year": 2014,
      "make": "Man Truck",
      "image": "https://wiot-fleet-prod.wiot360.com/81389-1708931390018.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.13965,
        "lng": 55.8395416,
        "tilt": 343
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "66448dffba2b02aa3e586650",
      unique_id: "QTKCZVA21UQ",
      instance_type: "ACTIVITY",
      id: 499,
      uid: 499,
      plate: "AD-14-2903",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-554",
      "name": "LX460",
      "year": 2015,
      "make": "Lexus",
      "image": "https://wiot-fleet-prod.wiot360.com/295212-1715767692199.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3396216,
        "lng": 54.5189933,
        "tilt": 6
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7411607ec75b6d68ea6a3",
      unique_id: "F4P313IQFXA",
      instance_type: "ACTIVITY",
      id: 159,
      uid: 159,
      plate: "AD-T-1592",
      vehicle_plate_color: "#FF5B07FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000145",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/391246-1708605670876.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3611933,
        "lng": 54.4976116,
        "tilt": 20
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7435907ec75b6d6941e8b",
      unique_id: "HMYQYRXOBLV",
      instance_type: "ACTIVITY",
      id: 168,
      uid: 168,
      plate: "AD-T-1624",
      vehicle_plate_color: "#FF8F00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000154",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/60861-1708606251166.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3610716,
        "lng": 54.4978,
        "tilt": 4
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc84bb07ec75b6d68967f1",
      unique_id: "1EXXB2UY8RH",
      instance_type: "ACTIVITY",
      id: 399,
      uid: 399,
      plate: "AD-4-80647",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000222",
      "name": "Unicorn",
      "year": 2021,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/205165-1708950667098.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3416416,
        "lng": 54.5222616,
        "tilt": 9
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d752eb07ec75b6d6b5a5bc",
      unique_id: "B944JNJNNY1",
      instance_type: "ACTIVITY",
      id: 219,
      uid: 219,
      plate: "AD-T-1662",
      vehicle_plate_color: "#FF9137FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000214",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/76605-1708610235906.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1759349,
        "lng": 55.7531733,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc7acf07ec75b6d67e0430",
      unique_id: "CE1YY7NGHUV",
      instance_type: "ACTIVITY",
      id: 379,
      uid: 379,
      plate: "AD-4-91102",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000049",
      "name": "Unicorn",
      "year": 2018,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/116505-1708947876503.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1375833,
        "lng": 55.840395,
        "tilt": 352
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74d0007ec75b6d6a72110",
      unique_id: "ZKZ2SJJ6IA6",
      instance_type: "ACTIVITY",
      id: 197,
      uid: 197,
      plate: "AD-T-1178",
      vehicle_plate_color: "#FF8B40FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000171",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/366284-1708608705384.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3585283,
        "lng": 54.4960416,
        "tilt": 13
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7500d07ec75b6d6ae93bf",
      unique_id: "FSI91LQQN8S",
      instance_type: "ACTIVITY",
      id: 208,
      uid: 208,
      plate: "AD-T-1604",
      vehicle_plate_color: "#FF7B2FFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000196",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/410045-1708609508268.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6772466,
        "lng": 53.7163266,
        "tilt": 105
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86ab707ec75b6d6da2898",
      unique_id: "CBWP6U40CSO",
      instance_type: "ACTIVITY",
      id: 234,
      uid: 234,
      plate: "AD-T-3120",
      vehicle_plate_color: "#FFA400FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000237",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/314502-1708681859984.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6766866,
        "lng": 53.7168133,
        "tilt": 136
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7511607ec75b6d6b11905",
      unique_id: "IZDB5EBZAO2",
      instance_type: "ACTIVITY",
      id: 212,
      uid: 212,
      plate: "AD-T-1605",
      vehicle_plate_color: "#FF8508FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000200",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/442058-1708609768588.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6767333,
        "lng": 53.71677,
        "tilt": 126
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d735a707ec75b6d67c5c28",
      unique_id: "5OO6TXICWEK",
      instance_type: "ACTIVITY",
      id: 135,
      uid: 135,
      plate: "AD-T-3457",
      vehicle_plate_color: "#FF7540FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000106",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/80783-1708602736847.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3586883,
        "lng": 54.4960383,
        "tilt": 65532
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7448907ec75b6d696f3df",
      unique_id: "STDB08AWRD4",
      instance_type: "ACTIVITY",
      id: 173,
      uid: 173,
      plate: "AD-T-1169",
      vehicle_plate_color: "#FF870DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000168",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/432211-1708606555608.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3617,
        "lng": 54.4983666,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74f4607ec75b6d6acaf9b",
      unique_id: "TZ200Y46T8Y",
      instance_type: "ACTIVITY",
      id: 205,
      uid: 205,
      plate: "AD-T-1204",
      vehicle_plate_color: "#FF914BFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000203",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/438624-1708609253015.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1375783,
        "lng": 55.8406233,
        "tilt": 365
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc35c407ec75b6d614e1a5",
      unique_id: "E52R3XBKAWU",
      instance_type: "ACTIVITY",
      id: 329,
      uid: 329,
      plate: "AD-T-1095",
      vehicle_plate_color: "#FF905EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000312",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/246179-1708930451215.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1376333,
        "lng": 55.840375,
        "tilt": 355
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d870f707ec75b6d6e8efd4",
      unique_id: "KDVHD05O3UD",
      instance_type: "ACTIVITY",
      id: 256,
      uid: 256,
      plate: "AD-T-4125",
      vehicle_plate_color: "#FF831EFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000259",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/6749-1708683460280.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3610683,
        "lng": 54.49786,
        "tilt": 17
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86c6707ec75b6d6de0bc1",
      unique_id: "T5BLGRGJ06Q",
      instance_type: "ACTIVITY",
      id: 241,
      uid: 241,
      plate: "AD-T-1058",
      vehicle_plate_color: "#FF9D71FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000245",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/179502-1708682300992.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3609616,
        "lng": 54.4979583,
        "tilt": 20
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86e1e07ec75b6d6e1b8a2",
      unique_id: "MCNANUDYOS1",
      instance_type: "ACTIVITY",
      id: 248,
      uid: 248,
      plate: "AD-T-3103",
      vehicle_plate_color: "#FF8831FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000252 ",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/352284-1708682735816.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3610083,
        "lng": 54.49813,
        "tilt": 7
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8736807ec75b6d6efa33a",
      unique_id: "AYM3W4GZUBZ",
      instance_type: "ACTIVITY",
      id: 266,
      uid: 266,
      plate: "AD-T-3110",
      vehicle_plate_color: "#FF7C3AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000276",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/257031-1708684094270.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3456033,
        "lng": 54.523375,
        "tilt": 10
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d609be07ec75b6d65f1c1b",
      unique_id: "0O9DLVV5WVI",
      instance_type: "ACTIVITY",
      id: 115,
      uid: 115,
      plate: "AD-T-1900",
      vehicle_plate_color: "#FF9D39FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000069",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/265301-1708525951786.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3414099,
        "lng": 54.5194783,
        "tilt": 65524
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74c3907ec75b6d6a5c28b",
      unique_id: "BO0AMJ9OWGE",
      instance_type: "ACTIVITY",
      id: 194,
      uid: 194,
      plate: "AD-T-1632",
      vehicle_plate_color: "#FF8B48FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000153",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/445714-1708608528418.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6772866,
        "lng": 53.7163666,
        "tilt": 104
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7350007ec75b6d67b550f",
      unique_id: "VDOV78E2HWL",
      instance_type: "ACTIVITY",
      id: 133,
      uid: 133,
      plate: "AD-T-2545",
      vehicle_plate_color: "#FF622DFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000067",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/55667-1708602564166.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3457983,
        "lng": 54.5235049,
        "tilt": 6
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86f0707ec75b6d6e3a636",
      unique_id: "KWKGVV41KPW",
      instance_type: "ACTIVITY",
      id: 252,
      uid: 252,
      plate: "AD-T-2810",
      vehicle_plate_color: "#FF9C38FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000255",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/415064-1708682971755.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3613599,
        "lng": 54.4979716,
        "tilt": 10
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d878d807ec75b6d6fb88a8",
      unique_id: "YPNUMO6J5GC",
      instance_type: "ACTIVITY",
      id: 287,
      uid: 287,
      plate: "AD-T-4105",
      vehicle_plate_color: "#FFA45AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000296",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/321882-1708685477121.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3609883,
        "lng": 54.49779,
        "tilt": 65535
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7496f07ec75b6d6a0f7a2",
      unique_id: "LVFZA3UW86V",
      instance_type: "ACTIVITY",
      id: 182,
      uid: 182,
      plate: "AD-T-1179",
      vehicle_plate_color: "#FF9B35FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000175",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/318564-1708607814303.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.34531,
        "lng": 54.5230833,
        "tilt": 3
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d874c407ec75b6d6f2ca28",
      unique_id: "1SH7IWKMFOR",
      instance_type: "ACTIVITY",
      id: 271,
      uid: 271,
      plate: "AD-T-3810",
      vehicle_plate_color: "#FF8648FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000277",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/383984-1708684433423.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1375583,
        "lng": 55.8407316,
        "tilt": 365
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d872f207ec75b6d6ee6530",
      unique_id: "J47VOCTTL2J",
      instance_type: "ACTIVITY",
      id: 264,
      uid: 264,
      plate: "AD-T-4101",
      vehicle_plate_color: "#FF9547FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000273",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/435002-1708683973791.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1760516,
        "lng": 55.7535799,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "66d704dd0c79ef0b03fed99f",
      unique_id: "9RUIGRVS7YF",
      instance_type: "ACTIVITY",
      id: 521,
      uid: 521,
      plate: "AD-L-62891",
      vehicle_plate_color: "#FF8844FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "VEHC-497",
      "name": "Civillian",
      "year": 2015,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/153144-1725367371099.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3458716,
        "lng": 54.52342,
        "tilt": 5
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d73fe407ec75b6d68caf81",
      unique_id: "Z081A54DZJD",
      instance_type: "ACTIVITY",
      id: 155,
      uid: 155,
      plate: "AD-T-1501",
      vehicle_plate_color: "#FF8800FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000125",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/128010-1708605337387.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3454049,
        "lng": 54.52306,
        "tilt": 12
      },
      "ignition": 0,
      "speed": {
        "value": "13.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d86e9407ec75b6d6e2b443",
      unique_id: "EB2WRG2TZCS",
      instance_type: "",
      id: 250,
      uid: 250,
      plate: "AD-T-2107",
      vehicle_plate_color: "#FF9600FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000254",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/343557-1708682860418.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65d74d3b07ec75b6d6a78b1e",
      unique_id: "AFOV2VWK0B6",
      instance_type: "",
      id: 198,
      uid: 198,
      plate: "AD-T-1249",
      vehicle_plate_color: "#FFA64BFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000174",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/110057-1708608781181.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65d86af507ec75b6d6dacf1b",
      unique_id: "JW2BBC65C7D",
      instance_type: "",
      id: 235,
      uid: 235,
      plate: "AD-T-4120",
      vehicle_plate_color: "#FFA05BFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000238",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/260702-1708681923537.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65d751b407ec75b6d6b2a8cd",
      unique_id: "LFZ2S0XXEQF",
      instance_type: "",
      id: 215,
      uid: 215,
      plate: "AD-T-1651",
      vehicle_plate_color: "#FF943CFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000209",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/410017-1708609923587.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65d74c6e07ec75b6d6a620f5",
      unique_id: "8S2TEZWMDA6",
      instance_type: "",
      id: 195,
      uid: 195,
      plate: "AD-T-1232",
      vehicle_plate_color: "#FF935CFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000164",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/263558-1708608583951.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3613599,
        "lng": 54.4980466,
        "tilt": 38
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8679307ec75b6d6d188f5",
      unique_id: "DYNM3JC4UFS",
      instance_type: "",
      id: 223,
      uid: 223,
      plate: "AD-T-1684",
      vehicle_plate_color: "#FF9D6BFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000226",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/142664-1708681055176.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.36116,
        "lng": 54.497895,
        "tilt": 24
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74e3607ec75b6d6aa1e05",
      unique_id: "PGYENKEDB2M",
      instance_type: "",
      id: 202,
      uid: 202,
      plate: "AD-T-1273",
      vehicle_plate_color: "#FF8D3AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000157",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/190070-1708609036877.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65d7431b07ec75b6d693859f",
      unique_id: "ZQBV05G4CXV",
      instance_type: "",
      id: 167,
      uid: 167,
      plate: "AD-T-1139",
      vehicle_plate_color: "#FF6B00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000152",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/133433-1708606188469.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1764733,
        "lng": 55.754085,
        "tilt": 55
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d74cad07ec75b6d6a68e76",
      unique_id: "BY2BFRIW6ST",
      instance_type: "",
      id: 196,
      uid: 196,
      plate: "AD-T-1156",
      vehicle_plate_color: "#FF9F68FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000170",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/413154-1708608633638.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3616666,
        "lng": 54.49774,
        "tilt": 26
      },
      "ignition": 0,
      "speed": {
        "value": "3.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7415007ec75b6d68f31d5",
      unique_id: "UMD9ZDKUEZU",
      instance_type: "",
      id: 160,
      uid: 160,
      plate: "AD-T-1596",
      vehicle_plate_color: "#FF5600FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000144",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/37876-1708605730905.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.361725,
        "lng": 54.49829,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d7419e07ec75b6d68fec0f",
      unique_id: "OG8YNLFMO72",
      instance_type: "",
      id: 161,
      uid: 161,
      plate: "AD-T-1593",
      vehicle_plate_color: "#FF9600FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000143",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/243786-1708605793428.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65d73f8f07ec75b6d68c2526",
      unique_id: "2VRB566PPBY",
      instance_type: "",
      id: 154,
      uid: 154,
      plate: "AD-T-1507",
      vehicle_plate_color: "#FF5D00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000124",
      "name": "Sunny Mexico",
      "year": 2020,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/51320-1708605269993.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3454199,
        "lng": 54.5231466,
        "tilt": 28
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d621eb07ec75b6d68f408e",
      unique_id: "N2CGGCJOGW0",
      instance_type: "ACTIVITY",
      id: 122,
      uid: 122,
      plate: "AD-T-2453",
      vehicle_plate_color: "#FFAC00FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000066",
      "name": "Sentra",
      "year": 2019,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/291334-1708532115209.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3457866,
        "lng": 54.5235533,
        "tilt": 18
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc363507ec75b6d615bdd5",
      unique_id: "HRBPHOX1FIN",
      instance_type: "",
      id: 331,
      uid: 331,
      plate: "AD-T-1239",
      vehicle_plate_color: "#FF7C50FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000315",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/209287-1708930570591.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1376216,
        "lng": 55.8406,
        "tilt": 338
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc35ff07ec75b6d6155982",
      unique_id: "AEF6I0PGEGX",
      instance_type: "",
      id: 330,
      uid: 330,
      plate: "AD-T-4410",
      vehicle_plate_color: "#FF7B38FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000314",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/127368-1708930513785.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.137725,
        "lng": 55.840555,
        "tilt": 295
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc354607ec75b6d6139a83",
      unique_id: "Z2IDQPXCV1M",
      instance_type: "",
      id: 327,
      uid: 327,
      plate: "AD-T-1099",
      vehicle_plate_color: "#FFA446FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000310",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/284525-1708930330498.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1375333,
        "lng": 55.8407716,
        "tilt": 349
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc341907ec75b6d6114122",
      unique_id: "63UJSNET32D",
      instance_type: "",
      id: 322,
      uid: 322,
      plate: "AD-T-4810",
      vehicle_plate_color: "#FF9742FF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000290",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/222707-1708929995346.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1762533,
        "lng": 55.75309,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8781c07ec75b6d6f9eac5",
      unique_id: "41IUYALHHZN",
      instance_type: "",
      id: 284,
      uid: 284,
      plate: "AD-T-1252",
      vehicle_plate_color: "#FF982FFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000297",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/281856-1708685301531.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1385966,
        "lng": 55.8378566,
        "tilt": 173
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65d8760207ec75b6d6f56ab1",
      unique_id: "ZWOMRSH0H3Y",
      instance_type: "",
      id: 275,
      uid: 275,
      plate: "AD-T-3109",
      vehicle_plate_color: "#FF8C2FFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000285",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/142240-1708684656223.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65d8752e07ec75b6d6f3a2fa",
      unique_id: "B5D6YXDQE8S",
      instance_type: "",
      id: 273,
      uid: 273,
      plate: "AD-T-4103",
      vehicle_plate_color: "#FF9C6AFF",
      "vtype_id": 2088,
      "vtype_name": "Sedan",
      "vehicle_num": "VEHC-000000283",
      "name": "Sunny Mexico",
      "year": 2022,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/377565-1708684548625.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.13752,
        "lng": 55.8406866,
        "tilt": 67
      },
      "ignition": 0,
      "speed": {
        "value": "10.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc769d07ec75b6d679b9ac",
      unique_id: "H6IN81ETOHI",
      instance_type: "",
      id: 376,
      uid: 376,
      plate: "AD-4-90714",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000055",
      "name": "Unicorn",
      "year": 2019,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/280926-1708947038014.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65dc7d4b07ec75b6d6801675",
      unique_id: "SPHJP33HMXS",
      instance_type: "",
      id: 385,
      uid: 385,
      plate: "AD-4-93057",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000038",
      "name": "Unicorn",
      "year": 2018,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/243749-1708948763234.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65dc7cc707ec75b6d67f9f1f",
      unique_id: "GVH4DI80LUO",
      instance_type: "",
      id: 383,
      uid: 383,
      plate: "AD-4-92059",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000042",
      "name": "Unicorn",
      "year": 2018,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/88781-1708948635128.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65dc7d9707ec75b6d680536a",
      unique_id: "UT7GHSPPPDG",
      instance_type: "",
      id: 386,
      uid: 386,
      plate: "AD-4-93465",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000006",
      "name": "Unicorn",
      "year": 2017,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/42595-1708948824702.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65dc7b8807ec75b6d67eb664",
      unique_id: "UX2UTF6FHMO",
      instance_type: "",
      id: 380,
      uid: 380,
      plate: "AD-4-91150",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000045",
      "name": "Unicorn",
      "year": 2018,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/241101-1708948283130.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65dc832d07ec75b6d6877960",
      unique_id: "IA1YUZR67F5",
      instance_type: "",
      id: 396,
      uid: 396,
      plate: "AD-4-82049",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000207",
      "name": "Unicorn",
      "year": 2021,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/432227-1708950204547.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1408583,
        "lng": 55.8402333,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc82a407ec75b6d686f2c8",
      unique_id: "UMTZG7FZXJ1",
      instance_type: "",
      id: 395,
      uid: 395,
      plate: "AD-4-83051",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000189",
      "name": "Unicorn",
      "year": 2021,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/429843-1708950123155.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3451399,
        "lng": 54.5229583,
        "tilt": 109
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc7f0507ec75b6d681bb8c",
      unique_id: "KGKYEMA9GGF",
      instance_type: "",
      id: 388,
      uid: 388,
      plate: "AD-4-89765",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000075",
      "name": "Unicorn",
      "year": 2019,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/13255-1708949189068.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3422016,
        "lng": 54.521615,
        "tilt": 359
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": ""
      }
    },
    {
      //"_id": "65dc818d07ec75b6d6854f03",
      unique_id: "A0VL6H9J7CY",
      instance_type: "",
      id: 393,
      uid: 393,
      plate: "AD-4-83048",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000190",
      "name": "Unicorn",
      "year": 2021,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/166782-1708949857152.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65dc7fa107ec75b6d68249e7",
      unique_id: "K9J7MDG25RG",
      instance_type: "",
      id: 390,
      uid: 390,
      plate: "AD-4-87327",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000117",
      "name": "Unicorn",
      "year": 2020,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/80061-1708949360344.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1403966,
        "lng": 55.83981,
        "tilt": 194
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": ""
      }
    },
    {
      //"_id": "65dc838207ec75b6d687e610",
      unique_id: "DPIMII2EKX6",
      instance_type: "",
      id: 397,
      uid: 397,
      plate: "AD-4-82051",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000206",
      "name": "Unicorn",
      "year": 2021,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/230385-1708950342764.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.137685,
        "lng": 55.840505,
        "tilt": 198
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": ""
      }
    },
    {
      //"_id": "65dc804607ec75b6d68360de",
      unique_id: "82583BLWAWM",
      instance_type: "",
      id: 392,
      uid: 392,
      plate: "AD-4-87325",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000116",
      "name": "Unicorn",
      "year": 2020,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/346632-1708949493952.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3452699,
        "lng": 54.5230216,
        "tilt": 293
      },
      "ignition": 0,
      "speed": {
        "value": "0",
        "unit": ""
      }
    },
    {
      //"_id": "65dc7f5b07ec75b6d681ff0c",
      unique_id: "9BJN9RZQGAK",
      instance_type: "",
      id: 389,
      uid: 389,
      plate: "AD-4-87364",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000120",
      "name": "Unicorn",
      "year": 2020,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/300918-1708949272658.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65dc877507ec75b6d68ed99d",
      unique_id: "168IXJHSMXY",
      instance_type: "",
      id: 407,
      uid: 407,
      plate: "AD-4-74284",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000325 ",
      "name": "Unicorn",
      "year": 2022,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/253863-1708951362445.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3453183,
        "lng": 54.522945,
        "tilt": 196
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc865c07ec75b6d68c5d63",
      unique_id: "T3CEXYYFZWA",
      instance_type: "",
      id: 404,
      uid: 404,
      plate: "AD-4-74379",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000322 ",
      "name": "Unicorn",
      "year": 2022,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/278300-1708951092387.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6774316,
        "lng": 53.7163116,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": ""
      }
    },
    {
      //"_id": "65dc86a707ec75b6d68ce276",
      unique_id: "2S8EY3ZUI8R",
      instance_type: "",
      id: 405,
      uid: 405,
      plate: "AD-4-74380",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000321 ",
      "name": "Unicorn",
      "year": 2022,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/361401-1708951150208.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65dc851507ec75b6d689f01d",
      unique_id: "SEYVT2FKWQ1",
      instance_type: "",
      id: 400,
      uid: 400,
      plate: "AD-4-80648",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000221",
      "name": "Unicorn",
      "year": 2021,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/354932-1708950739878.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65dc862307ec75b6d68bedf9",
      unique_id: "20JLRV04VF4",
      instance_type: "",
      id: 403,
      uid: 403,
      plate: "AD-4-74378",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000323 ",
      "name": "Unicorn",
      "year": 2022,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/300742-1708951031686.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3425916,
        "lng": 54.52216,
        "tilt": 4
      },
      "ignition": 0,
      "speed": {
        "value": "31.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65dc85e707ec75b6d68b76a7",
      unique_id: "Z7BHMA98X77",
      instance_type: "",
      id: 402,
      uid: 402,
      plate: "AD-4-74376",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": " VEHC-000000324",
      "name": "Unicorn",
      "year": 2022,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/125497-1708950963365.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65dc85a107ec75b6d68ae331",
      unique_id: "XYYL0IHP8QM",
      instance_type: "",
      id: 401,
      uid: 401,
      plate: "AD-4-75917",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000317",
      "name": "Unicorn",
      "year": 2022,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/37660-1708950891535.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 23.6774033,
        "lng": 53.7163216,
        "tilt": 333
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": ""
      }
    },
    {
      //"_id": "65dc873407ec75b6d68e268d",
      unique_id: "NTCJA6VGP7K",
      instance_type: "",
      id: 406,
      uid: 406,
      plate: "AD-4-74381",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000320 ",
      "name": "Unicorn",
      "year": 2022,
      "make": "Honda",
      "image": "https://wiot-fleet-prod.wiot360.com/212524-1708951230392.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65e02a69c76f439a669d64d7",
      unique_id: "RU5R8OUIVFV",
      instance_type: "",
      id: 424,
      uid: 424,
      plate: "AD-4-16904",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000329",
      "name": "Apache",
      "year": 2022,
      "make": "TVS",
      "image": "https://wiot-fleet-prod.wiot360.com/190517-1709189671082.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65e0289cc76f439a66993671",
      unique_id: "6J02YY2HOMN",
      instance_type: "",
      id: 421,
      uid: 421,
      plate: "AD-4-16901",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000326",
      "name": "Apache",
      "year": 2022,
      "make": "TVS",
      "image": "https://wiot-fleet-prod.wiot360.com/355084-1709188864859.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3452883,
        "lng": 54.5231583,
        "tilt": 65529
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e02ab6c76f439a669e2407",
      unique_id: "CD66N6KVQ23",
      instance_type: "",
      id: 425,
      uid: 425,
      plate: "AD-4-16905",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000330",
      "name": "Apache",
      "year": 2022,
      "make": "TVS",
      "image": "https://wiot-fleet-prod.wiot360.com/58450-1709189760458.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65e02a1bc76f439a669c9c2d",
      unique_id: "LDADZGZXBJ9",
      instance_type: "",
      id: 423,
      uid: 423,
      plate: "AD-4-16903",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000328",
      "name": "Apache",
      "year": 2022,
      "make": "TVS",
      "image": "https://wiot-fleet-prod.wiot360.com/392991-1709189416153.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65e0290bc76f439a669a2dbc",
      unique_id: "CGGBNR3J4AO",
      instance_type: "",
      id: 422,
      uid: 422,
      plate: "AD-4-16902",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000327",
      "name": "Apache",
      "year": 2022,
      "make": "TVS",
      "image": "https://wiot-fleet-prod.wiot360.com/300021-1709189293523.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3453266,
        "lng": 54.5230833,
        "tilt": 8
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e02b3ac76f439a669f76c5",
      unique_id: "24XP2LNMH27",
      instance_type: "",
      id: 427,
      uid: 427,
      plate: "AD-4-16907",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000332",
      "name": "Apache",
      "year": 2022,
      "make": "TVS",
      "image": "https://wiot-fleet-prod.wiot360.com/438939-1709189900127.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1375866,
        "lng": 55.8406183,
        "tilt": 332
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e02c4cc76f439a66a2294d",
      unique_id: "W3K8VXS9XJX",
      instance_type: "",
      id: 431,
      uid: 431,
      plate: "AD-4-16912",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000336",
      "name": "Apache",
      "year": 2022,
      "make": "TVS",
      "image": "https://wiot-fleet-prod.wiot360.com/438260-1709190172525.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65e02b7bc76f439a66a01f2d",
      unique_id: "8IXBT6STF80",
      instance_type: "",
      id: 428,
      uid: 428,
      plate: "AD-4-16908",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000333",
      "name": "Apache",
      "year": 2022,
      "make": "TVS",
      "image": "https://wiot-fleet-prod.wiot360.com/177439-1709189959181.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65e02c0dc76f439a66a18a66",
      unique_id: "TFNPBUQKJ84",
      instance_type: "",
      id: 430,
      uid: 430,
      plate: "AD-4-16910",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000335",
      "name": "Apache",
      "year": 2022,
      "make": "TVS",
      "image": "https://wiot-fleet-prod.wiot360.com/432717-1709190113504.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "663f9806ba2b02aa3e81df9a",
      unique_id: "PJMEFIWC3IJ",
      instance_type: "",
      id: 497,
      uid: 497,
      plate: "AD-14-97802",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000002",
      "name": "MC",
      "year": 2016,
      "make": "Suzuki",
      "image": "https://wiot-fleet-prod.wiot360.com/304503-1715443503678.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "664db2c66ea38693d196ff3e",
      unique_id: "W11PN4O5OV6",
      instance_type: "",
      id: 501,
      uid: 501,
      plate: "AD-14-96468",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-568",
      "name": "MC",
      "year": 2014,
      "make": "Suzuki",
      "image": "https://wiot-fleet-prod.wiot360.com/58647-1716367975120.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.1377083,
        "lng": 55.840555,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "0.00",
        "unit": "km/h"
      }
    },
    {
      //"_id": "65e02af0c76f439a669eb842",
      unique_id: "GQ9IMSSJW9G",
      instance_type: "",
      id: 426,
      uid: 426,
      plate: "AD-4-16906",
      vehicle_plate_color: "#FF0000FF",
      "vtype_id": 2182,
      "vtype_name": "Basic Motorcycle",
      "vehicle_num": "VEHC-000000331",
      "name": "Apache",
      "year": 2022,
      "make": "TVS",
      "image": "https://wiot-fleet-prod.wiot360.com/133800-1709189825711.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65e580ff15303df623dd2126",
      unique_id: "XU8HZ37246R",
      instance_type: "",
      id: 461,
      uid: 461,
      plate: "AD-T-1881",
      vehicle_plate_color: "#FF7234FF",
      "vtype_id": 2091,
      "vtype_name": "SUV",
      "vehicle_num": "VEHC-000000368",
      "name": "Patrol-Nismo",
      "year": 2023,
      "make": "Nissan",
      "image": "https://wiot-fleet-prod.wiot360.com/9701-1709539361861.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    },
    {
      //"_id": "65dc4a9407ec75b6d63fe835",
      unique_id: "EQCJPL29I2U",
      instance_type: "",
      id: 360,
      uid: 360,
      plate: "AD-T-1404",
      vehicle_plate_color: "#FF8933FF",
      "vtype_id": 2072,
      "vtype_name": "Coach Bus",
      "vehicle_num": "HVBU-3",
      "name": "Daewoo",
      "year": 2012,
      "make": "Daewoo",
      "image": "https://wiot-fleet-prod.wiot360.com/239361-1708935725879.png",
      "driving_status": 0,
      "idling_status": 0,
      "color": "grey",
      "location": {
        "lat": 24.3406246,
        "lng": 54.5180006,
        "tilt": 0
      },
      "ignition": 0,
      "speed": {
        "value": "",
        "unit": ""
      }
    }
  ];