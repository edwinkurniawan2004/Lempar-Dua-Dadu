let ulang = true;
confirm("apakah anda ingin melempar dadu?");
while(ulang){

	const dadu1 = Math.floor(Math.random() * 6) + 1;
	const dadu2 = Math.floor(Math.random() * 6) + 1;
	const hasil = dadu1 + dadu2;

	alert("Dadu ke-1 = " + dadu1 + "\nDadu ke-2 = " + dadu2 + "\nHasil Semua Dadu = " +  hasil );

	if(dadu1 == dadu2){
			alert("Anda mendapatkan kesempatan melempar dadu lagi\nKarena kedua dadu nilai nya sama");
			ulang = true;
	}else{
		alert("giliran anda sudah habis");
		ulang = confirm("apakah anda ingin menganti giliran lempar dadu?");
	}
}

	