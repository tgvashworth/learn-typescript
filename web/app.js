define(["require", "exports", "datatri"], function(require, exports, __dt__) {
    var dt = __dt__;

    var collect_data;
    var process;
    collect_data = function (elem) {
        var data_collector = new dt.AttributeCollector();
        var attributes = elem.attributes;
        var i = 0;
        var len = attributes.length;

        console.log(data_collector);
        for(; i < len; i++) {
            if(attributes[i].name.match(/^data-/i)) {
                data_collector.push({
                    name: attributes[i].name.replace(/^data-/i, ''),
                    value: attributes[i].value
                });
            }
        }
        return data_collector.collect();
    };
    process = function (elements) {
        var data = [];
        var i = 0;
        var len = elements.length;

        for(; i < len; i++) {
            data.push(collect_data(elements[i]));
        }
        return data;
    };
    console.log(process(document.querySelectorAll('.thing')));
})

