$(document).ready(function () {
    setInterval(function () {

        var seconds = new Date().getSeconds();
        var sdegree = seconds * 6;
        var srotate = "rotate(" + sdegree + "deg)";

        var minutes = new Date().getMinutes();
        var mdegree = minutes * 6;
        var mrotate = "rotate(" + mdegree + "deg)";

        var hours = new Date().getMinutes();
        var hdegree = hours * 30 + minutes/2;
        var hrotate = "rotate(" + hdegree + "deg)";

        $("#sec").css({"transform": srotate});
        $("#min").css({"transform": mrotate});
        $("#hour").css({"transform": hrotate});
    }, 1000);
});
