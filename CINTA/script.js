function sampaikanCinta() {
    var namaTarget = document.getElementById("namaTarget").value;
    if (namaTarget.trim() === "") {
        alert("Silakan masukkan nama target cintamu!");
    } else {
        var hasil = "Halo " + namaTarget + ", kamu mau gak jadi pacar aku?";
        var hasilElement = document.getElementById("hasil");
        var i = 0;
        hasilElement.style.display = "block";
        hasilElement.innerHTML = "";

        function typeWriter() {
            if (i < hasil.length) {
                hasilElement.innerHTML += hasil.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                hasilElement.innerHTML += '<div class="lope-lope">💕</div>';
                setTimeout(ubahKeTerminal, 2000);
            }
        }

        function ubahKeTerminal() {
            var container = document.querySelector('.container');
            container.innerHTML = '<div class="terminal">PACARAN TERUS,INGAT 17:32 merupakan bahasa gaul yang digunakan warganet untuk menyinggung orang-orang yang berpacaran. Istilah ini sejatinya merujuk pada ayat Al-quran yaitu surah Al-Isra yang merupakan surah ke-17 pada ayat 32. Artinya: Dan janganlah kamu mendekati zina; sesungguhnya zina itu adalah suatu perbuatan yang keji.</div>';
        }

        typeWriter();
    }
}

const terminal = document.getElementById('terminal');
const userInput = document.getElementById('userInput');
let isShutdown = false;

function writeToTerminal(text) {
    const p = document.createElement('p');
    p.textContent = text;
    terminal.appendChild(p);
    terminal.scrollTop = terminal.scrollHeight;
}

function intro() {
    const introText = [
        "Hello...",
        "Is there anyone out there?",
        "Introduce yourself..."
    ];

    let i = 0;
    const intervalId = setInterval(() => {
        writeToTerminal(introText[i]);
        i++;
        if (i === introText.length) {
            clearInterval(intervalId);
        }
    }, 1500);
}

function handleUserInput() {
    const input = userInput.value.trim().toLowerCase();

    if (input === "/shutdown server") {
        shutdownServer();
    } else {
        writeToTerminal(`User: ${input}`);
    }

    userInput.value = '';
}

function shutdownServer() {
    if (!isShutdown) {
        isShutdown = true;
        setTimeout(() => {
            terminal.innerHTML = '<p>The server is restarting...</p>';
            setTimeout(() => {
                terminal.innerHTML = '<p>Welcome to Horror Terminal</p><p>Please introduce yourself:</p><input type="text" id="userInput">';
                isShutdown = false;
            }, 3000);
        }, 2000);
    }
}

intro();
userInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

