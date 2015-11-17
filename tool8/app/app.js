/**
 * Sudent Success Toolbox - Tool 2
 * The objective of this tool app, is to help prospective students think about the amount 
 * of time they spend on different activities during a typical week and how much study 
 * they might be able to realistically undertake in their ‘free time’ whilst balancing 
 * other life, work and family commitments. 
 * 
 * @author Paul Schweppe
 */

$ = require('jquery');

var angular = require('angular');


var sstTool8App = angular.module('sstTool8App', [
    require('angular-ui-bootstrap'),
    require('angular-route'),
    require('angular-sanitize'),
    require('angular-animate'),
    require('angular-aria'),
    , 'ngAudio', // Play audio files
    , 'rzModule' // slider files
]);

require('./data');
require('./filters');
require('./directives');
require('./services');
require('./controllers');

/*Route Options*/
sstTool8App.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'app/views/templates/home.html',
                controller: 'defaultController'
            })
            .when('/before-we-start/', {
                templateUrl: 'app/views/templates/before-we-start.html',
                controller: 'defaultController'
            })
            .when('/before-we-start-response-no-orientation/', {
                templateUrl: 'app/views/templates/before-we-start-common-response-video.html',
                controller: 'defaultController'
            })
            /*
             alternative here...
             .when('/before-we-start-response-lots-of-orientation/', {
             templateUrl: 'app/views/templates/before-we-start-common-response-text.html',
             controller: 'defaultController'
             })
             */
            .when('/before-we-start-response-some-orientation/', {
                templateUrl: 'app/views/templates/before-we-start-common-response-video.html',
                controller: 'defaultController'
            })
            .when('/before-we-start-response-lots-of-orientation/', {
                templateUrl: 'app/views/templates/before-we-start-common-response-video.html',
                controller: 'defaultController'
            })
            .when('/characteristics-of-flexible-learners/', {
                templateUrl: 'app/views/templates/characteristics-of-flexible-learners.html',
                controller: 'defaultController'
            })
            .when('/different-options/', {
                templateUrl: 'app/views/templates/different-options.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation.html',
                controller: 'defaultController'
            })
            // reduce anxiety section start
            .when('/elements-of-an-online-orientation/reduce-anxiety/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/reduce-anxiety.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/reduce-anxiety/video1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/reduce-anxiety/video1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/reduce-anxiety/video2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/reduce-anxiety/video2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/reduce-anxiety/text1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/reduce-anxiety/text1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/reduce-anxiety/text2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/reduce-anxiety/text2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/reduce-anxiety/activity1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/reduce-anxiety/activity1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/reduce-anxiety/activity2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/reduce-anxiety/activity2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/reduce-anxiety/online-orientation-summary/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/reduce-anxiety/online-orientation-summary.html',
                controller: 'defaultController'
            })
            // reduce anxiety section stop
            // set expectations section start
            .when('/elements-of-an-online-orientation/set-expectations/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/set-expectations.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/set-expectations/video1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/set-expectations/video1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/set-expectations/video2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/set-expectations/video2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/set-expectations/text1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/set-expectations/text1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/set-expectations/text2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/set-expectations/text2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/set-expectations/open-educational-resources1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/set-expectations/open-educational-resources1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/set-expectations/open-educational-resources2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/set-expectations/open-educational-resources2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/set-expectations/open-educational-resources3/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/set-expectations/open-educational-resources3.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/set-expectations/activity1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/set-expectations/activity1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/set-expectations/online-orientation-summary/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/set-expectations/online-orientation-summary.html',
                controller: 'defaultController'
            })
            // set expectations section stop
            // positive role model section start
            .when('/elements-of-an-online-orientation/positive-role-model/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/positive-role-model.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/positive-role-model/video1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/positive-role-model/video1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/positive-role-model/video2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/positive-role-model/video2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/positive-role-model/text1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/positive-role-model/text1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/positive-role-model/text2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/positive-role-model/text2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/positive-role-model/website/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/positive-role-model/website.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/positive-role-model/activity1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/positive-role-model/activity1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/positive-role-model/activity2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/positive-role-model/activity2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/positive-role-model/online-orientation-summary/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/positive-role-model/online-orientation-summary.html',
                controller: 'defaultController'
            })
            // positive role model section stop
            // socialising section start
            .when('/elements-of-an-online-orientation/socialising/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/socialising.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/socialising/video1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/socialising/video1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/socialising/text1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/socialising/text1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/socialising/social-media/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/socialising/social-media.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/socialising/activity1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/socialising/activity1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/socialising/activity2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/socialising/activity2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/socialising/activity3/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/socialising/activity3.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/socialising/online-orientation-summary/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/socialising/online-orientation-summary.html',
                controller: 'defaultController'
            })
            // socialising section stop
            .when('/elements-of-an-online-orientation/campus-tour/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/campus-tour.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/study-skills/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/study-skills.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/study-skills/video1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/study-skills/video1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/study-skills/video2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/study-skills/video2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/study-skills/text1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/study-skills/text1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/study-skills/text2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/study-skills/text2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/study-skills/activity1/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/study-skills/activity1.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/study-skills/activity2/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/study-skills/activity2.html',
                controller: 'defaultController'
            })
            .when('/elements-of-an-online-orientation/study-skills/online-orientation-summary/', {
                templateUrl: 'app/views/templates/elements-of-an-online-orientation/study-skills/online-orientation-summary.html',
                controller: 'defaultController'
            })
            .when('/online-orientation-summary/', {
                templateUrl: 'app/views/templates/online-orientation-summary.html',
                controller: 'defaultController'
            })
            .when('/review-your-online-orientation-plan/', {
                templateUrl: 'app/views/templates/review-your-online-orientation-plan.html',
                controller: 'defaultController'
            })

            .when('/resources/', {
                templateUrl: 'app/views/templates/resources.html',
                controller: 'defaultController'
            })
            //Rate
            .when('/rate/', {
                templateUrl: 'app/views/templates/rate.html',
                controller: 'defaultController'
            });
});