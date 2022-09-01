import { Branch } from './Branch'

export const BranchRenderer = ({ nodes, renderNode, renderAsChildren = true }) => {
  return (
    <>
      {nodes.map(node => (
        <Branch
          key={node.id}
          node={node}
          renderNode={renderNode}
          renderAsChildren={renderAsChildren}
        />
      ))}
    </>
  )
}