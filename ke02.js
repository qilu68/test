var map = new BMap.Map("map");
map.enableScrollWheelZoom(true);

// 获取并设置当前位置
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function (r) {
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var myPoint = r.point;
        map.centerAndZoom(myPoint, 15);

        var markerA = new BMap.Marker(myPoint, { enableDragging: true });
        var pointB = new BMap.Point(myPoint.lng + 0.005, myPoint.lat + 0.005);
        var markerB = new BMap.Marker(pointB, { enableDragging: true });

        map.addOverlay(markerA);
        map.addOverlay(markerB);

        function checkCollision() {
            var posA = markerA.getPosition();
            var posB = markerB.getPosition();
            var distance = map.getDistance(posA, posB);
            if (distance < 10) {
                alert("A 和 B 相遇了，程序结束！");
                markerA.disableDragging();
                markerB.disableDragging();
            }
        }

        markerA.addEventListener("dragend", checkCollision);
        markerB.addEventListener("dragend", checkCollision);
    } else {
        alert("获取当前位置失败");
    }
});
