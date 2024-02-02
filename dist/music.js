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
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Aimer+-+Daydream+-+%E3%82%AB%E3%82%BF%E3%82%AA%E3%83%A2%E3%82%A4.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Daydream.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E3%82%AB%E3%82%BF%E3%82%AA%E3%83%A2%E3%82%A4+-+Aimer.lrc'
      },
      {
        name: "コイワズライ",
        artist: 'Aimer',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Aimer+-+Sun+Dance+-+%E3%82%B3%E3%82%A4%E3%83%AF%E3%82%BA%E3%83%A9%E3%82%A4.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Sun+Dance.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E3%82%B3%E3%82%A4%E3%83%AF%E3%82%BA%E3%83%A9%E3%82%A4+-+Aimer.lrc'
      },
      {
        name: "My Sweetest One",
        artist: 'Aimer',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Aimer+-+broKen+NIGHT+-+holLow+wORlD+-+my+sweetest+one.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/broKen+NIGHT+holLow+wORlD.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/my+sweetest+one+-+Aimer.lrc'
      },
      {
        name: "グレースノート",
        artist: 'Aimer',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Aimer+-+%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88+-+%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88%EF%BC%88%E7%81%B0%E5%BA%A6%E7%AC%94%E8%AE%B0%E6%9C%AC%EF%BC%89.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88%EF%BC%88%E7%81%B0%E5%BA%A6%E7%AC%94%E8%AE%B0%E6%9C%AC%EF%BC%89+-+Aimer.lrc'
      },
      {
        name: "茜さす",
        artist: 'Aimer',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Aimer+-+%E8%8C%9C%E3%81%95%E3%81%99-everlasting+snow+-+%E8%8C%9C%E3%81%95%E3%81%99.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E8%8C%9C%E3%81%95%E3%81%99everlasting+snow.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E8%8C%9C%E3%81%95%E3%81%99+-+Aimer.lrc'
      },
      {
        name: "Nocturne No. 1 in B Flat Minor, Op. 9, No. 1",
        artist: 'Arthur Rubinstein',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Arthur+Rubinstein+-+The+Chopin+Collection-+The+Nocturnes+-+Nocturne+No.+1+in+B+Flat+Minor%2C+Op.+9%2C+No.+1.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Chopin+Collection+The+Nocturnes.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Nocturne No. 2 in E Flat Major, Op. 9, No. 2",
        artist: 'Arthur Rubinstein',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Arthur+Rubinstein+-+The+Chopin+Collection-+The+Nocturnes+-+Nocturne+No.+2+in+E+Flat+Major%2C+Op.+9%2C+No.+2.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Chopin+Collection+The+Nocturnes.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Tender",
        artist: 'Blur',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Blur+-+13+-+Tender.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/13.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Tender+-+Blur.lrc'
      },
      {
        name: "Up&Up",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+A+Head+Full+of+Dreams+-+Up%26Up.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/A+Head+Full+of+Dreams.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Up%26Up+-+Coldplay.lrc'
      },
      {
        name: "A Rush of Blood to the Head",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+A+Rush+of+Blood+to+the+Head+-+A+Rush+of+Blood+to+the+Head.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/A+Rush+of+Blood+to+the+Head.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/A+Rush+of+Blood+to+the+Head+-+Coldplay.lrc'
      },
      {
        name: "The Scientist",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+A+Rush+of+Blood+to+the+Head+-+The+Scientist.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/A+Rush+of+Blood+to+the+Head.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/The+Scientist+-+Coldplay.lrc'
      },
      {
        name: "A Sky Full of Stars",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Ghost+Stories+-+A+Sky+Full+of+Stars.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Ghost+Stories.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/A+Sky+Full+of+Stars+-+Coldplay.lrc'
      },
      {
        name: "Ink",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Ghost+Stories+-+Ink.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Ghost+Stories.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Ink+-+Coldplay.lrc'
      },
      {
        name: "O",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Ghost+Stories+-+O.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Ghost+Stories.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/O+-+Coldplay.lrc'
      },
      {
        name: "Coloratura.mp3",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Music+Of+The+Spheres+-+Coloratura.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Music+Of+The+Spheres.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Coloratura+-+Coldplay.lrc'
      },
      {
        name: "Charlie Brown",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Mylo+Xyloto+-+Charlie+Brown.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Mylo+Xyloto.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Charlie+Brown+-+Coldplay.lrc'
      },
      {
        name: "Paradise",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Mylo+Xyloto+-+Paradise.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Mylo+Xyloto.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Paradise+-+Coldplay.lrc'
      },
      {
        name: "Up with the Birds",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Mylo+Xyloto+-+Up+with+the+Birds.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Mylo+Xyloto.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Up+with+the+Birds+-+Coldplay.lrc'
      },
      {
        name: "Don't Panic",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Parachutes+-+Dont+Panic.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Parachutes.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Dont+Panic+-+Coldplay.lrc'
      },
      {
        name: "Everything's Not Lost.mp3",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Parachutes+-+Everythings+Not+Lost.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Parachutes.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Everythings+Not+Lost+-+Coldplay.lrc'
      },
      {
        name: "Sparks",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Parachutes+-+Sparks.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Parachutes.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Sparks+-+Coldplay.lrc'
      },
      {
        name: "We Never Change",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Parachutes+-+We+Never+Change.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Parachutes.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/We+Never+Change+-+Coldplay.lrc'
      },
      {
        name: "Yellow",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Parachutes+-+Yellow.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Parachutes.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Yellow+-+Coldplay.lrc'
      },
      {
        name: "Postcards From Far Away",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Prospekts+March+EP+-+Postcards+From+Far+Away.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Prospekts+March+EP.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Prospekt's March-Poppyfields",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Prospekts+March+EP+-+Prospekts+March-Poppyfields.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Prospekts+March+EP.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Prospekts+March%EF%BC%8FPoppyfields+-+Coldplay.lrc'
      },
      {
        name: "Death and All His Friends",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Viva+La+Vida+or+Death+and+All+His+Friends+-+Death+and+All+His+Friends.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Viva+La+Vida+or+Death+and+All+His+Friends.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Death+and+All+His+Friends+-+Coldplay.lrc'
      },
      {
        name: "Strawberry Swing",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Viva+La+Vida+or+Death+and+All+His+Friends+-+Strawberry+Swing.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Viva+La+Vida+or+Death+and+All+His+Friends.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Strawberry+Swing+-+Coldplay.lrc'
      },
      {
        name: "Viva La Vida",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+Viva+La+Vida+or+Death+and+All+His+Friends+-+Viva+La+Vida.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Viva+La+Vida+or+Death+and+All+His+Friends.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Viva+La+Vida+-+Coldplay.lrc'
      },
      {
        name: "Fix You",
        artist: 'Coldplay',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Coldplay+-+X%26Y+-+Fix+You.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/X%26Y.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Fix+You+-+Coldplay.lrc'
      },
      {
        name: "This way",
        artist: 'DEPAPEPE',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/DEPAPEPE+-+ACOUSTIC+FRIENDS+-+This+way.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/ACOUSTIC+FRIENDS.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Rylynn",
        artist: 'Don Ross/Andy McKee',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Don+Ross-Andy+McKee+-+The+Thing+That+Came+from+Somewhere+-+Rylynn.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Thing+That+Came+from+Somewhere.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "21 Guns",
        artist: 'Green Day',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Green+Day+-+21st+Century+Breakdown+-+21+Guns.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/21st+Century+Breakdown.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/21+Guns+-+Green+Day.lrc'
      },
      {
        name: "Imagine",
        artist: 'John Lennon',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/John+Lennon+-+Working+Class+Hero-+The+Definitive+Lennon+-+Imagine.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Working+Class+Hero+The+Definitive+Lennon.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Imagine+-+John+Lennon.lrc'
      },
      {
        name: "Oh My Love",
        artist: 'John Lennon',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/John+Lennon+-+Working+Class+Hero-+The+Definitive+Lennon+-+Oh+My+Love.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Working+Class+Hero+The+Definitive+Lennon.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Oh+My+Love+-+John+Lennon.lrc'
      },
      {
        name: "For River - Piano (Sarah & Tommy's Version)",
        artist: 'Kan R. Gao',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Kan+R.+Gao+-+To+the+Moon+-+For+River+-+Piano+(Sarah+%26+Tommys+Version).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/To+the+Moon.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Burning in the Skies",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+A+Thousand+Suns+-+Burning+in+the+Skies.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/A+Thousand+Suns.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Burning+in+the+Skies+-+Linkin+Park.lrc'
      },
      {
        name: "Iridescent",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+A+Thousand+Suns+-+Iridescent.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/A+Thousand+Suns.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Iridescent+-+Linkin+Park.lrc'
      },
      {
        name: "The Messenger",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+A+Thousand+Suns+-+The+Messenger.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/A+Thousand+Suns.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/The+Messenger+-+Linkin+Park.lrc'
      },
      {
        name: "Waiting for the End",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+A+Thousand+Suns+-+Waiting+for+the+End.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/A+Thousand+Suns.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Waiting+for+the+End+-+Linkin+Park.lrc'
      },
      {
        name: "In the End",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+Hybrid+Theory+(Bonus+Edition)+-+In+the+End.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Hybrid+Theory.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/In+the+End+-+Linkin+Park.lrc'
      },
      {
        name: "My December",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+Hybrid+Theory+(Bonus+Edition)+-+My+December.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Hybrid+Theory.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/My+December+-+Linkin+Park.lrc'
      },
      {
        name: "L.O.A.T.R. - S.O.T.D. - Iridescent (Live)",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+Live+in+Buenos+Aires+-+L.O.A.T.R.+-+S.O.T.D.+-+Iridescent+(Live).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Live+in+Buenos+Aires.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/L.O.A.T.R.+%EF%BC%8F+S.O.T.D.+%EF%BC%8F+Iridescent+(Live)+-+Linkin+Park.lrc'
      },
      {
        name: "Lost In The Echo",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+Living+Things+-+Lost+In+The+Echo.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Living+Things.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Lost+In+The+Echo+-+Linkin+Park.lrc'
      },
      {
        name: "Tinfoil",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+Living+Things+-+Tinfoil.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Living+Things.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Powerless",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+Living+Things+-+Powerless.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Living+Things.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Powerless+-+Linkin+Park.lrc'
      },
      {
        name: "Homecoming (Minutes to Midnight Demo)",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+LP+Underground+12+-+Homecoming+(Minutes+to+Midnight+Demo).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/LP+Underground+12.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Coal (1997 Demo)",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+LP+Underground+X-+Demos+-+Coal+(1997+Demo).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/LP+Underground+X+Demos.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Halo (2002 Demo)",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+LP+Underground+X-+Demos+-+Halo+(2002+Demo).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/LP+Underground+X+Demos.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Pale (2006 Demo)",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+LP+Underground+X-+Demos+-+Pale+(2006+Demo).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/LP+Underground+X+Demos.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Lying from You",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+Meteora+-+Lying+from+You.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Meteora.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Lying+from+You+-+Linkin+Park.lrc'
      },
      {
        name: "Leave Out All The Rest",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+Minutes+To+Midnight+-+Leave+Out+All+The+Rest.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Minutes+To+Midnight.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Leave+Out+All+The+Rest+-+Linkin+Park.lrc'
      },
      {
        name: "Shadow of the Day",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+Minutes+To+Midnight+-+Shadow+of+the+Day.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Minutes+To+Midnight.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Shadow+of+the+Day+-+Linkin+Park.lrc'
      },
      {
        name: "Battle Symphony",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+One+More+Light+-+Battle+Symphony.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/One+More+Light.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Battle+Symphony+-+Linkin+Park.lrc'
      },
      {
        name: "One More Light",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+One+More+Light+-+One+More+Light.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/One+More+Light.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/One+More+Light+-+Linkin+Park.lrc'
      },
      {
        name: "Sharp Edges",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+One+More+Light+-+Sharp+Edges.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/One+More+Light.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Sharp+Edges+-+Linkin+Park.lrc'
      },
      {
        name: "Heavy",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+One+More+Light+-+Sharp+Edges.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/One+More+Light.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Heavy+-+Linkin+Park%2CKiiara.lrc'
      },
      {
        name: "She Couldn't",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+She+Couldnt+-+She+Couldnt.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/She+Couldnt.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/She+Couldnt+-+Linkin+Park.lrc'
      },
      {
        name: "Final Masquerade",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+The+Hunting+Party+-+Final+Masquerade.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Hunting+Party.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Final+Masquerade+-+Linkin+Park.lrc'
      },
      {
        name: "Until It's Gone",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+The+Hunting+Party+-+Until+Its+Gone.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Hunting+Party.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Until+Its+Gone+-+Linkin+Park.lrc'
      },
      {
        name: "Holding Company (2011 Demo)",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+Underground+13+-+Holding+Company+(2011+Demo).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Underground+13.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Truth Inside A Lie (LPU Sessions 2013)",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+Underground+13+-+Truth+Inside+A+Lie+(LPU+Sessions+2013).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Underground+13.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Universe (2006 Demo)",
        artist: 'Linkin Park',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Linkin+Park+-+Underground+13+-+Universe+(2006+Demo).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Underground+13.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      
      {
        name: "Echo",
        artist: 'Loren',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Loren+-+Echo+-+Echo.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Echo.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Echo+-+Loren.lrc'
      },
      {
        name: "Comforting Sounds",
        artist: 'Mew',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Mew+-+Frengers-+Not+Quite+Friends+But+Not+Quite+Strangers+-+Comforting+Sounds.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Frengers+Not+Quite+Friends+But+Not+Quite+Strangers.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Comforting+Sounds+-+Mew.lrc'
      },
      {
        name: "She Came Home for Christmas",
        artist: 'Mew',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Mew+-+Frengers-+Not+Quite+Friends+But+Not+Quite+Strangers+-+She+Came+Home+for+Christmas.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Frengers+Not+Quite+Friends+But+Not+Quite+Strangers.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/She+Came+Home+for+Christmas+-+Mew.lrc'
      },
      {
        name: "Symmetry",
        artist: 'Mew',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Mew+-+Frengers-+Not+Quite+Friends+But+Not+Quite+Strangers+-+Symmetry.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Frengers+Not+Quite+Friends+But+Not+Quite+Strangers.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Symmetry+-+Mew.lrc'
      },
      {
        name: "The Light Behind Your Eyes",
        artist: 'My Chemical Romance',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/My+Chemical+Romance+-+Conventional+Weapons+-+The+Light+Behind+Your+Eyes.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Conventional+Weapons.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/The+Light+Behind+Your+Eyes+-+My+Chemical+Romance.lrc'
      },
      {
        name: "Summertime",
        artist: 'My Chemical Romance',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/My+Chemical+Romance+-+Danger+Days-+The+True+Lives+of+the+Fabulous+Killjoys+-+Summertime.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Danger+Days+The+True+Lives+of+the+Fabulous+Killjoys.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Summertime+-+My+Chemical+Romance.lrc'
      },
      {
        name: "The Kids from Yesterday",
        artist: 'My Chemical Romance',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/My+Chemical+Romance+-+Danger+Days-+The+True+Lives+of+the+Fabulous+Killjoys+-+The+Kids+from+Yesterday.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Danger+Days+The+True+Lives+of+the+Fabulous+Killjoys.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/The+Kids+from+Yesterday+-+My+Chemical+Romance.lrc'
      },
      {
        name: "Fake Your Death",
        artist: 'My Chemical Romance',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/My+Chemical+Romance+-+May+Death+Never+Stop+You+-+Fake+Your+Death.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/May+Death+Never+Stop+You.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Fake+Your+Death+-+My+Chemical+Romance.lrc'
      },
      {
        name: "Cancer",
        artist: 'My Chemical Romance',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/My+Chemical+Romance+-+The+Black+Parade+-+Cancer.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Black+Parade.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Cancer+-+My+Chemical+Romance.lrc'
      },
      {
        name: "Dead!",
        artist: 'My Chemical Romance',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/My+Chemical+Romance+-+The+Black+Parade+-+Dead!.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Black+Parade.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Dead!+-+My+Chemical+Romance.lrc'
      },
      {
        name: "Disenchanted",
        artist: 'My Chemical Romance',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/My+Chemical+Romance+-+The+Black+Parade+-+Disenchanted.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Black+Parade.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Disenchanted+-+My+Chemical+Romance.lrc'
      },
      {
        name: "I Don't Love You",
        artist: 'My Chemical Romance',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/My+Chemical+Romance+-+The+Black+Parade+-+I+Dont+Love+You.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Black+Parade.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/I+Dont+Love+You+-+My+Chemical+Romance.lrc'
      },
      {
        name: "Sleep",
        artist: 'My Chemical Romance',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/My+Chemical+Romance+-+The+Black+Parade+-+Sleep.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Black+Parade.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Sleep+-+My+Chemical+Romance.lrc'
      },
      {
        name: "Welcome to the Black Parade",
        artist: 'My Chemical Romance',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/My+Chemical+Romance+-+The+Black+Parade+-+Welcome+to+the+Black+Parade.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Black+Parade.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Welcome+to+the+Black+Parade+-+My+Chemical+Romance.lrc'
      },
      {
        name: "Don't Look Back in Anger",
        artist: 'Oasis',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Oasis+-+(Whats+The+Story)+Morning+Glory+(Remastered)+-+Dont+Look+Back+in+Anger+(Remastered).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/(Whats+The+Story)+Morning+Glory+(Remastered).png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Dont+Look+Back+in+Anger+(Remastered)+-+Oasis.lrc'
      },
      {
        name: "Wonderwall",
        artist: 'Oasis',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Oasis+-+(Whats+The+Story)+Morning+Glory+(Remastered)+-+Wonderwall+(Remastered).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/(Whats+The+Story)+Morning+Glory+(Remastered).png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Wonderwall+(Remastered)+-+Oasis.lrc'
      },
      {
        name: "Here There And Everywhere",
        artist: 'Paul McCartney',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Paul+McCartney+-+Give+My+Regards+to+Broad+Street+-+Here+There+And+Everywhere+(Remastered+1993).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Give+My+Regards+to+Broad+Street.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Here+There+And+Everywhere+(Remastered+1993)+-+Paul+McCartney.lrc'
      },
      {
        name: "Yesterday",
        artist: 'Paul McCartney',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Paul+McCartney+-+Give+My+Regards+to+Broad+Street+-+Yesterday+(Remastered+1993).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Give+My+Regards+to+Broad+Street.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Yesterday+(Remastered+1993)+-+Paul+McCartney.lrc'
      },
      {
        name: "Breathe (In the Air)",
        artist: 'Pink Floyd',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Pink+Floyd+-+The+Dark+Side+of+the+Moon+-+Breathe+(In+the+Air).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Dark+Side+of+the+Moon.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Breathe+(In+the+Air)+-+Pink+Floyd.lrc'
      },
      {
        name: "The Great Gig in the Sky",
        artist: 'Pink Floyd',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Pink+Floyd+-+The+Dark+Side+of+the+Moon+-+The+Great+Gig+in+the+Sky.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Dark+Side+of+the+Moon.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/The+Great+Gig+in+the+Sky+-+Pink+Floyd.lrc'
      },
      {
        name: "Us and Them",
        artist: 'Pink Floyd',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Pink+Floyd+-+The+Dark+Side+of+the+Moon+-+Us+and+Them.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Dark+Side+of+the+Moon.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Us+and+Them+-+Pink+Floyd.lrc'
      },
      {
        name: "Any Colour You Like",
        artist: 'Pink Floyd',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Pink+Floyd+-+The+Dark+Side+of+the+Moon+-+Any+Colour+You+Like.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Dark+Side+of+the+Moon.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "Brain Damage",
        artist: 'Pink Floyd',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Pink+Floyd+-+The+Dark+Side+of+the+Moon+-+Brain+Damage.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Dark+Side+of+the+Moon.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Brain+Damage+-+Pink+Floyd.lrc'
      },
      {
        name: "Comfortably Numb",
        artist: 'Pink Floyd',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Pink+Floyd+-+The+Wall+-+Comfortably+Numb.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Wall.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Comfortably+Numb+-+Pink+Floyd.lrc'
      },
      {
        name: "Nobody Home",
        artist: 'Pink Floyd',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Pink+Floyd+-+The+Wall+-+Nobody+Home.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Wall.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Nobody+Home+-+Pink+Floyd.lrc'
      },
      {
        name: "Somebody To Love",
        artist: 'Queen',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Queen+-+A+Day+At+the+Races+-+Somebody+To+Love.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/A+Day+At+the+Races.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Somebody+To+Love+-+Queen.lrc'
      },
      {
        name: "Teo Torriatte (Let Us Cling Together)",
        artist: 'Queen',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Queen+-+A+Day+At+the+Races+-+Teo+Torriatte+(Let+Us+Cling+Together).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/A+Day+At+the+Races.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Teo+Torriatte+(Let+Us+Cling+Together)+-+Queen.lrc'
      },
      {
        name: "The Millionaire Waltz",
        artist: 'Queen',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Queen+-+A+Day+At+the+Races+-+The+Millionaire+Waltz.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/A+Day+At+the+Races.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/The+Millionaire+Waltz+-+Queen.lrc'
      },
      {
        name: "Bohemian Rhapsody",
        artist: 'Queen',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Queen+-+A+Night+At+The+Opera+-+Bohemian+Rhapsody.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/A+Night+At+The+Opera.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Bohemian+Rhapsody+-+Queen.lrc'
      },
      {
        name: "Life Is Real (Song for Lennon)",
        artist: 'Queen',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Queen+-+Hot+Space+-+Life+Is+Real+(Song+for+Lennon).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Hot+Space.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Life+Is+Real+(Song+for+Lennon)+-+Queen.lrc'
      },
      {
        name: "Under Pressure",
        artist: 'Queen/David Bowie',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Queen-David+Bowie+-+Hot+Space+-+Under+Pressure.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Hot+Space.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Under+Pressure+-+Queen%2CDavid+Bowie.lrc'
      },
      {
        name: "なんでもないや (movie ver.)",
        artist: 'RADWIMPS',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/RADWIMPS+-+%E5%90%9B%E3%81%AE%E5%90%8D%E3%81%AF%E3%80%82+-+%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84%E3%82%84+(movie+ver.).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E5%90%9B%E3%81%AE%E5%90%8D%E3%81%AF%E3%80%82.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84%E3%82%84+(movie+ver.)+-+RADWIMPS.lrc'
      },
      {
        name: "スパークル (movie ver.)",
        artist: 'RADWIMPS',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/RADWIMPS+-+%E5%90%9B%E3%81%AE%E5%90%8D%E3%81%AF%E3%80%82+-+%E3%82%B9%E3%83%91%E3%83%BC%E3%82%AF%E3%83%AB+(movie+ver.).mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E5%90%9B%E3%81%AE%E5%90%8D%E3%81%AF%E3%80%82.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E3%82%B9%E3%83%91%E3%83%BC%E3%82%AF%E3%83%AB+(movie+ver.)+-+RADWIMPS.lrc'
      },
      {
        name: "愛にできることはまだあるかい",
        artist: 'RADWIMPS',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/RADWIMPS+-+%E5%A4%A9%E6%B0%97%E3%81%AE%E5%AD%90+-+%E6%84%9B%E3%81%AB%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E3%81%BE%E3%81%A0%E3%81%82%E3%82%8B%E3%81%8B%E3%81%84.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E5%A4%A9%E6%B0%97%E3%81%AE%E5%AD%90.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%84%9B%E3%81%AB%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E3%81%BE%E3%81%A0%E3%81%82%E3%82%8B%E3%81%8B%E3%81%84+-+RADWIMPS.lrc'
      },
      {
        name: "Creep",
        artist: 'Radiohead',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Radiohead+-+Pablo+Honey+-+Creep.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Pablo+Honey.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Creep+-+Radiohead.lrc'
      },
      {
        name: "Fake Plastic Trees",
        artist: 'Radiohead',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Radiohead+-+The+Bends+-+Fake+Plastic+Trees.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Bends.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Fake+Plastic+Trees+-+Radiohead.lrc'
      },
      {
        name: "High and Dry",
        artist: 'Radiohead',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Radiohead+-+The+Bends+-+High+and+Dry.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Bends.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/High+and+Dry+-+Radiohead.lrc'
      },
      {
        name: "Pieces",
        artist: 'Sum 41',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Sum+41+-+Chuck+-+Pieces.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Chuck.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Pieces+-+Sum+41.lrc'
      },
      {
        name: "Some Say",
        artist: 'Sum 41',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Sum+41+-+Chuck+-+Some+Say.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Chuck.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Some+Say+-+Sum+41.lrc'
      },
      {
        name: "We're All To Blame",
        artist: 'Sum 41',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Sum+41+-+Chuck+-+Were+All+To+Blame.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Chuck.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Were+All+To+Blame+-+Sum+41.lrc'
      },
      {
        name: "Crash",
        artist: 'Sum 41',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Sum+41+-+Screaming+Bloody+Murder+-+Crash.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Screaming+Bloody+Murder.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Crash+-+Sum+41.lrc'
      },
      {
        name: "What Am I To Say",
        artist: 'Sum 41',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Sum+41+-+Screaming+Bloody+Murder+-+What+Am+I+To+Say.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Screaming+Bloody+Murder.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/What+Am+I+To+Say+-+Sum+41.lrc'
      },
      {
        name: "Best Of Me",
        artist: 'Sum 41',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Sum+41+-+Underclass+Hero+-+Best+Of+Me.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Underclass+Hero.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Best+Of+Me+-+Sum+41.lrc'
      },
      {
        name: "So Long Goodbye",
        artist: 'Sum 41',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Sum+41+-+Underclass+Hero+-+So+Long+Goodbye.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Underclass+Hero.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/So+Long+Goodbye+-+Sum+41.lrc'
      },
      {
        name: "Speak Of The Devil.",
        artist: 'Sum 41',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Sum+41+-+Underclass+Hero+-+Speak+Of+The+Devil.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Underclass+Hero.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Speak+Of+The+Devil+-+Sum+41.lrc'
      },
      {
        name: "Underclass Hero",
        artist: 'Sum 41',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Sum+41+-+Underclass+Hero+-+Underclass+Hero.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Underclass+Hero.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Underclass+Hero+-+Sum+41.lrc'
      },
      {
        name: "Walking Disaster",
        artist: 'Sum 41',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Sum+41+-+Underclass+Hero+-+Walking+Disaster.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Underclass+Hero.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Walking+Disaster+-+Sum+41.lrc'
      },
      {
        name: "With Me",
        artist: 'Sum 41',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/Sum+41+-+Underclass+Hero+-+With+Me.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Underclass+Hero.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/With+Me+-+Sum+41.lrc'
      },
      {
        name: "Stuck In A Moment You Can't Get Out Of",
        artist: 'U2',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/U2+-+All+That+You+Cant+Leave+Behind+-+Stuck+In+A+Moment+You+Cant+Get+Out+Of.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/All+That+You+Cant+Leave+Behind.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Stuck+In+A+Moment+You+Cant+Get+Out+Of+-+U2.lrc'
      },
      {
        name: "Walk On",
        artist: 'U2',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/U2+-+All+That+You+Cant+Leave+Behind+-+Walk+On.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/All+That+You+Cant+Leave+Behind.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Walk+On+-+U2.lrc'
      },
      {
        name: "When I Look At The World",
        artist: 'U2',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/U2+-+All+That+You+Cant+Leave+Behind+-+When+I+Look+At+The+World.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/All+That+You+Cant+Leave+Behind.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/When+I+Look+At+The+World+-+U2.lrc'
      },
      {
        name: "Sometimes You Can't Make It On Your Own",
        artist: 'U2',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/U2+-+How+To+Dismantle+An+Atomic+Bomb+-+Sometimes+You+Cant+Make+It+On+Your+Own.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/How+To+Dismantle+An+Atomic+Bomb.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Sometimes+You+Cant+Make+It+On+Your+Own+-+U2.lrc'
      },
      {
        name: "All I Want Is You",
        artist: 'U2',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/U2+-+Rattle+And+Hum+-+All+I+Want+Is+You.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/Rattle+And+Hum.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/All+I+Want+Is+You+-+U2.lrc'
      },
      {
        name: "I Still Haven't Found What I'm Looking For",
        artist: 'U2',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/U2+-+The+Joshua+Tree+(Deluxe+Edition)+%5BRemastered%5D+-+I+Still+Havent+Found+What+Im+Looking+For.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Joshua+Tree+(Deluxe+Edition)+%5BRemastered%5D.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/I+Still+Havent+Found+What+Im+Looking+For+-+U2.lrc'
      },
      {
        name: "Running To Stand Still",
        artist: 'U2',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/U2+-+The+Joshua+Tree+(Deluxe+Edition)+%5BRemastered%5D+-+Running+To+Stand+Still.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Joshua+Tree+(Deluxe+Edition)+%5BRemastered%5D.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Running+To+Stand+Still+-+U2.lrc'
      },
      {
        name: "Where The Streets Have No Name",
        artist: 'U2',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/U2+-+The+Joshua+Tree+(Deluxe+Edition)+%5BRemastered%5D+-+Where+The+Streets+Have+No+Name.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Joshua+Tree+(Deluxe+Edition)+%5BRemastered%5D.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Where+The+Streets+Have+No+Name+-+U2.lrc'
      },
      {
        name: "With Or Without You",
        artist: 'U2',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/U2+-+The+Joshua+Tree+(Deluxe+Edition)+%5BRemastered%5D+-+With+Or+Without+You.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/The+Joshua+Tree+(Deluxe+Edition)+%5BRemastered%5D.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/With+Or+Without+You+-+U2.lrc'
      },
      {
        name: "大石碎胸口",
        artist: '万能青年旅店',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+-+%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91+-+%E5%A4%A7%E7%9F%B3%E7%A2%8E%E8%83%B8%E5%8F%A3.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%A4%A7%E7%9F%B3%E7%A2%8E%E8%83%B8%E5%8F%A3+-+%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97.lrc'
      },
      {
        name: "揪心的玩笑与漫长的白日梦",
        artist: '万能青年旅店',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+-+%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91+-+%E6%8F%AA%E5%BF%83%E7%9A%84%E7%8E%A9%E7%AC%91%E4%B8%8E%E6%BC%AB%E9%95%BF%E7%9A%84%E7%99%BD%E6%97%A5%E6%A2%A6.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%8F%AA%E5%BF%83%E7%9A%84%E7%8E%A9%E7%AC%91%E4%B8%8E%E6%BC%AB%E9%95%BF%E7%9A%84%E7%99%BD%E6%97%A5%E6%A2%A6+-+%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97.lrc'
      },
      {
        name: "杀死那个石家庄人",
        artist: '万能青年旅店',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+-+%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91+-+%E6%9D%80%E6%AD%BB%E9%82%A3%E4%B8%AA%E7%9F%B3%E5%AE%B6%E5%BA%84%E4%BA%BA.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%9D%80%E6%AD%BB%E9%82%A3%E4%B8%AA%E7%9F%B3%E5%AE%B6%E5%BA%84%E4%BA%BA+-+%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97.lrc'
      },
      {
        name: "秦皇岛",
        artist: '万能青年旅店',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+-+%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91+-+%E7%A7%A6%E7%9A%87%E5%B2%9B.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+%E5%90%8C%E5%90%8D%E4%B8%93%E8%BE%91.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E7%A7%A6%E7%9A%87%E5%B2%9B+-+%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97.lrc'
      },
      {
        name: "山雀",
        artist: '万能青年旅店',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+-+%E5%86%80%E8%A5%BF%E5%8D%97%E6%9E%97%E8%B7%AF%E8%A1%8C+-+%E5%B1%B1%E9%9B%80.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E5%86%80%E8%A5%BF%E5%8D%97%E6%9E%97%E8%B7%AF%E8%A1%8C.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%B1%B1%E9%9B%80+-+%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97.lrc'
      },
      {
        name: "郊眠寺",
        artist: '万能青年旅店',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97+-+%E5%86%80%E8%A5%BF%E5%8D%97%E6%9E%97%E8%B7%AF%E8%A1%8C+-+%E9%83%8A%E7%9C%A0%E5%AF%BA.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E5%86%80%E8%A5%BF%E5%8D%97%E6%9E%97%E8%B7%AF%E8%A1%8C.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E9%83%8A%E7%9C%A0%E5%AF%BA+-+%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97.lrc'
      },
      {
        name: "一千个世纪",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F+-+%E4%B8%80%E5%8D%83%E4%B8%AA%E4%B8%96%E7%BA%AA.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E4%B8%80%E5%8D%83%E4%B8%AA%E4%B8%96%E7%BA%AA+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "天使",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F+-+%E5%A4%A9%E4%BD%BF.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%A4%A9%E4%BD%BF+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "最重要的小事",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F+-+%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E5%B0%8F%E4%BA%8B.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E5%B0%8F%E4%BA%8B+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "米老鼠",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F+-+%E7%B1%B3%E8%80%81%E9%BC%A0.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%BA%E7%88%B1%E8%80%8C%E7%94%9F.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E7%B1%B3%E8%80%81%E9%BC%A0+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "一颗苹果",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E4%BA%BA%E7%94%9F%E6%B5%B7%E6%B5%B7+-+%E4%B8%80%E9%A2%97%E8%8B%B9%E6%9E%9C.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%BA%BA%E7%94%9F%E6%B5%B7%E6%B5%B7.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E4%B8%80%E9%A2%97%E8%8B%B9%E6%9E%9C+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "彩虹",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E4%BA%BA%E7%94%9F%E6%B5%B7%E6%B5%B7+-+%E5%BD%A9%E8%99%B9.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%BA%BA%E7%94%9F%E6%B5%B7%E6%B5%B7.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%BD%A9%E8%99%B9+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "纯真",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E4%BA%BA%E7%94%9F%E6%B5%B7%E6%B5%B7+-+%E7%BA%AF%E7%9C%9F.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%BA%BA%E7%94%9F%E6%B5%B7%E6%B5%B7.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E7%BA%AF%E7%9C%9F+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "勇敢",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E5%8B%87%E6%95%A2+-+%E5%8B%87%E6%95%A2.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E5%8B%87%E6%95%A2.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%8B%87%E6%95%A2+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "你不是真正的快乐",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E5%90%8E%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97+-+%E4%BD%A0%E4%B8%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%BF%AB%E4%B9%90.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E5%90%8E+%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E4%BD%A0%E4%B8%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%BF%AB%E4%B9%90+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "如烟",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E5%90%8E%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97+-+%E5%A6%82%E7%83%9F.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E5%90%8E+%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%A6%82%E7%83%9F+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "我心中尚未崩坏的地方",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E5%90%8E%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97+-+%E6%88%91%E5%BF%83%E4%B8%AD%E5%B0%9A%E6%9C%AA%E5%B4%A9%E5%9D%8F%E7%9A%84%E5%9C%B0%E6%96%B9.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E5%90%8E+%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%88%91%E5%BF%83%E4%B8%AD%E5%B0%9A%E6%9C%AA%E5%B4%A9%E5%9D%8F%E7%9A%84%E5%9C%B0%E6%96%B9+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "生存以上生活以下",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E5%90%8E%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97+-+%E7%94%9F%E5%AD%98%E4%BB%A5%E4%B8%8A%E7%94%9F%E6%B4%BB%E4%BB%A5%E4%B8%8B.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E5%90%8E+%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E7%94%9F%E5%AD%98%E4%BB%A5%E4%B8%8A%E7%94%9F%E6%B4%BB%E4%BB%A5%E4%B8%8B+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "突然好想你",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E5%90%8E%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97+-+%E7%AA%81%E7%84%B6%E5%A5%BD%E6%83%B3%E4%BD%A0.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E5%90%8E+%E9%9D%92%E6%98%A5%E6%9C%9F%E7%9A%84%E8%AF%97.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E7%AA%81%E7%84%B6%E5%A5%BD%E6%83%B3%E4%BD%A0+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      
      {
        name: "时光机",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E6%97%B6%E5%85%89%E6%9C%BA+-+%E6%97%B6%E5%85%89%E6%9C%BA.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E6%97%B6%E5%85%89%E6%9C%BA.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%97%B6%E5%85%89%E6%9C%BA+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "步步",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E6%AD%A5%E6%AD%A5+%E8%87%AA%E9%80%89%E4%BD%9C%E5%93%81%E8%BE%91+the+Best+of+1999-2013+-+%E6%AD%A5%E6%AD%A5.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E6%AD%A5%E6%AD%A5+%E8%87%AA%E9%80%89%E4%BD%9C%E5%93%81%E8%BE%91+the+Best+of+1999-2013.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%AD%A5%E6%AD%A5+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "温柔",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%88%B1%E6%83%85%E4%B8%87%E5%B2%81+-+%E6%B8%A9%E6%9F%94.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E7%88%B1%E6%83%85%E4%B8%87%E5%B2%81.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%B8%A9%E6%9F%94+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "知足",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%9F%A5%E8%B6%B3+%E6%9C%80%E7%9C%9F%E6%9D%B0%E4%BD%9C%E9%80%89+-+%E7%9F%A5%E8%B6%B3.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E7%9F%A5%E8%B6%B3+%E6%9C%80%E7%9C%9F%E6%9D%B0%E4%BD%9C%E9%80%89.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E7%9F%A5%E8%B6%B3+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "超人",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%A5%9E%E7%9A%84%E5%AD%A9%E5%AD%90%E9%83%BD%E5%9C%A8%E8%B7%B3%E8%88%9E+-+%E8%B6%85%E4%BA%BA.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E7%A5%9E%E7%9A%84%E5%AD%A9%E5%AD%90%E9%83%BD%E5%9C%A8%E8%B7%B3%E8%88%9E.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E8%B6%85%E4%BA%BA+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "私奔到月球",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%A6%BB%E5%BC%80%E5%9C%B0%E7%90%83%E8%A1%A8%E9%9D%A2+Jump!+-+%E7%A7%81%E5%A5%94%E5%88%B0%E6%9C%88%E7%90%83.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E7%A6%BB%E5%BC%80%E5%9C%B0%E7%90%83%E8%A1%A8%E9%9D%A2+Jump!.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E7%A7%81%E5%A5%94%E5%88%B0%E6%9C%88%E7%90%83+-+%E4%BA%94%E6%9C%88%E5%A4%A9+_+%E9%99%88%E7%BB%AE%E8%B4%9E.lrc'
      },
      {
        name: "拥抱",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%88%9B%E4%BD%9C%E4%B8%93%E8%BE%91+-+%E6%8B%A5%E6%8A%B1.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%88%9B%E4%BD%9C%E4%B8%93%E8%BE%91.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%8B%A5%E6%8A%B1+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "爱情的模样",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%88%9B%E4%BD%9C%E4%B8%93%E8%BE%91+-+%E7%88%B1%E6%83%85%E7%9A%84%E6%A8%A1%E6%A0%B7.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%88%9B%E4%BD%9C%E4%B8%93%E8%BE%91.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E7%88%B1%E6%83%85%E7%9A%84%E6%A8%A1%E6%A0%B7+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "干杯",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%EF%BC%88%E6%98%8E%E6%97%A5%E7%89%88%EF%BC%89+-+%E5%B9%B2%E6%9D%AF.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F+(%E6%98%8E%E6%97%A5%E7%89%88).png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%B9%B2%E6%9D%AF+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "我不愿 让你一个人",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%EF%BC%88%E6%98%8E%E6%97%A5%E7%89%88%EF%BC%89+-+%E6%88%91%E4%B8%8D%E6%84%BF+%E8%AE%A9%E4%BD%A0%E4%B8%80%E4%B8%AA%E4%BA%BA.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F+(%E6%98%8E%E6%97%A5%E7%89%88).png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%88%91%E4%B8%8D%E6%84%BF+%E8%AE%A9%E4%BD%A0%E4%B8%80%E4%B8%AA%E4%BA%BA+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "星空",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%EF%BC%88%E6%98%8E%E6%97%A5%E7%89%88%EF%BC%89+-+%E6%98%9F%E7%A9%BA.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F+(%E6%98%8E%E6%97%A5%E7%89%88).png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%98%9F%E7%A9%BA+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "有些事现在不做 一辈子都不会做了",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%EF%BC%88%E6%98%8E%E6%97%A5%E7%89%88%EF%BC%89+-+%E6%9C%89%E4%BA%9B%E4%BA%8B%E7%8E%B0%E5%9C%A8%E4%B8%8D%E5%81%9A+%E4%B8%80%E8%BE%88%E5%AD%90%E9%83%BD%E4%B8%8D%E4%BC%9A%E5%81%9A%E4%BA%86.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F+(%E6%98%8E%E6%97%A5%E7%89%88).png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%9C%89%E4%BA%9B%E4%BA%8B%E7%8E%B0%E5%9C%A8%E4%B8%8D%E5%81%9A+%E4%B8%80%E8%BE%88%E5%AD%90%E9%83%BD%E4%B8%8D%E4%BC%9A%E5%81%9A%E4%BA%86+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "第二人生",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%EF%BC%88%E6%98%8E%E6%97%A5%E7%89%88%EF%BC%89+-+%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F+(%E6%98%8E%E6%97%A5%E7%89%88).png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "诺亚方舟",
        artist: '五月天',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F%EF%BC%88%E6%98%8E%E6%97%A5%E7%89%88%EF%BC%89+-+%E8%AF%BA%E4%BA%9A%E6%96%B9%E8%88%9F.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E7%AC%AC%E4%BA%8C%E4%BA%BA%E7%94%9F+(%E6%98%8E%E6%97%A5%E7%89%88).png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E8%AF%BA%E4%BA%9A%E6%96%B9%E8%88%9F+-+%E4%BA%94%E6%9C%88%E5%A4%A9.lrc'
      },
      {
        name: "温柔 #MaydayBlue20th",
        artist: '五月天/孙燕姿',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E5%AD%99%E7%87%95%E5%A7%BF+-+%E6%B8%A9%E6%9F%94+%23MaydayBlue20th+-+%E6%B8%A9%E6%9F%94+%23MaydayBlue20th.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E6%B8%A9%E6%9F%94+%23MaydayBlue20th.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%B8%A9%E6%9F%94+20th+-+%E4%BA%94%E6%9C%88%E5%A4%A9+_+%E5%AD%99%E7%87%95%E5%A7%BF.lrc'
      },
      {
        name: "只有音乐才是我的解药",
        artist: '反光镜',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E5%8F%8D%E5%85%89%E9%95%9C+-+%E9%87%8A%E4%BD%A0+-+%E5%8F%AA%E6%9C%89%E9%9F%B3%E4%B9%90%E6%89%8D%E6%98%AF%E6%88%91%E7%9A%84%E8%A7%A3%E8%8D%AF.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E9%87%8A%E4%BD%A0.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%8F%AA%E6%9C%89%E9%9F%B3%E4%B9%90%E6%89%8D%E6%98%AF%E6%88%91%E7%9A%84%E8%A7%A3%E8%8D%AF+-+%E5%8F%8D%E5%85%89%E9%95%9C.lrc'
      },
      {
        name: "Intro",
        artist: '草东没有派对',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9+-+%E4%B8%91%E5%A5%B4%E5%84%BF+-+Intro.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/Instrumental.lrc'
      },
      {
        name: "丑",
        artist: '草东没有派对',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9+-+%E4%B8%91%E5%A5%B4%E5%84%BF+-+%E4%B8%91.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E4%B8%91+-+%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "烂泥",
        artist: '草东没有派对',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9+-+%E4%B8%91%E5%A5%B4%E5%84%BF+-+%E7%83%82%E6%B3%A5.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E7%83%82%E6%B3%A5+-+%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "勇敢的人",
        artist: '草东没有派对',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9+-+%E4%B8%91%E5%A5%B4%E5%84%BF+-+%E5%8B%87%E6%95%A2%E7%9A%84%E4%BA%BA.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%8B%87%E6%95%A2%E7%9A%84%E4%BA%BA+-+%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "大风吹",
        artist: '草东没有派对',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9+-+%E4%B8%91%E5%A5%B4%E5%84%BF+-+%E5%A4%A7%E9%A3%8E%E5%90%B9.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%A4%A7%E9%A3%8E%E5%90%B9+-+%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "鬼",
        artist: '草东没有派对',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9+-+%E4%B8%91%E5%A5%B4%E5%84%BF+-+%E9%AC%BC.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E9%AC%BC+-+%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "在",
        artist: '草东没有派对',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9+-+%E4%B8%91%E5%A5%B4%E5%84%BF+-+%E5%9C%A8.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%9C%A8+-+%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "山海",
        artist: '草东没有派对',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9+-+%E4%B8%91%E5%A5%B4%E5%84%BF+-+%E5%B1%B1%E6%B5%B7.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%B1%B1%E6%B5%B7+-+%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "我们",
        artist: '草东没有派对',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9+-+%E4%B8%91%E5%A5%B4%E5%84%BF+-+%E6%88%91%E4%BB%AC.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%88%91%E4%BB%AC+-+%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "情歌",
        artist: '草东没有派对',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9+-+%E4%B8%91%E5%A5%B4%E5%84%BF+-+%E6%83%85%E6%AD%8C.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E4%B8%91%E5%A5%B4%E5%84%BF.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E6%83%85%E6%AD%8C+-+%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      },
      {
        name: "如常",
        artist: '草东没有派对',
        url: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/audio/%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9+-+%E5%A6%82%E5%B8%B8+-+%E5%A6%82%E5%B8%B8.mp3',
        cover: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/cover/%E5%A6%82%E5%B8%B8.png',
        lrc: 'https://greatbastard-blog-1309491218.cos.ap-chengdu.myqcloud.com/music/lrc/%E5%A6%82%E5%B8%B8+-+%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9.lrc'
      }
      
    ]
});