
app.constant('Cities', {
  sanFrancisco : {
    key: 'sanFrancisco',
    name: 'San Francisco',
    type: 'cityCard',
    country: 'USA',
    location: [41.7558, -122.419416],
    connections: ['tokyo', 'manila', 'losAngeles', 'chicago'],
    color: 'blue',
    cardFront: 'http://i.imgur.com/LJeqqkn.png',
    infectionCardFront: 'http://i.imgur.com/0Mh2rl8.png'
  },
  chicago : {
    key: 'chicago',
    name: 'Chicago',
    type: 'cityCard',
    country: 'USA',
    location: [44.994200, -93.0936],
    connections: ['sanFrancisco', 'losAngeles', 'mexicoCity', 'atlanta', 'montreal'],
    color: 'blue',
    cardFront: 'http://i.imgur.com/yn2NXMr.png',
    infectionCardFront: 'http://i.imgur.com/DSL3dMp.png'
  },
  atlanta : {
    key: 'atlanta',
    name: 'Atlanta',
    type: 'cityCard',
    country: 'USA',
    location: [33.748995, -84.387982],
    connections: ['dc', 'miami', 'chicago'],
    color: 'blue',
    cardFront: 'http://i.imgur.com/fBvT8my.png',
    infectionCardFront: 'http://i.imgur.com/3onMgcE.png'
  },
  montreal : {
    key: 'montreal',
    name: 'Montreal',
    type: 'cityCard',
    country: 'Canada',
    location: [46.566239, -79.116811],
    connections: ['dc', 'newYork', 'chicago'],
    color: 'blue',
    cardFront: 'http://i.imgur.com/L0s10Ej.png',
    infectionCardFront: 'http://i.imgur.com/8OSU5um.png'
  },
  newYork : {
    key: 'newYork',
    name: 'New York',
    type: 'cityCard',
    country: 'USA',
    location: [44.367342, -64.012666],
    connections: ['montreal', 'dc', 'london', 'madrid'],
    color: 'blue',
    cardFront: 'http://i.imgur.com/JmcKn4F.png',
    infectionCardFront: 'http://i.imgur.com/I3aEhfD.png'
  },
  dc : {
    key: 'dc',
    name: 'Washington DC',
    type: 'cityCard',
    country: 'USA',
    location: [32.407446, -64.012666],
    connections: ['atlanta', 'montreal', 'newYork', 'miami'],
    color: 'blue',
    cardFront: 'http://i.imgur.com/PdLY3S0.png',
    infectionCardFront: 'http://i.imgur.com/5WnhzSD.png'
  },
  london : {
    key: 'london',
    name: 'London',
    type: 'cityCard',
    country: 'UK',
    location: [54.683934, -15.502873],
    connections: ['newYork', 'madrid', 'paris', 'berlin'],
    color: 'blue',
    cardFront: 'http://i.imgur.com/NVYB3jH.png',
    infectionCardFront: 'http://i.imgur.com/8Wr7Bx3.png'
  },
  madrid : {
    key: 'madrid',
    name: 'Madrid',
    type: 'cityCard',
    country: 'Spain',
    location: [38.820437, -14.335510],
    connections: ['saoPaulo', 'newYork', 'algiers', 'paris', 'london'],
    color: 'blue',
    cardFront: 'http://i.imgur.com/tO17QHG.png',
    infectionCardFront: 'http://i.imgur.com/ZkOv08O.png'
  },
  paris : {
    key: 'paris',
    name: 'Paris',
    type: 'cityCard',
    country: 'France',
    location: [48.856614, 2.352222],
    connections: ['london', 'madrid', 'milan', 'berlin', 'algiers'],
    color: 'blue',
    cardFront: 'http://i.imgur.com/hUTCHdF.png',
    infectionCardFront: 'http://i.imgur.com/Elkb7t9.png'
  },
  berlin : {
    key: 'berlin',
    name: 'Berlin',
    type: 'cityCard',
    country: 'Germany',
    location: [52.520007, 13.404954],
    connections: ['london', 'milan', 'paris', 'stPetersburg'],
    color: 'blue',
    cardFront: 'http://i.imgur.com/5D4xseO.png',
    infectionCardFront: 'http://i.imgur.com/PFqmczv.png'
  },
  milan : {
    key: 'milan',
    name: 'Milan',
    type: 'cityCard',
    country: 'Italy',
    location: [40.926716, 14.995174],
    connections: ['istanbul', 'paris', 'berlin'],
    color: 'blue',
    cardFront: 'http://i.imgur.com/nZbXmtg.png',
    infectionCardFront: 'http://i.imgur.com/aIEkdAs.png'
  },
  stPetersburg : {
    key: 'stPetersburg',
    name: 'St Petersburg',
    type: 'cityCard',
    country: 'Russia',
    location: [59.934280, 30.335099],
    connections: ['moscow', 'istanbul', 'berlin'],
    color: 'blue',
    cardFront: 'http://i.imgur.com/n1j9r5q.png',
    infectionCardFront: 'http://i.imgur.com/677ZIr5.png'
  },
  losAngeles : {
    key: 'losAngeles',
    name: 'Los Angeles',
    type: 'cityCard',
    country: 'USA',
    location: [23.359891, -118.485900],
    connections: ['sydney', 'sanFrancisco', 'chicago', 'mexicoCity'],
    color: 'yellow',
    cardFront: 'http://i.imgur.com/H27v7WB.png',
    infectionCardFront: 'http://i.imgur.com/6iAA3ym.png'
  },
  mexicoCity : {
    key: 'mexicoCity',
    name: 'Mexico City',
    type: 'cityCard',
    country: 'Mexico',
    location: [18.205068, -97.649483],
    connections: ['chicago', 'losAngeles', 'miami', 'bogota', 'lima'],
    color: 'yellow',
    cardFront: 'http://i.imgur.com/XqVg8T9.png',
    infectionCardFront: 'http://i.imgur.com/qZyXMSC.png'
  },
  miami : {
    key: 'miami',
    name: 'Miami',
    type: 'cityCard',
    country: 'USA',
    location: [25.003754, -77.402244],
    connections: ['dc', 'atlanta', 'mexicoCity', 'bogota'],
    color: 'yellow',
    cardFront: 'http://i.imgur.com/LKUwQmj.png',
    infectionCardFront: 'http://i.imgur.com/xHMzZbz.png'
  },
  bogota : {
    key: 'bogota',
    name: 'Bogota',
    type: 'cityCard',
    country: 'Colombia',
    location: [4.710989, -74.072092],
    connections: ['miami', 'mexicoCity', 'lima', 'buenosAires', 'saoPaulo'],
    color: 'yellow',
    cardFront: 'http://i.imgur.com/kLFAVSM.png',
    infectionCardFront: 'http://i.imgur.com/9ApRJcy.png'
  },
  lima : {
    key: 'lima',
    name: 'Lima',
    type: 'cityCard',
    country: 'Peru',
    location: [-17.604774, -87.372619],
    connections: ['mexicoCity', 'bogota', 'santiago'],
    color: 'yellow',
    cardFront: 'http://i.imgur.com/gwdshYc.png',
    infectionCardFront: 'http://i.imgur.com/UB7lkG8.png'
  },
  santiago : {
    key: 'santiago',
    name: 'Santiago',
    type: 'cityCard',
    country: 'Chile',
    location: [-37.337422, -81.923400],
    connections: ['lima'],
    color: 'yellow',
    cardFront: 'http://i.imgur.com/uSz7uFS.png',
    infectionCardFront: 'http://i.imgur.com/vRrKsMh.png'
  },
  buenosAires : {
    key: 'buenosAires',
    name: 'Buenos Aires',
    type: 'cityCard',
    country: 'Argentina',
    location: [-34.603684, -58.381559],
    connections: ['saoPaulo', 'bogota'],
    color: 'yellow',
    cardFront: 'http://i.imgur.com/2Qnf94h.png',
    infectionCardFront: 'http://i.imgur.com/qFTcwBT.png'
  },
  saoPaulo : {
    key: 'saoPaulo',
    name: 'Sao Paulo',
    type: 'cityCard',
    country: 'Brazil',
    location: [-23.550520, -46.633309],
    connections: ['buenosAires', 'bogota', 'madrid', 'lagos'],
    color: 'yellow',
    cardFront: 'http://i.imgur.com/6PAdwDC.png',
    infectionCardFront: 'http://i.imgur.com/rxC2S1b.png'
  },
  lagos : {
    key: 'lagos',
    name: 'Lagos',
    type: 'cityCard',
    country: 'Nigeria',
    location: [6.524379, 3.379206],
    connections: ['saoPaulo', 'kinshasa', 'khartoum'],
    color: 'yellow',
    cardFront: 'http://i.imgur.com/B5wKgnc.png',
    infectionCardFront: 'http://i.imgur.com/1Gfif7I.png'
  },
  kinshasa : {
    key: 'kinshasa',
    name: 'Kinshasa',
    type: 'cityCard',
    country: 'Democratic Republic of Congo',
    location: [-4.441931, 15.266293],
    connections: ['lagos', 'johannesburg', 'khartoum'],
    color: 'yellow',
    cardFront: 'http://i.imgur.com/Sppbfvr.png',
    infectionCardFront: 'http://i.imgur.com/JIzjerX.png'
  },
  khartoum : {
    key: 'khartoum',
    name: 'Khartoum',
    type: 'cityCard',
    country: 'Sudan',
    location: [15.500654, 32.559899],
    connections: ['lagos', 'cairo', 'kinshasa', 'johannesburg'],
    color: 'yellow',
    cardFront: 'http://i.imgur.com/pKf2GCl.png',
    infectionCardFront: 'http://i.imgur.com/Vt4h3dH.png'
  },
  johannesburg : {
    key: 'johannesburg',
    name: 'Johannesburg',
    type: 'cityCard',
    country: 'South Africa',
    location: [-26.204103, 28.047305],
    connections: ['kinshasa', 'khartoum'],
    color: 'yellow',
    cardFront: 'http://i.imgur.com/HNk6R6L.png',
    infectionCardFront: 'http://i.imgur.com/8MypdC2.png'
  },
  algiers : {
    key: 'algiers',
    name: 'Algiers',
    type: 'cityCard',
    country: 'Algeria',
    location: [30.463737, 3.657282],
    connections: ['madrid', 'paris', 'istanbul', 'cairo'],
    color: 'black',
    cardFront: 'http://i.imgur.com/1xkt3zK.png',
    infectionCardFront: 'http://i.imgur.com/yVdZUV7.png'
  },
  cairo : {
    key: 'cairo',
    name: 'Cairo',
    type: 'cityCard',
    country: 'Egypt',
    location: [25.578028, 27.475642],
    connections: ['algiers', 'istanbul', 'baghdad', 'riyadh', 'khartoum'],
    color: 'black',
    cardFront: 'http://i.imgur.com/miaQizo.png',
    infectionCardFront: 'http://i.imgur.com/0njNpjw.png'
  },
  istanbul : {
    key: 'istanbul',
    name: 'Istanbul',
    type: 'cityCard',
    country: 'Turkey',
    location: [41.008238, 28.978359],
    connections: ['algiers', 'cairo', 'baghdad', 'moscow', 'stPetersburg', 'milan'],
    color: 'black',
    cardFront: 'http://i.imgur.com/7pwP128.png',
    infectionCardFront: 'http://i.imgur.com/RFytrfr.png'
  },
  moscow : {
    key: 'moscow',
    name: 'Moscow',
    type: 'cityCard',
    country: 'Russia',
    location: [55.038036, 44.614313],
    connections: ['stPetersburg', 'istanbul', 'tehran'],
    color: 'black',
    cardFront: 'http://i.imgur.com/cIH3iGs.png',
    infectionCardFront: 'http://i.imgur.com/qqnhC2K.png'
  },
  baghdad : {
    key: 'baghdad',
    name: 'Baghdad',
    type: 'cityCard',
    country: 'Iraq',
    location: [33.312806, 44.361488],
    connections: ['istanbul', 'tehran', 'karachi', 'riyadh', 'cairo'],
    color: 'black',
    cardFront: 'http://i.imgur.com/yo4BnSP.png',
    infectionCardFront: 'http://i.imgur.com/0VlCmUf.png'
  },
  riyadh : {
    key: 'riyadh',
    name: 'Riyadh',
    type: 'cityCard',
    country: 'Saudi Arabia',
    location: [17.828092, 44.438532],
    connections: ['cairo', 'baghdad', 'karachi'],
    color: 'black',
    cardFront: 'http://i.imgur.com/cI6VKdj.png',
    infectionCardFront: 'http://i.imgur.com/GJNwAfd.png'
  },
  tehran : {
    key: 'tehran',
    name: 'Tehran',
    type: 'cityCard',
    country: 'Iran',
    location: [42.176354, 57.446344],
    connections: ['moscow', 'baghdad', 'karachi', 'delhi'],
    color: 'black',
    cardFront: 'http://i.imgur.com/6ZDc4bk.png',
    infectionCardFront: 'http://i.imgur.com/PISWViM.png'
  },
  karachi : {
    key: 'karachi',
    name: 'Karachi',
    type: 'cityCard',
    country: 'Pakistan',
    location: [24.861462, 67.009939],
    connections: ['riyadh', 'baghdad', 'tehran', 'delhi', 'mumbai'],
    color: 'black',
    cardFront: 'http://i.imgur.com/wnfiiLV.png',
    infectionCardFront: 'http://i.imgur.com/SRvX0bs.png'
  },
  mumbai : {
    key: 'mumbai',
    name: 'Mumbai',
    type: 'cityCard',
    country: 'India',
    location: [13.342488, 67.202204],
    connections: ['karachi', 'delhi', 'chennai'],
    color: 'black',
    cardFront: 'http://i.imgur.com/evFUjMW.png',
    infectionCardFront: 'http://i.imgur.com/Fy7650Y.png'
  },
  delhi : {
    key: 'delhi',
    name: 'Delhi',
    type: 'cityCard',
    country: 'India',
    location: [32.547392, 77.382217],
    connections: ['tehran', 'kolkata', 'chennai', 'mumbai', 'karachi'],
    color: 'black',
    cardFront: 'http://i.imgur.com/s03XMUL.png',
    infectionCardFront: 'http://i.imgur.com/C9cfhEZ.png'
  },
  kolkata : {
    key: 'kolkata',
    name: 'Kolkata',
    type: 'cityCard',
    country: 'India',
    location: [31.203992, 90.653701],
    connections: ['delhi', 'hongKong', 'bangkok', 'chennai'],
    color: 'black',
    cardFront: 'http://i.imgur.com/xQTFDyo.png',
    infectionCardFront: 'http://i.imgur.com/DiiGjdp.png'
  },
  chennai : {
    key: 'chennai',
    name: 'Chennai',
    type: 'cityCard',
    country: 'India',
    location: [5.616669, 82.567764],
    connections: ['mumbai', 'delhi', 'kolkata', 'bangkok', 'jakarta'],
    color: 'black',
    cardFront: 'http://i.imgur.com/ceLSpSH.png',
    infectionCardFront: 'http://i.imgur.com/gItK3Ft.png'
  },
  beijing : {
    key: 'beijing',
    name: 'Beijing',
    type: 'cityCard',
    country: 'China',
    location: [44.083459, 109.557534],
    connections: ['seoul', 'shanghai'],
    color: 'red',
    cardFront: 'http://i.imgur.com/xhY4Z9P.png',
    infectionCardFront: 'http://i.imgur.com/AbNOz1P.png'
  },
  seoul : {
    key: 'seoul',
    name: 'Seoul',
    type: 'cityCard',
    country: 'South Korea',
    location: [45.283126, 127.408184],
    connections: ['beijing', 'tokyo', 'shanghai'],
    color: 'red',
    cardFront: 'http://i.imgur.com/j1A31Tm.png',
    infectionCardFront: 'http://i.imgur.com/CqXZOSm.png'
  },
  tokyo : {
    key: 'tokyo',
    name: 'Tokyo',
    type: 'cityCard',
    country: 'Japan',
    location: [41.609692, 141.795275],
    connections: ['sanFrancisco', 'seoul', 'osaka', 'shanghai'],
    color: 'red',
    cardFront: 'http://i.imgur.com/Vu9YIt2.png',
    infectionCardFront: 'http://i.imgur.com/fDg5PKf.png'
  },
  shanghai : {
    key: 'shanghai',
    name: 'Shanghai',
    type: 'cityCard',
    country: 'China',
    location: [34.924432, 111.244909],
    connections: ['beijing', 'tokyo', 'seoul', 'taipei', 'hongKong'],
    color: 'red',
    cardFront: 'http://i.imgur.com/dgDFZPl.png',
    infectionCardFront: 'http://i.imgur.com/aKDghfU.png'
  },
  hongKong : {
    key: 'hongKong',
    name: 'Hong Kong',
    type: 'cityCard',
    country: 'China',
    location: [22.396428, 114.109497],
    connections: ['kolkata', 'taipei', 'shanghai', 'bangkok', 'hoChiMinhCity', 'manila'],
    color: 'red',
    cardFront: 'http://i.imgur.com/fqmtyct.png',
    infectionCardFront: 'http://i.imgur.com/pEEhSAI.png'
  },
  taipei : {
    key: 'taipei',
    name: 'Taipei',
    type: 'cityCard',
    country: 'Taiwan',
    location: [22.747271, 127.319375],
    connections: ['osaka', 'hongKong', 'shanghai', 'manila'],
    color: 'red',
    cardFront: 'http://i.imgur.com/D2DEFDr.png',
    infectionCardFront: 'http://i.imgur.com/bDjgW9H.png'
  },
  osaka : {
    key: 'osaka',
    name: 'Osaka',
    type: 'cityCard',
    country: 'Japan',
    location: [27.961229, 141.972893],
    connections: ['taipei', 'tokyo'],
    color: 'red',
    cardFront: 'http://i.imgur.com/fof1qDn.png',
    infectionCardFront: 'http://i.imgur.com/I2vydck.png'
  },
  bangkok : {
    key: 'bangkok',
    name: 'Bangkok',
    type: 'cityCard',
    country: 'Thailand',
    location: [13.756331, 100.501765],
    connections: ['kolkata', 'hongKong', 'hoChiMinhCity', 'jakarta', 'chennai'],
    color: 'red',
    cardFront: 'http://i.imgur.com/lil8YlZ.png',
    infectionCardFront: 'http://i.imgur.com/D40MhMR.png'
  },
  jakarta : {
    key: 'jakarta',
    name: 'Jakarta',
    type: 'cityCard',
    country: 'Indonesia',
    location: [-9.271532, 99.966141],
    connections: ['chennai', 'bangkok', 'hoChiMinhCity', 'sydney'],
    color: 'red',
    cardFront: 'http://i.imgur.com/2L2GizG.png',
    infectionCardFront: 'http://i.imgur.com/ncavnu7.png'
  },
  hoChiMinhCity : {
    key: 'hoChiMinhCity',
    name: 'Ho Chi Minh City',
    type: 'cityCard',
    country: 'Vietnam',
    location: [0.279132, 110.356818],
    connections: ['bangkok', 'hongKong', 'jakarta', 'manila'],
    color: 'red',
    cardFront: 'http://i.imgur.com/ammm8jD.png',
    infectionCardFront: 'http://i.imgur.com/UJadRiR.png'
  },
  manila : {
    key: 'manila',
    name: 'Manila',
    type: 'cityCard',
    country: 'Philippines',
    location: [0.279132, 132.825546],
    connections: ['hoChiMinhCity', 'hongKong', 'taipei', 'sanFrancisco', 'sydney'],
    color: 'red',
    cardFront: 'http://i.imgur.com/yVlqDEA.png',
    infectionCardFront: 'http://i.imgur.com/lcEF1I3.png'
  },
  sydney : {
    key: 'sydney',
    name: 'Sydney',
    type: 'cityCard',
    country: 'Australia',
    location: [-33.867487, 151.20699],
    connections: ['jakarta', 'manila', 'losAngeles'],
    color: 'red',
    cardFront: 'http://i.imgur.com/1d5zFEb.png',
    infectionCardFront: 'http://i.imgur.com/Zcn7lxu.png'
  }

});


