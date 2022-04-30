import { auth } from "../Firebase";
import React, { useEffect, useState } from "react";
import { Container, Modal, Button, Row, Col, Form } from "react-bootstrap";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
export default function AddFarmerForm(props) {
  const data = {
    agribizUsers: [
      {
        userType: ["Farmer", "Agrovet"],
      },
    ],
    municipality: [
      {
        name: "Alcantara",
        barangay: [
          "Cabadiangan",
          "Cabil-isan",
          "Candabong",
          "Lawaan",
          "Manga",
          "Palanas",
          "Poblacion",
          "Polo",
          "Salagmaya",
        ],
      },
      {
        name: "Alcoy",
        barangay: [
          "Atabay",
          "Daan-Lungsod",
          "Guiwang",
          "Nug-as",
          "Pasol",
          "Poblacion",
          "Pugalo",
          "San Agustin",
        ],
      },
      {
        name: "Alegria",
        barangay: [
          "Compostela",
          "Guadalupe",
          "Legaspi",
          "Lepanto",
          "Madridejos",
          "Montpellar",
          "Poblacion",
          "Santa Filomena",
          "Valencia",
        ],
      },
      {
        name: "Aloguinsan",
        barangay: [
          "Angilan",
          "Bojo",
          "Bonbon",
          "Esperanza",
          "Kandingan",
          "Kantabogon",
          "Kawasan",
          "Olango",
          "Poblacion",
          "Punay",
          "Rosario",
          "Saksak",
          "Tampa-an",
          "Toyokon",
          "Zaragosa",
        ],
      },
      {
        name: "Argao",
        barangay: [
          "Alambijud",
          "Anajao",
          "Apo",
          "Balaas",
          "Balisong",
          "Binlod",
          "Bogo",
          "Bug-ot",
          "Bulasa",
          "Butong",
          "Calagasan",
          "Canbatug",
          "Canbanua",
          "Cansuje",
          "Capio-an",
          "Casay",
          "Catang",
          "Colawin",
          "Conalum",
          "Guiwanon",
          "Gutlang",
          "Jampang",
          "Jomgao",
          "Lamacan",
          "Langtad",
          "Langub",
          "Lapay",
          "Lengigon",
          "Linut-od",
          "Mabasa",
          "Mandilikit",
          "Mompeller",
          "Panadtaran",
          "Poblacion",
          "Sua",
          "Sumaguan",
          "Tabayag",
          "Talaga",
          "Talaytay",
          "Talo-ot",
          "Tiguib",
          "Tulang",
          "Tulic",
          "Ubaub",
          "Usmad",
        ],
      },
      {
        name: "Asturias",
        barangay: [
          "Agbanga",
          "Agtugop",
          "Bago",
          "Bairan",
          "Banban",
          "Baye",
          "Bog-o",
          "Kaluangan",
          "Lanao",
          "Langub",
          "Looc Norte",
          "Lunas",
          "Magcalape",
          "Manguiao",
          "New Bago",
          "Owak",
          "Poblacion",
          "Saksak",
          "San Isidro",
          "San Roque",
          "Santa Lucia",
          "Santa Rita",
          "Tag-amakan",
          "Tagbubonga",
          "Tubigagmanok",
          "Tubod",
          "Ubogon",
        ],
      },
      {
        name: "Badian",
        barangay: [
          "Alawijao",
          "Balhaan",
          "Banhigan",
          "Basak",
          "Basiao",
          "Bato",
          "Bugas",
          "Calancang",
          "Candiis",
          "Dagatan",
          "Dobdob",
          "Ginablan",
          "Lambug",
          "Malabago",
          "Malhiao",
          "Manduyong",
          "Matutinao",
          "Patong",
          "Poblacion",
          "Sanlagan",
          "Santicon",
          "Sohoton",
          "Sulsugan",
          "Talayong",
          "Taytaty",
          "Tigbao",
          "Tiguib",
          "Tubod",
          "Zaragosa",
        ],
      },
      {
        name: "Balamban",
        barangay: [
          "Abucayan",
          "Aliwanay",
          "Arpili",
          "Baliwagan",
          "Bayong",
          "Biasong",
          "Buanoy",
          "Cabagdalan",
          "Cabasiangan",
          "Cambuhawe",
          "Cansomoroy",
          "Cantibas",
          "Cantuod",
          "Duangan",
          "Gaas",
          "Ginatilan",
          "Hingatmonan",
          "Lamesa",
          "Liki",
          "Luca",
          "Matun-og",
          "Nangka",
          "Pondol",
          "Prenza",
          "Santa Cruz - Santo Niño",
          "Singsing",
          "Sunog",
          "Vito",
        ],
      },
      {
        name: "Bantayan",
        barangay: [
          "Atop-atop",
          "Baigad",
          "Bantigue",
          "Baod",
          "Binaobao",
          "Botigues",
          "Doong",
          "Guiwanon",
          "Hilotongan",
          "Kabac",
          "Kabangbang",
          "Kampingganon",
          "Kangkaibe",
          "Lipayran",
          "Luyongbaybay",
          "Mojon",
          "Obo-ob",
          "Patao",
          "Putian",
          "Sillon",
          "Suba",
          "Sulangan",
          "Sungko",
          "Tamiao",
          "Ticad",
        ],
      },
      {
        name: "Barili",
        barangay: [
          "Azucena",
          "Bagakay",
          "Balao",
          "Bolocboloc",
          "Budbud",
          "Bugtong Kawayan",
          "Cabcaban",
          "Cagay",
          "Campangga",
          "Candugay",
          "Dakit",
          "Giloctog",
          "Guiwanon",
          "Guibuangan",
          "Gunting",
          "Hilasgasan",
          "Japitan",
          "Kalubihan",
          "Kangdampas",
          "Luhod",
          "Lupo",
          "Luyo",
          "Maghanoy",
          "Maigang",
          "Malolos",
          "Mantalongon",
          "Mantayupan",
          "Mayana",
          "Minolos",
          "Nabunturan",
          "Nasipit",
          "Pancil",
          "Pangpang",
          "Paril",
          "Patupat",
          "Poblacion",
          "San Rafael",
          "Santa Ana",
          "Sayaw",
          "Tal-ot",
          "Tubod",
          "Vito",
        ],
      },
      {
        name: "Bogo",
        barangay: [
          "Anonang Norte",
          "Anonang Sur",
          "Banban",
          "Binabag",
          "Bungtod",
          "Carbon",
          "Cayang",
          "Cogon",
          "Dakit",
          "Don Pedro Rodriguez",
          "Gairan",
          "Guadalupe",
          "La Paz",
          "La Purisima Concepcion",
          "Libertad",
          "Lourdes",
          "Malingin",
          "Marangog",
          "Nailon",
          "Odlot",
          "Pandan",
          "Polambato",
          "Sambag",
          "San Vicente",
          "Santo Niño",
          "Santo Rosario",
          "Siocon",
          "Sudlonon",
          "Taytayan",
        ],
      },
      {
        name: "Boljoon",
        barangay: [
          "Arbor",
          "Baclayan",
          "El Pardo",
          "Granada",
          "Lower Becerril",
          "Lunop",
          "Nangka",
          "Poblacion",
          "San Antonio",
          "South Granada",
          "Upper Becerril",
        ],
      },
      {
        name: "Borbon",
        barangay: [
          "Bagacay",
          "Bili",
          "Bingay",
          "Bongdo",
          "Bongdo Gua",
          "Bongoyan",
          "Cadaruhan",
          "Cajel",
          "Campusong",
          "Clavera",
          "Don Gregorio Antigua",
          "Laaw",
          "Lugo",
          "Managase",
          "Poblacion",
          "Sagay",
          "San Jose",
          "Tabunan",
          "Tagnucan",
        ],
      },
      {
        name: "Carcar",
        barangay: [
          "Bolinawan",
          "Buenavista",
          "Calidngan",
          "Can-asujan",
          "Guadalupe",
          "Liburon",
          "Napo",
          "Ocana",
          "Perrelos",
          "Poblacion I",
          "Poblacion II",
          "Poblacion III",
          "Tuyom",
          "Valencia",
          "Valladolid",
        ],
      },
      {
        name: "Carmen",
        barangay: [
          "Baring",
          "Cantipay",
          "Cantukong",
          "Cantumog",
          "Caursan",
          "Cogon East",
          "Cogon West",
          "Corte",
          "Dawis Norte",
          "Dawis Sur",
          "Hagnaya",
          "Ipil",
          "Lanipga",
          "Liboron",
          "Lower Natimao-an",
          "Luyang",
          "Poblacion",
          "Puente",
          "Sac-on",
          "Triumfo",
          "Upper Natimaoan",
        ],
      },
      {
        name: "Catmon",
        barangay: [
          "Agsuwao",
          "Amancion",
          "Anapog",
          "Bactas",
          "Basak",
          "Binongkalan",
          "Bongyas",
          "Cabungaan",
          "Cambangkaya",
          "Can-ibuang",
          "Catmondaan",
          "Corazon",
          "Duyan",
          "Flores",
          "Ginabucan",
          "Macaas",
          "Panalipan",
          "San Jose Poblacion",
          "Tabili",
          "Tinabyonan",
        ],
      },
      {
        name: "Cebu City",
        barangay: [
          "Adlaon",
          "Agsungot",
          "Apas",
          "Babag",
          "Bacayan",
          "Banilad",
          "Basak Pardo",
          "Basak San Nicolas",
          "Binaliw",
          "Bonbon",
          "Budlaan",
          "Buhisan",
          "Bulacao",
          "Buot-Taup Pardo",
          "Busay",
          "Calamba",
          "Cambinocot",
          "Camputhaw",
          "Capitol Site",
          "Carreta",
          "Central",
          "Cogon Pardo",
          "Cogon Ramos",
          "Day-as",
          "Duljo",
          "Ermita",
          "Guadalupe",
          "Guba",
          "Hippodromo",
          "Inayawan",
          "Kalubihan",
          "Kalunasan",
          "Kamagayan",
          "Kasambagan",
          "Kinasang-an Pardo",
          "Labangon",
          "Lahug",
          "Lorega",
          "Lusaran",
          "Luz",
          "Mabini",
          "Mabolo",
          "Malubog",
          "Mambaling",
          "Pahina Central",
          "Pahina San Nicolas",
          "Pamutan",
          "Pardo",
          "Pari-an",
          "Paril",
          "Pit-on",
          "Pulangbato",
          "Pung-ol-Sibugay",
          "Punta Princesa",
          "Quiot Pardo",
          "Sambag I",
          "Sambag II",
          "San Antonio",
          "San Jose",
          "San Nicolas Central",
          "San Roque",
          "Santa Cruz",
          "Sapangdaku",
          "Sawang Calero",
          "Sinsin",
          "Sirao",
          "Suba Poblacion",
          "Sudlon I",
          "Sudlon II",
          "T. Padilla",
          "Tabunan",
          "Tagbao",
          "Talamban",
          "Taptap",
          "Tejero",
          "Tinago",
          "Tisa",
          "To-ong Pardo",
          "Zapatera",
        ],
      },
      {
        name: "Compostela",
        barangay: [
          "Bagalnga",
          "Basak",
          "Buluang",
          "Cabadiangan",
          "Cambayog",
          "Canamucan",
          "Cogon",
          "Dapdap",
          "Estaca",
          "Lupa",
          "Magay",
          "Mulao",
          "Panangban",
          "Poblacion",
          "Tag-ube",
          "Tamiao",
          "Tubigan",
        ],
      },
      {
        name: "Consolacion",
        barangay: [
          "Cabangahan",
          "Cansaga",
          "Casili",
          "Danglag",
          "Garing",
          "Jugan",
          "Lamac",
          "Lanipga",
          "Nangka",
          "Panas",
          "Panoypoy",
          "Pitogo",
          "Poblacion Occidental",
          "Poblacion Oriental",
          "Polog",
          "Pulpogan",
          "Sacsac",
          "Tayud",
          "Tilhaong",
          "Tolotolo",
          "Tugbongan",
        ],
      },
      {
        name: "Cordova",
        barangay: [
          "Alegria",
          "Bangbang",
          "Buagsong",
          "Catarman",
          "Cogon",
          "Dapitan",
          "Day-as",
          "Gabi",
          "Gilutongan",
          "Ibabao",
          "Pilipog",
          "Poblacion",
          "San Miguel",
        ],
      },
      {
        name: "Daanbantayan",
        barangay: [
          "Aguho",
          "Bagay",
          "Bakhawan",
          "Bateria",
          "Bitoon",
          "Calape",
          "Carnaza",
          "Dalingding",
          "Lanao",
          "Logon",
          "Malbago",
          "Malingin",
          "Maya",
          "Pajo",
          "Paypay",
          "Poblacion",
          "Talisay",
          "Tapilon",
          "Tinubdan",
          "Tominjao",
        ],
      },
      {
        name: "Dalaguete",
        barangay: [
          "Ablayan",
          "Babayongan",
          "Balud",
          "Banhigan",
          "Bulak",
          "Caleriohan",
          "Caliongan",
          "Casay",
          "Catolohan",
          "Cawayan",
          "Consolacion",
          "Coro",
          "Dugyan",
          "Dumalan",
          "Jolomaynon",
          "Lanao",
          "Langkas",
          "Lumbang",
          "Malones",
          "Maloray",
          "Mananggal",
          "Manlapay",
          "Mantalgongon",
          "Nalhub",
          "Obo",
          "Obong",
          "Panas",
          "Sacsac",
          "Salug",
          "Tabon",
          "Tapun",
          "Tuba",
        ],
      },
      {
        name: "Danao",
        barangay: [
          "Baliang",
          "Bayabas",
          "Binaliw",
          "Cabungahan",
          "Cagat-Lamac",
          "Cahumayan",
          "Cambanay",
          "Cambubho",
          "Cogon-Cruz",
          "Danasan",
          "Dungga",
          "Dunggoan",
          "Guinacot",
          "Guinsay",
          "Ibo",
          "Langosig",
          "Lawaan",
          "Licos",
          "Looc",
          "Magtagobtob",
          "Malapoc",
          "Manlayag",
          "Masaba",
          "Maslog",
          "Nangka",
          "Oguis",
          "Pili",
          "Poblacion",
          "Quisol",
          "Sabang",
          "Sacsac",
          "Sandayong Norte",
          "Sandayong Sur",
          "Santa Rosa",
          "Santican",
          "Sibacan",
          "Suba",
          "Taboc",
          "Taytay",
          "Togonon",
          "Tuburan Sur",
        ],
      },
      {
        name: "Dumanjug",
        barangay: [
          "Balaygtiki",
          "Bitoon",
          "Bulak",
          "Bullogan",
          "Calaboon",
          "Camboang",
          "Candabong",
          "Cogon",
          "Cotcoton",
          "Doldol",
          "Ilaya",
          "Kabalaasnan",
          "Kabatbatan",
          "Kambanog",
          "Kang-actol",
          "Kanghumaod",
          "Kanguha",
          "Kantangkas",
          "Kanyuko",
          "Kolabtingon",
          "Lamak",
          "Lawaan",
          "Manlapay",
          "Masa",
          "Matalao",
          "Paculob",
          "Panlaan",
          "Pawa",
          "Poblacion Central",
          "Poblacion Looc",
          "Poblacion Sima",
          "Tangil",
          "Tapon",
          "Tubod-Bitoon",
          "Tubod-Dugoan",
        ],
      },
      {
        name: "Ginatilan",
        barangay: [
          "Anao",
          "Cagsing",
          "Calabawan",
          "Cambagte",
          "Campisong",
          "Canorong",
          "Guiwanon",
          "Looc",
          "Malatbo",
          "Mangaco",
          "Palanas",
          "Poblacion",
          "Salamanca",
          "San Roque",
        ],
      },
      {
        name: "Lapu-Lapu",
        barangay: [
          "Agus",
          "Babag",
          "Bankal",
          "Baring",
          "Basak",
          "Buaya",
          "Calawisan",
          "Canjulao",
          "Caubian",
          "Cawhagan",
          "Caw-oy",
          "Gun-ob",
          "Ibo",
          "Looc",
          "Mactan",
          "Maribago",
          "Marigondon",
          "Pajac",
          "Pajo",
          "Pangan-an",
          "Poblacion",
          "Punta Engaño",
          "Pusok",
          "Sabang",
          "San Vincente",
          "Santa Rosa",
          "Subabasbas",
          "Talima",
          "Tingo",
          "Tungasan",
        ],
      },
      {
        name: "Liloan",
        barangay: [
          "Cabadiangan",
          "Calero",
          "Catarman",
          "Cotcot",
          "Jubay",
          "Lataban",
          "Mulao",
          "Poblacion",
          "San Roque",
          "San Vicente",
          "Santa Cruz",
          "Tabla",
          "Tayud",
          "Yati",
        ],
      },
      {
        name: "Madridejos",
        barangay: [
          "Bunakan",
          "Kangwayan",
          "Kaongkod",
          "Kodia",
          "Maalat",
          "Malbago",
          "Mancilang",
          "Pili",
          "Poblacion",
          "San Agustin",
          "Tabagak",
          "Talangan",
          "Tarong",
          "Tugas",
        ],
      },
      {
        name: "Malabuyoc",
        barangay: [
          "Armeña",
          "Barangay I",
          "Barangay II",
          "Cerdeña",
          "Labrador",
          "Lombo",
          "Looc",
          "Mahanlud",
          "Mindanao",
          "Montañeza",
          "Salmeron",
          "Santo Niño",
          "Sorsogon",
          "Tolosa",
        ],
      },
      {
        name: "Mandaue",
        barangay: [
          "Alang-alang",
          "Bakilid",
          "Banilad",
          "Basak",
          "Cabancalan",
          "Cambaro",
          "Canduman",
          "Casili",
          "Casuntingan",
          "Centro",
          "Cubacub",
          "Guizo",
          "Ibabao-Estancia",
          "Jagobiao",
          "Labogon",
          "Looc",
          "Maguikay",
          "Mantuyong",
          "Opao",
          "Pagsabungan",
          "Pakna-an",
          "Subangdaku",
          "Tabok",
          "Tawason",
          "Tingub",
          "Tipolo",
          "Umapad",
        ],
      },
      {
        name: "Medellin",
        barangay: [
          "Antipolo",
          "Canhabagat",
          "Caputatan Norte",
          "Caputatan Sur",
          "Curva",
          "Daanlungsod",
          "Dalingding Sur",
          "Dayhagon",
          "Don Virgilio Gonzales",
          "Gibitngil",
          "Kawit",
          "Lamintak Norte",
          "Lamintak Sur",
          "Luy-a",
          "Maharuhay",
          "Mahawak",
          "Panugnawan",
          "Poblacion",
          "Tindog",
        ],
      },
      {
        name: "Minglanilla",
        barangay: [
          "Cadulawan",
          "Calajo-an",
          "Camp 7",
          "Camp 8",
          "Cuanos",
          "Guindaruhan",
          "Linao",
          "Manduang",
          "Pakigne",
          "Poblacion Ward I",
          "Poblacion Ward II",
          "Poblacion Ward III",
          "Poblacion Ward IV",
          "Tubod",
          "Tulay",
          "Tunghaan",
          "Tungkil",
          "Tungkop",
          "Vito",
        ],
      },
      {
        name: "Moalboal",
        barangay: [
          "Agbalanga",
          "Bala",
          "Balabagon",
          "Basdiot",
          "Batadbatad",
          "Bugho",
          "Buguil",
          "Busay",
          "Lanao",
          "Poblacion East",
          "Poblacion West",
          "Saavedra",
          "Tomonoy",
          "Tuble",
          "Tunga",
        ],
      },
      {
        name: "Naga",
        barangay: [
          "Alfaco",
          "Bairan",
          "Balirong",
          "Cabungahan",
          "Cantao-an",
          "Central Poblacion",
          "Cogon",
          "Colon",
          "East Poblacion",
          "Inayagan",
          "Inoburan",
          "Jaguimit",
          "Lanas",
          "Langtad",
          "Lutac",
          "Mainit",
          "Mayana",
          "Naalad",
          "North Poblacion",
          "Pangdan",
          "Patag",
          "South Poblacion",
          "Tagjaguimit",
          "Tangke",
          "Tinaan",
          "Tuyan",
          "Uling",
          "West Poblacion",
        ],
      },
      {
        name: "Oslob",
        barangay: [
          "Alo",
          "Bangcogon",
          "Bonbon",
          "Calumpang",
          "Cañang",
          "Canangca-an",
          "Cansalo-ay",
          "Can-ukban",
          "Daanlungsod",
          "Gawi",
          "Hagdan",
          "Lagunde",
          "Looc",
          "Luka",
          "Mainit",
          "Manlum",
          "Nueva Caceras",
          "Poblacion",
          "Pungtod",
          "Tan-awan",
          "Tumalog",
        ],
      },
      {
        name: "Pilar",
        barangay: [
          "Biasong",
          "Cawit",
          "Dapdap",
          "Esperanza",
          "Imelda",
          "Lanao",
          "Lower Poblacion",
          "Moabog",
          "Montserrat",
          "San Isidro",
          "San Juan",
          "Upper Poblacion",
          "Villahermosa",
        ],
      },
      {
        name: "Pinamungajan",
        barangay: [
          "Anislag",
          "Anopog",
          "Binabag",
          "Buhinhtubig",
          "Busay",
          "Butong",
          "Cabiangon",
          "Camugao",
          "Duangan",
          "Guimbawian",
          "Lamac",
          "Lut-od",
          "Mangoto",
          "Opao",
          "Pandacan",
          "Poblacion",
          "Punod",
          "Rizal",
          "Sacsac",
          "Sambagon",
          "Sibago",
          "Tajao",
          "Tangub",
          "Tanibag",
          "Tupas",
          "Tutay",
        ],
      },
      {
        name: "Poro",
        barangay: [
          "Adela",
          "Altavista",
          "Cagcagan",
          "Cansabusab",
          "Daan Paz",
          "Eastern Poblacion",
          "Esperanza",
          "Libertad",
          "Mabini",
          "Mercedes",
          "Pagsa",
          "Paz",
          "Rizal",
          "San Jose",
          "Santa Rita",
          "Teguis",
          "Western Poblacion",
        ],
      },
      {
        name: "Ronda",
        barangay: [
          "Butong",
          "Can-abuhon",
          "Canduling",
          "Cansalonoy",
          "Cansayahon",
          "Ilaya",
          "Langin",
          "Libo-o",
          "Malalay",
          "Palanas",
          "Poblacion",
          "Santa Cruz",
          "Tupas",
          "Vive",
        ],
      },
      {
        name: "Samboan",
        barangay: [
          "Basak",
          "Bonbon",
          "Bulangsuran",
          "Calatagan",
          "Cambigong",
          "Camburoy",
          "Canorong",
          "Colase",
          "Dalahikan",
          "Jumangpas",
          "Monteverde",
          "Poblacion",
          "San Sebastian",
          "Suba",
          "Tangbo",
        ],
      },
      {
        name: "San Fernando",
        barangay: [
          "Balud",
          "Balungag",
          "Basak",
          "Bugho",
          "Cabatbatan",
          "Greenhills",
          "Ilaya",
          "Lantawan",
          "Liburon",
          "Magsico",
          "Panadtaran",
          "Pitalo",
          "Poblacion North",
          "Poblacion South",
          "San Isidro",
          "Sangat",
          "Tabionan",
          "Tananas",
          "Tinubdan",
          "Tonggo",
          "Tubod",
        ],
      },
      {
        name: "San Francisco",
        barangay: [
          "Cabunga-an",
          "Campo",
          "Consuelo",
          "Esperanza",
          "Himensulan",
          "Montealegre",
          "Northern Poblacion",
          "San Isidro",
          "Santa Cruz",
          "Santiago",
          "Sonog",
          "Southern Poblacion",
          "Unidos",
          "Union",
          "Western Poblacion",
        ],
      },
      {
        name: "San Remigio",
        barangay: [
          "Anapog",
          "Argawanon",
          "Bagtic",
          "Bancasan",
          "Batad",
          "Busogon",
          "Calambua",
          "Canagahan",
          "Dapdap",
          "Gawaygaway",
          "Hagnaya",
          "Kayam",
          "Kinawahan",
          "Lamusan",
          "Lawis",
          "Libaong",
          "Looc",
          "Luyang",
          "Mano",
          "Poblacion",
          "Punta",
          "Sab-a",
          "San Miguel",
          "Tacup",
          "Tambongon",
          "To-ong",
          "Victoria",
        ],
      },
      {
        name: "Santa Fe",
        barangay: [
          "Balidbid",
          "Hagdan",
          "Hilantagaan",
          "Kinatarkan",
          "Langub",
          "Maricaban",
          "Okoy",
          "Poblacion",
          "Pooc",
          "Talisay",
        ],
      },
      {
        name: "Santander",
        barangay: [
          "Bunlan",
          "Cabutongan",
          "Candamiang",
          "Canlumacad",
          "Liloan",
          "Lip-tong",
          "Looc",
          "Pasil",
          "Poblacion",
          "Talisay",
        ],
      },
      {
        name: "Sibonga",
        barangay: [
          "Abugon",
          "Bae",
          "Bagacay",
          "Bahay",
          "Banlot",
          "Basak",
          "Bato",
          "Cagay",
          "Can-aga",
          "Candaguit",
          "Cantolaroy",
          "Dugoan",
          "Guimbangco-an",
          "Lamacan",
          "Libo",
          "Lindogon",
          "Magcagong",
          "Manatad",
          "Mangyan",
          "Papan",
          "Poblacion",
          "Sabang",
          "Sayao",
          "Simala",
          "Tubod",
        ],
      },
      {
        name: "Sogod",
        barangay: [
          "Ampongol",
          "Bagakay",
          "Bagatayam",
          "Bawo",
          "Cabalawan",
          "Cabangahan",
          "Calumboyan",
          "Dakit",
          "Damolog",
          "Ibabao",
          "Liki",
          "Lubo",
          "Mohon",
          "Nahus-an",
          "Pansoy",
          "Poblacion",
          "Tabunok",
          "Takay",
        ],
      },
      {
        name: "Tabogon",
        barangay: [
          "Alang-alang",
          "Caduawan",
          "Camoboan",
          "Canaocanao",
          "Combado",
          "Daantabogon",
          "Ilihan",
          "Kal-anan",
          "Labangon",
          "Libjo",
          "Loong",
          "Mabuli",
          "Managase",
          "Manlagtang",
          "Maslog",
          "Pio",
          "Poblacion",
          "Salag",
          "Sambag",
          "San Isidro",
          "San Vicente",
          "Somosa",
          "Taba-ao",
          "Tapul",
        ],
      },
      {
        name: "Tabuelan",
        barangay: [
          "Bongon",
          "Dalid",
          "Kanlim-ao",
          "Kanluhangon",
          "Kantubaon",
          "Mabunao",
          "Maravilla",
          "Olivo",
          "Poblacion",
          "Tabunok",
          "Tigbawan",
          "Villahermosa",
        ],
      },
      {
        name: "Talisay",
        barangay: [
          "Biasong",
          "Bulacao",
          "Cadulawan",
          "Camp IV",
          "Cansojong",
          "Dumlog",
          "Jaclupan",
          "Lagtang",
          "Lawaan I",
          "Lawaan II",
          "Lawaan III",
          "Linao",
          "Maghaway",
          "Manipis",
          "Mohon",
          "Poblacion",
          "Pooc",
          "San Isidro",
          "San Roque",
          "Tabunoc",
          "Tangke",
          "Tapul",
        ],
      },
      {
        name: "Toledo",
        barangay: [
          "Awihao",
          "Bagakay",
          "Bato",
          "Biga",
          "Bulongan",
          "Bunga",
          "Cabitoonan",
          "Calongcalong",
          "Cambang-ug",
          "Camp 8",
          "Canlumampao",
          "Cantabaco",
          "Capitan Claudio",
          "Carmen",
          "Daanglungsod",
          "Don Andres Soriano",
          "Dumlog",
          "Gen. Climaco",
          "Ibo",
          "Ilihan",
          "Juan Climaco, Sr.",
          "Landahan",
          "Loay",
          "Luray II",
          "Matab-ang",
          "Media Once",
          "Pangamihan",
          "Poblacion",
          "Poog",
          "Putingbato",
          "Sagay",
          "Sam-ang",
          "Sangi",
          "Santo Niño",
          " Subayon",
          "Talavera",
          "Tubod",
          "Tungkay",
        ],
      },
      {
        name: "Tuburan",
        barangay: [
          "Alegria",
          "Amatugan",
          "Antipolo",
          "Apalan",
          "Bagasawe",
          "Bangkito",
          "Barangay I",
          "Barangay II",
          "Barangay III",
          "Barangay IV",
          "Barangay V",
          "Barangay VI",
          "Barangay VII",
          "Barangay VIII",
          "Bulwang",
          "Caridad",
          "Carmelo",
          "Cogon",
          "Colonia",
          "Daan Lungsod",
          "Fortaliza",
          "Ga-ang",
          "Gimama-a",
          "Jagbuaya",
          "Kabangkalan",
          "Kabkaban",
          "Kagba-o",
          "Kalangahan",
          "Kamansi",
          "Kampoot",
          "Kan-an",
          "Kanlunsing",
          "Kansi",
          "Kaorasan",
          "Libo",
          "Lusong",
          "Macupa",
          "Mag-alwa",
          "Mag-antoy",
          "Mag-atubang",
          "Maghan-ay",
          "Mangga",
          "Marmol",
          "Molobolo",
          "Montealegre",
          "Putat",
          "San Juan",
          "Sandayong",
          "Santo Niño",
          "Siotes",
          "Sumon",
        ],
      },
      {
        name: "Tudela",
        barangay: [
          "Buenavista",
          "Calmante",
          "General",
          "McArthur",
          "Northern Poblacion",
          "Puertobello",
          "Santander",
          "Secante Bag-o",
          "Souther Poblacion",
          "Villahermosa",
        ],
      },
    ],
  };

  const [selectUserType, setSelectUserType] = useState();
  const [userName, setUserName] = useState();
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPhoneNumber, setUserPhoneNumber] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userShopName, setUserShopName] = useState();
  const [selectedMunicipality, setSelectedMunicipality] = useState();
  const [selectedBaranagay, setSelectedBarangay] = useState();
  const [userZIPCode, setUserZIPCode] = useState();
  const [userSpecificAdd, setUserSpecificAdd] = useState();
  const [userFileAttach, setUserFileAttch] = useState();

  const addUser = () => {
    console.log(selectUserType);
    console.log(userName);
    console.log(userFirstName);
    console.log(userLastName);
    console.log(userEmail);
    console.log(userPhoneNumber);
    console.log(userPassword);
    console.log(userShopName);
    console.log(selectedMunicipality);
    console.log(selectedBaranagay);
    console.log(userZIPCode);
    console.log(userSpecificAdd);
    console.log(userFileAttach);
    let type = ""
    if (selectUserType === "Farmer")
       type = userShopName + "-f"
    else
       type = userShopName + "-a"
  createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {


      updateProfile(auth.currentUser, {
        displayName: type,
        photoURL:"https://firebasestorage.googleapis.com/v0/b/agribiz-12cc6.appspot.com/o/profile%2F272229741_475164050669220_5648552245273002941_n.png?alt=media&token=781589bc-71bd-4b66-a647-59c0bff5f9e5"
      }).then(() => {
        // Profile updated!
        console.log("Account create");
        console.log(userCredential);
        props.onHide()
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

}

useEffect(()=>{
  console.log(auth.currentUser)
},[])

// Display all barangays based on the selected municipality
const availableBarangay = data.municipality.find(
  (c) => c.name === selectedMunicipality
);

return (
  <>
    <Modal
      {...props}
      size="lg"
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{ borderRadius: "400px" }}>
        <Container>
          <br />
          <h4 className="mb-4" style={{ color: "#5E3819" }}>
            Add a User
          </h4>
          <Row>
            <Col md={4}>
              <Form>
                <Form.Group>
                  <Form.Select
                    id="selectedUserType"
                    value={selectUserType}
                    onChange={(e) => setSelectUserType(e.target.value)}
                    style={{
                      borderColor: "#365900",
                      borderRadius: "8px",
                      boxShadow: "0 0 0 0.1rem #365900",
                    }}
                  >
                    <option>--Select User Type--</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Agrovet">Agrovet</option>
                  </Form.Select>
                </Form.Group>
              </Form>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Control
                id="fUsername"
                type="text"
                className="custom-form-control"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              />
              <br />
            </Col>
            <Col md={4}>
              <Form.Control
                id=""
                type="text"
                className="custom-form-control"
                placeholder="First Name"
                onChange={(e) => setUserFirstName(e.target.value)}
              />
              <br />
            </Col>
            <Col md={4}>
              <Form.Control
                id=""
                type="text"
                className="custom-form-control"
                placeholder="Last Name"
                onChange={(e) => setUserLastName(e.target.value)}
              />
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Control
                id=""
                type="email"
                className="custom-form-control"
                placeholder="Email Address"
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <br />
            </Col>
            <Col md={4}>
              <Form.Control
                id=""
                type="number"
                className="custom-form-control"
                placeholder="Phone Number"
                onChange={(e) => setUserPhoneNumber(e.target.value)}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 11);
                }}
              />
              <br />
            </Col>
            <Col md={4}>
              <Form.Control
                id=""
                type="password"
                className="custom-form-control"
                placeholder="Password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Control
                id=""
                type="text"
                className="custom-form-control"
                placeholder="Shop Name"
                onChange={(e) => setUserShopName(e.target.value)}
              />
              <br />
            </Col>
            <Col md={4}>
              <Form.Control
                id=""
                type="text"
                className="custom-form-control"
                placeholder="Region"
                value="Central Visayas (Region VII)"
                disabled
              />
              <br />
            </Col>
            <Col md={4}>
              <Form.Control
                id=""
                type="text"
                className="custom-form-control"
                placeholder="Province"
                value="Cebu"
                disabled
              />
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form>
                <Form.Group>
                  <Form.Select
                    id="selectedMunicipalityOption"
                    value={selectedMunicipality}
                    onChange={(e) => setSelectedMunicipality(e.target.value)}
                    style={{
                      borderColor: "#365900",
                      borderRadius: "8px",
                      boxShadow: "0 0 0 0.1rem #365900",
                    }}
                  >
                    <option>--Choose Municipality--</option>
                    {data.municipality.map((value, key) => {
                      return (
                        <option value={value.name} key={key}>
                          {value.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
              </Form>
              <br />
            </Col>
            <Col md={4}>
              <Form>
                <Form.Group>
                  <Form.Select
                    id="selectedBarangayOption"
                    value={selectedBaranagay}
                    onChange={(e) => setSelectedBarangay(e.target.value)}
                    style={{
                      borderColor: "#365900",
                      borderRadius: "8px",
                      boxShadow: "0 0 0 0.1rem #365900",
                    }}
                  >
                    <option>--Choose Barangay--</option>
                    {availableBarangay?.barangay.map((e, key) => {
                      return (
                        <option value={e.name} key={key}>
                          {e}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
              </Form>
              <br />
            </Col>
            <Col md={4}>
              <Form.Control
                id=""
                type="number"
                className="custom-form-control"
                placeholder="ZIP Code"
                onChange={(e) => setUserZIPCode(e.target.value)}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 4);
                }}
              />
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                id=""
                type="text"
                className="custom-form-control"
                placeholder="Street name, bldg., etc."
                onChange={(e) => setUserSpecificAdd(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file"
                  onChange={e => setUserFileAttch(e.target.files[0])}
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Container style={{ textAlign: "right" }}>
            <Button
              className="border-0 custom-close-button"
              onClick={props.onHide}
            >
              Close
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              className="border-0 custom-submit-button"
              onClick={addUser}
            >
              Add User
            </Button>
          </Container>
          <br />
        </Container>
      </Modal.Body>
    </Modal>
  </>
);
}
