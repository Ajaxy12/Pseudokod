# Runtime Definition / Runtime-definition

## Svenska / Swedish

### Vad betyder "runtime"?

**Runtime** = tiden när programmet körs (under körning), inte när det skrivs eller kompileras.

### Varför används ordet så mycket?

Det är en vanlig term i programmering för att skilja mellan olika faser:

#### 1. **Kompileringstid (Compile-time)**

- När koden skrivs/kompileras
- Ett fel kan hittas innan programmet körs
- Exempel: `const x = 100;` är definierat vid compile-time

#### 2. **Körningstid (Runtime)**

- När programmet faktiskt körs
- Användaren interagerar med programmet
- Exempel: När användaren matar in värden i `prompt()`

### Exempel från vår kod:

```javascript
// COMPILE-TIME (när koden skrivs):
const DEFAULT_TOTAL_SUMMA = 500; // Definierat redan här

// RUNTIME (när programmet körs):
const totalSummaInput = prompt("Ange summa:"); // Användaren matar in här
const totalSumma = parseFloat(totalSummaInput) || DEFAULT_TOTAL_SUMMA; 
// Värdet bestäms vid runtime baserat på användarens input
```

### Andra vanliga termer:

- **Runtime environment** = miljön där programmet körs (webbläsare, Node.js)
- **Runtime error** = fel som uppstår när programmet körs (inte vid skrivning)
- **Runtime value** = värde som bestäms vid körning (inte vid skrivning)

### I våra filer:

- **Compile-time**: `const DEFAULT_TOTAL_SUMMA = 500` är fast när koden skrivs
- **Runtime**: När användaren klickar på knappen och matar in värden → dessa värden skapas vid körning

Så "runtime" är när programmet faktiskt körs och användaren interagerar med det, inte när koden skrivs.

---

## English

### What does "runtime" mean?

**Runtime** = the time when the program is running (during execution), not when it's written or compiled.

### Why is the word used so much?

It's a common term in programming to distinguish between different phases:

#### 1. **Compile-time**

- When the code is written/compiled
- Errors can be found before the program runs
- Example: `const x = 100;` is defined at compile-time

#### 2. **Runtime**

- When the program is actually running
- The user interacts with the program
- Example: When the user enters values in `prompt()`

### Example from your code:

```javascript
// COMPILE-TIME (when code is written):
const DEFAULT_TOTAL_SUMMA = 500; // Defined here

// RUNTIME (when program runs):
const totalSummaInput = prompt("Enter amount:"); // User enters here
const totalSumma = parseFloat(totalSummaInput) || DEFAULT_TOTAL_SUMMA; 
// Value is determined at runtime based on user input
```

### Other common terms:

- **Runtime environment** = the environment where the program runs (browser, Node.js)
- **Runtime error** = error that occurs when the program runs (not during writing)
- **Runtime value** = value determined at runtime (not at writing)

### In your files:

- **Compile-time**: `const DEFAULT_TOTAL_SUMMA = 500` is fixed when code is written
- **Runtime**: When the user clicks the button and enters values → these values are created at runtime

So "runtime" is when the program is actually running and the user interacts with it, not when the code is written.

---

## Sammanfattning / Summary

| Term | Svenska | English |
|------|---------|---------|
| **Compile-time** | Kompileringstid | Compile-time |
| **Runtime** | Körningstid | Runtime |
| **Runtime environment** | Körningsmiljö | Runtime environment |
| **Runtime error** | Körningsfel | Runtime error |
| **Runtime value** | Körningsvärde | Runtime value |

---

## Compile-time Skillnader Mellan Olika Programmeringsspråk
## Compile-time Differences Between Programming Languages

### Svenska / Swedish

#### 1. **JavaScript**
- **Typ:** Tolkas (Interpreted) eller Just-In-Time kompilerad (JIT)
- **När kompileras:** På servern/client i realtid när programmet körs
- **Vart:** I webbläsaren (V8 engine) eller Node.js runtime
- **Exempel:** Vår HTML-fil körs direkt utan förkompilering - JavaScript tolkas vid körning

