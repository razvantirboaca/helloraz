const elements = document.querySelectorAll('.line');

function handleIntersection(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('text-primary')
        } else {
            entry.target.classList.remove('text-primary')
        }
    });
}

var observer = new IntersectionObserver(handleIntersection);

var config = {
    root:null,
    rootMargin: '-30% 0% -68% 0%',
    threshold: 0 
}
  
var observer = new IntersectionObserver(handleIntersection, config);

elements.forEach(element => observer.observe(element));