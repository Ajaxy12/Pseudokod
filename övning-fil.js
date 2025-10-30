// ============================================
// BEGREPP: CONSTANT VS VARIABLE, MUTABLE VS IMMUTABLE
// (Kort översikt med exempel)
// ============================================
// Constant (konstant) för const
// Notis: defaults som deklareras med const återtilldelas inte.
// Vid körning "överskrider" vi dem med nya variabler från input,
// vi ersätter inte själva const-värdena.
const KONSTANT_BELOPP = 100; // kan inte tilldelas om
// KONSTANT_BELOPP = 200; // ❌ Fel: Assignment to constant variable

// Variable (variabel) för let och var
let rörligtTal = 5; // kan ändras
rörligtTal = 6; // ✅ OK
var gammalVariabel = "hej"; // kan ändras och återdeklareras (undvik i modern JS)
gammalVariabel = "hej igen"; // ✅ OK

// Mutable variable (mutabel variabel) för let/var
let personMutable = { name: "Anna" };
personMutable.name = "Maria"; // ✅ OK (innehållet ändras)
personMutable.alder = 28; // ✅ OK

// Immutable variable (immutabel variabel) för const
const personImmutable = { name: "Erik" };
personImmutable.name = "Ola"; // ✅ OK: objektets innehåll kan ändras
// personImmutable = { name: "Nytt" }; // ❌ Fel: kan inte tilldela ny referens

// --- Avgränsare mellan begreppssektionen och resten av filen ---
//
// Nedan följer den ordinarie "övningsfilen" med körbara sections.

// Hjälpfunktion för att visa användning
function showHelp() {
    // Vi bryter linjer max 60 tecken långa för tydliga avgränsare.
    // What does "\n" mean in English and why do we use it?
    // "\n" means "newline" or "line break". It tells the program to start a new line in the output.
    // We use it to make the console output easier to read by breaking text onto a new line.
    console.log("\n" + "=".repeat(60));
    console.log("=== HUR SECTIONS FUNGERAR ===");
    console.log("=".repeat(60));
    console.log("\nVarje section är omsluten av en IF-statement som kontrollerar");
    console.log("vilken section du valt i terminalen. Endast den valda sektionen");
    console.log("körs - alla andra kodblock hoppas över!");
    console.log("\nExempel på IF-statement:");
    console.log('  if (section === "vars" || section === "all") {');
    console.log('    // Denna kod körs BARA om section är "vars" eller "all"');
    console.log('  }');
    console.log("\nDetta betyder att när du kör en specifik section:");
    console.log("  ✓ Endast den valda sektionen körs");
    console.log("  ✓ Alla andra kodblock ignoreras");
    console.log("  ✓ Du får ren output utan onödig kod");
    
    console.log("\n" + "=".repeat(60));
    console.log("=== STANDARD SECTIONS (PUBLIC) ===");
    console.log("=".repeat(60));
    console.log("Grundläggande koncept för nybörjare:");
    console.log("  vars      - Variabler (let) och konstanter (const)");
    console.log("  addition  - Addera tal och konkatenera strängar");
    console.log("  types     - typeof-exempel (grundläggande)");
    console.log("\nKör alla standard sections:");
    console.log("  node \".\\övning-fil.js\" standard");
    console.log("  (eller använd: public)");
    
    console.log("\n" + "=".repeat(60));
    console.log("=== ADVANCED SECTIONS (PRIVATE) ===");
    console.log("=".repeat(60));
    console.log("Avancerade koncept för erfarna:");
    console.log("  alltypes  - Alla datatyper i JavaScript (inkl. NaN, null, etc.)");
    console.log("  summary   - Sammanfattning av datatyper och 'not available'");
    console.log("  arrays    - Arrays vs objekt, Array.isArray()");
    console.log("\nKör alla advanced sections:");
    console.log("  node \".\\övning-fil.js\" advanced");
    console.log("  (eller använd: private)");
    
    console.log("\n" + "=".repeat(60));
    console.log("=== ALLA TILLGÄNGLIGA SECTIONS ===");
    console.log("=".repeat(60));
    console.log("Standard (Public):");
    console.log("  vars      - Variabler och konstanter");
    console.log("  addition  - Addera tal och konkatenera strängar");
    console.log("  types     - typeof-exempel (grundläggande)");
    console.log("  objects   - Objekt vs arrays vs klasser (översikt)");
    console.log("\nAdvanced (Private):");
    console.log("  alltypes  - Alla datatyper i JavaScript");
    console.log("  summary   - Sammanfattning av datatyper");
    console.log("  arrays    - Arrays vs objekt");
    console.log("\nSpecial:");
    console.log("  standard  - Kör alla standard sections");
    console.log("  advanced  - Kör alla advanced sections");
    console.log("  public    - Alias för 'standard'");
    console.log("  private   - Alias för 'advanced'");
    console.log("  restricted - Alias för 'advanced'");
    console.log("  all       - Kör alla sections");
    
    console.log("\n" + "=".repeat(60));
    console.log("=== EXEMPEL ===");
    console.log("=".repeat(60));
    console.log("Kör en specifik section:");
    console.log('  node ".\\övning-fil.js" vars');
    console.log('  node ".\\övning-fil.js" addition');
    console.log('  node ".\\övning-fil.js" alltypes');
    console.log('  node ".\\övning-fil.js" objects');
    console.log("\nKör alla standard sections:");
    console.log('  node ".\\övning-fil.js" standard');
    console.log('  node ".\\övning-fil.js" public');
    console.log("\nKör alla advanced sections:");
    console.log('  node ".\\övning-fil.js" advanced');
    console.log('  node ".\\övning-fil.js" private');
    console.log('  node ".\\övning-fil.js" restricted');
    console.log("\nKör alla sections:");
    console.log('  node ".\\övning-fil.js" all');
    console.log("\nFå hjälp:");
    console.log('  node ".\\övning-fil.js" help');
}

