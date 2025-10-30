# Pseudokod Implementation Project

> **JavaScript Study Guide & Practical Examples** - En omfattande studieguide för att lära JavaScript genom pseudokod-implementationer, praktiska algoritmer och interaktiva övningar. Innehåller exempel på variabler, datatyper, objekt, arrays, klasser och runtime-koncept.

Detta projekt demonstrerar pseudokod genom två praktiska algoritmer: **Split the Nota** (restaurangnota) och **GitHub Workflow** (från lokal fil till GitHub).

## 📁 Projektstruktur

### Huvudfiler:
- **`script.js`** - Pseudokod implementationer med konfigurerbara värden
- **`working-code.js`** - Fungerande JavaScript kod med interaktiv terminal
- **`script-prompt.html`** - HTML-fil med browser modal och prompt-formulär för Split the Nota
- **`övning-fil.js`** - Omfattande övningsfil med sections för att lära JavaScript koncept (variabler, datatyper, objekt, arrays, klasser)

### Dokumentation:
- **`GITHUB_SETUP_GUIDE.md`** - Komplett guide för GitHub setup
- **`runtime-definition.md`** - Detaljerad förklaring av runtime/compile-time med jämförelser mellan olika programmeringsspråk (JavaScript, Python, PHP, C++, C#, C, Go, Ruby)
- **`README.md`** - Denna fil

## 🚀 Snabbstart

### Kör den interaktiva versionen:
```bash
cd /path/to/your/project
node working-code.js
```

### Välj från menyn:
1. **Split the Nota** (med interaktiv input)
2. **GitHub Workflow** (med interaktiv input)  
3. **Kör exempel med standardvärden**
4. **Avsluta**

### Kör webbläsarversionen:
Öppna `script-prompt.html` i din webbläsare för en interaktiv version med modal och prompt-formulär.

### Kör övningsfilen:
```bash
node ".\övning-fil.js" [section]
```

Tillgängliga sections:
- `vars` - Variabler och konstanter
- `addition` - Addera tal och konkatenera strängar
- `types` - typeof-exempel
- `alltypes` - Alla datatyper i JavaScript
- `objects` - Objekt vs arrays vs klasser/models
- `arrays` - Arrays vs objekt
- `summary` - Sammanfattning av datatyper
- `standard` - Kör alla standard sections
- `advanced` - Kör alla advanced sections
- `all` - Kör alla sections
- `help` - Visa hjälp

## 🍽️ Split the Nota - Restaurant Bill Splitter

Räknar ut hur mycket varje vän ska betala på en restaurang när notan kommer.

### Funktioner:
- ✅ **Konfigurerbara värden** - Enkelt att ändra standardvärden
- ✅ **Interaktiv input** - Välj mellan standardvärden eller ange egna
- ✅ **Automatisk beräkning** - Dricks, total summa och per person
- ✅ **Svenska kommentarer** - Fullständigt dokumenterat

### Standardvärden:
- Total summa: 500 kr
- Antal vänner: 4
- Dricks: 15% (0.15)

### Exempel output:
```
Total summa: 500 kr
Dricks (15%): 75.00 kr
Summa med dricks: 575.00 kr
Varje vän ska betala: 143.75 kr
```

## 🔄 GitHub Workflow

Demonstrerar steg-för-steg processen att få en fil från lokal utveckling till GitHub.

### Funktioner:
- ✅ **Konfigurerbara värden** - Anpassa commit meddelande, URL och branch
- ✅ **Interaktiv input** - Välj mellan standardvärden eller ange egna
- ✅ **Komplett workflow** - Alla 5 steg från git init till push
- ✅ **Svenska kommentarer** - Fullständigt dokumenterat

### Standardvärden:
- Commit meddelande: "Initial commit: Add project files"
- Repository URL: "https://github.com/YourUsername/YourProject.git"
- Branch namn: "main"

### Workflow steg:
1. `git init` - Initiera repository
2. `git add .` - Lägg till filer
3. `git commit -m 'meddelande'` - Commita ändringar
4. `git remote add origin URL` - Koppla till GitHub
5. `git push -u origin branch` - Pusha till GitHub

## 🛠️ Tekniska Detaljer

### Använda teknologier:
- **JavaScript** - Körs med Node.js
- **Readline** - För interaktiv terminal input
- **Template Literals** - För dynamisk text formatering
- **Git** - För versionshantering

### Kodstruktur:
- **Konfigurationsobjekt** - Centraliserade inställningar
- **Modulära funktioner** - Separata funktioner för varje algoritm
- **Felhantering** - Fallback till standardvärden
- **Svenska kommentarer** - Pedagogiska förklaringar

## 📚 Lärande Mål

Detta projekt demonstrerar:

### Datalogiskt tänkande:
- ✅ **Decomposition** - Dela upp komplexa problem
- ✅ **Pattern Recognition** - Hitta mönster i processer
- ✅ **Abstraction** - Abstrahera detaljer till algoritmer
- ✅ **Algorithm Design** - Designa steg-för-steg lösningar

### Praktiska färdigheter:
- ✅ **Pseudokod** - Skriva algoritmer på svenska
- ✅ **JavaScript** - Implementera algoritmer i kod
- ✅ **Git/GitHub** - Versionshantering och samarbete
- ✅ **Terminal** - Kommandorad interaktion

## 🔧 Konfiguration

Alla värden kan enkelt ändras i konfigurationsobjekten:

### Split the Nota:
```javascript
const CONFIG = {
    TOTAL_SUMMA: 500,        // Total bill amount in kr
    ANTAL_VANNER: 4,         // Number of friends
    DRICKS_PROCENT: 0.15,    // Tip percentage (0.15 = 15%)
};
```

### GitHub Workflow:
```javascript
const CONFIG = {
    COMMIT_MESSAGE: "Initial commit: Add project files",
    REPOSITORY_URL: "https://github.com/YourUsername/YourProject.git",
    BRANCH_NAME: "main"
};
```

## 📱 Nya Filer och Funktioner

### `script-prompt.html`
En interaktiv webbläsarversion av Split the Nota med:
- ✅ **Modal-dialog** för resultatvisning
- ✅ **Prompt-formulär** för användarinput
- ✅ **Debug-loggning** med flagga för development/production
- ✅ **Responsiv design** med modern UI
- ✅ **Const-defaults** som överskrivs vid runtime (inte ersätts)

**Användning:** Öppna filen direkt i webbläsaren - inga extra installationer behövs!

### `övning-fil.js`
En omfattande övningsfil för att lära JavaScript med körbara sections:
- ✅ **Sections-system** - Kör specifika delar separat
- ✅ **Standard vs Advanced** - Organiserad efter svårighetsgrad
- ✅ **JavaScript-koncept:** Variabler, konstanter, datatyper, objekt, arrays, klasser
- ✅ **Const vs Variable** - Förklaring av mutable/immutable
- ✅ **Runtime vs Compile-time** - Exempel på när värden bestäms

**Användning:** `node ".\övning-fil.js" [section]` för att köra specifika sections

### `runtime-definition.md`
Detaljerad dokumentation om runtime och compile-time:
- ✅ **Förklaring** på svenska och engelska
- ✅ **Jämförelse** mellan 8 programmeringsspråk (JavaScript, Python, PHP, C++, C#, C, Go, Ruby)
- ✅ **When/Where** - När och var kompilering sker för varje språk
- ✅ **Praktiska exempel** från projektets kod
- ✅ **Tabeller** för snabb översikt

**Användning:** Referensdokument för att förstå runtime-koncept

## 📖 Ytterligare Resurser

- [Pseudokod Cheat Sheet](https://gist.github.com/zocom-christoffer-wallenberg/dbb443c26407cfec308f9578ccf9845a)
- [GitHub Setup Guide](GITHUB_SETUP_GUIDE.md) - Komplett guide för GitHub
- [Runtime Definition](runtime-definition.md) - Förklaring av runtime/compile-time
- [Datalogiskt tänkande video](https://www.youtube.com/watch?v=cDA3_5982h8)

## 🎯 Originalövningar

### 1. Komma igång med pseudokod
1. Titta på denna [video](https://www.youtube.com/watch?v=cDA3_5982h8)
2. Skriv pseudokod för ett recept du hittar på t ex [ICA](https://www.ica.se/)
3. Använd datalogiskt tänkande på processen:
     - Dela upp - decomposition
     - Hitta mönster - pattern recognition
     - Abstrahera - abstraction
     - Designa en algoritm

### 2. App med pseudokod!

Du ska i denna övning skriva pseudokod för nedanstående problem. Om du vill kan du använda dig av de keywords som finns i detta [cheat sheet](https://gist.github.com/zocom-christoffer-wallenberg/dbb443c26407cfec308f9578ccf9845a).

All "kodning" finns i filen `script.js` (pseudokod) och `working-code.js` (fungerande JavaScript).

#### Split the nota

Split the nota räknar ut hur mycket varje vän ska betala på exempelvis en restaurang när notan kommer. Användaren matar in summan, antal vänner och sedan dricks (**som skrivs i decimalform d.v.s 10% blir 0.10**).

**Räkna ut**

![alt text](https://user-images.githubusercontent.com/54267140/108719099-75757500-751f-11eb-8c3b-f80a1dca7956.png)

**Visa summa**

![alt text](https://user-images.githubusercontent.com/54267140/108719104-76a6a200-751f-11eb-9d43-8d3d7b355793.png)

### 3. GitHub med pseudokod

Med hjälp av pseudokod ska du skapa en algoritm för att följa en html-fil från att den börjar trackas av Git till att den finns uppe på GitHub. Vilka steg behöver man följa? Vilka kommandon används?

Se [GITHUB_SETUP_GUIDE.md](GITHUB_SETUP_GUIDE.md) för komplett guide!

## 👥 Contributors

Tack till alla som har bidragit till detta projekt:

- **[@Ajaxy12](https://github.com/Ajaxy12)** - Projektägare och huvudutvecklare
- **[@rachel-zocom](https://github.com/rachel-zocom)** - Rachel Richter - Lärare som hjälpte med bas-mallen för pseudokoden och handledning under utvecklingen

**Tack till min lärare för hjälpen med bas-mallen av pseudokoden!**

## 📜 Licens

Copyright (c) 2025 Pseudokod Study Guide - All Rights Reserved

**Viktigt:** Denna kod är proprietär och konfidentiell. Återanvändning, kopiering, modifiering eller distribution är STRENGT FÖRBJUDEN.

Se [LICENSE](LICENSE) för fullständiga licensvillkor.

---

**Skapad av:** Ajaxy12  
**Repository:** [https://github.com/Ajaxy12/Pseudokod](https://github.com/Ajaxy12/Pseudokod)
