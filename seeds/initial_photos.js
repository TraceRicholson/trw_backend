

exports.seed = function(knex) {
  return knex('photos').del()
    .then(function () {
      return (
      knex('photos').insert([
        { title : 'Minneapolis', category: 'urban', description: 'A view of the Minneapolis skyline during sunset.', metadata: 'metadata test', image_url: 'https://uce55d0c7450918e6705e08a2814.dl.dropboxusercontent.com/cd/0/inline/BSs1QoaC4SEVDTIFK7-jzzJmkbqWSZg1DpygiKuMIrAFNlH3f8aMm6e7aDkdF22xLCTUTitklxAJCecpozGi2ID-kzsxjFEm3Ck_EUfFOVShpZ11mVncs6kEFDtWOMjIKbRc9ud-ZrEOUak-3Acv9KCW/file#'},
        { title : 'Vast', category: 'nature', description: 'A top-down view of a section of frozen river.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/dnb5jabv90fb30g/Richolson%2C%20Trace.%20VAST.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},
        { title : 'Learning To Love The World And Myself', category: 'nature', description: 'A sunset in Eau Claire, WI, as seen through some golden leaves.', metadata: 'metadata test', image_url: 'https://www.dropbox.com/s/0hnjbkpo15vol7k/Richolson%2C%20Trace.%20LEARNING%20TO%20LOVE%20THE%20WORLD%2C%20MYSELF%2C%20AND%20HIM%20series%2C%201%20of5%20%28SERENITY%29.%20archival%20pigment%20ink%20on%20paper%2C%206.6%20x%209.9%20in%2C%202016.jpg?raw=1'},

      ])
    )});
};