// Hämta argument från terminalen
const args = process.argv.slice(2);
let section = args[0] || "all"; // Om inget argument, kör allt

// Hantera aliases för standard och advanced
if (section === "public") section = "standard";
if (section === "private" || section === "restricted") section = "advanced";

// Om användaren skriver "help" eller "?", visa hjälp
if (section === "help" || section === "?" || section === "-h" || section === "--help") {
    showHelp();
    process.exit(0);
}

// Flagga för att köra standard sections
const runStandard = section === "standard";
// Flagga för att köra advanced sections
const runAdvanced = section === "advanced";

// ============================================
// SECTION 1: VARIABLER OCH KONSTANTER (STANDARD)
// Kör med: node ".\övning-fil.js" vars
// ============================================
if (section === "vars" || section === "all" || runStandard) {
    console.log("=".repeat(50));
    console.log("=== VARIABLER OCH KONSTANTER ===");
    console.log("=".repeat(50));
    
    //Variabler
    let namn = "Anna";
    let alder = 28;
    let stad = "Stockholm";
    
    // Exempel på konstanter (const) - värdet kan inte ändras:
    const username = "DittAnvandarnamn";
    const project = "DittProjekt";
    
    // Exempel på variabler (let) - värdet kan ändras:
    // (Definierade ovan i koden: let namn, alder, stad)
    
    // Vi använder + för att slå ihop (konkatenera) flera strängar och variabler till en lång sträng.
    // Om du skriver så här (utan variabler):
    console.log("Hej, jag heter namn, jag är alder år gammal och bor i stad.");
    // Detta skriver ut texten bokstavligen, inte värdena i variablerna.
    
    // Om du använder variabler & konstanter ihop med + så får du korrekt värde:
    console.log("Hej, jag heter " + namn + ", jag är " + alder + " år gammal och bor i " + stad + ".");
    
    // Konstanterna markeras med VERSALER så vi kan identifiera dem tydligt i terminalen:
    console.log("ANVÄNDARNAMN (konstant): " + username.toUpperCase() + ", PROJEKT (konstant): " + project.toUpperCase());
}

