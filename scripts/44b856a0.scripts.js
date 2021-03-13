"use strict";
angular.module("firePokerApp", ["firebase", "ngCookies"]).config(["$routeProvider", function (a) {
    a.when("/", {
        templateUrl: "views/games/index.html",
        controller: "MainCtrl"
    }).when("/games/new/:gid", {
        templateUrl: "views/games/new.html",
        controller: "MainCtrl"
    }).when("/games/:gid", {
        templateUrl: "views/games/view.html",
        controller: "MainCtrl"
    }).when("/games/join/:gid", {
        templateUrl: "views/games/join.html",
        controller: "MainCtrl"
    }).otherwise({redirectTo: "/"})
}]), angular.module("firePokerApp").controller("MainCtrl", ["$rootScope", "$scope", "$cookieStore", "$location", "$routeParams", "$timeout", "angularFire", function (a, b, c, d, e, f, g) {
    var h = "https://firepoker-75089.firebaseio.com", i = new Firebase(h), j = function () {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }, k = function () {
        return j() + j() + "-" + j() + "-" + j() + "-" + j() + "-" + j() + j() + j()
    };
    if (b.fp = c.get("fp"), b.fp || (b.fp = {}), !b.fp.user || !b.fp.user.id) {
        var l = k();
        b.fp.user = {id: l}, c.put("fp", b.fp)
    }
    if (!b.fp.gid) {
        var m = k();
        b.fp.gid = m, c.put("fp", b.fp)
    }
    a.isLandingPage = function () {
        return "/" !== d.path()
    }, b.redirectToCreateNewGame = function () {
        ("/games/new" === d.path() || "/games/new/" === d.path()) && (b.fp.gid = k(), d.path("/games/new/" + b.fp.gid), d.replace())
    }, b.redirectToSetFullnameIfEmpty = function () {
        e.gid && d.path() === "/games/" + e.gid && !b.fp.user.fullname && (d.path("/games/join/" + e.gid), d.replace())
    }, b.redirectToGameIfFullnameAlreadySet = function () {
        e.gid && d.path() === "/games/join/" + e.gid && b.fp.user.fullname && d.path("/games/" + e.gid).replace()
    }, b.loadGame = function () {
        if (e.gid && d.path() === "/games/" + e.gid) {
            g(i.child("/games/" + e.gid), b, "game").then(function () {
                b.game.owner && b.game.owner.id && b.game.owner.id === b.fp.user.id ? b.isOwner = !0 : b.isOwner = !1
            }), i.child("/games/" + e.gid + "/participants/" + b.fp.user.id).set(b.fp.user);
            var a = i.child("/games/" + e.gid + "/participants/" + b.fp.user.id + "/online"),
                c = i.child("/.info/connected");
            c.on("value", function (b) {
                b.val() === !0 && (a.onDisconnect().set(Firebase.ServerValue.TIMESTAMP), a.set(!0))
            })
        }
    }, b.createGame = function () {
        var a = [], f = angular.copy(b.newGame);
        f.stories && angular.forEach(f.stories.split("\n"), function (b) {
            var c = {title: b, status: "queue"};
            a.push(c)
        }), f.stories = a, f.status = "active", f.created = (new Date).getTime(), f.owner = b.fp.user, f.participants = !1, f.estimate = !1, b.setNewGame(f), c.put("fp", b.fp), d.path("/games/" + e.gid), d.replace()
    }, b.setNewGame = function (a) {
        i.child("/games/" + e.gid).set(a)
    }, b.createStory = function (a) {
        if ("structured" === a) {
            var c = "As a/an " + b.newStory.asA + " I would like to " + b.newStory.iWouldLikeTo + " so that " + b.newStory.soThat;
            b.newStory.title = c, delete b.newStory.asA, delete b.newStory.iWouldLikeTo, delete b.newStory.soThat
        }
        b.showCardDeck = !0, b.newStory.results = !1, b.newStory.points = 0, b.newStory.status = "queue", b.newStory.startedAt = !1, b.newStory.endedAt = !1, b.game.stories || (b.game.stories = []), b.game.stories.push(b.newStory), b.newStory = null, b.game.estimate || b.setStory(b.game.stories.length - 1)
    }, b.setStory = function (a) {
        b.cancelRound(), b.game.estimate = b.game.stories[a], b.game.estimate.status = "active", b.game.estimate.id = a, b.game.estimate.startedAt = (new Date).getTime(), b.game.estimate.endedAt = !1, b.showCardDeck = !0
    }, b.deleteStory = function (a) {
        b.game.stories.splice(a, 1)
    }, b.estimate = function (a) {
        b.game.estimate.results || (b.game.estimate.results = []), b.game.estimate.results.push({
            points: a,
            user: b.fp.user
        })
    }, b.setShowCheckmarks = function () {
        b.game.estimate && b.game.estimate.results && angular.forEach(b.game.estimate.results, function (a) {
            a && a.user && a.user.id && a.user.id === b.fp.user.id && (b.game.participants[a.user.id].hasVoted = !0)
        })
    }, b.setFullname = function () {
        c.put("fp", b.fp), d.path("/games/" + e.gid), d.replace()
    }, b.getResultsAverage = function () {
        var a = [];
        return angular.forEach(b.game.estimate.results, function (b) {
            a.push(b.points)
        }), a.sort(function (b, c) {
            return a.filter(function (a) {
                return a === b
            }).length - a.filter(function (a) {
                return a === c
            }).length
        }).pop()
    }, b.totalOfOnlineParticipants = function () {
        var a = 0;
        return b.game && b.game.participants && angular.forEach(b.game.participants, function (b) {
            b.online === !0 && a++
        }), a
    }, b.acceptRound = function () {
        b.game.estimate.points = b.newEstimate.points, b.game.estimate.endedAt = (new Date).getTime(), b.game.estimate.status = "closed", b.game.stories[b.game.estimate.id] = angular.copy(b.game.estimate), b.game.estimate = !1, angular.forEach(b.game.participants, function (a) {
            a.hasVoted = !1
        })
    }, b.playAgain = function () {
        b.game.estimate.results = [], b.game.estimate.status = "active", angular.forEach(b.game.participants, function (a) {
            a.hasVoted = !1
        })
    }, b.cancelRound = function () {
        if (b.game.estimate) {
            var a = b.game.estimate.id;
            b.game.stories[a].startedAt = !1, b.game.stories[a].endedAt = !1, b.game.stories[a].status = "queue", b.game.estimate = !1, angular.forEach(b.game.participants, function (a) {
                a.hasVoted = !1
            })
        }
    }, b.revealCards = function () {
        b.game.estimate.status = "reveal"
    }, b.decks = [[0, "½", 1, 2, 3, 5, 8, 13, 20, 40, 100, "?"], [0, "½", 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "?"], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "?"], [0, 4, 8, 16, 24, 32, 40, 60, 80, '?'], [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, '?'], ["XXS", "XS", "S", "M", "L", "XL", "XXL", "?"]], b.newGame = {deck: 0}, b.showCardDeck = !0, b.showSelectEstimate = !1, b.disablePlayAgainAndRevealButtons = !1, b.showCards = !1, b.setShowCardDeck = function () {
        b.showCardDeck = !0, b.game.estimate && b.game.estimate.results && angular.forEach(b.game.estimate.results, function (a) {
            a && a.user && a.user.id && a.user.id === b.fp.user.id && (b.showCardDeck = !1)
        })
    }, b.setShowSelectEstimate = function () {
        b.showSelectEstimate = !1, b.game.estimate && b.game.owner && b.game.owner.id === b.fp.user.id && (b.showSelectEstimate = !0)
    }, b.setNewEstimate = function () {
        b.newEstimate = {points: b.getResultsAverage()}
    }, b.setDisablePlayAgainAndRevealButtons = function () {
        b.game.estimate.results && 0 !== b.game.estimate.results.length ? b.disablePlayAgainAndRevealButtons = !1 : b.disablePlayAgainAndRevealButtons = !0
    }, b.setShowCards = function () {
        b.showCards = !1, "reveal" === b.game.estimate.status ? b.showCards = !0 : b.game.estimate && b.game.estimate.results && b.game.estimate.results.length && b.game.estimate.results.length >= b.totalOfOnlineParticipants() && (b.showCards = !0)
    }, b.setUnestimatedStoryCount = function () {
        b.unestimatedStoriesCount = 0, angular.forEach(b.game.stories, function (a) {
            "queue" === a.status && b.unestimatedStoriesCount++
        })
    }, b.logout = function () {
        c.remove("fp"), d.path("/"), d.replace()
    }, b.redirectToCreateNewGame(), b.redirectToSetFullnameIfEmpty(), b.redirectToGameIfFullnameAlreadySet(), b.loadGame(), b.$watch("game", function (a) {
        a && (b.setShowCardDeck(), b.setShowSelectEstimate(), b.setShowCheckmarks(), b.setNewEstimate(), b.setDisablePlayAgainAndRevealButtons(), b.setShowCards(), b.setUnestimatedStoryCount())
    })
}]), angular.module("firePokerApp").directive("contenteditable", function () {
    return {
        require: "ngModel", restrict: "A", link: function (a, b, c, d) {
            function e() {
                d.$setViewValue(b.html())
            }

            d.$render = function () {
                b.html(d.$viewValue || "")
            }, b.bind("blur keyup change", function () {
                a.$apply(e)
            })
        }
    }
});
