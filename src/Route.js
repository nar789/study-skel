/* Desgined by leejunghun */
;(function() {
	module.exports = function(_g) {

		const app = _g.app;

		function route() {
			app.get('/', function(req, res) {
				res.render('index.html', {});
			});

			// entry point
			app.listen(3325, function() {
			  preLoad();
			  console.log('Server listen on *:3325');
			});
		}

		function preLoad() {
		}

		return {
			route:route,
		};
	}

})();



