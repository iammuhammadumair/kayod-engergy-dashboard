var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ICECAP' });
  // in .net: return View("Index", title);
});

/* GET about page */
router.get('/about', (req, res) => {
  res.render('about', { title: "About ICECAP" })
})

/* GET contact page */
router.get('/contact', (req, res) => {
  res.render('contact', { title: "Contact ICECAP" })
})

/* GET dashboard page */
router.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: "Today's Energy" })
})

/* GET electricity page */
router.get('/electricity', (req, res) => {
  res.render('electricity', { title: "Electricity" })
})

/* GET naturalgas page */
router.get('/naturalgas', (req, res) => {
  res.render('naturalgas', { title: "Natural Gas" })
})

/* GET greenhouse page */
router.get('/greenhouse', (req, res) => {
  res.render('greenhouse', { title: "Greenhouse" })
})

/* GET reports page */
router.get('/reports', (req, res) => {
  res.render('reports', { title: "Reports" })
})


/* GET settings page */
router.get('/settings', (req, res) => {
  res.render('settings', { title: "Settings" })
})

module.exports = router;
