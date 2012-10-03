define(["require", "exports"], function(require, exports) {
    var AttributeCollector = (function () {
        function AttributeCollector() {
            this.collection = [];
        }
        AttributeCollector.prototype.collect = function () {
            return this.collection.slice(0, this.collection.length);
        };
        AttributeCollector.prototype.push = function (attribute) {
            return this.collection.push(attribute);
        };
        return AttributeCollector;
    })();
    exports.AttributeCollector = AttributeCollector;    
})

