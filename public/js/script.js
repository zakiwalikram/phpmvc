$(function () {
  $('.tombolTambahData').on('click', function () {
    $('#formModalLabel').html('Tambah Data Mahasiswa');
    $('.modal-footer button[type=submit]').html('Tambah Data');
    $('#nama').val('');
    $('#nrp').val('');
    $('#email').val('');
    $('#jurusan').val('');
    $('#id').val('');
  });

  $('.tampilModalUbah').on('click', function () {
    $('#formModalLabel').html('Ubah Data Mahasiswa');
    $('.modal-footer button[type=submit]').html('Ubah Data');
    $('.modal-body form').attr('action', 'http://localhost/wpu/phpmvc/public/mahasiswa/ubah');

    const id = $(this).data('id');

    $.ajax({
      url: 'http://localhost/wpu/phpmvc/public/mahasiswa/getubah',
      data: { id: id },
      method: 'post',
      dataType: 'json',
      success: function (data) {
        $('#nama').val(data.nama);
        $('#nobp').val(data.nobp);
        $('#email').val(data.email);
        $('#jurusan').val(data.jurusan);
        $('#id').val(data.id);
      },
    });
  });
});
