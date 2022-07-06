! function(e, o) {
	"object" == typeof exports && "object" == typeof module ? 
        module.exports = o() 
    	: 
    	"function" == typeof define && define.amd ? 
        	define([], o) 
    		: 
    		"object" == typeof exports ? 
        		exports["es6-import"] = o() 
    			: 
    			e["es6-import"] = o()
}(
    self, 
    (
        () => (
            document.body.appendChild(
                function() {
                    let e = document.createElement("div");
                    return e.innerHTML = ["hell", "a", "cc"].join("~"), e
                }()
            ), 
            {}
        )
    )
);