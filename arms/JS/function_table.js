
/*------------- Number 1 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content1');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content1');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar1 a.active1');
    if (current) {
      current.classList.remove('active1');
    }

    const selectedOption = document.querySelector(`.littlenavbar1 a[href="#${contentId}"]`);
    selectedOption.classList.add('active1');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar1 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 2 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content6');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content2');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar2 a.active2');
    if (current) {
      current.classList.remove('active2');
    }

    const selectedOption = document.querySelector(`.littlenavbar2 a[href="#${contentId}"]`);
    selectedOption.classList.add('active2');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar2 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 3 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content11');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content3');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar3 a.active3');
    if (current) {
      current.classList.remove('active3');
    }

    const selectedOption = document.querySelector(`.littlenavbar3 a[href="#${contentId}"]`);
    selectedOption.classList.add('active3');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar3 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 4 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content16');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content4');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar4 a.active4');
    if (current) {
      current.classList.remove('active4');
    }

    const selectedOption = document.querySelector(`.littlenavbar4 a[href="#${contentId}"]`);
    selectedOption.classList.add('active4');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar4 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 5 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content21');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content5');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar5 a.active5');
    if (current) {
      current.classList.remove('active5');
    }

    const selectedOption = document.querySelector(`.littlenavbar5 a[href="#${contentId}"]`);
    selectedOption.classList.add('active5');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar5 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 6 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content26');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content6');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar6 a.active6');
    if (current) {
      current.classList.remove('active6');
    }

    const selectedOption = document.querySelector(`.littlenavbar6 a[href="#${contentId}"]`);
    selectedOption.classList.add('active6');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar6 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 7 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content31');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content7');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar7 a.active7');
    if (current) {
      current.classList.remove('active7');
    }

    const selectedOption = document.querySelector(`.littlenavbar7 a[href="#${contentId}"]`);
    selectedOption.classList.add('active7');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar7 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 8 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content36');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content8');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar8 a.active8');
    if (current) {
      current.classList.remove('active8');
    }

    const selectedOption = document.querySelector(`.littlenavbar8 a[href="#${contentId}"]`);
    selectedOption.classList.add('active8');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar8 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 9 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content41');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content9');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar9 a.active9');
    if (current) {
      current.classList.remove('active9');
    }

    const selectedOption = document.querySelector(`.littlenavbar9 a[href="#${contentId}"]`);
    selectedOption.classList.add('active9');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar9 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 10 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content46');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content10');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar10 a.active10');
    if (current) {
      current.classList.remove('active10');
    }

    const selectedOption = document.querySelector(`.littlenavbar10 a[href="#${contentId}"]`);
    selectedOption.classList.add('active10');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar10 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 11 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content51');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content11');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar11 a.active11');
    if (current) {
      current.classList.remove('active11');
    }

    const selectedOption = document.querySelector(`.littlenavbar11 a[href="#${contentId}"]`);
    selectedOption.classList.add('active11');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar11 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 12 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content56');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content12');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar12 a.active12');
    if (current) {
      current.classList.remove('active12');
    }

    const selectedOption = document.querySelector(`.littlenavbar12 a[href="#${contentId}"]`);
    selectedOption.classList.add('active12');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar12 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 13 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content61');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content13');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar13 a.active13');
    if (current) {
      current.classList.remove('active13');
    }

    const selectedOption = document.querySelector(`.littlenavbar13 a[href="#${contentId}"]`);
    selectedOption.classList.add('active13');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar13 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 14 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content66');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content14');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar14 a.active14');
    if (current) {
      current.classList.remove('active14');
    }

    const selectedOption = document.querySelector(`.littlenavbar14 a[href="#${contentId}"]`);
    selectedOption.classList.add('active14');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar14 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 15 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content71');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content15');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar15 a.active15');
    if (current) {
      current.classList.remove('active15');
    }

    const selectedOption = document.querySelector(`.littlenavbar15 a[href="#${contentId}"]`);
    selectedOption.classList.add('active15');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar15 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 16 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content76');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content16');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar16 a.active16');
    if (current) {
      current.classList.remove('active16');
    }

    const selectedOption = document.querySelector(`.littlenavbar16 a[href="#${contentId}"]`);
    selectedOption.classList.add('active16');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar16 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 17 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content81');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content17');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar17 a.active17');
    if (current) {
      current.classList.remove('active17');
    }

    const selectedOption = document.querySelector(`.littlenavbar17 a[href="#${contentId}"]`);
    selectedOption.classList.add('active17');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar17 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 18 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content86');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content18');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar18 a.active18');
    if (current) {
      current.classList.remove('active18');
    }

    const selectedOption = document.querySelector(`.littlenavbar18 a[href="#${contentId}"]`);
    selectedOption.classList.add('active18');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar18 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 19 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content91');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content19');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar19 a.active19');
    if (current) {
      current.classList.remove('active19');
    }

    const selectedOption = document.querySelector(`.littlenavbar19 a[href="#${contentId}"]`);
    selectedOption.classList.add('active19');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar19 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 20 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content96');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content20');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar20 a.active20');
    if (current) {
      current.classList.remove('active20');
    }

    const selectedOption = document.querySelector(`.littlenavbar20 a[href="#${contentId}"]`);
    selectedOption.classList.add('active20');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar20 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 21 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content101');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content21');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar21 a.active21');
    if (current) {
      current.classList.remove('active21');
    }

    const selectedOption = document.querySelector(`.littlenavbar21 a[href="#${contentId}"]`);
    selectedOption.classList.add('active21');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar21 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 22 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content106');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content22');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar22 a.active22');
    if (current) {
      current.classList.remove('active22');
    }

    const selectedOption = document.querySelector(`.littlenavbar22 a[href="#${contentId}"]`);
    selectedOption.classList.add('active22');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar22 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 23 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content111');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content23');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar23 a.active23');
    if (current) {
      current.classList.remove('active23');
    }

    const selectedOption = document.querySelector(`.littlenavbar23 a[href="#${contentId}"]`);
    selectedOption.classList.add('active23');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar23 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 24 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content116');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content24');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar24 a.active24');
    if (current) {
      current.classList.remove('active24');
    }

    const selectedOption = document.querySelector(`.littlenavbar24 a[href="#${contentId}"]`);
    selectedOption.classList.add('active24');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar24 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 25 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content121');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content25');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar25 a.active25');
    if (current) {
      current.classList.remove('active25');
    }

    const selectedOption = document.querySelector(`.littlenavbar25 a[href="#${contentId}"]`);
    selectedOption.classList.add('active25');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar25 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 26 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content126');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content26');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar26 a.active26');
    if (current) {
      current.classList.remove('active26');
    }

    const selectedOption = document.querySelector(`.littlenavbar26 a[href="#${contentId}"]`);
    selectedOption.classList.add('active26');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar26 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 27 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content131');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content27');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
    
    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar27 a.active27');
    if (current) {
      current.classList.remove('active27');
    }

    const selectedOption = document.querySelector(`.littlenavbar27 a[href="#${contentId}"]`);
    selectedOption.classList.add('active27');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar27 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 28 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content136');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content28');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar28 a.active28');
    if (current) {
      current.classList.remove('active28');
    }

    const selectedOption = document.querySelector(`.littlenavbar28 a[href="#${contentId}"]`);
    selectedOption.classList.add('active28');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar28 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 29 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content141');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content29');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar29 a.active29');
    if (current) {
      current.classList.remove('active29');
    }

    const selectedOption = document.querySelector(`.littlenavbar29 a[href="#${contentId}"]`);
    selectedOption.classList.add('active29');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar29 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});

/*------------- Number 30 -------------*/
document.addEventListener('DOMContentLoaded', function() {
  const content1 = document.getElementById('content146');
  content1.style.display = 'block';

  function showContent(contentId) {
    const contents = document.getElementsByClassName('content30');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    const current = document.querySelector('.littlenavbar30 a.active30');
    if (current) {
      current.classList.remove('active30');
    }

    const selectedOption = document.querySelector(`.littlenavbar30 a[href="#${contentId}"]`);
    selectedOption.classList.add('active30');
  }

  // Event listeners for littlenavbar1 options
  const littlenavbar1Links = document.querySelectorAll('.littlenavbar30 a');
  littlenavbar1Links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const contentId = link.getAttribute('href').substring(1);
      showContent(contentId);
    });
  });
});
