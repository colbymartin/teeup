module.exports = {
    name: 'BidController',
    func: function ($scope, BidService) {
        let input = document.getElementById('locationSearch');
        let options = {
            types: ['establishment']
        };
        let autocomplete = new google.maps.places.Autocomplete(input, options);
        
        autocomplete.addListener('place_changed', function () {
            $scope.location = autocomplete.getPlace();
            // $scope.location = {
            //     lat: autocomplete.getPlace().location.geometry.location.lat(),
            //     long: autocomplete.getPlace().location.geometry.location.long(),
            // }
        });

        $scope.bid_amount = '';
        $scope.star_select = '';
        $scope.start_time = '';
        $scope.end_time = '';
        $scope.selected_day = '';
        $scope.miles = '';
        $scope.location = '';
        $scope.golfer_number = '';
        $scope.submit = function () {
            let bid = {
                amount: $scope.bid_amount,
                stars: $scope.star_select,
                start_time: $scope.start_time,
                end_time: $scope.end_time,
                day: $scope.selected_day,
                miles: $scope.miles,
                location: $scope.location,
                golfers: $scope.golfer_number,
            }
            console.log(bid);
            // BidService.submitBid($scope.bid_amount);
        }
        // $scope.result = BidService.getCourse(); 
    }
}