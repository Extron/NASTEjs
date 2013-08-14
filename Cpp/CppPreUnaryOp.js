function CppPreUnaryOp(opChar, child)
{
    this.OpChar = opChar;
    
    if (arguments.length == 2)
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
        if (line.indexOf(this.OpChar) != 0)
            return;
        
        var subLine = line.substring(this.OpChar.length);
        
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
        return this.OpChar + this.Children[0].DeParse();
    }
}

CppPreUnaryOp.prototype = new ASTNode();