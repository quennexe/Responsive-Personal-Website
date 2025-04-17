document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});


document.getElementById('speakButton').addEventListener('click', () => {

    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const clock = `${hours}:${minutes}:${seconds}`;

    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    const dateText = `${day}.${month}.${year}`;


    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const dayOfWeek = days[now.getDay()];

    const message = `Bugün ${dayOfWeek}, saat ${clock}, tarih ${dateText}`;

    // Sesli olarak okunması için SpeechSynthesis API kullanılıyor
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'tr-TR';
    speechSynthesis.speak(utterance);
});