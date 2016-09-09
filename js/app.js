    //Set up instafeed
    var feed = new Instafeed({
        clientId: 'd6e92fcb1f2041f498f6f93e85710f97',
        target: 'instafeed',
        get: 'user',
        userId: 293614721,
        accessToken: '293614721.d6e92fc.eda1b31439dd450d91b1253921a21906',
        useHttp: true,
        links: true,
        limit: 3,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="press-col press-col-1"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();