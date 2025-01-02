const data = {
    "GADA": "Ketua 1",
    "CLEO": "Ketua 2",
    "NAOMI": "Sekretaris 2",
    "MERI": "Sekretaris 1",
    "RANI": "Bendahara 1",
    "ANGGUN": "Bendahara 2",
    "TYO": "Liturgi",
    "LITA": "Liturgi",
    "FANNY": "Liturgi",
    "LEON": "Humas",
    "MOREL": "Humas",
    "CLARA": "Usda",
    "ANDRE": "Usda",
    "ANIN": "Usda",
    "OLA": "Pubdok",
    "KRISTO": "Pubdok",
    "VIAN": "Konsumsi",
    "NADA": "Konsumsi",
    "PAUL": "Miba",
    "DELA" : "Miba"
  };
  
  function checkName() {
    const name = document.getElementById("nameInput").value.trim().toUpperCase();
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
  
    // Reset page visibility
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
  
    // Show the right page with animation
    if (data[name]) {
      document.getElementById("resultTitle").innerHTML = `Selamat, ${name}!`;
      document.getElementById("resultMessage").innerHTML = `Kamu menjadi <strong>${data[name]}</strong> dalam Pengurus PA Somohitan.`;
      
      page2.style.display = "flex";
      page2.style.animation = "fadeIn 1.5s ease-in-out forwards";
    } else {
      page3.style.display = "flex";
      page3.style.animation = "fadeIn 1.5s ease-in-out forwards";
    }
  }
  
  function goBack() {
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
  
    // Reset visibility and trigger fade-in animation for page1
    page1.style.display = "flex";
    page1.style.animation = "fadeIn 1.5s ease-in-out forwards";
  
    page2.style.display = "none";
    page3.style.display = "none";
  }
  
  // Triggering page load animation
  window.onload = () => {
    document.getElementById("page1").style.animation = "fadeIn 1.5s ease-in-out forwards";
  };
  