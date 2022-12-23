function loadPlaylist() {
  // Mengirim permintaan AJAX ke server
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'playlist.php');
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Mengambil data playlist dari server
      var playlist = JSON.parse(xhr.responseText);
      // Menampilkan data playlist di halaman web
      var playlistHTML = '';
      for (var i = 0; i < playlist.length; i++) {
        playlistHTML += '<li>' + playlist[i] + '</li>';
      }
      document.getElementById('playlist').innerHTML = playlistHTML;
    }
  };
  xhr.send();
}
