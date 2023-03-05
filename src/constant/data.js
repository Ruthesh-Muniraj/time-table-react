export let year = "2023";
export let semester = "Odd";

function School(code, name, courses) {
  this.code = code;
  this.name = name;
  this.courses = courses;
}

export function short_name(school) {
  return school.name.split(" ").slice(2).join(" ");
}

function Course(name, nick, slot) {
  this.name = name;
  this.nick = nick;
  this.slot = slot;
}

export let semestersData = {
  SEM1: new School("A", "Semester 1", []),
  SEM2: new School("B", "Semester 2", []),
  SEM3: new School("C", "Semester 3", []),
  SEM4: new School("D", "Semester 4", []),
  SEM5: new School("E", "Semester 5", []),
  SEM6: new School("F", "Semester 6", []),
  SEM7: new School("G", "Semester 7", []),
  SEM8: new School("H", "Semester 8", []),
};

export let courses = {
  A202: new Course("Group Theory (M1)", "GrpTheory", "A"),
  A204: new Course("Metric Spaces (M1)", "MetSpace", "B"),
  A206: new Course("Probability Theory (M1)", "PT", "C"),
  A301: new Course("Lebesque Integration (M2)", "LI", "D"),
  A307: new Course("Field Theory (M2)", "FT", "E"),
  A308: new Course("Complex Analysis (M2)", "CA", "F"),
  A309: new Course("Graph Theory (M2)", "GraphTheo", "G"),
  A311: new Course("Numerical Analysis (M5)", "Num Ana", "H"),
  A312: new Course("Numerical Analysis II (M6)", "Num Ana", "I"),

  B204: new Course("Cell Biology (LH2)", "CellBio", "D"),
  B206: new Course("Moleclar Biology (LH2)", "MolBio", "F"),
  B305: new Course("Immunology (B2)", "Immuno", "B"),
  B307: new Course("Genetics (B2)", "Gene", "A"),
  B353: new Course("Plant Developmental Biology (B3)", "PlantDev Bio", "D"),

  B405: new Course("Biotechniques (B6)", "Biotech", "B"),
  B453: new Course("Advanced Biochemistry (B3)", "Adv Biochem", "A"),
  B454: new Course("Advanced Microbiology (B2)", "Adv MicroBio", "C"),
  B455: new Course("Enzymology (LH1)", "Enzymo", "E"),
  B456: new Course("Advanced Neurobiology (B1)", "Adv NeuroBio", "F"),

  B554: new Course("Cancer Biology (B4)", "CancerBio", "A"),
  B558: new Course("Quantitative Biology (B6)", "QuantiBio", "E"),

  /* Chemistry */
  C204: new Course("Reagents in Organic Syntheses (LH2)", "Organic", "B"),
  C205: new Course(
    "Main Group and Organometallic Chemistry (LH2)",
    "Inorganic",
    "E"
  ),
  C206: new Course("Quantum Chemistry - I (LH1)", "QC1", "F"),

  C304: new Course("Coordination Chemistry (LH3)", "CoordChem", "E"),
  C305: new Course("Chemical Binding (LH4)", "ChemBind", "B"),
  C306: new Course("Physical Methods in Chemistry - I (LH2)", "PMC", "C"),

  C402: new Course("Chemical Rate Processes (C5)", "ChemRate", "F"),

  C554: new Course("Crystallography (C2)", "Crystallo", "C"),
  C556: new Course(
    "Advanced Bio-Inorganic Chemistry (LH3)",
    "Bio InorgChem",
    "A"
  ),
  C565: new Course("Advanced Organic Chemistry (C1)", "Organo", "D"),
  C567: new Course("Advanced Main Group Chemistry (C2)", "MainGrp Chem", "A"),
  C571: new Course("Statistical Mechanics (LH1)", "StatMech", "A"),

  /* Computer Science */
  CS202: new Course("Discrete Structures and Computation (LH2)", "DSC", "E"),
  CS460: new Course("Machine Learning (M3)", "ML", "D"),
  CS458: new Course("Approximation Algorithms (M3)", "AppAlgo", "F"),

  /* Physics */
  P204: new Course("Electromagnetism I (P107)", "EM1", "D"),
  P205: new Course("Mathematical Methods II (P107)", "MM2", "B"),
  P206: new Course("Quantum Mechanics - I (P107)", "QM1", "A"),

  P301: new Course("Electromagnetism - II (P107)", "EM2", "E"),

  P307: new Course("Nuclei and Particles (LH3)", "Nuclei", "C"),

  P454: new Course("Particle Physics (P126)", "PP", "B"),
  P455: new Course(
    "Introduction to Phase Transition and Critical Phenomena (P127)",
    "PT&CP",
    "F"
  ),
  P457: new Course(
    "General Theory of Relativity and Cosmology (P108)",
    "GTR",
    "A"
  ),
  P461: new Course("Physics of Mesoscopic Systems (P109)", "PMS", "A"),
  P468: new Course("Magnetism and Superconductivity (P108)", "Mag&Sup", "E"),
  P477: new Course(
    "Relativistic Nucleus - Nucleus Collision and Quark Gluon Plasma (P126)",
    "RN",
    "D"
  ),

  /* CMRP */
  R121: new Course("Quantum Mechanics (CR-101)", "QM", "B"),
  R122: new Course("Electronics and Instrumentation (CR-101)", "E&I", "C"),
  R123: new Course("Solid State Physics (CR-101)", "SSP", "D"),
  R124: new Course("Nuclear Physics (CR-101)", "NP", "E"),
};

for (let course in courses) {
  for (let semester in semestersData) {
    if (semestersData[semester].code === course.match(/^[^0-9]*/)[0]) {
      semestersData[semester].courses.push(course);
    }
  }
}

// Colorblindness-friendly color palette from: https://davidmathlogic.com/colorblind/
export let colors = {
  "A":"#117733",
  "B":"#44aa99",
  "C":"#d55e00",
  "D":"#88ccee",
  "E":"#0072b2",
  "F":"#ddcc77",
  "G":"#cc6677",
  "H":"#aa4499",
  "I":"#882255",
  "J":"#e69f00",
}
