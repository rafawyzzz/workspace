
let app = {
   start: false,
   baralho: ['Robin', 'Zoro', 'Usopp', 'Marco', 'Luffy', 'Kid', 'Edward', 'Bartolomeo'],
   tabuleiro: document.querySelector('#tabuleiro'),
   firsCard: '', secondCard: '',
   time: 0, controlTime: null,
   getBestTime: () => {
      const minutes = Math.trunc(localStorage.bestTime / 60);
      const seconds = localStorage.bestTime % 60;
      alert(localStorage.bestTime);
      document.getElementById('btnExibirRank').innerHTML = `${(minutes < 10 ? "0" : "") + minutes}:${(seconds < 10 ? "0" : "") + seconds}`
   },
   setBestTime: () => {
      if (localStorage.bestTime != '') { localStorage.bestTime = app.time < localStorage.bestTime ? app.time : localStorage.bestTime; }
      else { localStorage.bestTime = app.time; }
   },
   timeStart: () => {
      app.time = 0;
      app.controlTime = setInterval(() => {
         app.time++;
         const minutes = Math.trunc(app.time / 60);
         const seconds = app.time % 60;
         document.querySelector('#btnExibirRank').innerHTML = `${(minutes < 10 ? "0" : "") + minutes}:${(seconds < 10 ? "0" : "") + seconds}`
      }, 1000)
   },
   timeEnd: () => {
      app.setBestTime();
      clearInterval(app.controlTime);
      app.controlTime = null;
   },
   iniciar: function () {
      if (app.start === true) {
         clearInterval(app.controlTime);
         app.timeStart();
         app.tabuleiro.innerHTML = '';
         document.getElementById('btnExibirRank').classList.add('timerAtivo');
         const duplicata = [...app.baralho, ...app.baralho];
         duplicata.sort(() => Math.random() - 0.5);
         for (const iterator of duplicata) {
            const carta = app.gerarCarta(iterator);
            app.tabuleiro.appendChild(carta);
         }
         app.exibirTempCards();
      }
      else {
         localStorage.setItem('bestTime', '');
         for (const iterator of app.baralho) {
            for (i = 0; i < 2; i++) {
               const carta = app.gerarCarta(iterator);
               app.tabuleiro.appendChild(carta);
            }
         }
      }
   },
   validarPartida: () => {
      const acertos = document.querySelectorAll('.hit');
      if (acertos.length === 16) {
         app.timeEnd();
         alert('Congratulations! You won!');
         document.getElementById('btnExibirRank').innerHTML = 'BEST TIME';
      }
   },
   validarPar: () => {
      const firts = app.firsCard.getAttribute('data-value'); const second = app.secondCard.getAttribute('data-value');
      if (firts === second) {
         setTimeout(() => {
            app.firsCard.firstChild.classList.add('hit'); app.secondCard.firstChild.classList.add('hit');
            app.firsCard = '';
            app.secondCard = '';
            app.validarPartida();
         }, 700);
      }
      else {
         setTimeout(() => {
            app.firsCard.classList.remove('ativo');
            app.secondCard.classList.remove('ativo');
            app.firsCard = '';
            app.secondCard = '';
         }, 1500);
      }
   },
   revelarCard: ({ target }) => {
      let cardAtual = target.parentNode.getAttribute('class');
      if (cardAtual === 'divCard ativo') {
         alert('Selecione outro card para continuar ou aguarde o flip da(s) carta(s)!')
      } else if (cardAtual === 'divCard') {
         if (app.firsCard === '') {
            target.parentNode.classList.add('ativo'); app.firsCard = target.parentNode;
         }
         else if (app.secondCard === '') {
            target.parentNode.classList.add('ativo'); app.secondCard = target.parentNode; app.validarPar();
         }
      };
   },
   gerarCarta: (e) => {
      const card = Object.assign(document.createElement('div'), { classList: ['divCard'] });
      const front = Object.assign(document.createElement('div'), { classList: ['face front'] });
      const back = Object.assign(document.createElement('div'), { classList: ['face back'] });
      front.style.backgroundImage = `url(./Imagens/${e}.jpg)`
      if (app.start === false) {
         card.appendChild(front);
      }
      else {
         card.appendChild(front);
         card.appendChild(back);
         card.addEventListener('click', app.revelarCard);
         card.setAttribute(`data-value`, e);
      } return card;
   },
   exibirTempCards: () => {
      const tabuleiro = document.getElementById('tabuleiro');
      divCards = tabuleiro.children;
      for (const iterator of divCards) {
         iterator.classList.add('ativo');
      }
      setTimeout(() => {
         for (const iterator of divCards) {
            iterator.classList.remove('ativo');
         }
      }, 3000);
   }
}
let result = (() => {
   document.getElementById('btnExibirRank').onclick = app.getBestTime; document.getElementById('btnIniciar').onclick = app.iniciar;
   app.iniciar();
   app.start = true;
})();