/**!
 * preloading.js 1.0.0 (c) 2015 Yi wei - MIT license
 * @desc 只是一个运用在｀移动端｀的，实现｀图片｀、｀JavaScript｀、｀CSS｀预加载的库
 */
;(function (w) {
    /**
     * @desc the obj preloading Expose to user
     */
    var preloading = {
        /**
         * preloading css file
         *
         * @method css
         * @param files ['xxx.css', 'xxx.css', ....]
         * @param callback when preloaded files invoke the callback
         */
        css: function (files, callback) {
            if (!detect(files)) return;
            for (var i= 0, len=files.length; i<len; i++) {
                createLink && createLink(files[i], callback);
            }
        },

        /**
         * preloading js file
         *
         * @method css
         * @param files ['xxx.js', 'xxx.js', ....]
         * @param callback when preloaded files invoke the callback
         */
        js: function (files, callback) {
            if (!detect(files)) return;
            for (var i= 0, len=files.length; i<len; i++) {
                createScript && createScript(files[i], callback);
            }
        },

        /**
         * preloading img file
         *
         * @method css
         * @param files ['xxx.jpg', 'xxx.png', ....]
         * @param callback when preloaded files invoke the callback
         */
        img: function (files, callback) {
            if (!detect(files)) return;
            for (var i= 0, len=files.length; i<len; i++) {
                var img = new Image();
                img.src = files[i];
                img.onload = function () {
                    callback && callback();
                };
            }
        },

        /**
         * Achieve pages loading
         *
         * @desc loading
         */
        loading: function (files, process, callback) {
            if (!detect(files)) return;
            var imgArr = [], // all need load imgs array
                loadImageCompleted = 0; //当前已经加载的图片数
            var j = 0;
            for (var i= 0, len=files.length; i<len; i++) {
                imgArr.push(new Image());
                imgArr[j].src = files[i];
                imgArr[j].onload = function () {
                    var len = imgArr.length;
                    loadImageCompleted ++;
                    process && process(len, loadImageCompleted);
                    if (len === loadImageCompleted) {
                        callback && callback();
                    }
                };
                j++;
            }
        }
    };

    /**
     * detect files is effective
     *
     * @param files
     */
    function detect(files) {
        return files && Array.isArray(files);
    }

    /**
     * create script tag
     *
     * @method createScript
     */
    function createScript(path, callback) {
        var script = document.createElement('script');
        script.src = path;
        document.body.appendChild(script);
        script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                callback && callback();
            }
        };
    }

    /**
     * create link tag
     *
     * @method createLink
     */
    function createLink(path, callback) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = path;
        link.type = 'text/css';
        document.head.appendChild(link);
        link.onload = link.onreadystatechange = function () {
            if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                callback && callback();
            }
        };
    }


    if (typeof define === 'function' && define.amd) {
        // AMD define
        define([], function () {
            return preloading;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        // Node CommonJS
        module.exports = preloading;
    } else {
        // browser global
        w.preloading = preloading;
    }
})(window);