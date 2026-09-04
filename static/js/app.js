
        const ADMIN_PASSWORD = 'zmmh2025';
        const CLOUD_PATH = 'dormWaterApp';
        const ROSTER_VERSION = 2;

        const firebaseConfig = {
            apiKey: "AIzaSyBxYkAExampleKey123456",
            authDomain: "zmmh-water.firebaseapp.com",
            databaseURL: "https://zmmh-water-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "zmmh-water",
            storageBucket: "zmmh-water.appspot.com",
            messagingSenderId: "123456789",
            appId: "1:123456789:web:abcdef123456"
        };

        const SEED_DATA = {
    "occupants": [
        {"id":"occ_3","surname":"ABRIGO","firstName":"JOEMARK S.","course":"BSIT-1","room":"Tokyo","remarks":"Big Brod.","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"unpaid","2026-08-31":"paid"},"no":1},
        {"id":"occ_4","surname":"ALCANTARA","firstName":"JOHN LORENZO C.","course":"BSE-1","room":"Tokyo","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":2},
        {"id":"occ_5","surname":"ALCANTARA","firstName":"LOUIE C.","course":"BSIT-1","room":"Tokyo","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":3},
        {"id":"occ_6","surname":"ALCANTARA","firstName":"MARTIN JOSEPH C.","course":"BSE-1","room":"Tokyo","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":4},
        {"id":"occ_7","surname":"BALBUENA","firstName":"JOSHUA A.","course":"BSIT-1","room":"Sydney","remarks":"Big Brod.","payments":{"2026-08-11":"unpaid","2026-08-17":"unpaid","2026-08-26":"paid","2026-08-31":"unpaid"},"no":5},
        {"id":"occ_9","surname":"ESTRELLADO","firstName":"JOHN NIÑO E.","course":"BS Bio-1","room":"Sydney","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"unpaid","2026-08-26":"paid","2026-08-31":"paid"},"no":6},
        {"id":"occ_10","surname":"PEÑONES","firstName":"RENZ T.","course":"BSS-1","room":"Sydney","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"unpaid","2026-08-26":"unpaid","2026-08-31":"paid"},"no":7},
        {"id":"occ_11","surname":"REGACION","firstName":"JAY-R D.","course":"BSMath-1","room":"Sydney","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"unpaid","2026-08-31":"unpaid"},"no":8},
        {"id":"occ_13","surname":"ABRANTES","firstName":"RAINIER D.","course":"BSFT-4","room":"Concord","remarks":"Big Brod.","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"unpaid","2026-08-31":"paid"},"no":9},
        {"id":"occ_14","surname":"POLANGCUAN","firstName":"JOHN CARL S.","course":"BSIT-1","room":"Concord","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":10},
        {"id":"occ_15","surname":"SALVADOR","firstName":"JOSHUA M.","course":"BSIT-1","room":"Concord","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":11},
        {"id":"occ_16","surname":"CABALZA","firstName":"JOHN PAUL C.","course":"BSIT-1","room":"Berlin","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":12},
        {"id":"occ_17","surname":"DELOS REYES","firstName":"CHRISTIAN JAY M.","course":"BSIT-1","room":"Berlin","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":13},
        {"id":"occ_18","surname":"GARCIA","firstName":"JOHN CARLO C.","course":"BSIT-1","room":"Berlin","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":14},
        {"id":"occ_19","surname":"JIMENEZ","firstName":"JOHN PAUL M.","course":"BSIT-1","room":"Berlin","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":15},
        {"id":"occ_20","surname":"MENDOZA","firstName":"JOHN CARL M.","course":"BSIT-1","room":"Berlin","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":16},
        {"id":"occ_21","surname":"PASCUAL","firstName":"JOHN CARL M.","course":"BSIT-1","room":"Berlin","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":17},
        {"id":"occ_22","surname":"RAMOS","firstName":"JOHN CARL M.","course":"BSIT-1","room":"Berlin","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":18},
        {"id":"occ_23","surname":"SANTOS","firstName":"JOHN CARL M.","course":"BSIT-1","room":"Berlin","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":19},
        {"id":"occ_24","surname":"VILLANUEVA","firstName":"JOHN CARL M.","course":"BSIT-1","room":"Berlin","remarks":"","payments":{"2026-08-11":"paid","2026-08-17":"paid","2026-08-26":"paid","2026-08-31":"paid"},"no":20}
    ],
    "collectionDates": ["2026-08-11", "2026-08-17", "2026-08-26", "2026-08-31"],
    "totals": {"2026-08-11": 1000, "2026-08-17": 950, "2026-08-26": 800, "2026-08-31": 850},
    "purchases": [],
    "dateAmounts": {"2026-08-11": 50, "2026-08-17": 50, "2026-08-26": 50, "2026-08-31": 50},
    "rosterVersion": 2
};

        let appState = { isLoggedIn: false, currentView: 'occupant', occupants: [], purchases: [], collectionDates: [], totals: {}, dateAmounts: {} };

        function isFirebaseConfigured() {
            return Boolean(firebaseConfig && firebaseConfig.apiKey && firebaseConfig.databaseURL);
        }

        function escapeHtml(str) {
            const map = {
                '&': '&' + 'amp;',
                '<': '&' + 'lt;',
                '>': '&' + 'gt;',
                '"': '&' + 'quot;',
                "'": '&' + '#39;'
            };
            return String(str ?? '').replace(/[&<>\"']/g, c => map[c]);
        }

        function setSyncStatus() { /* sync status is intentionally hidden from the UI */ }

        function defaultAppState(source) {
            const data = source || SEED_DATA;
            return {
                isLoggedIn: sessionStorage.getItem('dormWaterLoggedIn') === 'true',
                currentView: 'occupant',
                occupants: data.occupants || [],
                purchases: data.purchases || [],
                collectionDates: data.collectionDates || [],
                totals: data.totals || {},
                dateAmounts: data.dateAmounts || {},
                rosterVersion: data.rosterVersion || 0
            };
        }

        function occupantMatchKey(o) {
            return [o.surname, o.firstName, o.room].map(v => String(v || '').trim().toUpperCase()).join('|');
        }

        function isRealOccupant(o) {
            return Boolean(o && String(o.surname || '').trim());
        }

        function normalizeSeed(data) {
            const source = data || SEED_DATA;
            const dates = source.collectionDates || SEED_DATA.collectionDates || [];
            const occupants = (source.occupants || []).filter(isRealOccupant).map((o, idx) => ({
                id: o.id || ('occ_' + (idx + 1)),
                no: idx + 1,
                surname: String(o.surname || '').trim(),
                firstName: String(o.firstName || '').trim(),
                course: String(o.course || '').trim(),
                room: String(o.room || '').trim(),
                remarks: String(o.remarks || '').trim(),
                payments: o.payments || {}
            }));
            return {
                occupants,
                collectionDates: dates,
                totals: source.totals || {},
                purchases: source.purchases || [],
                dateAmounts: source.dateAmounts || Object.fromEntries(dates.map(d => [d, 50])),
                rosterVersion: ROSTER_VERSION
            };
        }

        async function loadSeedRoster() {
            try {
                const res = await fetch('seed_data.json', { cache: 'no-store' });
                if (res.ok) {
                    const data = await res.json();
                    if (data && Array.isArray(data.occupants) && data.occupants.length) {
                        return normalizeSeed(data);
                    }
                }
            } catch (err) {
                console.warn('Could not load seed_data.json, using built-in seed', err);
            }
            return normalizeSeed(SEED_DATA);
        }


        function rebuildTotals(occupants, dates, dateAmounts, savedTotals, seedTotals) {
            const totals = {};
            dates.forEach(date => {
                const amount = dateAmounts[date] || 50;
                const stored = (savedTotals && typeof savedTotals[date] === 'number') ? savedTotals[date]
                    : (seedTotals && typeof seedTotals[date] === 'number') ? seedTotals[date]
                    : null;
                totals[date] = stored !== null ? stored : occupants.filter(o => o.payments && o.payments[date] === 'paid').length * amount;
            });
            return totals;
        }

        function applySeedRoster(saved, seed) {
            const savedOcc = (saved && saved.occupants) || [];
            const byId = {};
            const byKey = {};
            savedOcc.filter(isRealOccupant).forEach(o => {
                if (o.id) byId[o.id] = o;
                byKey[occupantMatchKey(o)] = o;
            });
            const seedIds = new Set(seed.occupants.map(o => o.id));
            const seedKeys = new Set(seed.occupants.map(occupantMatchKey));
            const extras = savedOcc.filter(o => {
                if (seedIds.has(o.id) || seedKeys.has(occupantMatchKey(o))) return false;
                return !/^occ_\d{1,3}$/.test(String(o.id || ''));
            }).map((o, idx) => ({
                ...o,
                no: seed.occupants.length + idx + 1,
                surname: String(o.surname || '').trim(),
                firstName: String(o.firstName || '').trim()
            }));
            const occupants = [...seed.occupants.map((seedOcc, idx) => {
                const existing = byId[seedOcc.id] || byKey[occupantMatchKey(seedOcc)];
                return {
                    ...seedOcc,
                    ...(existing ? {
                        surname: existing.surname,
                        firstName: existing.firstName,
                        course: existing.course,
                        room: existing.room,
                        remarks: existing.remarks
                    } : {}),
                    no: idx + 1,
                    payments: { ...(seedOcc.payments || {}), ...((existing && existing.payments) || {}) }
                };
            }), ...extras];
            const dates = Array.from(new Set([...(seed.collectionDates || []), ...(saved.collectionDates || [])])).sort();
            const dateAmounts = Object.assign({}, seed.dateAmounts, saved.dateAmounts || {});
            return {
                isLoggedIn: saved.isLoggedIn,
                currentView: saved.currentView || 'occupant',
                occupants,
                purchases: saved.purchases || seed.purchases || [],
                collectionDates: dates,
                dateAmounts,
                totals: rebuildTotals(occupants, dates, dateAmounts, (saved && saved.totals) || seed.totals, seed.totals),
                rosterVersion: seed.rosterVersion || saved.rosterVersion || 0
            };
        }


        function applySharedPayload(payload) {
            if (!payload) return;
            if (Array.isArray(payload.occupants)) {
                const byId = {};
                const byKey = {};
                payload.occupants.filter(isRealOccupant).forEach(o => {
                    if (o.id) byId[o.id] = o;
                    byKey[occupantMatchKey(o)] = o;
                });
                appState.occupants = appState.occupants.map(o => {
                    const incoming = (o.id && byId[o.id]) || byKey[occupantMatchKey(o)];
                    if (!incoming) return o;
                    return {
                        ...o,
                        payments: { ...(o.payments || {}), ...(incoming.payments || {}) },
                        surname: incoming.surname || o.surname,
                        firstName: incoming.firstName || o.firstName,
                        course: incoming.course || o.course,
                        room: incoming.room || o.room,
                        remarks: incoming.remarks || o.remarks
                    };
                });
                const newOnes = payload.occupants.filter(o => isRealOccupant(o) && !appState.occupants.find(e => e.id === o.id || occupantMatchKey(e) === occupantMatchKey(o)));
                if (newOnes.length) {
                    const maxNo = Math.max(...appState.occupants.map(o => o.no), 0);
                    newOnes.forEach((o, idx) => {
                        appState.occupants.push({
                            id: o.id || ('occ_' + Date.now() + '_' + idx),
                            no: maxNo + idx + 1,
                            surname: String(o.surname || '').trim(),
                            firstName: String(o.firstName || '').trim(),
                            course: String(o.course || '').trim(),
                            room: String(o.room || '').trim(),
                            remarks: String(o.remarks || '').trim(),
                            payments: o.payments || {}
                        });
                    });
                }
            }
            if (Array.isArray(payload.collectionDates)) {
                appState.collectionDates = Array.from(new Set([...appState.collectionDates, ...payload.collectionDates])).sort();
            }
            if (payload.totals && typeof payload.totals === 'object') {
                appState.totals = { ...appState.totals, ...payload.totals };
            }
            if (payload.dateAmounts && typeof payload.dateAmounts === 'object') {
                appState.dateAmounts = { ...appState.dateAmounts, ...payload.dateAmounts };
            }
            if (Array.isArray(payload.purchases)) {
                appState.purchases = payload.purchases;
            }
        }

        let dbRef = null;
        let persistTimer = null;
        let lastCloudJson = null;
        let applyingRemote = false;
        let seedRoster = null;

        function cacheLocally() {
            try {
                const json = JSON.stringify(appState);
                localStorage.setItem('dormWaterApp', json);
            } catch (err) {
                console.error(err);
            }
        }

        function refreshAllUI() {
            updateBalances();
            setupOccupantSearch();
            if (appState.currentView === 'admin') renderAdminView();
        }

        function pushToCloud() {
            if (!dbRef) return;
            const json = JSON.stringify(appState);
            if (json === lastCloudJson) return;
            lastCloudJson = json;
            dbRef.set({ json, updatedAt: Date.now() })
                .then(() => setSyncStatus('Synced across devices', 'text-green-600'))
                .catch((err) => {
                    console.error(err);
                    setSyncStatus('Cloud save failed — data kept on this device', 'text-red-600');
                });
        }

        function persistState() {
            cacheLocally();
            if (!dbRef) return;
            clearTimeout(persistTimer);
            persistTimer = setTimeout(pushToCloud, 250);
        }


        async function initializeApp() {
            seedRoster = await loadSeedRoster();
            let saved = null;
            try {
                const raw = localStorage.getItem('dormWaterApp');
                saved = raw ? JSON.parse(raw) : null;
            } catch (err) {
                console.error(err);
            }
            appState = applySeedRoster(defaultAppState(saved || seedRoster), seedRoster);
            cacheLocally();
            showMainApp();
            if (appState.isLoggedIn) switchView('admin');

            if (!isFirebaseConfigured() || typeof firebase === 'undefined') {
                setSyncStatus('Local only — add Firebase config to share with other devices', 'text-amber-600');
                return;
            }

            try {
                firebase.initializeApp(firebaseConfig);
                dbRef = firebase.database().ref(CLOUD_PATH);
                setSyncStatus('Connecting…', 'text-gray-500');
                const snap = await dbRef.once('value');
                if (snap.exists() && snap.val() && snap.val().json) {
                    applySharedPayload(JSON.parse(snap.val().json));
                    refreshAllUI();
                }
                persistState();
                dbRef.on('value', (nextSnap) => {
                    const val = nextSnap.val();
                    if (!val || !val.json || val.json === lastCloudJson) return;
                    lastCloudJson = val.json;
                    applyingRemote = true;
                    applySharedPayload(JSON.parse(val.json));
                    cacheLocally();
                    refreshAllUI();
                    applyingRemote = false;
                    setSyncStatus('Synced across devices', 'text-green-600');
                });
                setSyncStatus('Synced across devices', 'text-green-600');
            } catch (err) {
                console.error(err);
                setSyncStatus('Cloud unavailable — using this device only', 'text-red-600');
            }
        }

        function openLoginScreen() { document.getElementById('loginScreen').classList.remove('hidden'); }
        function closeLoginScreen() { document.getElementById('loginScreen').classList.add('hidden'); document.getElementById('passwordInput').value = ''; }
        function login() { 
            if (document.getElementById('passwordInput').value === ADMIN_PASSWORD) {
                appState.isLoggedIn = true;
                sessionStorage.setItem('dormWaterLoggedIn', 'true');
                closeLoginScreen();
                switchView('admin');
            } else alert('Invalid password');
        }
        function logout() { appState.isLoggedIn = false; sessionStorage.removeItem('dormWaterLoggedIn'); switchView('occupant'); }
        function switchView(view) {
            appState.currentView = view;
            if (view === 'occupant') {
                document.getElementById('occupantView').classList.remove('hidden');
                document.getElementById('adminView').classList.add('hidden');
                document.getElementById('adminLoginBtn').classList.remove('hidden');
                document.getElementById('logoutBtn').classList.add('hidden');
            } else {
                if (!appState.isLoggedIn) { openLoginScreen(); return; }
                document.getElementById('occupantView').classList.add('hidden');
                document.getElementById('adminView').classList.remove('hidden');
                document.getElementById('adminLoginBtn').classList.add('hidden');
                document.getElementById('logoutBtn').classList.remove('hidden');
                renderAdminView();
            }
        }

        function showMainApp() {
            document.getElementById('mainApp').classList.remove('hidden');
            updateBalances();
            setupOccupantSearch();
        }


        function setupOccupantSearch() {
            document.getElementById('occupantSearch').addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                const result = document.getElementById('occupantResult');
                const noResult = document.getElementById('noResult');
                if (!query) { result.classList.add('hidden'); noResult.classList.add('hidden'); return; }
                const matching = appState.occupants.filter(o => isRealOccupant(o) && ((o.surname || '').toLowerCase().includes(query) || (o.firstName || '').toLowerCase().includes(query)));
                if (matching.length === 0) { result.classList.add('hidden'); noResult.classList.remove('hidden'); } 
                else {
                    noResult.classList.add('hidden');
                    result.innerHTML = matching.map(o => {
                        let pendingTotal = 0;
                        let totalPaid = 0;
                        let paidCount = 0;
                        let excusedCount = 0;
                        let unpaidCount = 0;
                        const paymentDetails = appState.collectionDates.map(d => {
                            const s = o.payments[d] || 'unpaid';
                            const amount = appState.dateAmounts[d] || 50;
                            if (s === 'unpaid') { pendingTotal += amount; unpaidCount++; }
                            else if (s === 'paid') { totalPaid += amount; paidCount++; }
                            else if (s === 'excused') { excusedCount++; }
                            else if (s === 'partial') { totalPaid += amount / 2; }
                            const sc = {'paid': 'badge badge-success', 'unpaid': 'badge badge-neutral', 'excused': 'badge badge-danger', 'partial': 'badge badge-warning'}[s];
                            const st = {'paid': '&#10003; Paid (&#8369;' + amount + ')', 'unpaid': '&#10007; Unpaid (&#8369;' + amount + ')', 'excused': '&#10007; Excused', 'partial': '&#9681; Partial (&#8369;' + amount + ')'}[s];
                            return '<div class="flex justify-between items-center px-3 py-2 rounded-lg bg-background"><span class="text-xs font-semibold text-text-primary">' + new Date(d + 'T00:00:00').toLocaleDateString('en-US', {month: 'short', day: 'numeric'}) + '</span><span class="' + sc + '">' + st + '</span></div>';
                        }).join('');
                        const badges = [];
                        if (paidCount > 0) badges.push('<span class="badge badge-success">' + paidCount + ' paid</span>');
                        if (excusedCount > 0) badges.push('<span class="badge badge-danger">' + excusedCount + ' excused</span>');
                        if (unpaidCount > 0) badges.push('<span class="badge badge-neutral">' + unpaidCount + ' pending</span>');
                        return '<div class="card card-hoverable animate-fade-in mb-4"><div class="p-4"><h3 class="font-bold text-lg text-text-primary">' + escapeHtml(o.firstName) + ' ' + escapeHtml(o.surname) + '</h3><p class="text-sm text-text-secondary mt-0.5">' + escapeHtml(o.room) + ' &middot; ' + escapeHtml(o.course) + '</p><div class="flex gap-2 mt-3 flex-wrap">' + badges.join('') + '</div><div class="flex items-center justify-between mt-3 p-3 rounded-xl bg-background"><div><p class="text-xs text-text-secondary">Paid</p><p class="text-lg font-extrabold text-brand-secondary">&#8369;' + totalPaid + '</p></div><div class="text-right"><p class="text-xs text-text-secondary">Pending</p><p class="text-lg font-extrabold text-danger">&#8369;' + pendingTotal + '</p></div></div><button onclick="toggleOccHistory(this)" class="btn btn-ghost btn-sm w-full mt-3"><span class="toggle-text">Show Full History</span><svg class="toggle-icon w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></button></div><div class="collapse-wrapper"><div class="collapse-inner"><div class="border-t border-border p-4"><p class="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">Payment History</p><div class="grid grid-cols-2 sm:grid-cols-4 gap-2">' + paymentDetails + '</div></div></div></div></div>';
                    }).join('');
                    result.classList.remove('hidden');
                }
            });
        }

        function togglePurchases(btn) {
            const pl = document.getElementById('purchasesList');
            pl.dataset.showAll = pl.dataset.showAll === 'true' ? 'false' : 'true';
            updateBalances();
        }

        function toggleOccHistory(btn) {
            const card = btn.closest('.card');
            const wrapper = card.querySelector('.collapse-wrapper');
            const icon = btn.querySelector('.toggle-icon');
            const text = btn.querySelector('.toggle-text');
            if (wrapper.classList.contains('open')) {
                wrapper.classList.remove('open');
                icon.style.transform = '';
                text.textContent = 'Show Full History';
            } else {
                wrapper.classList.add('open');
                icon.style.transform = 'rotate(180deg)';
                text.textContent = 'Hide History';
            }
        }

        function updateBalances() {
            const tc = Object.entries(appState.totals).reduce((sum, [date, count]) => {
                return sum + (typeof count === 'number' ? count : 0);
            }, 0);
            const tp = appState.purchases.reduce((s,p) => s+p.amount, 0);
            const cb = tc - tp;
            document.getElementById('totalCollected').innerText = tc;
            document.getElementById('totalPurchases').innerText = tp;
            document.getElementById('currentBalance').innerText = cb;
            document.getElementById('statTotalCollected').innerText = tc;
            document.getElementById('statTotalPurchases').innerText = tp;
            document.getElementById('statCurrentBalance').innerText = cb;
            const lastDate = appState.collectionDates[appState.collectionDates.length-1];
            document.getElementById('statUnpaidCount').innerText = lastDate ? appState.occupants.filter(o => o.payments[lastDate] === 'unpaid').length : 0;
            const pl = document.getElementById('purchasesList');
            if (appState.purchases.length === 0) {
                pl.innerHTML = '<div class="empty-state"><div class="empty-state-icon">&#128230;</div><p class="text-sm">No purchases recorded yet</p></div>';
            } else {
                const MAX_VISIBLE = 3;
                const showAll = pl.dataset.showAll === 'true';
                const visible = showAll ? appState.purchases : appState.purchases.slice(0, MAX_VISIBLE);
                const hiddenCount = appState.purchases.length - visible.length;
                const hasMore = appState.purchases.length > MAX_VISIBLE;
                pl.innerHTML = visible.map((p,i) => `<div class="flex justify-between items-center bg-background p-4 rounded-xl border border-border"><div><p class="font-semibold text-gray-800">Purchase #${i+1}</p><p class="text-sm text-gray-600">${new Date(p.date).toLocaleDateString()}</p></div><p class="font-bold text-lg text-brand-primary">₱${p.amount}</p></div>`).join('') +
                    (hasMore ? `<button onclick="togglePurchases(this)" class="btn btn-ghost btn-sm w-full mt-3">${showAll ? 'Show Less' : 'Show More (' + hiddenCount + ' more)'}</button>` : '');
            }
        }


        function renderAdminView() {
            renderOccupantsTable();
            renderPurchasesTable();
            updateBalances();
        }

        function renderOccupantsTable() {
            const headerRow = document.getElementById('tableHeaderRow');
            const tbody = document.getElementById('occupantsTable');
            
            // Build header with dates
            let headerHTML = '<th class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase sticky-col sticky-col-1">No.</th>' +
                '<th class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase sticky-col sticky-col-2">Surname</th>' +
                '<th class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase sticky-col sticky-col-3">First Name</th>' +
                '<th class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Course</th>' +
                '<th class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Room</th>' +
                '<th class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Remarks</th>';
            
            appState.collectionDates.forEach(d => {
                const amount = appState.dateAmounts[d] || 50;
                const dateStr = new Date(d + 'T00:00:00').toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
                headerHTML += `<th class="px-6 py-3 text-center"><div class="flex flex-col items-center gap-1"><div class="text-xs font-bold text-gray-700 uppercase">${dateStr}</div><div class="text-brand-primary font-semibold text-sm">₱${amount}</div><div class="flex gap-1"><button onclick="openEditDateAmountModal('${d}')" class="btn btn-primary btn-sm">Edit</button><button onclick="deleteCollectionDate('${d}')" class="btn btn-danger btn-sm">Del</button></div></div></th>`;
            });
            
            headerHTML += '<th class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Actions</th>';
            headerRow.innerHTML = headerHTML;
            
            const filtered = appState.occupants.filter(isRealOccupant);
            const searchTerm = document.getElementById('adminSearch')?.value?.toLowerCase() || '';
            tbody.innerHTML = filtered.filter(o => !searchTerm || o.room.toLowerCase().includes(searchTerm) || o.surname.toLowerCase().includes(searchTerm) || o.firstName.toLowerCase().includes(searchTerm)).map(o => `<tr class="hover:bg-gray-50"><td class="px-6 py-4 text-sm sticky-col sticky-col-1">${o.no}</td><td class="px-6 py-4 text-sm font-semibold sticky-col sticky-col-2">${escapeHtml(o.surname)}</td><td class="px-6 py-4 text-sm sticky-col sticky-col-3">${escapeHtml(o.firstName)}</td><td class="px-6 py-4 text-sm text-gray-600">${escapeHtml(o.course)}</td><td class="px-6 py-4 text-sm font-semibold">${escapeHtml(o.room)}</td><td class="px-6 py-4 text-sm text-gray-600">${escapeHtml(o.remarks)}</td>${appState.collectionDates.map(d => { const s = o.payments[d] || 'unpaid'; const m = {'paid': {c: 'payment-paid', t: '✓'}, 'unpaid': {c: 'payment-unpaid', t: '○'}, 'excused': {c: 'payment-excused', t: 'E'}, 'partial': {c: 'payment-partial', t: '◐'}}[s] || {c: 'payment-unpaid', t: '○'}; return `<td class="px-6 py-4"><button onclick="cyclePaymentStatus('${o.id}', '${d}')" class="payment-btn ${m.c} w-full">${m.t}</button></td>`; }).join('')}<td class="px-6 py-4"><div class="flex gap-2"><button onclick="editOccupant('${o.id}')" class="btn btn-primary btn-sm">Edit</button><button onclick="deleteOccupant('${o.id}')" class="btn btn-danger btn-sm">Del</button></div></td></tr>`).join('');
        }

        function renderPurchasesTable() {
            const tbody = document.getElementById('purchasesTable');
            tbody.innerHTML = appState.purchases.length === 0 ? '<tr><td colspan="4"><div class="empty-state"><div class="empty-state-icon">&#128230;</div><p class="text-sm">No purchases recorded</p></div></td></tr>' : appState.purchases.map((p,i) => `<tr class="hover:bg-gray-50"><td class="px-6 py-4 text-sm">${i+1}</td><td class="px-6 py-4 text-sm">${new Date(p.date).toLocaleDateString()}</td><td class="px-6 py-4 text-sm font-semibold text-brand-primary">₱${p.amount}</td><td class="px-6 py-4"><div class="flex gap-2"><button onclick="editPurchase('${p.id}')" class="btn btn-primary btn-sm">Edit</button><button onclick="deletePurchase('${p.id}')" class="btn btn-danger btn-sm">Del</button></div></td></tr>`).join('');
        }


        function cyclePaymentStatus(occupantId, date) {
            const occ = appState.occupants.find(o => o.id === occupantId);
            if (!occ) return;
            const statuses = ['unpaid', 'paid', 'excused', 'partial'];
            const current = occ.payments[date] || 'unpaid';
            const nextIdx = (statuses.indexOf(current) + 1) % statuses.length;
            occ.payments[date] = statuses[nextIdx];
            const dateAmount = appState.dateAmounts[date] || 50;
            let dateTotal = appState.occupants.filter(o => o.payments[date] === 'paid').length * dateAmount;
            appState.totals[date] = dateTotal;
            persistState();
            renderAdminView();
        }

        function openAddOccupantModal() {
            document.getElementById('occupantId').value = '';
            document.getElementById('occupantSurname').value = '';
            document.getElementById('occupantFirstName').value = '';
            document.getElementById('occupantCourse').value = '';
            document.getElementById('occupantRoom').value = '';
            document.getElementById('occupantRemarks').value = '';
            document.getElementById('occupantModal').classList.remove('hidden');
        }

        function editOccupant(occupantId) {
            const occ = appState.occupants.find(o => o.id === occupantId);
            if (!occ) return;
            document.getElementById('occupantId').value = occupantId;
            document.getElementById('occupantSurname').value = occ.surname;
            document.getElementById('occupantFirstName').value = occ.firstName;
            document.getElementById('occupantCourse').value = occ.course;
            document.getElementById('occupantRoom').value = occ.room;
            document.getElementById('occupantRemarks').value = occ.remarks;
            document.getElementById('occupantModal').classList.remove('hidden');
        }

        function saveOccupant() {
            const id = document.getElementById('occupantId').value;
            const surname = document.getElementById('occupantSurname').value;
            const firstName = document.getElementById('occupantFirstName').value;
            const course = document.getElementById('occupantCourse').value;
            const room = document.getElementById('occupantRoom').value;
            const remarks = document.getElementById('occupantRemarks').value;
            if (!surname || !firstName || !room) { alert('Please fill in Surname, First Name, and Room'); return; }
            if (id) {
                const occ = appState.occupants.find(o => o.id === id);
                if (occ) { occ.surname = surname; occ.firstName = firstName; occ.course = course; occ.room = room; occ.remarks = remarks; }
            } else {
                const newId = 'occ_' + Date.now();
                const maxNo = Math.max(...appState.occupants.map(o => o.no), 0);
                const payments = {};
                appState.collectionDates.forEach(d => { payments[d] = 'unpaid'; });
                appState.occupants.push({ id: newId, no: maxNo + 1, surname, firstName, course, room, remarks, payments });
            }
            persistState();
            closeOccupantModal();
            renderAdminView();
        }

        function deleteOccupant(occupantId) {
            if (confirm('Delete this occupant?')) { appState.occupants = appState.occupants.filter(o => o.id !== occupantId); persistState(); renderAdminView(); }
        }

        function closeOccupantModal() { document.getElementById('occupantModal').classList.add('hidden'); }

        function openAddPurchaseModal() {
            document.getElementById('purchaseId').value = '';
            document.getElementById('purchaseDate').value = new Date().toISOString().split('T')[0];
            document.getElementById('purchaseAmount').value = '';
            document.getElementById('purchaseModal').classList.remove('hidden');
        }

        function editPurchase(purchaseId) {
            const p = appState.purchases.find(x => x.id === purchaseId);
            if (!p) return;
            document.getElementById('purchaseId').value = purchaseId;
            document.getElementById('purchaseDate').value = p.date;
            document.getElementById('purchaseAmount').value = p.amount;
            document.getElementById('purchaseModal').classList.remove('hidden');
        }

        function savePurchase() {
            const id = document.getElementById('purchaseId').value;
            const date = document.getElementById('purchaseDate').value;
            const amount = parseInt(document.getElementById('purchaseAmount').value) || 0;
            if (!date || amount <= 0) { alert('Please fill in all fields'); return; }
            if (id) {
                const p = appState.purchases.find(x => x.id === id);
                if (p) { p.date = date; p.amount = amount; }
            } else appState.purchases.push({ id: 'purch_' + Date.now(), date, amount });
            persistState();
            closePurchaseModal();
            renderAdminView();
        }

        function deletePurchase(purchaseId) {
            if (confirm('Delete this purchase?')) { appState.purchases = appState.purchases.filter(p => p.id !== purchaseId); persistState(); renderAdminView(); }
        }

        function closePurchaseModal() { document.getElementById('purchaseModal').classList.add('hidden'); }


        function addCollectionDate() {
            document.getElementById('newDate').value = '';
            document.getElementById('defaultAmount').value = '50';
            document.getElementById('dateModal').classList.remove('hidden');
        }

        function saveCollectionDate() {
            const date = document.getElementById('newDate').value;
            const amount = parseInt(document.getElementById('defaultAmount').value) || 50;
            if (!date) { alert('Please select a date'); return; }
            if (appState.collectionDates.includes(date)) { alert('This date already exists'); return; }
            appState.collectionDates.push(date);
            appState.collectionDates.sort();
            appState.dateAmounts[date] = amount;
            appState.occupants.forEach(o => { o.payments[date] = 'unpaid'; });
            appState.totals[date] = 0;
            persistState();
            closeDateModal();
            renderAdminView();
        }

        function closeDateModal() { document.getElementById('dateModal').classList.add('hidden'); }

        function openEditDateAmountModal(date) {
            document.getElementById('editDateValue').value = date;
            document.getElementById('editDateDisplay').innerText = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});
            document.getElementById('editDateAmount').value = appState.dateAmounts[date] || 50;
            document.getElementById('editDateAmountModal').classList.remove('hidden');
        }

        function closeEditDateAmountModal() { document.getElementById('editDateAmountModal').classList.add('hidden'); }

        function saveEditDateAmount() {
            const date = document.getElementById('editDateValue').value;
            const amount = parseInt(document.getElementById('editDateAmount').value) || 50;
            if (!date || amount < 1) { alert('Invalid amount'); return; }
            appState.dateAmounts[date] = amount;
            // Recalculate totals for this date
            const dateTotal = appState.occupants.filter(o => o.payments[date] === 'paid').length * amount;
            appState.totals[date] = dateTotal;
            persistState();
            closeEditDateAmountModal();
            renderAdminView();
            updateBalances();
        }

        function deleteCollectionDate(date) {
            if (!confirm('Delete this collection date? This will remove all payment records for this date.')) return;
            appState.collectionDates = appState.collectionDates.filter(d => d !== date);
            delete appState.dateAmounts[date];
            delete appState.totals[date];
            appState.occupants.forEach(o => { delete o.payments[date]; });
            persistState();
            renderAdminView();
            updateBalances();
        }

        function exportToCSV() {
            const headers = ['No.', 'Surname', 'First Name', 'Course', 'Room', 'Remarks'];
            appState.collectionDates.forEach(d => {
                const dateStr = new Date(d + 'T00:00:00').toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
                headers.push(`${dateStr} (₱${appState.dateAmounts[d] || 50})`);
            });
            headers.push('Total Paid', 'Pending');

            const rows = appState.occupants.filter(isRealOccupant).map(o => {
                const row = [o.no, o.surname, o.firstName, o.course, o.room, o.remarks];
                let totalPaid = 0;
                let pending = 0;
                appState.collectionDates.forEach(d => {
                    const s = o.payments[d] || 'unpaid';
                    const amount = appState.dateAmounts[d] || 50;
                    if (s === 'paid') { row.push('Paid'); totalPaid += amount; }
                    else if (s === 'partial') { row.push('Partial'); totalPaid += amount / 2; }
                    else if (s === 'excused') { row.push('Excused'); }
                    else { row.push('Unpaid'); pending += amount; }
                });
                row.push(totalPaid, pending);
                return row;
            });

            const csv = [headers, ...rows].map(row => row.map(cell => {
                const s = String(cell ?? '');
                return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
            }).join(',')).join('\n');

            const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'water-collection-' + new Date().toISOString().split('T')[0] + '.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        document.getElementById('adminSearch').addEventListener('input', renderOccupantsTable);
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeOccupantModal(); closePurchaseModal(); closeDateModal(); closeEditDateAmountModal(); closeLoginScreen(); } });
        window.addEventListener('DOMContentLoaded', initializeApp);

