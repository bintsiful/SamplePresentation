var ViewModel = function() {
    this.users = ko.observableArray([
        { name: ko.observable("Bess"), role: "js" },
        { name: ko.observable("Ted"), role: "vde" }
    ]);
};

ko.applyBindings(new ViewModel());