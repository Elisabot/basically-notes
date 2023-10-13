// elegant solution for summing children of binary trees

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var checkTree = function(root) {

	// Calculate the sum the child nodes
	let childNodesSum = 0

	if (root.left) {
		childNodesSum += root.left.val;
	}

	if (root.right) {
		childNodesSum += root.right.val;
	}

	// Evaluate if the root = children 
	if (root.val == childNodesSum) {
		return true;
	} else {
		return false;
	}
};
