function abbreviateNumber(value) {
    let abbreviatedValue = value;
    const letters = ["", "K", "M", "B","T", "Qd", "Qn", "Sx", "Sp", "Oc", "No", "De", "UDe", "DDe", "TDe", "QdDe", "QnDe", "SxDe", "SpDe", "OcDe", "NoDe", "Vg", "UVg", "DVg", "TVg", "QdVg", "QnVg", "SxVg", "SpVg", "OcVg", "NoVg", "Tg", "UTg", "DTg", "TTg", "QdTg", "QnTg", "SxTg", "SpTg", "OcTg", "NoTg", "qg", "Uqg", "Dqg", "Tqg", "Qdqg", "Qnqg", "Sxqg", "Spqg", "Ocqg", "Noqg", "Qg", "UQg", "DQg", "TQg", "QdQg", "QnQg", "SxQg", "SpQg", "OcQg", "NoQg", "sg", "Usg", "Dsg", "Tsg", "Qdsg", "Qnsg", "Sxsg", "Spsg", "Ocsg", "Nosg", "Sg", "USg", "DSg", "TSg", "QdSg", "QnSg", "SxSg", "SpSg", "OcSg", "NoSg", "Og", "UOg", "DOg", "TOg", "QdOg", "QnOg", "SxOg", "SpOg", "OcOg", "NoOg", "Ng", "UNg", "DNg", "TNg", "QdNg", "QnNg", "SxNg", "SpNg", "OgNg", "NoNg", "Ce", "UCe", "DCe", "TCe", "QdCe", "QnCe", "SxCe", "SpCe", "OcCe", "NoCe", "DeCe", "UDeCe", "DDeCe", "TDeCe", "QdDeCe", "QnDeCe", "SxDeCe", "SpDeCe", "OcDeCe", "NoDeCe", "VgCe", "UVgCe", "DVgCe", "TVgCe", "QdVgCe", "QnVgCe", "SxVgCe", "SpVgCe", "OcVgCe", "NoVgCe", "TgCe", "UTgCe", "DTgCe", "QdTgCe", "QnTgCe", "SxTgCe", "SpTgCe", "OcTgDe", "NoTgCe", "qgCe", "UqgCe", "DqgCe", "TqgCe", "QdqgCe", "QnqgCe", "SxqgCe", "SpqgCe", "OcqgCe", "NoqgCe", "QgCe", "UQgCe", "DQgCe", "TQgCe", "QdQgCe", "QnQgCe", "SxQgCe", "SpQgCe", "OcQgCe", "NoQgCe", "sgCe", "UsgCe", "DsgCe", "TsgCe", "QdsgCe", "QnsgCe", "SxsgCe", "SpsgCe", "OcsgCe", "NosgCe", "SgCe", "USgCe", "DSgCe", "TSgCe", "QdSgCe", "QnSgCe", "SxSgCe", "SpSgCe", "OcSgCe", "NoSgCe", "NgCe", "UNgCe", "DNgCe", "TNgCe", "QdNgCe", "QnNgCe", "SxNgCe", "SpNgCe", "OcNgCe", "NoNgCe", "Du", "UDu", "DDu", "TDu", "QdDu", "QnDu", "SxDu", "SpDu", "OcDu", "NoDu", "DeDu", "UDeDu", "DDeDu", "TDeDu", "QdDeDu", "QnDeDu", "SxDeDu", "SpDeDu", "OcDeDu", "NoDeDu", "VgDu", "UVgDu", "DVgDu", "TVgDu", "QdVgDu", "QnVgDu", "SxVgDu", "SpVgDu", "OcVgDu", "NoVgDu", "TgDu", "UTgDu", "DTgDu", "QdTgDu", "QnTgDu", "SxTgDu", "SpTgDu", "OcTgDe", "NoTgDu", "qgDu", "UqgDu", "DqgDu", "TqgDu", "QdqgDu", "QnqgDu", "SxqgDu", "SpqgDu", "OcqgDu", "NoqgDu", "QgDu", "UQgDu", "DQgDu", "TQgDu", "QdQgDu", "QnQgDu", "SxQgDu", "SpQgDu", "OcQgDu", "NoQgDu", "sgDu", "UsgDu", "DsgDu", "TsgDu", "QdsgDu", "QnsgDu", "SxsgDu", "SpsgDu", "OcsgDu", "NosgDu", "SgDu", "USgDu", "DSgDu", "TSgDu", "QdSgDu", "QnSgDu", "SxSgDu", "SpSgDu", "OcSgDu", "NoSgDu", "NgDu", "UNgDu", "DNgDu", "TNgDu", "QdNgDu", "QnNgDu", "SxNgDu", "SpNgDu", "OcNgDu", "NoNgDu"];
    let notation = 0;
    
    while (abbreviatedValue >= 1000) {
        abbreviatedValue /= 1000;
        notation++;
  }

    abbreviatedValue = abbreviatedValue.toPrecision(3);

    abbreviatedValue += letters[notation];
    return abbreviatedValue;
}
