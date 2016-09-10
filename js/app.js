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

     var feed2 = new Instafeed({
        clientId: 'f1882f59a5804d76b0db171ec9385669',
        target: 'instafeed2',
        get: 'user',
        userId: 19131470,
        accessToken: '19131470.f1882f5.f5d8c78650ed4f0c87283a1f1ab42083',
        useHttp: true,
        links: true,
        limit: 3,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="press-col press-col-1"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });

     var feed3 = new Instafeed({
        clientId: 'f80418f21f6748978752c2387b89b752',
        target: 'instafeed3',
        get: 'user',
        userId: 303137234,
        accessToken: '303137234.f80418f.9aeeb0817e584061bbad42870c7fb8dd',
        useHttp: true,
        links: true,
        limit: 3,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="press-col press-col-1"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });

    feed.run();
    feed2.run();
    feed3.run();