import express from "express";
const app = express();
const port = 8080;

app.get("/", (req, res) => {
	res.send(" New Homepage !");
});

//* menngunakan req.params berfungsi untuk menangkap nilai yang dikirimkan melalui url yang mengirimkan nilai secara langsung tanpa key
app.get("/bongol/:pacar/:pekerjaan/:sex", (req, res) => {
	const { pacar, pekerjaan, sex } = req.params;
	res.send(`Ini adalah bongol dengan pacar ${pacar}|pekerjaan${pekerjaan}|Jenis Kelamin ${sex}`);
});

//* mengggunakan req.query yg berfungsi untuk melakukan request terhadap url yang memiliki parameter dan nilai
app.get("/search", (req, res) => {
	const { food } = req.query;
	res.send(` <h1> Search Keyword : ${food}</h1> `);
});

//* untuk mengedit jika route yang kita cari tidak ada. Harus di taruh di paling terakhir !
app.get("*", (req, res) => {
	res.send("Halaman Tidak Dapat Ditemukan");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
