import dt = module("datatri");

// Definitions
var collect_data: (elem: Node) => dt.Attribute[];
var process: (elements: NodeList) => any[];

// Collect the data attributes of a Node
collect_data = function (elem) {
  var data_collector = new dt.AttributeCollector()
    , attributes = elem.attributes
    , i = 0
    , len = attributes.length;

  console.log(data_collector);
  for(; i < len; i++) {
    if( attributes[i].name.match(/^data-/i) ) {
      data_collector.push({
        name: attributes[i].name.replace(/^data-/i, ''),
        value: attributes[i].value
      });
    }
  }
  return data_collector.collect();
};

// Process a NodeList for data attributes
process = function (elements) {
  var data = []
    , i = 0
    , len = elements.length;
  for(; i < len; i++) {
    data.push(collect_data(elements[i]));
  }
  return data;
};

console.log(process(document.querySelectorAll('.thing')));