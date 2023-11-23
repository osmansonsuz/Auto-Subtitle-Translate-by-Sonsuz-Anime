let data = {
    tr: 'Türkçe',
    af: 'Afrikaans',
    am: 'አማርኛ',
    ar: 'العربية',
    as: 'অসমীয়া',
    az: 'Azərbaycan',
    ba: 'Bashkir',
    bg: 'Български',
    bho: 'Bhojpuri',
    bn: 'বাংলা',
    bo: 'བོད་སྐད་',
    brx: 'बड़ो',
    bs: 'Bosnian',
    ca: 'Català',
    cs: 'Čeština',
    cy: 'Cymraeg',
    da: 'Dansk',
    de: 'Deutsch',
    doi: 'Dogri',
    dsb: 'Dolnoserbšćina',
    dv: 'ދިވެހިބަސް',
    el: 'Ελληνικά',
    en: 'English',
    es: 'Español',
    et: 'Eesti',
    eu: 'Euskara',
    fa: 'فارسی',
    fi: 'Suomi',
    fil: 'Filipino',
    fj: 'Na Vosa Vakaviti',
    fo: 'Føroyskt',
    fr: 'Français',
    ga: 'Gaeilge',
    gl: 'Galego',
    gom: 'Konkani',
    gu: 'ગુજરાતી',
    ha: 'Hausa',
    he: 'עברית',
    hi: 'हिन्दी',
    hr: 'Hrvatski',
    hsb: 'Hornjoserbšćina',
    ht: 'Haitian Creole',
    hu: 'Magyar',
    hy: 'Հայերեն',
    id: 'Indonesia',
    ig: 'Ásụ̀sụ́ Ìgbò',
    ikt: 'Inuinnaqtun',
    is: 'Íslenska',
    it: 'Italiano',
    iu: 'ᐃᓄᒃᑎᑐᑦ',
    ja: '日本語',
    ka: 'ქართული',
    kk: 'Қазақ Тілі',
    km: 'ខ្មែរ',
    kmr: 'Kurdî (Bakur)',
    kn: 'ಕನ್ನಡ',
    ko: '한국어',
    ks: 'کٲشُر',
    ku: 'Kurdî (Navîn)',
    ky: 'Кыргызча',
    ln: 'Lingála',
    lo: 'ລາວ',
    lt: 'Lietuvių',
    lug: 'Ganda',
    lv: 'Latviešu',
    lzh: '中文 (文言文)',
    mai: 'Maithili',
    mg: 'Malagasy',
    mi: 'Te Reo Māori',
    mk: 'Македонски',
    ml: 'മലയാളം',
    mr: 'मराठी',
    ms: 'Melayu',
    mt: 'Malti',
    mww: 'Hmong Daw',
    my: 'မြန်မာ',
    nb: 'Norsk Bokmål',
    ne: 'नेपाली',
    nl: 'Nederlands',
    nso: 'Sesotho sa Leboa',
    nya: 'Nyanja',
    or: 'ଓଡ଼ିଆ',
    otq: 'Hñähñu',
    pa: 'ਪੰਜਾਬੀ',
    pl: 'Polski',
    prs: 'دری',
    ps: 'پښتو',
    pt: 'Português (Brasil)',
    ro: 'Română',
    ru: 'Русский',
    run: 'Rundi',
    rw: 'Kinyarwanda',
    sd: 'سنڌي',
    si: 'සිංහල',
    sk: 'Slovenčina',
    sl: 'Slovenščina',
    sm: 'Gagana Sāmoa',
    sn: 'chiShona',
    so: 'Soomaali',
    sq: 'Shqip',
    'sr-Latn': 'Srpski (latinica)',
    st: 'Sesotho',
    sv: 'Svenska',
    sw: 'Kiswahili',
    ta: 'தமிழ்',
    te: 'తెలుగు',
    th: 'ไทย',
    ti: 'ትግር',
    tk: 'Türkmen Dili',
    tn: 'Setswana',
    to: 'Lea Fakatonga',
    tt: 'Татар',
    ty: 'Reo Tahiti',
    ug: 'ئۇيغۇرچە',
    uk: 'Українська',
    ur: 'اردو',
    uz: 'Uzbek (Latin)',
    vi: 'Tiếng Việt',
    xh: 'isiXhosa',
    yo: 'Èdè Yorùbá',
    yua: 'Yucatec Maya',
    yue: '粵語 (繁體)',
    zu: 'Isi-Zulu'
}

