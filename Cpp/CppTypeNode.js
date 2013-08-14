/**
 * A type node, which always wraps a variable or function node, stores it's child's type.
 * As C++ has typedef features, this forms a generic type node that simply stores the type
 * as a string.  These can be resolved to either base types or typedef types.
 * 
 * @param {String} type
 * @returns {CppTypeNode} Returns a new C++ type node.
 */
function CppTypeNode(type)
{
    this.Type = type;
}

CppTypeNode.prototype = new ASTNode();