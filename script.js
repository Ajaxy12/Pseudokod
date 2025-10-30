// ===============================================
// Split the Nota - Restaurant Bill Splitter
// ===============================================
// Pseudokod med konfigurerbara värden för enkel anpassning
// 
// Denna pseudokod demonstrerar:
// - INPUT med standardvärden (default values)
// - Matematiska beräkningar (multiplikation, addition, division)
// - PRINT för att visa resultat
// - Kommentarer för att förklara varje steg

/*
# ========================================
# KONFIGURATION - Ändra dessa värden enkelt!
# ========================================
SET DEFAULT_TOTAL_SUMMA = 500          # Standard totalbelopp på notan (kr)
SET DEFAULT_ANTAL_VANNER = 4           # Standard antal vänner som delar notan
SET DEFAULT_DRICKS_PROCENT = 0.15      # Standard dricks i decimalform (0.15 = 15%)

START
# Hämta input från användaren med standardvärden som fallback
INPUT total_summa WITH DEFAULT DEFAULT_TOTAL_SUMMA    # Användaren matar in totalbeloppet
INPUT antal_vanner WITH DEFAULT DEFAULT_ANTAL_VANNER  # Användaren matar in antal vänner
INPUT dricks_procent WITH DEFAULT DEFAULT_DRICKS_PROCENT  # Användaren matar in dricks

# Beräkningar
SET dricks_belopp = total_summa * dricks_procent       # Beräkna dricksbeloppet
SET summa_med_dricks = total_summa + dricks_belopp     # Total summa inklusive dricks
SET att_betala_per_person = summa_med_dricks / antal_vanner  # Dela summan på antal vänner

# Visa resultat
PRINT "Total summa: " total_summa " kr"
PRINT "Dricks (" (dricks_procent * 100) "%): " dricks_belopp " kr"
PRINT "Summa med dricks: " summa_med_dricks " kr"
PRINT "Varje vän ska betala: " att_betala_per_person " kr"
END
*/




























// ===============================================
// GitHub-flödet (från lokal fil till GitHub)
// ===============================================
// Pseudokod med konfigurerbara värden för enkel anpassning
//
// Denna pseudokod demonstrerar:
// - Funktionell decomposition (dela upp i funktioner)
// - Sekventiell körning av kommandon (steg-för-steg)
// - INPUT för att få användardata
// - RUN för att köra Git-kommandon
// - CALL för att anropa funktioner i ordning

/*
# ========================================
# KONFIGURATION - Ändra dessa värden enkelt!
# ========================================
SET DEFAULT_COMMIT_MESSAGE = "Initial commit: Add project files"  # Standard commit-meddelande
SET DEFAULT_REPOSITORY_URL = "https://github.com/YourUsername/YourProject.git"  # Standard GitHub URL
SET DEFAULT_BRANCH_NAME = "main"        # Standard branch namn

START
FUNCTION initiera_git_repo()
    PRINT "Initierar git repository"
    RUN "git init"                      # Initiera ett nytt git repo
ENDFUNCTION

FUNCTION lagg_till_filer()
    PRINT "Lägger till filer"
    RUN "git add ."                     # Lägg till alla ändringar till staging area
ENDFUNCTION

FUNCTION commita_andringar()
    INPUT commit_meddelande WITH DEFAULT DEFAULT_COMMIT_MESSAGE  # Användaren skriver commit-meddelande
    RUN "git commit -m '" commit_meddelande "'"  # Spara ändringar med meddelande
ENDFUNCTION

FUNCTION koppla_till_remote()
    INPUT remote_url WITH DEFAULT DEFAULT_REPOSITORY_URL  # URL till GitHub-repo
    RUN "git remote add origin " remote_url  # Koppla repo till GitHub remote
ENDFUNCTION

FUNCTION pusha_till_github()
    INPUT branch_name WITH DEFAULT DEFAULT_BRANCH_NAME  # Branch namn
    RUN "git push -u origin " branch_name  # Skicka ändringar till GitHub
ENDFUNCTION

# Kör alla steg i ordning
CALL initiera_git_repo()
CALL lagg_till_filer()
CALL commita_andringar()
CALL koppla_till_remote()
CALL pusha_till_github()

# Visa konfiguration som används
PRINT "Konfiguration som används:"
PRINT "Commit meddelande: " commit_meddelande
PRINT "Repository URL: " remote_url
PRINT "Branch namn: " branch_name
END
*/

// ===============================================
// IMPLEMENTERING
// ===============================================
// För att se fungerande JavaScript implementation av denna pseudokod,
// kör följande kommando i terminalen:
//
//   node working-code.js
//
// Detta kommer att starta en interaktiv meny där du kan:
// 1. Köra Split the Nota med anpassade värden
// 2. Köra GitHub Workflow med anpassade värden
// 3. Se exempel med standardvärden
//
// Alla värden är konfigurerbara i CONFIG objekten
// Se working-code.js för fullständig implementation med kommentarer

