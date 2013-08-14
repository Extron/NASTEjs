/**
 * A C++ binary operator node contains an operator and two child nodes.
 * 
 * @param {String} opChar - The string representation of the binary operator.
 * @param {ASTNode} left - The left child node of the operation.
 * @param {ASTNode} right - The right child node of the operation.
 * @returns {CppBinaryOp} Returns a new binary operator node for the C++ AST.
 */
function CppBinaryOp(opChar, left, right)
{
    /**
     * The string representation of the operator.
     * 
     * @type String
     */
    this.OpChar = opChar;
    
    if (arguments.length == 3)
        this.Children = [ left, right ];
    
    
    /**
     * Sets the left child of the node.
     * 
     * @param {ASTNode} left - The left child to set.
     */
    this.SetLeft = function(left)
    {
        this.Children[0] = left;
    }
    
    /**
     * Sets the right child of the node.
     * 
     * @param {ASTNode} right - The right child to set.
     */
    this.SetRight = function(right)
    {
        this.Children[1] = right;
    }
    
    /**
     * Takes a line whose highest level node corresponds to this node and generates
     * a set of children from it.
     * 
     * @param {String} line - The string of code to parse into childen.
     */
    this.Parse = function(line)
    {
        var subLines = this.SeparateLine(line, this.OpChar);
        
        if (subLines.length == 2)
            this.Children = [NodeBuilder.ParseLine(subLines[0]), NodeBuilder.ParseLine(subLines[1]) ];
    }
    
    /**
     * Converts this node into a string of code.
     * 
     * @returns {String} Returns a string that represents the node.
     */
    this.DeParse = function()
    {
        return this.Children[0].DeParse() + " " + this.OpChar + " " + this.Children[1].DeParse();
    }
    
    /**
     * Finds the correct location in a line of code where the operator for this node is, and separates
     * the line into two sublines, using the found location as a separator point.
     * 
     * @param {String} line - The line to separate.
     * @param {String} opChar - The operation character to look for.
     * @returns {Array} Returns the two separated sublines.
     */
    this.SeparateLine = function(line, opChar)
    {
        var scope = 0;
        var loc = -1;
        var opScope = 0;
        
        for (var i = 0; i < line.length; i++)
        {
            var char = line[i];
            
            if (char == "(")
                scope++;
            else if (char == ")")
                scope--;
            
            if (char == opChar)
            {
                if (loc == -1 || scope < opScope)
                {
                    loc = i;
                    opScope = scope;
                }
            }
        }
        
        if (loc > -1)
        {
            var left = line.substr(0, loc - 1);
            var right = line.substr(loc + 1, line.length - loc);
            
            return [left, right];
        }
        else
        {
            return new Array();
        }
    }
}

CppBinaryOp.prototype = new ASTNode();