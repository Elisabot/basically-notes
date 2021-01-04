 # trees
 # where a linked list needs only two things to be itself
class Node {
  int data
  Node next
}

 # a tree node has multiple connections
 # for example here's a node bearing three children
class Node {
  int data
  Node child1
  Node child2
  Node child3
}

# or this binary tree node
class Node {
  int data
  Node left
  Node right
}

# that math word you may be tring to remember is k-nary
# where k is any number of nodes

# also yes, types of binary search trees include
# ordered or sorted binary trees
# where a node's left subtree is less than its right subtree

# trees can contain different kinds of data, like strings
# a linked list is a tree
# two nodes can never reference the same child node
# root nodes are identifiable because they have no parent