const months = [
	'Januar',
	'Februar',
	'März',
	'April',
	'Mai',
	'Juni',
	'Juli',
	'August',
	'September',
	'Oktober',
	'November',
	'Dezember',
];
const days = [
	'Sonntag',
	'Montag',
	'Dienstag',
	'Mittwoch',
	'Donnerstag',
	'Freitag',
	'Samstag',
];
const germanCities = [
	'Stuttgart',
	'München',
	'Berlin',
	'Potsdam',
	'Bremen',
	'Hamburg',
	'Wiesbaden',
	'Schwerin',
	'Hannover',
	'Düsseldorf',
	'Mainz',
	'Saarbrücken',
	'Dresden',
	'Magdeburg',
	'Kiel',
	'Erfurt',
];
const cities = [
	'Stuttgart',
	'München',
	'Berlin',
	'Potsdam',
	'Bremen',
	'Hamburg',
	'Wiesbaden',
	'Schwerin',
	'Hannover',
	'Düsseldorf',
	'Mainz',
	'Saarbrücken',
	'Dresden',
	'Magdeburg',
	'Kiel',
	'Erfurt',
	'Shanghai',
	'Delhi',
	'Karatschi',
	'Peking',
	'Shenzhen',
	'Kinshasa',
	'Guangzhou',
	'Lagos',
	'Istanbul',
	'Bengaluru',
	'Chengdu'	,
	'Mumbai'	,
	'Moskau'	,
	'Lahore'	,
	'São Paulo'	,
	'Tianjin'	,
	'Jakarta'	,
	'Wuhan'	,
	'Dhaka'	,
	'Hyderabad',
	'Kairo'	,
	'Tokio'	,
	'Chennai',
	'Lima',
	'Dongguan',
	'Seoul'	,
	'Chongqing',
	'Xi’an'	,
	'Hangzhou',
	'Luanda'	,
	'Foshan'	,
	'Teheran'	,
	'London'	,
	'Mexiko-Stadt',
	'New York City',
	'Ahmedabad'	,
	'Bogotá',
	'Surat'	,
	'Nanjing',
	'Hongkong',
	'Shenyang',
	'Ho-Chi-Minh-Stadt',
	'Riad'	,
	'Bagdad',
	'Rio de Janeiro',
	'Zhengzhou'	,
	'Qingdao'	,
	'Kalkutta'	,
	'Suzhou'	,
	'Singapur'	,
	'Bangkok'	,
	'Changsha'	,
	'Abidjan'	,
	'Sankt Petersburg',
	'Jinan'	,
	'Daressalam',
	'Kunming'	,
	'Alexandria',
	'Harbin'	,
	'Sydney'	,
	'Santiago de Chile',
	'Ankara'	,
	'Shijiazhuang',
	'Hefei'	,
	'Melbourne',
	'Dalian'	,
	'Johannesburg',
// 	'Cape Town (Kapstadt)',
// 69	Rangun
// 70	Xiamen
// 71	Nanning
// 72	Changchun
// 73	Kabul
// 74	Nairobi
// 75	Gizeh
// 76	Kano
// 77	Taiyuan
// 78	eThekwini (Durban)
// 79	Bamako
// 80	Jaipur
// 81	Ekurhuleni
// 82	Tshwane (Pretoria)
// 83	Neu-Taipeh
// 84	Guiyang
// 85	Wuxi
// 86	Pune
// 87	Shantou
// 88	Ibadan
// 89	Ürümqi
// 90	Los Angeles
// 91	Zhongshan
// 92	Abuja
// 93	Lucknow
// 94	Yokohama
// 95	'Berlin'
// 96	Ningbo
// 97	Fuzhou
// 98	'Dschidda'
// 99	'Hanoi'
// 100	Nanchang
// 101	Addis Abeba
// 102	Port Harcourt
// 103	Casablanca
// 104	Busan
// 105	Madrid
// 106	Dubai
// 107	Chittagong
// 108	Faisalabad
// 109	Kanpur
// 110	Changzhou
// 111	Buenos Aires
// 112	Pjöngjang
// 113	Lanzhou
// 114	Maschhad
// 115	Nantong
// 116	Surabaya
// 117	Quezon City
// 118	Taschkent
// 119	Kiew
// 120	Izmir
// 121	Incheon
// 122	Brasília
// 123	Kumasi
// 124	Algier
// 125	Mbuji-Mayi
// 126	Nagpur
// 127	Rom
// 128	Xuzhou
// 129	Taichung
// 130	Lubumbashi
// 131	Toronto
// 132	Douala
// 133	Kaohsiung
// 134	Yaoundé
// 135	Osaka
// 136	Zibo
// 137	Linyi
// 138	Quito
// 139	Chicago
// 140	Gazipur
// 141	Dakar
// 142	Baku
// 143	Medellín
// 144	Salvador
// 145	Taipeh
// 146	Fortaleza
// 147	Wenzhou
// 148	Santo Domingo
// 149	Brisbane
// 150	Tangshan
// 151	Sanaa
// 152	Bandung
// 153	Lusaka
// 154	Ouagadougou
// 155	Bekasi
// 156	Indore
// 157	Medan
// 158	Daegu
// 159	Omdurman
// 160	Belo Horizonte
// 161	Mekka
// 162	Hohhot
// 163	Haikou
// 164	Shaoxing
// 165	Nagoya
// 166	Mogadischu
// 167	Accra
// 168	Houston
// 169	Phnom Penh
// 170	Guayaquil
// 171	Taoyuan
// 172	Cali
// 173	Zhuhai
// 174	Paris
// 175	Liuzhou
// 176	Perth
// 177	Lomé
// 178	Almaty
// 179	Havanna
// 180	Baotou
// 181	Damaskus
// 182	Aleppo
// 183	Rawalpindi
// 184	Handan
// 185	Huizhou
// 186	Caracas
// 187	Manaus
// 188	Bursa
// 189	Weifang
// 190	Gujranwala
// 191	Minsk
// 192	Wien
// 193	Kuala Lumpur
// 194	Brazzaville
// 195	Khartum
// 196	Sapporo
// 197	Peschawar
// 198	Al-Chartum Bahri
// 199	Isfahan
// 200	Benin City
// 201	Baoding
// 202	Santa Cruz de la Sierra
// 203	Tangerang
// 204	Depok
// 205	Luoyang
// 206	Hamburg
// 207	Tainan
// 208	Multan
// 209	Curitiba
// 210	Warschau
// 211	Manila
// 212	Bukarest
// 213	Amman
// 214	Tijuana
// 215	Datong
// 216	Huaiyin
// 217	Yantai
// 218	Bhopal
// 219	Jiangmen
// 220	Adana
// 221	Ganzhou
// 222	Maracaibo
// 223	Budapest
// 224	Kigali
// 225	Hyderabad
// 226	Visakhapatnam
// 227	Pimpri-Chinchwad
// 228	Montreal
// 229	Semarang
// 230	Xianyang
// 231	Belgrad
// 232	Patna
// 233	Gaziantep
// 234	Kampala
// 235	Monrovia
// 236	Xining
// 237	Zunyi
// 238	Palembang
// 239	Vadodara
// 240	Caloocan
// 241	Conakry
// 242	Kunshan
// 243	Beirut
// 244	Ecatepec de Morelos
// 245	Barcelona
// 246	Ghaziabad
// 247	Nowosibirsk
// 248	Auckland
// 249	Phoenix
// 250	Ludhiana
// 251	Fukuoka
// 252	Daqing
// 253	Kisangani
// 254	Wuhu
// 255	Karadsch
// 256	León
// 257	Philadelphia
// 258	Agra
// 259	Schiras
// 260	Tabriz
// 261	Jekaterinburg
// 262	Puebla
// 263	Putian
// 264	Kawasaki
// 265	Kōbe
// 266	Qinhuangdao
// 267	Jilin
// 268	München
// 269	Ciudad Juárez
// 270	Recife
// 271	Daejeon
// 272	Nashik
// 273	Harare
// 274	Yiwu
// 275	Anshan
// 276	Gwangju
// 277	Quanzhou
// 278	Kyōto
// 279	Ulaanbaatar
// 280	Cixi
// 281	San Antonio
// 282	Charkiw
// 283	Davao City
// 284	Makassar
// 285	Tai’an
// 286	Goiânia
// 287	Medina
// 288	Nanyang
// 289	Faridabad
// 290	Porto Alegre
// 291	Zhanjiang
// 292	Dammam
// 293	Guadalajara
// 294	San Diego
// 295	Montevideo
// 296	Belém
// 297	Mailand
// 298	Guarulhos
// 299	Konya
// 300	Mossul
// 301	Guilin
// 302	Tangerang Selatan
// 303	Yancheng
// 304	Zaozhuang
// 305	Taizhou
// 306	Shangrao
// 307	Basra
// 308	Astana
// 309	Jiangyin
// 310	Nouakchott
// 311	Saitama
// 312	Antalya
// 313	Córdoba
// 314	Adelaide
// 315	Meerut
// 316	Kasan
// 317	Maoming
// 318	Calgary
// 319	Prag
// 320	Heze
// 321	Dallas
// 322	Rajkot
// 323	Onitsha
// 324	Yichang
// 325	Schardscha
// 326	Antananarivo
// 327	Xinxiang
// 328	Abu Dhabi
// 329	Zapopan
// 330	Nanchong
// 331	Chaozhou
// 332	Bukavu
// 333	Kalyan-Dombivli
// 334	Jieyang
// 335	Schubra al-Chaima
// 336	Huainan	1
// 337	Sofia
// 338	Changshu
// 339	Fushun
// 340	Lilongwe
// 341	Nischni Nowgorod (Gorki)
// 342	Mandalay
// 343	Barranquilla
// 344	Vasai-Virar
// 345	Suwon
// 346	Varanasi
// 347	Ghom
// 348	Hiroshima
// 349	Qingyuan
// 351	Batam
// 352	Kaifeng
// 353	Srinagar
// 354	Xianyang
// 355	Fuyang
// 356	Nelson Mandela Bay (Gqeberha)
// 357	Tscheljabinsk
// 358	Jiaxing
// 359	Anyang
// 360	Krasnojarsk
// 361	Fès
// 362	Hengyang
// 363	Ahvaz
// 364	Schymkent
// 365	Tripolis
// 366	Samara(Kujbyschew)
// 67	Jinjiang
// 368	Aurangabad
// 369	Campinas
// 370	Kananga
// 371	Bandar Lampung
// 372	Dhanbad
// 373	Naypyidaw
// 374	Yinchuan
// 375	Barquisimeto
// 376	Kaduna
// 377	Rizhao
// 378	Ufa
// 379	Monterrey
// 380	Rostow am Don
// 381	Birmingham
// 382	Dazhou
// 383	Ulsan
// 384	Amritsar
// 385	Luzhou
// 386	Omsk
// 387	Yueyang
// 388	Zhenjiang
// 389	Bischkek
// 390	Navi Mumbai
// 391	Prayagraj
// 392	Baoji
// 393	Mwanza
// 394	Maputo
// 395	Yibin
// 396	Changde
// 397	Krasnodar
// 398	Sendai
// 399	Chifeng
// 400	N’Djamena
// 401	Diyarbakır
// 402	Tanger
// 403	Köln
// 404	Huzhou
// 405	Tiflis
// 406	Suqian
// 407	Wanzhou
// 408	Bengbu
// 409	Jerewan
// 410	Yangzhou
// 411	Ranchi
// 412	Nezahualcóyotl
// 413	Haora
// 414	Lu’an
// 415	Ottawa
// 416	Yongin
// 417	Tegucigalpa
// 418	Coimbatore
// 419	São Luís
// 420	Managua
// 421	Woronesch
// 422	Zhangjiagang
// 423	Jabalpur
// 424	Gwalior
// 425	Vijayawada
// 426	Changzhi
// 427	Pingdingshan
// 428	Goyang
// 429	Bogor
// 430	Jinhua
// 431	Mersin
// 432	Zhaoqing
// 433	San José
// 434	Asmara
// 435	Perm
// 436	Jodhpur
// 437	Matola
// 438	Pointe-Noire
// 439	Shangqiu
// 440	Qiqihar
// 441	Changwon
// 442	Cartagena
// 443	Wolgograd (Stalingrad)
// 444	Niamey
// 445	Jinzhou
// 446	Tshikapa
// 447	Liaocheng
// 448	Madurai
// 449	Xinyang
// 450	Yuyao
// 451	Rui’an
// 452	Edmonton
// 453	Odessa
// 454	Raipur
// 455	Islamabad
// 456	Arequipa
// 457	Kota
// 458	Quetta
];
const datas = { months, days, germanCities, cities };
// const datas = { months, days, germanCities };
export default datas;
