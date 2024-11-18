// 1. feladat
function udvozlo(vezeteknev, keresztnev) {
    console.log(`Üdvözlöm, ${vezeteknev} ${keresztnev}!`);
}

// 2. feladat
udvozlo("Csavajda", "Ábel");

// 3. feladat
udvozlo("Kovács", "Zsolt");

// 4. feladat
function szorzas(szam1, szam2) {
    return szam1 * szam2;
}

// 5. feladat
console.log(`5 * 8 = ${szorzas(5, 8)}`);

// 6. feladat
console.log(`324 * 610 = ${szorzas(324, 610)}`);

// 7. feladat
function szorzasEllenorzott(szam1, szam2) {
    if (typeof szam1 !== "number") {
        console.log(`Hibás paraméter: ${szam1}`);
        return;
    }
    if (typeof szam2 !== "number") {
        console.log(`Hibás paraméter: ${szam2}`);
        return;
    }
    return szam1 * szam2;
}

// Hibás paraméter
console.log(szorzasEllenorzott(5, "nyolc"));
console.log(szorzasEllenorzott("öt", 8));

// 8. feladat
let szamok = [3, 6, 12, 53, 86, 43, 934, 201, 53, 87];

// 8.a.
console.log(szamok[4]);

// 8.b.
szamok.forEach(szam => console.log(szam));

// 8.c.
szamok.forEach(szam => console.log(szam * 3));

// 8.d.
szamok.forEach(szam => console.log(szam * 3 - 1));

// 8.e.
szamok.filter(szam => szam % 2 !== 0).forEach(szam => console.log(szam));
