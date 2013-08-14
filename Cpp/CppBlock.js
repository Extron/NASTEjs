/**
 * A block node simply represents a series of expressions separated by deliminators.
 * 
 * @param {String} delim - The deliminator to separate by.
 * @returns {CppBlock} Returns a new C++ block node.
 */
function CppBlock(delim)
{
    this.Deliminator = delim;
    
    /**
     * Adds a child of the node.
     * 
     * @param {ASTNode} child - The child to set.
     */
    this.AddChild = function(child)
    {
        this.Children[this.Children.length] = child;
    }
    
    /**
     * Takes a line whose highest level node corresponds to this node and generates
     * a set of children from it.
     * 
     * @param {String} line - The string of code to parse into childen.
     */
    this.Parse = function(line)
    {
        var lines = line.split(this.Deliminator);
        
        for (var childLine in lines)
            this.AddChild(NodeBuilder.ParseLine(childLine));
    }
    
    /**
     * Converts this node into a string of code.
     * 
     * @returns {String} Returns a string that represents the node.
     */
    this.DeParse = function()
    {
        var line = "";
        
        for (var child in this.Children)
        {
            line += child.DeParse() + this.Deliminator + "\n";
        }
    }
}

CppBlock.prototype = new ASTNode();