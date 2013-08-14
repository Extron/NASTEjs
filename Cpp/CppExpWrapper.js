/**
 * An expression wrapper is a node that wraps a sub node within a block bounded
 * by opening and closing brackets.
 * 
 * @param {type} open - The opening bracket.
 * @param {type} close - The closing bracket.
 * @param {type} child - The child node of the wrapper.
 * @returns {CppExpWrapper} - Returns a new wrapper node.
 */
function CppExpWrapper(open, close, child)
{
    this.Open = open;
    this.Close = close;
    
    if (arguments.length == 3)
        this.Children = [ child ];
    
    /**
     * Sets the child of the node.
     * 
     * @param {ASTNode} child - The child to set.
     */
    this.SetChild = function(child)
    {
        this.Children[0] = child;
    }
    
    /**
     * Takes a line whose highest level node corresponds to this node and generates
     * a set of children from it.
     * 
     * @param {String} line - The string of code to parse into childen.
     */
    this.Parse = function(line)
    {
        if (line.indexOf(this.Open) != 0 || line.indexOf(this.Close) != (line.length - this.Close.length))
            return;
        
        var subLine = line.substring(this.Open.length, (line.length - this.Close.length));
        
        if (subLine != "")
            this.Children = [NodeBuilder.ParseLine(subLine)];
    }
    
    /**
     * Converts this node into a string of code.
     * 
     * @returns {String} Returns a string that represents the node.
     */
    this.DeParse = function()
    {
        return this.Open + this.Children[0].DeParse() + this.Close;
    }
}

CppExpWrapper.prototype = new ASTNode();