
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
