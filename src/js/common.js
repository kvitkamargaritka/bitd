$( document ).ready(function() {
  //Detection OS
  os_win_msg = "This Tool is Compatible With Your Operating System.";
  os_not_win_msg = "This Tool is not Compatible With Your Operating System.";
  os_img = "loading.gif";

  var os,
    ua = navigator.userAgent;

  if (ua.match(/Win(dows )?NT 6\.0/)) {
    os = "Windows Vista"; // Windows Vista ???
    os_img = "icon_vista.jpg";
    $('*[data-os="Windows Vista"]').attr( 'selected', true );
  }
  else if (ua.match(/Win(dows )?NT 5\.2/)) {
    os = "Windows Server 2003."; // Windows Server 2003 ???
    os_img = "loading.gif";
    $('*[data-os="Select OS"]').attr( 'selected', true );
  }
  else if (ua.match(/Win(dows )?(NT 5\.1|XP)/)) {
    os = "Windows XP"; // Windows XP ???
    os_img = "icon_xp.jpg";
    $('*[data-os="Windows XP"]').attr( 'selected', true );
  }
  else if (ua.match(/Win(dows)? (9x 4\.90|ME)/)) {
    os = "Windows ME"; // Windows ME ???
    $('*[data-os="Select OS"]').attr( 'selected', true );
  }
  else if (ua.match(/Win(dows )?(NT 5\.0|2000)/)) {
    os = "Windows 2000"; // Windows 2000 ???
    os_img = "icon_windows2000.jpg";
    $('*[data-os="Windows 2000"]').attr( 'selected', true );
  }
  else if (ua.match(/Win(dows )?98/)) {
    os = "Windows 98"; // Windows 98 ???
    $('*[data-os="Select OS"]').attr( 'selected', true );
  }
  else if ((ua.indexOf("Windows NT 5.1") != -1) || (ua.indexOf("Windows XP") != -1)) {
    os = "Windows XP";
  }
  else if ((ua.indexOf("Windows NT 7.0") != -1) || (ua.indexOf("Windows NT 6.1") != -1)) {
    os = "Windows 7";
    os_img = "icon_windows7.jpg";
    $('*[data-os="Windows 7"]').attr( 'selected', true );
  }
  else if ((ua.indexOf("Windows NT 8.0") != -1) || (ua.indexOf("Windows NT 6.2") != -1)) {
    os = "Windows 8";
    os_img = "icon_windows8.jpg";
    $('*[data-os="Windows 8"]').attr( 'selected', true );
  }
  else if ((ua.indexOf("Windows NT 8.1") != -1) || (ua.indexOf("Windows NT 6.3") != -1)) {
    os = "Windows 8.1";
    os_img = "icon_windows8_1.jpg";
    $('*[data-os="Windows 8.1"]').attr( 'selected', true );
  }
  else if ((ua.indexOf("Windows NT 10.0") != -1) || (ua.indexOf("Windows NT 6.4") != -1)) {
    os = "Windows 10";
    os_img = "icon_windows10.jpg";
    $('*[data-os="Windows 10"]').attr( 'selected', true );
  }
  else if (ua.match(/Win(dows )?NT( 4\.0)?/)) {
    os = "Windows NT"; // Windows NT ???
    os_img = "loading.gif";
    $('*[data-os="Select OS"]').attr( 'selected', true );
  }
  else if (ua.match(/Win(dows )?95/)) {
    os = "Windows 95"; // Windows 95 ???
    $('*[data-os="Select OS"]').attr( 'selected', true );
  }
  else if (ua.match(/Mac|PPC/)) {
    os = "Mac OS"; // Macintosh ???
    os_img = "loading.gif";
    $('*[data-os="Mac OS"]').attr( 'selected', true );
  }
  else if (ua.match(/Linux/)) {
    os = "Linux"; // Linux ???
    os_img = "loading.gif";
    $('*[data-os="Select OS"]').attr( 'selected', true );
  }
  else if (ua.match(/(Free|Net|Open)BSD/)) {
    os = RegExp.$1 + "BSD"; // BSD ????
    $('*[data-os="Select OS"]').attr( 'selected', true );
  }
  else if (ua.match(/SunOS/)) {
    os = "Solaris"; // Solaris ???
    $('*[data-os="Select OS"]').attr( 'selected', true );
  }
  else {
    os = "N/A"; // ???? OS ???
    $('*[data-os="Select OS"]').attr( 'selected', true );
  }

  $('#detected-os').html(os) && $('#detected-os-img').attr("src", "img/"+os_img);


  //Language
  $('.language').hover(function(){
    $(this).toggleClass('is-open');
  });

  $('.language__el').click(function(){
    $('.language__el').removeClass('is-active');
    $(this).toggleClass('is-active');
  });

});