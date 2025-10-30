/*
HOW TO RUN THIS CODE:
====================

Location: C:\Users\Win88\Downloads\Front-end-developer\4. JavaScript 1\Vecka 1\Pseudokod && node working-code.js

Method 1 - Using Command Prompt/PowerShell (Windows):
1. Open Command Prompt or PowerShell
2. Navigate to the folder: cd C:\Users\YourName\YourProject
3. Run the code: node working-code.js

Method 2 - Using Terminal (Mac/Linux):
1. Open Terminal
2. Navigate to the folder: cd /Users/YourName/YourProject
3. Run the code: node working-code.js

Method 3 - Using VS Code Terminal:
1. Open VS Code
2. Open the folder: /path/to/your/project
3. Open terminal (Ctrl + ` or Cmd + `)
4. Run: node working-code.js

Method 4 - Direct execution:
1. Right-click on working-code.js
2. Select "Open with Node.js" (if available)

Expected Output:
- Split the Nota calculation example
- GitHub workflow steps
- Interactive menu (if uncommented)
*/

// Working JavaScript implementations of the pseudocode algorithms

// 1. Split the Nota - Restaurant Bill Splitter
function splitTheNota() {
    console.log("=== Split the Nota (Restaurant Bill Splitter) ===");
    
    // Default values from configuration
    // Heads up: These are const-like defaults that are NOT reassigned.
    // User inputs at runtime override these values via new variables,
    // we do not replace the defaults themselves.
    const DEFAULT_CONFIG = {
        TOTAL_SUMMA: 500,
        ANTAL_VANNER: 4,
        DRICKS_PROCENT: 0.15
    };
    
    // Get input from user (in a real app, this would be from forms)
    const totalSumma = parseFloat(prompt(`Ange totalbeloppet på notan (default: ${DEFAULT_CONFIG.TOTAL_SUMMA}):`)) || DEFAULT_CONFIG.TOTAL_SUMMA;
    const antalVanner = parseInt(prompt(`Ange antal vänner som delar notan (default: ${DEFAULT_CONFIG.ANTAL_VANNER}):`)) || DEFAULT_CONFIG.ANTAL_VANNER;
    const dricksProcent = parseFloat(prompt(`Ange dricks i decimalform (default: ${DEFAULT_CONFIG.DRICKS_PROCENT} för ${DEFAULT_CONFIG.DRICKS_PROCENT * 100}%):`)) || DEFAULT_CONFIG.DRICKS_PROCENT;
    
    // Calculate tip amount
    const dricksBelopp = totalSumma * dricksProcent;
    
    // Calculate total including tip
    const summaMedDricks = totalSumma + dricksBelopp;
    
    // Calculate amount per person
    const attBetalaPerPerson = summaMedDricks / antalVanner;
    
    // Display results
    console.log(`Total summa: ${totalSumma} kr`);
    console.log(`Dricks (${dricksProcent * 100}%): ${dricksBelopp.toFixed(2)} kr`);
    console.log(`Summa med dricks: ${summaMedDricks.toFixed(2)} kr`);
    console.log(`Varje vän ska betala: ${attBetalaPerPerson.toFixed(2)} kr`);
    
    return attBetalaPerPerson;
}

// 2. GitHub Workflow - Step by step process
function gitHubWorkflow() {
    console.log("\n=== GitHub Workflow (From Local File to GitHub) ===");
    
    // Simulate the workflow steps
    console.log("1. Initierar git repository...");
    console.log("   → git init");
    
    console.log("2. Lägger till filer...");
    console.log("   → git add .");
    
    const commitMeddelande = prompt("Ange commit-meddelande:");
    console.log("3. Commitar ändringar...");
    console.log(`   → git commit -m "${commitMeddelande}"`);
    
    const remoteUrl = prompt("Ange GitHub repository URL:");
    console.log("4. Kopplar till remote repository...");
    console.log(`   → git remote add origin ${remoteUrl}`);
    
    console.log("5. Pushar till GitHub...");
    console.log("   → git push -u origin main");
    
    console.log("\n✅ Filen är nu uppe på GitHub!");
}

