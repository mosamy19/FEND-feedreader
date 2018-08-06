$(function() {
    /* RSS Feeds Tests*/
    describe('RSS Feeds', function() {
//         Checking if allFeeds object is defined and it's length is greater than 0.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

//         Checking if each feed in allFeed object has a URL and it isn't empty.
        it('has a URL defined and that the URL is not empty.', function() {
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        })

//         Checking if each feed in allFeed object has a name and it isn't empty.
        it('has a name defined and that the name is not empty.', function() {
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        })

    });


    /* Menu Tests */
    describe('The menu', function() {
//         Checking if the menu element is hidden when the page loads.
        it('ensures the menu element is hidden by default.', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
//         Check if menu toggle between open state and close state on click 
         it('ensures the menu display when clicked and does it hide when clicked again.', function() {
             $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBeTruthy();
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
         })

    });
    /* Initial Content Tests */
    describe('Initial Entries', function() {
//       Ensures when the loadFeed function is called and completes its work
//       Check if there is at least a single .entry element within the .feed container.
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('loadFeed is called and completes its work', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    })

    /* New Feed Selection Tests */
    describe('New Feed Selection', function() {
//       Check when the user select a new feed from the menu, the content of the page changes.
        var oldContent, newContent;
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldContent = $('.feed').text()
                loadFeed(1, function(){
                    newContent = $('.feed').text();
                    done();
                });
            });
        });
        it('ensures when a new feed is loaded by the loadFeed.', function(done) {
            expect(oldContent).not.toBe(newContent);
            done();
        });
    })
}());