#### 2. **Python**
- **Typ:** Tolkas (Interpreted), kan kompileras till bytecode
- **När kompileras:** På servern när filen körs första gången (kompileras till `.pyc` bytecode)
- **Vart:** Python interpreter på servern körs direkt
- **Exempel:** `python script.py` - tolkas direkt, eller kompileras till bytecode för snabbare körning

#### 3. **PHP**
- **Typ:** Tolkas (Interpreted), kan kompileras till opcode  
  - _Vad betyder opcode?_  
    **Opcode** står för "operation code" och är en låg-nivå instruktion som en virtuell maskin (t.ex. PHP:s motor) förstår. När PHP-koden tolkas, översätts den först från källkod till så kallad "opcode" (intern maskinliknande instruktioner), som sedan körs snabbare av själva PHP-motorn. Så opcode är ett slags "mellansteg" mellan vår källkod och riktiga maskininstruktioner.
- **När kompileras:** På servern när sidan begärs (varje HTTP-request)
- **Vart:** PHP interpreter kompilerar och kör direkt på servern
- **Exempel:** När någon besöker vår webbsida körs PHP-koden direkt

#### 4. **C++**
- **Typ:** Kompileras (Compiled)
- **När kompileras:** INNAN programmet körs - man måste kompilera först
- **Vart:** Kompileras till maskinkod på vår dator
- **Exempel:** `g++ program.cpp -o program` → skapar körbar fil → sedan körs den

#### 5. **C#**
- **Typ:** Kompileras till bytecode (IL), sedan JIT-kompileras
- **När kompileras:** INNAN körning kompileras till IL, sedan JIT-kompileras vid första körning
- **Vart:** `.cs` → `.dll/.exe` (IL bytecode) → JIT-kompileras till maskinkod vid körning
- **Exempel:** `dotnet build` → skapar IL bytecode → körs med .NET runtime som JIT-kompilerar

#### 6. **C**
- **Typ:** Kompileras (Compiled)
- **När kompileras:** INNAN programmet körs - man måste kompilera först
- **Vart:** Kompileras direkt till maskinkod på vår dator
- **Exempel:** `gcc program.c -o program` → skapar körbar fil → sedan körs den

#### 7. **Go**
- **Typ:** Kompileras (Compiled)
- **När kompileras:** INNAN programmet körs - kompileras till en enda körbar fil
- **Vart:** Kompileras till maskinkod på vår dator
- **Exempel:** `go build` → skapar en körbar fil → sedan körs den direkt

#### 8. **Ruby**
- **Typ:** Tolkas (Interpreted), kan kompileras till bytecode
- **När kompileras:** På servern när filen körs första gången
- **Vart:** Ruby interpreter på servern körs direkt
- **Exempel:** `ruby script.rb` - tolkas direkt, eller kan kompileras till bytecode

### Jämförelsetabell / Comparison Table

| Språk | Typ | Kompilering | När | Var |
|-------|-----|-------------|-----|-----|
| **JavaScript** | Interpreted/JIT | På servern/client i realtid | Vid körning | Browser/Node.js |
| **Python** | Interpreted | Bytecode på servern | Vid första körning | Python interpreter |
| **PHP** | Interpreted | Opcode på servern | Vid varje request | PHP interpreter |
| **C++** | Compiled | INNAN körning | Manuellt först | Vår dator (maskinkod) |
| **C#** | Compiled → JIT | IL först, sedan JIT | IL innan, JIT vid körning | .NET runtime |
| **C** | Compiled | INNAN körning | Manuellt först | Vår dator (maskinkod) |
| **Go** | Compiled | INNAN körning | Manuellt först | Vår dator (maskinkod) |
| **Ruby** | Interpreted | Bytecode på servern | Vid första körning | Ruby interpreter |

### English

#### 1. **JavaScript**
- **Type:** Interpreted or Just-In-Time compiled (JIT)
- **When compiled:** On server/client in real-time when program runs
- **Where:** In browser (V8 engine) or Node.js runtime
- **Example:** Your HTML file runs directly without pre-compilation - JavaScript is interpreted at runtime

