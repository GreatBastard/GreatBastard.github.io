const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    loop: 'all',
    order: 'random',
    lrcType: 3,
    theme: '#b7daff',
    mutex: true,
    listFolded: false,
    audio: [
      {
        name: "カタオモイ",
        artist: 'Aimer',
        url: 'https://file.greatbastard.space/music/audio/Aimer%20-%20Daydream%20-%20%E3%82%AB%E3%82%BF%E3%82%AA%E3%83%A2%E3%82%A4.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Daydream.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E3%82%AB%E3%82%BF%E3%82%AA%E3%83%A2%E3%82%A4%20-%20Aimer.lrc'
      },
      {
        name: "コイワズライ",
        artist: 'Aimer',
        url: 'https://file.greatbastard.space/music/audio/Aimer%20-%20Sun%20Dance%20-%20%E3%82%B3%E3%82%A4%E3%83%AF%E3%82%BA%E3%83%A9%E3%82%A4.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Sun%20Dance.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E3%82%B3%E3%82%A4%E3%83%AF%E3%82%BA%E3%83%A9%E3%82%A4%20-%20Aimer.lrc'
      },
      {
        name: "My Sweetest One",
        artist: 'Aimer',
        url: 'https://file.greatbastard.space/music/audio/Aimer%20-%20broKen%20NIGHT%20-%20holLow%20wORlD%20-%20my%20sweetest%20one.mp3',
        cover: 'https://file.greatbastard.space/music/cover/broKen%20NIGHT%20holLow%20wORlD.png',
        lrc: 'https://file.greatbastard.space/music/lrc/my%20sweetest%20one%20-%20Aimer.lrc'
      },
      {
        name: "グレースノート",
        artist: 'Aimer',
        url: 'https://file.greatbastard.space/music/audio/Aimer%20-%20%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88%20-%20%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88%EF%BC%88%E7%81%B0%E5%BA%A6%E7%AC%94%E8%AE%B0%E6%9C%AC%EF%BC%89.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88%EF%BC%88%E7%81%B0%E5%BA%A6%E7%AC%94%E8%AE%B0%E6%9C%AC%EF%BC%89%20-%20Aimer.lrc'
      },
      {
        name: "茜さす",
        artist: 'Aimer',
        url: 'https://file.greatbastard.space/music/audio/Aimer%20-%20%E8%8C%9C%E3%81%95%E3%81%99-everlasting%20snow%20-%20%E8%8C%9C%E3%81%95%E3%81%99.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E8%8C%9C%E3%81%95%E3%81%99everlasting%20snow.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E8%8C%9C%E3%81%95%E3%81%99%20-%20Aimer.lrc'
      },
      {
        name: "Nocturne No. 1 in B Flat Minor, Op. 9, No. 1",
        artist: 'Arthur Rubinstein',
        url: 'https://file.greatbastard.space/music/audio/Arthur%20Rubinstein%20-%20The%20Chopin%20Collection-%20The%20Nocturnes%20-%20Nocturne%20No.%201%20in%20B%20Flat%20Minor%2C%20Op.%209%2C%20No.%201.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Chopin%20Collection%20The%20Nocturnes.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Nocturne No. 2 in E Flat Major, Op. 9, No. 2",
        artist: 'Arthur Rubinstein',
        url: 'https://file.greatbastard.space/music/audio/Arthur%20Rubinstein%20-%20The%20Chopin%20Collection-%20The%20Nocturnes%20-%20Nocturne%20No.%202%20in%20E%20Flat%20Major%2C%20Op.%209%2C%20No.%202.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Chopin%20Collection%20The%20Nocturnes.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Tender",
        artist: 'Blur',
        url: 'https://file.greatbastard.space/music/audio/Blur%20-%2013%20-%20Tender.mp3',
        cover: 'https://file.greatbastard.space/music/cover/13.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Tender%20-%20Blur.lrc'
      },
      {
        name: "Up&Up",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20A%20Head%20Full%20of%20Dreams%20-%20Up%26Up.mp3',
        cover: 'https://file.greatbastard.space/music/cover/A%20Head%20Full%20of%20Dreams.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Up%26Up%20-%20Coldplay.lrc'
      },
      {
        name: "A Rush of Blood to the Head",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20A%20Rush%20of%20Blood%20to%20the%20Head%20-%20A%20Rush%20of%20Blood%20to%20the%20Head.mp3',
        cover: 'https://file.greatbastard.space/music/cover/A%20Rush%20of%20Blood%20to%20the%20Head.png',
        lrc: 'https://file.greatbastard.space/music/lrc/A%20Rush%20of%20Blood%20to%20the%20Head%20-%20Coldplay.lrc'
      },
      {
        name: "The Scientist",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20A%20Rush%20of%20Blood%20to%20the%20Head%20-%20The%20Scientist.mp3',
        cover: 'https://file.greatbastard.space/music/cover/A%20Rush%20of%20Blood%20to%20the%20Head.png',
        lrc: 'https://file.greatbastard.space/music/lrc/The%20Scientist%20-%20Coldplay.lrc'
      },
      {
        name: "A Sky Full of Stars",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Ghost%20Stories%20-%20A%20Sky%20Full%20of%20Stars.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Ghost%20Stories.png',
        lrc: 'https://file.greatbastard.space/music/lrc/A%20Sky%20Full%20of%20Stars%20-%20Coldplay.lrc'
      },
      {
        name: "Ink",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Ghost%20Stories%20-%20Ink.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Ghost%20Stories.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Ink%20-%20Coldplay.lrc'
      },
      {
        name: "O",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Ghost%20Stories%20-%20O.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Ghost%20Stories.png',
        lrc: 'https://file.greatbastard.space/music/lrc/O%20-%20Coldplay.lrc'
      },
      {
        name: "Coloratura.mp3",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Music%20Of%20The%20Spheres%20-%20Coloratura.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Music%20Of%20The%20Spheres.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Coloratura%20-%20Coldplay.lrc'
      },
      {
        name: "Charlie Brown",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Mylo%20Xyloto%20-%20Charlie%20Brown.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Mylo%20Xyloto.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Charlie%20Brown%20-%20Coldplay.lrc'
      },
      {
        name: "Paradise",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Mylo%20Xyloto%20-%20Paradise.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Mylo%20Xyloto.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Paradise%20-%20Coldplay.lrc'
      },
      {
        name: "Up with the Birds",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Mylo%20Xyloto%20-%20Up%20with%20the%20Birds.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Mylo%20Xyloto.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Up%20with%20the%20Birds%20-%20Coldplay.lrc'
      },
      {
        name: "Don't Panic",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Parachutes%20-%20Dont%20Panic.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Parachutes.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Dont%20Panic%20-%20Coldplay.lrc'
      },
      {
        name: "Everything's Not Lost.mp3",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Parachutes%20-%20Everythings%20Not%20Lost.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Parachutes.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Everythings%20Not%20Lost%20-%20Coldplay.lrc'
      },
      {
        name: "Sparks",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Parachutes%20-%20Sparks.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Parachutes.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Sparks%20-%20Coldplay.lrc'
      },
      {
        name: "We Never Change",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Parachutes%20-%20We%20Never%20Change.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Parachutes.png',
        lrc: 'https://file.greatbastard.space/music/lrc/We%20Never%20Change%20-%20Coldplay.lrc'
      },
      {
        name: "Yellow",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Parachutes%20-%20Yellow.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Parachutes.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Yellow%20-%20Coldplay.lrc'
      },
      {
        name: "Postcards From Far Away",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Prospekts%20March%20EP%20-%20Postcards%20From%20Far%20Away.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Prospekts%20March%20EP.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Prospekt's March-Poppyfields",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Prospekts%20March%20EP%20-%20Prospekts%20March-Poppyfields.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Prospekts%20March%20EP.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Prospekts%20March%EF%BC%8FPoppyfields%20-%20Coldplay.lrc'
      },
      {
        name: "Death and All His Friends",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Viva%20La%20Vida%20or%20Death%20and%20All%20His%20Friends%20-%20Death%20and%20All%20His%20Friends.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Viva%20La%20Vida%20or%20Death%20and%20All%20His%20Friends.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Death%20and%20All%20His%20Friends%20-%20Coldplay.lrc'
      },
      {
        name: "Strawberry Swing",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Viva%20La%20Vida%20or%20Death%20and%20All%20His%20Friends%20-%20Strawberry%20Swing.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Viva%20La%20Vida%20or%20Death%20and%20All%20His%20Friends.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Strawberry%20Swing%20-%20Coldplay.lrc'
      },
      {
        name: "Viva La Vida",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20Viva%20La%20Vida%20or%20Death%20and%20All%20His%20Friends%20-%20Viva%20La%20Vida.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Viva%20La%20Vida%20or%20Death%20and%20All%20His%20Friends.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Viva%20La%20Vida%20-%20Coldplay.lrc'
      },
      {
        name: "Fix You",
        artist: 'Coldplay',
        url: 'https://file.greatbastard.space/music/audio/Coldplay%20-%20X%26Y%20-%20Fix%20You.mp3',
        cover: 'https://file.greatbastard.space/music/cover/X%26Y.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Fix%20You%20-%20Coldplay.lrc'
      },
      {
        name: "This way",
        artist: 'DEPAPEPE',
        url: 'https://file.greatbastard.space/music/audio/DEPAPEPE%20-%20ACOUSTIC%20FRIENDS%20-%20This%20way.mp3',
        cover: 'https://file.greatbastard.space/music/cover/ACOUSTIC%20FRIENDS.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Rylynn",
        artist: 'Don Ross/Andy McKee',
        url: 'https://file.greatbastard.space/music/audio/Don%20Ross-Andy%20McKee%20-%20The%20Thing%20That%20Came%20from%20Somewhere%20-%20Rylynn.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Thing%20That%20Came%20from%20Somewhere.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "21 Guns",
        artist: 'Green Day',
        url: 'https://file.greatbastard.space/music/audio/Green%20Day%20-%2021st%20Century%20Breakdown%20-%2021%20Guns.mp3',
        cover: 'https://file.greatbastard.space/music/cover/21st%20Century%20Breakdown.png',
        lrc: 'https://file.greatbastard.space/music/lrc/21%20Guns%20-%20Green%20Day.lrc'
      },
      {
        name: "Imagine",
        artist: 'John Lennon',
        url: 'https://file.greatbastard.space/music/audio/John%20Lennon%20-%20Working%20Class%20Hero-%20The%20Definitive%20Lennon%20-%20Imagine.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Working%20Class%20Hero%20The%20Definitive%20Lennon.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Imagine%20-%20John%20Lennon.lrc'
      },
      {
        name: "Oh My Love",
        artist: 'John Lennon',
        url: 'https://file.greatbastard.space/music/audio/John%20Lennon%20-%20Working%20Class%20Hero-%20The%20Definitive%20Lennon%20-%20Oh%20My%20Love.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Working%20Class%20Hero%20The%20Definitive%20Lennon.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Oh%20My%20Love%20-%20John%20Lennon.lrc'
      },
      {
        name: "For River - Piano (Sarah & Tommy's Version)",
        artist: 'Kan R. Gao',
        url: 'https://file.greatbastard.space/music/audio/Kan%20R.%20Gao%20-%20To%20the%20Moon%20-%20For%20River%20-%20Piano%20(Sarah%20%26%20Tommys%20Version).mp3',
        cover: 'https://file.greatbastard.space/music/cover/To%20the%20Moon.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Burning in the Skies",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20A%20Thousand%20Suns%20-%20Burning%20in%20the%20Skies.mp3',
        cover: 'https://file.greatbastard.space/music/cover/A%20Thousand%20Suns.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Burning%20in%20the%20Skies%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Iridescent",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20A%20Thousand%20Suns%20-%20Iridescent.mp3',
        cover: 'https://file.greatbastard.space/music/cover/A%20Thousand%20Suns.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Iridescent%20-%20Linkin%20Park.lrc'
      },
      {
        name: "The Messenger",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20A%20Thousand%20Suns%20-%20The%20Messenger.mp3',
        cover: 'https://file.greatbastard.space/music/cover/A%20Thousand%20Suns.png',
        lrc: 'https://file.greatbastard.space/music/lrc/The%20Messenger%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Waiting for the End",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20A%20Thousand%20Suns%20-%20Waiting%20for%20the%20End.mp3',
        cover: 'https://file.greatbastard.space/music/cover/A%20Thousand%20Suns.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Waiting%20for%20the%20End%20-%20Linkin%20Park.lrc'
      },
      {
        name: "In the End",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20Hybrid%20Theory%20(Bonus%20Edition)%20-%20In%20the%20End.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Hybrid%20Theory.png',
        lrc: 'https://file.greatbastard.space/music/lrc/In%20the%20End%20-%20Linkin%20Park.lrc'
      },
      {
        name: "My December",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20Hybrid%20Theory%20(Bonus%20Edition)%20-%20My%20December.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Hybrid%20Theory.png',
        lrc: 'https://file.greatbastard.space/music/lrc/My%20December%20-%20Linkin%20Park.lrc'
      },
      {
        name: "L.O.A.T.R. - S.O.T.D. - Iridescent (Live)",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20Live%20in%20Buenos%20Aires%20-%20L.O.A.T.R.%20-%20S.O.T.D.%20-%20Iridescent%20(Live).mp3',
        cover: 'https://file.greatbastard.space/music/cover/Live%20in%20Buenos%20Aires.png',
        lrc: 'https://file.greatbastard.space/music/lrc/L.O.A.T.R.%20%EF%BC%8F%20S.O.T.D.%20%EF%BC%8F%20Iridescent%20(Live)%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Lost In The Echo",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20Living%20Things%20-%20Lost%20In%20The%20Echo.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Living%20Things.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Lost%20In%20The%20Echo%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Tinfoil",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20Living%20Things%20-%20Tinfoil.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Living%20Things.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Powerless",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20Living%20Things%20-%20Powerless.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Living%20Things.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Powerless%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Homecoming (Minutes to Midnight Demo)",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20LP%20Underground%2012%20-%20Homecoming%20(Minutes%20to%20Midnight%20Demo).mp3',
        cover: 'https://file.greatbastard.space/music/cover/LP%20Underground%2012.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Coal (1997 Demo)",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20LP%20Underground%20X-%20Demos%20-%20Coal%20(1997%20Demo).mp3',
        cover: 'https://file.greatbastard.space/music/cover/LP%20Underground%20X%20Demos.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Halo (2002 Demo)",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20LP%20Underground%20X-%20Demos%20-%20Halo%20(2002%20Demo).mp3',
        cover: 'https://file.greatbastard.space/music/cover/LP%20Underground%20X%20Demos.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Pale (2006 Demo)",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20LP%20Underground%20X-%20Demos%20-%20Pale%20(2006%20Demo).mp3',
        cover: 'https://file.greatbastard.space/music/cover/LP%20Underground%20X%20Demos.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Lying from You",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20Meteora%20-%20Lying%20from%20You.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Meteora.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Lying%20from%20You%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Leave Out All The Rest",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20Minutes%20To%20Midnight%20-%20Leave%20Out%20All%20The%20Rest.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Minutes%20To%20Midnight.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Leave%20Out%20All%20The%20Rest%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Shadow of the Day",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20Minutes%20To%20Midnight%20-%20Shadow%20of%20the%20Day.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Minutes%20To%20Midnight.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Shadow%20of%20the%20Day%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Battle Symphony",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20One%20More%20Light%20-%20Battle%20Symphony.mp3',
        cover: 'https://file.greatbastard.space/music/cover/One%20More%20Light.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Battle%20Symphony%20-%20Linkin%20Park.lrc'
      },
      {
        name: "One More Light",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20One%20More%20Light%20-%20One%20More%20Light.mp3',
        cover: 'https://file.greatbastard.space/music/cover/One%20More%20Light.png',
        lrc: 'https://file.greatbastard.space/music/lrc/One%20More%20Light%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Sharp Edges",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20One%20More%20Light%20-%20Sharp%20Edges.mp3',
        cover: 'https://file.greatbastard.space/music/cover/One%20More%20Light.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Sharp%20Edges%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Heavy",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20One%20More%20Light%20-%20Sharp%20Edges.mp3',
        cover: 'https://file.greatbastard.space/music/cover/One%20More%20Light.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Heavy%20-%20Linkin%20Park%2CKiiara.lrc'
      },
      {
        name: "She Couldn't",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20She%20Couldnt%20-%20She%20Couldnt.mp3',
        cover: 'https://file.greatbastard.space/music/cover/She%20Couldnt.png',
        lrc: 'https://file.greatbastard.space/music/lrc/She%20Couldnt%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Final Masquerade",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20The%20Hunting%20Party%20-%20Final%20Masquerade.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Hunting%20Party.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Final%20Masquerade%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Until It's Gone",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20The%20Hunting%20Party%20-%20Until%20Its%20Gone.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Hunting%20Party.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Until%20Its%20Gone%20-%20Linkin%20Park.lrc'
      },
      {
        name: "Holding Company (2011 Demo)",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20Underground%2013%20-%20Holding%20Company%20(2011%20Demo).mp3',
        cover: 'https://file.greatbastard.space/music/cover/Underground%2013.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Truth Inside A Lie (LPU Sessions 2013)",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20Underground%2013%20-%20Truth%20Inside%20A%20Lie%20(LPU%20Sessions%202013).mp3',
        cover: 'https://file.greatbastard.space/music/cover/Underground%2013.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Universe (2006 Demo)",
        artist: 'Linkin Park',
        url: 'https://file.greatbastard.space/music/audio/Linkin%20Park%20-%20Underground%2013%20-%20Universe%20(2006%20Demo).mp3',
        cover: 'https://file.greatbastard.space/music/cover/Underground%2013.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      
      {
        name: "Echo",
        artist: 'Loren',
        url: 'https://file.greatbastard.space/music/audio/Loren%20-%20Echo%20-%20Echo.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Echo.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Echo%20-%20Loren.lrc'
      },
      {
        name: "Comforting Sounds",
        artist: 'Mew',
        url: 'https://file.greatbastard.space/music/audio/Mew%20-%20Frengers-%20Not%20Quite%20Friends%20But%20Not%20Quite%20Strangers%20-%20Comforting%20Sounds.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Frengers%20Not%20Quite%20Friends%20But%20Not%20Quite%20Strangers.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Comforting%20Sounds%20-%20Mew.lrc'
      },
      {
        name: "She Came Home for Christmas",
        artist: 'Mew',
        url: 'https://file.greatbastard.space/music/audio/Mew%20-%20Frengers-%20Not%20Quite%20Friends%20But%20Not%20Quite%20Strangers%20-%20She%20Came%20Home%20for%20Christmas.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Frengers%20Not%20Quite%20Friends%20But%20Not%20Quite%20Strangers.png',
        lrc: 'https://file.greatbastard.space/music/lrc/She%20Came%20Home%20for%20Christmas%20-%20Mew.lrc'
      },
      {
        name: "Symmetry",
        artist: 'Mew',
        url: 'https://file.greatbastard.space/music/audio/Mew%20-%20Frengers-%20Not%20Quite%20Friends%20But%20Not%20Quite%20Strangers%20-%20Symmetry.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Frengers%20Not%20Quite%20Friends%20But%20Not%20Quite%20Strangers.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Symmetry%20-%20Mew.lrc'
      },
      {
        name: "The Light Behind Your Eyes",
        artist: 'My Chemical Romance',
        url: 'https://file.greatbastard.space/music/audio/My%20Chemical%20Romance%20-%20Conventional%20Weapons%20-%20The%20Light%20Behind%20Your%20Eyes.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Conventional%20Weapons.png',
        lrc: 'https://file.greatbastard.space/music/lrc/The%20Light%20Behind%20Your%20Eyes%20-%20My%20Chemical%20Romance.lrc'
      },
      {
        name: "Summertime",
        artist: 'My Chemical Romance',
        url: 'https://file.greatbastard.space/music/audio/My%20Chemical%20Romance%20-%20Danger%20Days-%20The%20True%20Lives%20of%20the%20Fabulous%20Killjoys%20-%20Summertime.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Danger%20Days%20The%20True%20Lives%20of%20the%20Fabulous%20Killjoys.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Summertime%20-%20My%20Chemical%20Romance.lrc'
      },
      {
        name: "The Kids from Yesterday",
        artist: 'My Chemical Romance',
        url: 'https://file.greatbastard.space/music/audio/My%20Chemical%20Romance%20-%20Danger%20Days-%20The%20True%20Lives%20of%20the%20Fabulous%20Killjoys%20-%20The%20Kids%20from%20Yesterday.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Danger%20Days%20The%20True%20Lives%20of%20the%20Fabulous%20Killjoys.png',
        lrc: 'https://file.greatbastard.space/music/lrc/The%20Kids%20from%20Yesterday%20-%20My%20Chemical%20Romance.lrc'
      },
      {
        name: "Fake Your Death",
        artist: 'My Chemical Romance',
        url: 'https://file.greatbastard.space/music/audio/My%20Chemical%20Romance%20-%20May%20Death%20Never%20Stop%20You%20-%20Fake%20Your%20Death.mp3',
        cover: 'https://file.greatbastard.space/music/cover/May%20Death%20Never%20Stop%20You.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Fake%20Your%20Death%20-%20My%20Chemical%20Romance.lrc'
      },
      {
        name: "Cancer",
        artist: 'My Chemical Romance',
        url: 'https://file.greatbastard.space/music/audio/My%20Chemical%20Romance%20-%20The%20Black%20Parade%20-%20Cancer.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Black%20Parade.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Cancer%20-%20My%20Chemical%20Romance.lrc'
      },
      {
        name: "Dead!",
        artist: 'My Chemical Romance',
        url: 'https://file.greatbastard.space/music/audio/My%20Chemical%20Romance%20-%20The%20Black%20Parade%20-%20Dead!.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Black%20Parade.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Dead!%20-%20My%20Chemical%20Romance.lrc'
      },
      {
        name: "Disenchanted",
        artist: 'My Chemical Romance',
        url: 'https://file.greatbastard.space/music/audio/My%20Chemical%20Romance%20-%20The%20Black%20Parade%20-%20Disenchanted.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Black%20Parade.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Disenchanted%20-%20My%20Chemical%20Romance.lrc'
      },
      {
        name: "I Don't Love You",
        artist: 'My Chemical Romance',
        url: 'https://file.greatbastard.space/music/audio/My%20Chemical%20Romance%20-%20The%20Black%20Parade%20-%20I%20Dont%20Love%20You.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Black%20Parade.png',
        lrc: 'https://file.greatbastard.space/music/lrc/I%20Dont%20Love%20You%20-%20My%20Chemical%20Romance.lrc'
      },
      {
        name: "Sleep",
        artist: 'My Chemical Romance',
        url: 'https://file.greatbastard.space/music/audio/My%20Chemical%20Romance%20-%20The%20Black%20Parade%20-%20Sleep.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Black%20Parade.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Sleep%20-%20My%20Chemical%20Romance.lrc'
      },
      {
        name: "Welcome to the Black Parade",
        artist: 'My Chemical Romance',
        url: 'https://file.greatbastard.space/music/audio/My%20Chemical%20Romance%20-%20The%20Black%20Parade%20-%20Welcome%20to%20the%20Black%20Parade.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Black%20Parade.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Welcome%20to%20the%20Black%20Parade%20-%20My%20Chemical%20Romance.lrc'
      },
      {
        name: "Don't Look Back in Anger",
        artist: 'Oasis',
        url: 'https://file.greatbastard.space/music/audio/Oasis%20-%20(Whats%20The%20Story)%20Morning%20Glory%20(Remastered)%20-%20Dont%20Look%20Back%20in%20Anger%20(Remastered).mp3',
        cover: 'https://file.greatbastard.space/music/cover/(Whats%20The%20Story)%20Morning%20Glory%20(Remastered).png',
        lrc: 'https://file.greatbastard.space/music/lrc/Dont%20Look%20Back%20in%20Anger%20(Remastered)%20-%20Oasis.lrc'
      },
      {
        name: "Wonderwall",
        artist: 'Oasis',
        url: 'https://file.greatbastard.space/music/audio/Oasis%20-%20(Whats%20The%20Story)%20Morning%20Glory%20(Remastered)%20-%20Wonderwall%20(Remastered).mp3',
        cover: 'https://file.greatbastard.space/music/cover/(Whats%20The%20Story)%20Morning%20Glory%20(Remastered).png',
        lrc: 'https://file.greatbastard.space/music/lrc/Wonderwall%20(Remastered)%20-%20Oasis.lrc'
      },
      {
        name: "Here There And Everywhere",
        artist: 'Paul McCartney',
        url: 'https://file.greatbastard.space/music/audio/Paul%20McCartney%20-%20Give%20My%20Regards%20to%20Broad%20Street%20-%20Here%20There%20And%20Everywhere%20(Remastered%201993).mp3',
        cover: 'https://file.greatbastard.space/music/cover/Give%20My%20Regards%20to%20Broad%20Street.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Here%20There%20And%20Everywhere%20(Remastered%201993)%20-%20Paul%20McCartney.lrc'
      },
      {
        name: "Yesterday",
        artist: 'Paul McCartney',
        url: 'https://file.greatbastard.space/music/audio/Paul%20McCartney%20-%20Give%20My%20Regards%20to%20Broad%20Street%20-%20Yesterday%20(Remastered%201993).mp3',
        cover: 'https://file.greatbastard.space/music/cover/Give%20My%20Regards%20to%20Broad%20Street.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Yesterday%20(Remastered%201993)%20-%20Paul%20McCartney.lrc'
      },
      {
        name: "Breathe (In the Air)",
        artist: 'Pink Floyd',
        url: 'https://file.greatbastard.space/music/audio/Pink%20Floyd%20-%20The%20Dark%20Side%20of%20the%20Moon%20-%20Breathe%20(In%20the%20Air).mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Dark%20Side%20of%20the%20Moon.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Breathe%20(In%20the%20Air)%20-%20Pink%20Floyd.lrc'
      },
      {
        name: "The Great Gig in the Sky",
        artist: 'Pink Floyd',
        url: 'https://file.greatbastard.space/music/audio/Pink%20Floyd%20-%20The%20Dark%20Side%20of%20the%20Moon%20-%20The%20Great%20Gig%20in%20the%20Sky.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Dark%20Side%20of%20the%20Moon.png',
        lrc: 'https://file.greatbastard.space/music/lrc/The%20Great%20Gig%20in%20the%20Sky%20-%20Pink%20Floyd.lrc'
      },
      {
        name: "Us and Them",
        artist: 'Pink Floyd',
        url: 'https://file.greatbastard.space/music/audio/Pink%20Floyd%20-%20The%20Dark%20Side%20of%20the%20Moon%20-%20Us%20and%20Them.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Dark%20Side%20of%20the%20Moon.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Us%20and%20Them%20-%20Pink%20Floyd.lrc'
      },
      {
        name: "Any Colour You Like",
        artist: 'Pink Floyd',
        url: 'https://file.greatbastard.space/music/audio/Pink%20Floyd%20-%20The%20Dark%20Side%20of%20the%20Moon%20-%20Any%20Colour%20You%20Like.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Dark%20Side%20of%20the%20Moon.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "Brain Damage",
        artist: 'Pink Floyd',
        url: 'https://file.greatbastard.space/music/audio/Pink%20Floyd%20-%20The%20Dark%20Side%20of%20the%20Moon%20-%20Brain%20Damage.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Dark%20Side%20of%20the%20Moon.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Brain%20Damage%20-%20Pink%20Floyd.lrc'
      },
      {
        name: "Comfortably Numb",
        artist: 'Pink Floyd',
        url: 'https://file.greatbastard.space/music/audio/Pink%20Floyd%20-%20The%20Wall%20-%20Comfortably%20Numb.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Wall.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Comfortably%20Numb%20-%20Pink%20Floyd.lrc'
      },
      {
        name: "Nobody Home",
        artist: 'Pink Floyd',
        url: 'https://file.greatbastard.space/music/audio/Pink%20Floyd%20-%20The%20Wall%20-%20Nobody%20Home.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Wall.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Nobody%20Home%20-%20Pink%20Floyd.lrc'
      },
      {
        name: "Somebody To Love",
        artist: 'Queen',
        url: 'https://file.greatbastard.space/music/audio/Queen%20-%20A%20Day%20At%20the%20Races%20-%20Somebody%20To%20Love.mp3',
        cover: 'https://file.greatbastard.space/music/cover/A%20Day%20At%20the%20Races.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Somebody%20To%20Love%20-%20Queen.lrc'
      },
      {
        name: "Teo Torriatte (Let Us Cling Together)",
        artist: 'Queen',
        url: 'https://file.greatbastard.space/music/audio/Queen%20-%20A%20Day%20At%20the%20Races%20-%20Teo%20Torriatte%20(Let%20Us%20Cling%20Together).mp3',
        cover: 'https://file.greatbastard.space/music/cover/A%20Day%20At%20the%20Races.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Teo%20Torriatte%20(Let%20Us%20Cling%20Together)%20-%20Queen.lrc'
      },
      {
        name: "The Millionaire Waltz",
        artist: 'Queen',
        url: 'https://file.greatbastard.space/music/audio/Queen%20-%20A%20Day%20At%20the%20Races%20-%20The%20Millionaire%20Waltz.mp3',
        cover: 'https://file.greatbastard.space/music/cover/A%20Day%20At%20the%20Races.png',
        lrc: 'https://file.greatbastard.space/music/lrc/The%20Millionaire%20Waltz%20-%20Queen.lrc'
      },
      {
        name: "Bohemian Rhapsody",
        artist: 'Queen',
        url: 'https://file.greatbastard.space/music/audio/Queen%20-%20A%20Night%20At%20The%20Opera%20-%20Bohemian%20Rhapsody.mp3',
        cover: 'https://file.greatbastard.space/music/cover/A%20Night%20At%20The%20Opera.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Bohemian%20Rhapsody%20-%20Queen.lrc'
      },
      {
        name: "Life Is Real (Song for Lennon)",
        artist: 'Queen',
        url: 'https://file.greatbastard.space/music/audio/Queen%20-%20Hot%20Space%20-%20Life%20Is%20Real%20(Song%20for%20Lennon).mp3',
        cover: 'https://file.greatbastard.space/music/cover/Hot%20Space.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Life%20Is%20Real%20(Song%20for%20Lennon)%20-%20Queen.lrc'
      },
      {
        name: "Under Pressure",
        artist: 'Queen/David Bowie',
        url: 'https://file.greatbastard.space/music/audio/Queen-David%20Bowie%20-%20Hot%20Space%20-%20Under%20Pressure.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Hot%20Space.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Under%20Pressure%20-%20Queen%2CDavid%20Bowie.lrc'
      },
      {
        name: "なんでもないや (movie ver.)",
        artist: 'RADWIMPS',
        url: 'https://file.greatbastard.space/music/audio/RADWIMPS%20-%20%E5%90%9B%E3%81%AE%E5%90%8D%E3%81%AF%E3%80%82%20-%20%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84%E3%82%84%20(movie%20ver.).mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E5%90%9B%E3%81%AE%E5%90%8D%E3%81%AF%E3%80%82.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84%E3%82%84%20(movie%20ver.)%20-%20RADWIMPS.lrc'
      },
      {
        name: "スパークル (movie ver.)",
        artist: 'RADWIMPS',
        url: 'https://file.greatbastard.space/music/audio/RADWIMPS%20-%20%E5%90%9B%E3%81%AE%E5%90%8D%E3%81%AF%E3%80%82%20-%20%E3%82%B9%E3%83%91%E3%83%BC%E3%82%AF%E3%83%AB%20(movie%20ver.).mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E5%90%9B%E3%81%AE%E5%90%8D%E3%81%AF%E3%80%82.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E3%82%B9%E3%83%91%E3%83%BC%E3%82%AF%E3%83%AB%20(movie%20ver.)%20-%20RADWIMPS.lrc'
      },
      {
        name: "愛にできることはまだあるかい",
        artist: 'RADWIMPS',
        url: 'https://file.greatbastard.space/music/audio/RADWIMPS%20-%20%E5%A4%A9%E6%B0%97%E3%81%AE%E5%AD%90%20-%20%E6%84%9B%E3%81%AB%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E3%81%BE%E3%81%A0%E3%81%82%E3%82%8B%E3%81%8B%E3%81%84.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E5%A4%A9%E6%B0%97%E3%81%AE%E5%AD%90.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%84%9B%E3%81%AB%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E3%81%BE%E3%81%A0%E3%81%82%E3%82%8B%E3%81%8B%E3%81%84%20-%20RADWIMPS.lrc'
      },
      {
        name: "Creep",
        artist: 'Radiohead',
        url: 'https://file.greatbastard.space/music/audio/Radiohead%20-%20Pablo%20Honey%20-%20Creep.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Pablo%20Honey.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Creep%20-%20Radiohead.lrc'
      },
      {
        name: "Fake Plastic Trees",
        artist: 'Radiohead',
        url: 'https://file.greatbastard.space/music/audio/Radiohead%20-%20The%20Bends%20-%20Fake%20Plastic%20Trees.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Bends.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Fake%20Plastic%20Trees%20-%20Radiohead.lrc'
      },
      {
        name: "High and Dry",
        artist: 'Radiohead',
        url: 'https://file.greatbastard.space/music/audio/Radiohead%20-%20The%20Bends%20-%20High%20and%20Dry.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Bends.png',
        lrc: 'https://file.greatbastard.space/music/lrc/High%20and%20Dry%20-%20Radiohead.lrc'
      },
      {
        name: "Pieces",
        artist: 'Sum 41',
        url: 'https://file.greatbastard.space/music/audio/Sum%2041%20-%20Chuck%20-%20Pieces.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Chuck.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Pieces%20-%20Sum%2041.lrc'
      },
      {
        name: "Some Say",
        artist: 'Sum 41',
        url: 'https://file.greatbastard.space/music/audio/Sum%2041%20-%20Chuck%20-%20Some%20Say.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Chuck.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Some%20Say%20-%20Sum%2041.lrc'
      },
      {
        name: "We're All To Blame",
        artist: 'Sum 41',
        url: 'https://file.greatbastard.space/music/audio/Sum%2041%20-%20Chuck%20-%20Were%20All%20To%20Blame.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Chuck.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Were%20All%20To%20Blame%20-%20Sum%2041.lrc'
      },
      {
        name: "Crash",
        artist: 'Sum 41',
        url: 'https://file.greatbastard.space/music/audio/Sum%2041%20-%20Screaming%20Bloody%20Murder%20-%20Crash.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Screaming%20Bloody%20Murder.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Crash%20-%20Sum%2041.lrc'
      },
      {
        name: "What Am I To Say",
        artist: 'Sum 41',
        url: 'https://file.greatbastard.space/music/audio/Sum%2041%20-%20Screaming%20Bloody%20Murder%20-%20What%20Am%20I%20To%20Say.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Screaming%20Bloody%20Murder.png',
        lrc: 'https://file.greatbastard.space/music/lrc/What%20Am%20I%20To%20Say%20-%20Sum%2041.lrc'
      },
      {
        name: "Best Of Me",
        artist: 'Sum 41',
        url: 'https://file.greatbastard.space/music/audio/Sum%2041%20-%20Underclass%20Hero%20-%20Best%20Of%20Me.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Underclass%20Hero.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Best%20Of%20Me%20-%20Sum%2041.lrc'
      },
      {
        name: "So Long Goodbye",
        artist: 'Sum 41',
        url: 'https://file.greatbastard.space/music/audio/Sum%2041%20-%20Underclass%20Hero%20-%20So%20Long%20Goodbye.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Underclass%20Hero.png',
        lrc: 'https://file.greatbastard.space/music/lrc/So%20Long%20Goodbye%20-%20Sum%2041.lrc'
      },
      {
        name: "Speak Of The Devil.",
        artist: 'Sum 41',
        url: 'https://file.greatbastard.space/music/audio/Sum%2041%20-%20Underclass%20Hero%20-%20Speak%20Of%20The%20Devil.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Underclass%20Hero.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Speak%20Of%20The%20Devil%20-%20Sum%2041.lrc'
      },
      {
        name: "Underclass Hero",
        artist: 'Sum 41',
        url: 'https://file.greatbastard.space/music/audio/Sum%2041%20-%20Underclass%20Hero%20-%20Underclass%20Hero.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Underclass%20Hero.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Underclass%20Hero%20-%20Sum%2041.lrc'
      },
      {
        name: "Walking Disaster",
        artist: 'Sum 41',
        url: 'https://file.greatbastard.space/music/audio/Sum%2041%20-%20Underclass%20Hero%20-%20Walking%20Disaster.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Underclass%20Hero.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Walking%20Disaster%20-%20Sum%2041.lrc'
      },
      {
        name: "With Me",
        artist: 'Sum 41',
        url: 'https://file.greatbastard.space/music/audio/Sum%2041%20-%20Underclass%20Hero%20-%20With%20Me.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Underclass%20Hero.png',
        lrc: 'https://file.greatbastard.space/music/lrc/With%20Me%20-%20Sum%2041.lrc'
      },
      {
        name: "Stuck In A Moment You Can't Get Out Of",
        artist: 'U2',
        url: 'https://file.greatbastard.space/music/audio/U2%20-%20All%20That%20You%20Cant%20Leave%20Behind%20-%20Stuck%20In%20A%20Moment%20You%20Cant%20Get%20Out%20Of.mp3',
        cover: 'https://file.greatbastard.space/music/cover/All%20That%20You%20Cant%20Leave%20Behind.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Stuck%20In%20A%20Moment%20You%20Cant%20Get%20Out%20Of%20-%20U2.lrc'
      },
      {
        name: "Walk On",
        artist: 'U2',
        url: 'https://file.greatbastard.space/music/audio/U2%20-%20All%20That%20You%20Cant%20Leave%20Behind%20-%20Walk%20On.mp3',
        cover: 'https://file.greatbastard.space/music/cover/All%20That%20You%20Cant%20Leave%20Behind.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Walk%20On%20-%20U2.lrc'
      },
      {
        name: "When I Look At The World",
        artist: 'U2',
        url: 'https://file.greatbastard.space/music/audio/U2%20-%20All%20That%20You%20Cant%20Leave%20Behind%20-%20When%20I%20Look%20At%20The%20World.mp3',
        cover: 'https://file.greatbastard.space/music/cover/All%20That%20You%20Cant%20Leave%20Behind.png',
        lrc: 'https://file.greatbastard.space/music/lrc/When%20I%20Look%20At%20The%20World%20-%20U2.lrc'
      },
      {
        name: "Sometimes You Can't Make It On Your Own",
        artist: 'U2',
        url: 'https://file.greatbastard.space/music/audio/U2%20-%20How%20To%20Dismantle%20An%20Atomic%20Bomb%20-%20Sometimes%20You%20Cant%20Make%20It%20On%20Your%20Own.mp3',
        cover: 'https://file.greatbastard.space/music/cover/How%20To%20Dismantle%20An%20Atomic%20Bomb.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Sometimes%20You%20Cant%20Make%20It%20On%20Your%20Own%20-%20U2.lrc'
      },
      {
        name: "All I Want Is You",
        artist: 'U2',
        url: 'https://file.greatbastard.space/music/audio/U2%20-%20Rattle%20And%20Hum%20-%20All%20I%20Want%20Is%20You.mp3',
        cover: 'https://file.greatbastard.space/music/cover/Rattle%20And%20Hum.png',
        lrc: 'https://file.greatbastard.space/music/lrc/All%20I%20Want%20Is%20You%20-%20U2.lrc'
      },
      {
        name: "I Still Haven't Found What I'm Looking For",
        artist: 'U2',
        url: 'https://file.greatbastard.space/music/audio/U2%20-%20The%20Joshua%20Tree%20(Deluxe%20Edition)%20%5BRemastered%5D%20-%20I%20Still%20Havent%20Found%20What%20Im%20Looking%20For.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Joshua%20Tree%20(Deluxe%20Edition)%20%5BRemastered%5D.png',
        lrc: 'https://file.greatbastard.space/music/lrc/I%20Still%20Havent%20Found%20What%20Im%20Looking%20For%20-%20U2.lrc'
      },
      {
        name: "Running To Stand Still",
        artist: 'U2',
        url: 'https://file.greatbastard.space/music/audio/U2%20-%20The%20Joshua%20Tree%20(Deluxe%20Edition)%20%5BRemastered%5D%20-%20Running%20To%20Stand%20Still.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Joshua%20Tree%20(Deluxe%20Edition)%20%5BRemastered%5D.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Running%20To%20Stand%20Still%20-%20U2.lrc'
      },
      {
        name: "Where The Streets Have No Name",
        artist: 'U2',
        url: 'https://file.greatbastard.space/music/audio/U2%20-%20The%20Joshua%20Tree%20(Deluxe%20Edition)%20%5BRemastered%5D%20-%20Where%20The%20Streets%20Have%20No%20Name.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Joshua%20Tree%20(Deluxe%20Edition)%20%5BRemastered%5D.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Where%20The%20Streets%20Have%20No%20Name%20-%20U2.lrc'
      },
      {
        name: "With Or Without You",
        artist: 'U2',
        url: 'https://file.greatbastard.space/music/audio/U2%20-%20The%20Joshua%20Tree%20(Deluxe%20Edition)%20%5BRemastered%5D%20-%20With%20Or%20Without%20You.mp3',
        cover: 'https://file.greatbastard.space/music/cover/The%20Joshua%20Tree%20(Deluxe%20Edition)%20%5BRemastered%5D.png',
        lrc: 'https://file.greatbastard.space/music/lrc/With%20Or%20Without%20You%20-%20U2.lrc'
      },
      {
        name: "大石碎胸口",
        artist: '万能青年旅店',
        url: 'https://file.greatbastard.space/music/audio/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20-%20%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91%20-%20%E5%A4%A7%E7%9F%B3%E7%A2%8E%E8%83%B8%E5%8F%A3.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%A4%A7%E7%9F%B3%E7%A2%8E%E8%83%B8%E5%8F%A3%20-%20%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97.lrc'
      },
      {
        name: "揪心的玩笑与漫长的白日梦",
        artist: '万能青年旅店',
        url: 'https://file.greatbastard.space/music/audio/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20-%20%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91%20-%20%E6%8F%AA%E5%BF%83%E7%9A%84%E7%8E%A9%E7%AC%91%E4%B8%8E%E6%BC%AB%E9%95%BF%E7%9A%84%E7%99%BD%E6%97%A5%E6%A2%A6.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%8F%AA%E5%BF%83%E7%9A%84%E7%8E%A9%E7%AC%91%E4%B8%8E%E6%BC%AB%E9%95%BF%E7%9A%84%E7%99%BD%E6%97%A5%E6%A2%A6%20-%20%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97.lrc'
      },
      {
        name: "杀死那个石家庄人",
        artist: '万能青年旅店',
        url: 'https://file.greatbastard.space/music/audio/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20-%20%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91%20-%20%E6%9D%80%E6%AD%BB%E9%82%A3%E4%B8%AA%E7%9F%B3%E5%AE%B6%E5%BA%84%E4%BA%BA.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%9D%80%E6%AD%BB%E9%82%A3%E4%B8%AA%E7%9F%B3%E5%AE%B6%E5%BA%84%E4%BA%BA%20-%20%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97.lrc'
      },
      {
        name: "秦皇岛",
        artist: '万能青年旅店',
        url: 'https://file.greatbastard.space/music/audio/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20-%20%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91%20-%20%E7%A7%A6%E7%9A%87%E5%B2%9B.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E7%A7%A6%E7%9A%87%E5%B2%9B%20-%20%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97.lrc'
      },
      {
        name: "山雀",
        artist: '万能青年旅店',
        url: 'https://file.greatbastard.space/music/audio/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20-%20%E5%86%80%E8%A5%BF%E5%8D%97%E6%9E%97%E8%B7%AF%E8%A1%8C%20-%20%E5%B1%B1%E9%9B%80.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E5%86%80%E8%A5%BF%E5%8D%97%E6%9E%97%E8%B7%AF%E8%A1%8C.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%B1%B1%E9%9B%80%20-%20%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97.lrc'
      },
      {
        name: "郊眠寺",
        artist: '万能青年旅店',
        url: 'https://file.greatbastard.space/music/audio/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97%20-%20%E5%86%80%E8%A5%BF%E5%8D%97%E6%9E%97%E8%B7%AF%E8%A1%8C%20-%20%E9%83%8A%E7%9C%A0%E5%AF%BA.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E5%86%80%E8%A5%BF%E5%8D%97%E6%9E%97%E8%B7%AF%E8%A1%8C.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E9%83%8A%E7%9C%A0%E5%AF%BA%20-%20%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97.lrc'
      },
      {
        name: "一千个世纪",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F%20-%20%E4%B8%80%E5%8D%83%E4%B8%AA%E4%B8%96%E7%BA%AA.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E4%B8%80%E5%8D%83%E4%B8%AA%E4%B8%96%E7%BA%AA%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "天使",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F%20-%20%E5%A4%A9%E4%BD%BF.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%A4%A9%E4%BD%BF%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "最重要的小事",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F%20-%20%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E5%B0%8F%E4%BA%8B.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E5%B0%8F%E4%BA%8B%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "米老鼠",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F%20-%20%E7%B1%B3%E8%80%81%E9%BC%A0.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E7%B1%B3%E8%80%81%E9%BC%A0%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "一颗苹果",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E4%BA%BA%E7%94%9F%E6%B5%B7%E6%B5%B7%20-%20%E4%B8%80%E9%A2%97%E8%8B%B9%E6%9E%9C.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%BA%BA%E7%94%9F%E6%B5%B7%E6%B5%B7.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E4%B8%80%E9%A2%97%E8%8B%B9%E6%9E%9C%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "彩虹",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E4%BA%BA%E7%94%9F%E6%B5%B7%E6%B5%B7%20-%20%E5%BD%A9%E8%99%B9.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%BA%BA%E7%94%9F%E6%B5%B7%E6%B5%B7.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%BD%A9%E8%99%B9%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "纯真",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E4%BA%BA%E7%94%9F%E6%B5%B7%E6%B5%B7%20-%20%E7%BA%AF%E7%9C%9F.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%BA%BA%E7%94%9F%E6%B5%B7%E6%B5%B7.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E7%BA%AF%E7%9C%9F%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "勇敢",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E5%8B%87%E6%95%A2%20-%20%E5%8B%87%E6%95%A2.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E5%8B%87%E6%95%A2.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%8B%87%E6%95%A2%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "你不是真正的快乐",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E5%90%8E%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97%20-%20%E4%BD%A0%E4%B8%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%BF%AB%E4%B9%90.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E5%90%8E%20%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E4%BD%A0%E4%B8%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%BF%AB%E4%B9%90%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "如烟",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E5%90%8E%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97%20-%20%E5%A6%82%E7%83%9F.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E5%90%8E%20%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%A6%82%E7%83%9F%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "我心中尚未崩坏的地方",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E5%90%8E%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97%20-%20%E6%88%91%E5%BF%83%E4%B8%AD%E5%B0%9A%E6%9C%AA%E5%B4%A9%E5%9D%8F%E7%9A%84%E5%9C%B0%E6%96%B9.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E5%90%8E%20%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%88%91%E5%BF%83%E4%B8%AD%E5%B0%9A%E6%9C%AA%E5%B4%A9%E5%9D%8F%E7%9A%84%E5%9C%B0%E6%96%B9%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "生存以上生活以下",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E5%90%8E%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97%20-%20%E7%94%9F%E5%AD%98%E4%BB%A5%E4%B8%8A%E7%94%9F%E6%B4%BB%E4%BB%A5%E4%B8%8B.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E5%90%8E%20%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E7%94%9F%E5%AD%98%E4%BB%A5%E4%B8%8A%E7%94%9F%E6%B4%BB%E4%BB%A5%E4%B8%8B%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "突然好想你",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E5%90%8E%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97%20-%20%E7%AA%81%E7%84%B6%E5%A5%BD%E6%83%B3%E4%BD%A0.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E5%90%8E%20%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E7%AA%81%E7%84%B6%E5%A5%BD%E6%83%B3%E4%BD%A0%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      
      {
        name: "时光机",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E6%97%B6%E5%85%89%E6%9C%BA%20-%20%E6%97%B6%E5%85%89%E6%9C%BA.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E6%97%B6%E5%85%89%E6%9C%BA.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%97%B6%E5%85%89%E6%9C%BA%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "步步",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E6%AD%A5%E6%AD%A5%20%E8%87%AA%E9%80%89%E4%BD%9C%E5%93%81%E8%BE%91%20the%20Best%20of%201999-2013%20-%20%E6%AD%A5%E6%AD%A5.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E6%AD%A5%E6%AD%A5%20%E8%87%AA%E9%80%89%E4%BD%9C%E5%93%81%E8%BE%91%20the%20Best%20of%201999-2013.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%AD%A5%E6%AD%A5%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "温柔",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%88%B1%E6%83%85%E4%B8%87%E5%B2%81%20-%20%E6%B8%A9%E6%9F%94.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E7%88%B1%E6%83%85%E4%B8%87%E5%B2%81.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%B8%A9%E6%9F%94%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "知足",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%9F%A5%E8%B6%B3%20%E6%9C%80%E7%9C%9F%E6%9D%B0%E4%BD%9C%E9%80%89%20-%20%E7%9F%A5%E8%B6%B3.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E7%9F%A5%E8%B6%B3%20%E6%9C%80%E7%9C%9F%E6%9D%B0%E4%BD%9C%E9%80%89.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E7%9F%A5%E8%B6%B3%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "超人",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%A5%9E%E7%9A%84%E5%AD%A9%E5%AD%90%E9%83%BD%E5%9C%A8%E8%B7%B3%E8%88%9E%20-%20%E8%B6%85%E4%BA%BA.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E7%A5%9E%E7%9A%84%E5%AD%A9%E5%AD%90%E9%83%BD%E5%9C%A8%E8%B7%B3%E8%88%9E.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E8%B6%85%E4%BA%BA%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "私奔到月球",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%A6%BB%E5%BC%80%E5%9C%B0%E7%90%83%E8%A1%A8%E9%9D%A2%20Jump!%20-%20%E7%A7%81%E5%A5%94%E5%88%B0%E6%9C%88%E7%90%83.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E7%A6%BB%E5%BC%80%E5%9C%B0%E7%90%83%E8%A1%A8%E9%9D%A2%20Jump!.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E7%A7%81%E5%A5%94%E5%88%B0%E6%9C%88%E7%90%83%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9%20_%20%E9%99%88%E7%BB%AE%E8%B4%9E.lrc'
      },
      {
        name: "拥抱",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%88%9B%E4%BD%9C%E4%B8%93%E8%BE%91%20-%20%E6%8B%A5%E6%8A%B1.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%88%9B%E4%BD%9C%E4%B8%93%E8%BE%91.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%8B%A5%E6%8A%B1%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "爱情的模样",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%88%9B%E4%BD%9C%E4%B8%93%E8%BE%91%20-%20%E7%88%B1%E6%83%85%E7%9A%84%E6%A8%A1%E6%A0%B7.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%88%9B%E4%BD%9C%E4%B8%93%E8%BE%91.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E7%88%B1%E6%83%85%E7%9A%84%E6%A8%A1%E6%A0%B7%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "干杯",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%EF%BC%88%E6%98%8E%E6%97%A5%E7%89%88%EF%BC%89%20-%20%E5%B9%B2%E6%9D%AF.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%20(%E6%98%8E%E6%97%A5%E7%89%88).png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%B9%B2%E6%9D%AF%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "我不愿 让你一个人",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%EF%BC%88%E6%98%8E%E6%97%A5%E7%89%88%EF%BC%89%20-%20%E6%88%91%E4%B8%8D%E6%84%BF%20%E8%AE%A9%E4%BD%A0%E4%B8%80%E4%B8%AA%E4%BA%BA.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%20(%E6%98%8E%E6%97%A5%E7%89%88).png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%88%91%E4%B8%8D%E6%84%BF%20%E8%AE%A9%E4%BD%A0%E4%B8%80%E4%B8%AA%E4%BA%BA%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "星空",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%EF%BC%88%E6%98%8E%E6%97%A5%E7%89%88%EF%BC%89%20-%20%E6%98%9F%E7%A9%BA.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%20(%E6%98%8E%E6%97%A5%E7%89%88).png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%98%9F%E7%A9%BA%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "有些事现在不做 一辈子都不会做了",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%EF%BC%88%E6%98%8E%E6%97%A5%E7%89%88%EF%BC%89%20-%20%E6%9C%89%E4%BA%9B%E4%BA%8B%E7%8E%B0%E5%9C%A8%E4%B8%8D%E5%81%9A%20%E4%B8%80%E8%BE%88%E5%AD%90%E9%83%BD%E4%B8%8D%E4%BC%9A%E5%81%9A%E4%BA%86.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%20(%E6%98%8E%E6%97%A5%E7%89%88).png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%9C%89%E4%BA%9B%E4%BA%8B%E7%8E%B0%E5%9C%A8%E4%B8%8D%E5%81%9A%20%E4%B8%80%E8%BE%88%E5%AD%90%E9%83%BD%E4%B8%8D%E4%BC%9A%E5%81%9A%E4%BA%86%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "第二人生",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%EF%BC%88%E6%98%8E%E6%97%A5%E7%89%88%EF%BC%89%20-%20%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%20(%E6%98%8E%E6%97%A5%E7%89%88).png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "诺亚方舟",
        artist: '五月天',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%EF%BC%88%E6%98%8E%E6%97%A5%E7%89%88%EF%BC%89%20-%20%E8%AF%BA%E4%BA%9A%E6%96%B9%E8%88%9F.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%20(%E6%98%8E%E6%97%A5%E7%89%88).png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E8%AF%BA%E4%BA%9A%E6%96%B9%E8%88%9F%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "温柔 #MaydayBlue20th",
        artist: '五月天/孙燕姿',
        url: 'https://file.greatbastard.space/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E6%B8%A9%E6%9F%94%20%23MaydayBlue20th%20-%20%E6%B8%A9%E6%9F%94%20%23MaydayBlue20th.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E6%B8%A9%E6%9F%94%20%23MaydayBlue20th.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%B8%A9%E6%9F%94%2020th%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9%20_%20%E5%AD%99%E7%87%95%E5%A7%BF.lrc'
      },
      {
        name: "只有音乐才是我的解药",
        artist: '反光镜',
        url: 'https://file.greatbastard.space/music/audio/%E5%8F%8D%E5%85%89%E9%95%9C%20-%20%E9%87%8A%E4%BD%A0%20-%20%E5%8F%AA%E6%9C%89%E9%9F%B3%E4%B9%90%E6%89%8D%E6%98%AF%E6%88%91%E7%9A%84%E8%A7%A3%E8%8D%AF.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E9%87%8A%E4%BD%A0.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%8F%AA%E6%9C%89%E9%9F%B3%E4%B9%90%E6%89%8D%E6%98%AF%E6%88%91%E7%9A%84%E8%A7%A3%E8%8D%AF%20-%20%E5%8F%8D%E5%85%89%E9%95%9C.lrc'
      },
      {
        name: "Intro",
        artist: '草东没有派对',
        url: 'https://file.greatbastard.space/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E4%B8%91%E5%A5%B4%E5%84%BF%20-%20Intro.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://file.greatbastard.space/music/lrc/Instrumental.lrc'
      },
      {
        name: "丑",
        artist: '草东没有派对',
        url: 'https://file.greatbastard.space/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E4%B8%91%E5%A5%B4%E5%84%BF%20-%20%E4%B8%91.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E4%B8%91%20-%20%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "烂泥",
        artist: '草东没有派对',
        url: 'https://file.greatbastard.space/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E4%B8%91%E5%A5%B4%E5%84%BF%20-%20%E7%83%82%E6%B3%A5.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E7%83%82%E6%B3%A5%20-%20%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "勇敢的人",
        artist: '草东没有派对',
        url: 'https://file.greatbastard.space/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E4%B8%91%E5%A5%B4%E5%84%BF%20-%20%E5%8B%87%E6%95%A2%E7%9A%84%E4%BA%BA.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%8B%87%E6%95%A2%E7%9A%84%E4%BA%BA%20-%20%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "大风吹",
        artist: '草东没有派对',
        url: 'https://file.greatbastard.space/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E4%B8%91%E5%A5%B4%E5%84%BF%20-%20%E5%A4%A7%E9%A3%8E%E5%90%B9.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%A4%A7%E9%A3%8E%E5%90%B9%20-%20%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "鬼",
        artist: '草东没有派对',
        url: 'https://file.greatbastard.space/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E4%B8%91%E5%A5%B4%E5%84%BF%20-%20%E9%AC%BC.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E9%AC%BC%20-%20%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "在",
        artist: '草东没有派对',
        url: 'https://file.greatbastard.space/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E4%B8%91%E5%A5%B4%E5%84%BF%20-%20%E5%9C%A8.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%9C%A8%20-%20%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "山海",
        artist: '草东没有派对',
        url: 'https://file.greatbastard.space/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E4%B8%91%E5%A5%B4%E5%84%BF%20-%20%E5%B1%B1%E6%B5%B7.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%B1%B1%E6%B5%B7%20-%20%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "我们",
        artist: '草东没有派对',
        url: 'https://file.greatbastard.space/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E4%B8%91%E5%A5%B4%E5%84%BF%20-%20%E6%88%91%E4%BB%AC.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%88%91%E4%BB%AC%20-%20%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "情歌",
        artist: '草东没有派对',
        url: 'https://file.greatbastard.space/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E4%B8%91%E5%A5%B4%E5%84%BF%20-%20%E6%83%85%E6%AD%8C.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E6%83%85%E6%AD%8C%20-%20%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "如常",
        artist: '草东没有派对',
        url: 'https://file.greatbastard.space/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9%20-%20%E5%A6%82%E5%B8%B8%20-%20%E5%A6%82%E5%B8%B8.mp3',
        cover: 'https://file.greatbastard.space/music/cover/%E5%A6%82%E5%B8%B8.png',
        lrc: 'https://file.greatbastard.space/music/lrc/%E5%A6%82%E5%B8%B8%20-%20%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      }
      
    ]
});