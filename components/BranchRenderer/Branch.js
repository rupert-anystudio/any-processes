export const Branch = ({ node, level = 0, renderNode, renderAsChildren }) => {
  const hasChildren = node.nodes && node.nodes.length > 0

  const renderChildren = () => {
    if (!hasChildren) return null
    return node.nodes.map(subnode => (
      <Branch
        key={subnode.id}
        node={subnode}
        level={level + 1}
        renderNode={renderNode}
      />
    ))
  }

  return renderNode({ node, level, renderChildren })

  // const children = renderChildren()

  // if (renderAsChildren) return (
  //   <>
  //     {renderNode({ node, level, children })}
  //   </>
  // )
  // return (
  //   <>
  //     {renderNode({ node, level })}
  //     {children}
  //   </>
  // )
}