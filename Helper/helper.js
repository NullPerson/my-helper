(function() {
	var Helper = (function() {
		var obj = function Helper() {
			if (!this instanceof Helper) {
				return new Helper();
			}

			obj.prototype.formatMemery = function(m, n, t) {
				/*
				*  t = 0时，t = 4;
				*  t = undefined时, t = 4;
				*  typeof(t) != 'number'时, t = 4;
				*/
				var s = 0;
				var t = (t && typeof(t) == 'number') ? (t < 4 && t > 0 ? t : 4) : 4;				
				if (m >= 1024 && n<t) {
					var v = m / 1024;
					n++;
					s = this.formatMemery(v, n, t);
					
				} else {
					s = (m == 0 ? m : m.toFixed(2));
					switch (n) {
						case 0:
							s = s + 'B';
							break;
						case 1:
							s = s + 'KB';
							break;
						case 2:
							s = s + 'MB';
							break;
						case 3:
							s = s + 'GB';
							break;
					}
				}
				return s;

			}
		}
		return obj;
	}());
	window['Helper'] = Helper;
}());