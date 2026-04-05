const title = document.querySelector('.title')  
const text = '9@#4$^&a2~!xz%*+|?><L0mnb12'.split('')  
for (let index = 0; index < text.length; index++) {  
  if (text[index] !== ' ') {  
    title.innerHTML += `<span>${text[index]}<span/>`  
  } else {  
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`  
  }  
}  
  
const textElements = document.querySelectorAll('.title span');  
textElements.forEach((element) => {  
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik  
  element.style.animationDelay = `${randomDelay}s`;  
});
