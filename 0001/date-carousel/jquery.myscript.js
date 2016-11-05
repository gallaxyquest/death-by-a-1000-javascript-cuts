$(function() {
  var showcase, linkObj, loc, params, paramsDomain, allLinks, domainsObj, wrap;

// my configuration function - relaod on orientationchange to refresh the item position
  window.addEventListener("orientationchange", function() {
    window.location.reload();
  }, false);

// my configuration function -  domain perameters passed via query string eg ?domain=qw
domainsObj = {
  qw: 'https://qw.somewebsite.com',
  as: 'https://www.somewebsite.com',
  we: 'https://we.somewebsite.com',
  zx: 'https://www.somewebsite.zx',
  aq: 'https://www.somewebsite.aq',
  re: 'https://www.somewebsite.co.re',
  tr: 'https://tr.somewebsite.com',
  yt: 'https://yt.somewebsite.com'
}

// my  configuration function - date object
  linkObj = {
    day1: {
      date: '2016,12,01 00:00:00',
      id: 1
    },
    day2: {
      date: '2016,12,02 00:00:00',
      id: 2
    },
    day3: {
      date: '2016,12,03 00:00:00',
      id: 3
    },
    day4: {
      date: '2016,12,04 00:00:00',
      id: 4
    },
    day5: {
      date: '2016,12,05 00:00:00',
      id: 5
    },
    day6: {
      date: '2016,12,06 00:00:00',
      id: 6
    },
    day7: {
      date: '2016,12,07 00:00:00',
      id: 7
    },
    day8: {
      date: '2016,12,08 00:00:00',
      id: 8
    },
    day9: {
      date: '2016,12,09 00:00:00',
      id: 9
    },
    day10: {
      date: '2016,12,10 00:00:00',
      id: 10
    },
    day11: {
      date: '2016,12,11 00:00:00',
      id: 11
    },
    day12: {
      date: '2016,12,12 00:00:00',
      id: 12
    },
    day13: {
      date: '2016,12,13 00:00:00',
      id: 13
    },
    day14: {
      date: '2016,12,14 00:00:00',
      id: 14
    },
    day15: {
      date: '2016,12,15 00:00:00',
      id: 15
    },
    day16: {
      date: '2016,12,16 00:00:00',
      id: 16
    },
    day17: {
      date: '2016,12,17 00:00:00',
      id: 17
    },
    day18: {
      date: '2016,12,18 00:00:00',
      id: 18
    },
    day19: {
      date: '2016,12,19 00:00:00',
      id: 19
    },
    day20: {
      date: '2016,12,20 00:00:00',
      id: 20
    },
    day21: {
      date: '2016,12,21 00:00:00',
      id: 21
    },
    day22: {
      date: '2016,12,22 00:00:00',
      id: 22
    },
    day23: {
      date: '2016,12,23 00:00:00',
      id: 23
    },
    day24: {
      date: '2016,12,24 00:00:00',
      id: 24
    }
  }

  // my  configuration function - get url and domain params and replace the html link Token
  function getUris(data) {
    loc = window.location.toString();
    params = loc.split('=')[1];
    allLinks =  $('#showcase').find('a');

    for (key in data) {
      var currentDomains, currentDomainKey, currentDomainValue;
      currentDomains = data;
      currentDomainKey = key;
      currentDomainValue = data[key];

      if (key === params) {
         $(allLinks).each(function(index, element) {
           $(this).attr('href', $(this).attr('href').replace('[urlToken]', currentDomainValue));
         });
       }
     }
   }
  getUris(domainsObj)

  // my  configuration function - get the dates and carousel items then sort by date and rearrange the dom in accorance
  function getSetDates (data, showcase) {
    var nowDate, expireDate, startDate, data, dataDate, today, carouselHolder, allLinks;
    nowDate = new Date();
    today = nowDate.getFullYear() + ',' + ('0' + (nowDate.getMonth()+1)).slice(-2) + ',' + ('0' + nowDate.getDate()).slice(-2) + ' 00:00:00';
    allLinks =  $('#showcase').find('a');

    for (key in data) {
      var dataDate, dataIdToString, itemId, carouselItem;
      dataDate = data[key].date;
      dataIdToString = data[key].id.toString();
      carouselItem = $('#'+ data[key].id);
      itemId = $(carouselItem).attr('id');

      function nextItem (x) {
        var par,nextItemID, nextItemComp, array1;
        par = $(carouselItem).parent();
        nextItemID = parseInt(x) + 1;
        nextItemIDToString =  nextItemID.toString()
        nextItemComp = $('p.cloud9-item');
        array1 = new Array();


        $(nextItemComp).each(function(index, element) {
          var selfId, xToNum, links;
          selfId = $(element).attr('id');
          xToNum = parseInt(x);
          links = $(element).find('a');
            if (selfId > xToNum) {
              $(links).contents().unwrap();
              array1.push(element);
            }
        })
        $(carouselItem).after(array1);
      }

      if (dataDate === today) {
        if (itemId === dataIdToString) {
          $(carouselItem).prependTo($(carouselItem).parent());
          nextItem(itemId);
        }
      }
    }

  }
  getSetDates(linkObj)

  showcase = $("#showcase");

  // original carousel constructor
  showcase.Cloud9Carousel( {
    yPos: 42,
    yRadius: 48,
    mirrorOptions: {
      gap: 12,
      height: 0.2
    },
    // from original plugin - not used
    // buttonLeft: $(".nav > .left"),
    // buttonRight: $(".nav > .right"),
    autoPlay: false,
    bringToFront: true,
    farScale: 0.05,
    // from original plugin - not used
    //onRendered: showcaseUpdated,
    onLoaded: function () {
      showcase.css ('visibility', 'visible')
      showcase.css ('display', 'none')
      showcase.fadeIn (2000)
    }
  })

  // from original plugin - not used
  // function showcaseUpdated (showcase) {
  //   // nothing is required here at the moment
  // }


// from original plugin - not used
// Simulate physical button click effect
//   $('.nav > button').click(function (e) {
//     var b = $(e.target).addClass('down');
//     setTimeout( function () {
//       b.removeClass('down')
//     }, 80)
//   })
//

// from original plugin - not used
//   $(document).keydown(function(e) {
//     // More codes: http://www.javascripter.net/faq/keycodes.htm
//     //
//     switch( e.keyCode ) {
//       /* left arrow */
//       case 37:
//         $('.nav > .left').click()
//         break
//
//       /* right arrow */
//       case 39:
//         $('.nav > .right').click()
//     }
//   } )
 })