// 3. Interactive menu
function showMenu() {
    console.log("\n=== Pseudokod Implementation Menu ===");
    console.log("1. Split the Nota (Restaurant Bill Splitter)");
    console.log("2. GitHub Workflow");
    console.log("3. Exit");
    
    const choice = prompt("Välj en option (1-3):");
    
    switch(choice) {
        case "1":
            splitTheNota();
            break;
        case "2":
            gitHubWorkflow();
            break;
        case "3":
            console.log("Tack för att du använde programmet!");
            return;
        default:
            console.log("Ogiltigt val. Försök igen.");
            showMenu();
    }
}

// Example with predefined values (for testing without prompts)
function runExamples() {
    console.log("=== Exempel med fördefinierade värden ===");
    
    // ========================================
    // CONFIGURATION - Change these values easily!
    // ========================================
    
    // Split the Nota Configuration
    const CONFIG = {
        // Restaurant Bill Settings
        TOTAL_SUMMA: 500,        // Total bill amount in kr
        ANTAL_VANNER: 4,         // Number of friends splitting the bill
        DRICKS_PROCENT: 0.15,    // Tip percentage (0.15 = 15%)
        
        // GitHub Workflow Settings
        COMMIT_MESSAGE: "Initial commit: Add project files",
        REPOSITORY_URL: "https://github.com/YourUsername/YourProject.git",
        BRANCH_NAME: "main"
    };
    
    // Example 1: Split the Nota
    console.log("\n--- Split the Nota Exempel ---");
    const totalSumma = CONFIG.TOTAL_SUMMA;
    const antalVanner = CONFIG.ANTAL_VANNER;
    const dricksProcent = CONFIG.DRICKS_PROCENT;
    
    const dricksBelopp = totalSumma * dricksProcent;
    const summaMedDricks = totalSumma + dricksBelopp;
    const attBetalaPerPerson = summaMedDricks / antalVanner;
    
    console.log(`Total summa: ${totalSumma} kr`);
    console.log(`Dricks (${dricksProcent * 100}%): ${dricksBelopp.toFixed(2)} kr`);
    console.log(`Summa med dricks: ${summaMedDricks.toFixed(2)} kr`);
    console.log(`Varje vän ska betala: ${attBetalaPerPerson.toFixed(2)} kr`);
    
    // Example 2: GitHub Workflow
    console.log("\n--- GitHub Workflow Exempel ---");
    console.log("Steg för att få en fil från lokal utveckling till GitHub:");
    console.log("1. git init                    # Initiera repository");
    console.log("2. git add .                   # Lägg till filer");
    console.log(`3. git commit -m '${CONFIG.COMMIT_MESSAGE}'  # Commita ändringar`);
    console.log(`4. git remote add origin ${CONFIG.REPOSITORY_URL} # Koppla till GitHub`);
    console.log(`5. git push -u origin ${CONFIG.BRANCH_NAME}     # Pusha till GitHub`);
    
    console.log("\n--- Konfiguration som används ---");
    console.log(`Commit meddelande: "${CONFIG.COMMIT_MESSAGE}"`);
    console.log(`Repository URL: ${CONFIG.REPOSITORY_URL}`);
    console.log(`Branch namn: ${CONFIG.BRANCH_NAME}`);
}

// Interactive terminal version
function runInteractive() {
    console.log("=== Interaktiv Pseudokod Implementation ===");
    console.log("Välj vad du vill göra:");
    console.log("1. Split the Nota (med interaktiv input)");
    console.log("2. GitHub Workflow (med interaktiv input)");
    console.log("3. Kör exempel med standardvärden");
    console.log("4. Avsluta");
    
    // Import readline module för att hantera användarinput i terminalen
    const readline = require('readline');
    
    // Skapa en readline interface för att läsa input från stdin och skriva till stdout
    const rl = readline.createInterface({
        input: process.stdin,    // Läser från standard input (tangentbordet)
        output: process.stdout   // Skriver till standard output (terminalen)
    });
    
    // Fråga användaren att välja en option och vänta på svar
    rl.question("Välj en option (1-4): ", (choice) => {
        // Använd switch statement för att hantera olika val
        // trim() tar bort whitespace från början och slut
        switch(choice.trim()) {
            case "1":
                runSplitTheNotaInteractive(rl);
                break;
            case "2":
                runGitHubWorkflowInteractive(rl);
                break;
            case "3":
                runExamples();
                rl.close();
                break;
            case "4":
                console.log("Tack för att du använde programmet!");
                rl.close();
                break;
            default:
                console.log("Ogiltigt val. Försök igen.");
                runInteractive();
                break;
        }
    });
}