// ============================================
// SECTION 2: ADDERA TAL OCH KONKATENERA STRÄNGAR (STANDARD)
// Kör med: node ".\övning-fil.js" addition
// ============================================
if (section === "addition" || section === "all" || runStandard) {
    if (section === "all" || runStandard) console.log("\n");
    console.log("=".repeat(50));
    console.log("=== ADDERA TAL OCH KONKATENERA STRÄNGAR ===");
    console.log("=".repeat(50));
    
    // 1. ADDERA TAL (addition) - när båda är nummer
    let num1 = 5;
    let num2 = 3;
    let summa = num1 + num2; // Adderar tal: 5 + 3 = 8
    console.log("num1 + num2 = " + num1 + " + " + num2 + " = " + summa);
    console.log("Resultatet är: " + summa + " (typ: " + typeof summa + ")");
    
    // Fler exempel på addition:
    let tal1 = 10;
    let tal2 = 20;
    let tal3 = 5.5;
    console.log(tal1 + " + " + tal2 + " = " + (tal1 + tal2)); // 10 + 20 = 30
    console.log(tal1 + " + " + tal3 + " = " + (tal1 + tal3)); // 10 + 5.5 = 15.5
    console.log("typeof (tal1 + tal2): " + typeof (tal1 + tal2));
    
    // 2. KONKATENERA STRÄNGAR (strängsammanfogning) - när minst en är sträng
    let förnamn = "Anna";
    let efternamn = "Andersson";
    let fullständigtNamn = förnamn + " " + efternamn; // Slår ihop strängar
    console.log("\nförnamn + \" \" + efternamn = \"" + förnamn + "\" + \" \" + \"" + efternamn + "\"");
    console.log("Resultatet är: \"" + fullständigtNamn + "\" (typ: " + typeof fullständigtNamn + ")");
    
    // Fler exempel på strängkonkatenering:
    let hälsning = "Hej";
    let namn2 = "Maria";
    let meddelande = hälsning + ", " + namn2 + "!"; // "Hej, Maria!"
    console.log("\n" + hälsning + " + \", \" + " + namn2 + " + \"!\" = \"" + meddelande + "\"");
    
    // 3. VIKTIGT: När du blandar nummer och sträng med + blir allt till sträng!
    console.log("\n=== BLANDNING AV NUMmer OCH STRÄNG ===");
    let age = 25;
    let text1 = "Ålder: ";
    let resultat1 = text1 + age; // Sträng + nummer = sträng!
    console.log("text1 + age = \"" + text1 + "\" + " + age + " = \"" + resultat1 + "\"");
    console.log("typeof resultat1: " + typeof resultat1); // "string"
    
    // Fler exempel:
    let nummer1 = 10;
    let nummer2 = 20;
    console.log("\nnummer1 + nummer2 = " + nummer1 + " + " + nummer2 + " = " + (nummer1 + nummer2) + " (addition)");
    console.log("\"Summa: \" + nummer1 + nummer2 = \"Summa: \" + " + nummer1 + " + " + nummer2);
    console.log("Resultat: \"Summa: " + ("Summa: " + nummer1 + nummer2) + "\" (konkatenering!)");
    console.log("För att addera TAL i en sträng, använd parenteser: \"Summa: \" + (nummer1 + nummer2)");
    console.log("Resultat: \"Summa: " + ("Summa: " + (nummer1 + nummer2)) + "\"");
    
    // 4. JÄMFÖRELSE: Addition vs Konkatenering
    console.log("\n=== JÄMFÖRELSE: ADDITION VS KONKATENERING ===");
    let a = 5;
    let b = 10;
    console.log("a = " + a + ", b = " + b);
    console.log("a + b (utan citattecken) = " + (a + b) + " → ADDERAR (nummer + nummer)");
    console.log("\"a + b\" (med citattecken) = \"a + b\" → STRÄNG (bokstavligt)");
    console.log("\"\" + a + b = \"\" + " + a + " + " + b + " = \"" + ("" + a + b) + "\" → KONKATENERAR (sträng + nummer)");
    console.log("\"\" + (a + b) = \"\" + (" + a + " + " + b + ") = \"" + ("" + (a + b)) + "\" → FÖRST ADDERA, SEDAN KONKATENERA");
}

// ============================================
// SECTION 3: TYPEOF EXEMPEL (Grundläggande) (STANDARD)
// Kör med: node ".\övning-fil.js" types
// ============================================
if (section === "types" || section === "all" || runStandard) {
    if (section === "all" || runStandard) console.log("\n");
    console.log("=".repeat(50));
    console.log("=== DATATYPER (typeof) - GRUNDLÄGGANDE ===");
    console.log("=".repeat(50));
    
    let namn = "Anna";
    let alder = 28;
    let stad = "Stockholm";
    const username = "DittAnvandarnamn";
    const project = "DittProjekt";
    
    console.log("typeof namn: " + typeof namn + " (värdet: " + namn + ")");
    console.log("typeof alder: " + typeof alder + " (värdet: " + alder + ")");
    console.log("typeof stad: " + typeof stad + " (värdet: " + stad + ")");
    console.log("typeof username: " + typeof username + " (värdet: " + username + ")");
    console.log("typeof project: " + typeof project + " (värdet: " + project + ")");
}

