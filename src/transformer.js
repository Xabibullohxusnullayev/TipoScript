// Replace .js with .kocha syntax
function transformCode(code) {
  const replacements = {
    aylana: "for",
    agar: "if",
    yokida: "else",
    yanami: "function",
    qaytar: "return",
    davay: "let",
    sodiq: "const",
    sotqin: "var",
    sinf: "class",
    yengi: "new",
    aynan: "this",
    qilish: "try",
    usha: "catch",
    vanihoyat: "finally",
    uloqtir: "throw",
    davomEt: "continue",
    toxta: "break",
    almashuvchi: "switch",
    holat: "case",
    oddiy: "default",
    ichida: "in",
    instanceof: "instanceof",
    typeof: "typeof",
    hechNarsa: "void",
    ochir: "delete",
    cuntiribturadigan: "debugger",
    birgalida: "async",
    kutbtur: "await",
    yield: "yield",
    super: "super",
    yukla: "import",
    chiqaz: "export",
    dan: "from",
    niki: "of",
    boshKalla: "null",
    qattau: "undefined",
    Sonmas: "NaN",
    cheksizli: "Infinity",
    ha: "true",
    yoq: "false",
    qachonki: "while",
    bankomat: {
      korsat: "console.log",
      ogohlantr: "console.warn",
      xato: "console.error",
      asl:"console.dir"
    },
    ot: "throw",
    Xato: "Error",
    uzunli: "length",
    xarBittasiga: "forEach",
    qil: "do",
    karochiKut: "setTimeout",
    karochiQaytar: "setInterval",
    Vada: "Promise",
    list: "document",
    uxlat: "querySelector",
    polniyUxlat: "querySelectorAll",
    pasportUxlat: "getElementById",
    skoriPomosh: {
      uyaqqaBuyaqqa: "classList.toggle",
      keldi: "classList.add",
      tozala: "classList.remove",
      bomiOziYomi: "classList.contains",
      almashtir: "classList.replace",
    },
    fokus: "addEventListener",
    HTMLniMensima:"innerHTML",
    matnniMensima:"innerText",
    orqasigaQosh: "push",
    boshidanQosh: "unshift",
    orqasidanOchir: "pop",
    boshidanOchir: "shift",
    
  };

  // transform code using replacements
  let transformedCode = code;
  for (const [oldWord, newWord] of Object.entries(replacements)) {
    if (typeof newWord === "object") {
      for (const [nestedOldWord, nestedNewWord] of Object.entries(newWord)) {
        const regex = new RegExp(`\\b${oldWord}\\.${nestedOldWord}\\b`, "g");
        transformedCode = transformedCode.replace(regex, nestedNewWord);
      }
    } else {
      const regex = new RegExp(`\\b${oldWord}\\b`, "g");
      transformedCode = transformedCode.replace(regex, newWord);
    }
  }

  return transformedCode;
}

module.exports = { transformCode };
