function init() {
  var $ = go.GraphObject.make;
  myDiagram = $(go.Diagram, "myDiagramDiv",{"undoManager.isEnabled": true});
  myDiagram.nodeTemplate =
    $(go.Node, "Auto",
      $(go.Shape, { fill: "white" }),
      $(
        go.Panel, 
        "Table", 
        new go.Binding("itemArray", "people"),
        $(go.RowColumnDefinition, { row: 0, background: "lightgray" }),
        $(go.RowColumnDefinition, { row: 1, separatorStroke: "black" }),
        // the table headers -- remains even if itemArray is empty
        $(
          go.Panel, 
          "TableRow",
          new go.Binding("itemArray", "columnDefinitions"),
          {
            itemTemplate:  // bound to a column definition object
              $(
                go.Panel,
                new go.Binding("column"), 
                $(go.TextBlock, new go.Binding("text"))
              )
          }
        ),
        { // the rows for the people
          itemTemplate:  // bound to a person/row data object
            $(go.Panel, "TableRow",
              // which in turn consists of a collection of cell objects,
              // held by the "columns" property in an Array
              new go.Binding("itemArray", "columns"),
              // you could also have other Bindings here for the whole row
              {
                itemTemplate:  // bound to a cell object
                  $(
                    go.Panel,  // each of which as "attr" and "text" properties
                    { stretch: go.GraphObject.Fill, alignment: go.Spot.TopLeft },
                    new go.Binding("column", "attr", function (a, elt) {  // ELT is this bound item/cell Panel
                      // elt.data will be the cell object
                      // elt.panel.data will be the person/row data object
                      // elt.part.data will be the node data object
                      // "columnDefinitions" is on the node data object, so:
                      var cd = findColumnDefinitionForName(elt.part.data, a);
                      if (cd !== null) return cd.column;
                    }),
                    // you could also have other Bindings here for this cell
                    $(
                      go.TextBlock, 
                      new go.Binding("text").makeTwoWay()
                    )
                  )
              }
            )
        }
      )
    );


  myDiagram.model =
    $(go.GraphLinksModel,
      {
        copiesArrays: true,
        copiesArrayObjects: true,
        nodeDataArray: [
          {
            columnDefinitions: [
              // each column definition needs to specify the column used
              { attr: "name", text: "Name", column: 0 },
              { attr: "phone", text: "Phone #", column: 1 },
              { attr: "office", text: "Office", column: 2 }
            ],
            people: [  // the table of people
              // each row is a person with an Array of Objects associating a column name with a text value
              { columns: [{ attr: "name", text: "Alice" }, { attr: "phone", text: "2345" }, { attr: "office", text: "C4-E18" }] },
              { columns: [{ attr: "name", text: "Bob" }, { attr: "phone", text: "9876" }, { attr: "office", text: "E1-B34" }] },
              { columns: [{ attr: "name", text: "Carol" }, { attr: "phone", text: "1111" }, { attr: "office", text: "C4-E23" }] },
              { columns: [{ attr: "name", text: "Ted" }, { attr: "phone", text: "2222" }, { attr: "office", text: "C4-E197" }] }
            ]
          },
        ],
      }
    );
}
// Add or remove a person row from the selected node's table of people.
// add or remove a column from the selected node's table of people
function findColumnDefinitionForName(nodedata, attrname) {
  var columns = nodedata.columnDefinitions;
  for (var i = 0; i < columns.length; i++) {
    if (columns[i].attr === attrname) return columns[i];
  }
  return null;
}
function findColumnDefinitionForColumn(nodedata, idx) {
  var columns = nodedata.columnDefinitions;Q
  for (var i = 0; i < columns.length; i++) {
    if (columns[i].column === idx) return columns[i];
  }
  return null;
}
if (window.init) { init(); }