// ============================================
// SECTION 4: ALLA DATATYPER I JAVASCRIPT (ADVANCED)
// Kör med: node ".\övning-fil.js" alltypes
// ============================================
if (section === "alltypes" || section === "all" || runAdvanced) {
    if (section === "all" || runAdvanced) console.log("\n");
    console.log("=".repeat(50));
    console.log("=== ALLA DATATYPER I JAVASCRIPT ===");
    console.log("=".repeat(50));
    
    // 1. STRING (sträng) - text
    let text = "Hej världen";
    console.log("typeof text: " + typeof text + " (värdet: " + text + ")");
    
    // 2. NUMBER (nummer) - heltal eller decimaltal
    let number = 42;
    let decimal = 3.14;
    console.log("typeof number: " + typeof number + " (värdet: " + number + ")");
    console.log("typeof decimal: " + typeof decimal + " (värdet: " + decimal + ")");
    
    // 2b. NaN (Not a Number) - ogiltigt nummer
    let invalidNumber = 0 / 0; // Division med noll ger NaN
    let stringToNumber = Number("hej"); // Konvertera text till nummer ger NaN
    let multiplyString = "abc" * 5; // Multiplicera text med nummer ger NaN
    console.log("typeof invalidNumber: " + typeof invalidNumber + " (värdet: " + invalidNumber + ")");
    console.log("typeof stringToNumber: " + typeof stringToNumber + " (värdet: " + stringToNumber + ")");
    console.log("typeof multiplyString: " + typeof multiplyString + " (värdet: " + multiplyString + ")");
    console.log("OBS: typeof NaN returnerar 'number' - men NaN betyder 'Not a Number'!");
    console.log("För att kontrollera om något är NaN, använd isNaN() eller Number.isNaN():");
    console.log("isNaN(invalidNumber): " + isNaN(invalidNumber));
    console.log("Number.isNaN(invalidNumber): " + Number.isNaN(invalidNumber));
    
    // 3. BOOLEAN (boolesk) - true eller false
    let isActive = true;
    let isInactive = false;
    console.log("typeof isActive: " + typeof isActive + " (värdet: " + isActive + ")");
    console.log("typeof isInactive: " + typeof isInactive + " (värdet: " + isInactive + ")");
    
    // 4. UNDEFINED - variabel som inte har tilldelats något värde
    let notDefined;
    console.log("typeof notDefined: " + typeof notDefined + " (värdet: " + notDefined + ")");
    
    // 5. NULL - avsiktligt tomt värde
    let empty = null;
    console.log("typeof empty: " + typeof empty + " (värdet: " + empty + ")");
    console.log("OBS: typeof null returnerar 'object' - detta är ett känt JavaScript-fel!");
    
    // 6. OBJECT (objekt) - samling av nyckel-värde par
    let person = { name: "Anna", age: 28 };
    console.log("typeof person: " + typeof person + " (värdet: " + JSON.stringify(person) + ")");
    
    // 7. ARRAY (array) - lista av värden
    let numbers = [1, 2, 3];
    let fruits = ["äpple", "banan", "citron"];
    console.log("typeof numbers: " + typeof numbers + " (värdet: " + JSON.stringify(numbers) + ")");
    console.log("typeof fruits: " + typeof fruits + " (värdet: " + JSON.stringify(fruits) + ")");
    console.log("OBS: typeof array returnerar 'object' - arrays är objekt i JavaScript!");
    
    // 8. FUNCTION (funktion) - en funktion
    function greet() {
        return "Hej!";
    }
    let myFunction = function() { return "Hej igen!"; };
    console.log("typeof greet: " + typeof greet + " (värdet: [Function])");
    console.log("typeof myFunction: " + typeof myFunction + " (värdet: [Function])");
}

// ============================================
// SECTION 5: SAMMANFATTNING OCH NOT AVAILABLE (ADVANCED)
// Kör med: node ".\övning-fil.js" summary
// ============================================
if (section === "summary" || section === "all" || runAdvanced) {
    if (section === "all" || runAdvanced) console.log("\n");
    console.log("=".repeat(50));
    console.log("=== SAMMANFATTNING: ALLA DATATYPER ===");
    console.log("=".repeat(50));
    
    console.log("1. string   - text (\"Hej\")");
    console.log("2. number   - tal (42, 3.14)");
    console.log("2b. NaN     - ogiltigt nummer (typeof returnerar 'number'!)");
    console.log("3. boolean  - true eller false");
    console.log("4. undefined - inte definierad");
    console.log("5. object   - objekt och arrays");
    console.log("6. function - funktioner");
    console.log("7. null     - tomt värde (returnerar 'object' med typeof)");
    
    // NÄR NÅGOT INTE FINNS (NOT AVAILABLE):
    console.log("\n=== NÄR NÅGOT INTE FINNS (NOT AVAILABLE) ===");
    let user = { name: "Anna" };
    let notExists = user.email; // Egenskap som inte finns
    console.log("typeof notExists: " + typeof notExists + " (värdet: " + notExists + ")");
    console.log("När en egenskap inte finns → undefined");
}

