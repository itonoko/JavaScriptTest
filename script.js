var test = {
    hoge: 3
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
