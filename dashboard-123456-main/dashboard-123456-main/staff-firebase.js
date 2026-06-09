import { db } from "./firebase-config.js";

import {
  ref,
  set,
  get
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

async function saveDashboardData(data) {
  await set(ref(db, "dashboardData"), data);
}

async function loadDashboardData() {
  const snapshot = await get(ref(db, "dashboardData"));

  if (snapshot.exists()) {
    return snapshot.val();
  }

  return {};
}