function runSplitTheNotaInteractive(rl) {
    console.log("\n=== Split the Nota - Interaktiv Version ===");
    
    const DEFAULT_CONFIG = {
        TOTAL_SUMMA: 500,
        ANTAL_VANNER: 4,
        DRICKS_PROCENT: 0.15
    };
    
    console.log("Använd standardvärden eller ange egna:");
    console.log(`Standardvärden: Total summa: ${DEFAULT_CONFIG.TOTAL_SUMMA} kr, Antal vänner: ${DEFAULT_CONFIG.ANTAL_VANNER}, Dricks: ${DEFAULT_CONFIG.DRICKS_PROCENT * 100}%`);
    
    // Fråga användaren om de vill använda standardvärden eller ange egna
    rl.question("Vill du använda standardvärden? (j/n): ", (useDefault) => {
        // Kontrollera om användaren svarade ja (j eller y, case-insensitive)
        // toLowerCase() gör om till små bokstäver för att hantera både J/j och Y/y
        if (useDefault.toLowerCase() === 'j' || useDefault.toLowerCase() === 'y') {
            // Use default values
            calculateSplitTheNota(DEFAULT_CONFIG.TOTAL_SUMMA, DEFAULT_CONFIG.ANTAL_VANNER, DEFAULT_CONFIG.DRICKS_PROCENT);
        } else {
            // Get custom values
            rl.question(`Ange totalbeloppet på notan (standard: ${DEFAULT_CONFIG.TOTAL_SUMMA}): `, (totalSumma) => {
                const total = parseFloat(totalSumma) || DEFAULT_CONFIG.TOTAL_SUMMA;
                
                rl.question(`Ange antal vänner som delar notan (standard: ${DEFAULT_CONFIG.ANTAL_VANNER}): `, (antalVanner) => {
                    const antal = parseInt(antalVanner) || DEFAULT_CONFIG.ANTAL_VANNER;
                    
                    rl.question(`Ange dricks i decimalform (standard: ${DEFAULT_CONFIG.DRICKS_PROCENT} för ${DEFAULT_CONFIG.DRICKS_PROCENT * 100}%): `, (dricksProcent) => {
                        const dricks = parseFloat(dricksProcent) || DEFAULT_CONFIG.DRICKS_PROCENT;
                        
                        calculateSplitTheNota(total, antal, dricks);
                        rl.close();
                    });
                });
            });
        }
    });
}

// Funktion för att beräkna och visa resultatet av Split the Nota
function calculateSplitTheNota(totalSumma, antalVanner, dricksProcent) {
    // Beräkna dricksbeloppet genom att multiplicera total summa med dricks procent
    const dricksBelopp = totalSumma * dricksProcent;
    
    // Beräkna total summa inklusive dricks
    const summaMedDricks = totalSumma + dricksBelopp;
    
    // Dela total summa på antal vänner för att få vad varje person ska betala
    const attBetalaPerPerson = summaMedDricks / antalVanner;
    
    // Visa resultatet formaterat med två decimaler
    console.log("\n--- Resultat ---");
    console.log(`Total summa: ${totalSumma} kr`);
    console.log(`Dricks (${dricksProcent * 100}%): ${dricksBelopp.toFixed(2)} kr`);
    console.log(`Summa med dricks: ${summaMedDricks.toFixed(2)} kr`);
    console.log(`Varje vän ska betala: ${attBetalaPerPerson.toFixed(2)} kr`);
}

