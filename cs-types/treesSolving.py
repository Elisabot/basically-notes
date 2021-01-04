# solving a binary tree be like
class Node {
  int data
  Node left
  Node right
}

# we can write a recursive function to all nodes
# including terminal nodes
# it's all O(1) but 
# it's done for each piece of the tree so *n
# time complexity O(n) memory of O(1)

def find_sum(root):
if root == null:
  return 0 
return root.data + find_sum(root.left) + find_sum(root.right)