// ============================================
// SECTION 6: ARRAYS VS OBJEKT (ADVANCED)
// Kör med: node ".\övning-fil.js" arrays
// ============================================
if (section === "arrays" || section === "all" || runAdvanced) {
    if (section === "all" || runAdvanced) console.log("\n");
    console.log("=".repeat(50));
    console.log("=== ARRAYS VS OBJEKT ===");
    console.log("=".repeat(50));
    
    let numbers = [1, 2, 3];
    let person = { name: "Anna", age: 28 };
    
    console.log("typeof numbers: " + typeof numbers + " (Detta är faktiskt en array!)");
    console.log("typeof person: " + typeof person + " (Detta är ett objekt)");
    console.log("\nBåda returnerar 'object', men de är olika typer!");
    console.log("För att kontrollera om något är en array, använd Array.isArray():");
    console.log("Array.isArray(numbers): " + Array.isArray(numbers));
    console.log("Array.isArray(person): " + Array.isArray(person));
}

// ============================================
// SECTION 7: OBJEKT VS ARRAYS VS KLASSER/MODELS (ADVANCED)
// Kör med: node ".\\övning-fil.js" objects
// ============================================
if (section === "objects" || section === "all" || runAdvanced) {
    if (section === "all" || runAdvanced) console.log("\n");
    console.log("=".repeat(50));
    console.log("=== OBJEKT VS ARRAYS VS KLASSER/MODELS ===");
    console.log("=".repeat(50));

    // 1) OBJEKT (key-value, ordningen spelar ingen roll)
    const userObject = { id: 1, name: "Anna", city: "Stockholm" };
    console.log("Objekt:", userObject);
    console.log("Åtkomst med nyckel userObject.name ->", userObject.name);
    console.log("typeof userObject ->", typeof userObject);

    // 2) ARRAY (indexerad lista, ordning viktig)
    const citiesArray = ["Stockholm", "Göteborg", "Malmö"];
    console.log("Array:", citiesArray);
    console.log("Åtkomst med index citiesArray[1] ->", citiesArray[1]);
    console.log("typeof citiesArray ->", typeof citiesArray, "| Array.isArray ->", Array.isArray(citiesArray));
    citiesArray.push("Uppsala");
    console.log("Array efter push ->", citiesArray);

    // 3) Andra primitiva typer för jämförelse
    const s = "Hej"; const n = 42; const b = true; const u = undefined; const nul = null;
    console.log("Primitiver: string ->", typeof s, ", number ->", typeof n, ", boolean ->", typeof b);
    console.log("undefined ->", typeof u, ", null -> 'object' (JS-quirk)");

    // 4) KLASS – vanligt sätt att modellera "modell"-lika objekt
    class User {
        constructor(id, name, email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }
        isEmailValid() { return /@/.test(this.email); }
        toJSON() { return { id: this.id, name: this.name, email: this.email }; }
    }
    const userFromClass = new User(2, "Erik", "erik@example.com");
    console.log("Klass-instans:", userFromClass.toJSON(), "| isEmailValid ->", userFromClass.isEmailValid());

    // 5) FACTORY FUNCTION – klassiskt JS-sätt att skapa "modell"-objekt
    function createUser(id, name, email) {
        return {
            id,
            name,
            email,
            isEmailValid: () => /@/.test(email)
        };
    }
    const userFromFactory = createUser(3, "Maria", "maria@example.com");
    console.log("Factory-objekt:", userFromFactory, "| isEmailValid ->", userFromFactory.isEmailValid());

    // 6) Not om "models" i JS-ekosystemet
    console.log("\nNote om models:");
    console.log("- Vanilla JS har inga 'Model'-klasser inbyggt som i C#/Python frameworks.");
    console.log("- Man bygger modeller med classes eller factory functions.");
    console.log("- I Node.js används ofta Prisma/Sequelize/TypeORM (SQL) eller Mongoose (MongoDB) för riktiga 'Model'-abstraktioner.");
    console.log("- För validering/former används schema-bibliotek som Zod/Yup/Joi.");
}

// Visa meddelande om ogiltigt section
if (!["vars", "addition", "types", "alltypes", "summary", "arrays", "objects", "all", "standard", "advanced", "public", "private", "restricted"].includes(section)) {
    console.log("⚠️  Ogiltigt section: " + section);
    showHelp();
}