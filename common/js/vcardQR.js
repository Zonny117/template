$(window).load(function () {

    function generateQRCode() {

        var startNode = "BEGIN:VCARD" + "\n" + "VERSION:3.0" + "\n";
        var endNode = "END:VCARD";
        startNode += "N:" + $("h2.qr").text() + "\n";
        startNode += "FN:" + $("h2.qr").text() + "\n";
        // startNode += "EMAIL:" + email.value.trim() + "\n";
        startNode += "ORG:" + $(".mMod0.qr").text() + "\n";
        // startNode += "TITLE:" + title.value.trim() + "\n";
        startNode += "NOTE:" + $(".txt.qr").text().trim() + "\n";
        startNode += "URL:" + window.location.href + "\n";
        startNode += "TEL;TYPE=CELL:" + $(".tel.qr").text() + "\n";
        startNode += "ADR;TYPE=WORK:" + $(".ti.qr").text() + "\n";

        startNode += endNode;


        var option = {
            // render method: 'canvas', 'image' or 'div'
            render: 'image',

            // version range somewhere in 1 .. 40
            minVersion: 6,
            maxVersion: 40,

            // error correction level: 'L', 'M', 'Q' or 'H'
            ecLevel: 'H',

            // offset in pixel if drawn onto existing canvas
            left: 0,
            top: 0,

            // size in pixel
            size: 300,

            // code color or image element
            fill: '#000',

            // background color or image element, null for transparent background
            background: "#fff",

            // content
            text: startNode,

            // corner radius relative to module width: 0.0 .. 0.5
            radius: 0,

            // quiet zone in modules
            quiet: 3,

            // modes
            // 0: normal
            // 1: label strip
            // 2: label box
            // 3: image strip
            // 4: image box
            mode: 0,

            mSize: 0.09,
            mPosX: 0.95,
            mPosY: 0.96,

            label: 'no label',
            fontname: 'sans',
            fontcolor: '#000',

        }
        $("#qr").qrcode(option);

    }

    $(".btn_QR").click(function () {
        generateQRCode()

    });

});