let iso692 = {
    aa: "aar",
    ab: "abk",
    af: "afr",
    ak: "aka",
    sq: "alb",
    am: "amh",
    ar: "ara",
    an: "arg",
    hy: "arm",
    as: "asm",
    av: "ava",
    ae: "ave",
    ay: "aym",
    az: "aze",
    ba: "bak",
    bm: "bam",
    eu: "baq",
    be: "bel",
    bn: "ben",
    bh: "bih",
    bi: "bis",
    bo: "tib",
    bs: "bos",
    br: "bre",
    bg: "bul",
    my: "bur",
    ca: "cat",
    cs: "cze",
    ch: "cha",
    ce: "che",
    zh: "chi",
    cu: "chu",
    cv: "chv",
    kw: "cor",
    co: "cos",
    cr: "cre",
    cy: "wel",
    da: "dan",
    de: "ger",
    dv: "div",
    nl: "dut",
    dz: "dzo",
    el: "gre",
    en: "eng",
    eo: "epo",
    et: "est",
    eu: "baq",
    ee: "ewe",
    fo: "fao",
    fa: "per",
    fj: "fij",
    fi: "fin",
    fr: "fre",
    fy: "fry",
    ff: "ful",
    ka: "geo",
    gd: "gla",
    ga: "gle",
    gl: "glg",
    gv: "glv",
    gn: "grn",
    gu: "guj",
    ht: "hat",
    ha: "hau",
    he: "heb",
    hz: "her",
    hi: "hin",
    ho: "hmo",
    hr: "hrv",
    hu: "hun",
    ig: "ibo",
    is: "ice",
    io: "ido",
    ii: "iii",
    iu: "iku",
    ie: "ile",
    ia: "ina",
    id: "ind",
    ik: "ipk",
    it: "ita",
    jv: "jav",
    ja: "jpn",
    kl: "kal",
    kn: "kan",
    ks: "kas",
    kr: "kau",
    kk: "kaz",
    km: "khm",
    ki: "kik",
    rw: "kin",
    ky: "kir",
    kv: "kom",
    kg: "kon",
    ko: "kor",
    kj: "kua",
    ku: "kur",
    lo: "lao",
    la: "lat",
    lv: "lav",
    li: "lim",
    ln: "lin",
    lt: "lit",
    lb: "ltz",
    lu: "lub",
    lg: "lug",
    mk: "mac",
    mh: "mah",
    ml: "mal",
    mi: "mao",
    mr: "mar",
    ms: "may",
    mg: "mlg",
    mt: "mlt",
    mn: "mon",
    my: "bur",
    na: "nau",
    nv: "nav",
    nr: "nbl",
    nd: "nde",
    ng: "ndo",
    ne: "nep",
    nn: "nno",
    nb: "nob",
    no: "nor",
    ny: "nya",
    oc: "oci",
    oj: "oji",
    or: "ori",
    om: "orm",
    os: "oss",
    pa: "pan",
    pi: "pli",
    pl: "pol",
    pt: "por",
    ps: "pus",
    qu: "que",
    rm: "roh",
    ro: "rum",
    rn: "run",
    ru: "rus",
    sg: "sag",
    sa: "san",
    si: "sin",
    sk: "slo",
    sl: "slv",
    se: "sme",
    sm: "smo",
    sn: "sna",
    sd: "snd",
    so: "som",
    st: "sot",
    es: "spa",
    sc: "srd",
    sr: "srp",
    ss: "ssw",
    su: "sun",
    sw: "swa",
    sv: "swe",
    ty: "tah",
    ta: "tam",
    tt: "tat",
    te: "tel",
    tg: "tgk",
    tl: "tgl",
    th: "tha",
    ti: "tir",
    to: "ton",
    tn: "tsn",
    ts: "tso",
    tk: "tuk",
    tr: "tur",
    tw: "twi",
    ug: "uig",
    uk: "ukr",
    ur: "urd",
    uz: "uzb",
    ve: "ven",
    vi: "vie",
    vo: "vol",
    wa: "wln",
    wo: "wol",
    xh: "xho",
    yi: "yid",
    yo: "yor",
    za: "zha",
    zu: "zul",
    "sr-Latn": "srp"
};


function getValueFromKey(key) {
    return data[key];
}

function getKeyFromValue(value) {
    for (let key in data) {
        if (data[key] === value) {
            return key;
        }
    }
}

function getAllValues() {
    return Object.values(data);
}

function getnewisocode(value) {
    for (let key in iso692) {
        if(value === key) {
            return iso692[key];
        }
    }
}

function getoldisocode(value) {
    for (let key in iso692){
        if(iso692[key] === value){
            return key;
        }
    }
}

module.exports = {getAllValues, getKeyFromValue, getValueFromKey, getnewisocode, getoldisocode};