// Funktion för att köra GitHub workflow interaktivt
function runGitHubWorkflowInteractive(rl) {
    console.log("\n=== GitHub Workflow - Interaktiv Version ===");
    
    // Standardkonfiguration för GitHub workflow
    const DEFAULT_CONFIG = {
        COMMIT_MESSAGE: "Initial commit: Add project files",  // Standard commit meddelande
        REPOSITORY_URL: "https://github.com/YourUsername/YourProject.git",  // Standard GitHub URL
        BRANCH_NAME: "main"  // Standard branch namn
    };
    
    // Visa standardvärden för användaren
    console.log("Använd standardvärden eller ange egna:");
    console.log(`Standardvärden:`);
    console.log(`- Commit meddelande: "${DEFAULT_CONFIG.COMMIT_MESSAGE}"`);
    console.log(`- Repository URL: ${DEFAULT_CONFIG.REPOSITORY_URL}`);
    console.log(`- Branch namn: ${DEFAULT_CONFIG.BRANCH_NAME}`);
    
    // Fråga användaren om de vill använda standardvärden
    rl.question("Vill du använda standardvärden? (j/n): ", (useDefault) => {
        // Kontrollera om användaren svarade ja (j eller y, case-insensitive)
        if (useDefault.toLowerCase() === 'j' || useDefault.toLowerCase() === 'y') {
            // Use default values
            showGitHubWorkflow(DEFAULT_CONFIG.COMMIT_MESSAGE, DEFAULT_CONFIG.REPOSITORY_URL, DEFAULT_CONFIG.BRANCH_NAME);
        } else {
            // Get custom values
            rl.question(`Ange commit meddelande (standard: "${DEFAULT_CONFIG.COMMIT_MESSAGE}"): `, (commitMessage) => {
                const commit = commitMessage || DEFAULT_CONFIG.COMMIT_MESSAGE;
                
                rl.question(`Ange repository URL (standard: ${DEFAULT_CONFIG.REPOSITORY_URL}): `, (repoUrl) => {
                    const url = repoUrl || DEFAULT_CONFIG.REPOSITORY_URL;
                    
                    rl.question(`Ange branch namn (standard: ${DEFAULT_CONFIG.BRANCH_NAME}): `, (branchName) => {
                        const branch = branchName || DEFAULT_CONFIG.BRANCH_NAME;
                        
                        showGitHubWorkflow(commit, url, branch);
                        rl.close();
                    });
                });
            });
        }
    });
}

// Funktion för att visa GitHub workflow steg med anpassade värden
function showGitHubWorkflow(commitMessage, repoUrl, branchName) {
    // Visa rubrik för workflow sektionen
    console.log("\n--- GitHub Workflow Steg ---");
    
    // Beskrivning av vad workflowen gör
    console.log("Steg för att få en fil från lokal utveckling till GitHub:");
    
    // Steg 1: Initiera Git repository i projektmappen
    console.log("1. git init                    # Initiera repository");
    
    // Steg 2: Lägg till alla filer till staging area
    console.log("2. git add .                   # Lägg till filer");
    
    // Steg 3: Commita ändringar med anpassat meddelande
    // Template literal används för att infoga variabeln commitMessage
    console.log(`3. git commit -m '${commitMessage}'  # Commita ändringar`);
    
    // Steg 4: Koppla lokal repository till GitHub remote
    // Template literal används för att infoga variabeln repoUrl
    console.log(`4. git remote add origin ${repoUrl} # Koppla till GitHub`);
    
    // Steg 5: Pusha kod till GitHub med anpassat branch namn
    // Template literal används för att infoga variabeln branchName
    console.log(`5. git push -u origin ${branchName}     # Pusha till GitHub`);
    
    // Visa en sammanfattning av konfigurationen som används
    console.log("\n--- Konfiguration som används ---");
    console.log(`Commit meddelande: "${commitMessage}"`);
    console.log(`Repository URL: ${repoUrl}`);
    console.log(`Branch namn: ${branchName}`);
}

// Run the interactive version
runInteractive();
