import React, { useState } from "react";
import { Container, Modal, Button, Row, Col, Form } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import { auth, db } from '../Firebase';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signOut, EmailAuthProvider, linkWithCredential,updateProfile  } from "firebase/auth";
import { collection, addDoc, setDoc, doc, serverTimestamp  } from "firebase/firestore";
import VerificationModal from "./VerificationModal";
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
          "Santa Cruz - Santo Ni??o",
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
          "Santo Ni??o",
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
          "Punta Enga??o",
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
          "Arme??a",
          "Barangay I",
          "Barangay II",
          "Cerde??a",
          "Labrador",
          "Lombo",
          "Looc",
          "Mahanlud",
          "Mindanao",
          "Monta??eza",
          "Salmeron",
          "Santo Ni??o",
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
          "Ca??ang",
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
          "Santo Ni??o",
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
          "Santo Ni??o",
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
  const [selectUserType, setSelectUserType] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [selectedBaranagay, setSelectedBarangay] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [shopName, setShopName] = useState("");
  const [region, setRegion] = useState("Central Visayas");
  const [city, setCity] = useState("Cebu");
  const [zipCode, setZipCode] = useState("");
  const [specificAdd, setSpecificAdd] = useState("");
  const [file, setFile] = useState("");

  const [validated, setValidated] = useState(false);
  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  //const [fieldValue, setFieldValue] = React.useState();
  const setUpRecaptcha = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSubmit();
      }
    }, auth);
  }

  const onSubmit = () => {
    setUpRecaptcha();
    console.log(phoneNo)
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();
    signInWithPhoneNumber(auth, "+63" + phoneNo, appVerifier)
      .then((confirmationResult) => {
        const credential = EmailAuthProvider.credential(email, password);
        props.onHide();
        // SMS sent. Prompt user to type the code from the message, then sign the
        console.log(phoneNo);
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        const code = window.prompt("Enter OTP");
        confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          linkWithCredential(auth.currentUser, credential)
            .then((usercred) => {
              const user = usercred.user;
              console.log("Account linking success", user);
              updateProfile(auth.currentUser, {
                displayName: shopName + '-' + selectUserType.charAt(0).toLocaleLowerCase(), photoURL: "https://firebasestorage.googleapis.com/v0/b/agribiz-12cc6.appspot.com/o/profile%2F272229741_475164050669220_5648552245273002941_n.png?alt=media&token=781589bc-71bd-4b66-a647-59c0bff5f9e5"
              }).then(() => {
                submitOrder();
              }).catch((error) => {
                // An error occurred
              });
            }).catch((error) => {
              console.log("Account linking error", error);
            });
          const user = result.user;
          console.log("Order sent")
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        console.log(error)
        // ...
      });
  }
  async function submitOrder() {
    const docRef = await setDoc(doc(db, "users", getAuth().currentUser.uid), {
      userEmail: email,
      userID: getAuth().currentUser.uid,
      userImage: "https://firebasestorage.googleapis.com/v0/b/agribiz-12cc6.appspot.com/o/profile%2F272229741_475164050669220_5648552245273002941_n.png?alt=media&token=781589bc-71bd-4b66-a647-59c0bff5f9e5",
      userLocation: { userRegion: region, userProvince: city, userMunicipality: selectedMunicipality, userBarangay: selectedBaranagay, userZipCode: zipCode, userSpecificAddress: specificAdd },
      userDisplayName: shopName + '-' + selectUserType.charAt(0).toLocaleLowerCase(),
      userFirstName: firstName,
      userLastName: lastName,
      userPhoneNumber: '+63' + phoneNo,
      userStatus:"inactive",
      userType: selectUserType.toLowerCase(),
      userCreatedDate: serverTimestamp()
    })
      .then(
        () => {
          console.log("done");
          props.successAlert();
        }
      )
  }
  const FILE_SIZE = 1048576;
  const SUPPORTED_FORMATS = ['jpg', 'jpeg', 'png'];

  const schema = yup.object({
    selectUserType: yup.string().required(),
    userUsername: yup
      .string()
      .min(5, 'Whoops! Username too short.')
      .max(20, 'Too long')
      .required('Username is required.'),
    userFirstName: yup.string().required('First name is required.'),
    userLastName: yup.string().required('Last name is required.'),
    userEmail: yup.string().email('Invalid email address').required('Email is required.'),
    userPhoneNumber: yup
      .string()
      .min(9, 'Invalid Philippine number')
      .matches(
        /[.\- ]?9[0-9]{2}[.\- ]?[0-9]{3}[.\- ]?[0-9]{4}/,
        'Must be in 9XXXXXXXXX format'
      )
      .required('Phone number is required.'),
    userPassword: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      )
      .required('Password is required.'),
    userShopName: yup.string().required('Shop name is required.'),
    userRegion: yup.string().required(),
    userProvince: yup.string().required(),
    selectedMunicipalityOption: yup.string().required(),
    selectedBaranagayOption: yup.string().required(),
    userZIPCode: yup.number().required('ZIP code is required.'),
    userSpecificAddress: yup.string().required('Specific address is required.'),
    userProofValidity: yup
      .mixed()
      .nullable()
      .required('Proof of validity is required.')
      .test('FILE_FORMAT', 'Uploaded file has unsupported format.',
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.split('.').pop()))),
  });

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {

      e.stopPropagation();
    }
    else {
      // Code for OTP
      onSubmit();
      // setModalShow(true);
    }
    setValidated(true);
    console.log("I'm hereeee");
  }

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
            <Formik
              validationSchema={schema}
              initialValues={{
                userUsername: '',
                userFirstName: '',
                userLastName: '',
                userEmail: '',
                userPhoneNumber: '',
                userPassword: '',
                userShopName: '',
                userRegion: 'Central Visayas (Region VII)',
                userProvince: 'Cebu',
                selectedMunicipalityOption: '',
                selectedBaranagayOption: '',
                userZIPCode: '',
                userSpecificAddress: '',
                userProofValidity: null,
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col md={4}>
                      <Form.Group>
                        <Form.Select
                          name="selectedUserType"
                          value={selectUserType}
                          onChange={(e) => { setSelectUserType(e.target.value); console.log(e.target.value.charAt(0).toLocaleLowerCase());console.log(e.target.value.toLowerCase()) }}
                          style={{
                            borderColor: "#365900",
                            borderRadius: "8px",
                            boxShadow: "0 0 0 0.1rem #365900",
                          }}
                        >
                          <option selected disabled>Select User Type</option>
                          <option value="Farmer">Farmer</option>
                          <option value="Agrovet">Agrovet</option>
                        </Form.Select>
                      </Form.Group>
                      <br />
                    </Col>
                    <Col md={4}>
                      <Form.Control
                        name="userFirstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        isInvalid={!!errors.userFirstName}
                        type="text"
                        className="custom-form-control"
                        placeholder="First Name"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.userFirstName}
                      </Form.Control.Feedback>
                      <br />
                    </Col>
                    <Col md={4}>
                      <Form.Control
                        name="userLastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        isInvalid={!!errors.userLastName}
                        type="text"
                        className="custom-form-control"
                        placeholder="Last Name"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.userLastName}
                      </Form.Control.Feedback>
                      <br />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Form.Control
                        name="userEmail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        isInvalid={!!errors.userEmail}
                        type="email"
                        className="custom-form-control"
                        placeholder="Email Address"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.userEmail}
                      </Form.Control.Feedback>
                      <br />
                    </Col>
                    <Col md={4}>
                      <Form.Control
                        name="userPhoneNumber"
                        value={phoneNo}
                        onChange={e => setPhoneNo(e.target.value)}
                        isInvalid={!!errors.userPhoneNumber}
                        type="text"
                        className="custom-form-control"
                        placeholder="Phone Number"
                        required
                        maxLength={10}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.userPhoneNumber}
                      </Form.Control.Feedback>
                      <br />
                    </Col>
                    <Col md={4}>
                      <Form.Control
                        name="userPassword"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        isInvalid={!!errors.userPassword}
                        type="password"
                        className="custom-form-control"
                        placeholder="Password"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.userPassword}
                      </Form.Control.Feedback>
                      <br />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Form.Control
                        name="userShopName"
                        value={shopName}
                        onChange={e => setShopName(e.target.value)}
                        isInvalid={!!errors.userShopName}
                        type="text"
                        className="custom-form-control"
                        placeholder="Shop Name"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.userShopName}
                      </Form.Control.Feedback>
                      <br />
                    </Col>
                    <Col md={4}>
                      <Form.Control
                        name="userRegion"
                        value={region}
                        isInvalid={!!errors.userRegion}
                        type="text"
                        className="custom-form-control"
                        placeholder="Region"
                        disabled
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.userRegion}
                      </Form.Control.Feedback>
                      <br />
                    </Col>
                    <Col md={4}>
                      <Form.Control
                        name="userProvince"
                        value={city}
                        isInvalid={!!errors.userProvince}
                        type="text"
                        className="custom-form-control"
                        placeholder="Province"
                        disabled
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.userProvince}
                      </Form.Control.Feedback>
                      <br />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Form.Group>
                        <Form.Select
                          name="selectedMunicipalityOption"
                          value={selectedMunicipality}
                          onChange={(e) => setSelectedMunicipality(e.target.value)}
                          style={{
                            borderColor: "#365900",
                            borderRadius: "8px",
                            boxShadow: "0 0 0 0.1rem #365900",
                          }}
                        >
                          <option selected>Choose Municipality</option>
                          {data.municipality.map((value, key) => {
                            return (
                              <option value={value.name} key={key}>
                                {value.name}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group>
                      <br />
                    </Col>
                    <Col md={4}>
                      <Form.Group>
                        <Form.Select
                          name="selectedBarangayOption"
                          value={selectedBaranagay}
                          onChange={(e) => setSelectedBarangay(e.target.value)}
                          style={{
                            borderColor: "#365900",
                            borderRadius: "8px",
                            boxShadow: "0 0 0 0.1rem #365900",
                          }}
                        >
                          <option selected disabled>Choose Barangay</option>
                          {availableBarangay?.barangay.map((e, key) => {
                            return (
                              <option value={e.name} key={key}>
                                {e}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group>
                      <br />
                    </Col>
                    <Col md={4}>
                      <Form.Control
                        name="userZIPCode"
                        value={zipCode}
                        onChange={e => setZipCode(e.target.value)}
                        isInvalid={!!errors.userZIPCode}
                        type="number"
                        className="custom-form-control"
                        placeholder="ZIP Code"
                        required
                        onInput={(e) => {
                          e.target.value = Math.max(0, parseInt(e.target.value))
                            .toString()
                            .slice(0, 4);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.userZIPCode}
                      </Form.Control.Feedback>
                      <br />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        name="userSpecificAddress"
                        value={specificAdd}
                        onChange={e => setSpecificAdd(e.target.value)}
                        isInvalid={!!errors.userSpecificAddress}
                        type="text"
                        className="custom-form-control"
                        placeholder="Street name, bldg., etc."
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.userSpecificAddress}
                      </Form.Control.Feedback>
                    </Col>
                    <Col>
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control
                          name="userProofValidity"
                          onChange={e => setFile(e.target.file)}
                          isInvalid={!!errors.userProofValidity}
                          type="file"
                          accept="image/*"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.userProofValidity}
                        </Form.Control.Feedback>
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
                      type="submit"
                      className="border-0 custom-submit-button"
                    >
                      Add User
                    </Button>
                  </Container>
                </Form>
              )}
            </Formik>
            <br />
            <div id="recaptcha-container"></div>
            {/* <VerificationModal
              show={modalShow}
              showSuccessMessage={() => setSuccessMessage(true)}
              onHide={() => setModalShow(false)}
              dialogClassName="modal-90w"
            /> */}
          </Container>
          <br />
        </Modal.Body>
      </Modal>

    </>
  );
}
