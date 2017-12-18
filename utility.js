(function () {

    function isObject(value) {
        return typeof value === 'object';
    }

    function isArray(value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    }


    function clone(value) {

        if ((!isObject(value)) || (value === null)) {
            return value;
        }

        if (!isArray(value)) {
            let copied = {};
            for (let key in value) {
                copied[key] = value[key];
            }
            return copied;
        }
    }


    function cloneDeep(value, response) {

        let copied;

        if (!isObject(value) || (value === null)) {
            return copied = value;
        }

        if (isArray(value)) {

            for (let index in value) {
                copied[index] = clone(value);
            }

        } else {

        }


    }


})();