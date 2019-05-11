/* eslint-env node */
function depth(root) {
    return depthOfTree(root);
}

function depthOfTree(root) {

    if (root == null) {
        return 0;
    }

    var depthLeft = depthOfTree(root.left);
    var depthRight = depthOfTree(root.right);

    return 1 + Math.max(depthLeft, depthRight);

}

exports.depth = depth;
