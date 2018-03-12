var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'IoT',
    condition: true,
    anyArray: [1, 2, 3]
  });
});

router.get('/oku', function (req, res, next) {
  fs.readFile(__dirname + "/yazilan.txt", "utf8", function (error, data) {
    console.log(data);
    res.send(data);
  });
});

router.get('/oku/ac', function (req, res, next) {
  var id = req.body.id;
  console.log("LOG:"+req.param);
    fs.writeFile(__dirname + "/yazilan.txt", '{"color":[255,0,0]}', function (err) {
      if (err) {
        return console.log(err);
        res.send("acilamadi" + err);
      }
      res.send("acildi");
    });
});
router.get('/oku/kapat', function (req, res, next) {
  var id = req.body.id;
  console.log("LOG:"+req.param);
    fs.writeFile(__dirname + "/yazilan.txt", '{"color":[0,255,0]}', function (err) {
      if (err) {
        return console.log(err);
        res.send("kapatilmadi" + err);
      }
      res.send("kapandi");
    });
});
module.exports = router;
