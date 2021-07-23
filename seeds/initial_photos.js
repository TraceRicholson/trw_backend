

exports.seed = function(knex) {
  return knex('photos').del()
    .then(function () {
      return (
      knex('photos').insert([
        //URBAN
        { title : 'Minneapolis', category: 'urban', description: 'A view of the Minneapolis skyline during sunset.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/isooru5dx4rkyqy/DJI_0022.jpg?raw=1'},
        { title : 'Learning To Love The World And Myself', category: 'urban', description: 'A sunset in Eau Claire, WI, as seen through some golden leaves.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/0hnjbkpo15vol7k/Richolson%2C%20Trace.%20LEARNING%20TO%20LOVE%20THE%20WORLD%2C%20MYSELF%2C%20AND%20HIM%20series%2C%201%20of5%20%28SERENITY%29.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},
        { title : 'Learning To Love The World And Myself', category: 'urban', description: 'A sunset in Eau Claire, WI, as seen through some golden leaves.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/0hnjbkpo15vol7k/Richolson%2C%20Trace.%20LEARNING%20TO%20LOVE%20THE%20WORLD%2C%20MYSELF%2C%20AND%20HIM%20series%2C%201%20of5%20%28SERENITY%29.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},
        { title : 'Learning To Love The World And Myself', category: 'urban', description: 'A sunset in Eau Claire, WI, as seen through some golden leaves.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/0hnjbkpo15vol7k/Richolson%2C%20Trace.%20LEARNING%20TO%20LOVE%20THE%20WORLD%2C%20MYSELF%2C%20AND%20HIM%20series%2C%201%20of5%20%28SERENITY%29.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},
        { title : 'Learning To Love The World And Myself', category: 'urban', description: 'A sunset in Eau Claire, WI, as seen through some golden leaves.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/0hnjbkpo15vol7k/Richolson%2C%20Trace.%20LEARNING%20TO%20LOVE%20THE%20WORLD%2C%20MYSELF%2C%20AND%20HIM%20series%2C%201%20of5%20%28SERENITY%29.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},
        { title : 'Learning To Love The World And Myself', category: 'urban', description: 'A sunset in Eau Claire, WI, as seen through some golden leaves.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/0hnjbkpo15vol7k/Richolson%2C%20Trace.%20LEARNING%20TO%20LOVE%20THE%20WORLD%2C%20MYSELF%2C%20AND%20HIM%20series%2C%201%20of5%20%28SERENITY%29.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},

        //NATURE
        { title : 'Vast', category: 'nature', description: 'A top-down view of a section of frozen river.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/dnb5jabv90fb30g/Richolson%2C%20Trace.%20VAST.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},
        { title : 'Learning To Love The World And Myself', category: 'nature', description: 'A sunset in Eau Claire, WI, as seen through some golden leaves.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/0hnjbkpo15vol7k/Richolson%2C%20Trace.%20LEARNING%20TO%20LOVE%20THE%20WORLD%2C%20MYSELF%2C%20AND%20HIM%20series%2C%201%20of5%20%28SERENITY%29.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},
        { title : 'Learning To Love The World And Myself', category: 'nature', description: 'A sunset in Eau Claire, WI, as seen through some golden leaves.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/0hnjbkpo15vol7k/Richolson%2C%20Trace.%20LEARNING%20TO%20LOVE%20THE%20WORLD%2C%20MYSELF%2C%20AND%20HIM%20series%2C%201%20of5%20%28SERENITY%29.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},
        { title : 'Learning To Love The World And Myself', category: 'nature', description: 'A sunset in Eau Claire, WI, as seen through some golden leaves.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/0hnjbkpo15vol7k/Richolson%2C%20Trace.%20LEARNING%20TO%20LOVE%20THE%20WORLD%2C%20MYSELF%2C%20AND%20HIM%20series%2C%201%20of5%20%28SERENITY%29.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},
        { title : 'Learning To Love The World And Myself', category: 'nature', description: 'A sunset in Eau Claire, WI, as seen through some golden leaves.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/0hnjbkpo15vol7k/Richolson%2C%20Trace.%20LEARNING%20TO%20LOVE%20THE%20WORLD%2C%20MYSELF%2C%20AND%20HIM%20series%2C%201%20of5%20%28SERENITY%29.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},
        { title : 'Learning To Love The World And Myself', category: 'nature', description: 'A sunset in Eau Claire, WI, as seen through some golden leaves.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/0hnjbkpo15vol7k/Richolson%2C%20Trace.%20LEARNING%20TO%20LOVE%20THE%20WORLD%2C%20MYSELF%2C%20AND%20HIM%20series%2C%201%20of5%20%28SERENITY%29.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},

        //LIVE
        { title : 'Halestorm.1', category: 'live', description: 'Lzzy Hale of Halestorm holds up her guitar after performing a song.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/v0s1ymg71auvklr/Live%20Here-20.jpg?raw=1'},
        { title : 'WeAreHarlot.1', category: 'live', description: 'We Are Harlot\'s drummer stands after performing a set.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/r1jgv7h45z90mwx/Live%20Here-2.jpg?raw=1'},
        { title : 'Halestorm.2', category: 'live', description: 'Halestorm\'s guitarist plays during a set.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/q3wnl6b1k03q0hi/Live%20Here-3.jpg?raw=1'},
        { title : 'Halestorm.3', category: 'live', description: 'Lzzy Hale of Halestorm points to an audience member during a song.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/8vr2dls2jiicbh1/Live%20Here-6.jpg?raw=1'},
        { title : 'Halestorm.4', category: 'live', description: 'Lzzy Hale of Halestorm plays and sings during a song.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/7u6n0ilx9kg9cqx/Live%20Here-15.jpg?raw=1'},
        { title : 'Halestorm.5', category: 'live', description: 'A guitarist from Halestorm sings forcefully to the audience.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/fll4n173tx3lm28/Live%20Here-23.jpg?raw=1'},

        //WEDDINGS

      ])
    )});
};