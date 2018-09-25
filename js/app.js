var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'https://ww.flickr.com/photos/big',
        nicknames: ["FirstNick", "SecondNick", "ThirdNick"]
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://ww.flickr.com/photos/big',
        nicknames: ["FirstNick", "SecondNick", "ThirdNick"]
    },
    {
        clickCount: 0,
        name: 'Scaredy',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'https://ww.flickr.com/photos/big',
        nicknames: ["FirstNick", "SecondNick", "ThirdNick"]
    },
    {
        clickCount: 0,
        name: 'Shadow',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'https://ww.flickr.com/photos/big',
        nicknames: ["FirstNick", "SecondNick", "ThirdNick"]
    }
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

    this.title = ko.computed(function() {
        var self = this;
        var clicks = self.clickCount();

        if(clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 10) {
            title = 'Infant';
        } else if (clicks < 25) {
            title = 'Teen';
        } else if (clicks < 50) {
            title = 'Young Adult';
        } else if (clicks < 75) {
            title = 'Adult';
        } else {
            title = 'Pensioner';
        }
        return title;
    }, this);
};


var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( this.catList()[0] );
        
    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };
};

ko.applyBindings(new ViewModel());