function fillBar(seconds) {
    const progressBar = document.querySelector('.progress-bar');
    let atPercent = 0;
    const interval = setInterval(()=>{
        progressBar.style.width = atPercent + '%';
        atPercent++
        console.log('running at', atPercent)
        if (atPercent >= 100){
            clearInterval(interval)
        }
    }, (seconds * 1000) / 100);
};
