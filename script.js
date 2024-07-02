function showDetails(memoryId) {
    const memories = {
        memory1: {
            date: '2023-07-22',
            title: '',
            description: 'Day One hangout, ngl im super nikakabahan that time cause Ive never been in Bulacan before and also im going by myself lang, Its just me and my google map :P worth it naman since napatunayan ko na hindi ka poser LOL. Kidding aside that moment is super genuine lang, No awkward stage for us super love it #NoAwkwardStage #TinadhanangMedyoDinaya #MaasimSinceDayOne .',
            media: [
                { type: 'image', url: 'images/1.jpg' },
               
            ]
        },
        memory2: {
            date: '2023-08-15',
            title: '',
            description: 'Quick get together lang ewan, Actually medyo stressed ako that day kasi dami ko hinahabol na requirements for my school sakto nanjan ka edi goe!, ANW we look so young in here and me namumutla ewan ko ba anemic yata ko that time o ganyan lang talaga magreact katawan ko pagkasama kita before mewhewhe :D.',
            media: [
                { type: 'image', url: 'images/2.jpg' },
               
            ]
        },
        memory3: {
            date: '2023-08-21',
            title: '',
            description: 'Movie Date AAAAHHHHH >.< First date???? as manliligaw OWOWOWOW, That time gustong gusto ko na hawakan kamay mo pero Im super na co-conscious baka sapakin mo ko sa cinehan at masira ang mood so ended up wholesome moments lang still great, Im soper happy that time and also Cookie, we had our family picture. #CrochetParents #WholesomemomentsWithYourMaasimSuitor',
            media: [
                { type: 'image', url: 'images/3.jpg' },
              
            ]
        },
        memory4: {
            date: '2023-08-29',
            title: ' ',
            description: 'Pangalawang appearance ni gray-shirt HEEHHEHE I remember nagcutting class ako sa online ko jan that time pero di ko sinabi sayu :P samantalang ikaw nago-online class with me HEHEHE #WhatAreYouWillingToDo #MagkasalungatNaMundo #GagawinLahatParaSayo #OutfitRepeater.',
            media: [
                { type: 'image', url: 'images/4.jpg' },
                
            ]
        },
        memory5: {
            date: '2023-09-02',
            title: ' ',
            description: 'QUICK2 Date, kahit maulan ipipilit ko makita kalang aking ini-irog. First time seeing you in short-shorts halos ikamatay ko ata, Eto ata dahilan ng wild thoughts ko eh :P jk. Super naging comfy nako sayo that time dahil sa shorts char lang pi. #ShockedKaNalang',
            media: [
                { type: 'image', url: 'images/5.jpg' },
              
            ]
        },
        memory6: {
            date: '2023-09-15',
            title: ' ',
            description: 'First time after school hangout, I mean same tayo owian pero hindi tayo same ng inowian AWEE :< pero gayunpaman ikaw huli ko uuwian HELL YE. #FroYoDate #KaTayoSaBus #TagalNgBusSaSMFairviewBwakanangShet',
            media: [
                { type: 'image', url: 'images/6.jpg' },
                
            ]
        },
        memory7: {
            date: '2023-09-22',
            title: ' ',
            description: 'Pinakita ko na kung sino ako dito sorry taeng-tae na kasi talaga ko ewan ko sa nakain ko sa school pasensya na talaga mahal alam ko naghintay ka rin sakin ng matagal dito ngunit, subalit, napakabait mo pa rin sakin here. #TheWomanWhoNeverFailToImpressHerMan #SalamatSaTissueMoNakataeAko',
            media: [
                { type: 'image', url: 'images/7.jpg' },
                /*{ type: 'video', url: 'images/.mp4' }*/
            ]
        },
        memory8: {
            date: '2023-09-30',
            title: '',
            description: 'Our Horny Era, Oo damay ka kasi kiniss mo ko di mo na siguro matiis ang pisngi ko matamis :* , ANW super landi natin that time and muntik na rin tayo makita ng kuya mo mwehehe aminin mo na kasi naglalaway ka na sakin niyan :P #NakawNaHalik #ElleNagFirstMoveKinissAkoSaCheeks',
            media: [
                { type: 'image', url: 'images/8.jpg' },
                
            ]
        },
        memory9: {
            date: '2023-10-15',
            title: ' ',
            description: 'Nag Anuhan #NoComment #BestFeeling #GinayumaAtUmubra',
            media: [
                { type: 'image', url: 'images/9.jpg' },
               
            ]
        },
        memory10: {
            date: '2023-10-26',
            title: ' ',
            description: 'HAHAHA Pinagsunod ba naman, Kaso iniyakan ako #NapindotSiSadnessAtAnxiety ',
            media: [
                { type: 'image', url: 'images/10.jpg' },
                
            ]
        },
        memory11: {
            date: '2023-10-29',
            title: ' ',
            description: 'SAKIT',
            media: [
                { type: 'image', url: 'images/11.jpg' },
                
            ]
        },
        memory12: {
            date: '2023-11-03',
            title: ' ',
            description: 'Making Memories.',
            media: [
                { type: 'image', url: 'images/12.jpg' },
             
            ]
        },
        memory13: {
            date: '2023-11-05',
            title: '',
            description: 'Akala ko huling ano na to kaya sinulit ko, Mixed Emotions tipong habang in the moment ka bigla aagawin ni sadness yung controller bwisit na yan pinagtiktok pa pagtapos pa-iyakin. #ILoveYouForever',
            media: [
                { type: 'image', url: 'images/13.jpg' },
                
            ]
        },
        memory14: {
            date: '2023-11-07',
            title: ' ',
            description: 'UP Finally, Quick Fun Fact: I promised myself before na if ever I fall inlove again Ill bring her to UP Sunken and watch the sunset. Also super cute mo that moment, love that<3 #LoveYouSoMuch',
            media: [
                { type: 'image', url: 'images/14.jpg' },
               
            ]
        },
        memory15: {
            date: '2023-11-09',
            title: ' ',
            description: 'I think this is the best thing weve done since alam natin na mawawalay tayo sa isat isa sa matagal na panahon #LungkotKoNanamanTuloy #IkawKasiEh.',
            media: [
                { type: 'image', url: 'images/15.jpg' },
               
            ]
        },
        memory16: {
            date: '2023-11-12',
            title: ' ',
            description: 'RainingInSavano Date hehe, Superwholesome Day #BlessedSunday #GodGaveMeYou.',
            media: [
                { type: 'image', url: 'images/16.jpg' },

            ]
        },
        memory17: {
            date: '2023-11-13',
            title: ' ',
            description: 'Anlakas din ng trip mo eh noh, matapos mo hipuin itlog ko magtatampo ka sakin. #HinimasSaLabas',
            media: [
                { type: 'image', url: 'images/17.jpg' },
                
            ]
        },
        memory18: {
            date: '2023-11-14',
            title: '',
            description: 'Trippings lang sa Terraces. #IlangArawNalangMasakitNaMgaMataKo',
            media: [
                { type: 'image', url: 'images/18.jpg' },

            ]
        },
        memory19: {
            date: '2023-11-15',
            title: ' ',
            description: 'Buong araw na to isa lang tinandaan ko, Walang iiyak ano man ang mangyari. Tamo pati condom di ko nabili kaka-pigil ko sa luha ko. #SeeYouAgain #TindahanNiALingNena',
            media: [
                { type: 'image', url: 'images/19.jpg' },
               
            ]
        },
        memory20: {
            date: '07-03-24',
            title: ' ',
            description: 'Hii Elle, I know how much you love receiving gifts pero your boyfriend is broke mwehehe, I hope you consider this as a gift :D ill bawi nalang sayo soon I love you so much. ANW if you ever wonder why I sometimes looks busy while were on call here it is ig not much pero I hope you like it grrr. #IllDoBetterNextTime #NoCakeToday #HappyLastTeenYear #OneYearOlderNalangAkoHEHE',
            media: [
                { type: 'image', url: 'images/asim.jpg' },
                
            ],
            audioUrl: 'images/panalangin.mp3' // input ng music baka makalimutan ko annaman eh

        },
        // END DADAG
    };

   

    const memory = memories[memoryId];
    if (memory) {
        const modalContent = document.getElementById('memory-details-content');
        let mediaElements = '';

        memory.media.forEach(media => {
            if (media.type === 'image' || media.type === 'gif') {
                mediaElements += `<img src="${media.url}" alt="${memory.title}">`;
            } else if (media.type === 'video') {
                mediaElements += `<video controls autoplay muted>
                                    <source src="${media.url}" type="video/mp4">
                                    Your browser does not support the video tag.
                                  </video>`;
            }
        });

        let audioElement = '';
        if (memory.audioUrl) {
            audioElement = `<audio controls autoplay>
                                <source src="${memory.audioUrl}" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>`;
        }

        modalContent.innerHTML = `
            <h2>${memory.title}</h2>
            ${mediaElements}
            <p><strong>Date:</strong> ${memory.date}</p>
            <p>${memory.description}</p>
            ${audioElement}
        `;

        const modal = document.getElementById('memory-details');
        modal.style.display = 'block';
    }
}

function closeDetails() {
    const modal = document.getElementById('memory-details');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('memory-details');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// SOUNDTRIP di na tuloy kasi pangit pero jan kalang baka magmit kita someday

const audioPlayer = document.getElementById('audio-player');


function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}


const playPauseButton = document.getElementById('play-pause-button');
playPauseButton.addEventListener('click', togglePlay);


