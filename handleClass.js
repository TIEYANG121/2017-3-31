var handleClass = (function() {

    function removeClass(dom, str) {
        var arr = dom.className.split(" ");
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === str) {
                arr.splice(i, 1);

            }
        }
        dom.className = arr.join(" ");
    }

    function addClass(dom, str) {
        var newClassname = "";
        if (dom.className) {
            var cname = dom.className;
            newClassname = cname + " " + str;
        } else {
            newClassname = str;
        }
        dom.className = newClassname;
    }

    function siblings(dom) {
        var newArr = [];
        var parent = dom.parentNode;
        var children = parent.children;
        for (var i = 0; i < children.length; i++) {
            if (children[i] !== dom) {
                newArr.push(children[i])
            }
        }
        return newArr;
    }

    return {
        addClass: addClass,
        removeClass: removeClass,
        siblings: siblings
    }

})()
