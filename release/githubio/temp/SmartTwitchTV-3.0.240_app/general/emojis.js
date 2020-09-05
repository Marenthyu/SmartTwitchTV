/*
 * Copyright (c) 2017-2020 Felipe de Leon <fglfgl27@gmail.com>
 *
 * This file is part of SmartTwitchTV <https://github.com/fgl27/SmartTwitchTV>
 *
 * SmartTwitchTV is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * SmartTwitchTV is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with SmartTwitchTV.  If not, see <https://github.com/fgl27/SmartTwitchTV/blob/master/LICENSE>.
 *
 */

//Used as based https://kevinfaguiar.github.io/vue-twemoji-picker/docs/emoji-datasets/
//https://github.com/kevinfaguiar/vue-twemoji-picker/tree/master/emoji-data/en
//https://emojipedia.org/
//But removed not working or not needed as is too much
var emojis_string = '[{"unicode":"😀","tags":"grin","id":0},{"unicode":"😃","tags":"smile","id":1},{"unicode":"😄","tags":"smile2","id":2},{"unicode":"😁","tags":"smile3","id":3},{"unicode":"😆","tags":"satisfied","id":4},{"unicode":"😅","tags":"sweat","id":5},{"unicode":"🤣","tags":"rolling","id":6},{"unicode":"😂","tags":"tear","id":7},{"unicode":"🙂","tags":"smile4","id":8},{"unicode":"🙃","tags":"smile-upside-down","id":9},{"unicode":"😉","tags":"wink","id":10},{"unicode":"😊","tags":"smile-blush","id":11},{"unicode":"😇","tags":"angel","id":12},{"unicode":"🥰","tags":"adore","id":13},{"unicode":"😍","tags":"smile-love","id":14},{"unicode":"🤩","tags":"smile-star","id":15},{"unicode":"😘","tags":"kiss","id":16},{"unicode":"😗","tags":"kiss2","id":17},{"unicode":"☺️","tags":"relaxed","id":18},{"unicode":"😚","tags":"kiss3","id":19},{"unicode":"😙","tags":"kis4","id":20},{"unicode":"😋","tags":"delicious","id":21},{"unicode":"😛","tags":"tongue","id":22},{"unicode":"😜","tags":"tongue-wink","id":23},{"unicode":"🤪","tags":"goofy","id":24},{"unicode":"😝","tags":"tongue-><","id":25},{"unicode":"🤑","tags":"face-money","id":26},{"unicode":"🤗","tags":"hugging","id":27},{"unicode":"🤭","tags":"whoops","id":28},{"unicode":"🤫","tags":"quiet","id":29},{"unicode":"🤔","tags":"thinking","id":30},{"unicode":"🤐","tags":"zipper","id":31},{"unicode":"🤨","tags":"skeptic","id":32},{"unicode":"😑","tags":"unexpressive","id":33},{"unicode":"😶","tags":"silent","id":34},{"unicode":"😏","tags":"smirk","id":35},{"unicode":"😒","tags":"unhappy","id":36},{"unicode":"🙄","tags":"eyeroll","id":37},{"unicode":"😬","tags":"grimace","id":38},{"unicode":"🤥","tags":"pinocchio","id":39},{"unicode":"😌","tags":"relieved","id":40},{"unicode":"😔","tags":"pensive","id":41},{"unicode":"😪","tags":"sleep","id":42},{"unicode":"🤤","tags":"drooling-face","id":43},{"unicode":"😴","tags":"sleep-face","id":44},{"unicode":"😷","tags":"cold-face","id":45},{"unicode":"🤒","tags":"sick-face","id":46},{"unicode":"🤕","tags":"bandage-face","id":47},{"unicode":"🤢","tags":"nauseated-face","id":48},{"unicode":"🤮","tags":"sick-face","id":49},{"unicode":"🤧","tags":"sneeze","id":50},{"unicode":"🥵","tags":"feverish","id":51},{"unicode":"🥶","tags":"blue-faced","id":52},{"unicode":"🥴","tags":"intoxicated","id":53},{"unicode":"😵","tags":"dizzy","id":54},{"unicode":"🤯","tags":"mind blown","id":55},{"unicode":"🤠","tags":"cowboy","id":56},{"unicode":"🥳","tags":"celebration","id":57},{"unicode":"😎","tags":"cool-face","id":58},{"unicode":"🤓","tags":"cool","id":59},{"unicode":"🧐","tags":"stuffy","id":60},{"unicode":"😕","tags":"confused","id":61},{"unicode":"😟","tags":"worried","id":62},{"unicode":"🙁","tags":"frown","id":63},{"unicode":"☹️","tags":"frown","id":64},{"unicode":"😮","tags":"mouth-open","id":65},{"unicode":"😯","tags":"surprised","id":66},{"unicode":"😲","tags":"astonished","id":67},{"unicode":"😳","tags":"dazed","id":68},{"unicode":"🥺","tags":"puppy eyes","id":69},{"unicode":"😦","tags":"frown","id":70},{"unicode":"😧","tags":"anguished","id":71},{"unicode":"😨","tags":"fearful","id":72},{"unicode":"😰","tags":"fearful2","id":73},{"unicode":"😥","tags":"disappointed","id":74},{"unicode":"😢","tags":"cry-face","id":75},{"unicode":"😭","tags":"cry-face2","id":76},{"unicode":"😱","tags":"fear-face","id":77},{"unicode":"😖","tags":"confounded","id":78},{"unicode":"😣","tags":"persevere","id":79},{"unicode":"😞","tags":"disappointed","id":80},{"unicode":"😓","tags":"cold","id":81},{"unicode":"😩","tags":"weary","id":82},{"unicode":"😫","tags":"tired","id":83},{"unicode":"😤","tags":"triumph","id":84},{"unicode":"😡","tags":"angry","id":85},{"unicode":"😠","tags":"mad","id":86},{"unicode":"🤬","tags":"swearing","id":87},{"unicode":"😈","tags":"devil","id":88},{"unicode":"👿","tags":"demon","id":89},{"unicode":"💀","tags":"death","id":90},{"unicode":"☠️","tags":"crossbones","id":91},{"unicode":"💩","tags":"poop","id":92},{"unicode":"🤡","tags":"clown","id":93},{"unicode":"👹","tags":"creature","id":94},{"unicode":"👺","tags":"creature2","id":95},{"unicode":"👻","tags":"ghost","id":96},{"unicode":"👾","tags":"alien","id":97},{"unicode":"🤖","tags":"robot","id":98},{"unicode":"😺","tags":"cat-face","id":99},{"unicode":"😸","tags":"cat-smile","id":100},{"unicode":"😹","tags":"cat-tear","id":101},{"unicode":"😻","tags":"cat-heart","id":102},{"unicode":"😼","tags":"cat-ironic","id":103},{"unicode":"😽","tags":"cat-kiss","id":104},{"unicode":"🙀","tags":"cat-surprised","id":105},{"unicode":"😿","tags":"cat-sad","id":106},{"unicode":"😾","tags":"cat-pouting","id":107},{"unicode":"👋","tags":"hand-wave","id":108},{"unicode":"🤚","tags":"backhand","id":109},{"unicode":"🖐️","tags":"hand-open-finger","id":110},{"unicode":"✋","tags":"hand","id":111},{"unicode":"🖖","tags":"hand-vulcan","id":112},{"unicode":"👌","tags":"hand-ok","id":113},{"unicode":"✌️","tags":"hand-v","id":114},{"unicode":"🤞","tags":"hand-cross","id":115},{"unicode":"🤟","tags":"hand-ily","id":116},{"unicode":"🤘","tags":"hand-horns","id":117},{"unicode":"🤙","tags":"hand-call","id":118},{"unicode":"🖕","tags":"hand-finger","id":119},{"unicode":"👈","tags":"hand-point","id":120},{"unicode":"👇","tags":"hand-poin2","id":121},{"unicode":"☝️","tags":"hand-point3","id":122},{"unicode":"👍","tags":"hand-thumb-up","id":123},{"unicode":"👎","tags":"hand-thumb-down","id":124},{"unicode":"✊","tags":"hand-punch","id":125},{"unicode":"👊","tags":"hand-punch2","id":126},{"unicode":"🤛","tags":"hand-punch3","id":127},{"unicode":"🤜","tags":"hand-punch4","id":128},{"unicode":"👏","tags":"hand-clap","id":129},{"unicode":"🙌","tags":"hand-celebration","id":130},{"unicode":"👐","tags":"hand-open","id":131},{"unicode":"🤲","tags":"hand-prayer","id":132},{"unicode":"🤝","tags":"hand-agreement","id":133},{"unicode":"🙏","tags":"hand-please","id":134},{"unicode":"✍️","tags":"hand-write","id":135},{"unicode":"💅","tags":"cosmetics","id":136},{"unicode":"🤳","tags":"self","id":137},{"unicode":"💪","tags":"muscle","id":138},{"unicode":"🦵","tags":"kick","id":139},{"unicode":"🦶","tags":"kick2","id":140},{"unicode":"👂","tags":"ear","id":141},{"unicode":"👃","tags":"nose","id":142},{"unicode":"🧠","tags":"brain","id":143},{"unicode":"🦷","tags":"tooth","id":144},{"unicode":"👀","tags":"eyes","id":145},{"unicode":"👁️","tags":"eye","id":146},{"unicode":"👅","tags":"tongue2","id":147},{"unicode":"👄","tags":"lips","id":148},{"unicode":"👶","tags":"baby","id":149},{"unicode":"👨‍🦲","tags":"bald","id":150},{"unicode":"👴","tags":"old-man","id":151},{"unicode":"👵","tags":"old-woman","id":152},{"unicode":"🔥","tags":"fire","id":153},{"unicode":"👨‍🚒","tags":"firefighter","id":154},{"unicode":"👩‍🚒","tags":"firefighter2","id":155},{"unicode":"👮‍♂️","tags":"police-officer","id":156},{"unicode":"👮‍♀️","tags":"police-officer-woman","id":157},{"unicode":"👨‍👩‍👧‍👦","tags":"family","id":158},{"unicode":"🙈","tags":"monkey-see","id":159},{"unicode":"🙉","tags":"monkey-hear","id":160},{"unicode":"🙊","tags":"monkey-speak","id":161},{"unicode":"💋","tags":"kiss-lips","id":162},{"unicode":"💌","tags":"heart-letter","id":163},{"unicode":"💘","tags":"arrow-cupid","id":164},{"unicode":"💝","tags":"valentine","id":165},{"unicode":"💖","tags":"sparkle-heart","id":166},{"unicode":"💗","tags":"pulse","id":167},{"unicode":"💓","tags":"beating","id":168},{"unicode":"💞","tags":"revolving","id":169},{"unicode":"💕","tags":"love","id":170},{"unicode":"❣️","tags":"exclamation","id":171},{"unicode":"💔","tags":"broken-heart","id":172},{"unicode":"💟","tags":"heart-Decoration","id":173},{"unicode":"🖤","tags":"heart-black","id":174},{"unicode":"🤎","tags":"heart-brown","id":175},{"unicode":"💙","tags":"heart-blue","id":176},{"unicode":"💚","tags":"heart-green","id":177},{"unicode":"🧡","tags":"heart-orange","id":178},{"unicode":"💜","tags":"heart-purple","id":179},{"unicode":"❤️","tags":"heart-red","id":180},{"unicode":"🤍","tags":"black-white","id":181},{"unicode":"💛","tags":"heart-yellow","id":182},{"unicode":"💯","tags":"hundred","id":183},{"unicode":"💢","tags":"mad","id":184},{"unicode":"💥","tags":"boom","id":185},{"unicode":"💫","tags":"stars","id":186},{"unicode":"💦","tags":"splashing","id":187},{"unicode":"💨","tags":"comic-dash","id":188},{"unicode":"🕳️","tags":"hole","id":189},{"unicode":"💬","tags":"balloon-dialog","id":190},{"unicode":"🗨️","tags":"dialog","id":191},{"unicode":"🗯️","tags":"angry-balloon","id":192},{"unicode":"💭","tags":"balloon-bubble","id":193},{"unicode":"💤","tags":"comic-sleep","id":194},{"unicode":"🕶️","tags":"glasses-dark","id":195},{"unicode":"🥽","tags":"glasses-swimming","id":196},{"unicode":"🥼","tags":"scientist","id":197},{"unicode":"👔","tags":"tie","id":198},{"unicode":"👕","tags":"tshirt","id":199},{"unicode":"👖","tags":"pants","id":200},{"unicode":"🧣","tags":"neck","id":201},{"unicode":"🧤","tags":"hand","id":202},{"unicode":"🧥","tags":"jacket","id":203},{"unicode":"🧦","tags":"stocking","id":204},{"unicode":"👗","tags":"clothing","id":205},{"unicode":"👘","tags":"clothing2","id":206},{"unicode":"👙","tags":"swim-clothing","id":207},{"unicode":"👚","tags":"woman-clothing","id":208},{"unicode":"👛","tags":"coin-clothing","id":209},{"unicode":"👜","tags":"purse","id":210},{"unicode":"👝","tags":"pouch","id":211},{"unicode":"🛍️","tags":"shopping-bag","id":212},{"unicode":"🎒","tags":"school-bag","id":213},{"unicode":"👞","tags":"shoe","id":214},{"unicode":"👟","tags":"sneaker","id":215},{"unicode":"🥾","tags":"hiking-boot","id":216},{"unicode":"🥿","tags":"ballet flat","id":217},{"unicode":"👠","tags":"woman-shoe","id":218},{"unicode":"👡","tags":"woman-shoe2","id":219},{"unicode":"👢","tags":"woman-boot","id":220},{"unicode":"👑","tags":"king","id":221},{"unicode":"👒","tags":"hat","id":222},{"unicode":"🎩","tags":"tophat","id":223},{"unicode":"🧢","tags":"baseball cap","id":224},{"unicode":"⛑️","tags":"aid","id":225},{"unicode":"📿","tags":"beads","id":226},{"unicode":"💄","tags":"lipstick","id":227},{"unicode":"💍","tags":"diamond-ring","id":228},{"unicode":"💎","tags":"diamond","id":229},{"unicode":"🔇","tags":"mute","id":230},{"unicode":"🔉","tags":"medium","id":231},{"unicode":"🔊","tags":"loud","id":232},{"unicode":"📢","tags":"loud2","id":233},{"unicode":"📣","tags":"cheering","id":234},{"unicode":"📯","tags":"horn","id":235},{"unicode":"🔔","tags":"bell","id":236},{"unicode":"🔕","tags":"bell","id":237},{"unicode":"🎼","tags":"music-score","id":238},{"unicode":"🎵","tags":"music-note","id":239},{"unicode":"🎶","tags":"music-notes","id":240},{"unicode":"🎙️","tags":"microphone","id":241},{"unicode":"🎤","tags":"microphone2","id":242},{"unicode":"🎷","tags":"sax","id":243},{"unicode":"🎸","tags":"guitar","id":244},{"unicode":"🎹","tags":"piano-keys","id":245},{"unicode":"🎺","tags":"trumpet","id":246},{"unicode":"🎻","tags":"violin","id":247},{"unicode":"🥁","tags":"drumsticks","id":248},{"unicode":"📱","tags":"cellphone","id":249},{"unicode":"☎️","tags":"phone","id":250},{"unicode":"📞","tags":"phone2","id":251},{"unicode":"📠","tags":"fax","id":252},{"unicode":"🔋","tags":"battery","id":253},{"unicode":"🔌","tags":"plug","id":254},{"unicode":"🖥️","tags":"computer-desktop","id":255},{"unicode":"🖨️","tags":"printer","id":256},{"unicode":"⌨️","tags":"keyboard","id":257},{"unicode":"🖱️","tags":"mouse-computer","id":258},{"unicode":"💽","tags":"computer-disk","id":259},{"unicode":"💾","tags":"floppy-disk","id":260},{"unicode":"📀","tags":"blu-ray","id":261},{"unicode":"🧮","tags":"calculation","id":262},{"unicode":"🎥","tags":"camera","id":263},{"unicode":"🎞️","tags":"cinema","id":264},{"unicode":"📽️","tags":"cinema2","id":265},{"unicode":"📸","tags":"camera-flash","id":266},{"unicode":"📼","tags":"vhs-tape","id":267},{"unicode":"🔎","tags":"magnifying","id":268},{"unicode":"🕯️","tags":"light","id":269},{"unicode":"💡","tags":"bulb","id":270},{"unicode":"🔦","tags":"electric-torch","id":271},{"unicode":"📒","tags":"notebook","id":272},{"unicode":"📃","tags":"note","id":273},{"unicode":"📰","tags":"newspaper","id":274},{"unicode":"🗞️","tags":"newspaper-rolled","id":275},{"unicode":"💴","tags":"money-rolled","id":276},{"unicode":"💲","tags":"dollar-sign","id":277},{"unicode":"✉️","tags":"email","id":278},{"unicode":"✏️","tags":"pencil","id":279},{"unicode":"✒️","tags":"pen","id":280},{"unicode":"📝","tags":"note-pencil","id":281},{"unicode":"💼","tags":"briefcase","id":282},{"unicode":"🗓️","tags":"calendar","id":283},{"unicode":"📌","tags":"pin","id":284},{"unicode":"📍","tags":"pin2","id":285},{"unicode":"📎","tags":"paperclip","id":286},{"unicode":"📏","tags":"ruler","id":287},{"unicode":"📐","tags":"ruler2","id":288},{"unicode":"✂️","tags":"cutting","id":289},{"unicode":"🗑️","tags":"wastebasket","id":290},{"unicode":"🔑","tags":"key","id":291},{"unicode":"🗝️","tags":"key-old","id":292},{"unicode":"🔨","tags":"hammer","id":293},{"unicode":"⛏️","tags":"pickaxe","id":294},{"unicode":"⚒️","tags":"hammer2","id":295},{"unicode":"🛠️","tags":"hammer-wrench","id":296},{"unicode":"🗡️","tags":"knife","id":297},{"unicode":"⚔️","tags":"swords","id":298},{"unicode":"🔫","tags":"gun-tool","id":299},{"unicode":"🏹","tags":"archer","id":300},{"unicode":"🛡️","tags":"shield","id":301},{"unicode":"🔧","tags":"spanner","id":302},{"unicode":"🔩","tags":"bolt","id":303},{"unicode":"⚙️","tags":"cog","id":304},{"unicode":"⚖️","tags":"balance","id":305},{"unicode":"🔗","tags":"link","id":306},{"unicode":"🧲","tags":"magnetic","id":307},{"unicode":"⚗️","tags":"chemistry","id":308},{"unicode":"🧪","tags":"chemist","id":309},{"unicode":"🧬","tags":"gene","id":310},{"unicode":"🔬","tags":"microscope","id":311},{"unicode":"🔭","tags":"telescope","id":312},{"unicode":"📡","tags":"antenna-dish","id":313},{"unicode":"💉","tags":"medicine","id":314},{"unicode":"💊","tags":"medicine","id":315},{"unicode":"🚪","tags":"door","id":316},{"unicode":"🛏️","tags":"hotel-bed","id":317},{"unicode":"🚽","tags":"toilet","id":318},{"unicode":"🚿","tags":"shower","id":319},{"unicode":"🛁","tags":"bath","id":320},{"unicode":"🧴","tags":"lotion","id":321},{"unicode":"🧷","tags":"diaper","id":322},{"unicode":"🧹","tags":"sweeping","id":323},{"unicode":"🧺","tags":"farming","id":324},{"unicode":"🧻","tags":"toilet paper","id":325},{"unicode":"🧯","tags":"extinguisher","id":326},{"unicode":"🛒","tags":"shopping-cart","id":327},{"unicode":"🚬","tags":"smoking","id":328},{"unicode":"✔️","tags":"check","id":329},{"unicode":"⚰️","tags":"death","id":330},{"unicode":"🗿","tags":"statue-face","id":331},{"unicode":"🐵","tags":"monkey-face","id":332},{"unicode":"🐒","tags":"monkey","id":333},{"unicode":"🦍","tags":"gorilla","id":334},{"unicode":"🐶","tags":"dog-face","id":335},{"unicode":"🐩","tags":"dog","id":336},{"unicode":"🐺","tags":"face","id":337},{"unicode":"🦊","tags":"face","id":338},{"unicode":"🦝","tags":"curious","id":339},{"unicode":"🐱","tags":"cat","id":340},{"unicode":"🦁","tags":"lion-face","id":341},{"unicode":"🐯","tags":"tiger-face","id":342},{"unicode":"🐅","tags":"tiger","id":343},{"unicode":"🐆","tags":"leopard","id":344},{"unicode":"🐴","tags":"horse-face","id":345},{"unicode":"🐎","tags":"racehorse","id":346},{"unicode":"🦄","tags":"unicorn-face","id":347},{"unicode":"🦓","tags":"zebra","id":348},{"unicode":"🦌","tags":"deer","id":349},{"unicode":"🐮","tags":"cow","id":350},{"unicode":"🐂","tags":"bull","id":351},{"unicode":"🐃","tags":"buffalo","id":352},{"unicode":"🐄","tags":"cow","id":353},{"unicode":"🐷","tags":"pig-face","id":354},{"unicode":"🐖","tags":"sow","id":355},{"unicode":"🐗","tags":"pig","id":356},{"unicode":"🐽","tags":"pig-nose","id":357},{"unicode":"🐏","tags":"aries","id":358},{"unicode":"🐑","tags":"sheep","id":359},{"unicode":"🐐","tags":"capricorn","id":360},{"unicode":"🐪","tags":"dromedary","id":361},{"unicode":"🐫","tags":"camel","id":362},{"unicode":"🦙","tags":"alpaca","id":363},{"unicode":"🦒","tags":"spots","id":364},{"unicode":"🐘","tags":"elephant","id":365},{"unicode":"🦏","tags":"rhinoceros","id":366},{"unicode":"🦛","tags":"hippo","id":367},{"unicode":"🐭","tags":"mouse-face","id":368},{"unicode":"🐁","tags":"mouse","id":369},{"unicode":"🐀","tags":"rat","id":370},{"unicode":"🐹","tags":"pet-face","id":371},{"unicode":"🐰","tags":"bunny-face","id":372},{"unicode":"🐇","tags":"bunny","id":373},{"unicode":"🐿️","tags":"squirrel","id":374},{"unicode":"🦔","tags":"spiny","id":375},{"unicode":"🦇","tags":"vampire","id":376},{"unicode":"🐻","tags":"face","id":377},{"unicode":"🐨","tags":"bear","id":378},{"unicode":"🐼","tags":"panda-face","id":379},{"unicode":"🦘","tags":"marsupial","id":380},{"unicode":"🦡","tags":"honey badger","id":381},{"unicode":"🐾","tags":"paw","id":382},{"unicode":"🦃","tags":"bird","id":383},{"unicode":"🐔","tags":"chicken","id":384},{"unicode":"🐓","tags":"rooster","id":385},{"unicode":"🐣","tags":"baby-bird","id":386},{"unicode":"🐤","tags":"baby-chick","id":387},{"unicode":"🐥","tags":"baby-chick2","id":388},{"unicode":"🐧","tags":"penguin","id":389},{"unicode":"🕊️","tags":"bird-fly","id":390},{"unicode":"🦅","tags":"eagle","id":391},{"unicode":"🦆","tags":"duck","id":392},{"unicode":"🦢","tags":"swan","id":393},{"unicode":"🦉","tags":"owl","id":394},{"unicode":"🦚","tags":"peahen","id":395},{"unicode":"🦜","tags":"macaw","id":396},{"unicode":"🐸","tags":"frog-face","id":397},{"unicode":"🐊","tags":"crocodile","id":398},{"unicode":"🐢","tags":"turtle","id":399},{"unicode":"🦎","tags":"reptile","id":400},{"unicode":"🐍","tags":"snake","id":401},{"unicode":"🐲","tags":"dragon-face","id":402},{"unicode":"🐉","tags":"dragon","id":403},{"unicode":"🦕","tags":"brontosaurus","id":404},{"unicode":"🦖","tags":"t-rex","id":405},{"unicode":"🐳","tags":"whale","id":406},{"unicode":"🐋","tags":"whale2","id":407},{"unicode":"🐬","tags":"flipper","id":408},{"unicode":"🐠","tags":"tropical-fish","id":409},{"unicode":"🐡","tags":"fish","id":410},{"unicode":"🦈","tags":"shark","id":411},{"unicode":"🐙","tags":"octopus","id":412},{"unicode":"🐚","tags":"shell","id":413},{"unicode":"🐌","tags":"snail","id":414},{"unicode":"🦋","tags":"butterfly","id":415},{"unicode":"🐛","tags":"insect","id":416},{"unicode":"🐜","tags":"insect","id":417},{"unicode":"🐝","tags":"bee","id":418},{"unicode":"🐞","tags":"ladybug","id":419},{"unicode":"🦗","tags":"grasshopper","id":420},{"unicode":"🕷️","tags":"insect","id":421},{"unicode":"🕸️","tags":"spider-web","id":422},{"unicode":"🦂","tags":"scorpio","id":423},{"unicode":"🦟","tags":"mosquito","id":424},{"unicode":"🦠","tags":"amoeba","id":425},{"unicode":"💐","tags":"flower","id":426},{"unicode":"🌸","tags":"blossom","id":427},{"unicode":"🌹","tags":"flower","id":428},{"unicode":"🥀","tags":"flower-wilted","id":429},{"unicode":"🌺","tags":"flower2","id":430},{"unicode":"🌻","tags":"sun-flower","id":431},{"unicode":"🌼","tags":"flower3","id":432},{"unicode":"🌷","tags":"flower4","id":433},{"unicode":"🌱","tags":"young-tree","id":434},{"unicode":"🌲","tags":"tree","id":435},{"unicode":"🌳","tags":"big-tree","id":436},{"unicode":"🌵","tags":"plant","id":437},{"unicode":"🌿","tags":"leaf","id":438},{"unicode":"☘️","tags":"three-leaf clover","id":439},{"unicode":"🍀","tags":"four-leaf clover","id":440},{"unicode":"🍁","tags":"falling-leaf","id":441},{"unicode":"🏁","tags":"checkered","id":442},{"unicode":"🚩","tags":"post","id":443},{"unicode":"🎌","tags":"japanese-celebration","id":444},{"unicode":"🏴","tags":"flag-black","id":445},{"unicode":"🏳️","tags":"flag-white","id":446},{"unicode":"🏳️‍🌈","tags":"flag-pride","id":447},{"unicode":"🏴‍☠️","tags":"flag-pirate","id":448},{"unicode":"🇦🇷","tags":"AR","id":449},{"unicode":"🇦🇺","tags":"AU","id":450},{"unicode":"🇧🇬","tags":"BG","id":451},{"unicode":"🇧🇷","tags":"BR","id":452},{"unicode":"🇨🇦","tags":"CA","id":453},{"unicode":"🇨🇳","tags":"CN","id":454},{"unicode":"🇨🇿","tags":"CZ","id":455},{"unicode":"🇩🇪","tags":"DE","id":456},{"unicode":"🇩🇰","tags":"DK","id":457},{"unicode":"🇩🇲","tags":"DM","id":458},{"unicode":"🇩🇴","tags":"DO","id":459},{"unicode":"🇩🇿","tags":"DZ","id":460},{"unicode":"🇪🇦","tags":"EA","id":461},{"unicode":"🇪🇨","tags":"EC","id":462},{"unicode":"🇪🇸","tags":"ES","id":463},{"unicode":"🇫🇮","tags":"FI","id":464},{"unicode":"🇫🇷","tags":"FR","id":465},{"unicode":"🇬🇧","tags":"GB","id":466},{"unicode":"🇭🇰","tags":"HK","id":467},{"unicode":"🇮🇱","tags":"IL","id":468},{"unicode":"🇮🇹","tags":"IT","id":469},{"unicode":"🇯🇵","tags":"JA","id":470},{"unicode":"🇰🇵","tags":"KP","id":471},{"unicode":"🇰🇷","tags":"KR","id":472},{"unicode":"🇳🇱","tags":"NL","id":473},{"unicode":"🇳🇴","tags":"NO","id":474},{"unicode":"🇵🇱","tags":"PL","id":475},{"unicode":"🇵🇹","tags":"PT","id":476},{"unicode":"🇷🇴","tags":"RO","id":477},{"unicode":"🇷🇺","tags":"RU","id":478},{"unicode":"🇸🇰","tags":"SK","id":479},{"unicode":"🇸🇻","tags":"SV","id":480},{"unicode":"🇹🇭","tags":"TH","id":481},{"unicode":"🇹🇷","tags":"TR","id":482},{"unicode":"🇻🇮","tags":"VI","id":483}]';