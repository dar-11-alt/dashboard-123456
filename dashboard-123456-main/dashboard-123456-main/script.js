function showSection(sectionId) {
  let sections = document.querySelectorAll(".content-section");

  sections.forEach(section => {
    section.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");
} 

function openSheet(link) {
  window.open(link, "_blank");
} 

function getSelectedFilter() {
    return {
        year: document.getElementById("schoolYearSelect").value,
        sem: document.getElementById("semesterSelect").value
    };
}

function handleGlobalChange() {
    const { year, sem } = getSelectedFilter();

    console.log("Changed to:", year, sem);

    // reload dashboard
    loadDashboardData();

    // optional: update UI indicator
}

  const SCHOOL_SHEETS = {
  "2025-2026": {
    "1": {
      STCS: "https://docs.google.com/spreadsheets/d/11gjcIp-8IoBPi-lguYQq2ylIJnEoIioxLo3KOcshiEE/edit?fbclid=IwY2xjawQSGnBleHRuA2FlbQIxMABicmlkETJwSjB2aDJTaFk5RThYa1BXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvUEoBtYsgq4fqaVv4-0T_Dd7YM37bFvhrvDEaxY-rweZD8z_egzjqcE-5JO_aem_YARu_W6afRc2cGwnec8PXw&hl=en_US&gid=525745083#gid=525745083",
      eng: "https://docs.google.com/spreadsheets/d/11gjcIp-8IoBPi-lguYQq2ylIJnEoIioxLo3KOcshiEE/edit?fbclid=IwY2xjawQSGnBleHRuA2FlbQIxMABicmlkETJwSjB2aDJTaFk5RThYa1BXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvUEoBtYsgq4fqaVv4-0T_Dd7YM37bFvhrvDEaxY-rweZD8z_egzjqcE-5JO_aem_YARu_W6afRc2cGwnec8PXw&hl=en_US&gid=1660857952#gid=1660857952",
      SME: "https://docs.google.com/spreadsheets/d/11gjcIp-8IoBPi-lguYQq2ylIJnEoIioxLo3KOcshiEE/edit?fbclid=IwY2xjawQSGnBleHRuA2FlbQIxMABicmlkETJwSjB2aDJTaFk5RThYa1BXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvUEoBtYsgq4fqaVv4-0T_Dd7YM37bFvhrvDEaxY-rweZD8z_egzjqcE-5JO_aem_YARu_W6afRc2cGwnec8PXw&hl=en_US&gid=277440426#gid=277440426",
      SNHS: "https://docs.google.com/spreadsheets/d/11gjcIp-8IoBPi-lguYQq2ylIJnEoIioxLo3KOcshiEE/edit?fbclid=IwY2xjawQSGnBleHRuA2FlbQIxMABicmlkETJwSjB2aDJTaFk5RThYa1BXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvUEoBtYsgq4fqaVv4-0T_Dd7YM37bFvhrvDEaxY-rweZD8z_egzjqcE-5JO_aem_YARu_W6afRc2cGwnec8PXw&hl=en_US&gid=657306020#gid=657306020",
      SCJE: "LINK_SCJE_SEM1",
      SAS: "https://docs.google.com/spreadsheets/d/11gjcIp-8IoBPi-lguYQq2ylIJnEoIioxLo3KOcshiEE/edit?usp=sharinghttps://docs.google.com/spreadsheets/d/11gjcIp-8IoBPi-lguYQq2ylIJnEoIioxLo3KOcshiEE/edit?fbclid=IwY2xjawQSGnBleHRuA2FlbQIxMABicmlkETJwSjB2aDJTaFk5RThYa1BXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvUEoBtYsgq4fqaVv4-0T_Dd7YM37bFvhrvDEaxY-rweZD8z_egzjqcE-5JO_aem_YARu_W6afRc2cGwnec8PXw&hl=en_US&gid=1183288341#gid=1183288341",
      STED: "https://docs.google.com/spreadsheets/d/11gjcIp-8IoBPi-lguYQq2ylIJnEoIioxLo3KOcshiEE/edit?fbclid=IwY2xjawQSGnBleHRuA2FlbQIxMABicmlkETJwSjB2aDJTaFk5RThYa1BXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvUEoBtYsgq4fqaVv4-0T_Dd7YM37bFvhrvDEaxY-rweZD8z_egzjqcE-5JO_aem_YARu_W6afRc2cGwnec8PXw&hl=en_US&gid=619850109#gid=619850109",
      MARITIME: "https://docs.google.com/spreadsheets/d/11gjcIp-8IoBPi-lguYQq2ylIJnEoIioxLo3KOcshiEE/edit?fbclid=IwY2xjawQSGnBleHRuA2FlbQIxMABicmlkETJwSjB2aDJTaFk5RThYa1BXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvUEoBtYsgq4fqaVv4-0T_Dd7YM37bFvhrvDEaxY-rweZD8z_egzjqcE-5JO_aem_YARu_W6afRc2cGwnec8PXw&hl=en_US&gid=845836904#gid=845836904"

    },
    "2": {
      stcs: "LINK_STCS_SEM2",
      eng: "LINK_ENG_SEM2",
      sme: "LINK_SME_SEM2"
    }
  }
};
function openSchoolSheet(schoolKey) {
    const { year, sem } = getSelectedFilter();

    const link = SCHOOL_SHEETS?.[year]?.[sem]?.[schoolKey];

    if (!link) {
        alert("No sheet available for this selection");
        return;
    }

    window.open(link, "_blank");
}


async function loadDashboardAnalytics() {

  // 🔗 Put all School Google Sheet CSV links here
  const schoolSheets = [
    "https://docs.google.com/spreadsheets/d/1cv64h-LzoNF1Qupcfz_PgxtW5yAWEwZVF0dP0Mb4-YI/edit?usp=sharing",
    "https://docs.google.com/spreadsheets/d/e/SCHOOL2/pub?output=csv",
    "https://docs.google.com/spreadsheets/d/e/SCHOOL3/pub?output=csv"
  ];

  let totals = {
    AccomplishmentReports: 0,
    AccreditationStatus: 0,
    BudgetProposals: 0,
    PerformanceReviews: 0,
    CurriculumRevision: 0,
    ProfessionalReviews: 0,
    TotalFaculty: 0,
    FacultyLeave: 0,
    FacultyFulltime: 0,
    FacultyParttime: 0,
    Category: 0
  };

  // Loop through each school sheet
  for (let url of schoolSheets) {
    try {
      const response = await fetch(url);
      const csvText = await response.text();

      // Convert CSV into rows
      const rows = csvText.split("\n").slice(1);

      rows.forEach(row => {
        const cols = row.split(",");

        let metric = cols[0]?.trim();
        let value = parseInt(cols[1]) || 0;

        if (totals.hasOwnProperty(metric)) {
          totals[metric] += value;
        }
      });

    } catch (error) {
      console.log("Error loading:", url);
    }
  }
  


  document.getElementById("professionalReviews").innerText =
    totals.ProfessionalReviews;

  document.getElementById("totalFaculty").innerText =
    totals.TotalFaculty;

  document.getElementById("facultyLeave").innerText =
    totals.FacultyLeave;

  document.getElementById("facultyFulltime").innerText =
    totals.FacultyFulltime;

  document.getElementById("facultyParttime").innerText =
    totals.FacultyParttime;

}


loadDashboardAnalytics();

const menuBoxes = document.querySelectorAll(".menu-box");

  menuBoxes.forEach(box => {
    box.addEventListener("click", function () {

      // Remove active from all
      menuBoxes.forEach(item => item.classList.remove("active"));

      // Add active to clicked one
      this.classList.add("active");
    });
  });

async function loadSheetData() {

  const url = "IwY2xjawQSGnBleHRuA2FlbQIxMABicmlkETJwSjB2aDJTaFk5RThYa1BXc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvUEoBtYsgq4fqaVv4";

  try {
    const response = await fetch(url);
    const data = await response.text();

    const rows = data.trim().split("\n").map(r => r.split(","));

    // F10
    const totalFaculty = rows[9]?.[5] || "0";

    document.getElementById("totalFaculty").innerText = totalFaculty;

  } catch (error) {
    console.error("Error:", error);
  }
}

loadSheetData();

  window.onload = function () {
    let savedUser = localStorage.getItem("savedUsername");

    if (savedUser) {
      document.getElementById("username").value = savedUser;
      document.getElementById("rememberMe").checked = true;
    }
  };

  // Enter key Username → Password
  document.getElementById("username").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      document.getElementById("password").focus();
    }
  });

  // Enter key Password → Login
  document.getElementById("password").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      login();
    }
  });


  // ✅ Show / Hide Password
  function togglePassword() {
    let passField = document.getElementById("password");

    if (passField.type === "password") {
      passField.type = "text";
    } else {
      passField.type = "password";
    }
  }

  function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let remember = document.getElementById("rememberMe").checked;

    // Demo Account
    if (user === "vpadmin" && pass === "vp123") {

      // ✅ Save username if Remember Me checked
      if (remember) {
        localStorage.setItem("savedUsername", user);
      } else {
        localStorage.removeItem("savedUsername");
      }

      alert("Login Successful! Welcome VP Admin.");
      window.location.href = "index.html";

    } else {
      alert("Invalid Username or Password!");
    }
  }

  function openFacultyModal() {
    document.getElementById("facultyModal").style.display = "block";
  }

  function closeFacultyModal() {
    document.getElementById("facultyModal").style.display = "none";
  }

  // Close modal if user clicks outside box
  window.onclick = function(event) {
    let modal = document.getElementById("facultyModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

async function loadTotalFromSheet() {
  const url = "https://docs.google.com/spreadsheets/d/1cv64h-LzoNF1Qupcfz_PgxtW5yAWEwZVF0dP0Mb4-YI/export?format=csv&gid=0";

  try {
    const response = await fetch(url);
    const data = await response.text();

    const rows = data.split("\n");

    // Row 5 → index 4
    const row5 = rows[4].split(",");

    // Column T → index 19
    const totalT5 = row5[19];

    document.getElementById("totalFaculty").innerText = totalT5;

  } catch (error) {
    console.error("Error loading sheet:", error);
  }
}

loadSheetData();

document.addEventListener("DOMContentLoaded", function () {
  loadTotalFromSheet();
});

function fetchDataFromSheet(year, sem) {
    fetch(`YOUR_API_URL?year=${year}&sem=${sem}`)
        .then(res => res.json())
        .then(data => {

            document.getElementById("totalFaculty").innerText = data.totalFaculty;
            document.getElementById("totalStudentsCount").innerText = data.totalStudents;
            document.getElementById("totalSchools").innerText = data.totalSchools;

            // update others...
        });
}


function toggleLock(element) {
    element.classList.toggle("locked");
}
document.querySelectorAll('.faculty-details').forEach(card => {
    card.addEventListener('scroll', function () {
        if (card.scrollTop + card.clientHeight >= card.scrollHeight) {
            card.classList.add('bounce');

            setTimeout(() => {
                card.classList.remove('bounce');
            }, 300);
        }
    });
});

import { db } from "./firebase-config.js";

import {
  ref,
  get
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const snapshot = await get(ref(db, "dashboardData"));

const data = snapshot.val();