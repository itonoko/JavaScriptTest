var player = {
    mana: 100,

    strength: 5,
    intelligence: 5,
    spirit: 5,
    physical: 5,
    technique: 5,

    hp: 100,
    mp: 20,
    offence: 20,
    deffence: 10,

};

var enemy = {
    name: 'A',
    hp: 100,
    mp: 10,
    offence: 20,
    deffence: 10,
    mana: 20,
};

var battle = {
    
};

var field = {
    name:'“¹',
    clear: false,
    wave:[],
};

var town = {
    levelup: function () {
        
    }
};

var foo = { 
    func: function () {
        test.hoge += 1;
        var text = document.getElementById('hoge_text');
        if (text != null) {
            text.innerHTML = test.hoge;
        }
    }
};

var main = {
    save: function () {
        if (typeof Storage == 'undefined' && !localStorage) {
            alert('fail save.')
        }

    },

    load: function () {
        try {
            if (typeof Storage == 'undefined' && !localStorage) {
                alert('fail load.')
            }
        }
        catch (e) {

        }
    }
};
