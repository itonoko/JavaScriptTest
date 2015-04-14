var player = {
    mana: 100,

    strength: 5,
    intelligence: 5,
    spirit: 5,
    physical: 5,
    technique: 5,

    hp: 100,
    mp: 20,
};

var enemy = {
    name: 'A',
    hp: 100,
    mp: 10,
    offence: 20,
    deffence: 10,
    mana: 20,
    // ターン数
    // [target]の[ある値が]がXXだったら～
    // 複数のいるなら順番は自由自在。指定がなければ先頭から。
    behavior:[1,2,1,2],
};



// 探索する場所
// 1の場所は複数のWaveからなりたつ
// 1Waveに戦闘やイベントが発生。
// Waveを最後までやりきると次の探索場所がオープン
var field = {
    name:'道',
    clear: false,
    wave:[],
};

// 戦闘
var battle = {
    turn: 1,
    fight: function () {
        player.offence - enemy.deffence;
    },

    deffence: function () {
        // deffence
    },

    escape: function () {

    }
};

var town = {
    // 店 / 強化 / 修練
    init:function(){
        var main = document.getElementById('main');
        var button = document.createElement('button');
        button.id = 'upgrade';
        button.addEventListener('click', town.upgrade);
        button.innerText = 'upgrade';
        main.appendChild(button);
    },

    upgrade: function (event) {
        player.mana -= 50;
        if (event.target.id == 'upgrade') {
            if (player.mana <= 0) {
                var o = document.getElementById(event.target.id);
                o.disabled = true;
            }
        }
    },

    levelup: function () {
        
    }
};

var main = {
    save: function () {
        if (typeof Storage == 'undefined' && !localStorage) {
            alert('fail save.')
        }

        localStorage['TextRPG.save_data'] = JSON.stringify(player);
    },

    load: function () {
        try {
            if (typeof Storage == 'undefined' && !localStorage) {
                alert('fail load.')
            }

            save_data = JSON.parse(localStorage['TextRPG.save_data']);
            if (save_data) {
                player = save_data;
            }
        }
        catch (e) {

        }
    },

    func: function () {
        player.hp += 1;
        var text = document.getElementById('hoge_text');
        if (text != null) {
            text.innerHTML = player.hp;
        }
    },

    func1: function () {
        var text = document.getElementById('hoge_text');
        if (text != null) {
            text.innerHTML = JSON.stringify(player);
        }
    }
};

window.onload = function () {
    main.load();
    town.init();
}
