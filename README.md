# preloading.js
A Javascript(AMD, node)module realization picture && js && css preloaded


#API
	1）loading method achieve the page load performance
	preloding.loading(files[], callback);
	
	2) img method achieve the pictures dynamic loading
	preloding.img(files[], callback);
	
	3)js method achieve the js file dynamic loading
	preloding.js(files[], callback);
	
	4)css method achieve the css file dynamic loading
	preloding.css(files[], callback);

#Example Usage

	preloading.loading([
		'http://img1.imgtn.bdimg.com/it/u=4126969809,3313870532&fm=21&gp=0.jpg',
		'http://img4.imgtn.bdimg.com/it/u=1000093241,3965212071&fm=21&gp=0.jpg'
		], function () {
			// to do something
		});
		
	preloading.img([
		'http://img1.imgtn.bdimg.com/it/u=4126969809,3313870532&fm=21&gp=0.jpg',
		'http://img4.imgtn.bdimg.com/it/u=1000093241,3965212071&fm=21&gp=0.jpg'
		], function () {
			// to do something
		});
		
	preloading.js([
		'js/demo1.js',
		'js/demo2.js'
		], function () {
			// to do something
		});
		
	preloading.css([
		'css/index1.css',
		'css/index2.css'
		], function () {
			// to do something
		});
		
#Last
if you have some prombles when use,you can see the demo files!!!