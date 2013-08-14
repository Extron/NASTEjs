/**
 * A node factory parses a line of code and determines what node to convert it to.
 * 
 * @returns {NodeFactory} Returns a new NodeFactory
 */
function NodeFactory()
{
    /**
     * Converts a line of code into an AST node (which may have children).
     * 
     * @param {String} line - The line to convert into a node.
     * @returns {ASTNode} Returns the converted node.
     */
    this.ParseLine = function(line) { return null; }
}

var NodeBuilder = new NodeFactory();