#### 2. **Python**
- **Type:** Interpreted, can compile to bytecode
- **When compiled:** On server when file runs first time (compiles to `.pyc` bytecode)
- **Where:** Python interpreter on server runs directly
- **Example:** `python script.py` - interpreted directly, or compiled to bytecode for faster execution

#### 3. **PHP**
- **Type:** Interpreted, can compile to opcode
- **When compiled:** On server when page is requested (every HTTP request)
- **Where:** PHP interpreter compiles and runs directly on server
- **Example:** When someone visits your webpage, PHP code runs directly

#### 4. **C++**
- **Type:** Compiled
- **When compiled:** BEFORE program runs - must compile first
- **Where:** Compiled to machine code on your computer
- **Example:** `g++ program.cpp -o program` → creates executable → then runs it

#### 5. **C#**
- **Type:** Compiled to bytecode (IL), then JIT-compiled
- **When compiled:** Before execution compiles to IL, then JIT-compiled on first run
- **Where:** `.cs` → `.dll/.exe` (IL bytecode) → JIT-compiled to machine code at runtime
- **Example:** `dotnet build` → creates IL bytecode → runs with .NET runtime that JIT-compiles

#### 6. **C**
- **Type:** Compiled
- **When compiled:** BEFORE program runs - must compile first
- **Where:** Compiled directly to machine code on your computer
- **Example:** `gcc program.c -o program` → creates executable → then runs it

#### 7. **Go**
- **Type:** Compiled
- **When compiled:** BEFORE program runs - compiles to single executable file
- **Where:** Compiled to machine code on your computer
- **Example:** `go build` → creates executable → then runs it directly

#### 8. **Ruby**
- **Type:** Interpreted, can compile to bytecode
- **When compiled:** On server when file runs first time
- **Where:** Ruby interpreter on server runs directly
- **Example:** `ruby script.rb` - interpreted directly, or can compile to bytecode

### Comparison Table

| Language | Type | Compilation | When | Where |
|----------|------|-------------|------|-------|
| **JavaScript** | Interpreted/JIT | On server/client in real-time | At runtime | Browser/Node.js |
| **Python** | Interpreted | Bytecode on server | At first run | Python interpreter |
| **PHP** | Interpreted | Opcode on server | On each request | PHP interpreter |
| **C++** | Compiled | BEFORE execution | Manually first | Your computer (machine code) |
| **C#** | Compiled → JIT | IL first, then JIT | IL before, JIT at runtime | .NET runtime |
| **C** | Compiled | BEFORE execution | Manually first | Your computer (machine code) |
| **Go** | Compiled | BEFORE execution | Manually first | Your computer (machine code) |
| **Ruby** | Interpreted | Bytecode on server | At first run | Ruby interpreter |

### Nyckelinsikt / Key Insight

**Svenska:**  
Const-värden definieras vid compile-time och kan inte ändras. Vid runtime skapar vi nya variabler som "överskrider" default-värdena - vi ersätter inte själva const-konstanterna.

**English:**  
Const values are defined at compile-time and cannot be changed. At runtime, we create new variables that "override" the default values - we do not replace the const constants themselves.

### Viktig Skillnad / Important Difference

**Svenska:**  
- **Kompilerade språk** (C, C++, Go): Måste kompileras INNAN körning → snabbare körning, men måste kompilera först
- **Tolkade språk** (JavaScript, Python, PHP, Ruby): Körs direkt → enklare utveckling, men långsammare körning
- **Hybrid** (C#): Kompileras till bytecode först, sedan JIT-kompileras vid körning → balans mellan hastighet och flexibilitet

**English:**  
- **Compiled languages** (C, C++, Go): Must compile BEFORE execution → faster execution, but must compile first
- **Interpreted languages** (JavaScript, Python, PHP, Ruby): Run directly → easier development, but slower execution
- **Hybrid** (C#): Compiled to bytecode first, then JIT-compiled at runtime → balance between speed and flexibility

