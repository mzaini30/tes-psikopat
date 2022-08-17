// new VConsole()

var sekarang, tanggal, bulan, tahun, list_bulan

sekarang = new Date()
tanggal = sekarang.getDate()
bulan = sekarang.getMonth()
tahun = sekarang.getFullYear()

list_bulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
]

$(".navbar-nav a").click(() => $(".navbar-toggle").click())

var pernyataan_nyala = []
var soal_tampil = 10
var total_nilai = 0

var olah_pernyataan = () => {
  $(".pernyataan").addClass("sembunyi")
  if (pernyataan_nyala.length < soal_tampil){ // if semua angka kurang dari 10
    var ambil = Math.floor(Math.random() * $(".pernyataan").length) // ex 25 (0-29)
    if ($.inArray(ambil, pernyataan_nyala) == -1){ // jika 25 nggak ada di list
      pernyataan_nyala.push(ambil)
      $(`.pernyataan:eq(${ambil})`).removeClass("sembunyi")
    } else {
      olah_pernyataan()
    }
  } else {
    var persenan = Math.round((total_nilai / (3 * soal_tampil)) * 100) // contoh 75
    $(".nilai").html(persenan)
    $(".progress-hasil").css("width", `${persenan}%`)
    $(".hasil").removeClass("sembunyi")
  }
}
olah_pernyataan()

$(".jawaban").click(function(){
  total_nilai += Number($(this).data("nilai"))
  olah_pernyataan()
})

// pernyataan length 30
// .pernyataan:eq(0) memilih yang pertama